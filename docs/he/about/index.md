---
title: אודות Dotfiles
description: הדור הבא של תצורת מעטפת. ביצועים גבוהים, מאובטח ומותאם לבינה מלאכותית. מנוהל על ידי Chezmoi. תואם ל-macOS, Linux ו-WSL דרך Dotfiles.
lang: he-IL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: אודות Dotfiles preview
canonical: /he/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: אודות Dotfiles
pageType: docs
schemaType: WebPage
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

Dotfiles v0.2.495 הופך את הטרמינל שלך לסביבת עבודה עוצמתית ומאוחדת. בניגוד ל-dotfiles מדור קודם המסתמכים על Makefiles מורכבים או סקריפטי symlink, Dotfiles משתמש בגישה מבוססת תבניות שהיא אטומית, מהירה וניתנת לשחזור.

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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
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

## פקודות ליבה

ממשק ה-CLI של `dot` מציע 53 פקודות מאורגנות לפי קטגוריה.

### ליבה

- `dot apply` — מחיל שינויי תצורה.
- `dot sync` — שולף את מצב המאגר העדכני ביותר ומחיל.
- `dot update` — מעדכן את המאגר ומחמם מטמונים.
- `dot add` — מוסיף קבצים חדשים למקור Chezmoi.
- `dot diff` — מציג שינויים ממתינים לפני החלה.
- `dot status` — מציג את מצב הקבצים המנוהלים.
- `dot remove` — מסיר קובץ מניהול ומוחק את רשומת המקור.
- `dot cd` — פותח Shell בספריית המקור של Chezmoi.
- `dot edit` — פותח קובץ מנוהל בעורך שלכם.
- `dot clean-cache` — מנקה מטמונים זמניים.
- `dot prewarm` — ממלא מטמונים מראש להפעלת Shell מהירה יותר.

### אבחון

- `dot doctor` — מאמת נתיבים, כלים ומצב Shell.
- `dot heal` — מתקן באופן אוטומטי מצב חסר או פגום.
- `dot health` — מריץ בדיקת תקינות קלה.
- `dot verify` — בודק שלמות קבצים מול המקור.
- `dot scorecard` — מדפיס ציון איכות תצורה.
- `dot snapshot` — לוכד את המצב הנוכחי להשוואה מאוחרת.
- `dot smoke-test` — מאמת שרשראות כלים מקצה לקצה.
- `dot chaos` — מזריק תקלות לבדיקת ריפוי עצמי.
- `dot bundle` — מייצא חבילת תצורה ניידת.
- `dot rollback` — חוזר ל-snapshot קודם.
- `dot drift` — מזהה שינויים בלתי צפויים בקבצים מנוהלים.
- `dot history` — מציג יומן היסטוריית apply/sync.
- `dot benchmark` — מודד זמן הפעלת Shell.
- `dot perf` — מפרופל אתחול Shell איטי.

### מראה

- `dot theme` — מחליף ערכת צבעים של הטרמינל.
- `dot wallpaper` — מגדיר טפט שולחן עבודה (macOS).
- `dot fonts` — מתקין או מעדכן Nerd Fonts.
- `dot tune` — מכוונן צפיפות ממשק וסגנון prompt.

### אבטחה

- `dot backup` — יוצר גיבויי תצורה מוצפנים.
- `dot encrypt-check` — מוודא הצפנת סודות בזמן מנוחה.
- `dot firewall` — מגדיר כללי חומת אש.
- `dot telemetry` — שולט בטלמטריית שימוש אנונימית.
- `dot dns-doh` — מפעיל DNS-over-HTTPS.
- `dot lock-screen` — נועל את המסך מיד.
- `dot usb-safety` — מגביל הרכבה אוטומטית של אחסון USB.

### סודות

- `dot secrets-init` — מאתחל backend סודות (age / GPG).
- `dot secrets` — מציג רשומות סודות מוצפנות.
- `dot secrets-create` — יוצר סוד מוצפן חדש.
- `dot ssh-key` — מייצר או מסובב זוגות מפתחות SSH.
- `dot ssh-cert` — מבקש תעודת SSH מ-CA.

### AI

- `dot ai` — פותח הפעלת עוזר AI אינטראקטיבית.
- `dot ai-setup` — מגדיר מפתחות API לספקי AI.
- `dot ai-query` — שולח prompt חד-פעמי למודל AI.
- עוטפי כלי AI: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### כלים

- `dot tools` — מציג תחליפי CLI מצורפים ומצבם.
- `dot new` — יוצר קובץ קיצור או פונקציה חדש.
- `dot sandbox` — פותח Shell ארגז חול חד-פעמי.
- `dot keys` — מציג קיצורי מקשים נוכחיים.
- `dot learn` — מתחיל מדריך אינטראקטיבי.

### מטא

- `dot upgrade` — משדרג Dotfiles לגרסה האחרונה.
- `dot packages` — מציג חבילות מותקנות שמנוהלות על-ידי Dotfiles.
- `dot version` / `dot help` — מציג מידע על גרסה או שימוש
