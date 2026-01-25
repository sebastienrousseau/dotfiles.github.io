---
title: "קיצורי Editor: קיצורי עריכת טקסט יעילים"
description: "קיצורי מעטפת ל-Neovim, VS Code, Vim, Nano, Emacs ו-Sublime Text. ערוך קבצים מהר יותר עם קיצורים אוניברסליים."
lang: he-IL
metaTitle: "קיצורי Editor | Dotfiles"
permalink: /he/aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: editor aliases, neovim, vim, vscode, nano, emacs, sublime text, shell shortcuts, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי מעטפת ל-Neovim, VS Code, Vim, Nano, Emacs ו-Sublime Text. ערוך קבצים מהר יותר עם קיצורים אוניברסליים.
  - name: twitter:title
    content: קיצורי Editor | Dotfiles
  - name: og:title
    content: קיצורי Editor | Dotfiles
  - name: og:description
    content: קיצורי מעטפת ל-Neovim, VS Code, Vim, Nano, Emacs ו-Sublime Text. ערוך קבצים מהר יותר עם קיצורים אוניברסליים.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Editor

קיצורים להפעלה והגדרת עורך הטקסט המועדף עליך.

## סקירה

קיצורי editor מספקים ממשק אחיד לעריכת טקסט במספר יישומים. מוגדרים ב-`editor.aliases.sh` ונטענים אוטומטית על ידי chezmoi, קיצורים אלה עובדים בהרמוניה עם `editor.sh` לזיהוי והגדרת העורך הטוב ביותר הזמין במערכת שלך.

המערכת תומכת ב-Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text ו-Atom.

## הפניה

### קיצורים אוניברסליים

קיצורים אלה עובדים עם כל עורך שהוגדר על ידי `editor.sh`.

| קיצור | תיאור |
|-------|-------------|
| `e` | פקודת עריכה מהירה |
| `edit` | פקודת עריכה סטנדרטית |
| `editor` | פקודת עורך מלאה |
| `n` | קיצור עריכה קצר |
| `v` | קיצור עריכה בסגנון Vim |

### קיצורי Neovim

זמינים כאשר Neovim הוא העורך הראשי.

| קיצור | תיאור |
|-------|-------------|
| `vi` | הפנה ל-Neovim |
| `vim` | הפנה ל-Neovim |
| `nvimrc` | ערוך תצורת Vimscript של Neovim |
| `nvimlua` | ערוך תצורת Lua של Neovim |
| `nvimconf` | פתח תיקיית תצורת Neovim |

### קיצורי Visual Studio Code

זמינים כאשר VS Code מותקן.

| קיצור | תיאור |
|-------|-------------|
| `vsc` | הפעל VS Code |
| `vsca` | הוסף תיקיה לחלון הנוכחי |
| `vscd` | השווה שני קבצים |
| `vscn` | פתח חלון חדש |
| `vscex` | התקן הרחבת VS Code |
| `vsclist` | הצג הרחבות מותקנות |

### קיצורי Vim

זמינים כאשר Vim הוא העורך הראשי.

| קיצור | תיאור |
|-------|-------------|
| `vi` | הפנה ל-Vim |
| `vimrc` | ערוך קובץ תצורת Vim |
| `vimconf` | פתח תיקיית תצורת Vim |

### עריכת תצורה

פונקציית `editrc` מספקת גישה מהירה לקבצי תצורה נפוצים.

| פקודה | קובץ יעד |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | קובץ init של Neovim |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |

### דוגמאות שימוש

```bash
# עריכה מהירה של קובץ באמצעות עורך ברירת המחדל
e myfile.txt

# ערוך קבצי תצורה ישירות
nvimrc    # בשימוש Neovim (vimscript)
nvimlua   # בשימוש Neovim (lua)
vimrc     # בשימוש Vim

# השתמש ב-VS Code לפתיחת תיקיה בחלון חדש
vscn ~/projects/my-project

# ערוך קבצי תצורה ספציפיים
editrc git    # ערוך תצורת git
editrc bash   # ערוך תצורת bash
```
