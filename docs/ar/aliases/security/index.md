---
title: اختصارات Security | Dotfiles
description: اختصارات أمنية لثبات الملفات وحماية الإعدادات. قفل وإلغاء قفل ملفات الشل الحرجة.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: اختصارات Security preview
canonical: /ar/aliases/security/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: اختصارات Security
pageType: docs
schemaType: WebPage
metaTitle: اختصارات Security - Dotfiles (AR)
permalink: /ar/aliases/security/
sidebar: true
meta:
  - name: keywords
    content: security, immutability, file lock, shell aliases, dotfiles, configuration protection
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات أمنية لثبات الملفات وحماية الإعدادات. قفل وإلغاء قفل ملفات الشل الحرجة.
  - name: twitter:title
    content: اختصارات Security - Dotfiles
  - name: og:title
    content: اختصارات Security - Dotfiles
  - name: og:description
    content: اختصارات أمنية لثبات الملفات وحماية الإعدادات. قفل وإلغاء قفل ملفات الشل الحرجة.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Security

حماية ملفات الإعدادات الحرجة بضوابط الثبات.

## نظرة عامة

هذه الاختصارات معرّفة في `security.aliases.sh` ويتم تحميلها تلقائيًا بواسطة Chezmoi.

## المرجع

### الثبات

| الاختصار | الوصف |
|:---|:---|
| `lock-configs` | قفل الملفات الحرجة لمنع التعديل |
| `unlock-configs` | إلغاء قفل الملفات الحرجة للتحرير |
| `check-locks` | فحص حالة قفل الملفات الحرجة |
