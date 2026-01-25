---
title: "קיצורי Configuration: גישה מהירה לקבצי תצורה"
description: "פתח קבצי תצורת מעטפת, Git, SSH ושרתים מיידית עם קיצורי מעטפת אלה ל-Bash ו-Zsh."
lang: he-IL
metaTitle: "קיצורי Configuration | Dotfiles"
permalink: /he/aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: קיצורי Configuration | Dotfiles
  - name: twitter:description
    content: פתח קבצי תצורת מעטפת, Git, SSH ושרתים מיידית עם קיצורי מעטפת אלה.
  - name: og:title
    content: קיצורי Configuration | Dotfiles
  - name: og:description
    content: פתח קבצי תצורת מעטפת, Git, SSH ושרתים מיידית עם קיצורי מעטפת אלה.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Configuration

פתח קבצי תצורה בעורך ברירת המחדל שלך בפקודה אחת.

## סקירה

קיצורי configuration מספקים קיצורי דרך לפתיחת קבצי תצורה הנערכים לעתים קרובות. קיצורים אלה מוגדרים ב-`configuration.aliases.sh` ונטענים אוטומטית על ידי chezmoi.

כל קיצור מפעיל את הקובץ המתאים בעורך הטקסט ברירת המחדל של המערכת שלך, ומבטל את הצורך לזכור נתיבי קבצים או להקליד פקודות ארוכות.

## הפניה

### תצורת מעטפת

| קיצור | תיאור |
|-------|-------------|
| `bshrc` | פתח קובץ תצורת Bash (~/.bashrc) |
| `bshp` | פתח פרופיל Bash (~/.bash_profile) |
| `zshrc` | פתח קובץ תצורת Zsh (~/.zshrc) |
| `zshp` | פתח פרופיל Zsh (~/.zprofile) |

### בקרת גרסאות

| קיצור | תיאור |
|-------|-------------|
| `gcfg` | פתח קובץ תצורת Git (~/.gitconfig) |
| `gign` | פתח קובץ התעלמות Git (~/.gitignore) |

### רשת ושרתים

| קיצור | תיאור |
|-------|-------------|
| `apconf` | פתח קובץ תצורת Apache |
| `ngconf` | פתח קובץ תצורת Nginx |
| `sshconf` | פתח קובץ תצורת SSH (~/.ssh/config) |
| `hosts` | פתח קובץ hosts (/etc/hosts) |

### כלי פיתוח

| קיצור | תיאור |
|-------|-------------|
| `dockcomp` | פתח קובץ Docker Compose |
| `eddir` | פתח תיקיה נוכחית בעורך ברירת המחדל |
