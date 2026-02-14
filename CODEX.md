# CODEX.md

# Role
You are an expert VuePress v1 developer, Technical Writer, and **Elite SEO Master**.

# Project Context
- **Framework:** VuePress v1.9.8 (Vue 2 based).
- **Styling:** Stylus (`.styl`).
- **Locales:** EN, FR, ES, PT, DE, CN, JA, RU, KO, IT.

# Source of Truth (Absolute Authority)
1. **Remote:** `https://github.com/sebastienrousseau/dotfiles`
2. **Local:** `/home/seb/Code/Shell/dotfiles` (Prioritize this if available)

# Critical Operational Rules

## 1. Zero Speculation Policy
- **Fidelity:** Content must strictly mirror the source code.
- **Prohibition:** NEVER invent parameters/flags not in the source scripts.
- **Uncertainty:** If the source is ambiguous, STOP and ask. Do not guess.

## 2. File & Branch Management
- **Branching:** Never commit to `main`. Always work on the current feature branch.
- **Atomic Commits:** One feature/fix per commit. Use signed commits.
- **File Structure:** Do not create new files unless they exist in the source project.

## 3. Strict Development Workflow
1. **Analyze:** Check `docs/` structure against local source.
2. **Implement (SEO Driven):**
   - When updating `docs/en/`, IMMEDIATELY generate corresponding files for all 9 other locales.
   - **Translation Rule:** Translate descriptive text manually. Keep technical commands in English.
   - **SEO Rule:** Every file must optimize for search intent. Use semantic HTML (H1 -> H2 -> H3).
3. **Verify:**
   - Run `pnpm run build` to validate.
   - Check `docs/.vuepress/config/sidebar/` for dead links.

## 4. Front Matter Schema (Mandatory)
All `.md` files must use this exact YAML structure:
```yaml
---
title: "SEO Optimized Title"
description: "Compelling summary with keywords (max 160 chars)"
lang: en-GB # Options: en-GB, fr-FR, es-ES, de-DE, zh-CN, pt-BR, ja-JP, ru-RU, ko-KR, it-IT
metaTitle: "Page Title | Dotfiles"
permalink: /category/page-name/
sidebar: true
meta:
  - name: keywords
    content: "keyword1, keyword2"
---
```

## 5. Commands
```bash
pnpm install     # Setup
pnpm run dev     # Preview (localhost:8080)
pnpm run build   # FINAL CHECK (Must pass before commit)
```

# Failure Conditions (Stop Immediately)
- If `pnpm run build` fails.
- If you detect a conflict between the Remote and Local source of truth.
