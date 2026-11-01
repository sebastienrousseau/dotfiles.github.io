#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0 OR MIT
# Copyright (c) 2015-2026 Sebastien Rousseau
"""Build dotfiles.io with ssg and the Lucid theme shared with doc.dotfiles.io.

    python3 scripts/build-site.py [--out DIR] [--serve PORT]

Every page in content/ gets the site-wide fields below merged into its
front matter (a page's own value wins), ssg builds the result with the
layouts in _layouts/ (Lucid, as on doc.dotfiles.io), and the output is
then checked: every internal link
resolves, and no page references a third-party origin other than the
project's own links. Standard library only; needs ssg on PATH (or SSG=).
"""

from __future__ import annotations

import argparse
import base64
import functools
import hashlib
import http.server
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE_URL = "https://dotfiles.io/"
RELEASE = "v0.2.530"
AUTHOR_URL = "https://sebastienrousseau.com/"
COPYRIGHT_YEARS = f"© 2015–{date.today().year}"
AUTHOR_NAME = "Sebastien Rousseau"
COPYRIGHT_HOLDER = f"{COPYRIGHT_YEARS} {AUTHOR_NAME}"
COPYRIGHT_LICENCE = "Licensed under Apache-2.0 OR MIT."

SITE = {
    # The fields Lucid's layouts read, matching the doc.dotfiles.io build
    # (tools/docs/build-manual-site.py in the dotfiles repository).
    "name": ".dotfiles",
    "author": "Sebastien Rousseau",
    "language": "en-GB",
    "release": RELEASE,
    "base_path": "/",
    "root": "/",
    "locale_path": "/",
    "site_url": SITE_URL,
    "form_origin": "",
    "docs_url": "https://doc.dotfiles.io/",
    "repo_url": "https://github.com/sebastienrousseau/dotfiles",
    "nav_features": "Features",
    "nav_install": "Install",
    "nav_platforms": "Platforms",
    "nav_docs": "Docs",
    "nav_repo": "GitHub",
    "label_skip": "Skip to main content",
    "label_menu": "Menu",
    "label_nav": "Main",
    "label_theme": "Theme",
    "label_theme_system": "System",
    "label_theme_light": "Light",
    "label_theme_dark": "Dark",
    "footer_note": "Chezmoi-managed dotfiles for macOS, Linux, WSL and PowerShell — signed, attested and multi-shell. Documentation at doc.dotfiles.io.",
    "copyright": f"{COPYRIGHT_HOLDER}. {COPYRIGHT_LICENCE}",
    # The footer prints the parts apart so it can link the author's name
    # to the author's own site (rel="author"); the feeds keep the plain
    # line.
    "copyright_years": COPYRIGHT_YEARS,
    "author_name": AUTHOR_NAME,
    "copyright_licence": COPYRIGHT_LICENCE,
    "author_url": AUTHOR_URL,
}

FRONT = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
HREF = re.compile(r'(?:href|src)="([^"]+)"')
ALLOWED_EXTERNAL = (
    "https://github.com/sebastienrousseau/",
    "https://doc.dotfiles.io/",
    "https://static-site-generator.com/",
    "https://themes.static-site-generator.com/",
    "https://skeletonic.com/",
    "https://docs.github.com/",
    "https://dotfiles.io/",
    AUTHOR_URL,
)


def parse_front(text: str) -> tuple[dict, str]:
    m = FRONT.match(text)
    if not m:
        return {}, text
    fields = {}
    for line in m.group(1).splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        key, _, value = line.partition(":")
        value = value.strip()
        fields[key.strip()] = json.loads(value) if value.startswith('"') else value
    return fields, text[m.end():]


def prepare(content_out: Path) -> None:
    for src in sorted((ROOT / "content").glob("*.md")):
        fields, body = parse_front(src.read_text(encoding="utf-8"))
        merged = {**SITE, **fields}
        merged.setdefault("headline", merged.get("title", ""))
        front = "".join(f"{k}: {json.dumps(v, ensure_ascii=False)}\n" for k, v in merged.items())
        (content_out / src.name).write_text(f"---\n{front}---\n{body}", encoding="utf-8")


SRI = re.compile(r'(?:href|src)="/([^"]+)" integrity="sha(256|384|512)-([^"]+)"')


