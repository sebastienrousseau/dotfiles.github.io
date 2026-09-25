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
import hashlib
import functools
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
RELEASE = "v0.2.523"

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
    "copyright": f"© 2015–{date.today().year} Sebastien Rousseau. Licensed under Apache-2.0 OR MIT.",
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
        (work_p / "ssg.toml").write_text(
            f'site_name = ".dotfiles"\n'
            f'site_title = ".dotfiles"\n'
            f'site_description = "{SITE["footer_note"]}"\n'
            f'base_url = "{SITE_URL}"\n'
            f'language = "en-GB"\n'
            f'content_dir = "{work_p / "content"}"\n'
            f'template_dir = "{ROOT / "_layouts"}"\n'
            f'output_dir = "{work_p / "out"}"\n',
            encoding="utf-8",
        )
        subprocess.run([ssg, "build", "-f", str(work_p / "ssg.toml"), "--quiet"], check=True)
        for extra in ("favicon.ico", "CNAME"):
            src = ROOT / "_layouts" / extra if extra == "favicon.ico" else ROOT / extra
            if src.is_file():
                shutil.copy2(src, work_p / "out" / extra)
        # ssg injects a code-highlighting sheet whose colours follow
        # prefers-color-scheme rather than Lucid's theme toggle; Lucid styles
        # code itself, so drop it as the doc.dotfiles.io build does.
        for css in (work_p / "out").glob("highlight*.css"):
            css.unlink()
        for page in (work_p / "out").rglob("*.html"):
            text = page.read_text(encoding="utf-8")
            stripped = re.sub(r'\s*<link rel="stylesheet" href="/highlight\.css">', "", text)
            if stripped != text:
                page.write_text(stripped, encoding="utf-8")
        problems = check(work_p / "out")
        for p in problems:
            print(f"build-site: {p}", file=sys.stderr)
        if problems:
            return 1
        if out.exists():
            shutil.rmtree(out)
        shutil.move(str(work_p / "out"), out)
    print(f"build-site: built into {out}; internal links, external origins and SRI hashes checked")
    if args.serve:
        handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(out))
        print(f"serving http://127.0.0.1:{args.serve}/ (Ctrl-C to stop)")
        http.server.ThreadingHTTPServer(("127.0.0.1", args.serve), handler).serve_forever()
    return 0


if __name__ == "__main__":
    sys.exit(main())
