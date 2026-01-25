---
description: קיצורי ניווט בתיקיות עם סימניות, מעקב היסטוריה וקיצורי דרך חכמים. נווט במערכת הקבצים שלך מהר יותר.
lang: he-IL
metaTitle: קיצורי CD - Dotfiles (IL)
permalink: /he/aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי ניווט בתיקיות עם סימניות, מעקב היסטוריה וקיצורי דרך חכמים. נווט במערכת הקבצים שלך מהר יותר.
  - name: twitter:title
    content: קיצורי CD - Dotfiles
  - name: og:title
    content: קיצורי CD - Dotfiles
  - name: og:description
    content: קיצורי ניווט בתיקיות עם סימניות, מעקב היסטוריה וקיצורי דרך חכמים. נווט במערכת הקבצים שלך מהר יותר.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי CD

נווט במערכת הקבצים שלך מהר יותר. סימניות, היסטוריה וקיצורי דרך חכמים.

## סקירה

קיצורים אלה מוגדרים ב-`cd.aliases.sh` ונטענים אוטומטית על ידי Chezmoi.

## הפניה

### קיצורי ניווט

| קיצור | תיאור |
|:---|:---|
| `-` | עבור לתיקיה הקודמת |
| `..` | עלה רמה אחת |
| `...` | עלה שתי רמות |
| `....` | עלה שלוש רמות |
| `.....` | עלה ארבע רמות |
| `hom` | נווט לתיקיית הבית |

### קיצורי תיקיות

| קיצור | נתיב | תיאור |
|:---|:---|:---|
| `app` | `~/Applications` | יישומים |
| `cod` | `~/Code` | תיקיית קוד |
| `dsk` | `~/Desktop` | שולחן העבודה |
| `doc` | `~/Documents` | מסמכים |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | הורדות |
| `mus` | `~/Music` | מוזיקה |
| `pic` | `~/Pictures` | תמונות |
| `vid` | `~/Videos` | סרטונים |

### תיקיות מערכת

| קיצור | נתיב | תיאור |
|:---|:---|:---|
| `etc` | `/etc` | תצורת מערכת |
| `var` | `/var` | קבצים משתנים |
| `tmp` | `/tmp` | קבצים זמניים |
| `usr` | `/usr` | תוכניות משתמש |

### סימניות

| פקודה | קיצור | תיאור |
|:---|:---|:---|
| `bookmark [name]` | `bm` | צור סימניה |
| `bookmark_list` | `bml` | הצג סימניות |
| `bookmark_update` | `bmu` | עדכן סימניה |
| `bookmark_remove` | `bmr` | מחק סימניה |
| `goto <name>` | `bmg` | עבור לסימניה |

```bash
bm work-project      # צור סימניה
bmg work-project     # נווט לסימניה
bml                  # הצג כל הסימניות
```

### היסטוריה

| פקודה | קיצור | תיאור |
|:---|:---|:---|
| `dirhistory` | `dh` | הצג היסטוריית תיקיות |
| `lwd` | `ld` | חזור לתיקיה האחרונה |

### מתקדם

| פקודה | קיצור | תיאור |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | צור והיכנס לתיקיה |
| `proj` | `pr` | עבור לשורש הפרויקט |
| `pushd` | `pd` | דחוף תיקיה למחסנית |
| `popd` | — | שלוף מהמחסנית |
| `dirs` | — | הצג מחסנית תיקיות |

## תצורה

התאם התנהגות עם משתני סביבה:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## עזרה

הרץ `cdhelp` להצגת כל הפקודות או `cdversion` למידע גרסה.
