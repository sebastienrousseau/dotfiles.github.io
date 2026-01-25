---
title: "اختصارات Configuration: وصول سريع لملفات الإعدادات"
description: "افتح ملفات إعدادات الشل وGit وSSH والخادم فورًا مع اختصارات الشل هذه لـ Bash وZsh."
lang: ar-SA
metaTitle: "اختصارات Configuration | Dotfiles"
permalink: /ar/aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات Configuration | Dotfiles
  - name: twitter:description
    content: افتح ملفات إعدادات الشل وGit وSSH والخادم فورًا مع اختصارات الشل هذه.
  - name: og:title
    content: اختصارات Configuration | Dotfiles
  - name: og:description
    content: افتح ملفات إعدادات الشل وGit وSSH والخادم فورًا مع اختصارات الشل هذه.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Configuration

افتح ملفات الإعدادات في محررك الافتراضي بأمر واحد.

## نظرة عامة

توفر اختصارات Configuration مختصرات لفتح ملفات الإعدادات المُعدّلة بشكل متكرر. هذه الاختصارات معرّفة في `configuration.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi.

كل اختصار يُطلق الملف المقابل في محرر النصوص الافتراضي لنظامك، مما يلغي الحاجة لتذكر مسارات الملفات أو كتابة أوامر طويلة.

## المرجع

### إعدادات الشل

| الاختصار | الوصف |
|-------|-------------|
| `bshrc` | فتح ملف إعدادات Bash (~/.bashrc) |
| `bshp` | فتح ملف Bash profile (~/.bash_profile) |
| `zshrc` | فتح ملف إعدادات Zsh (~/.zshrc) |
| `zshp` | فتح ملف Zsh profile (~/.zprofile) |

### التحكم في الإصدارات

| الاختصار | الوصف |
|-------|-------------|
| `gcfg` | فتح ملف إعدادات Git (~/.gitconfig) |
| `gign` | فتح ملف Git ignore (~/.gitignore) |

### الشبكة والخوادم

| الاختصار | الوصف |
|-------|-------------|
| `apconf` | فتح ملف إعدادات Apache |
| `ngconf` | فتح ملف إعدادات Nginx |
| `sshconf` | فتح ملف إعدادات SSH (~/.ssh/config) |
| `hosts` | فتح ملف hosts (/etc/hosts) |

### أدوات التطوير

| الاختصار | الوصف |
|-------|-------------|
| `dockcomp` | فتح ملف Docker Compose |
| `eddir` | فتح المجلد الحالي في المحرر الافتراضي |
