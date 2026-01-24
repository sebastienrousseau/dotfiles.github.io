---
description: GNU Core Utilities 别名提供强大命令作为快捷方式。它们是 GNU Core Utilities 的封装，是 GNU/Linux 系统的基础工具。
lang: zh-CN
metaTitle: GNU Core Utilities 别名 - Dotfiles (ZH)
permalink: /zh/aliases/gnu/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: GNU Core Utilities 别名提供强大命令作为快捷方式。它们是 GNU Core Utilities 的封装，是 GNU/Linux 系统的基础工具。
  - name: twitter:description
    content: GNU Core Utilities 别名提供强大命令作为快捷方式。它们是 GNU Core Utilities 的封装，是 GNU/Linux 系统的基础工具。
  - name: twitter:title
    content: GNU Core Utilities 别名 - Dotfiles (ZH)
  - name: og:title
    content: GNU Core Utilities 别名 - Dotfiles (ZH)
  - name: og:description
    content: GNU Core Utilities 别名提供强大命令作为快捷方式。它们是 GNU Core Utilities 的封装，是 GNU/Linux 系统的基础工具。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Gnu 别名

管理 Gnu 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `gnu.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

GNU Coreutils 别名集合，提供简写命令。

### 基础文件管理
- `basename` Strip directory and suffix from filenames.
- `cp` Copy files and directories.
- `dirname` Strip non-directory suffix from filenames.
- `ln` Create links between files.
- `loname` Print the name of the link.
- `ls` List directory contents.
- `mkdir` Create directories.
- `mkfifo` Make named pipes (FIFOs).
- `mknod` Make block or character special files.
- `mv` Move or rename files or directories.
- `pathchk` Check file name validity and portability.
- `pwd` Print working directory name.
- `readlink` Print resolved symbolic links or canonical file names.
- `realpath` Print the resolved physical path of the specified path.
- `rm` Remove files or directories.
- `rmdir` Remove empty directories.
- `unlink` Remove files or directories.
### 文件内容处理
- `awk` Pattern scanning and processing language.
- `cat` Concatenate and display files.
- `csplit` Split a file into context-determined pieces.
- `cut` Remove sections from each line of files.
- `diff` Compare files line by line.
- `fold` Wrap each input line to fit in specified width.
- `grep` Print lines matching a pattern.
- `head` Output the first part of files.
- `nl` Number lines of files.
- `paste` Merge lines of files.
- `patch` Apply a diff file to an original.
- `ptx` Produce a permuted index of file contents.
- `sed` Stream editor for filtering and transforming text.
- `sort` Sort lines of text files.
- `split` Split a file into pieces.
- `tail` Output the last part of files.
- `tr` Translate or delete characters.
### 校验与加密
- `b2sum` Print or check BLAKE2 message digests.
- `cksum` Print CRC checksum and byte counts.
- `sha1sum` Print or check SHA1 message digests.
- `sha224sum` Print or check SHA224 message digests.
- `sha256sum` Print or check SHA256 message digests.
- `sha384sum` Print or check SHA384 message digests.
- `sha512sum` Print or check SHA512 message digests.
### 其他工具
- `base32` Print or convert base32 data.
- `base64` Encode or decode base64 data.
- `basenc` Encode or decode base64, base32,

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
