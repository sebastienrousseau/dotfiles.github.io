---
title: ملحق مرجع Benchmarks | Dotfiles
description: مرجع كامل للاختصارات والدوال المساعدة لـ Benchmarks في Dotfiles v0.2.495. يتضمن كل اختصار وأمثلة الاستخدام ودوال Shell لنظامي macOS وLinux وWSL.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: ملحق مرجع Benchmarks | Dotfiles preview
canonical: /ar/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /ar/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, مرجع, اختصارات, شل, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: مرجع كامل للاختصارات لـ Benchmarks في Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: مرجع كامل للاختصارات لـ Benchmarks في Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – مصممة لتناسب حياتك في Shell
  - name: og:locale
    content: ar_SA
---

# ملحق مرجع Benchmarks

## ملفات المصدر

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## مرجع الاختصارات

| الاختصار | الأمر |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## التحقق

- شغّل `chezmoi apply` بعد تحديث الاختصارات.
- شغّل `dot doctor` للتحقق من حالة Shell.
