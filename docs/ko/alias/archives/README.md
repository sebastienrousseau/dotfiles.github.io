---
description: tar, zip, 7z 등을 처리하기 위한 아카이브 및 압축 별칭. 간단한 명령으로 아카이브를 추출, 압축 및 관리합니다.
lang: ko-KR
metaTitle: 아카이브 별칭 - Dotfiles (KR)
permalink: /alias/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: tar, zip, 7z 등을 처리하기 위한 아카이브 및 압축 별칭. 간단한 명령으로 아카이브를 추출, 압축 및 관리합니다.
  - name: twitter:title
    content: 아카이브 별칭 - Dotfiles
  - name: og:title
    content: 아카이브 별칭 - Dotfiles
  - name: og:description
    content: tar, zip, 7z 등을 처리하기 위한 아카이브 및 압축 별칭. 간단한 명령으로 아카이브를 추출, 압축 및 관리합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 아카이브 별칭

아카이브 압축, 추출 및 관리. 모든 주요 형식 지원.

## 개요

이 별칭은 `archives.aliases.sh`에 정의되어 있으며 Chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 범용 추출

`extract` 명령 (단축어 `x`)은 모든 아카이브를 자동 감지하여 추출합니다:

```bash
extract archive.tar.gz
```

**지원 형식:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### 압축

`compress` 명령 (단축어 `ac`)으로 아카이브 생성:

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**지원 형식:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### 백업

`backup` (단축어 `bak`)으로 타임스탬프 백업 생성:

```bash
backup important_folder
backup database.sql zip
```

### 내용 목록

`list_archive` (단축어 `lar`)로 아카이브 내용 보기:

```bash
list_archive backup.tar.gz
```

### 아카이브 도구

| 별칭 | 설명 |
|:---|:---|
| `c7z` | 7z 아카이브 생성 |
| `x7z` | 7z 아카이브 추출 |
| `l7z` | 7z 내용 목록 |
| `ctar` | tar 아카이브 생성 |
| `xtar` | tar 아카이브 추출 |
| `ltar` | tar 내용 목록 |
| `ctgz` | tar.gz 아카이브 생성 |
| `xtgz` | tar.gz 아카이브 추출 |
| `ltgz` | tar.gz 내용 목록 |
| `ctbz` | tar.bz2 아카이브 생성 |
| `xtbz` | tar.bz2 아카이브 추출 |
| `ltbz` | tar.bz2 내용 목록 |
| `ctxz` | tar.xz 아카이브 생성 |
| `xtxz` | tar.xz 아카이브 추출 |
| `ltxz` | tar.xz 내용 목록 |
| `ctzst` | tar.zst 아카이브 생성 |
| `xtzst` | tar.zst 아카이브 추출 |
| `ltzst` | tar.zst 내용 목록 |
| `czip` | zip 아카이브 생성 |
| `xzip` | zip 아카이브 추출 |
| `lzip` | zip 내용 목록 |
| `crar` | rar 아카이브 생성 |
| `xrar` | rar 아카이브 추출 |
| `lrar` | rar 내용 목록 |

### 압축 도구

| 별칭 | 설명 |
|:---|:---|
| `cgz` | gzip으로 압축 |
| `xgz` | gzip 추출 |
| `cbz` | bzip2로 압축 |
| `xbz` | bzip2 추출 |
| `cxz` | xz로 압축 |
| `xxz` | xz 추출 |
| `czst` | zstd로 압축 |
| `xzst` | zstd 추출 |
| `clz4` | lz4로 압축 |
| `xlz4` | lz4 추출 |
