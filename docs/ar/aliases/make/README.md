---
title: "اختصارات Make: بسّط سير عمل البناء"
description: "اختصارات لأوامر Make. بسّط البناء والاختبارات وأتمتة المشاريع."
lang: ar-SA
metaTitle: "اختصارات Make | Dotfiles"
permalink: /ar/aliases/make/
sidebar: true
meta:
  - name: keywords
    content: make aliases, makefile shortcuts, build automation, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات Make | Dotfiles
  - name: twitter:description
    content: اختصارات لأوامر Make. بسّط البناء والاختبارات وأتمتة المشاريع.
  - name: og:title
    content: اختصارات Make | Dotfiles
  - name: og:description
    content: اختصارات لأوامر Make. بسّط البناء والاختبارات وأتمتة المشاريع.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Make

بسّط سير عمل البناء بأوامر مختصرة لـ Make.

## نظرة عامة

توفر هذه الاختصارات وصولًا سريعًا لأهداف Make الشائعة. معرّفة في `make.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi كجزء من إعدادات Dotfiles العالمية.

## المرجع

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `mk` | `make` | تشغيل هدف Make الافتراضي |
| `mka` | `make all` | بناء جميع الأهداف |
| `mkc` | `make clean` | تنظيف مخرجات البناء |
| `mkd` | `make doc` | إنشاء التوثيق |
| `mkf` | `make format` | تنسيق ملفات المصدر |
| `mkh` | `make help` | عرض معلومات المساعدة |
| `mki` | `make install` | تثبيت المشروع |
| `mkr` | `make run` | تشغيل المشروع |
| `mkt` | `make test` | تشغيل الاختبارات |
