---
title: "اختصارات Find: أوامر بحث سريعة عن الملفات"
description: "بسّط عمليات البحث عن الملفات مع اختصارات fd. مخرجات سريعة وملونة وأوامر بديهية لأنظمة Unix."
lang: ar-SA
metaTitle: "اختصارات Find | Dotfiles"
permalink: /ar/aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "find aliases, fd command, file search, shell aliases, dotfiles, unix find"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات Find | Dotfiles
  - name: twitter:description
    content: بسّط عمليات البحث عن الملفات مع اختصارات fd. مخرجات سريعة وملونة وأوامر بديهية لأنظمة Unix.
  - name: og:title
    content: اختصارات Find | Dotfiles
  - name: og:description
    content: بسّط عمليات البحث عن الملفات مع اختصارات fd. مخرجات سريعة وملونة وأوامر بديهية لأنظمة Unix.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Find

مختصرات قوية للبحث عن الملفات باستخدام fd، البديل الحديث لـ find.

## نظرة عامة

توفر هذه الاختصارات واجهة مبسطة لـ `fd`، بديل سريع وسهل الاستخدام لأمر `find` التقليدي. معرّفة في `find.aliases.sh`، يتم تحميلها تلقائيًا بواسطة chezmoi وتوفر مخرجات ملونة وصياغة بديهية وأوامر سهلة التذكر لعمليات البحث الشائعة عن الملفات.

## المرجع

### الأوامر الأساسية

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `fd` | `fd --color always` | البحث عن الملفات مع مخرجات ملونة |
| `find` | `fd` | استخدام fd كبديل افتراضي لـ find |

### خيارات البحث

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | عرض النتائج بمسارات مطلقة |
| `fdc` | `fd --ignore-case` | بحث غير حساس لحالة الأحرف |
| `fdd` | `fd --list-details` | عرض معلومات تفصيلية عن الملف |
| `fde` | `fd --extension` | تصفية حسب امتداد الملف |
| `fdf` | `fd --follow` | متابعة الروابط الرمزية أثناء البحث |
| `fdh` | `fd --hidden` | تضمين الملفات المخفية في النتائج |
| `fdn` | `fd --glob` | مطابقة الملفات باستخدام أنماط glob |
| `fdo` | `fd --owner` | تصفية حسب مالك الملف |
| `fds` | `fd --size` | تصفية حسب حجم الملف |
| `fdu` | `fd --exclude` | استبعاد الملفات المطابقة لنمط |
| `fdx` | `fd --exec` | تنفيذ أمر لكل نتيجة |
