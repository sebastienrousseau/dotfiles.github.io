---
description: כיצד Dotfiles מנהל את היררכיית ה-PATH שלך כדי להבטיח שהכלים הנכונים נטענים בסדר הנכון.
lang: he-IL
metaTitle: נתיבים - Dotfiles (IL)
permalink: /he/paths/

meta:
  - name: keywords
    content: path, environment, variables, hierarchy, dotfiles, chezmoi, shell, configuration
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: כיצד Dotfiles מנהל את היררכיית ה-PATH שלך כדי להבטיח שהכלים הנכונים נטענים בסדר הנכון.
  - name: twitter:title
    content: נתיבים - Dotfiles
  - name: og:title
    content: נתיבים - Dotfiles
  - name: og:description
    content: כיצד Dotfiles מנהל את היררכיית ה-PATH שלך כדי להבטיח שהכלים הנכונים נטענים בסדר הנכון.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# נתיבים

ניהול `PATH` מודולרי. וודא שהכלים הנכונים נטענים בסדר הנכון.

## גלה

תצורות נתיבים מפוצלות לקבצים מבוססי עדיפות. במהלך `chezmoi apply`:

1. קבצים בתיקיה זו נסרקים בסדר אלפביתי
2. התוכן מצורף ל-`~/.config/shell/paths.sh`
3. נטען על ידי `.zshrc` בהפעלה

## הפניה

| סקריפט | תיאור |
|:---|:---|
| `00-default.paths.sh` | נתיבי מערכת בסיסיים (`/usr/bin`, `/sbin`) ו-Homebrew. נטען ראשון. |
| `99-custom.paths.sh` | נתיבי משתמש מותאמים (SDKs של שפות, bins מקומיים). נטען אחרון לעדיפות. |

## התחל

### הוסף נתיב משתמש

1. ערוך את `99-custom.paths.sh` או צור קובץ חדש (למשל, `50-myproject.paths.sh`)
2. הוסף את הנתיב שלך:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. החל שינויים:
   ```bash
   chezmoi apply
   ```
4. אמת:
   ```bash
   echo $PATH
   ```
