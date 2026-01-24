---
description: Git 别名提供强大的命令，为常用 Git 命令创建快捷方式。所有这些函数和别名都是 Git 命令行工具的包装器。Git 别名可提升速度与效率。
lang: zh-CN
metaTitle: Git 别名 - Dotfiles (ZH)
permalink: /zh/aliases/git/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Git 别名提供强大的命令，为常用 Git 命令创建快捷方式。所有这些函数和别名都是 Git 命令行工具的包装器。Git 别名可提升速度与效率。
  - name: twitter:description
    content: Git 别名提供强大的命令，为常用 Git 命令创建快捷方式。所有这些函数和别名都是 Git 命令行工具的包装器。Git 别名可提升速度与效率。
  - name: twitter:title
    content: Git 别名 - Dotfiles (ZH)
  - name: og:title
    content: Git 别名 - Dotfiles (ZH)
  - name: og:description
    content: Git 别名提供强大的命令，为常用 Git 命令创建快捷方式。所有这些函数和别名都是 Git 命令行工具的包装器。Git 别名可提升速度与效率。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Git 别名

管理 Git 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `git.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

这是一组实用的 Git 别名，用于简化并加速常见 Git 命令。
- `gc` 提交命令，自动 "add" 所有已知文件的更改。
- `gca` 修改当前分支的提交顶端，而不是创建新提交。
- `gcall` 提交所有更改。
- `gcam` 修改当前分支的提交顶端并编辑提交信息。
- `gcane` 修改当前分支的提交顶端且不编辑提交信息。
- `gcint` 交互式提交。
- `gcm` 带消息提交。
- `gd` 显示工作树与索引或某个树之间的更改。
- `gdch` 仅显示更改文件的名称与状态。
- `gdh` 显示工作目录与暂存区中已跟踪文件的全部更改。
- `gdstaged` 显示暂存区中的更改。
- `gdcached` 显示索引与 HEAD 之间的更改。
- `gdstat` 生成 diffstat。
- `glc` 显示变更日志，最新在前。
- `gld` 显示最近一天的日志。
- `gldc` 以严格 ISO 8601 格式显示最新提交日期。
- `gldl` 以本地时区显示日志日期。
- `glf` 显示 fetch 后的新提交日志，含统计信息，排除合并。
- `glfd` 以严格 ISO 8601 格式显示最早提交日期。
- `glfh` 分支拓扑可视化。
- `glg` 以图形显示日志。
- `glh` 显示最近一小时的日志。
- `gll` 以偏好的 KPI 格式显示日志。
- `glll` 以偏好的 KPI 格式显示日志（长条目）。
- `glm` 显示最近一个月的日志。
- `glmy` 按当前用户邮箱显示自己的提交日志。
- `glw` 显示最近一周的日志。
- `gly` 显示最近一年的日志。
- `gclout` 清理并丢弃工作树中的更改和未跟踪文件。
- `gco` 切换分支或还原工作树文件。
- `gcb` 创建新分支 <new_branch> 并以 <start_point> 为起点。
- `gcode` 删除已合并到本地主分支的所有本地分支。
- `gcom` 使本地分支与 main 保持一致。
- `gpb` 推送当前分支到 origin 并设置上游跟踪。
- `gpo` 推送本地更改到远程仓库。
- `gpt` 推送本地标签。
- `gpoll` 推送所有本地分支到远程。
- `gpull` 从另一个仓库或本地分支拉取并集成。
- `gpullm` 从 origin/master 拉取并合并到当前分支。
- `gpullo` 仅拉取单个分支。
- `gpush` 更新远程引用及其对象。
- `gpusho` 仅推送单个分支。
- `gpushr` 逐个推送所有远程分支。
- `gunpub` 删除当前分支的远程版本。
- `gpcb` 推送当前分支。
- `gr` 管理已跟踪的仓库集合。
- `gra` 为仓库 `url` 添加名为 `name` 的远程。
- `grall` 推送所有分支到所有远程。
- `grallo` 除 origin 之外的所有远程。
- `grao` 若不存在则添加 origin。
- `grbk` 回滚到暂存区。
- `grcl` 删除 `name` 下的过期远程跟踪分支。
- `grf` 显示每个子目录的 Git 远程 origin。
- `grfall` 获取仓库的所有远程。
- `grp` 推送所有远程。
- `grprint` 输出当前仓库的 URL。
- `grs` 显示远程 `name` 的信息。
- `grso` 显示 origin 所在位置。
- `gru` 获取一组远程的更新。
- `grv` 列出远程仓库 URL。
- `grev` 撤销现有提交的更改。
- `grevnc` 不自动提交的 revert。
- `gsm` 允许将外部仓库嵌入到子目录。
- `gsmi` 初始化索引中的子模块。
- `gsma` 添加子模块。
- `gsms` 同步子模块远程 URL 设置。
- `gsmu` 更新子模块以匹配超项目期望。
- `gsmui` 更新子模块并初始化。
- `gsmuir` 更新子模块并初始化且递归。
- `gst` 显示工作树状态。
- `gsta` 暂存变更（stash）。
- `gstrmu` 删除未跟踪文件。
- `gsts` 使用简短格式显示状态。
- `gstsb` 简短状态并显示分支与跟踪信息。
- `gt` 查看所有标签。
- `gtg` 创建/列出/删除/验证 GPG 签名标签。
- `gtl` 当前分支的最后一个标签。
- `gshow` 显示各种对象。
- `gshf` 查找当前分支最近的父分支。
- `gshls` 显示某次提交修改的文件列表。
- `gshnp` 简要显示 Git 对象。
- `gshwho` 按提交数显示贡献者。
- `grescl` Reset commit clean.
- `gresh` Reset commit hard.
- `gresp` Reset pristine.
- `gress` Reset commit.
- `gresu` Reset 到 upstream。
- `gtp` 获取顶层目录名。
- `grpa` 获取当前分支名。
- `gub` 获取 upstream 分支名。
- `grm` 从工作树和索引移除文件。
- `grmc` 仅从索引移除路径。
- `grmd` 移除已删除的文件。
- `grmd2` 移除已删除的文件。
- `grmds` 移除仓库中的 .DS_Store。
- `grmx` 移除所有已删除文件（含空格/引号）。
- `gblau` 按作者显示逐行贡献。
- `gconfdiff` 更好的 git diff，按词分割并着色。
- `gconfl` 列出所有设置。
- `gconfr` 输出本地仓库的远程 origin。
- `undopush` 撤销最后一次 push。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
