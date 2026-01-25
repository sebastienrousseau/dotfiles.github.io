---
title: "קיצורי Pnpm: קיצורי ניהול חבילות מהיר"
description: "ייעל זרימות עבודה של pnpm עם קיצורים להתקנה, בנייה, בדיקה וניהול תלויות Node.js."
lang: he-IL
metaTitle: "קיצורי Pnpm | Dotfiles"
permalink: /he/aliases/pnpm/
sidebar: true
meta:
  - name: keywords
    content: "pnpm aliases, package manager, node.js, npm alternative, dotfiles, shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "קיצורי Pnpm | Dotfiles"
  - name: twitter:description
    content: "ייעל זרימות עבודה של pnpm עם קיצורים להתקנה, בנייה, בדיקה וניהול תלויות Node.js."
  - name: og:title
    content: "קיצורי Pnpm | Dotfiles"
  - name: og:description
    content: "ייעל זרימות עבודה של pnpm עם קיצורים להתקנה, בנייה, בדיקה וניהול תלויות Node.js."
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Pnpm

קיצורים למנהל החבילות המהיר ויעיל בדיסק.

## סקירה

קיצורים אלה מוגדרים ב-`pnpm.aliases.sh` ונטענים אוטומטית על ידי chezmoi. הם מספקים גישה מהירה לפקודות [pnpm](https://pnpm.io/) נפוצות לניהול חבילות Node.js.

## הפניה

### אתחול פרויקט

| קיצור | תיאור |
|-------|-------------|
| `pni` | אתחל פרויקט חדש |
| `pnc` | צור פרויקט חדש |
| `pnin` | התקן תלויות פרויקט |
| `pnun` | הסר תלויות פרויקט |

### פיתוח

| קיצור | תיאור |
|-------|-------------|
| `pnb` | בנה את הפרויקט |
| `pnrun` | הרץ סקריפט מהפרויקט |
| `pnd` | הרץ את הפרויקט במצב dev |
| `pns` | הרץ את הפרויקט במצב serve |
| `pnst` | התחל את הפרויקט |

### בדיקה ואיכות

| קיצור | תיאור |
|-------|-------------|
| `pnt` | בדוק את הפרויקט |
| `pntc` | בדוק את הפרויקט עם כיסוי |
| `pnln` | בדוק lint לפרויקט |
| `pndoc` | צור תיעוד פרויקט |

### ניהול תלויות

| קיצור | תיאור |
|-------|-------------|
| `pnls` | הצג את כל התלויות |
| `pnout` | בדוק תלויות מיושנות |
| `pnwhy` | בדוק למה תלות מותקנת |
| `pnad` | הוסף תלות dev |
| `pnrm` | הסר תלות |
| `pnup` | עדכן תלות |
| `pnui` | עדכן תלות באופן אינטראקטיבי |

### חבילות גלובליות

| קיצור | תיאור |
|-------|-------------|
| `pnga` | הוסף תלות גלובלית |
| `pngls` | הצג את כל התלויות הגלובליות |
| `pngrm` | הסר תלות גלובלית |
| `pngu` | עדכן תלות גלובלית |

### פרסום וכלי עזר

| קיצור | תיאור |
|-------|-------------|
| `pnpub` | פרסם את הפרויקט |
| `pnx` | קיצור ל-pnpx |
| `pnh` | הצג עזרה |
