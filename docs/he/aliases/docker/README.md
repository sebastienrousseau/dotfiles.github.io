---
title: "קיצורי Docker: ייעל את זרימת העבודה עם קונטיינרים"
description: "קיצורי Docker מקיפים לקונטיינרים, תמונות, volumes, רשתות, Compose ו-Swarm. הגבר פרודוקטיביות עם פקודות קצרות."
lang: he-IL
metaTitle: "קיצורי Docker | Dotfiles"
permalink: /he/aliases/docker/
sidebar: true
meta:
  - name: keywords
    content: "docker aliases, docker shortcuts, container commands, docker compose aliases, docker swarm aliases, dotfiles"
---

# קיצורי Docker

ייעל את זרימת העבודה עם קונטיינרים עם קיצורים אינטואיטיביים ל-Docker, Compose ו-Swarm.

## סקירה

קיצורים אלה מוגדרים ב-`docker.aliases.sh` ונטענים אוטומטית על ידי chezmoi. הם מספקים סט מקיף של קיצורים לפיתוח Docker, המכסים קונטיינרים, תמונות, volumes, רשתות, Docker Compose ופעולות Docker Swarm.

## הפניה

### פקודות בסיסיות

| קיצור | תיאור |
|-------|-------------|
| `dk` | קיצור דרך ל-Docker |
| `dkv` | הצג גרסת Docker |
| `dki` | הצג מידע כללי על המערכת |
| `dkl` | התחבר לרישום Docker |
| `dklo` | התנתק מרישום Docker |

### פעולות קונטיינר

| קיצור | תיאור |
|-------|-------------|
| `dkps` | הצג קונטיינרים פעילים |
| `dkpsa` | הצג את כל הקונטיינרים |
| `dkr` | הרץ פקודה בקונטיינר חדש |
| `dkri` | הרץ קונטיינר אינטראקטיבי |
| `dkrd` | הרץ קונטיינר ברקע |
| `dks` | התחל קונטיינר |
| `dkst` | עצור קונטיינר |
| `dkrs` | הפעל מחדש קונטיינר |
| `dkrm` | הסר קונטיינר |
| `dkrma` | הסר את כל הקונטיינרים |

### תמונות

| קיצור | תיאור |
|-------|-------------|
| `dki` | הצג תמונות |
| `dkia` | הצג את כל התמונות |
| `dkb` | בנה תמונה |
| `dkbt` | בנה ותייג תמונה |
| `dkpu` | דחוף תמונה לרישום |
| `dkrmi` | הסר תמונה |
| `dkprune` | הסר נתונים שאינם בשימוש |

### Docker Compose

| קיצור | תיאור |
|-------|-------------|
| `dc` | קיצור דרך ל-Docker Compose |
| `dcu` | צור והתחל קונטיינרים |
| `dcud` | צור והתחל קונטיינרים ברקע |
| `dcd` | עצור והסר קונטיינרים |
| `dcr` | הפעל מחדש שירותים |
| `dcps` | הצג קונטיינרים |
| `dcl` | הצג יומנים |
| `dclf` | עקוב אחר יומנים |
| `dcb` | בנה שירותים |

### ניהול Swarm

| קיצור | תיאור |
|-------|-------------|
| `dksw` | קיצור דרך ל-Swarm |
| `dkswi` | אתחל Docker Swarm |
| `dkswj` | הצטרף ל-Docker Swarm |
| `dkswl` | עזוב את ה-Swarm |

## זרימות עבודה נפוצות

### פיתוח קונטיינרים

```bash
# התחל קונטיינר פיתוח
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

### פיתוח Docker Compose

```bash
# התחל שירותים, בנה מחדש אם נדרש, ברקע
dcb && dcud
```

### ניקיון

```bash
# הסר את כל הקונטיינרים שנעצרו, רשתות שאינן בשימוש ותמונות מתנדנדות
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```
