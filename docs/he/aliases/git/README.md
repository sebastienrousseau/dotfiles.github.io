---
title: "קיצורי Git: ייעל את זרימת העבודה בבקרת גרסאות"
description: "למעלה מ-80 קיצורי מעטפת Git לביצוע commits מהירים יותר, ענפים, diffs ו-remotes. האץ את משימות בקרת הגרסאות היומיות שלך."
lang: he-IL
metaTitle: קיצורי Git | Dotfiles
permalink: /he/aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shortcuts, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "למעלה מ-80 קיצורי מעטפת Git לביצוע commits מהירים יותר, ענפים, diffs ו-remotes. האץ את משימות בקרת הגרסאות היומיות שלך."
  - name: twitter:title
    content: קיצורי Git | Dotfiles
  - name: og:title
    content: קיצורי Git | Dotfiles
  - name: og:description
    content: "למעלה מ-80 קיצורי מעטפת Git לביצוע commits מהירים יותר, ענפים, diffs ו-remotes. האץ את משימות בקרת הגרסאות היומיות שלך."
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי Git

ייעל את זרימת העבודה בבקרת גרסאות עם קיצורים עוצמתיים.

## סקירה

קיצורי Git יוצרים קיצורי דרך לפקודות Git נפוצות. כחלק מתצורת [Dotfiles](https://github.com/sebastienrousseau/dotfiles), קיצורים אלה נטענים אוטומטית דרך Chezmoi.

מוגדרים ב-`git.aliases.sh` ו-`signing.aliases.sh`, הקיצורים זמינים בכל סשן Bash או Zsh לאחר ההתקנה.

## הפניה

### ליבה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `g` | `git` | קיצור ל-git |
| `gtp` | `git rev-parse --show-toplevel` | הדפס תיקיית שורש המאגר |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | הדפס שם הענף הנוכחי |
| `gconfl` | `git config --list` | הצג כל הגדרות תצורת Git |

### אזור עבודה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `ga` | `git add` | הוסף קבצים לאינדקס |
| `gaa` | `git add --all` | הוסף את כל השינויים |
| `gad` | `git add .` | הוסף הכל מהתיקיה הנוכחית |
| `gcl` | `git clone` | שכפל מאגר |
| `gin` | `git init` | אתחל מאגר Git חדש |
| `gco` | `git checkout` | החלף ענפים או שחזר קבצים |
| `gcb` | `git checkout -b` | צור ועבור לענף חדש |
| `gst` | `git status` | הצג סטטוס עץ העבודה |
| `gsta` | `git stash save` | שמור שינויים נוכחיים |
| `gstp` | `git stash pop` | החל והסר את ה-stash האחרון |

### Commits

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `gc` | `git commit -a` | בצע commit לכל השינויים במעקב |
| `gca` | `git commit --amend` | תקן את ה-commit האחרון |
| `gcm` | `git commit --message` | בצע commit עם הודעה מובנית |
| `gcall` | `git add -A && git commit -av` | הוסף הכל ובצע commit |

### Diff והיסטוריה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `gd` | `git diff` | הצג שינויים לא מאונדקסים |
| `gdh` | `git diff HEAD` | הצג כל השינויים מאז ה-commit האחרון |
| `gdstaged` | `git diff --staged` | הצג שינויים מאונדקסים |
| `gl` | `git log --since="last month" --oneline` | לוג שורה אחת של החודש האחרון |
| `glg` | `git log --graph --all --oneline --decorate` | לוג גרף של כל הענפים |

### ענפים

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `gb` | `git branch` | הצג ענפים מקומיים |
| `gbd` | `git branch -d` | מחק ענף ממוזג |
| `gbr` | `git branch -r` | הצג ענפים מרוחקים |
| `gswb` | `git switch` | החלף ענפים (מודרני) |

### Remotes ו-Push/Pull

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `gf` | `git fetch` | משוך מהמרוחק |
| `gp` | `git pull` | משוך מהמרוחק |
| `gph` | `git push` | דחוף למרוחק |
| `gpo` | `git push origin` | דחוף ל-origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | דחוף והגדר upstream לענף הנוכחי |

### Revert ו-Reset

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `grev` | `git revert` | בטל commit |
| `grb` | `git rebase` | בצע rebase לענף הנוכחי |
| `grbk` | `git reset --soft HEAD^` | בטל commit אחרון, שמור שינויים מאונדקסים |
| `gresh` | `git reset --hard HEAD~1` | איפוס קשיח ל-commit הקודם |

### Submodules

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `gsm` | `git submodule` | נהל submodules |
| `gsmi` | `git submodule init` | אתחל submodules |
| `gsmu` | `git submodule update` | עדכן submodules |
| `gsmuir` | `git submodule update --init --recursive` | עדכן, אתחל, ורקורס submodules |

### חתימה ואבטחה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `enable-signing` | *(אשף אינטראקטיבי)* | הגדר חתימת commit GPG או SSH |
| `verify-signatures` | `git log --show-signature -n 10` | אמת חתימות של 10 ה-commits האחרונים |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | בדוק תצורת חתימה נוכחית |
