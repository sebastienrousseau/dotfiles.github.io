---
description: Псевдонимы для архивов и сжатия файлов tar, zip, 7z и других форматов. Распаковывайте, сжимайте и управляйте архивами простыми командами.
lang: ru-RU
metaTitle: Псевдонимы архивов - Dotfiles (RU)
permalink: /ru/alias/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Псевдонимы для архивов и сжатия файлов tar, zip, 7z и других форматов. Распаковывайте, сжимайте и управляйте архивами простыми командами.
  - name: twitter:title
    content: Псевдонимы архивов - Dotfiles
  - name: og:title
    content: Псевдонимы архивов - Dotfiles
  - name: og:description
    content: Псевдонимы для архивов и сжатия файлов tar, zip, 7z и других форматов. Распаковывайте, сжимайте и управляйте архивами простыми командами.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Псевдонимы архивов

Сжимайте, распаковывайте и управляйте архивами. Поддержка всех основных форматов.

## Обзор

Эти псевдонимы определены в `archives.aliases.sh` и автоматически загружаются Chezmoi.

## Справочник

### Универсальная распаковка

Команда `extract` (сокращение `x`) автоматически определяет и распаковывает любой архив:

```bash
extract archive.tar.gz
```

**Поддерживаемые форматы:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Сжатие

Создавайте архивы командой `compress` (сокращение `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Поддерживаемые форматы:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Резервное копирование

Создавайте резервные копии с временными метками командой `backup` (сокращение `bak`):

```bash
backup important_folder
backup database.sql zip
```

### Просмотр содержимого

Просматривайте содержимое архива командой `list_archive` (сокращение `lar`):

```bash
list_archive backup.tar.gz
```

### Инструменты архивации

| Псевдоним | Описание |
|:---|:---|
| `c7z` | Создать архив 7z |
| `x7z` | Распаковать архив 7z |
| `l7z` | Показать содержимое 7z |
| `ctar` | Создать архив tar |
| `xtar` | Распаковать архив tar |
| `ltar` | Показать содержимое tar |
| `ctgz` | Создать архив tar.gz |
| `xtgz` | Распаковать архив tar.gz |
| `ltgz` | Показать содержимое tar.gz |
| `ctbz` | Создать архив tar.bz2 |
| `xtbz` | Распаковать архив tar.bz2 |
| `ltbz` | Показать содержимое tar.bz2 |
| `ctxz` | Создать архив tar.xz |
| `xtxz` | Распаковать архив tar.xz |
| `ltxz` | Показать содержимое tar.xz |
| `ctzst` | Создать архив tar.zst |
| `xtzst` | Распаковать архив tar.zst |
| `ltzst` | Показать содержимое tar.zst |
| `czip` | Создать архив zip |
| `xzip` | Распаковать архив zip |
| `lzip` | Показать содержимое zip |
| `crar` | Создать архив rar |
| `xrar` | Распаковать архив rar |
| `lrar` | Показать содержимое rar |

### Инструменты сжатия

| Псевдоним | Описание |
|:---|:---|
| `cgz` | Сжать с помощью gzip |
| `xgz` | Распаковать gzip |
| `cbz` | Сжать с помощью bzip2 |
| `xbz` | Распаковать bzip2 |
| `cxz` | Сжать с помощью xz |
| `xxz` | Распаковать xz |
| `czst` | Сжать с помощью zstd |
| `xzst` | Распаковать zstd |
| `clz4` | Сжать с помощью lz4 |
| `xlz4` | Распаковать lz4 |
