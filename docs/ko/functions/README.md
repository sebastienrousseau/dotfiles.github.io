---
description: 터미널 경험을 향상시키는 셸 함수. API 테스팅, 파일 관리, 시스템 작업 등을 위한 유틸리티.
lang: ko-KR
metaTitle: 함수 - Dotfiles (KR)
permalink: /functions/

meta:
  - name: keywords
    content: functions, shell, bash, zsh, dotfiles, productivity, utilities, api, file, system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 터미널 경험을 향상시키는 셸 함수. API 테스팅, 파일 관리, 시스템 작업 등을 위한 유틸리티.
  - name: twitter:title
    content: 함수 - Dotfiles
  - name: og:title
    content: 함수 - Dotfiles
  - name: og:description
    content: 터미널 경험을 향상시키는 셸 함수. API 테스팅, 파일 관리, 시스템 작업 등을 위한 유틸리티.
  - name: og:image:alt
    content: Dotfiles - 셸 라이프에 맞게 간단하게 설계됨
  - name: og:locale
    content: ko_KR
---

# 함수

macOS, Linux, Windows에서 생산성을 향상시키는 셸 유틸리티.

## 발견하기

함수는 개별 `.sh` 파일로 정의됩니다. `chezmoi apply` 중에 `~/.config/shell/functions.sh`로 집계되어 셸에서 소스됩니다.

## 시작하기

### 함수 추가

1. 새 `.sh` 파일을 생성합니다 (예: `myfunc.sh`)
2. 함수 정의를 추가합니다
3. 변경 사항을 적용합니다:
   ```bash
   chezmoi apply
   ```

## 참조

### API 테스팅

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `apihealth` | 하나 이상의 API 상태 확인 | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | API 응답 시간 모니터링 | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | 기본 부하 테스트 수행 | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | 타이밍과 함께 HTTP 요청 디버그 | `httpdebug [options] [url]` |

### HTTP 유틸리티

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `curlheader` | HTTP 헤더 보기 | `curlheader [header] [url]` |
| `curlstatus` | HTTP 상태 코드 확인 | `curlstatus [url]` |
| `curltime` | HTTP 타이밍 메트릭 측정 | `curltime [url]` |
| `view-source` | 웹사이트 소스 코드 보기 | `view-source URL` |
| `whoisport` | 포트를 사용하는 프로세스 찾기 | `whoisport PORT` |

### 파일 관리

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `backup` | 타임스탬프 백업 생성 | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Base64 인코딩 및 디코딩 | `encode64 "string"` |
| `extract` | 압축 파일 형식 해제 | `extract [file]` |
| `hexdump` | 파일을 16진수 형식으로 표시 | `hexdump [file] [lines]` |
| `ren` | 확장자 일괄 변경 | `ren OLD_EXT NEW_EXT` |
| `size` | 파일 또는 디렉토리 크기 확인 | `size [file/directory]` |
| `zipf` | ZIP 아카이브 생성 | `zipf [folder]` |

### 파일 이름 지정

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `kebabcase` | kebab-case로 변환 | `kebabcase <files...>` |
| `lowercase` | 소문자로 변환 | `lowercase <files...>` |
| `sentencecase` | sentence case로 변환 | `sentencecase <files...>` |
| `snakecase` | snake_case로 변환 | `snakecase <files...>` |
| `titlecase` | Title Case로 변환 | `titlecase <files...>` |
| `uppercase` | 대문자로 변환 | `uppercase <files...>` |

### 시스템 유틸리티

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `caffeine` | 시스템 절전 방지 | `caffeine [command]` |
| `environment` | OS 환경 감지 | `environment` |
| `freespace` | 퍼지 가능한 디스크 공간 정리 | `freespace [disk]` |
| `hiddenfiles` | Finder에서 숨김 파일 전환 | `hiddenfiles [show\|hide]` |
| `hostinfo` | 호스트 정보 표시 | `hostinfo` |
| `hstats` | 명령 사용 통계 보기 | `hstats` |
| `last` | 최근 수정된 파일 나열 | `last [minutes]` |
| `logout` | 크로스 플랫폼 로그아웃 | `logout [--force]` |
| `myproc` | 사용자 프로세스 나열 | `myproc` |
| `stopwatch` | 터미널 스톱워치 | `stopwatch` |
| `sysinfo` | 시스템 정보 표시 | `sysinfo` |

### 카페인 명령

시스템 절전 또는 화면 보호기 활성화를 방지합니다.

| 명령 | 설명 |
|:---|:---|
| `caffeine daemon` | 카페인 데몬 시작 |
| `caffeine status` | 데몬 실행 여부 확인 |
| `caffeine start` | 화면 깨움 유지 |
| `caffeine stop` | 화면 절전 허용 |
| `caffeine toggle` | 화면 깨움 전환 |
| `caffeine shutdown` | 데몬 종료 |

macOS (네이티브 `caffeinate`), Linux (`xdg-screensaver`), Windows (PowerShell)에서 작동합니다.

### 보안

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `genpass` | 강력한 비밀번호 생성 | `genpass [num_blocks] [separator]` |
| `keygen` | SSH 키 쌍 생성 | `keygen [name] [email] [type] [bits]` |

### 탐색

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `cdls` | 디렉토리 변경 및 나열 | `cdls [directory]` |
| `goto` | 빠른 디렉토리 탐색 | `goto [directory]` |
| `mount_read_only` | 읽기 전용을 읽기-쓰기로 마운트 | `mount_read_only [image]` |
| `rd` | 디렉토리 제거 | `rd [directory]` |
| `remove_disk` | 안전하게 디스크 배출 | `remove_disk [disk]` |

### 기타

| 함수 | 설명 | 사용법 |
|:---|:---|:---|
| `matrix` | 터미널 Matrix 효과 | `matrix [options]` |
| `prependpath` | PATH에 디렉토리 추가 | `prependpath [directory]` |
| `ql` | macOS Quick Look에서 열기 | `ql [file]` |
| `vscode` | VS Code에서 열기 | `vscode [file]` |

## 호환성

- **macOS** — macOS 전용 유틸리티와 함께 전체 지원
- **Linux** — 일반 배포판과 호환
- **Windows** — WSL, Cygwin, 또는 Git Bash를 통해 지원

## 도움말

각 함수에는 `--help`를 통한 문서가 포함되어 있습니다:

```bash
apihealth --help
```
