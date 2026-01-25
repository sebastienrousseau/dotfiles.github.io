---
title: "اختصارات Default: مختصرات الشل الأساسية"
description: "اختصارات شل أساسية للتنقل والتحكم في النظام والمهام اليومية. بسّط سير عملك في الطرفية مع هذه المختصرات العامة."
lang: ar-SA
metaTitle: "اختصارات Default | Dotfiles"
permalink: /ar/aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "default aliases, shell aliases, terminal shortcuts, dotfiles, bash aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات Default | Dotfiles
  - name: twitter:description
    content: اختصارات شل أساسية للتنقل والتحكم في النظام والمهام اليومية.
  - name: og:title
    content: اختصارات Default | Dotfiles
  - name: og:description
    content: اختصارات شل أساسية للتنقل والتحكم في النظام والمهام اليومية.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Default

مختصرات شل أساسية لمهام الطرفية اليومية.

## نظرة عامة

توفر اختصارات Default مجموعة من مختصرات الشل العامة التي تبسط عمليات الطرفية الشائعة. هذه الاختصارات معرّفة في `default.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi عبر جميع الأصداف المدعومة.

تغطي هذه المختصرات الأدوات العامة وأوامر الخروج وتشخيص الشبكة ومراقبة النظام والتنقل في نظام الملفات.

## المرجع

### عام

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | عرض التاريخ والوقت الحالي |
| `p` | `pwd` | طباعة مجلد العمل |
| `path` | `echo ${PATH//:/\\n}` | عرض متغير PATH على سطور منفصلة |
| `r` | `reload` | إعادة تحميل الشل |
| `t` | `tail -f` | متابعة مخرجات الملف في الوقت الفعلي |
| `wk` | `date +%V` | عرض رقم الأسبوع الحالي |

### الخروج والإيقاف

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `q` | `exit` | الخروج من الشل |
| `quit` | `exit` | الخروج من الشل |
| `bye` | `exit` | الخروج من الشل |
| `:q` | `exit` | الخروج من الشل (بأسلوب vim) |
| `halt` | `sudo /sbin/halt` | إيقاف النظام |
| `poweroff` | `sudo /sbin/shutdown` | إيقاف تشغيل النظام |
| `reboot` | `sudo /sbin/reboot` | إعادة تشغيل النظام |

### السجل

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `h` | `history` | عرض سجل الأوامر |
| `history` | `fc -il 1` | عرض السجل بطوابع زمنية ISO 8601 |

### الشبكة

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | إعداد واجهات الشبكة |
| `ipinfo` | `ipconfig getpacket en0` | الحصول على معلمات الشبكة لـ en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | عرض مستمعي الشبكة النشطين |
| `op` | `sudo lsof -i -P` | سرد المنافذ المفتوحة |
| `ping` | `ping -c 5` | ping مع حد 5 حزم |
| `ports` | `netstat -tulan` | سرد جميع المنافذ المستمعة |

### مراقبة النظام

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `top` | `sudo btop` | مراقب العمليات التفاعلي |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | مسح ملفات سجل ASL |

### الأدوات

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | عد الملفات في المجلد الحالي |
| `qfind` | `find . -name` | بحث سريع عن الملفات |
| `reload` | `exec $SHELL -l` | إعادة تحميل الشل |
| `wth` | `curl -s "wttr.in/?format=3"` | الحصول على الطقس الحالي |
