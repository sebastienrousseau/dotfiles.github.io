---
description: 增强终端体验的 Shell 函数。用于 API 测试、文件管理、系统操作等的工具。
lang: zh-CN
metaTitle: 函数 - Dotfiles (CN)
permalink: /functions/

meta:
  - name: keywords
    content: 函数, shell, bash, zsh, dotfiles, 生产力, 工具, api, 文件, 系统
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 增强终端体验的 Shell 函数。用于 API 测试、文件管理、系统操作等的工具。
  - name: twitter:title
    content: 函数 - Dotfiles
  - name: og:title
    content: 函数 - Dotfiles
  - name: og:description
    content: 增强终端体验的 Shell 函数。用于 API 测试、文件管理、系统操作等的工具。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# 函数

跨 macOS、Linux 和 Windows 提高生产力的 Shell 工具。

## 发现

函数定义为单独的 `.sh` 文件。在 `chezmoi apply` 期间，它们会被聚合到 `~/.config/shell/functions.sh` 并由你的 shell 加载。

## 开始使用

### 添加函数

1. 创建一个新的 `.sh` 文件（例如 `myfunc.sh`）
2. 添加你的函数定义
3. 应用更改：
   ```bash
   chezmoi apply
   ```

## 参考

### API 测试

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `apihealth` | 检查一个或多个 API 的健康状态 | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | 监控 API 响应时间 | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | 执行基本负载测试 | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | 调试带计时的 HTTP 请求 | `httpdebug [options] [url]` |

### HTTP 工具

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `curlheader` | 查看 HTTP 头 | `curlheader [header] [url]` |
| `curlstatus` | 检查 HTTP 状态码 | `curlstatus [url]` |
| `curltime` | 测量 HTTP 计时指标 | `curltime [url]` |
| `view-source` | 查看网站源代码 | `view-source URL` |
| `whoisport` | 查找使用端口的进程 | `whoisport PORT` |

### 文件管理

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `backup` | 创建带时间戳的备份 | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Base64 编码和解码 | `encode64 "string"` |
| `extract` | 提取归档格式 | `extract [file]` |
| `hexdump` | 以十六进制格式显示文件 | `hexdump [file] [lines]` |
| `ren` | 批量重命名扩展名 | `ren OLD_EXT NEW_EXT` |
| `size` | 检查文件或目录大小 | `size [file/directory]` |
| `zipf` | 创建 ZIP 归档 | `zipf [folder]` |

### 文件命名

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `kebabcase` | 转换为 kebab-case | `kebabcase <files...>` |
| `lowercase` | 转换为小写 | `lowercase <files...>` |
| `sentencecase` | 转换为句首大写 | `sentencecase <files...>` |
| `snakecase` | 转换为 snake_case | `snakecase <files...>` |
| `titlecase` | 转换为首字母大写 | `titlecase <files...>` |
| `uppercase` | 转换为大写 | `uppercase <files...>` |

### 系统工具

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `caffeine` | 防止系统休眠 | `caffeine [command]` |
| `environment` | 检测操作系统环境 | `environment` |
| `freespace` | 清理可清除的磁盘空间 | `freespace [disk]` |
| `hiddenfiles` | 在 Finder 中切换隐藏文件 | `hiddenfiles [show\|hide]` |
| `hostinfo` | 显示主机信息 | `hostinfo` |
| `hstats` | 查看命令使用统计 | `hstats` |
| `last` | 列出最近修改的文件 | `last [minutes]` |
| `logout` | 跨平台注销 | `logout [--force]` |
| `myproc` | 列出用户进程 | `myproc` |
| `stopwatch` | 终端秒表 | `stopwatch` |
| `sysinfo` | 显示系统信息 | `sysinfo` |

### Caffeine 命令

防止系统休眠或激活屏幕保护程序。

| 命令 | 描述 |
|:---|:---|
| `caffeine daemon` | 启动 caffeine 守护进程 |
| `caffeine status` | 检查守护进程是否运行 |
| `caffeine start` | 保持屏幕唤醒 |
| `caffeine stop` | 允许屏幕休眠 |
| `caffeine toggle` | 切换屏幕唤醒状态 |
| `caffeine shutdown` | 关闭守护进程 |

适用于 macOS（原生 `caffeinate`）、Linux（`xdg-screensaver`）和 Windows（PowerShell）。

### 安全

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `genpass` | 生成强密码 | `genpass [num_blocks] [separator]` |
| `keygen` | 生成 SSH 密钥对 | `keygen [name] [email] [type] [bits]` |

### 导航

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `cdls` | 切换目录并列出内容 | `cdls [directory]` |
| `goto` | 快速目录导航 | `goto [directory]` |
| `mount_read_only` | 将只读挂载为读写 | `mount_read_only [image]` |
| `rd` | 删除目录 | `rd [directory]` |
| `remove_disk` | 安全弹出磁盘 | `remove_disk [disk]` |

### 其他

| 函数 | 描述 | 用法 |
|:---|:---|:---|
| `matrix` | 终端黑客帝国效果 | `matrix [options]` |
| `prependpath` | 将目录添加到 PATH | `prependpath [directory]` |
| `ql` | 在 macOS 快速查看中打开 | `ql [file]` |
| `vscode` | 在 VS Code 中打开 | `vscode [file]` |

## 兼容性

- **macOS** — 完全支持 macOS 特定工具
- **Linux** — 兼容常见发行版
- **Windows** — 通过 WSL、Cygwin 或 Git Bash 支持

## 帮助

每个函数都包含通过 `--help` 获取的文档：

```bash
apihealth --help
```
