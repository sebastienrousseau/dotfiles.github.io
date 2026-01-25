---
description: 자주 사용하는 명령어의 단축키를 만드는 셸 별칭. 일상 워크플로에서 타이핑을 줄여 생산성을 높이세요.
lang: ko-KR
metaTitle: 별칭 - Dotfiles (KR)
permalink: /alias/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 자주 사용하는 명령어의 단축키를 만드는 셸 별칭. 일상 워크플로에서 타이핑을 줄여 생산성을 높이세요.
  - name: twitter:title
    content: 별칭 - Dotfiles
  - name: og:title
    content: 별칭 - Dotfiles
  - name: og:description
    content: 자주 사용하는 명령어의 단축키를 만드는 셸 별칭. 일상 워크플로에서 타이핑을 줄여 생산성을 높이세요.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 별칭

**Chezmoi**로 관리되는 모듈식 셸 별칭. 적게 입력하고, 더 많이 하세요.

## 발견하기

별칭은 작고 집중된 파일로 구성됩니다 — 각 도구나 워크플로마다 하나씩. `chezmoi apply` 중에 모든 별칭 파일이 `~/.config/shell/aliases.sh`로 집계되어 셸에서 소스됩니다.

## 시작하기

### 별칭 추가

1. 새 파일을 생성합니다 (예: `mytool/mytool.aliases.sh`)
2. 별칭을 정의합니다:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. 변경 사항을 적용합니다:
   ```bash
   chezmoi apply
   ```

## 참조

카테고리별 별칭 탐색:

<!-- markdownlint-disable MD013-->

| 카테고리 | 설명 |
| :--- | :--- |
| [AI](ai/) | AI 어시스턴트 및 LLM 도구 단축키 |
| [Archives](archives/) | 파일 압축 및 해제 |
| [CD](cd/) | 파일 시스템 탐색 |
| [Chmod](chmod/) | 파일 권한 변경 |
| [Clear](clear/) | 터미널 화면 지우기 |
| [Compliance](compliance/) | SOC2 및 개인정보 도구 |
| [Configuration](configuration/) | dotfiles 및 셸 구성 관리 |
| [Default](default/) | 기본 셸 별칭 |
| [Diagnostics](diagnostics/) | 자가 복구 및 상태 점검 |
| [Dig](dig/) | DNS 서버 쿼리 |
| [Disk Usage](disk-usage/) | 디스크 사용량 정보 표시 |
| [Docker](docker/) | 컨테이너 관리 |
| [Editor](editor/) | 텍스트 에디터 구성 |
| [Find](find/) | 파일 및 디렉토리 검색 |
| [Fonts](fonts/) | 폰트 캐시 관리 |
| [GCloud](gcloud/) | Google Cloud SDK 도구 |
| [Git](git/) | Git 버전 관리 |
| [GNU](gnu/) | GNU 코어 유틸리티 |
| [Go](go/) | Go 언어 도구 |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | 부트스트랩 및 배포 |
| [Interactive](interactive/) | 대화형 셸 동작 |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | 라이선스 스캔 도구 |
| [macOS](macOS/) | macOS 전용 설정 |
| [Make](make/) | GNU Make 유틸리티 |
| [Mkdir](mkdir/) | 디렉토리 생성 |
| [Modern](modern/) | Rust 기반 도구 대체 |
| [NPM](npm/) | Node.js 패키지 관리자 |
| [Permission](permission/) | 파일 권한 |
| [PNPM](pnpm/) | PNPM 패키지 관리자 |
| [PS](ps/) | 프로세스 상태 |
| [Python](python/) | Python 유틸리티 |
| [Rsync](rsync/) | 효율적인 파일 전송 |
| [Rust](rust/) | Rust 프로그래밍 도구 |
| [Security](security/) | 불변성 및 서명 |
| [Subversion](subversion/) | SVN 버전 관리 |
| [Sudo](sudo/) | 슈퍼유저 작업 |
| [Terraform](terraform/) | 인프라 코드화 |
| [Tmux](tmux/) | 터미널 멀티플렉서 |
| [Update](update/) | dotfiles 업데이트 |
| [UUID](uuid/) | UUID 생성 |
| [Wget](wget/) | 명령줄 다운로더 |
| [Yarn](yarn/) | Yarn 패키지 관리자 |

<!-- markdownlint-enable MD013-->
