---
title: "اختصارات NPM: بسّط إدارة حزم Node"
description: "سرّع سير عمل npm مع اختصارات شل بديهية لأوامر install وbuild وtest وpublish."
lang: ar-SA
metaTitle: "اختصارات NPM | Dotfiles"
permalink: /ar/aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: npm aliases, node package manager, npm shortcuts, shell aliases, dotfiles, npm commands
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات NPM | Dotfiles
  - name: twitter:description
    content: سرّع سير عمل npm مع اختصارات شل بديهية لأوامر install وbuild وtest وpublish.
  - name: og:title
    content: اختصارات NPM | Dotfiles
  - name: og:description
    content: سرّع سير عمل npm مع اختصارات شل بديهية لأوامر install وbuild وtest وpublish.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات NPM

بسّط تطوير Node.js بأوامر مختصرة لمدير حزم npm.

## نظرة عامة

هذه الاختصارات معرّفة في `npm.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi. توفر وصولًا سريعًا لعمليات npm الشائعة.

## المرجع

### إدارة الحزم

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `npi` | `npm install` | تثبيت حزمة npm |
| `npg` | `npm install -g` | حزمة npm عامة |
| `nprm` | `npm uninstall` | إزالة حزمة npm |
| `npu` | `npm update` | تحديث حزمة npm |
| `npl` | `npm list` | سرد حزم npm |
| `npc` | `npm cache` | ذاكرة تخزين حزم npm |

### السكريبتات

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `npr` | `npm run` | تشغيل سكريبت npm |
| `nps` | `npm start` | بدء سكريبت npm |
| `npb` | `npm run build` | بناء سكريبت npm |
| `npd` | `npm run dev` | سكريبت التطوير npm |
| `npt` | `npm test` | اختبار سكريبت npm |
| `nprw` | `npm run watch` | تشغيل سكريبت npm watch |
| `npsv` | `npm run serve` | خدمة سكريبت npm |

### النشر والتحليل

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `npp` | `npm publish` | نشر حزمة npm |
| `npa` | `npm audit` | تدقيق حزم npm |
| `npx` | `npm exec` | تنفيذ حزمة npm |
| `npy` | `npm why` | سبب حزمة npm |
