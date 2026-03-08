---
title: حول Dotfiles
description: الجيل التالي من إعدادات الشل. أداء عالٍ وآمن ومُحسّن للذكاء الاصطناعي. يُدار بواسطة Chezmoi. متوافق مع macOS وLinux وWSL عبر Dotfiles.
lang: ar-SA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: حول Dotfiles preview
canonical: /ar/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: حول Dotfiles
pageType: docs
schemaType: WebPage
metaTitle: حول Dotfiles - Dotfiles (AR)
permalink: /ar/about/
meta:
  - name: keywords
    content: chezmoi, dotfiles, إعدادات, أتمتة, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: الجيل التالي من إعدادات الشل. أداء عالٍ وآمن ومُحسّن للذكاء الاصطناعي. يُدار بواسطة Chezmoi.
  - name: twitter:title
    content: حول Dotfiles
  - name: og:title
    content: حول Dotfiles
  - name: og:description
    content: الجيل التالي من إعدادات الشل. أداء عالٍ وآمن ومُحسّن للذكاء الاصطناعي. يُدار بواسطة Chezmoi.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# حول Dotfiles

المعيار الحديث لإعدادات الشل. مبني على **Chezmoi** لإدارة بيئة آمنة وعابرة للمنصات.

## اكتشف

Dotfiles v0.2.495 يحوّل طرفيتك إلى مساحة عمل قوية وموحدة. على عكس ملفات dotfiles التقليدية التي تعتمد على Makefiles معقدة أو سكريبتات الروابط الرمزية، يستخدم Dotfiles نهجًا قائمًا على القوالب يتميز بالذرية والسرعة وقابلية إعادة الإنتاج.

### ما الجديد

- **نواة حديثة** — بدائل Rust عالية الأداء تحل محل أدوات Unix التقليدية:
  - **Atuin** لسجل الشل
  - **Yazi** لإدارة الملفات
  - **Zellij** لتعدد الطرفيات
  - **Ghostty** لطرفية مُسرّعة بـ GPU
  - **NeoVim** للتحرير الحديث
- **أمان أصلي** — توقيع SSH أصلي بالكامل بدون وكلاء خارجيين
- **وضع تفاعلي** — أمر `dot learn` الجديد يرشدك عبر الميزات

## ابدأ

### المتطلبات

- **macOS** أو **Linux (Ubuntu/Debian)** أو **Windows (WSL)**
- **Curl** و**Git**
- **Chezmoi** (يُثبّت تلقائيًا)
- **Nerd Font** (لأيقونات الطرفية)

### التثبيت

