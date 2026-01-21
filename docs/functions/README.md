---
description: Shell functions provided by Dotfiles to enhance your terminal experience.
lang: en-GB
metaTitle: Functions - Dotfiles (UK)
permalink: /functions/

meta:
  - name: keywords
    content: functions, shell, bash, zsh, dotfiles, productivity
---

# Functions

Dotfiles includes a collection of utility functions to speed up your workflow. These are automatically loaded into your shell environment.

## API & Network

| Function     | Description                         |
| :----------- | :---------------------------------- |
| `apihealth`  | Check health of an API endpoint.    |
| `apilatency` | Measure API latency.                |
| `apiload`    | Simple API load testing.            |
| `curlheader` | Get HTTP headers using curl.        |
| `curlstatus` | Get HTTP status code.               |
| `curltime`   | Measure curl request time.          |
| `httpdebug`  | Debug HTTP traffic.                 |
| `whoisport`  | Check who is using a specific port. |

## File Management

| Function          | Description                                     |
| :---------------- | :---------------------------------------------- |
| `cdls`            | Change directory and list contents.             |
| `extract`         | Extract any archive format (tar, zip, gz, etc). |
| `freespace`       | Check free disk space.                          |
| `hiddenfiles`     | List hidden files.                              |
| `showhiddenfiles` | Toggle hidden files in Finder (macOS).          |
| `size`            | Get directory size.                             |
| `zipf`            | Zip a file or directory.                        |
| `backup`          | Backup a file with a timestamp.                 |

## Text Processing

| Function       | Description                      |
| :------------- | :------------------------------- |
| `encode64`     | Base64 encode.                   |
| `hexdump`      | Hexdump a file.                  |
| `kebabcase`    | Convert string to kebab-case.    |
| `lowercase`    | Convert string to lowercase.     |
| `sentencecase` | Convert string to Sentence case. |
| `snakecase`    | Convert string to snake_case.    |
| `titlecase`    | Convert string to Title Case.    |
| `uppercase`    | Convert string to UPPERCASE.     |

## System & Utilities

| Function    | Description                           |
| :---------- | :------------------------------------ |
| `caffeine`  | Keep system awake (macOS).            |
| `genpass`   | Generate a secure password.           |
| `sysinfo`   | Display system information.           |
| `stopwatch` | A simple terminal stopwatch.          |
| `matrix`    | The Matrix digital rain effect.       |
| `myproc`    | List my processes.                    |
| `kill`      | Interactive process killer (via fzf). |

## Navigation

| Function      | Description                                 |
| :------------ | :------------------------------------------ |
| `goto`        | Quick navigation to bookmarked directories. |
| `prependpath` | Prepend a directory to $PATH.               |

> [!TIP]
> Use `type <function_name>` in your terminal to see the source code of any function!
