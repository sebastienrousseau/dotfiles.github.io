---
description: Chmod 别名用于更改文件或目录的权限（访问模式）。
lang: zh-CN
metaTitle: Chmod 别名 - Dotfiles (ZH)
permalink: /zh/aliases/chmod/
meta:
  - name: twitter:card
    content: Chmod 别名用于更改文件或目录的权限（访问模式）。
  - name: twitter:description
    content: Chmod 别名用于更改文件或目录的权限（访问模式）。
  - name: twitter:title
    content: Chmod 别名 - Dotfiles (ZH)
  - name: og:title
    content: Chmod 别名 - Dotfiles (ZH)
  - name: og:description
    content: Chmod 别名用于更改文件或目录的权限（访问模式）。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Chmod 别名

管理 Chmod 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `chmod.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

---
## 🚀 介绍
该脚本提供增强版快捷方式与函数，便于管理文件/目录权限。
包含输入校验、递归确认与易用别名。
---
## 🛠️ 功能
预设常见权限：
| Alias        | 权限           | 说明                              |
|--------------|----------------|-----------------------------------|
| `chmod_000`  | `----------`   | 所有人无权限                      |
| `chmod_400`  | `r--------`    | 仅所有者可读                      |
| `chmod_444`  | `r--r--r--`    | 所有人只读                        |
| `chmod_600`  | `rw-------`    | 所有者可读写                      |
| `chmod_644`  | `rw-r--r--`    | 所有者读写，其他只读              |
| `chmod_666`  | `rw-rw-rw-`    | 所有人可读写                      |
| `chmod_755`  | `rwxr-xr-x`    | 所有者全权限，其他读/执行         |
| `chmod_764`  | `rwxrw-r--`    | 所有者全权限，组读写              |
| `chmod_777`  | `rwxrwxrwx`    | 所有人全权限                      |
---
### 🔧 递归确认
`change_permission` 可递归应用权限并显示影响项数量：
```bash
change_permission 755 /path/to/directory -R
```
---
### 📂 用户/组/其他快捷方式
| Alias         | 说明                              |
|---------------|-----------------------------------|
| `chmod_u+x`   | 为所有者添加执行权限              |
| `chmod_u-x`   | 移除所有者执行权限                |
| `chmod_u+w`   | 为所有者添加写权限                |
| `chmod_u-w`   | 移除所有者写权限                  |
| `chmod_u+r`   | 为所有者添加读权限                |
| `chmod_u-r`   | 移除所有者读权限                  |
| `chmod_g+x`   | 为组添加执行权限                  |
| `chmod_g-x`   | 移除组执行权限                    |
| `chmod_g+w`   | 为组添加写权限                    |
| `chmod_g-w`   | 移除组写权限                      |
| `chmod_g+r`   | 为组添加读权限                    |
| `chmod_g-r`   | 移除组读权限                      |
| `chmod_o+x`   | 为其他用户添加执行权限            |
| `chmod_o-x`   | 移除其他用户执行权限              |
| `chmod_o+w`   | 为其他用户添加写权限              |
| `chmod_o-w`   | 移除其他用户写权限                |
| `chmod_o+r`   | 为其他用户添加读权限              |
| `chmod_o-r`   | 移除其他用户读权限                |
---
针对特定类型设置权限：
| Alias        | 说明                                  |
|--------------|---------------------------------------|
| `chmod_755d` | 将目录权限设为 `rwxr-xr-x`             |
| `chmod_644f` | 将文件权限设为 `rw-r--r--`             |
---
## 📦 安装
1. 克隆仓库：
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git
   ```
2. 在 shell 配置中引入脚本：
   ```bash
   echo 'source /path/to/dotfiles/chmod.sh' >> ~/.bashrc
   ```
3. 重新加载 shell：
   ```bash
   source ~/.bashrc
   ```
---
## 🧑‍💻 使用
示例：
- 应用常用权限：
  ```bash
  chmod_644 /path/to/file
  chmod_755 /path/to/directory
  ```
- 调整用户/组/其他权限：
  ```bash
  chmod_u+x /path/to/script
  chmod_g-w /path/to/file
  chmod_o+r /path/to/file
  ```
- 递归权限带确认：
  ```bash
  change_permission 755 /path/to/directory -R
  ```
---
## 🛡️ 许可证
本项目采用
[MIT License](https://opensource.org/licenses/MIT)。详见 `LICENSE`。
---
## 👨‍💻 作者
Created with ♥ by [Sebastien Rousseau](https://sebastienrousseau.com)
- Website: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
