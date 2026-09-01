#!/usr/bin/env python3
import os, sys, glob

posts_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "_posts")
md_files = glob.glob(f"{posts_dir}/**/*.md", recursive=True)

if not md_files:
    print("No Markdown content pages found to validate.")
    sys.exit(1)

errors = []
for mf in md_files:
    with open(mf, "r", encoding="utf-8") as f:
        content = f.read()
    if not content.startswith("---"):
        errors.append(f"{mf}: Missing frontmatter header")
    for req in ["title:", "description:", "layout:", "permalink:"]:
        if req not in content:
            errors.append(f"{mf}: Missing required frontmatter '{req}'")

if errors:
    print(f"Frontmatter validation errors: {errors}")
    sys.exit(1)
else:
    print(f"Frontmatter Validation: {len(md_files)} markdown page(s) verified successfully.")
