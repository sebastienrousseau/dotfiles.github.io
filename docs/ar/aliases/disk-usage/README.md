---
title: "اختصارات Disk Usage: مراقبة التخزين بأوامر الشل"
description: "اختصارات شل لمراقبة استخدام القرص. عرض أحجام الملفات وإيجاد المجلدات الكبيرة وإدارة التخزين بكفاءة."
lang: ar-SA
metaTitle: "اختصارات Disk Usage | Dotfiles"
permalink: /ar/aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: disk usage aliases, du command, storage monitoring, file size, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات شل لمراقبة استخدام القرص. عرض أحجام الملفات وإيجاد المجلدات الكبيرة وإدارة التخزين بكفاءة.
  - name: twitter:title
    content: اختصارات Disk Usage | Dotfiles
  - name: og:title
    content: اختصارات Disk Usage | Dotfiles
  - name: og:description
    content: اختصارات شل لمراقبة استخدام القرص. عرض أحجام الملفات وإيجاد المجلدات الكبيرة وإدارة التخزين بكفاءة.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Disk Usage

راقب وحلل استهلاك التخزين بسرعة عبر نظام ملفاتك.

## نظرة عامة

توفر اختصارات disk usage أوامر مبسطة لمراقبة استهلاك التخزين على أنظمة Unix. معرّفة في `disk-usage.aliases.sh`، تبسط هذه المختصرات عمليات `du` الشائعة ويتم تحميلها تلقائيًا بواسطة chezmoi كجزء من إعدادات Dotfiles.

## المرجع

الجدول التالي يسرد جميع اختصارات disk usage المتاحة ووظائفها.

| الاختصار | الوصف |
|-------|-------------|
| `du` | عرض استخدام القرص للمجلد الحالي |
| `du1` | عرض حجم الملفات والمجلدات في المجلد الحالي |
| `duh` | عرض حجم الملف بتنسيق قابل للقراءة |
| `ducks` | عرض أكبر 10 ملفات ومجلدات في المجلد الحالي |
| `dus` | عرض حجم الملف بتنسيق قابل للقراءة، مرتب حسب الحجم |
| `dusym` | عرض حجم الملفات والمجلدات، بما في ذلك الروابط الرمزية |
| `dut` | عرض إجمالي حجم الملف للمجلد الحالي |
