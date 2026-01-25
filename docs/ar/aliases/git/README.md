---
title: "اختصارات Git: بسّط سير عمل التحكم في الإصدارات"
description: "أكثر من 80 اختصار Git للشل للالتزامات والفروع والتفريقات والخوادم البعيدة بشكل أسرع. سرّع مهام التحكم في الإصدارات اليومية."
lang: ar-SA
metaTitle: "اختصارات Git | Dotfiles"
permalink: /ar/aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shortcuts, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: أكثر من 80 اختصار Git للشل للالتزامات والفروع والتفريقات والخوادم البعيدة بشكل أسرع. سرّع مهام التحكم في الإصدارات اليومية.
  - name: twitter:title
    content: اختصارات Git | Dotfiles
  - name: og:title
    content: اختصارات Git | Dotfiles
  - name: og:description
    content: أكثر من 80 اختصار Git للشل للالتزامات والفروع والتفريقات والخوادم البعيدة بشكل أسرع. سرّع مهام التحكم في الإصدارات اليومية.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Git

بسّط سير عمل التحكم في الإصدارات بمختصرات قوية.

## نظرة عامة

تُنشئ اختصارات Git مختصرات لأوامر Git المستخدمة بشكل متكرر. جزء من إعدادات [Dotfiles](https://github.com/sebastienrousseau/dotfiles)، يتم تحميل هذه الاختصارات تلقائيًا من خلال Chezmoi.

## المرجع

### الأساسية

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `g` | `git` | اختصار git |
| `gst` | `git status` | عرض حالة شجرة العمل |
| `gsts` | `git status --short` | حالة بتنسيق قصير |

### منطقة العمل

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `ga` | `git add` | إضافة ملفات للتجهيز |
| `gaa` | `git add --all` | تجهيز جميع التغييرات |
| `gad` | `git add .` | تجهيز كل شيء في المجلد الحالي |
| `gcl` | `git clone` | استنساخ مستودع |
| `gco` | `git checkout` | تبديل الفروع أو استعادة ملفات شجرة العمل |
| `gcb` | `git checkout -b` | إنشاء والتبديل إلى فرع جديد |

### الالتزامات

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `gc` | `git commit -a` | التزام جميع التغييرات المتعقبة |
| `gca` | `git commit --amend` | تعديل الالتزام الأخير |
| `gcm` | `git commit --message` | التزام برسالة مضمنة |
| `gcall` | `git add -A && git commit -av` | تجهيز كل شيء والتزام بتفصيل |

### الفرق والسجل

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `gd` | `git diff` | عرض التغييرات غير المجهزة |
| `gdstaged` | `git diff --staged` | عرض التغييرات المجهزة |
| `gl` | `git log --since="last month" --oneline` | سجل سطر واحد للشهر الماضي |
| `glg` | `git log --graph --all --oneline --decorate` | سجل رسومي لجميع الفروع |

### الفروع

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `gb` | `git branch` | سرد الفروع المحلية |
| `gbd` | `git branch -d` | حذف فرع مدمج |
| `gbr` | `git branch -r` | سرد الفروع البعيدة |
| `gswb` | `git switch` | تبديل الفروع (حديث) |

### الخوادم البعيدة والدفع/السحب

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `gf` | `git fetch` | جلب من الخادم البعيد |
| `gp` | `git pull` | سحب من الخادم البعيد |
| `gph` | `git push` | دفع إلى الخادم البعيد |
| `gpo` | `git push origin` | دفع إلى origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | دفع وتعيين upstream للفرع الحالي |
| `gr` | `git remote` | إدارة الخوادم البعيدة |
| `grv` | `git remote -v` | عرض روابط الخوادم البعيدة |

### التراجع وإعادة التعيين

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `grev` | `git revert` | التراجع عن التزام |
| `grb` | `git rebase` | إعادة تأسيس الفرع الحالي |
| `gresh` | `git reset --hard HEAD~1` | إعادة تعيين صارمة للالتزام السابق |
| `gress` | `git reset --soft HEAD~1` | إعادة تعيين ناعمة (الاحتفاظ بالتغييرات مجهزة) |

### التوقيع والأمان

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `enable-signing` | *(معالج تفاعلي)* | إعداد توقيع الالتزامات بـ GPG أو SSH |
| `verify-signatures` | `git log --show-signature -n 10` | التحقق من توقيعات آخر 10 التزامات |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | فحص إعدادات التوقيع الحالية |
