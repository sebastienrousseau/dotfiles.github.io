---
title: "קיצורי Make: ייעל את זרימת העבודה בבנייה"
description: "קיצורים לפקודות Make. פשט בניות, בדיקות ואוטומציית פרויקטים."
lang: he-IL
metaTitle: קיצורי Make | Dotfiles
permalink: /he/aliases/make/
sidebar: true
meta:
  - name: keywords
    content: make aliases, makefile shortcuts, build automation, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי Make | Dotfiles
  - name: twitter:description
    content: קיצורים לפקודות Make. פשט בניות, בדיקות ואוטומציית פרויקטים.
  - name: og:title
    content: קיצורי Make | Dotfiles
  - name: og:description
    content: קיצורים לפקודות Make. פשט בניות, בדיקות ואוטומציית פרויקטים.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Make

פשט את זרימת העבודה בבנייה עם פקודות קצרות ל-Make.

## סקירה

קיצורים אלה מספקים גישה מהירה ליעדי Make נפוצים. מוגדרים ב-`make.aliases.sh` ונטענים אוטומטית על ידי chezmoi כחלק מתצורת Dotfiles האוניברסלית.

## הפניה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `mk` | `make` | הרץ יעד Make ברירת מחדל |
| `mka` | `make all` | בנה את כל היעדים |
| `mkc` | `make clean` | נקה תוצרי בנייה |
| `mkd` | `make doc` | צור תיעוד |
| `mkf` | `make format` | פרמט קבצי מקור |
| `mkh` | `make help` | הצג מידע עזרה |
| `mki` | `make install` | התקן את הפרויקט |
| `mkr` | `make run` | הרץ את הפרויקט |
| `mkt` | `make test` | הרץ בדיקות |
