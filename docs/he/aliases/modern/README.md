---
title: "קיצורי Modern Tooling: תחליפי Unix מבוססי Rust"
description: "קיצורי מעטפת מודרניים ל-eza, bat ו-ripgrep. החלף כלי Unix מדור קודם בחלופות Rust מהירות יותר."
lang: he-IL
metaTitle: "קיצורי Modern Tooling | Dotfiles"
permalink: /he/aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: "modern aliases, eza, bat, ripgrep, rust cli tools, dotfiles, shell"
---

# קיצורי Modern Tooling

תחליפים מהירים וחכמים יותר לפקודות Unix מדור קודם.

## סקירה

הקיצורים המודרניים המוגדרים ב-`modern.aliases.sh` מספקים חלופות מבוססות Rust לכלי Unix מסורתיים. קיצורים אלה נטענים אוטומטית על ידי `chezmoi` וחוזרים בחסד לפקודות סטנדרטיות כאשר הכלים המודרניים אינם זמינים.

## הפניה

### הצגת קבצים עם eza

מחליף את `ls` כאשר `eza` מותקן.

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `ls` | `eza --icons` | הצג קבצים עם אייקונים |
| `ll` | `eza -alF` | פורמט רשימה ארוכה |
| `la` | `eza -a` | הצג את כל הקבצים כולל מוסתרים |
| `lt` | `eza --tree` | הצג עץ תיקיות |

חוזר ל-`ls` סטנדרטי אם `eza` אינו מותקן.

### תוכן קבצים עם bat

מחליף את `cat` כאשר `bat` מותקן.

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `cat` | `bat` | הצג תוכן קובץ עם הדגשת תחביר |

### חיפוש עם ripgrep

מחליף את `grep` כאשר `rg` מותקן.

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `grep` | `rg` | חפש תוכן קבצים עם Ripgrep |
