---
title: "اختصارات Google Cloud: بسّط سير عمل gcloud CLI"
description: "اختصارات لـ Google Cloud SDK. أدر Compute Engine وIAM وCloud SQL والمزيد بأوامر سهلة التذكر."
lang: ar-SA
metaTitle: "اختصارات Google Cloud | Dotfiles"
permalink: /ar/aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "gcloud aliases, google cloud cli, gcloud shortcuts, cloud sdk commands, dotfiles, shell aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: اختصارات Google Cloud | Dotfiles
  - name: twitter:description
    content: اختصارات لـ Google Cloud SDK. أدر Compute Engine وIAM وCloud SQL والمزيد بأوامر سهلة التذكر.
  - name: og:title
    content: اختصارات Google Cloud | Dotfiles
  - name: og:description
    content: اختصارات لـ Google Cloud SDK. أدر Compute Engine وIAM وCloud SQL والمزيد بأوامر سهلة التذكر.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات Google Cloud

مختصرات سهلة التذكر لسطر أوامر Google Cloud SDK.

## نظرة عامة

هذه الاختصارات معرّفة في `gcloud.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi. تغلف أوامر Google Cloud SDK الشائعة لتبسيط إدارة Compute Engine وIAM وCloud SQL وخدمات GCP الأخرى.

## المرجع

### الأوامر الأساسية

| الاختصار | الوصف |
|-------|-------------|
| `gcd` | تعيين المشروع الافتراضي لاسم المجلد الحالي |
| `gck` | سرد جميع الإعدادات |
| `gcsa` | تعيين الحساب للإعداد الحالي |
| `gcso` | فتح Google Cloud Console للمشروع الحالي |

### Compute Engine

| الاختصار | الوصف |
|-------|-------------|
| `gci` | إدارة نسخ Compute Engine |
| `gcca` | إدارة عناوين IP لـ Compute Engine |
| `gccc` | إنشاء نسخة آلة افتراضية جديدة |
| `gcco` | الاتصال بنسخة آلة افتراضية عبر SSH |

### التخزين وقواعد البيانات

| الاختصار | الوصف |
|-------|-------------|
| `gcss` | إدارة Cloud Storage |
| `gcsq` | إدارة Cloud SQL |
| `gcdb` | إدارة Cloud Datastore |

### بدون خادم والحاويات

| الاختصار | الوصف |
|-------|-------------|
| `gcf` | إدارة Cloud Functions |
| `gcro` | إدارة Cloud Run |
| `gcu` | إدارة App Engine |
| `gcs` | إدارة مجموعات Kubernetes Engine |

### الشبكة والأمان

| الاختصار | الوصف |
|-------|-------------|
| `gcn` | إدارة Cloud Networks |
| `gcic` | إدارة Identity and Access Management |
| `gcki` | إدارة Cloud KMS |

### العمليات والمراقبة

| الاختصار | الوصف |
|-------|-------------|
| `gcla` | إدارة Cloud Logging |
| `gcma` | إدارة Cloud Monitoring |
| `gclb` | إدارة Cloud Build |
| `gct` | إدارة Cloud Tasks |
