---
title: "קיצורי Find: פקודות חיפוש קבצים מהירות"
description: "ייעל חיפושי קבצים עם קיצורים מבוססי fd. פלט מהיר וצבעוני ופקודות אינטואיטיביות למערכות Unix."
lang: he-IL
metaTitle: "קיצורי Find | Dotfiles"
permalink: /he/aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "find aliases, fd command, file search, shell aliases, dotfiles, unix find"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי Find | Dotfiles
  - name: twitter:description
    content: ייעל חיפושי קבצים עם קיצורים מבוססי fd. פלט מהיר וצבעוני ופקודות אינטואיטיביות למערכות Unix.
  - name: og:title
    content: קיצורי Find | Dotfiles
  - name: og:description
    content: ייעל חיפושי קבצים עם קיצורים מבוססי fd. פלט מהיר וצבעוני ופקודות אינטואיטיביות למערכות Unix.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Find

קיצורי חיפוש קבצים עוצמתיים באמצעות fd, החלופה המודרנית ל-find.

## סקירה

קיצורים אלה מספקים ממשק יעיל ל-`fd`, חלופה מהירה וידידותית לפקודת `find` המסורתית. מוגדרים ב-`find.aliases.sh`, הם נטענים אוטומטית על ידי chezmoi ומציעים פלט צבעוני, תחביר אינטואיטיבי ופקודות קלות לזכירה לפעולות חיפוש קבצים נפוצות.

כאשר `fd` זמין במערכת שלך, פקודת `find` מוקצית אוטומטית לשימוש ב-`fd` במקום, מה שנותן לך ביצועים משופרים ותחביר פשוט יותר כברירת מחדל.

## הפניה

### פקודות ליבה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `fd` | `fd --color always` | חפש קבצים עם פלט צבעוני |
| `find` | `fd` | השתמש ב-fd כתחליף ברירת מחדל ל-find |

### אפשרויות חיפוש

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | הצג תוצאות עם נתיבים מוחלטים |
| `fdc` | `fd --ignore-case` | בצע חיפוש ללא רגישות לאותיות |
| `fdd` | `fd --list-details` | הצג מידע מפורט על קבצים |
| `fde` | `fd --extension` | סנן לפי סיומת קובץ |
| `fdf` | `fd --follow` | עקוב אחר קישורים סימבוליים בחיפוש |
| `fdh` | `fd --hidden` | כלול קבצים מוסתרים בתוצאות |
| `fdn` | `fd --glob` | התאם קבצים באמצעות דפוסי glob |
| `fdo` | `fd --owner` | סנן לפי בעלים של קובץ |
| `fds` | `fd --size` | סנן לפי גודל קובץ |
| `fdu` | `fd --exclude` | החרג קבצים התואמים לדפוס |
| `fdx` | `fd --exec` | בצע פקודה עבור כל תוצאה |

### פקודות עזר

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `fdv` | `fd --version` | הצג מידע גרסת fd |
