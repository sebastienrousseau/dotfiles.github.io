---
description: 别名允许您为经常使用的 shell 命令创建快捷方式。通过减少在定期使用 shell 时必须进行的键入量，这使您可以更高效。
lang: zh-CN
metaTitle: 别名 (Aliases) - Dotfiles (CN)
permalink: /zh/aliases/
---

# 别名

别名允许您为经常使用的 shell 命令创建快捷方式。通过减少在定期使用 shell 时必须进行的键入量，这使您可以更高效。例如，您可以键入 `gst` 而不是键入 `git status` 来获得相同的结果。

这是节省时间并大大减少每天使用终端时必须进行的键入量的好方法，这有助于您更高效。

## 预设

Dotfiles 包含一系列配置预设和各种配方，您可以使用它们开始。

### 自动系统检测

Dotfiles 包含一个实用程序功能，用于检测正在使用的当前 `ls` 风格，以帮助为您的系统设置正确的 `LS_COLORS` 环境变量。

`LS_COLORS` 环境变量由 `ls` 命令用于为命令的输出着色。

### 检查内置别名

在终端中键入以下别名命令：

```bash
alias
```

### GNU Find 实用程序别名

macOS 系统基于 BSD，而不是像 RedHat，Debian 和 Ubuntu 那样基于 GNU/Linux。因此，macOS 附带的许多命令行工具并非 100% 兼容。例如，macOS 上的 `find` 命令不支持 `-printf` 选项，该选项由 `locate` 命令使用。这意味着 `locate` 命令在 macOS 上不起作用。为了解决这个问题，您可以安装这些命令的 GNU 版本，它们与 Linux 版本完全兼容。

GNU Find Utilities 是 GNU 操作系统的基本目录搜索实用程序。这些程序通常与其他程序结合使用，以为其他命令提供模块化和强大的目录搜索和文件定位功能。

此软件包随附的工具包括：

- find - 在目录层次结构中搜索文件
- locate - 列出数据库中与模式匹配的文件
- updatedb - 更新文件名数据库
- xargs - 从标准输入构建并执行命令行

在终端中键入以下别名命令：

```bash
brew install findutils
```

### Dotfiles 别名

Dotfiles 中提供的文件包含一些您可能会觉得有用的固执己见的别名。这些定义在 `./dist/lib/aliases` 目录中，并在您启动新的 shell 会话时自动加载。

如果您使用的是 Bash shell，则通过 `~/.bashrc` 文件加载别名，如果您使用的是 Zsh shell，则在 `~/.zshrc` 文件中加载。

它们已按逻辑类别分组：

- [ai][ai] - 人工智能别名。
- [archives][archives] -用于处理归档的别名。
- [cd][cd] - 用于处理目录的别名。
- [chmod][chmod] - 用于处理文件权限的别名。
- [clear][clear] - 用于清除终端屏幕的别名。
- [compliance][compliance] - 合规性别名。
- [configuration][configuration] - 配置别名。
- [default][default] - 为所有用户加载的默认别名。
- [diagnostics][diagnostics] - 诊断别名。
- [dig][dig] - 用于处理 DNS 的别名。
- [docker][docker] - Docker 别名。
- [dot][dot] - 用于管理 dotfiles 的统一 CLI。
- [du][du] - 用于处理磁盘使用情况的别名。
- [editor][editor] - 用于处理编辑器的别名。
- [find][find] - 用于处理 `fd` 命令的别名。
- [fonts][fonts] - 字体别名。
- [gcloud][gcloud] - 用于处理 `gcloud` 命令的别名。
- [git][git] - 用于处理 Git 的别名。
- [gnu][gnu] - 用于处理 GNU Core 实用程序的别名。
- [go][go] - Go 语言别名。
- [installer][installer] - 安装程序别名。
- [interactive][interactive] - 用于处理交互式命令的别名。
- [jekyll][jekyll] - 用于处理 Jekyll 的别名。
- [kubernetes][kubernetes] - Kubernetes 别名。
- [legal][legal] - 法律别名。
- [list][list] - 用于处理 `ls` 命令的别名。
- [macOS][macos] - macOS 别名。
- [make][make] - 用于处理 `make` 命令的别名。
- [mkdir][mkdir] - 用于处理 `mkdir` 命令的别名。
- [modern][modern] - 现代 Unix。
- [modern-core][modern-core] - 高性能工具 (Atuin, Yazi, Zellij)。
- [npm][npm] - 用于处理 `npm` 命令的别名。
- [permission][permission] - 权限别名。
- [pnpm][pnpm] - 用于处理 `pnpm` 命令的别名。
- [ps][ps] - 用于处理 `ps` 命令的别名。
- [python][python] - Python 别名。
- [rsync][rsync] - 用于处理 `rsync` 命令的别名。
- [rust][rust] - 用于处理 Rust 编程语言的别名。
- [security][security] - 安全别名。
- [subversion][subversion] - 用于处理 Subversion 的别名。
- [sudo][sudo] - 用于处理 `sudo` 命令的别名。
- [terraform][terraform] - Terraform 别名。
- [tmux][tmux] - 用于处理 `tmux` 命令的别名。
- [update][update] - 用于处理 `update` 命令的别名。
- [uuid][uuid] - 用于处理 `uuid` 命令的别名。
- [wget][wget] - 用于处理 `wget` 命令的别名。
- [yarn][yarn] - 用于处理 Yarn 的别名。

[ai]: ./ai/
[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[compliance]: ./compliance/
[configuration]: ./configuration/
[default]: ./default/
[diagnostics]: ./diagnostics/
[dig]: ./dig/
[docker]: ./docker/
[dot]: ./dot/
[du]: ./du/
[editor]: ./editor/
[find]: ./find/
[fonts]: ./fonts/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/
[go]: ./go/
[installer]: ./installer/
[interactive]: ./interactive/
[jekyll]: ./jekyll/
[kubernetes]: ./kubernetes/
[legal]: ./legal/
[list]: ./list/
[macos]: ./macOS/
[make]: ./make/
[mkdir]: ./mkdir/
[modern]: ./modern/
[modern-core]: ./modern-core/
[npm]: ./npm/
[permission]: ./permission/
[pnpm]: ./pnpm/
[ps]: ./ps/
[python]: ./python/
[rsync]: ./rsync/
[rust]: ./rust/
[security]: ./security/
[subversion]: ./subversion/
[sudo]: ./sudo/
[terraform]: ./terraform/
[tmux]: ./tmux/
[update]: ./update/
[uuid]: ./uuid/
[wget]: ./wget/
[yarn]: ./yarn/
