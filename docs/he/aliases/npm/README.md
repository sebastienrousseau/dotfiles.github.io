---
title: "קיצורי NPM: ייעל את ניהול חבילות Node"
description: "האץ זרימות עבודה של npm עם קיצורי מעטפת אינטואיטיביים לפקודות install, build, test ו-publish."
lang: he-IL
metaTitle: "קיצורי NPM | Dotfiles"
permalink: /he/aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: npm aliases, node package manager, npm shortcuts, shell aliases, dotfiles, npm commands
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי NPM | Dotfiles
  - name: twitter:description
    content: האץ זרימות עבודה של npm עם קיצורי מעטפת אינטואיטיביים לפקודות install, build, test ו-publish.
  - name: og:title
    content: קיצורי NPM | Dotfiles
  - name: og:description
    content: האץ זרימות עבודה של npm עם קיצורי מעטפת אינטואיטיביים לפקודות install, build, test ו-publish.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי NPM

פשט את פיתוח Node.js שלך עם פקודות קצרות למנהל חבילות npm.

## סקירה

קיצורים אלה מוגדרים ב-`npm.aliases.sh` ונטענים אוטומטית על ידי chezmoi. הם מספקים גישה מהירה לפעולות npm נפוצות.

## הפניה

### ניהול חבילות

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `npi` | `npm install` | התקן חבילת npm |
| `npg` | `npm install -g` | חבילת npm גלובלית |
| `nprm` | `npm uninstall` | הסר חבילת npm |
| `npu` | `npm update` | עדכן חבילת npm |
| `npl` | `npm list` | הצג חבילות npm |
| `npc` | `npm cache` | מטמון חבילת npm |

### סקריפטים

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `npr` | `npm run` | הרץ סקריפט npm |
| `nps` | `npm start` | התחל סקריפט npm |
| `npb` | `npm run build` | בנה סקריפט npm |
| `npd` | `npm run dev` | סקריפט npm לפיתוח |
| `npt` | `npm test` | בדוק סקריפט npm |
| `nprw` | `npm run watch` | הרץ סקריפט npm watch |
| `npsv` | `npm run serve` | הגש סקריפט npm |

### פרסום וניתוח

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `npp` | `npm publish` | פרסם חבילת npm |
| `npa` | `npm audit` | בדוק אבטחת חבילות npm |
| `npx` | `npm exec` | הפעל חבילת npm |
| `npy` | `npm why` | למה חבילת npm |
