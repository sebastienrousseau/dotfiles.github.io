#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0 OR MIT
# Copyright (c) 2015-2026 Sebastien Rousseau
"""Build dotfiles.io with ssg and the vendored Voxt theme.

    python3 scripts/build-site.py [--out DIR] [--serve PORT]

Every page in content/ gets the site-wide fields below merged into its
front matter (a page's own value wins), ssg builds the result with the
layouts in _layouts/, and the output is then checked: every internal link
resolves, and no page references a third-party origin other than the
project's own links. Standard library only; needs ssg on PATH (or SSG=).
"""

from __future__ import annotations

import argparse
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
RELEASE = "v0.2.522"

SITE = {
    "name": ".dotfiles",
    "author": "Sebastien Rousseau",
    "language": "en-GB",
    "release": RELEASE,
    "repo_url": "https://github.com/sebastienrousseau/dotfiles",
    "form_origin": SITE_URL.rstrip("/"),
    "eyebrow": ".dotfiles",
    "logo_alt": "",
    "label_home": ".dotfiles home",
    "label_menu": "Menu",
    "label_menu_toggle": "Toggle navigation menu",
    "label_nav": "Main navigation",
    "label_github": "View .dotfiles on GitHub",
    "label_theme": "Theme",
    "label_theme_system": "System",
    "label_theme_light": "Light",
    "label_theme_dark": "Dark",
    "label_docs": "Documentation",
    "label_project": "Project",
    "label_contributing": "Contributing",
    "label_security_policy": "Security policy",
    "nav_features": "Features",
    "nav_install": "Install",
    "nav_platforms": "Platforms",
    "nav_security": "Security",
    "nav_faq": "FAQ",
    "nav_docs": "Docs",
    "cta_primary": "Install",
    "cta_docs": "Read the docs",
    "footer_desc": "Chezmoi-managed dotfiles for macOS, Linux, WSL and PowerShell.",
    "footer_copy": f"© 2015–{date.today().year} Sebastien Rousseau. Apache-2.0 OR MIT.",
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


def check(site: Path) -> list[str]:
    problems = []
    for page in sorted(site.rglob("*.html")):
        rel = page.relative_to(site).as_posix()
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
            f'site_description = "{SITE["footer_desc"]}"\n'
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
        problems = check(work_p / "out")
        for p in problems:
            print(f"build-site: {p}", file=sys.stderr)
        if problems:
            return 1
        if out.exists():
            shutil.rmtree(out)
        shutil.move(str(work_p / "out"), out)
    print(f"build-site: built into {out}; internal links and external origins checked")
    if args.serve:
        handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(out))
        print(f"serving http://127.0.0.1:{args.serve}/ (Ctrl-C to stop)")
        http.server.ThreadingHTTPServer(("127.0.0.1", args.serve), handler).serve_forever()
    return 0


if __name__ == "__main__":
    sys.exit(main())
