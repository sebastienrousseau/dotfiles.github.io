---
description: 파일 관리, 텍스트 처리, 체크섬 유틸리티를 위한 GNU Coreutils 별칭. 빠른 명령줄 워크플로.
lang: ko-KR
metaTitle: GNU Coreutils 별칭 - Dotfiles (KR)
permalink: /alias/gnu/
sidebar: true

meta:
  - name: keywords
    content: gnu coreutils, shell aliases, linux utilities, file management, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: GNU Coreutils 별칭 - Dotfiles
  - name: twitter:description
    content: 파일 관리, 텍스트 처리, 체크섬 유틸리티를 위한 GNU Coreutils 별칭.
  - name: og:title
    content: GNU Coreutils 별칭 - Dotfiles
  - name: og:description
    content: 파일 관리, 텍스트 처리, 체크섬 유틸리티를 위한 GNU Coreutils 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# GNU Coreutils 별칭

필수 Unix 유틸리티의 빠른 명령줄 워크플로를 위한 단축키.

## 개요

GNU Coreutils 별칭은 표준 Unix 유틸리티의 단축 명령을 제공합니다. `gnu.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 파일 관리

| 별칭 | 설명 |
|:---|:---|
| `basename` | 파일 이름에서 디렉토리와 접미사 제거 |
| `cp` | 파일과 디렉토리 복사 |
| `dirname` | 파일 이름에서 비디렉토리 접미사 제거 |
| `ln` | 파일 간 링크 생성 |
| `ls` | 디렉토리 내용 나열 |
| `mkdir` | 디렉토리 생성 |
| `mv` | 파일이나 디렉토리 이동 또는 이름 변경 |
| `pwd` | 작업 디렉토리 이름 출력 |
| `rm` | 파일이나 디렉토리 삭제 |
| `rmdir` | 빈 디렉토리 삭제 |

### 텍스트 처리

| 별칭 | 설명 |
|:---|:---|
| `awk` | 패턴 스캔 및 처리 언어 |
| `cat` | 파일 연결 및 표시 |
| `cut` | 파일의 각 줄에서 섹션 제거 |
| `diff` | 파일을 줄 단위로 비교 |
| `grep` | 패턴과 일치하는 줄 출력 |
| `head` | 파일의 첫 부분 출력 |
| `sed` | 텍스트 필터링 및 변환용 스트림 편집기 |
| `sort` | 텍스트 파일의 줄 정렬 |
| `tail` | 파일의 마지막 부분 출력 |
| `tr` | 문자 변환 또는 삭제 |

### 체크섬 유틸리티

| 별칭 | 설명 |
|:---|:---|
| `b2sum` | BLAKE2 메시지 다이제스트 출력 또는 확인 |
| `cksum` | CRC 체크섬 및 바이트 수 출력 |
| `sha1sum` | SHA1 메시지 다이제스트 출력 또는 확인 |
| `sha256sum` | SHA256 메시지 다이제스트 출력 또는 확인 |
| `sha512sum` | SHA512 메시지 다이제스트 출력 또는 확인 |

### 인코딩 유틸리티

| 별칭 | 설명 |
|:---|:---|
| `base32` | base32 데이터 출력 또는 변환 |
| `base64` | base64 데이터 인코딩 또는 디코딩 |
| `basenc` | 다양한 형식으로 데이터 인코딩 또는 디코딩 |
