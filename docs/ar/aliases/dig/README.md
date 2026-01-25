---
title: "اختصارات Dig: مختصرات استعلام DNS للطرفية"
description: "بسّط استعلامات DNS مع اختصارات dig. ابحث عن IPv4 وIPv6 وسجلات DNS بشكل أسرع باستخدام مختصرات الشل هذه."
lang: ar-SA
metaTitle: "اختصارات Dig | Dotfiles"
permalink: /ar/aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "dig aliases, dns lookup, shell aliases, dotfiles, ipv4 lookup, ipv6 lookup"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: بسّط استعلامات DNS مع اختصارات dig. ابحث عن IPv4 وIPv6 وسجلات DNS بشكل أسرع باستخدام مختصرات الشل هذه.
  - name: twitter:title
    content: اختصارات Dig | Dotfiles
  - name: og:title
    content: اختصارات Dig | Dotfiles
  - name: og:description
    content: بسّط استعلامات DNS مع اختصارات dig. ابحث عن IPv4 وIPv6 وسجلات DNS بشكل أسرع باستخدام مختصرات الشل هذه.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Dig

بسّط عمليات البحث عن DNS بمجموعة موجزة من اختصارات الشل.

## نظرة عامة

تبسط هذه الاختصارات العمل مع استعلامات DNS (نظام أسماء النطاقات) باستخدام أمر `dig` على أنظمة Unix. معرّفة في `dig.aliases.sh`، يتم تحميلها تلقائيًا بواسطة chezmoi كجزء من إعدادات Dotfiles العالمية.

## المرجع

الجدول التالي يسرد جميع اختصارات dig المتاحة ووظائفها.

| الاختصار | الوصف |
|--------|--------------------------------------------|
| `d` | تشغيل أمر dig مع الخيارات الافتراضية |
| `d4` | إجراء بحث DNS لعنوان IPv4 |
| `d6` | إجراء بحث DNS لعنوان IPv6 |
| `dga` | إجراء بحث DNS لجميع السجلات |
| `dgs` | إجراء بحث DNS للإجابة القصيرة |
| `digg` | إجراء استعلام dig باستخدام Google DNS |
| `ip4` | استرجاع عنوان IPv4 العام الخاص بك |
| `ip6` | استرجاع عنوان IPv6 العام الخاص بك |
| `ips` | استرجاع عناوين IPv4 وIPv6 العامة الخاصة بك |
| `wip` | استرجاع عنوان IP العام الخاص بك |
