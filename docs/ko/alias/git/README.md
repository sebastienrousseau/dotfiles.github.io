---
description: 커밋, 브랜치, diff, 리모트, 서브모듈 워크플로를 가속화하는 80개 이상의 Git 셸 별칭.
lang: ko-KR
metaTitle: Git 별칭 - Dotfiles (KR)
permalink: /alias/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shell shortcuts, git commit aliases, git branch aliases, git push aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 커밋, 브랜치, diff, 리모트, 서브모듈 워크플로를 가속화하는 80개 이상의 Git 셸 별칭.
  - name: twitter:title
    content: Git 별칭 - Dotfiles
  - name: og:title
    content: Git 별칭 - Dotfiles
  - name: og:description
    content: 커밋, 브랜치, diff, 리모트, 서브모듈 워크플로를 가속화하는 80개 이상의 Git 셸 별칭.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# Git 별칭

일상적인 Git 워크플로를 위한 직관적인 단축키.

## 개요

이 별칭은 `git.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다.

## 참조

### 코어

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `g` | `git` | git 단축키 |
| `gtp` | `git rev-parse --show-toplevel` | 저장소의 최상위 디렉토리 출력 |
| `gconfl` | `git config --list` | 모든 Git 설정 나열 |

### 작업 영역

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `ga` | `git add` | 파일 스테이징 |
| `gaa` | `git add --all` | 모든 변경사항 스테이징 |
| `gad` | `git add .` | 현재 디렉토리의 모든 것 스테이징 |
| `gcl` | `git clone` | 저장소 클론 |
| `gin` | `git init` | 새 Git 저장소 초기화 |
| `gco` | `git checkout` | 브랜치 전환 또는 파일 복원 |
| `gcb` | `git checkout -b` | 새 브랜치 생성 및 전환 |
| `gst` | `git status` | 작업 트리 상태 표시 |

### 커밋

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `gc` | `git commit -a` | 추적된 모든 변경사항 커밋 |
| `gca` | `git commit --amend` | 마지막 커밋 수정 |
| `gcm` | `git commit --message` | 인라인 메시지로 커밋 |

### Diff와 히스토리

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `gd` | `git diff` | 스테이징되지 않은 변경사항 표시 |
| `gdstaged` | `git diff --staged` | 스테이징된 변경사항 표시 |
| `gl` | `git log --oneline` | 한 줄 로그 |
| `glg` | `git log --graph --all --oneline --decorate` | 모든 브랜치의 그래프 로그 |

### 브랜치

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `gb` | `git branch` | 로컬 브랜치 나열 |
| `gbd` | `git branch -d` | 병합된 브랜치 삭제 |
| `gbr` | `git branch -r` | 원격 브랜치 나열 |
| `gswb` | `git switch` | 브랜치 전환 |

### 리모트와 Push/Pull

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `gf` | `git fetch` | 리모트에서 가져오기 |
| `gp` | `git pull` | 리모트에서 풀 |
| `gph` | `git push` | 리모트에 푸시 |
| `gpo` | `git push origin` | origin에 푸시 |
| `gr` | `git remote` | 리모트 관리 |
| `grv` | `git remote -v` | 리모트 URL 표시 |

### 되돌리기와 리셋

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `grev` | `git revert` | 커밋 되돌리기 |
| `grb` | `git rebase` | 현재 브랜치 리베이스 |
| `gresh` | `git reset --hard HEAD~1` | 이전 커밋으로 하드 리셋 |
| `gress` | `git reset --soft HEAD~1` | 소프트 리셋 |

### 서브모듈

| 별칭 | 명령 | 설명 |
|:---|:---|:---|
| `gsm` | `git submodule` | 서브모듈 관리 |
| `gsmi` | `git submodule init` | 서브모듈 초기화 |
| `gsmu` | `git submodule update` | 서브모듈 업데이트 |

### 서명

| 별칭 | 설명 |
|:---|:---|
| `enable-signing` | GPG 또는 SSH 커밋 서명 설정 |
| `verify-signatures` | 최근 커밋의 서명 확인 |
| `check-signing` | 현재 서명 설정 확인 |
