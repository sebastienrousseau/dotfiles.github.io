---
description: chmod, chown, chgrp 명령어를 위한 셸 별칭. 755, 644, 777과 같은 숫자 단축키로 빠르게 파일 권한을 설정합니다.
lang: ko-KR
metaTitle: Permission 별칭 - Dotfiles (KR)
permalink: /alias/permission/
sidebar: true

meta:
  - name: keywords
    content: permission aliases, chmod shortcuts, file permissions, chown, chgrp, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: chmod, chown, chgrp 명령어를 위한 셸 별칭. 숫자 단축키로 빠르게 파일 권한을 설정합니다.
  - name: twitter:title
    content: Permission 별칭 - Dotfiles
  - name: og:title
    content: Permission 별칭 - Dotfiles
  - name: og:description
    content: chmod, chown, chgrp 명령어를 위한 셸 별칭. 숫자 단축키로 빠르게 파일 권한을 설정합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Permission 별칭

셸 환경에서 파일 및 디렉토리 권한을 관리하는 단축키.

## 개요

이 별칭은 `permission.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다. 일반적인 권한 패턴과 소유권 명령어에 빠르게 접근할 수 있습니다.

## 참조

### 숫자 권한 단축키

| 별칭 | 설명 |
|:---|:---|
| `000` | 사용자, 그룹, 기타에 대해 읽기, 쓰기, 실행 권한 없음 |
| `400` | 사용자에게만 실행 권한 허용, 읽기나 쓰기 없음 |
| `444` | 모든 사용자에게 읽기 권한 허용, 쓰기나 실행 없음 |
| `600` | 사용자에게만 읽기 및 쓰기 권한 |
| `644` | 모든 사용자에게 읽기 권한, 사용자에게만 쓰기 권한 |
| `666` | 모든 사용자에게 읽기 및 쓰기 권한 |
| `755` | 사용자에게 읽기, 쓰기, 실행 권한, 그룹과 기타에게는 읽기와 실행만 |
| `764` | 사용자와 그룹에게 읽기 및 쓰기, 기타에게는 읽기만 |
| `777` | 모든 사용자에게 읽기, 쓰기, 실행 권한 |

### 파일 모드 명령

| 별칭 | 설명 |
|:---|:---|
| `chmod` | 파일 모드 비트 변경 |
| `chmodr` | 파일 모드 비트 재귀적 변경 |
| `chmodu` | 현재 사용자로 파일 모드 비트 재귀적 변경 |
| `chmox` | 파일을 실행 가능하게 만들기 |

### 소유권 명령

| 별칭 | 설명 |
|:---|:---|
| `chown` | 파일 소유자 및 그룹 변경 |
| `chownr` | 파일 소유자 및 그룹 재귀적 변경 |
| `chownu` | 현재 사용자로 파일 소유자 및 그룹 재귀적 변경 |
| `chgrp` | 파일 또는 디렉토리의 그룹 소유권 변경 |
| `chgrpr` | 파일 또는 디렉토리의 그룹 소유권 재귀적 변경 |
| `chgrpu` | 현재 사용자로 파일 또는 디렉토리의 그룹 소유권 재귀적 변경 |
