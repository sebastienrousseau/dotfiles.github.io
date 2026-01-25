---
description: 基本 shell 别名，用于导航、系统控制和日常任务。使用这些通用快捷方式简化终端工作流。
lang: zh-CN
metaTitle: Default 别名 - Dotfiles (CN)
permalink: /aliases/default/
sidebar: true

meta:
  - name: keywords
    content: 默认别名, shell 别名, 终端快捷方式, dotfiles, bash 别名
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Default 别名 - Dotfiles
  - name: twitter:description
    content: 基本 shell 别名，用于导航、系统控制和日常任务。
  - name: og:title
    content: Default 别名 - Dotfiles
  - name: og:description
    content: 基本 shell 别名，用于导航、系统控制和日常任务。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Default 别名

日常终端任务的基本 shell 快捷方式。

## 概述

默认别名提供了一系列通用 shell 快捷方式，简化常见的终端操作。这些别名定义在 `default.aliases.sh` 中，由 chezmoi 在所有支持的 shell 中自动加载。

这些快捷方式涵盖通用工具、退出命令、网络诊断、系统监控和文件系统导航。

## 参考

### 通用

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | 显示当前日期和时间 |
| `p` | `pwd` | 打印工作目录 |
| `path` | `echo ${PATH//:/\\n}` | 逐行显示 PATH 变量 |
| `r` | `reload` | 重新加载 shell |
| `t` | `tail -f` | 实时跟踪文件输出 |
| `wk` | `date +%V` | 显示当前周数 |

### 退出和关机

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `q` | `exit` | 退出 shell |
| `quit` | `exit` | 退出 shell |
| `bye` | `exit` | 退出 shell |
| `:q` | `exit` | 退出 shell（vim 风格） |
| `halt` | `sudo /sbin/halt` | 停止系统 |
| `poweroff` | `sudo /sbin/shutdown` | 关闭系统 |
| `reboot` | `sudo /sbin/reboot` | 重启系统 |

### 历史

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `h` | `history` | 查看命令历史 |
| `history` | `fc -il 1` | 显示带 ISO 8601 时间戳的历史 |

### 网络

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `ifconfig` | `sudo ifconfig` | 配置网络接口 |
| `ipinfo` | `ipconfig getpacket en0` | 获取 en0 的网络参数 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | 显示活动的网络监听器 |
| `op` | `sudo lsof -i -P` | 列出开放端口 |
| `ping` | `ping -c 5` | 限制 5 个数据包的 ping |
| `ports` | `netstat -tulan` | 列出所有监听端口 |

### 系统监控

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `top` | `sudo btop` | 交互式进程监控器 |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | 清除 ASL 日志文件 |

### 工具

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `ctf` | `ls -1 \| wc -l` | 计算当前目录中的文件数 |
| `qfind` | `find . -name` | 快速文件搜索 |
| `reload` | `exec $SHELL -l` | 重新加载 shell |
| `wth` | `curl -s "wttr.in/?format=3"` | 获取当前天气 |
