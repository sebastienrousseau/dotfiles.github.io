---
description: 带有书签、历史记录跟踪和智能快捷方式的目录导航别名。更快地导航文件系统。
lang: zh-CN
metaTitle: CD 别名 - Dotfiles (CN)
permalink: /aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, 目录, 导航, 书签, shell 别名, dotfiles, 终端
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 带有书签、历史记录跟踪和智能快捷方式的目录导航别名。更快地导航文件系统。
  - name: twitter:title
    content: CD 别名 - Dotfiles
  - name: og:title
    content: CD 别名 - Dotfiles
  - name: og:description
    content: 带有书签、历史记录跟踪和智能快捷方式的目录导航别名。更快地导航文件系统。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# CD 别名

更快地导航文件系统。书签、历史记录和智能快捷方式。

## 概述

这些别名定义在 `cd.aliases.sh` 中，由 Chezmoi 自动加载。

## 参考

### 导航快捷方式

| 别名 | 描述 |
|:---|:---|
| `-` | 切换到上一个目录 |
| `..` | 上一级 |
| `...` | 上两级 |
| `....` | 上三级 |
| `.....` | 上四级 |
| `hom` | 导航到主目录 |

### 目录快捷方式

| 别名 | 路径 | 描述 |
|:---|:---|:---|
| `app` | `~/Applications` | 应用程序 |
| `cod` | `~/Code` | 代码目录 |
| `dsk` | `~/Desktop` | 桌面 |
| `doc` | `~/Documents` | 文档 |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | 下载 |
| `mus` | `~/Music` | 音乐 |
| `pic` | `~/Pictures` | 图片 |
| `vid` | `~/Videos` | 视频 |

### 系统目录

| 别名 | 路径 | 描述 |
|:---|:---|:---|
| `etc` | `/etc` | 系统配置 |
| `var` | `/var` | 可变文件 |
| `tmp` | `/tmp` | 临时文件 |
| `usr` | `/usr` | 用户程序 |

### 书签

| 命令 | 别名 | 描述 |
|:---|:---|:---|
| `bookmark [name]` | `bm` | 创建书签 |
| `bookmark_list` | `bml` | 列出书签 |
| `bookmark_update` | `bmu` | 更新书签 |
| `bookmark_remove` | `bmr` | 删除书签 |
| `goto <name>` | `bmg` | 转到书签 |

```bash
bm work-project      # 创建书签
bmg work-project     # 导航到书签
bml                  # 列出所有书签
```

### 历史记录

| 命令 | 别名 | 描述 |
|:---|:---|:---|
| `dirhistory` | `dh` | 显示目录历史 |
| `lwd` | `ld` | 返回上一个目录 |

### 高级

| 命令 | 别名 | 描述 |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | 创建并进入目录 |
| `proj` | `pr` | 转到项目根目录 |
| `pushd` | `pd` | 将目录推入堆栈 |
| `popd` | — | 从堆栈弹出 |
| `dirs` | — | 列出目录堆栈 |

## 配置

使用环境变量自定义行为：

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## 帮助

运行 `cdhelp` 查看所有命令或 `cdversion` 查看版本信息。
