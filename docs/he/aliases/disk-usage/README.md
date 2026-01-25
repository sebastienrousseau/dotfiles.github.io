---
title: "קיצורי Disk Usage: נטר אחסון עם פקודות מעטפת"
description: "קיצורי מעטפת לניטור שימוש בדיסק. הצג גדלי קבצים, מצא תיקיות גדולות ונהל אחסון ביעילות."
lang: he-IL
metaTitle: קיצורי Disk Usage | Dotfiles
permalink: /he/aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: disk usage aliases, du command, storage monitoring, file size, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי מעטפת לניטור שימוש בדיסק. הצג גדלי קבצים, מצא תיקיות גדולות ונהל אחסון ביעילות.
  - name: twitter:title
    content: קיצורי Disk Usage | Dotfiles
  - name: og:title
    content: קיצורי Disk Usage | Dotfiles
  - name: og:description
    content: קיצורי מעטפת לניטור שימוש בדיסק. הצג גדלי קבצים, מצא תיקיות גדולות ונהל אחסון ביעילות.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Disk Usage

נטר ונתח במהירות צריכת אחסון במערכת הקבצים שלך.

## סקירה

קיצורי disk usage מספקים פקודות יעילות לניטור צריכת אחסון במערכות Unix. מוגדרים ב-`disk-usage.aliases.sh`, קיצורים אלה מפשטים פעולות `du` נפוצות ונטענים אוטומטית על ידי chezmoi כחלק מתצורת Dotfiles.

## הפניה

הטבלה הבאה מפרטת את כל קיצורי disk usage הזמינים והפונקציות שלהם.

| קיצור | תיאור |
|-------|-------------|
| `du` | הצג את השימוש בדיסק של התיקיה הנוכחית |
| `du1` | הצג גודל קבצים ותיקיות בתיקיה הנוכחית |
| `duh` | הצג גודל קבצים ותיקיות בפורמט קריא |
| `ducks` | הצג את 10 הקבצים והתיקיות הגדולות ביותר בתיקיה הנוכחית |
| `dus` | הצג גודל קבצים בפורמט קריא, ממוין לפי גודל |
| `dusym` | הצג גודל קבצים ותיקיות, כולל קישורים סימבוליים |
| `dut` | הצג את גודל הקובץ הכולל של התיקיה הנוכחית |
