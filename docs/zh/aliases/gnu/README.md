---
description: 使用 GNU Coreutils 别名简化工作流，用于文件管理、文本处理和校验工具。
lang: zh-CN
metaTitle: GNU Coreutils 别名 - Dotfiles (CN)
permalink: /aliases/gnu/
sidebar: true

meta:
  - name: keywords
    content: gnu coreutils, shell 别名, linux 工具, 文件管理, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: GNU Coreutils 别名 - Dotfiles
  - name: twitter:description
    content: 使用 GNU Coreutils 别名简化工作流，用于文件管理、文本处理和校验工具。
  - name: og:title
    content: GNU Coreutils 别名 - Dotfiles
  - name: og:description
    content: 使用 GNU Coreutils 别名简化工作流，用于文件管理、文本处理和校验工具。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# GNU Coreutils 别名

基础 Unix 工具的快捷方式，加速命令行工作流。

## 概述

GNU Coreutils 别名提供标准 Unix 工具的简写命令。定义在 `gnu.aliases.sh` 中，由 chezmoi 自动加载，这些别名简化文件操作、文本处理和数据验证任务。

## 参考

### 文件管理

| 别名 | 描述 |
|:---|:---|
| `basename` | 从文件名中去除目录和后缀 |
| `cp` | 复制文件和目录 |
| `dirname` | 从文件名中去除非目录后缀 |
| `ln` | 创建文件链接 |
| `loname` | 打印链接名称 |
| `ls` | 列出目录内容 |
| `mkdir` | 创建目录 |
| `mkfifo` | 创建命名管道 (FIFOs) |
| `mknod` | 创建块或字符特殊文件 |
| `mv` | 移动或重命名文件或目录 |
| `pathchk` | 检查文件名有效性和可移植性 |
| `pwd` | 打印工作目录名称 |
| `readlink` | 打印解析的符号链接或规范文件名 |
| `realpath` | 打印解析的物理路径 |
| `rm` | 删除文件或目录 |
| `rmdir` | 删除空目录 |
| `unlink` | 删除文件或目录 |

### 文本处理

| 别名 | 描述 |
|:---|:---|
| `awk` | 模式扫描和处理语言 |
| `cat` | 连接并显示文件 |
| `csplit` | 按上下文分割文件 |
| `cut` | 从每行中删除部分 |
| `diff` | 逐行比较文件 |
| `fold` | 按指定宽度换行 |
| `grep` | 打印匹配模式的行 |
| `head` | 输出文件的前部分 |
| `nl` | 给文件行编号 |
| `paste` | 合并文件行 |
| `patch` | 应用差异文件 |
| `ptx` | 生成文件内容的排列索引 |
| `sed` | 过滤和转换文本的流编辑器 |
| `sort` | 排序文本文件行 |
| `split` | 分割文件 |
| `tail` | 输出文件的后部分 |
| `tr` | 转换或删除字符 |

### 校验工具

| 别名 | 描述 |
|:---|:---|
| `b2sum` | 打印或检查 BLAKE2 消息摘要 |
| `cksum` | 打印 CRC 校验和和字节计数 |
| `sha1sum` | 打印或检查 SHA1 消息摘要 |
| `sha224sum` | 打印或检查 SHA224 消息摘要 |
| `sha256sum` | 打印或检查 SHA256 消息摘要 |
| `sha384sum` | 打印或检查 SHA384 消息摘要 |
| `sha512sum` | 打印或检查 SHA512 消息摘要 |

### 编码工具

| 别名 | 描述 |
|:---|:---|
| `base32` | 打印或转换 base32 数据 |
| `base64` | 编码或解码 base64 数据 |
| `basenc` | 以各种格式编码或解码数据 |
