---
description: الجيل التالي من إعدادات الشل. أداء عالٍ وآمن ومُحسّن للذكاء الاصطناعي. يُدار بواسطة Chezmoi.
lang: ar-SA
metaTitle: حول Dotfiles - Dotfiles (AR)
permalink: /about/

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

Dotfiles v0.2.474 يحوّل طرفيتك إلى مساحة عمل قوية وموحدة. على عكس ملفات dotfiles التقليدية التي تعتمد على Makefiles معقدة أو سكريبتات الروابط الرمزية، يستخدم Dotfiles نهجًا قائمًا على القوالب يتميز بالذرية والسرعة وقابلية إعادة الإنتاج.

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
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
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
