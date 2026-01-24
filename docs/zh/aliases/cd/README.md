---
description: Change Directory 别名用于与 `cd` 交互。cd 用于切换当前目录。
lang: zh-CN
metaTitle: Change Directory 别名 - Dotfiles (ZH)
permalink: /zh/aliases/cd/

meta:
  - name: keywords
    content: aliases, cd, chdir, change directory, directory, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Change Directory 别名用于与 `cd` 交互。cd 用于切换当前目录。
  - name: twitter:description
    content: Change Directory 别名用于与 `cd` 交互。cd 用于切换当前目录。
  - name: twitter:title
    content: Change Directory 别名 - Dotfiles (ZH)
  - name: og:title
    content: Change Directory 别名 - Dotfiles (ZH)
  - name: og:description
    content: Change Directory 别名用于与 `cd` 交互。cd 用于切换当前目录。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Cd 别名

管理 Cd 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `cd.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

---
## 🚀 介绍
该仓库包含一套目录导航增强别名与脚本：
- 智能目录历史
- 持久书签
- 项目根目录检测
- 跨平台兼容
- 动态错误处理
- 自动列出目录
- 大目录优化
- 安全与校验
---
## 🛠️ 功能
### 🌟 导航快捷方式
| Alias           | 说明                           |
|------------------|--------------------------------|
| `-`             | 切换到上一个目录               |
| `..`, `...`     | 上升一或两级                   |
| `....`, `.....` | 上升三或四级                   |
| `hom`           | 回到 home (`~`)                |
---
### 📂 快捷目录访问
| Alias | 路径                 | 说明         |
|-------|----------------------|--------------|
| `app` | `${HOME}/Applications` | Applications |
| `cod` | `${HOME}/Code`         | Code         |
| `dsk` | `${HOME}/Desktop`      | Desktop      |
| `doc` | `${HOME}/Documents`    | Documents    |
| `dot` | `${HOME}/.dotfiles`    | Dotfiles     |
| `dwn` | `${HOME}/Downloads`    | Downloads    |
| `mus` | `${HOME}/Music`        | Music        |
| `pic` | `${HOME}/Pictures`     | Pictures     |
| `vid` | `${HOME}/Videos`       | Videos       |
---
### 📌 书签系统
| Command             | Alias | 说明                       |
|---------------------|-------|----------------------------|
| `bookmark [name]`   | `bm`  | 创建书签                   |
| `bookmark_list`     | `bml` | 列出书签                   |
| `bookmark_update`   | `bmu` | 更新书签                   |
| `bookmark_remove`   | `bmr` | 删除书签                   |
| `goto <name>`       | `bmg` | 跳转到书签目录             |
```bash
bm work-project
bmg work-project
bml
```
---
### 🕒 目录历史
| Command      | Alias | 说明                         |
|--------------|-------|------------------------------|
| `dirhistory` | `dh`  | 显示并导航历史               |
| `lwd`        | `ld`  | 返回上一个工作目录           |
---
### 🏗️ 高级导航
| Command          | Alias | 说明                                 |
|------------------|-------|--------------------------------------|
| `mkcd <dir>`     | `mcd` | 创建并进入目录                       |
| `proj`           | `pr`  | 进入项目根目录                       |
| `pushd`          | `pd`  | 推送目录到栈                         |
| `popd`           |       | 从栈弹出目录                         |
| `dirs`           |       | 显示目录栈                           |
---
### 🔧 系统目录
| Alias | 路径 | 说明 |
|-------|------|------|
| `etc` | `/etc` | 系统配置目录 |
| `var` | `/var` | 变量文件目录 |
| `tmp` | `/tmp` | 临时目录 |
| `usr` | `/usr` | 用户程序目录 |
---
### ⚙️ 高级配置
- 跨平台支持
- 环境变量：
  ```bash
  export SHOW_HIDDEN_FILES=true
  export ENABLE_COLOR_OUTPUT=true
  export ENABLE_DIR_GROUPING=true
  export AUTO_LIST_AFTER_CD=true
  export LARGE_DIR_THRESHOLD=1000
  export MAX_RECENT_DIRS=15
  export RESTORE_LAST_DIR=true
  ```
- Tab completion
- 帮助：`cdhelp`
- 版本：`cdversion`
---
## 📦 安装
```bash
git clone https://github.com/sebastienrousseau/dotfiles.git
```
```bash
echo 'source /path/to/dotfiles/cd.aliases.sh' >> ~/.bashrc
```
```bash
source ~/.bashrc
```
---
## 🧑‍💻 示例
```bash
cd ~/projects/website
mcd ~/projects/new-project
bm website
bml
bmg website
pr
mcd ~/projects/app/src/components
dh
ld
pd ~/downloads
popd
cdversion
cdhelp
```
---
## 🛡️ 安全特性
- 目录有效性校验
- 书签校验
- 安全文件操作
- 输入清理
---
## 📋 性能优化
- 大目录自动跳过列表
- 高效书签存储
- 历史去重
- 优化文件操作
---
## 📚 文档
运行 `cdhelp` 或访问官方文档。
---
## 🛡️ License
[MIT License](https://opensource.org/licenses/MIT).
---
## 👨‍💻 Author
Created with ♥ by [Sebastien Rousseau](https://sebastienrousseau.com)
- Website: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)
