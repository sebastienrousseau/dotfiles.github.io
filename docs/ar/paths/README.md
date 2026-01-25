---
description: كيف يُدير Dotfiles تسلسل PATH الخاص بك لضمان تحميل الأدوات الصحيحة بالترتيب الصحيح.
lang: ar-SA
metaTitle: المسارات - Dotfiles (AR)
permalink: /paths/

meta:
  - name: keywords
    content: path, environment, variables, hierarchy, dotfiles, chezmoi, shell, configuration
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: كيف يُدير Dotfiles تسلسل PATH الخاص بك لضمان تحميل الأدوات الصحيحة بالترتيب الصحيح.
  - name: twitter:title
    content: المسارات - Dotfiles
  - name: og:title
    content: المسارات - Dotfiles
  - name: og:description
    content: كيف يُدير Dotfiles تسلسل PATH الخاص بك لضمان تحميل الأدوات الصحيحة بالترتيب الصحيح.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# المسارات

إدارة `PATH` معيارية. تضمن تحميل الأدوات الصحيحة بالترتيب الصحيح.

## اكتشف

إعدادات المسار مقسمة إلى ملفات قائمة على الأولوية. أثناء `chezmoi apply`:

1. يتم مسح الملفات في هذا المجلد أبجديًا
2. يُجمّع المحتوى في `~/.config/shell/paths.sh`
3. يتم تحميله بواسطة `.zshrc` عند بدء التشغيل

## المرجع

| السكريبت | الوصف |
|:---|:---|
| `00-default.paths.sh` | مسارات النظام الأساسية (`/usr/bin`، `/sbin`) وHomebrew. يُحمّل أولاً. |
| `99-custom.paths.sh` | مسارات المستخدم المخصصة (SDKs للغات، bins محلية). يُحمّل أخيرًا للأسبقية. |

## ابدأ

### إضافة مسار مستخدم

1. عدّل `99-custom.paths.sh` أو أنشئ ملفًا جديدًا (مثال: `50-myproject.paths.sh`)
2. أضف مسارك:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. طبّق التغييرات:
   ```bash
   chezmoi apply
   ```
4. تحقق:
   ```bash
   echo $PATH
   ```
