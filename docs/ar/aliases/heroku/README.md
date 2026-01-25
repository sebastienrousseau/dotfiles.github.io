---
title: "اختصارات Heroku: مختصرات الشل لـ Heroku CLI"
description: "سرّع سير عمل Heroku مع أكثر من 200 اختصار شل للتطبيقات وقواعد البيانات والخطوط والنشر."
lang: ar-SA
metaTitle: "اختصارات Heroku | Dotfiles"
permalink: /ar/aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: heroku aliases, heroku cli shortcuts, heroku shell commands, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات Heroku | Dotfiles
  - name: twitter:description
    content: سرّع سير عمل Heroku مع أكثر من 200 اختصار شل للتطبيقات وقواعد البيانات والخطوط والنشر.
  - name: og:title
    content: اختصارات Heroku | Dotfiles
  - name: og:description
    content: سرّع سير عمل Heroku مع أكثر من 200 اختصار شل للتطبيقات وقواعد البيانات والخطوط والنشر.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Heroku

مختصرات شل لـ Heroku CLI، معرّفة في `heroku.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi.

## نظرة عامة

توفر هذه المجموعة أكثر من 200 اختصار لـ [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)، تغطي إدارة التطبيقات والإضافات وقواعد البيانات والخطوط والحاويات والمزيد.

## المرجع

### الأوامر العامة

| الاختصار | الوصف |
|-------|-------------|
| `hkk` | اختصار Heroku CLI |
| `hkh` | عرض المساعدة لـ Heroku |
| `hkl` | سرد جميع الأوامر |
| `hklg` | عرض مخرجات السجل الأخيرة |
| `hks` | عرض الحالة الحالية لمنصة Heroku |
| `hku` | تحديث Heroku CLI |

### التطبيقات

| الاختصار | الوصف |
|-------|-------------|
| `hkapc` | إنشاء تطبيق جديد |
| `hkapi` | عرض معلومات التطبيق المفصلة |
| `hkapk` | حذف تطبيق نهائيًا |
| `hkapl` | سرد تطبيقاتك |
| `hkapo` | فتح التطبيق في متصفح الويب |
| `hkapr` | إعادة تسمية تطبيق |

### الإضافات

| الاختصار | الوصف |
|-------|-------------|
| `hkadc` | إنشاء مورد إضافة جديد |
| `hkadi` | عرض معلومات مفصلة عن الإضافة |
| `hkadk` | حذف مورد إضافة نهائيًا |
| `hkadl` | سرد الإضافات والمرفقات |

### متغيرات الإعدادات

| الاختصار | الوصف |
|-------|-------------|
| `hkcfg` | عرض قيمة إعداد واحدة للتطبيق |
| `hkcfs` | تعيين متغير إعداد واحد أو أكثر |
| `hkcfu` | إلغاء تعيين متغير إعداد واحد أو أكثر |
| `hkcfv` | عرض متغيرات الإعدادات للتطبيق |

### PostgreSQL

| الاختصار | الوصف |
|-------|-------------|
| `hkpg` | عرض معلومات قاعدة البيانات |
| `hkpgbk` | سرد النسخ الاحتياطية لقاعدة البيانات |
| `hkpgbkc` | التقاط نسخة احتياطية جديدة |
| `hkpgpsql` | فتح شل psql لقاعدة البيانات |

### الخطوط

| الاختصار | الوصف |
|-------|-------------|
| `hkpipe` | سرد الخطوط التي يمكنك الوصول إليها |
| `hkpipec` | إنشاء خط جديد |
| `hkpipep` | ترقية أحدث إصدار لهذا التطبيق |
| `hkpipek` | حذف خط |

### الإصدارات

| الاختصار | الوصف |
|-------|-------------|
| `hkrel` | عرض الإصدارات للتطبيق |
| `hkreli` | عرض معلومات مفصلة لإصدار |
| `hkrelr` | التراجع إلى إصدار سابق |
