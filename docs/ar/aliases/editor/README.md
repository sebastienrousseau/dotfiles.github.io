---
title: "اختصارات Editor: مختصرات تحرير النصوص المبسطة"
description: "اختصارات شل لـ Neovim وVS Code وVim وNano وEmacs وSublime Text. حرر الملفات بشكل أسرع مع مختصرات عامة."
lang: ar-SA
metaTitle: "اختصارات Editor | Dotfiles"
permalink: /ar/aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: editor aliases, neovim, vim, vscode, nano, emacs, sublime text, shell shortcuts, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات شل لـ Neovim وVS Code وVim وNano وEmacs وSublime Text. حرر الملفات بشكل أسرع مع مختصرات عامة.
  - name: twitter:title
    content: اختصارات Editor | Dotfiles
  - name: og:title
    content: اختصارات Editor | Dotfiles
  - name: og:description
    content: اختصارات شل لـ Neovim وVS Code وVim وNano وEmacs وSublime Text. حرر الملفات بشكل أسرع مع مختصرات عامة.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Editor

مختصرات لتشغيل وإعداد محرر النصوص المفضل لديك.

## نظرة عامة

توفر اختصارات Editor واجهة موحدة لتحرير النصوص عبر تطبيقات متعددة. معرّفة في `editor.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi، تعمل هذه المختصرات بتناغم مع `editor.sh` لاكتشاف وإعداد أفضل محرر متاح على نظامك.

## المرجع

### الاختصارات العامة

| الاختصار | الوصف |
|-------|-------------|
| `e` | أمر تحرير سريع |
| `edit` | أمر تحرير قياسي |
| `editor` | أمر المحرر الكامل |
| `n` | اختصار تحرير قصير |
| `v` | اختصار تحرير بأسلوب Vim |

### اختصارات Neovim

| الاختصار | الوصف |
|-------|-------------|
| `vi` | يُعاد توجيهه إلى Neovim |
| `vim` | يُعاد توجيهه إلى Neovim |
| `nvimrc` | تحرير إعدادات Neovim Vimscript |
| `nvimlua` | تحرير إعدادات Neovim Lua |
| `nvimconf` | فتح مجلد إعدادات Neovim |

### اختصارات Visual Studio Code

| الاختصار | الوصف |
|-------|-------------|
| `vsc` | تشغيل VS Code |
| `vsca` | إضافة مجلد للنافذة الحالية |
| `vscd` | مقارنة ملفين |
| `vscn` | فتح نافذة جديدة |
| `vscex` | تثبيت إضافة VS Code |
| `vsclist` | سرد الإضافات المثبتة |

### اختصارات Vim

| الاختصار | الوصف |
|-------|-------------|
| `vi` | يُعاد توجيهه إلى Vim |
| `vimrc` | تحرير ملف إعدادات Vim |
| `vimconf` | فتح مجلد إعدادات Vim |

### اختصارات Emacs

| الاختصار | الوصف |
|-------|-------------|
| `em` | تشغيل Emacs |
| `emacs-nw` | تشغيل Emacs في وضع الطرفية |
| `emacsc` | تشغيل عميل Emacs |
| `emacsrc` | تحرير ملف إعدادات Emacs |
