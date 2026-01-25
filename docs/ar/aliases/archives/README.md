---
description: اختصارات الأرشيف والضغط للتعامل مع tar وzip و7z والمزيد. استخرج واضغط وأدر الأرشيفات بأوامر بسيطة.
lang: ar-SA
metaTitle: اختصارات الأرشيف - Dotfiles (AR)
permalink: /ar/aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات الأرشيف والضغط للتعامل مع tar وzip و7z والمزيد. استخرج واضغط وأدر الأرشيفات بأوامر بسيطة.
  - name: twitter:title
    content: اختصارات الأرشيف - Dotfiles
  - name: og:title
    content: اختصارات الأرشيف - Dotfiles
  - name: og:description
    content: اختصارات الأرشيف والضغط للتعامل مع tar وzip و7z والمزيد. استخرج واضغط وأدر الأرشيفات بأوامر بسيطة.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات الأرشيف

اضغط واستخرج وأدر الأرشيفات. دعم لجميع الصيغ الرئيسية.

## نظرة عامة

هذه الاختصارات معرّفة في `archives.aliases.sh` ويتم تحميلها تلقائيًا بواسطة Chezmoi.

## المرجع

### استخراج عام

أمر `extract` (اختصار `x`) يكتشف تلقائيًا ويستخرج أي أرشيف:

```bash
extract archive.tar.gz
```

**الصيغ المدعومة:** `.tar.bz2`، `.tbz2`، `.tar.gz`، `.tgz`، `.tar.xz`، `.tar.zst`، `.tar`، `.bz2`، `.gz`، `.rar`، `.zip`، `.Z`، `.7z`، `.zst`، `.xz`، `.lz4`، `.lha`، `.lzh`، `.arj`، `.arc`، `.dms`

### الضغط

أنشئ أرشيفات باستخدام أمر `compress` (اختصار `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**الصيغ المدعومة:** `tar`، `tgz`، `tbz2`، `txz`، `tzst`، `zip`، `7z`، `gz`، `bz2`، `xz`، `zst`، `lz4`، `rar`

### النسخ الاحتياطي

أنشئ نسخًا احتياطية بطابع زمني باستخدام `backup` (اختصار `bak`):

```bash
backup important_folder
backup database.sql zip
```

### سرد المحتويات

عرض محتويات الأرشيف باستخدام `list_archive` (اختصار `lar`):

```bash
list_archive backup.tar.gz
```

### أدوات الأرشيف

| الاختصار | الوصف |
|:---|:---|
| `c7z` | إنشاء أرشيف 7z |
| `x7z` | استخراج أرشيف 7z |
| `l7z` | سرد محتويات 7z |
| `ctar` | إنشاء أرشيف tar |
| `xtar` | استخراج أرشيف tar |
| `ltar` | سرد محتويات tar |
| `ctgz` | إنشاء أرشيف tar.gz |
| `xtgz` | استخراج أرشيف tar.gz |
| `ltgz` | سرد محتويات tar.gz |
| `ctbz` | إنشاء أرشيف tar.bz2 |
| `xtbz` | استخراج أرشيف tar.bz2 |
| `ltbz` | سرد محتويات tar.bz2 |
| `ctxz` | إنشاء أرشيف tar.xz |
| `xtxz` | استخراج أرشيف tar.xz |
| `ltxz` | سرد محتويات tar.xz |
| `ctzst` | إنشاء أرشيف tar.zst |
| `xtzst` | استخراج أرشيف tar.zst |
| `ltzst` | سرد محتويات tar.zst |
| `czip` | إنشاء أرشيف zip |
| `xzip` | استخراج أرشيف zip |
| `lzip` | سرد محتويات zip |
| `crar` | إنشاء أرشيف rar |
| `xrar` | استخراج أرشيف rar |
| `lrar` | سرد محتويات rar |

### أدوات الضغط

| الاختصار | الوصف |
|:---|:---|
| `cgz` | الضغط بـ gzip |
| `xgz` | استخراج gzip |
| `cbz` | الضغط بـ bzip2 |
| `xbz` | استخراج bzip2 |
| `cxz` | الضغط بـ xz |
| `xxz` | استخراج xz |
| `czst` | الضغط بـ zstd |
| `xzst` | استخراج zstd |
| `clz4` | الضغط بـ lz4 |
| `xlz4` | استخراج lz4 |
