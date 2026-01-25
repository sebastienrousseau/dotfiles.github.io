---
description: chmod 별칭으로 파일 및 디렉토리 권한 관리를 단순화합니다. 755, 644 등 일반적인 권한 패턴의 빠른 단축키.
lang: ko-KR
metaTitle: Chmod 별칭 - Dotfiles (KR)
permalink: /alias/chmod/
sidebar: true

meta:
  - name: keywords
    content: chmod aliases, file permissions, shell shortcuts, dotfiles, unix permissions
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Chmod 별칭 - Dotfiles
  - name: twitter:description
    content: chmod 별칭으로 파일 및 디렉토리 권한 관리를 단순화합니다.
  - name: og:title
    content: Chmod 별칭 - Dotfiles
  - name: og:description
    content: chmod 별칭으로 파일 및 디렉토리 권한 관리를 단순화합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Chmod 별칭

파일 및 디렉토리 권한 관리를 위한 단축키.

## 개요

chmod 별칭은 명령줄에서 파일 및 디렉토리 권한을 관리하는 간소화된 방법을 제공합니다. 숫자 권한 코드를 기억하는 대신 `chmod_755` 또는 `chmod_u+x`와 같은 직관적인 별칭을 사용하여 필요한 액세스 모드를 빠르게 설정합니다.

이 별칭은 `chmod.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 일반 권한 별칭

| 별칭 | 권한 | 설명 |
|:---|:---|:---|
| `chmod_000` | `----------` | 모든 사용자에게 권한 없음 |
| `chmod_400` | `r--------` | 소유자만 읽기 전용 |
| `chmod_444` | `r--r--r--` | 모든 사용자 읽기 전용 |
| `chmod_600` | `rw-------` | 소유자만 읽기/쓰기 |
| `chmod_644` | `rw-r--r--` | 소유자 읽기/쓰기, 그 외 읽기 전용 |
| `chmod_666` | `rw-rw-rw-` | 모든 사용자 읽기/쓰기 |
| `chmod_755` | `rwxr-xr-x` | 소유자 전체, 그 외 읽기/실행 |
| `chmod_764` | `rwxrw-r--` | 소유자 전체, 그룹 읽기/쓰기 |
| `chmod_777` | `rwxrwxrwx` | 모든 사용자 전체 권한 |

### 소유자 권한 별칭

| 별칭 | 설명 |
|:---|:---|
| `chmod_u+x` | 소유자 실행 권한 추가 |
| `chmod_u-x` | 소유자 실행 권한 제거 |
| `chmod_u+w` | 소유자 쓰기 권한 추가 |
| `chmod_u-w` | 소유자 쓰기 권한 제거 |
| `chmod_u+r` | 소유자 읽기 권한 추가 |
| `chmod_u-r` | 소유자 읽기 권한 제거 |

### 그룹 권한 별칭

| 별칭 | 설명 |
|:---|:---|
| `chmod_g+x` | 그룹 실행 권한 추가 |
| `chmod_g-x` | 그룹 실행 권한 제거 |
| `chmod_g+w` | 그룹 쓰기 권한 추가 |
| `chmod_g-w` | 그룹 쓰기 권한 제거 |
| `chmod_g+r` | 그룹 읽기 권한 추가 |
| `chmod_g-r` | 그룹 읽기 권한 제거 |

### 기타 사용자 권한 별칭

| 별칭 | 설명 |
|:---|:---|
| `chmod_o+x` | 기타 사용자 실행 권한 추가 |
| `chmod_o-x` | 기타 사용자 실행 권한 제거 |
| `chmod_o+w` | 기타 사용자 쓰기 권한 추가 |
| `chmod_o-w` | 기타 사용자 쓰기 권한 제거 |
| `chmod_o+r` | 기타 사용자 읽기 권한 추가 |
| `chmod_o-r` | 기타 사용자 읽기 권한 제거 |

### 파일 유형 별칭

| 별칭 | 설명 |
|:---|:---|
| `chmod_755d` | 모든 디렉토리 권한을 `rwxr-xr-x`로 설정 |
| `chmod_644f` | 모든 파일 권한을 `rw-r--r--`로 설정 |

### 재귀 권한 함수

`change_permission` 함수는 확인 프롬프트와 함께 권한을 재귀적으로 적용합니다:

```bash
change_permission 755 /path/to/directory -R
```
