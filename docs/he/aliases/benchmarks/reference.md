---
title: נספח הפניה Benchmarks | Dotfiles
description: הפניה מלאה לקיצורים ופונקציות עזר עבור Benchmarks ב-Dotfiles v0.2.495. כולל כל קיצור, דוגמת שימוש ופונקציית Shell עבור macOS, Linux ו-WSL.
lang: he-IL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: נספח הפניה Benchmarks | Dotfiles preview
canonical: /he/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /he/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, הפניה, קיצורים, של, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: הפניה מלאה לקיצורים עבור Benchmarks ב-Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: הפניה מלאה לקיצורים עבור Benchmarks ב-Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – מעוצב להתאים לחיי ה-Shell שלך
  - name: og:locale
    content: he_IL
---

# נספח הפניה Benchmarks

## קבצי מקור

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## הפניית קיצורים

| קיצור | פקודה |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## אימות

- הריצו `chezmoi apply` לאחר עדכון הקיצורים.
- הריצו `dot doctor` כדי לאמת את מצב ה-Shell.
