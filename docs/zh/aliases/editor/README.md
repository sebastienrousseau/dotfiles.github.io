---
description: 编辑器别名会使用环境变量 `editor` 中设置的编辑器打开文件。
lang: zh-CN
metaTitle: 编辑器别名 - Dotfiles (ZH)
permalink: /zh/aliases/editor/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: 编辑器别名会使用环境变量 `editor` 中设置的编辑器打开文件。
  - name: twitter:description
    content: 编辑器别名会使用环境变量 `editor` 中设置的编辑器打开文件。
  - name: twitter:title
    content: 编辑器别名 - Dotfiles (ZH)
  - name: og:title
    content: 编辑器别名 - Dotfiles (ZH)
  - name: og:description
    content: 编辑器别名会使用环境变量 `editor` 中设置的编辑器打开文件。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# 编辑器别名

管理编辑器别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `editor.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

该代码提供一整套用于编辑文件的别名，配合 `editor.sh` 自动选择系统中最合适的编辑器。
### 支持的编辑器
- **Neovim** - 现代 Vim 增强版
- **Visual Studio Code** - 功能丰富的代码编辑器
- **Vim** - 高度可配置的文本编辑器
- **Nano** - 简洁易用的终端编辑器
- **Emacs** - 可扩展、可定制的编辑器
- **Sublime Text** - 高级代码编辑器
- **Atom** - 可 Hack 的编辑器
通用别名（适配任意 editor.sh 选择的编辑器）：
- `e` - 快速编辑
- `edit` - 标准编辑命令
- `editor` - 完整编辑命令
- `mate` - TextMate 风格命令
- `n` - 短编辑别名
- `v` - Vim 风格编辑别名
根据 `editor.sh` 选择的编辑器，以下别名会自动可用：
- `vi`, `vim` - 当 Neovim 为主编辑器时重定向
- `nvimrc` - 编辑 Neovim Vimscript 配置
- `nvimlua` - 编辑 Neovim Lua 配置
- `nvimconf` - 打开 Neovim 配置目录
- `vsc` - VS Code 快捷方式
- `vsca` - 将文件夹添加到当前窗口
- `vscd` - 比较两个文件
- `vscn` - 打开新窗口
- `vscr` - 复用窗口打开文件
- `vscu` - 使用自定义用户数据目录打开
- `vsced` - 使用自定义扩展目录打开
- `vscex` - 安装 VS Code 扩展
- `vsclist` - 列出已安装扩展
- `vi` - 当 Vim 为主编辑器时重定向
- `vimrc` - 编辑 Vim 配置文件
- `vimconf` - 打开 Vim 配置目录
- `nanorc` - 编辑 Nano 配置文件
- `ne` - 带行号和平滑滚动的 Nano
- `em` - Emacs 快捷方式
- `emacs-nw` - 终端模式运行 Emacs
- `emacsc` - 启动 Emacs 客户端
- `emacsrc` - 编辑 Emacs 配置
- `et` - 快速终端 Emacs
- `st` - 启动 Sublime Text
- `stt` - 用 Sublime Text 打开当前目录
- `stn` - 新窗口打开 Sublime Text
- `a` - 启动 Atom
- `at` - 用 Atom 打开当前目录
- `an` - 新窗口打开 Atom
### 快速编辑配置
`editrc` 可快速编辑常用配置文件：
```bash
editrc bash     # 编辑 ~/.bashrc
editrc zsh      # 编辑 ~/.zshrc
editrc vim      # 编辑 ~/.vimrc
editrc nvim     # 编辑 Neovim init
editrc tmux     # 编辑 ~/.tmux.conf
editrc git      # 编辑 ~/.gitconfig
editrc ssh      # 编辑 ~/.ssh/config
editrc alias    # 编辑 ~/.dotfiles/aliases
editrc dotfiles # 编辑 ~/.dotfiles
```
### 与 editor.sh 集成
`editor.sh` 会：
1. 自动检测可用编辑器
2. 设置环境变量（`EDITOR`, `VISUAL`, `GIT_EDITOR` 等）
3. 配置编辑器相关设置
4. 提供智能 fallback
这些别名为所选编辑器提供便捷快捷方式。
### 使用示例
```bash
# 使用默认编辑器快速编辑
e myfile.txt
# 直接编辑配置
nvimrc    # 使用 Neovim (vimscript)
nvimlua   # 使用 Neovim (lua)
vimrc     # 使用 Vim
nanorc    # 使用 Nano
# 使用 VS Code 新窗口打开目录
vscn ~/projects/my-project
# 带行号的 Nano
ne config.txt
# 编辑特定配置
editrc git    # 编辑 git 配置
editrc bash   # 编辑 bash 配置
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
