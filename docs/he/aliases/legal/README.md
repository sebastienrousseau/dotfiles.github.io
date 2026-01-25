---
title: "קיצורי Legal: כלי תאימות קוד פתוח"
description: "קיצורי מעטפת לסריקת רישיונות, כותרות זכויות יוצרים וניהול ייחוס ב-dotfiles שלך."
lang: he-IL
metaTitle: "קיצורי Legal | Dotfiles"
permalink: /he/aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: "legal aliases, license scanning, copyright headers, open source compliance, dotfiles"
---

# קיצורי Legal

כלי מעטפת לניהול תאימות קוד פתוח, סריקת רישיונות וייחוס.

## סקירה

קיצורי legal מספקים זרימת עבודה יעילה לשמירה על תאימות קוד פתוח בפרויקטים שלך. כלים אלה מטפלים בסריקת רישיונות, ניהול כותרות זכויות יוצרים וייחוס תלויות.

## הפניה

### סריקת רישיונות

| קיצור | תיאור | סוג |
|-------|-------------|------|
| `fossology-start` | התחל שרת FOSSology מקומי בפורט 8081 | Docker |
| `fossology-stop` | עצור שרת FOSSology | Docker |
| `license-scan` | סריקת רישיונות מהירה של התיקיה הנוכחית דרך Trivy | בינארי |

### כותרות זכויות יוצרים

| קיצור | תיאור | סוג |
|-------|-------------|------|
| `add-headers` | הוסף באופן רקורסיבי כותרות רישיון MIT לכל קבצי המקור | Docker (google/addlicense) |

### ייחוס

| קיצור | תיאור | סוג |
|-------|-------------|------|
| `gen-notice` | צור קובץ NOTICE לתלויות (תמיכה ב-Go תחילה) | Docker |

### תרומה

| קיצור | תיאור | סוג |
|-------|-------------|------|
| `check-cla` | צפה בבדיקות GitHub PR כולל סטטוס CLA | CLI (gh) |

## דרישות

- **Docker** - נדרש לבידוד כלי תאימות
- **GitHub CLI (gh)** - נדרש לבדיקת PR ו-CLA
- **Trivy** - מותקן אוטומטית או מומלץ לסריקה מהירה