نفّذ أمرًا واحدًا لتثبيت المجموعة الكاملة:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
```

سيقوم المُثبّت بما يلي:

1. تثبيت برنامج `chezmoi`
2. استنساخ المستودع
3. تثبيت الحزم المطلوبة عبر Homebrew (macOS) أو Apt (Linux)
4. تطبيق إعداداتك

### استكشف

بعد التثبيت، أعد تشغيل طرفيتك ونفّذ:

```bash
dot learn
```

هذا يُطلق جولة تفاعلية لبيئتك الجديدة.

## خصص

إعداداتك موجودة في `~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # نقطة دخول الشل
├── dot_config/             # إعدادات XDG الأساسية (~/.config)
│   ├── atuin/              # سجل الشل
│   ├── ghostty/            # محاكي الطرفية
│   ├── git/                # إعدادات Git
│   ├── yazi/               # مدير الملفات
│   ├── zellij/             # مضاعف الطرفية
│   ├── zsh/                # إعدادات Zsh
│   └── shell/              # الاختصارات والمسارات المشتركة
├── provision/              # سكريبتات دورة الحياة
├── install.sh              # المُثبّت العام
└── docs/                   # التوثيق
```

## ساهم

انضم للمجتمع. راجع [مدونة السلوك][code-of-conduct-url] و[إرشادات المساهمة][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md

## الأوامر الأساسية

يوفر سطر أوامر `dot` ما يصل إلى 53 أمرًا منظمة حسب الفئة.

### الأساسية

- `dot apply` — يطبق تغييرات التكوين.
- `dot sync` — يجلب أحدث حالة للمستودع ويطبقها.
- `dot update` — يحدث المستودع ويسخن ذاكرة التخزين المؤقت.
- `dot add` — يضيف ملفات جديدة إلى مصدر Chezmoi.
- `dot diff` — يعرض التغييرات المعلقة قبل التطبيق.
- `dot status` — يعرض حالة الملفات المُدارة.
- `dot remove` — يلغي إدارة ملف ويحذف إدخال المصدر.
- `dot cd` — يفتح Shell في مجلد مصدر Chezmoi.
- `dot edit` — يفتح ملفًا مُدارًا في المحرر.
- `dot clean-cache` — يمسح ذاكرة التخزين المؤقت المؤقتة.
- `dot prewarm` — يملأ ذاكرة التخزين المؤقت مسبقًا لبدء Shell أسرع.

### التشخيص

- `dot doctor` — يتحقق من المسارات والأدوات وحالة Shell.
- `dot heal` — يصلح الحالة المفقودة أو التالفة تلقائيًا.
- `dot health` — يشغل فحصًا صحيًا خفيفًا.
- `dot verify` — يتحقق من سلامة الملفات مقابل المصدر.
- `dot scorecard` — يطبع نتيجة جودة التكوين.
- `dot snapshot` — يلتقط الحالة الحالية للمقارنة لاحقًا.
- `dot smoke-test` — يتحقق من سلاسل الأدوات الأساسية بالكامل.
- `dot chaos` — يحقن أخطاء لاختبار الإصلاح الذاتي.
- `dot bundle` — يصدّر حزمة تكوين محمولة.
- `dot rollback` — يعود إلى لقطة سابقة.
- `dot drift` — يكتشف التغييرات غير المتوقعة على الملفات المُدارة.
- `dot history` — يعرض سجل تاريخ apply/sync.
- `dot benchmark` — يقيس وقت بدء Shell.
- `dot perf` — يحلل بطء تهيئة Shell.

### المظهر

- `dot theme` — يبدل نظام ألوان الطرفية.
- `dot wallpaper` — يعين خلفية سطح المكتب (macOS).
- `dot fonts` — يثبت أو يحدث Nerd Fonts.
- `dot tune` — يضبط كثافة الواجهة ونمط سطر الأوامر.

### الأمان

- `dot backup` — ينشئ نسخًا احتياطية مشفرة للتكوين.
- `dot encrypt-check` — يتحقق من تشفير المفاتيح السرية في حالة السكون.
- `dot firewall` — يُكوّن قواعد جدار الحماية.
- `dot telemetry` — يتحكم في بيانات الاستخدام المجهولة.
- `dot dns-doh` — يفعّل DNS-over-HTTPS.
- `dot lock-screen` — يقفل الشاشة فورًا.
- `dot usb-safety` — يقيد التركيب التلقائي لتخزين USB.

### المفاتيح السرية

- `dot secrets-init` — يهيئ الواجهة الخلفية للمفاتيح السرية (age / GPG).
- `dot secrets` — يسرد إدخالات المفاتيح السرية المشفرة.
- `dot secrets-create` — ينشئ مفتاحًا سريًا مشفرًا جديدًا.
- `dot ssh-key` — يولد أو يدوّر أزواج مفاتيح SSH.
- `dot ssh-cert` — يطلب شهادة SSH من مرجع مصدق.

### الذكاء الاصطناعي

- `dot ai` — يفتح جلسة مساعد ذكاء اصطناعي تفاعلية.
- `dot ai-setup` — يُكوّن مفاتيح API لمزودي الذكاء الاصطناعي.
- `dot ai-query` — يرسل طلبًا واحدًا إلى نموذج ذكاء اصطناعي.
- أغلفة أدوات الذكاء الاصطناعي: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### الأدوات

- `dot tools` — يسرد بدائل CLI المضمنة وحالتها.
- `dot new` — ينشئ ملف اختصار أو دالة جديد.
- `dot sandbox` — يفتح Shell رمل للاستخدام مرة واحدة.
- `dot keys` — يعرض اختصارات لوحة المفاتيح الحالية.
- `dot learn` — يبدأ البرنامج التعليمي التفاعلي.

### معلومات وصفية

- `dot upgrade` — يرقّي Dotfiles إلى أحدث إصدار.
- `dot packages` — يسرد الحزم المثبتة المُدارة بواسطة Dotfiles.
- `dot version` / `dot help` — يعرض معلومات الإصدار أو الاستخدام
