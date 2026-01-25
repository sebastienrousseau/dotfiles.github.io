---
description: اختصارات الشل التي تُنشئ مختصرات للأوامر المستخدمة بشكل متكرر. عزز إنتاجيتك بتقليل الكتابة في سير عملك اليومي.
lang: ar-SA
metaTitle: الاختصارات - Dotfiles (AR)
permalink: /ar/aliases/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات الشل التي تُنشئ مختصرات للأوامر المستخدمة بشكل متكرر. عزز إنتاجيتك بتقليل الكتابة في سير عملك اليومي.
  - name: twitter:title
    content: الاختصارات - Dotfiles
  - name: og:title
    content: الاختصارات - Dotfiles
  - name: og:description
    content: اختصارات الشل التي تُنشئ مختصرات للأوامر المستخدمة بشكل متكرر. عزز إنتاجيتك بتقليل الكتابة في سير عملك اليومي.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# الاختصارات

اختصارات شل معيارية تُدار بواسطة **Chezmoi**. اكتب أقل، أنجز أكثر.

## اكتشف

الاختصارات منظمة في ملفات صغيرة ومركزة — ملف واحد لكل أداة أو سير عمل. أثناء `chezmoi apply`، تُجمّع جميع ملفات الاختصارات في `~/.config/shell/aliases.sh` ويتم تحميلها بواسطة الشل الخاص بك.

## ابدأ

### إضافة اختصار

1. أنشئ ملفًا جديدًا (مثال: `mytool/mytool.aliases.sh`)
2. عرّف اختصاراتك:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. طبّق التغييرات:
   ```bash
   chezmoi apply
   ```

## المرجع

تصفح الاختصارات حسب الفئة:

<!-- markdownlint-disable MD013-->

| الفئة | الوصف |
| :--- | :--- |
| [AI](ai/) | اختصارات مساعد الذكاء الاصطناعي وأدوات LLM |
| [Archives](archives/) | ضغط واستخراج الملفات |
| [CD](cd/) | التنقل في نظام الملفات |
| [Chmod](chmod/) | تغيير صلاحيات الملفات |
| [Clear](clear/) | مسح شاشة الطرفية |
| [Compliance](compliance/) | أدوات SOC2 والخصوصية |
| [Configuration](configuration/) | إدارة dotfiles وإعدادات الشل |
| [Default](default/) | اختصارات الشل الافتراضية |
| [Diagnostics](diagnostics/) | الإصلاح الذاتي وفحوصات الصحة |
| [Dig](dig/) | استعلام خوادم DNS |
| [Disk Usage](disk-usage/) | عرض معلومات استخدام القرص |
| [Docker](docker/) | إدارة الحاويات |
| [Editor](editor/) | إعداد محررات النصوص |
| [Find](find/) | البحث عن الملفات والمجلدات |
| [Fonts](fonts/) | إدارة ذاكرة التخزين المؤقت للخطوط |
| [GCloud](gcloud/) | أدوات Google Cloud SDK |
| [Git](git/) | التحكم في الإصدارات بـ Git |
| [GNU](gnu/) | أدوات GNU الأساسية |
| [Go](go/) | أدوات لغة Go |
| [Heroku](heroku/) | واجهة Heroku CLI |
| [Installer](installer/) | التمهيد والنشر |
| [Interactive](interactive/) | سلوك الشل التفاعلي |
| [Kubernetes](kubernetes/) | Kubernetes وHelm وK9s |
| [Legal](legal/) | أدوات فحص التراخيص |
| [macOS](macOS/) | إعدادات خاصة بـ macOS |
| [Make](make/) | أدوات GNU Make |
| [Mkdir](mkdir/) | إنشاء المجلدات |
| [Modern](modern/) | بدائل الأدوات المبنية بـ Rust |
| [NPM](npm/) | مدير حزم Node.js |
| [Permission](permission/) | صلاحيات الملفات |
| [PNPM](pnpm/) | مدير حزم PNPM |
| [PS](ps/) | حالة العمليات |
| [Python](python/) | أدوات Python |
| [Rsync](rsync/) | نقل الملفات بكفاءة |
| [Rust](rust/) | أدوات برمجة Rust |
| [Security](security/) | الثبات والتوقيع |
| [Subversion](subversion/) | التحكم في الإصدارات SVN |
| [Sudo](sudo/) | عمليات المستخدم الجذر |
| [Terraform](terraform/) | البنية التحتية كرمز |
| [Tmux](tmux/) | مضاعف الطرفية |
| [Update](update/) | تحديث dotfiles |
| [UUID](uuid/) | توليد UUIDs |
| [Wget](wget/) | تنزيل من سطر الأوامر |
| [Yarn](yarn/) | مدير حزم Yarn |

<!-- markdownlint-enable MD013-->
