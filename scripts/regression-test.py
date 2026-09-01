#!/usr/bin/env python3
import os, sys, re, json

def run_regression():
    repo_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    docs_dir = os.path.join(repo_path, "docs")
    errors = []

    print(f"Running Automated Regression Test on: {repo_path}")

    required_files = ["robots.txt", "sitemap.xml", "manifest.json", "rss.xml", "search-index.json", "CNAME", "llms.txt"]
    for rf in required_files:
        fpath = os.path.join(docs_dir, rf)
        if not os.path.isfile(fpath) or os.path.getsize(fpath) == 0:
            errors.append(f"Missing or empty essential file: {rf}")

    js_files = [f for f in os.listdir(docs_dir) if (f.startswith("main.") and f.endswith(".js")) or f == "main.js"]
    if not js_files:
        errors.append("Missing client engine script (main.js)")
    else:
        for js_f in js_files:
            with open(os.path.join(docs_dir, js_f), "r", errors="ignore") as fp:
                txt = fp.read()
            if "applyTheme" not in txt:
                errors.append(f"{js_f} is missing Theme Switcher")
            if "searchModal" not in txt:
                errors.append(f"{js_f} is missing Search Engine")
            if "navbarToggle" not in txt:
                errors.append(f"{js_f} is missing Mobile Nav toggle")

    html_files = glob_html(docs_dir)
    for hf in html_files:
        rel = os.path.relpath(hf, docs_dir)
        with open(hf, "r", errors="ignore") as fp:
            c = fp.read()
        if '<meta http-equiv="Content-Security-Policy"' not in c:
            errors.append(f"{rel} missing CSP meta tag")
        if 'class="skip-link"' not in c:
            errors.append(f"{rel} missing skip-link")

    if errors:
        print(f"\n[❌ ERRORS ({len(errors)})]:")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)
    else:
        print("\n[✅ PASSED]: 100% regression tests passed with zero errors!\n")

def glob_html(d):
    res = []
    for r, _, files in os.walk(d):
        for f in files:
            if f.endswith(".html"):
                res.append(os.path.join(r, f))
    return res

if __name__ == "__main__":
    run_regression()
