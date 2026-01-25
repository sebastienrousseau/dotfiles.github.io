---
title: "اختصارات GNU Coreutils: مختصرات الشل لـ Linux"
description: "بسّط سير عملك مع اختصارات GNU Coreutils لإدارة الملفات ومعالجة النصوص وأدوات التحقق."
lang: ar-SA
metaTitle: "اختصارات GNU Coreutils | Dotfiles"
permalink: /ar/aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: gnu coreutils, shell aliases, linux utilities, file management, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات GNU Coreutils | Dotfiles
  - name: twitter:description
    content: بسّط سير عملك مع اختصارات GNU Coreutils لإدارة الملفات ومعالجة النصوص وأدوات التحقق.
  - name: og:title
    content: اختصارات GNU Coreutils | Dotfiles
  - name: og:description
    content: بسّط سير عملك مع اختصارات GNU Coreutils لإدارة الملفات ومعالجة النصوص وأدوات التحقق.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات GNU Coreutils

مختصرات لأدوات Unix الأساسية لسير عمل أسرع في سطر الأوامر.

## نظرة عامة

توفر اختصارات GNU Coreutils أوامر مختصرة لأدوات Unix القياسية. معرّفة في `gnu.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi، تبسط هذه الاختصارات عمليات الملفات ومعالجة النصوص ومهام التحقق من البيانات.

## المرجع

### إدارة الملفات

| الاختصار | الوصف |
|-------|-------------|
| `basename` | استخراج اسم الملف من المسار |
| `cp` | نسخ الملفات والمجلدات |
| `dirname` | استخراج اسم المجلد من المسار |
| `ln` | إنشاء روابط بين الملفات |
| `ls` | سرد محتويات المجلد |
| `mkdir` | إنشاء مجلدات |
| `mv` | نقل أو إعادة تسمية الملفات أو المجلدات |
| `pwd` | طباعة اسم مجلد العمل |
| `rm` | إزالة الملفات أو المجلدات |
| `rmdir` | إزالة المجلدات الفارغة |

### معالجة النصوص

| الاختصار | الوصف |
|-------|-------------|
| `awk` | لغة مسح ومعالجة الأنماط |
| `cat` | دمج وعرض الملفات |
| `cut` | إزالة أقسام من كل سطر في الملفات |
| `grep` | طباعة الأسطر المطابقة لنمط |
| `head` | إخراج الجزء الأول من الملفات |
| `sed` | محرر تدفق لتصفية وتحويل النصوص |
| `sort` | ترتيب أسطر الملفات النصية |
| `tail` | إخراج الجزء الأخير من الملفات |
| `tr` | ترجمة أو حذف الأحرف |

### أدوات التحقق

| الاختصار | الوصف |
|-------|-------------|
| `b2sum` | طباعة أو فحص ملخصات BLAKE2 |
| `cksum` | طباعة مجموع CRC وعدد البايتات |
| `sha1sum` | طباعة أو فحص ملخصات SHA1 |
| `sha256sum` | طباعة أو فحص ملخصات SHA256 |
| `sha512sum` | طباعة أو فحص ملخصات SHA512 |

### أدوات الترميز

| الاختصار | الوصف |
|-------|-------------|
| `base32` | طباعة أو تحويل بيانات base32 |
| `base64` | ترميز أو فك ترميز بيانات base64 |
