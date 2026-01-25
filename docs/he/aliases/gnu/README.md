---
title: "קיצורי GNU Coreutils: קיצורי מעטפת ללינוקס"
description: "ייעל את זרימת העבודה שלך עם קיצורי GNU Coreutils לניהול קבצים, עיבוד טקסט וכלי checksum."
lang: he-IL
metaTitle: "קיצורי GNU Coreutils | Dotfiles"
permalink: /he/aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: gnu coreutils, shell aliases, linux utilities, file management, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי GNU Coreutils | Dotfiles
  - name: twitter:description
    content: ייעל את זרימת העבודה שלך עם קיצורי GNU Coreutils לניהול קבצים, עיבוד טקסט וכלי checksum.
  - name: og:title
    content: קיצורי GNU Coreutils | Dotfiles
  - name: og:description
    content: ייעל את זרימת העבודה שלך עם קיצורי GNU Coreutils לניהול קבצים, עיבוד טקסט וכלי checksum.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי GNU Coreutils

קיצורים לכלי Unix חיוניים לזרימות עבודה מהירות יותר בשורת הפקודה.

## סקירה

קיצורי GNU Coreutils מספקים פקודות קצרות לכלי Unix סטנדרטיים. מוגדרים ב-`gnu.aliases.sh` ונטענים אוטומטית על ידי chezmoi, קיצורים אלה מפשטים פעולות קבצים, עיבוד טקסט ומשימות אימות נתונים.

## הפניה

### ניהול קבצים

| קיצור | תיאור |
|-------|-------------|
| `basename` | הסר תיקיה וסיומת משמות קבצים |
| `cp` | העתק קבצים ותיקיות |
| `dirname` | הסר סיומת שאינה תיקיה משמות קבצים |
| `ln` | צור קישורים בין קבצים |
| `ls` | הצג תוכן תיקיה |
| `mkdir` | צור תיקיות |
| `mv` | העבר או שנה שם קבצים או תיקיות |
| `pwd` | הדפס שם תיקיית העבודה |
| `rm` | הסר קבצים או תיקיות |
| `rmdir` | הסר תיקיות ריקות |

### עיבוד טקסט

| קיצור | תיאור |
|-------|-------------|
| `awk` | שפת סריקה ועיבוד דפוסים |
| `cat` | שרשר והצג קבצים |
| `cut` | הסר קטעים מכל שורה בקבצים |
| `diff` | השווה קבצים שורה אחר שורה |
| `grep` | הדפס שורות התואמות לדפוס |
| `head` | פלט החלק הראשון של קבצים |
| `sed` | עורך זרם לסינון והמרת טקסט |
| `sort` | מיין שורות של קבצי טקסט |
| `tail` | פלט החלק האחרון של קבצים |
| `tr` | תרגם או מחק תווים |

### כלי Checksum

| קיצור | תיאור |
|-------|-------------|
| `b2sum` | הדפס או בדוק תקצירי BLAKE2 |
| `cksum` | הדפס checksum CRC וספירות בתים |
| `sha1sum` | הדפס או בדוק תקצירי SHA1 |
| `sha256sum` | הדפס או בדוק תקצירי SHA256 |
| `sha512sum` | הדפס או בדוק תקצירי SHA512 |

### כלי קידוד

| קיצור | תיאור |
|-------|-------------|
| `base32` | הדפס או המר נתוני base32 |
| `base64` | קידוד או פענוח נתוני base64 |
| `basenc` | קידוד או פענוח נתונים בפורמטים שונים |
