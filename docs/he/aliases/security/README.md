---
description: קיצורי אבטחה להגנה על קבצי תצורה ושמירה על אי-שינוי קבצים. נעל ושחרר קבצי מעטפת קריטיים.
lang: he-IL
metaTitle: קיצורי אבטחה - Dotfiles (IL)
permalink: /he/aliases/security/
sidebar: true

meta:
  - name: keywords
    content: security, immutability, file lock, shell aliases, dotfiles, configuration protection
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי אבטחה להגנה על קבצי תצורה ושמירה על אי-שינוי קבצים. נעל ושחרר קבצי מעטפת קריטיים.
  - name: twitter:title
    content: קיצורי אבטחה - Dotfiles
  - name: og:title
    content: קיצורי אבטחה - Dotfiles
  - name: og:description
    content: קיצורי אבטחה להגנה על קבצי תצורה ושמירה על אי-שינוי קבצים. נעל ושחרר קבצי מעטפת קריטיים.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי אבטחה

הגן על קבצי תצורה קריטיים עם בקרות אי-שינוי.

## סקירה

קיצורים אלה מוגדרים ב-`security.aliases.sh` ונטענים אוטומטית על ידי Chezmoi.

## הפניה

### אי-שינוי

| קיצור | תיאור |
|:---|:---|
| `lock-configs` | נעל קבצים קריטיים למניעת שינויים |
| `unlock-configs` | שחרר קבצים קריטיים לעריכה |
| `check-locks` | בדוק את מצב הנעילה של קבצים קריטיים |

