---
description: Shell functions that enhance your terminal experience. Utilities for API testing, file management, system operations, and more.
lang: en-GB
metaTitle: Functions - Dotfiles (UK)
permalink: /functions/

meta:
  - name: keywords
    content: functions, shell, bash, zsh, dotfiles, productivity, utilities, api, file, system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell functions that enhance your terminal experience. Utilities for API testing, file management, system operations, and more.
  - name: twitter:title
    content: Functions - Dotfiles
  - name: og:title
    content: Functions - Dotfiles
  - name: og:description
    content: Shell functions that enhance your terminal experience. Utilities for API testing, file management, system operations, and more.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Functions

Shell utilities to enhance your productivity across macOS, Linux, and Windows.

## Discover

Functions are defined as individual `.sh` files. During `chezmoi apply`, they are aggregated into `~/.config/shell/functions.sh` and sourced by your shell.

## Get started

### Add a function

1. Create a new `.sh` file (e.g., `myfunc.sh`)
2. Add your function definition
3. Apply changes:
   ```bash
   chezmoi apply
   ```

## Reference

### API testing

| Function | Description | Usage |
|:---|:---|:---|
| `apihealth` | Check health of one or multiple APIs | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Monitor API response time | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Perform basic load testing | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Debug HTTP requests with timing | `httpdebug [options] [url]` |

### HTTP utilities

| Function | Description | Usage |
|:---|:---|:---|
| `curlheader` | View HTTP headers | `curlheader [header] [url]` |
| `curlstatus` | Check HTTP status code | `curlstatus [url]` |
| `curltime` | Measure HTTP timing metrics | `curltime [url]` |
| `view-source` | View website source code | `view-source URL` |
| `whoisport` | Find process using a port | `whoisport PORT` |

### File management

| Function | Description | Usage |
|:---|:---|:---|
| `backup` | Create timestamped backups | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Base64 encoding and decoding | `encode64 "string"` |
| `extract` | Extract archive formats | `extract [file]` |
| `hexdump` | Display file in hex format | `hexdump [file] [lines]` |
| `ren` | Batch rename extensions | `ren OLD_EXT NEW_EXT` |
| `size` | Check file or directory size | `size [file/directory]` |
| `zipf` | Create ZIP archives | `zipf [folder]` |

### File naming

| Function | Description | Usage |
|:---|:---|:---|
| `kebabcase` | Convert to kebab-case | `kebabcase <files...>` |
| `lowercase` | Convert to lowercase | `lowercase <files...>` |
| `sentencecase` | Convert to sentence case | `sentencecase <files...>` |
| `snakecase` | Convert to snake_case | `snakecase <files...>` |
| `titlecase` | Convert to Title Case | `titlecase <files...>` |
| `uppercase` | Convert to UPPERCASE | `uppercase <files...>` |

### System utilities

| Function | Description | Usage |
|:---|:---|:---|
| `caffeine` | Prevent system from sleeping | `caffeine [command]` |
| `environment` | Detect OS environment | `environment` |
| `freespace` | Clean purgeable disk space | `freespace [disk]` |
| `hiddenfiles` | Toggle hidden files in Finder | `hiddenfiles [show\|hide]` |
| `hostinfo` | Display host information | `hostinfo` |
| `hstats` | View command usage stats | `hstats` |
| `last` | List recently modified files | `last [minutes]` |
| `logout` | Cross-platform logout | `logout [--force]` |
| `myproc` | List user processes | `myproc` |
| `stopwatch` | Terminal stopwatch | `stopwatch` |
| `sysinfo` | Display system information | `sysinfo` |

### Caffeine commands

Prevent your system from sleeping or activating the screensaver.

| Command | Description |
|:---|:---|
| `caffeine daemon` | Start the caffeine daemon |
| `caffeine status` | Check if daemon is running |
| `caffeine start` | Keep the screen awake |
| `caffeine stop` | Allow screen to sleep |
| `caffeine toggle` | Toggle screen awake |
| `caffeine shutdown` | Shut down the daemon |

Works on macOS (native `caffeinate`), Linux (`xdg-screensaver`), and Windows (PowerShell).

### Security

| Function | Description | Usage |
|:---|:---|:---|
| `genpass` | Generate strong passwords | `genpass [num_blocks] [separator]` |
| `keygen` | Generate SSH key pairs | `keygen [name] [email] [type] [bits]` |

### Navigation

| Function | Description | Usage |
|:---|:---|:---|
| `cdls` | Change directory and list | `cdls [directory]` |
| `goto` | Quick directory navigation | `goto [directory]` |
| `mount_read_only` | Mount read-only as read-write | `mount_read_only [image]` |
| `rd` | Remove directory | `rd [directory]` |
| `remove_disk` | Safely eject disk | `remove_disk [disk]` |

### Miscellaneous

| Function | Description | Usage |
|:---|:---|:---|
| `matrix` | Terminal Matrix effects | `matrix [options]` |
| `prependpath` | Add directory to PATH | `prependpath [directory]` |
| `ql` | Open in macOS Quick Look | `ql [file]` |
| `vscode` | Open in VS Code | `vscode [file]` |

## Compatibility

- **macOS** — Full support with macOS-specific utilities
- **Linux** — Compatible with common distributions
- **Windows** — Support via WSL, Cygwin, or Git Bash

## Help

Each function includes documentation via `--help`:

```bash
apihealth --help
```
