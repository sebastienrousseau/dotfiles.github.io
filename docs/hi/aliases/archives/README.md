---
description: tar, zip, 7z, और अधिक को संभालने के लिए आर्काइव और कंप्रेशन एलियास। सरल कमांड से आर्काइव एक्सट्रैक्ट, कंप्रेस, और प्रबंधित करें।
lang: hi-IN
metaTitle: आर्काइव्स एलियास - Dotfiles (HI)
permalink: /aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: tar, zip, 7z, और अधिक को संभालने के लिए आर्काइव और कंप्रेशन एलियास।
  - name: twitter:title
    content: आर्काइव्स एलियास - Dotfiles
  - name: og:title
    content: आर्काइव्स एलियास - Dotfiles
  - name: og:description
    content: tar, zip, 7z, और अधिक को संभालने के लिए आर्काइव और कंप्रेशन एलियास।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# आर्काइव्स एलियास

आर्काइव कंप्रेस, एक्सट्रैक्ट, और प्रबंधित करें। सभी प्रमुख फॉर्मेट के लिए समर्थन।

## अवलोकन

ये एलियास `archives.aliases.sh` में परिभाषित हैं और Chezmoi द्वारा स्वचालित रूप से लोड होते हैं।

## संदर्भ

### यूनिवर्सल एक्सट्रैक्ट

`extract` कमांड (शॉर्टहैंड `x`) किसी भी आर्काइव को ऑटो-डिटेक्ट करके एक्सट्रैक्ट करता है:

```bash
extract archive.tar.gz
```

**समर्थित फॉर्मेट:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### कंप्रेस

`compress` कमांड (शॉर्टहैंड `ac`) से आर्काइव बनाएं:

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**समर्थित फॉर्मेट:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### बैकअप

`backup` (शॉर्टहैंड `bak`) से टाइमस्टैम्प्ड बैकअप बनाएं:

```bash
backup important_folder
backup database.sql zip
```

### सामग्री सूची

`list_archive` (शॉर्टहैंड `lar`) से आर्काइव सामग्री देखें:

```bash
list_archive backup.tar.gz
```

### आर्काइव टूल्स

| एलियास | विवरण |
|:---|:---|
| `c7z` | 7z आर्काइव बनाएं |
| `x7z` | 7z आर्काइव एक्सट्रैक्ट करें |
| `l7z` | 7z सामग्री सूची |
| `ctar` | tar आर्काइव बनाएं |
| `xtar` | tar आर्काइव एक्सट्रैक्ट करें |
| `ltar` | tar सामग्री सूची |
| `ctgz` | tar.gz आर्काइव बनाएं |
| `xtgz` | tar.gz आर्काइव एक्सट्रैक्ट करें |
| `ltgz` | tar.gz सामग्री सूची |
| `ctbz` | tar.bz2 आर्काइव बनाएं |
| `xtbz` | tar.bz2 आर्काइव एक्सट्रैक्ट करें |
| `ltbz` | tar.bz2 सामग्री सूची |
| `ctxz` | tar.xz आर्काइव बनाएं |
| `xtxz` | tar.xz आर्काइव एक्सट्रैक्ट करें |
| `ltxz` | tar.xz सामग्री सूची |
| `ctzst` | tar.zst आर्काइव बनाएं |
| `xtzst` | tar.zst आर्काइव एक्सट्रैक्ट करें |
| `ltzst` | tar.zst सामग्री सूची |
| `czip` | zip आर्काइव बनाएं |
| `xzip` | zip आर्काइव एक्सट्रैक्ट करें |
| `lzip` | zip सामग्री सूची |
| `crar` | rar आर्काइव बनाएं |
| `xrar` | rar आर्काइव एक्सट्रैक्ट करें |
| `lrar` | rar सामग्री सूची |

### कंप्रेशन टूल्स

| एलियास | विवरण |
|:---|:---|
| `cgz` | gzip से कंप्रेस करें |
| `xgz` | gzip एक्सट्रैक्ट करें |
| `cbz` | bzip2 से कंप्रेस करें |
| `xbz` | bzip2 एक्सट्रैक्ट करें |
| `cxz` | xz से कंप्रेस करें |
| `xxz` | xz एक्सट्रैक्ट करें |
| `czst` | zstd से कंप्रेस करें |
| `xzst` | zstd एक्सट्रैक्ट करें |
| `clz4` | lz4 से कंप्रेस करें |
| `xlz4` | lz4 एक्सट्रैक्ट करें |
