---
description: קיצורי פיתוח Rust ל-Cargo ו-Rustup. קיצורים לבנייה, בדיקה וניהול פרויקטי Rust.
lang: he-IL
metaTitle: קיצורי Rust - Dotfiles (IL)
permalink: /he/aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, shell aliases, dotfiles, rust development
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי פיתוח Rust ל-Cargo ו-Rustup. קיצורים לבנייה, בדיקה וניהול פרויקטי Rust.
  - name: twitter:title
    content: קיצורי Rust - Dotfiles
  - name: og:title
    content: קיצורי Rust - Dotfiles
  - name: og:description
    content: קיצורי פיתוח Rust ל-Cargo ו-Rustup. קיצורים לבנייה, בדיקה וניהול פרויקטי Rust.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Rust

קיצורים לפיתוח Rust באמצעות Cargo ו-Rustup.

## סקירה

קיצורים אלה מוגדרים ב-`rust.aliases.sh` ונטענים אוטומטית על ידי Chezmoi.

## הפניה

### פקודות בסיסיות

| קיצור | תיאור |
|:---|:---|
| `cg` | קיצור דרך ל-Cargo |
| `cgn` | צור פרויקט בינארי חדש |
| `cgni` | צור פרויקט ספריה חדש |
| `cginit` | אתחל פרויקט בתיקיה הנוכחית |

### בנייה והרצה

| קיצור | תיאור |
|:---|:---|
| `cgb` | בנה debug |
| `cgbr` | בנה release |
| `cgr` | הרץ debug |
| `cgrr` | הרץ release |
| `cgw` | צפה ובנה מחדש |

### בדיקה ו-Benchmarking

| קיצור | תיאור |
|:---|:---|
| `cgt` | הרץ בדיקות |
| `cgtr` | הרץ בדיקות במצב release |
| `cgbh` | הרץ benchmarks |

### איכות קוד

| קיצור | תיאור |
|:---|:---|
| `cgc` | בדוק קומפילציה |
| `cgcl` | נקה תוצרי בנייה |
| `cgcy` | הרץ בדיקות clippy |
| `cgf` | פרמט קוד |
| `cgfx` | תקן בעיות קוד אוטומטית |
| `cgaud` | בדיקת פגיעויות אבטחה |

### תיעוד

| קיצור | תיאור |
|:---|:---|
| `cgd` | בנה ופתח תיעוד |
| `cgdr` | בנה תיעוד release |

### תלויות

| קיצור | תיאור |
|:---|:---|
| `cga` | הוסף תלות |
| `cgad` | הוסף תלות dev |
| `cgu` | עדכן תלויות |
| `cgo` | בדוק תלויות מיושנות |
| `cgtree` | הצג עץ תלויות |

### עדכוני Rustup

| קיצור | תיאור |
|:---|:---|
| `ru` | עדכן את כל ה-toolchains |
| `rus` | עדכן toolchain stable |
| `run` | עדכן toolchain nightly |

### ניהול Toolchain

| קיצור | תיאור |
|:---|:---|
| `rtl` | הצג toolchains מותקנים |
| `rde` | הגדר toolchain ברירת מחדל |

### תיעוד ועזרה

| קיצור | תיאור |
|:---|:---|
| `rdo` | פתח תיעוד Rust |
