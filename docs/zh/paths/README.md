---
description: Dotfiles 如何管理你的 PATH 层次结构，确保正确的工具按正确的顺序加载。
lang: zh-CN
metaTitle: 路径 - Dotfiles (CN)
permalink: /paths/

meta:
  - name: keywords
    content: 路径, 环境, 变量, 层次结构, dotfiles, chezmoi, shell, 配置
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles 如何管理你的 PATH 层次结构，确保正确的工具按正确的顺序加载。
  - name: twitter:title
    content: 路径 - Dotfiles
  - name: og:title
    content: 路径 - Dotfiles
  - name: og:description
    content: Dotfiles 如何管理你的 PATH 层次结构，确保正确的工具按正确的顺序加载。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# 路径

模块化 `PATH` 管理。确保正确的工具按正确的顺序加载。

## 发现

路径配置被分割成基于优先级的文件。在 `chezmoi apply` 期间：

1. 此目录中的文件按字母顺序扫描
2. 内容聚合到 `~/.config/shell/paths.sh`
3. 在启动时由 `.zshrc` 加载

## 参考

| 脚本 | 描述 |
|:---|:---|
| `00-default.paths.sh` | 基本系统路径（`/usr/bin`、`/sbin`）和 Homebrew。首先加载。 |
| `99-custom.paths.sh` | 自定义用户路径（语言 SDK、本地 bin）。最后加载以获得优先权。 |

## 开始使用

### 添加用户路径

1. 编辑 `99-custom.paths.sh` 或创建新文件（例如 `50-myproject.paths.sh`）
2. 添加你的路径：
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. 应用更改：
   ```bash
   chezmoi apply
   ```
4. 验证：
   ```bash
   echo $PATH
   ```
