---
description: פונקציות מעטפת המשפרות את חוויית הטרמינל שלך. כלים לבדיקת API, ניהול קבצים, פעולות מערכת ועוד.
lang: he-IL
metaTitle: פונקציות - Dotfiles (IL)
permalink: /he/functions/

meta:
  - name: keywords
    content: functions, shell, bash, zsh, dotfiles, productivity, utilities, api, file, system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: פונקציות מעטפת המשפרות את חוויית הטרמינל שלך. כלים לבדיקת API, ניהול קבצים, פעולות מערכת ועוד.
  - name: twitter:title
    content: פונקציות - Dotfiles
  - name: og:title
    content: פונקציות - Dotfiles
  - name: og:description
    content: פונקציות מעטפת המשפרות את חוויית הטרמינל שלך. כלים לבדיקת API, ניהול קבצים, פעולות מערכת ועוד.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# פונקציות

כלי מעטפת לשיפור הפרודוקטיביות שלך ב-macOS, Linux ו-Windows.

## גלה

פונקציות מוגדרות כקבצי `.sh` בודדים. במהלך `chezmoi apply`, הן מצורפות ל-`~/.config/shell/functions.sh` ונטענות על ידי המעטפת שלך.

## התחל

### הוסף פונקציה

1. צור קובץ `.sh` חדש (למשל, `myfunc.sh`)
2. הוסף את הגדרת הפונקציה שלך
3. החל שינויים:
   ```bash
   chezmoi apply
   ```

## הפניה

### בדיקת API

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `apihealth` | בדוק תקינות של API אחד או יותר | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | נטר זמן תגובה של API | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | בצע בדיקת עומס בסיסית | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | דבג בקשות HTTP עם תזמון | `httpdebug [options] [url]` |

### כלי HTTP

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `curlheader` | הצג כותרות HTTP | `curlheader [header] [url]` |
| `curlstatus` | בדוק קוד סטטוס HTTP | `curlstatus [url]` |
| `curltime` | מדוד מדדי תזמון HTTP | `curltime [url]` |
| `view-source` | הצג קוד מקור של אתר | `view-source URL` |
| `whoisport` | מצא תהליך המשתמש בפורט | `whoisport PORT` |

### ניהול קבצים

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `backup` | צור גיבויים עם חותמת זמן | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | קידוד ופענוח Base64 | `encode64 "string"` |
| `extract` | חלץ פורמטי ארכיון | `extract [file]` |
| `hexdump` | הצג קובץ בפורמט hex | `hexdump [file] [lines]` |
| `ren` | שנה שמות סיומות באצווה | `ren OLD_EXT NEW_EXT` |
| `size` | בדוק גודל קובץ או תיקיה | `size [file/directory]` |
| `zipf` | צור ארכיוני ZIP | `zipf [folder]` |

### שמות קבצים

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `kebabcase` | המר ל-kebab-case | `kebabcase <files...>` |
| `lowercase` | המר לאותיות קטנות | `lowercase <files...>` |
| `sentencecase` | המר לאות ראשונה גדולה | `sentencecase <files...>` |
| `snakecase` | המר ל-snake_case | `snakecase <files...>` |
| `titlecase` | המר לכותרת | `titlecase <files...>` |
| `uppercase` | המר לאותיות גדולות | `uppercase <files...>` |

### כלי מערכת

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `caffeine` | מנע מהמערכת לישון | `caffeine [command]` |
| `environment` | זהה סביבת מערכת הפעלה | `environment` |
| `freespace` | נקה שטח דיסק פינוי | `freespace [disk]` |
| `hiddenfiles` | הפעל/כבה קבצים מוסתרים ב-Finder | `hiddenfiles [show\|hide]` |
| `hostinfo` | הצג מידע על המארח | `hostinfo` |
| `hstats` | הצג סטטיסטיקות שימוש בפקודות | `hstats` |
| `last` | רשום קבצים ששונו לאחרונה | `last [minutes]` |
| `logout` | התנתקות חוצה פלטפורמות | `logout [--force]` |
| `myproc` | רשום תהליכי משתמש | `myproc` |
| `stopwatch` | שעון עצר בטרמינל | `stopwatch` |
| `sysinfo` | הצג מידע מערכת | `sysinfo` |

### פקודות Caffeine

מנע מהמערכת שלך לישון או להפעיל את שומר המסך.

| פקודה | תיאור |
|:---|:---|
| `caffeine daemon` | הפעל את שירות caffeine |
| `caffeine status` | בדוק אם השירות פועל |
| `caffeine start` | שמור על המסך ער |
| `caffeine stop` | אפשר למסך לישון |
| `caffeine toggle` | החלף מצב ערות מסך |
| `caffeine shutdown` | כבה את השירות |

עובד ב-macOS (`caffeinate` מקורי), Linux (`xdg-screensaver`), ו-Windows (PowerShell).

### אבטחה

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `genpass` | צור סיסמאות חזקות | `genpass [num_blocks] [separator]` |
| `keygen` | צור זוגות מפתחות SSH | `keygen [name] [email] [type] [bits]` |

### ניווט

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `cdls` | החלף תיקיה והצג רשימה | `cdls [directory]` |
| `goto` | ניווט מהיר לתיקיה | `goto [directory]` |
| `mount_read_only` | טען קריאה-בלבד ככתיבה-קריאה | `mount_read_only [image]` |
| `rd` | הסר תיקיה | `rd [directory]` |
| `remove_disk` | הוצא דיסק בבטחה | `remove_disk [disk]` |

### שונות

| פונקציה | תיאור | שימוש |
|:---|:---|:---|
| `matrix` | אפקטי Matrix בטרמינל | `matrix [options]` |
| `prependpath` | הוסף תיקיה ל-PATH | `prependpath [directory]` |
| `ql` | פתח ב-Quick Look של macOS | `ql [file]` |
| `vscode` | פתח ב-VS Code | `vscode [file]` |

## תאימות

- **macOS** - תמיכה מלאה עם כלים ספציפיים ל-macOS
- **Linux** - תואם להפצות נפוצות
- **Windows** - תמיכה דרך WSL, Cygwin, או Git Bash

## עזרה

כל פונקציה כוללת תיעוד דרך `--help`:

```bash
apihealth --help
```
