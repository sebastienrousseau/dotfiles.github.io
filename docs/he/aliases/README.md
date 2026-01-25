---
description: קיצורי מעטפת שיוצרים קיצורי דרך לפקודות נפוצות. הגבר את הפרודוקטיביות על ידי הפחתת הקלדה בזרימת העבודה היומית שלך.
lang: he-IL
metaTitle: קיצורים - Dotfiles (IL)
permalink: /he/aliases/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי מעטפת שיוצרים קיצורי דרך לפקודות נפוצות. הגבר את הפרודוקטיביות על ידי הפחתת הקלדה בזרימת העבודה היומית שלך.
  - name: twitter:title
    content: קיצורים - Dotfiles
  - name: og:title
    content: קיצורים - Dotfiles
  - name: og:description
    content: קיצורי מעטפת שיוצרים קיצורי דרך לפקודות נפוצות. הגבר את הפרודוקטיביות על ידי הפחתת הקלדה בזרימת העבודה היומית שלך.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורים

קיצורי מעטפת מודולריים המנוהלים על ידי **Chezmoi**. הקלד פחות, עשה יותר.

## גלה

קיצורים מאורגנים בקבצים קטנים וממוקדים - אחד לכל כלי או זרימת עבודה. במהלך `chezmoi apply`, כל קבצי הקיצורים מצורפים ל-`~/.config/shell/aliases.sh` ונטענים על ידי המעטפת שלך.

## התחל

### הוסף קיצור

1. צור קובץ חדש (למשל, `mytool/mytool.aliases.sh`)
2. הגדר את הקיצורים שלך:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. החל שינויים:
   ```bash
   chezmoi apply
   ```

## הפניה

עיין בקיצורים לפי קטגוריה:

<!-- markdownlint-disable MD013-->

| קטגוריה | תיאור |
| :--- | :--- |
| [AI](ai/) | קיצורי דרך לעוזרי AI וכלי LLM |
| [Archives](archives/) | דחיסה וחילוץ קבצים |
| [CD](cd/) | ניווט במערכת הקבצים |
| [Chmod](chmod/) | שינוי הרשאות קבצים |
| [Clear](clear/) | ניקוי מסך הטרמינל |
| [Compliance](compliance/) | כלי SOC2 ופרטיות |
| [Configuration](configuration/) | ניהול dotfiles ותצורת מעטפת |
| [Default](default/) | קיצורי מעטפת ברירת מחדל |
| [Diagnostics](diagnostics/) | תיקון עצמי ובדיקות תקינות |
| [Dig](dig/) | שאילתות שרתי DNS |
| [Disk Usage](disk-usage/) | הצגת מידע על שימוש בדיסק |
| [Docker](docker/) | ניהול קונטיינרים |
| [Editor](editor/) | הגדרת עורכי טקסט |
| [Find](find/) | חיפוש קבצים ותיקיות |
| [Fonts](fonts/) | ניהול מטמון גופנים |
| [GCloud](gcloud/) | כלי Google Cloud SDK |
| [Git](git/) | בקרת גרסאות Git |
| [GNU](gnu/) | כלי GNU core |
| [Go](go/) | כלי שפת Go |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | אתחול ופריסה |
| [Interactive](interactive/) | התנהגות מעטפת אינטראקטיבית |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | כלי סריקת רישיונות |
| [macOS](macOS/) | הגדרות ספציפיות ל-macOS |
| [Make](make/) | כלי GNU Make |
| [Mkdir](mkdir/) | יצירת תיקיות |
| [Modern](modern/) | תחליפי כלים מבוססי Rust |
| [NPM](npm/) | מנהל חבילות Node.js |
| [Permission](permission/) | הרשאות קבצים |
| [PNPM](pnpm/) | מנהל חבילות PNPM |
| [PS](ps/) | סטטוס תהליכים |
| [Python](python/) | כלי Python |
| [Rsync](rsync/) | העברת קבצים יעילה |
| [Rust](rust/) | כלי תכנות Rust |
| [Security](security/) | אי-שינוי וחתימה |
| [Subversion](subversion/) | בקרת גרסאות SVN |
| [Sudo](sudo/) | פעולות superuser |
| [Terraform](terraform/) | תשתית כקוד |
| [Tmux](tmux/) | מרבב טרמינלים |
| [Update](update/) | עדכון dotfiles |
| [UUID](uuid/) | יצירת UUIDs |
| [Wget](wget/) | הורדה משורת הפקודה |
| [Yarn](yarn/) | מנהל חבילות Yarn |

<!-- markdownlint-enable MD013-->
