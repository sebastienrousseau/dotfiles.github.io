---
description: Shell 别名为常用命令创建快捷方式。通过减少日常工作流中的键入量来提高生产力。
lang: zh-CN
metaTitle: 别名 - Dotfiles (CN)
permalink: /aliases/

meta:
  - name: keywords
    content: 别名, shell, bash, zsh, 快捷方式, 命令, dotfiles, chezmoi, 生产力, 终端
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell 别名为常用命令创建快捷方式。通过减少日常工作流中的键入量来提高生产力。
  - name: twitter:title
    content: 别名 - Dotfiles
  - name: og:title
    content: 别名 - Dotfiles
  - name: og:description
    content: Shell 别名为常用命令创建快捷方式。通过减少日常工作流中的键入量来提高生产力。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# 别名

由 **Chezmoi** 管理的模块化 Shell 别名。少打字，多做事。

## 发现

别名被组织成小型的、专注的文件 - 每个工具或工作流一个。在 `chezmoi apply` 期间，所有别名文件会被聚合到 `~/.config/shell/aliases.sh` 并由你的 Shell 加载。

## 开始使用

### 添加别名

1. 创建一个新文件（例如 `mytool/mytool.aliases.sh`）
2. 定义你的别名：
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. 应用更改：
   ```bash
   chezmoi apply
   ```

## 参考

按类别浏览别名：

<!-- markdownlint-disable MD013-->

| 类别 | 描述 |
| :--- | :--- |
| [AI](ai/) | AI 助手和 LLM 工具快捷方式 |
| [Archives](archives/) | 压缩和解压文件 |
| [CD](cd/) | 文件系统导航 |
| [Chmod](chmod/) | 更改文件权限 |
| [Clear](clear/) | 清除终端屏幕 |
| [Compliance](compliance/) | SOC2 和隐私工具 |
| [Configuration](configuration/) | 管理 dotfiles 和 shell 配置 |
| [Default](default/) | 默认 shell 别名 |
| [Diagnostics](diagnostics/) | 自我修复和健康检查 |
| [Dig](dig/) | 查询 DNS 服务器 |
| [Disk Usage](disk-usage/) | 显示磁盘使用信息 |
| [Docker](docker/) | 容器管理 |
| [Editor](editor/) | 配置文本编辑器 |
| [Find](find/) | 搜索文件和目录 |
| [Fonts](fonts/) | 字体缓存管理 |
| [GCloud](gcloud/) | Google Cloud SDK 工具 |
| [Git](git/) | Git 版本控制 |
| [GNU](gnu/) | GNU 核心工具 |
| [Go](go/) | Go 语言工具 |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | 引导和部署 |
| [Interactive](interactive/) | 交互式 shell 行为 |
| [Kubernetes](kubernetes/) | Kubernetes、Helm、K9s |
| [Legal](legal/) | 许可证扫描工具 |
| [macOS](macOS/) | macOS 特定设置 |
| [Make](make/) | GNU Make 工具 |
| [Mkdir](mkdir/) | 创建目录 |
| [Modern](modern/) | 基于 Rust 的工具替代品 |
| [NPM](npm/) | Node.js 包管理器 |
| [Permission](permission/) | 文件权限 |
| [PNPM](pnpm/) | PNPM 包管理器 |
| [PS](ps/) | 进程状态 |
| [Python](python/) | Python 工具 |
| [Rsync](rsync/) | 高效文件传输 |
| [Rust](rust/) | Rust 编程工具 |
| [Security](security/) | 不可变性和签名 |
| [Subversion](subversion/) | SVN 版本控制 |
| [Sudo](sudo/) | 超级用户操作 |
| [Terraform](terraform/) | 基础设施即代码 |
| [Tmux](tmux/) | 终端复用器 |
| [Update](update/) | 更新 dotfiles |
| [UUID](uuid/) | 生成 UUID |
| [Wget](wget/) | 命令行下载器 |
| [Yarn](yarn/) | Yarn 包管理器 |

<!-- markdownlint-enable MD013-->
