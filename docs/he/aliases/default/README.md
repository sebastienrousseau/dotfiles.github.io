---
title: "קיצורי Default: קיצורי מעטפת חיוניים"
description: "קיצורי מעטפת חיוניים לניווט, שליטה במערכת ומשימות יומיומיות. פשט את זרימת העבודה בטרמינל עם קיצורים אוניברסליים אלה."
lang: he-IL
metaTitle: "קיצורי Default | Dotfiles"
permalink: /he/aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "default aliases, shell aliases, terminal shortcuts, dotfiles, bash aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי Default | Dotfiles
  - name: twitter:description
    content: קיצורי מעטפת חיוניים לניווט, שליטה במערכת ומשימות יומיומיות.
  - name: og:title
    content: קיצורי Default | Dotfiles
  - name: og:description
    content: קיצורי מעטפת חיוניים לניווט, שליטה במערכת ומשימות יומיומיות.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Default

קיצורי מעטפת חיוניים למשימות טרמינל יומיומיות.

## סקירה

קיצורי ברירת המחדל מספקים אוסף של קיצורי מעטפת אוניברסליים המייעלים פעולות טרמינל נפוצות. קיצורים אלה מוגדרים ב-`default.aliases.sh` ונטענים אוטומטית על ידי chezmoi בכל המעטפות הנתמכות.

קיצורים אלה מכסים כלי עזר כלליים, פקודות יציאה, אבחון רשת, ניטור מערכת וניווט במערכת הקבצים.

## הפניה

### כללי

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | הצג תאריך ושעה נוכחיים |
| `p` | `pwd` | הדפס תיקיית עבודה |
| `path` | `echo ${PATH//:/\\n}` | הצג משתנה PATH בשורות |
| `r` | `reload` | טען מחדש את המעטפת |
| `t` | `tail -f` | עקוב אחר פלט קובץ בזמן אמת |
| `wk` | `date +%V` | הצג מספר שבוע נוכחי |

### יציאה וכיבוי

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `q` | `exit` | צא מהמעטפת |
| `quit` | `exit` | צא מהמעטפת |
| `bye` | `exit` | צא מהמעטפת |
| `:q` | `exit` | צא מהמעטפת (סגנון vim) |
| `halt` | `sudo /sbin/halt` | עצור את המערכת |
| `poweroff` | `sudo /sbin/shutdown` | כבה את המערכת |
| `reboot` | `sudo /sbin/reboot` | הפעל מחדש את המערכת |

### היסטוריה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `h` | `history` | הצג היסטוריית פקודות |
| `history` | `fc -il 1` | הצג היסטוריה עם חותמות זמן ISO 8601 |

### רשת

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | הגדר ממשקי רשת |
| `ipinfo` | `ipconfig getpacket en0` | קבל פרמטרי רשת עבור en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | הצג מאזיני רשת פעילים |
| `op` | `sudo lsof -i -P` | הצג פורטים פתוחים |
| `ping` | `ping -c 5` | שלח 5 חבילות ping |
| `ports` | `netstat -tulan` | הצג כל הפורטים המאזינים |

### ניטור מערכת

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `top` | `sudo btop` | צג תהליכים אינטראקטיבי |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | נקה קבצי יומן ASL |

### כלי עזר

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | ספור קבצים בתיקיה נוכחית |
| `qfind` | `find . -name` | חיפוש קובץ מהיר |
| `reload` | `exec $SHELL -l` | טען מחדש את המעטפת |
| `wth` | `curl -s "wttr.in/?format=3"` | קבל מזג אוויר נוכחי |
