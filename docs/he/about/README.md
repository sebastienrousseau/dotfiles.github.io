---
description: הדור הבא של תצורת מעטפת. ביצועים גבוהים, מאובטח ומותאם לבינה מלאכותית. מנוהל על ידי Chezmoi.
lang: he-IL
metaTitle: אודות Dotfiles - Dotfiles (IL)
permalink: /he/about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuration, automation, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: הדור הבא של תצורת מעטפת. ביצועים גבוהים, מאובטח ומותאם לבינה מלאכותית. מנוהל על ידי Chezmoi.
  - name: twitter:title
    content: אודות Dotfiles
  - name: og:title
    content: אודות Dotfiles
  - name: og:description
    content: הדור הבא של תצורת מעטפת. ביצועים גבוהים, מאובטח ומותאם לבינה מלאכותית. מנוהל על ידי Chezmoi.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# אודות Dotfiles

התקן המודרני לתצורת מעטפת. בנוי על **Chezmoi** לניהול סביבה מאובטח וחוצה פלטפורמות.

## גלה

Dotfiles v0.2.474 הופך את הטרמינל שלך לסביבת עבודה עוצמתית ומאוחדת. בניגוד ל-dotfiles מדור קודם המסתמכים על Makefiles מורכבים או סקריפטי symlink, Dotfiles משתמש בגישה מבוססת תבניות שהיא אטומית, מהירה וניתנת לשחזור.

### מה חדש

- **ליבה מודרנית** - חלופות Rust בעלות ביצועים גבוהים מחליפות כלי Unix מדור קודם:
  - **Atuin** להיסטוריית מעטפת
  - **Yazi** לניהול קבצים
  - **Zellij** לריבוב טרמינלים
  - **Ghostty** לטרמינל מואץ GPU
  - **NeoVim** לעריכה מודרנית
- **אבטחה מקורית** - חתימת SSH מקורית לחלוטין ללא סוכנים של צד שלישי
- **מצב אינטראקטיבי** - פקודת `dot learn` חדשה מדריכה אותך בין התכונות

## התחל

### דרישות

- **macOS**, **Linux (Ubuntu/Debian)**, או **Windows (WSL)**
- **Curl** ו-**Git**
- **Chezmoi** (מותקן אוטומטית)
- **Nerd Font** (לאייקוני טרמינל)

### התקנה

הרץ פקודה אחת להתקנת הסט המלא:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

המתקין יבצע:

1. התקנת הבינארי של `chezmoi`
2. שכפול המאגר
3. התקנת חבילות נדרשות דרך Homebrew (macOS) או Apt (Linux)
4. החלת התצורה שלך

### חקור

לאחר ההתקנה, הפעל מחדש את הטרמינל והרץ:

```bash
dot learn
```

זה מפעיל סיור אינטראקטיבי בסביבה החדשה שלך.

## התאם אישית

התצורה שלך נמצאת ב-`~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # נקודת כניסה למעטפת
├── dot_config/             # XDG Base Config (~/.config)
│   ├── atuin/              # היסטוריית מעטפת
│   ├── ghostty/            # אמולטור טרמינל
│   ├── git/                # תצורת Git
│   ├── yazi/               # מנהל קבצים
│   ├── zellij/             # מרבב טרמינלים
│   ├── zsh/                # תצורת Zsh
│   └── shell/              # קיצורים ונתיבים משותפים
├── provision/              # סקריפטי מחזור חיים
├── install.sh              # מתקין אוניברסלי
└── docs/                   # תיעוד
```

## תרום

הצטרף לקהילה. עיין ב[קוד ההתנהגות][code-of-conduct-url] וב[הנחיות התרומה][contributing-url] שלנו.

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
