---
title: "קיצורי Google Cloud: ייעל את זרימת העבודה עם gcloud CLI"
description: "קיצורים ל-Google Cloud SDK. נהל Compute Engine, IAM, Cloud SQL ועוד עם פקודות קלות לזכירה."
lang: he-IL
metaTitle: "קיצורי Google Cloud | Dotfiles"
permalink: /he/aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "gcloud aliases, google cloud cli, gcloud shortcuts, cloud sdk commands, dotfiles, shell aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "קיצורי Google Cloud | Dotfiles"
  - name: twitter:description
    content: "קיצורים ל-Google Cloud SDK. נהל Compute Engine, IAM, Cloud SQL ועוד עם פקודות קלות לזכירה."
  - name: og:title
    content: "קיצורי Google Cloud | Dotfiles"
  - name: og:description
    content: "קיצורים ל-Google Cloud SDK. נהל Compute Engine, IAM, Cloud SQL ועוד עם פקודות קלות לזכירה."
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Google Cloud

קיצורים קלים לזכירה לשורת הפקודה של Google Cloud SDK.

## סקירה

קיצורים אלה מוגדרים ב-`gcloud.aliases.sh` ונטענים אוטומטית על ידי chezmoi. הם עוטפים פקודות Google Cloud SDK נפוצות לפישוט ניהול Compute Engine, IAM, Cloud SQL ושירותי GCP אחרים.

## הפניה

### פקודות ליבה

| קיצור | תיאור |
|-------|-------------|
| `gcd` | הגדר את הפרויקט ברירת המחדל לשם התיקיה הנוכחית |
| `gck` | הצג את כל התצורות |
| `gcsa` | הגדר את החשבון לתצורה הנוכחית |
| `gcso` | פתח את Google Cloud Console לפרויקט הנוכחי |

### Compute Engine

| קיצור | תיאור |
|-------|-------------|
| `gci` | נהל מכונות Compute Engine |
| `gcca` | נהל כתובות IP של Compute Engine |
| `gccc` | צור מכונה וירטואלית חדשה |
| `gcco` | התחבר למכונה וירטואלית דרך SSH |

### אחסון ומסדי נתונים

| קיצור | תיאור |
|-------|-------------|
| `gcss` | נהל Cloud Storage |
| `gcsq` | נהל Cloud SQL |
| `gcdb` | נהל Cloud Datastore |

### Serverless וקונטיינרים

| קיצור | תיאור |
|-------|-------------|
| `gcf` | נהל Cloud Functions |
| `gcro` | נהל Cloud Run |
| `gcu` | נהל App Engine |
| `gcs` | נהל אשכולות Kubernetes Engine |

### נתונים וניתוח

| קיצור | תיאור |
|-------|-------------|
| `gcdp` | נהל Cloud Dataproc |
| `gcps` | נהל Cloud Pub/Sub |

### רשת ואבטחה

| קיצור | תיאור |
|-------|-------------|
| `gcn` | נהל רשתות ענן |
| `gcic` | נהל Identity and Access Management |
| `gcki` | נהל Cloud KMS |

### תפעול וניטור

| קיצור | תיאור |
|-------|-------------|
| `gcla` | נהל Cloud Logging |
| `gcma` | נהל Cloud Monitoring |
| `gclb` | נהל Cloud Build |
| `gct` | נהל Cloud Tasks |
