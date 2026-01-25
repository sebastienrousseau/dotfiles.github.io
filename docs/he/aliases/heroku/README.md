---
title: "קיצורי Heroku: קיצורי מעטפת ל-Heroku CLI"
description: "האץ זרימות עבודה של Heroku עם למעלה מ-200 קיצורי מעטפת לאפליקציות, מסדי נתונים, pipelines ופריסות."
lang: he-IL
metaTitle: קיצורי Heroku | Dotfiles
permalink: /he/aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: heroku aliases, heroku cli shortcuts, heroku shell commands, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי Heroku | Dotfiles
  - name: twitter:description
    content: האץ זרימות עבודה של Heroku עם למעלה מ-200 קיצורי מעטפת לאפליקציות, מסדי נתונים, pipelines ופריסות.
  - name: og:title
    content: קיצורי Heroku | Dotfiles
  - name: og:description
    content: האץ זרימות עבודה של Heroku עם למעלה מ-200 קיצורי מעטפת לאפליקציות, מסדי נתונים, pipelines ופריסות.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Heroku

קיצורי מעטפת ל-Heroku CLI, מוגדרים ב-`heroku.aliases.sh` ונטענים אוטומטית על ידי chezmoi.

## סקירה

אוסף זה מספק למעלה מ-200 קיצורים ל-[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), המכסים ניהול אפליקציות, תוספים, מסדי נתונים, pipelines, קונטיינרים ועוד.

## הפניה

### פקודות כלליות

| קיצור | תיאור |
|-------|-------------|
| `hkk` | קיצור דרך לפקודת Heroku CLI |
| `hkh` | הצג עזרה ל-Heroku |
| `hkl` | הצג את כל הפקודות |
| `hklg` | הצג פלט יומן אחרון |
| `hks` | הצג סטטוס נוכחי של פלטפורמת Heroku |
| `hku` | עדכן את Heroku CLI |

### אפליקציות

| קיצור | תיאור |
|-------|-------------|
| `hkapc` | צור אפליקציה חדשה |
| `hkapi` | הצג מידע מפורט על אפליקציה |
| `hkapk` | הרוס אפליקציה לצמיתות |
| `hkapl` | הצג את האפליקציות שלך |
| `hkapo` | פתח את האפליקציה בדפדפן |
| `hkapr` | שנה שם אפליקציה |

### תוספים

| קיצור | תיאור |
|-------|-------------|
| `hkadc` | צור משאב תוסף חדש |
| `hkadi` | הצג מידע מפורט על תוסף |
| `hkadk` | הרוס משאב תוסף לצמיתות |
| `hkadl` | הצג את התוספים והצירופים שלך |

### משתני תצורה

| קיצור | תיאור |
|-------|-------------|
| `hkcfg` | הצג ערך תצורה בודד לאפליקציה |
| `hkcfs` | הגדר משתנה תצורה אחד או יותר |
| `hkcfu` | הסר משתנה תצורה אחד או יותר |
| `hkcfv` | הצג את משתני התצורה לאפליקציה |

### PostgreSQL

| קיצור | תיאור |
|-------|-------------|
| `hkpg` | הצג מידע על מסד נתונים |
| `hkpgbk` | הצג גיבויי מסד נתונים |
| `hkpgbkc` | לכוד גיבוי חדש |
| `hkpgpsql` | פתח מעטפת psql למסד הנתונים |

### Pipelines

| קיצור | תיאור |
|-------|-------------|
| `hkpipe` | הצג pipelines שיש לך גישה אליהם |
| `hkpipec` | צור pipeline חדש |
| `hkpipei` | הצג רשימת אפליקציות ב-pipeline |
| `hkpipep` | קדם את השחרור האחרון של אפליקציה זו לאפליקציות ה-downstream שלה |

### שחרורים

| קיצור | תיאור |
|-------|-------------|
| `hkrel` | הצג את השחרורים לאפליקציה |
| `hkreli` | הצג מידע מפורט לשחרור |
| `hkrelr` | החזר לשחרור קודם |
