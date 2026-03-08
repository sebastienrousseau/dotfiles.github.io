---
title: System اختصارات | Dotfiles
description: استكشف اختصارات System في Dotfiles v0.2.495. أوامر system قصيرة وسهلة الحفظ لنظامي macOS وLinux وWSL.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System اختصارات | Dotfiles preview
canonical: /ar/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System اختصارات
pageType: docs
schemaType: WebPage
metaTitle: System اختصارات | Dotfiles
permalink: /ar/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, اختصارات, شل, Bash, Zsh, Dotfiles, Chezmoi, أوامر system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: استكشف اختصارات System في Dotfiles v0.2.495. أوامر system قصيرة وسهلة الحفظ.
  - name: twitter:title
    content: System اختصارات | Dotfiles
  - name: og:title
    content: System اختصارات | Dotfiles
  - name: og:description
    content: استكشف اختصارات System في Dotfiles v0.2.495. أوامر system قصيرة وسهلة الحفظ.
  - name: og:image:alt
    content: Dotfiles – مصممة لتناسب حياتك في Shell
  - name: og:locale
    content: ar_SA
---

# System اختصارات

أوامر system مختصرة.

تقدم هذه الصفحة مجموعة اختصارات وأوامرها المختصرة الشائعة. اقرأ هذه الصفحة أولاً لفهم اصطلاحات التسمية والمدخلات المتوقعة وأنماط التنفيذ الآمنة. ثم افتح ملحق المرجع للاطلاع على قائمة الأوامر الكاملة والصياغة الدقيقة. تقلل هذه الاختصارات من الكتابة المتكررة وتحافظ على سلوك سير عمل متسق على macOS وLinux وWSL.

## متى تستخدم

استخدم هذه الصفحة قبل العمل اليومي في Shell عندما تحتاج إلى أنماط أوامر يمكن التنبؤ بها.

## ما المتضمن

- الاختصارات: 24
- الدوال المساعدة: 0
- ملفات المصدر: 1

## أمثلة سريعة

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## الخطوة التالية

افتح القائمة الكاملة:

- [ملحق مرجع System](./reference.md)
