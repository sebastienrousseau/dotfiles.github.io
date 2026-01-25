---
description: 북마크, 히스토리 추적 및 스마트 단축키가 포함된 디렉토리 탐색 별칭. 파일 시스템을 더 빠르게 탐색합니다.
lang: ko-KR
metaTitle: CD 별칭 - Dotfiles (KR)
permalink: /alias/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 북마크, 히스토리 추적 및 스마트 단축키가 포함된 디렉토리 탐색 별칭. 파일 시스템을 더 빠르게 탐색합니다.
  - name: twitter:title
    content: CD 별칭 - Dotfiles
  - name: og:title
    content: CD 별칭 - Dotfiles
  - name: og:description
    content: 북마크, 히스토리 추적 및 스마트 단축키가 포함된 디렉토리 탐색 별칭. 파일 시스템을 더 빠르게 탐색합니다.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# CD 별칭

파일 시스템을 더 빠르게 탐색합니다. 북마크, 히스토리 및 스마트 단축키.

## 개요

이 별칭은 `cd.aliases.sh`에 정의되어 있으며 Chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 탐색 단축키

| 별칭 | 설명 |
|:---|:---|
| `-` | 이전 디렉토리로 전환 |
| `..` | 한 단계 위로 |
| `...` | 두 단계 위로 |
| `....` | 세 단계 위로 |
| `.....` | 네 단계 위로 |
| `hom` | 홈 디렉토리로 이동 |

### 디렉토리 단축키

| 별칭 | 경로 | 설명 |
|:---|:---|:---|
| `app` | `~/Applications` | 애플리케이션 |
| `cod` | `~/Code` | 코드 디렉토리 |
| `dsk` | `~/Desktop` | 데스크톱 |
| `doc` | `~/Documents` | 문서 |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | 다운로드 |
| `mus` | `~/Music` | 음악 |
| `pic` | `~/Pictures` | 사진 |
| `vid` | `~/Videos` | 비디오 |

### 시스템 디렉토리

| 별칭 | 경로 | 설명 |
|:---|:---|:---|
| `etc` | `/etc` | 시스템 구성 |
| `var` | `/var` | 변수 파일 |
| `tmp` | `/tmp` | 임시 파일 |
| `usr` | `/usr` | 사용자 프로그램 |

### 북마크

| 명령 | 별칭 | 설명 |
|:---|:---|:---|
| `bookmark [name]` | `bm` | 북마크 생성 |
| `bookmark_list` | `bml` | 북마크 목록 |
| `bookmark_update` | `bmu` | 북마크 업데이트 |
| `bookmark_remove` | `bmr` | 북마크 삭제 |
| `goto <name>` | `bmg` | 북마크로 이동 |

```bash
bm work-project      # 북마크 생성
bmg work-project     # 북마크로 이동
bml                  # 모든 북마크 목록
```

### 히스토리

| 명령 | 별칭 | 설명 |
|:---|:---|:---|
| `dirhistory` | `dh` | 디렉토리 히스토리 표시 |
| `lwd` | `ld` | 마지막 디렉토리로 돌아가기 |

### 고급

| 명령 | 별칭 | 설명 |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | 디렉토리 생성 및 진입 |
| `proj` | `pr` | 프로젝트 루트로 이동 |
| `pushd` | `pd` | 디렉토리를 스택에 푸시 |
| `popd` | — | 스택에서 팝 |
| `dirs` | — | 디렉토리 스택 목록 |

## 구성

환경 변수로 동작 사용자화:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## 도움말

`cdhelp`를 실행하여 모든 명령을 보거나 `cdversion`으로 버전 정보를 확인합니다.
