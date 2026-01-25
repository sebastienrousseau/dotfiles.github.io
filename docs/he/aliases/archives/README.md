---
description: קיצורי ארכיון ודחיסה לטיפול ב-tar, zip, 7z ועוד. חלץ, דחוס ונהל ארכיונים בפקודות פשוטות.
lang: he-IL
metaTitle: קיצורי ארכיונים - Dotfiles (IL)
permalink: /he/aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: קיצורי ארכיון ודחיסה לטיפול ב-tar, zip, 7z ועוד. חלץ, דחוס ונהל ארכיונים בפקודות פשוטות.
  - name: twitter:title
    content: קיצורי ארכיונים - Dotfiles
  - name: og:title
    content: קיצורי ארכיונים - Dotfiles
  - name: og:description
    content: קיצורי ארכיון ודחיסה לטיפול ב-tar, zip, 7z ועוד. חלץ, דחוס ונהל ארכיונים בפקודות פשוטות.
  - name: og:image:alt
    content: Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך
  - name: og:locale
    content: he_IL
---

# קיצורי ארכיונים

דחוס, חלץ ונהל ארכיונים. תמיכה בכל הפורמטים העיקריים.

## סקירה

קיצורים אלה מוגדרים ב-`archives.aliases.sh` ונטענים אוטומטית על ידי Chezmoi.

## הפניה

### חילוץ אוניברסלי

פקודת `extract` (קיצור `x`) מזהה ומחלצת כל ארכיון אוטומטית:

```bash
extract archive.tar.gz
```

**פורמטים נתמכים:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### דחיסה

צור ארכיונים עם פקודת `compress` (קיצור `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**פורמטים נתמכים:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### גיבוי

צור גיבויים עם חותמת זמן עם `backup` (קיצור `bak`):

```bash
backup important_folder
backup database.sql zip
```

### הצגת תוכן

צפה בתוכן ארכיון עם `list_archive` (קיצור `lar`):

```bash
list_archive backup.tar.gz
```

### כלי ארכיון

| קיצור | תיאור |
|:---|:---|
| `c7z` | צור ארכיון 7z |
| `x7z` | חלץ ארכיון 7z |
| `l7z` | הצג תוכן 7z |
| `ctar` | צור ארכיון tar |
| `xtar` | חלץ ארכיון tar |
| `ltar` | הצג תוכן tar |
| `ctgz` | צור ארכיון tar.gz |
| `xtgz` | חלץ ארכיון tar.gz |
| `ltgz` | הצג תוכן tar.gz |
| `ctbz` | צור ארכיון tar.bz2 |
| `xtbz` | חלץ ארכיון tar.bz2 |
| `ltbz` | הצג תוכן tar.bz2 |
| `ctxz` | צור ארכיון tar.xz |
| `xtxz` | חלץ ארכיון tar.xz |
| `ltxz` | הצג תוכן tar.xz |
| `ctzst` | צור ארכיון tar.zst |
| `xtzst` | חלץ ארכיון tar.zst |
| `ltzst` | הצג תוכן tar.zst |
| `czip` | צור ארכיון zip |
| `xzip` | חלץ ארכיון zip |
| `lzip` | הצג תוכן zip |
| `crar` | צור ארכיון rar |
| `xrar` | חלץ ארכיון rar |
| `lrar` | הצג תוכן rar |

### כלי דחיסה

| קיצור | תיאור |
|:---|:---|
| `cgz` | דחוס עם gzip |
| `xgz` | חלץ gzip |
| `cbz` | דחוס עם bzip2 |
| `xbz` | חלץ bzip2 |
| `cxz` | דחוס עם xz |
| `xxz` | חלץ xz |
| `czst` | דחוס עם zstd |
| `xzst` | חלץ zstd |
| `clz4` | דחוס עם lz4 |
| `xlz4` | חלץ lz4 |