def check(site: Path) -> list[str]:
    problems = []
    for page in sorted(site.rglob("*.html")):
        rel = page.relative_to(site).as_posix()
        # Recompute every integrity hash: ssg 0.0.63's own audit reports
        # mismatches the files contradict, so the build checks the real ones.
        for path, alg, want in SRI.findall(page.read_text(encoding="utf-8")):
            target = site / path
            got = base64.b64encode(hashlib.new(f"sha{alg}", target.read_bytes()).digest()).decode() if target.is_file() else ""
            if got != want:
                problems.append(f"{rel}: integrity mismatch for /{path}")
        for ref in HREF.findall(page.read_text(encoding="utf-8")):
            if ref.startswith(("#", "mailto:", "data:")):
                continue
            if ref.startswith(("http://", "https://", "//")):
                if not ref.startswith(ALLOWED_EXTERNAL):
                    problems.append(f"{rel}: unexpected external reference {ref}")
                continue
            path = ref.split("#", 1)[0].split("?", 1)[0]
            target = site / path.lstrip("/") if path.startswith("/") else page.parent / path
            if path.endswith("/") or path == "":
                target = target / "index.html"
            if not target.exists():
                problems.append(f"{rel}: broken link {ref}")
    return problems


def write_sitemap(out: Path) -> None:
    base = SITE_URL.rstrip("/")
    urls = sorted(
        f"{base}/" if p.parent == out else f"{base}/{p.parent.relative_to(out).as_posix()}/"
        for p in out.rglob("index.html")
        if not {"_csp", "404", "offline", "thanks"} & set(p.relative_to(out).parts)
    )
    items = "\n".join(
        f"  <url>\n    <loc>{u}</loc>\n    <changefreq>weekly</changefreq>\n  </url>"
        for u in urls
    )
    (out / "sitemap.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{items}\n</urlset>\n',
        encoding="utf-8",
    )


NOT_FOUND = SITE_URL + "404/"
ROBOTS_META = re.compile(r'<meta name="robots" content="[^"]*"\s*/?>')
CANONICAL = re.compile(r'<link rel="canonical" href="([^"]+)"')
NOINDEX = re.compile(r'<meta name="robots" content="[^"]*\bnoindex')
HREFLANG = re.compile(r'<link\b[^>]*\bhreflang="[^"]*"[^>]*\bhref="([^"]+)"')
FEED_BLOCKS = {"atom.xml": r"\s*<entry>.*?</entry>", "rss.xml": r"\s*<item>.*?</item>"}


def move_404(out: Path) -> None:
    """Serve the not-found page as GitHub Pages expects it: /404.html.

    ssg writes content/404.md to /404/index.html, a URL that answers 200
    (a soft 404 to a crawler) while Pages falls back to its own page for a
    missing path. The page is marked noindex and names /404.html as its URL.
    """
    page = out / "404" / "index.html"
    text = page.read_text(encoding="utf-8").replace(NOT_FOUND, SITE_URL + "404.html")
    (out / "404.html").write_text(
        ROBOTS_META.sub('<meta name="robots" content="noindex">', text, count=1), encoding="utf-8"
    )
    shutil.rmtree(page.parent)


def drop_from_feeds(out: Path, url: str) -> None:
    for name, block in FEED_BLOCKS.items():
        feed = out / name
        text = feed.read_text(encoding="utf-8")
        kept = re.sub(block, lambda m: "" if url in m.group(0) else m.group(0), text, flags=re.DOTALL)
        feed.write_text(kept, encoding="utf-8")
    feed = out / "feed.json"
    data = json.loads(feed.read_text(encoding="utf-8"))
    data["items"] = [i for i in data.get("items", []) if url not in (i.get("url"), i.get("id"))]
    feed.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def search_engine_files(out: Path) -> None:
    """The not-found page, feeds without it, one sitemap and one robots.txt.

    ssg also writes a sitemap.xml, news-sitemap.xml and robots.txt beside
    every page; crawlers read only the root robots.txt, which names only
    /sitemap.xml, so the rest (and the news sitemap: this is not a news
    site) go.
    """
    move_404(out)
    drop_from_feeds(out, NOT_FOUND)
    for name in ("sitemap.xml", "news-sitemap.xml", "robots.txt"):
        for found in out.rglob(name):
            if found.parent != out or name == "news-sitemap.xml":
                found.unlink()
    write_sitemap(out)


def page_for(site: Path, url: str) -> Path | None:
    if not url.startswith(SITE_URL):
        return None
    path = url[len(SITE_URL):].split("#", 1)[0]
    target = site / path / "index.html" if path == "" or path.endswith("/") else site / path
    return target if target.is_file() else None


