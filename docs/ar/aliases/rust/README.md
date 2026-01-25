---
description: اختصارات تطوير Rust لـ Cargo وRustup. مختصرات للبناء والاختبار وإدارة مشاريع Rust.
lang: ar-SA
metaTitle: اختصارات Rust - Dotfiles (AR)
permalink: /ar/aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, shell aliases, dotfiles, rust development
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات تطوير Rust لـ Cargo وRustup. مختصرات للبناء والاختبار وإدارة مشاريع Rust.
  - name: twitter:title
    content: اختصارات Rust - Dotfiles
  - name: og:title
    content: اختصارات Rust - Dotfiles
  - name: og:description
    content: اختصارات تطوير Rust لـ Cargo وRustup. مختصرات للبناء والاختبار وإدارة مشاريع Rust.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Rust

مختصرات لتطوير Rust باستخدام Cargo وRustup.

## نظرة عامة

هذه الاختصارات معرّفة في `rust.aliases.sh` ويتم تحميلها تلقائيًا بواسطة Chezmoi.

## المرجع

### الأوامر الأساسية

| الاختصار | الوصف |
|:---|:---|
| `cg` | اختصار Cargo |
| `cgn` | إنشاء مشروع binary جديد |
| `cgni` | إنشاء مشروع مكتبة جديد |
| `cginit` | تهيئة المشروع في المجلد الحالي |

### البناء والتشغيل

| الاختصار | الوصف |
|:---|:---|
| `cgb` | بناء debug |
| `cgbr` | بناء release |
| `cgr` | تشغيل debug |
| `cgrr` | تشغيل release |
| `cgw` | مراقبة وإعادة البناء |

### الاختبار والقياس

| الاختصار | الوصف |
|:---|:---|
| `cgt` | تشغيل الاختبارات |
| `cgtr` | تشغيل الاختبارات في وضع release |
| `cgbh` | تشغيل القياسات |

### جودة الكود

| الاختصار | الوصف |
|:---|:---|
| `cgc` | فحص التجميع |
| `cgcl` | تنظيف مخرجات البناء |
| `cgcy` | تشغيل فحوصات clippy |
| `cgf` | تنسيق الكود |
| `cgaud` | فحص الثغرات الأمنية |

### التوثيق

| الاختصار | الوصف |
|:---|:---|
| `cgd` | بناء وفتح التوثيق |
| `cgdr` | بناء توثيق release |

### التبعيات

| الاختصار | الوصف |
|:---|:---|
| `cga` | إضافة تبعية |
| `cgad` | إضافة تبعية تطوير |
| `cgu` | تحديث التبعيات |
| `cgo` | فحص التبعيات القديمة |
| `cgtree` | عرض شجرة التبعيات |

### تحديثات Rustup

| الاختصار | الوصف |
|:---|:---|
| `ru` | تحديث جميع toolchains |
| `rus` | تحديث stable toolchain |
| `run` | تحديث nightly toolchain |
| `rti` | تثبيت toolchain محدد |

### إدارة المكونات

| الاختصار | الوصف |
|:---|:---|
| `rca` | إضافة مكون |
| `rcl` | سرد المكونات |
| `rcr` | إزالة مكون |

### إدارة الأهداف

| الاختصار | الوصف |
|:---|:---|
| `rtaa` | إضافة هدف تجميع |
| `rtal` | سرد الأهداف المتاحة |
| `rtar` | إزالة هدف تجميع |
