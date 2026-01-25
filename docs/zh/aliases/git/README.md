---
title: "Git Shell 别名：日常 Git 命令的快捷方式"
description: "Dotfiles 的 Git shell 别名。超过 80 个简写命令，加速提交、分支、差异、远程和子模块工作流。"
lang: zh-CN
metaTitle: Git Shell 别名 - Dotfiles (CN)
permalink: /aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git shell 别名, git 快捷方式, git dotfiles, git 提交别名, git 分支别名, git 推送别名, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: "Dotfiles 的 Git shell 别名。超过 80 个简写命令，加速提交、分支、差异、远程和子模块工作流。"
  - name: twitter:title
    content: Git Shell 别名 - Dotfiles (CN)
  - name: og:title
    content: Git Shell 别名 - Dotfiles (CN)
  - name: og:description
    content: "Dotfiles 的 Git shell 别名。超过 80 个简写命令，加速提交、分支、差异、远程和子模块工作流。"
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Git Shell 别名

Git shell 别名为常用 Git 命令创建快捷方式。属于 [Dotfiles](https://github.com/sebastienrousseau/dotfiles) 配置的一部分，由 Chezmoi 自动加载。

这些别名定义在 `git.aliases.sh` 和 `signing.aliases.sh` 中，安装后在任何 Bash 或 Zsh 会话中可用。

## 核心

| 别名 | 命令 | 描述 |
|------|------|------|
| `g` | `git` | git 的简写 |
| `gtp` | `git rev-parse --show-toplevel` | 输出仓库的顶层目录 |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | 输出当前分支名称 |
| `gconfl` | `git config --list` | 列出所有 Git 配置设置 |
| `gconfr` | `git config --local --get remote.origin.url` | 输出远程 origin URL |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | 配置按词着色的差异别名 |

## 工作区

| 别名 | 命令 | 描述 |
|------|------|------|
| `ga` | `git add` | 暂存文件 |
| `gaa` | `git add --all` | 暂存所有更改（已跟踪和未跟踪） |
| `gad` | `git add .` | 暂存当前目录中的所有内容 |
| `gau` | `git add --update` | 暂存修改和删除（不包括新文件） |
| `gcl` | `git clone` | 克隆仓库 |
| `gin` | `git init` | 初始化新的 Git 仓库 |
| `gco` | `git checkout` | 切换分支或恢复工作树文件 |
| `gcb` | `git checkout -b` | 创建并切换到新分支 |
| `gdis` | `git checkout --` | 丢弃工作目录中的更改 |
| `grs` | `git restore` | 恢复工作树文件 |
| `gmv` | `git mv` | 移动或重命名文件 |
| `grm` | `git rm` | 从工作树和索引中删除文件 |
| `grmc` | `git rm --cached` | 从索引中移除（保留在磁盘上） |
| `gst` | `git status` | 显示工作树状态 |
| `gsts` | `git status --short` | 简短格式状态 |
| `gstsb` | `git status --short --branch` | 带分支信息的简短状态 |
| `gsta` | `git stash save` | 暂存当前更改 |
| `gstp` | `git stash pop` | 应用并移除最新暂存 |
| `gstd` | `git stash drop` | 删除最新暂存条目 |
| `gclout` | `git clean -df && git checkout -- .` | 丢弃所有更改和未跟踪文件 |

## 提交

| 别名 | 命令 | 描述 |
|------|------|------|
| `gc` | `git commit -a` | 提交所有已跟踪的更改 |
| `gca` | `git commit --amend` | 修改上次提交 |
| `gcall` | `git add -A && git commit -av` | 暂存所有内容并详细提交 |
| `gcam` | `git commit --amend --message` | 使用新消息修改提交 |
| `gcane` | `git commit --amend --no-edit` | 修改提交但不更改消息 |
| `gcm` | `git commit --message` | 使用内联消息提交 |

## 差异和历史

| 别名 | 命令 | 描述 |
|------|------|------|
| `gd` | `git diff` | 显示未暂存的更改 |
| `gdch` | `git diff --name-status` | 显示已更改文件的名称和状态 |
| `gdh` | `git diff HEAD` | 显示自上次提交以来的所有更改 |
| `gdstaged` | `git diff --staged` | 显示已暂存的更改 |
| `gdcached` | `git diff --cached` | 显示索引和 HEAD 之间的更改 |
| `gdstat` | `git diff --stat --ignore-space-change -r` | 生成忽略空白的差异统计 |
| `gl` | `git log --since="last month" --oneline` | 上个月的单行日志 |
| `glg` | `git log --graph --all --oneline --decorate` | 所有分支的图形日志 |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | 带颜色的完整历史图形日志 |
| `glc` | `git log --oneline --reverse` | 按时间顺序的单行日志 |
| `gld` | `git log --since=1-day-ago` | 最近 24 小时的日志 |
| `gldc` | `git log -1 --date-order --format=%cI` | 最新提交的 ISO 8601 日期 |
| `gldl` | `git log --date=local` | 使用本地时区的日志 |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` | fetch 后的新提交（不含合并） |
| `gll` | *(装饰图形格式)* | 带作者和 GPG 状态的详细图形日志 |

## 分支

| 别名 | 命令 | 描述 |
|------|------|------|
| `gb` | `git branch` | 列出本地分支 |
| `gbd` | `git branch -d` | 删除已合并的分支 |
| `gbl` | `git branch -l` | 按模式列出分支 |
| `gbr` | `git branch -r` | 列出远程分支 |
| `gbrd` | `git branch -d -r` | 删除远程跟踪分支 |
| `gbrsb` | `git show-branch` | 显示分支及其提交 |
| `gswb` | `git switch` | 切换分支（现代方式） |
| `gcode` | `git checkout main && git branch --merged \| xargs git branch --delete` | 删除所有已合并到 main 的分支 |
| `gcom` | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | 将本地 main 重置为远程 |

## 远程和推送/拉取

| 别名 | 命令 | 描述 |
|------|------|------|
| `gf` | `git fetch` | 从远程获取 |
| `gp` | `git pull` | 从远程拉取 |
| `gph` | `git push` | 推送到远程 |
| `gpo` | `git push origin` | 推送到 origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | 推送并为当前分支设置 upstream |
| `gpoll` | `git push origin --all` | 将所有分支推送到 origin |
| `gpull` | `git pull` | 从远程拉取 |
| `gpush` | `git push` | 推送到远程 |
| `gr` | `git remote` | 管理远程仓库 |
| `gra` | `git remote add` | 添加新远程 |
| `grall` | `git remote \| xargs -L1 git push --all` | 将所有分支推送到所有远程 |
| `grao` | `git remote add origin` | 添加 origin 远程 |
| `grv` | `git remote -v` | 显示远程 URL |

## 撤销和重置

| 别名 | 命令 | 描述 |
|------|------|------|
| `grev` | `git revert` | 撤销一个提交 |
| `grevnc` | `git revert --no-commit` | 撤销但不自动提交 |
| `grb` | `git rebase` | 变基当前分支 |
| `grbk` | `git reset --soft HEAD^` | 撤销上次提交，保持更改已暂存 |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | 硬重置并清理未跟踪文件 |
| `gresh` | `git reset --hard HEAD~1` | 硬重置到上一个提交 |
| `gresp` | `git reset --hard && git clean -ffdx` | 将所有内容重置为初始状态 |
| `gress` | `git reset --soft HEAD~1` | 软重置（保持更改已暂存） |

## 子模块

| 别名 | 命令 | 描述 |
|------|------|------|
| `gsm` | `git submodule` | 管理子模块 |
| `gsmi` | `git submodule init` | 初始化子模块 |
| `gsma` | `git submodule add` | 添加子模块 |
| `gsms` | `git submodule sync` | 将子模块 URL 与 .gitmodules 同步 |
| `gsmu` | `git submodule update` | 更新子模块 |
| `gsmui` | `git submodule update --init` | 更新并初始化子模块 |
| `gsmuir` | `git submodule update --init --recursive` | 更新、初始化并递归子模块 |

## 工具

| 别名 | 命令 | 描述 |
|------|------|------|
| `gg` | `git grep` | 搜索仓库内容 |
| `gbs` | `git bisect` | 二分查找引入 bug 的提交 |
| `undopush` | `git push -f origin HEAD^:master` | 强制撤销上次推送到 master |

## 签名和安全

| 别名 | 命令 | 描述 |
|------|------|------|
| `enable-signing` | *(交互式向导)* | 配置 GPG 或 SSH 提交签名 |
| `verify-signatures` | `git log --show-signature -n 10` | 验证最近 10 次提交的签名 |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | 检查当前签名配置 |