def sitemap_problems(site: Path) -> list[str]:
    """Every sitemap URL is a page, not noindex, whose canonical is that URL."""
    problems = []
    for url in re.findall(r"<loc>([^<]+)</loc>", (site / "sitemap.xml").read_text(encoding="utf-8")):
        page = page_for(site, url)
        text = page.read_text(encoding="utf-8") if page else ""
        canonical = CANONICAL.search(text)
        if NOINDEX.search(text) or not canonical or canonical.group(1) != url:
            problems.append(f"sitemap.xml: {url} is not an indexable page with that canonical URL")
    return problems


def check_seo(site: Path) -> list[str]:
    """The sitemap, hreflang alternates and feeds name only real pages."""
    problems = sitemap_problems(site)
    for page in site.rglob("*.html"):
        refs = HREFLANG.findall(page.read_text(encoding="utf-8"))
        rel = page.relative_to(site).as_posix()
        problems += [f"{rel}: hreflang alternate {r} is not a page" for r in refs if not page_for(site, r)]
    for name in ("atom.xml", "rss.xml", "feed.json"):
        urls = re.findall(re.escape(SITE_URL) + r'[^"<\s]*', (site / name).read_text(encoding="utf-8"))
        problems += [f"{name}: {u} is not a page" for u in urls if not page_for(site, u)]
    not_found = site / "404.html"
    if not not_found.is_file() or not NOINDEX.search(not_found.read_text(encoding="utf-8")):
        problems.append("404.html: missing, or not marked noindex")
    return problems


def write_config(work: Path) -> Path:
    config = work / "ssg.toml"
    config.write_text(
        f'site_name = ".dotfiles"\n'
        f'site_title = ".dotfiles"\n'
        f'site_description = "{SITE["footer_note"]}"\n'
        f'base_url = "{SITE_URL}"\n'
        f'language = "en-GB"\n'
        f'content_dir = "{work / "content"}"\n'
        f'template_dir = "{ROOT / "_layouts"}"\n'
        f'output_dir = "{work / "out"}"\n',
        encoding="utf-8",
    )
    return config


def finish(out: Path) -> list[str]:
    """Post-process ssg's output in place and return what the checks find."""
    for extra in ("favicon.ico", "CNAME"):
        src = ROOT / "_layouts" / extra if extra == "favicon.ico" else ROOT / extra
        if src.is_file():
            shutil.copy2(src, out / extra)
    search_engine_files(out)
    # ssg injects a code-highlighting sheet whose colours follow
    # prefers-color-scheme rather than Lucid's theme toggle; Lucid styles
    # code itself, so drop it as the doc.dotfiles.io build does.
    for css in out.glob("highlight*.css"):
        css.unlink()
    for page in out.rglob("*.html"):
        text = page.read_text(encoding="utf-8")
        stripped = re.sub(r'\s*<link rel="stylesheet" href="/highlight\.css">', "", text)
        if stripped != text:
            page.write_text(stripped, encoding="utf-8")
    return check(out) + check_seo(out)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--out", default=str(ROOT / "_site"))
    ap.add_argument("--serve", type=int, metavar="PORT")
    args = ap.parse_args()
    ssg = os.environ.get("SSG", "ssg")
    if not shutil.which(ssg):
        print("build-site: ssg not found (cargo install ssg --locked, or set SSG=)", file=sys.stderr)
        return 127
    out = Path(args.out).resolve()
    with tempfile.TemporaryDirectory(prefix="dotfiles-io.") as work:
        work_p = Path(work)
        (work_p / "content").mkdir()
        prepare(work_p / "content")
        subprocess.run([ssg, "build", "-f", str(write_config(work_p)), "--quiet"], check=True)
        problems = finish(work_p / "out")
        for p in problems:
            print(f"build-site: {p}", file=sys.stderr)
        if problems:
            return 1
        if out.exists():
            shutil.rmtree(out)
        shutil.move(str(work_p / "out"), out)
    print(f"build-site: built into {out}; internal links, external origins, SRI hashes, sitemap and feeds checked")
    if args.serve:
        handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(out))
        print(f"serving http://127.0.0.1:{args.serve}/ (Ctrl-C to stop)")
        http.server.ThreadingHTTPServer(("127.0.0.1", args.serve), handler).serve_forever()
    return 0


if __name__ == "__main__":
    sys.exit(main())
