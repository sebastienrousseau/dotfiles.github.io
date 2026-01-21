---
description: Dotfiles 提供的 Shell 函数，用于增强您的终端体验。
lang: zh-CN
metaTitle: 函数 - Dotfiles (CN)
permalink: /zh/functions/

meta:
  - name: keywords
    content: 函数, shell, bash, zsh, dotfiles, 生产力
---

# 函数

Dotfiles 包含一系列实用函数以加快您的工作流程。这些会自动加载到您的 Shell 环境中。

## API & 网络
| 函数 | 描述 |
| :--- | :--- |
| `apihealth` | 检查 API 端点的运行状况。 |
| `apilatency` | 测量 API 延迟。 |
| `apiload` | 简单的 API 负载测试。 |
| `curlheader` | 使用 curl 获取 HTTP 标头。 |
| `curlstatus` | 获取 HTTP 状态代码。 |
| `curltime` | 测量 curl 请求时间。 |
| `httpdebug` | 调试 HTTP 流量。 |
| `whoisport` | 检查谁在使用特定端口。 |

## 文件管理
| 函数 | 描述 |
| :--- | :--- |
| `cdls` | 更改目录并列出内容。 |
| `extract` | 提取任何归档格式 (tar, zip, gz 等)。 |
| `freespace` | 检查可用磁盘空间。 |
| `hiddenfiles` | 列出隐藏文件。 |
| `showhiddenfiles` | 在 Finder (macOS) 中切换隐藏文件。 |
| `size` | 获取目录大小。 |
| `zipf` | 压缩文件或目录。 |
| `backup` | 备份带时间戳的文件。 |

## 文本处理
| 函数 | 描述 |
| :--- | :--- |
| `encode64` | Base64 编码。 |
| `hexdump` | 文件的十六进制转储。 |
| `kebabcase` | 将字符串转换为 kebab-case。 |
| `lowercase` | 将字符串转换为小写。 |
| `sentencecase` | 将字符串转换为句子大小写。 |
| `snakecase` | 将字符串转换为 snake_case。 |
| `titlecase` | 将字符串转换为标题大小写。 |
| `uppercase` | 将字符串转换为大写。 |

## 系统 & 实用程序
| 函数 | 描述 |
| :--- | :--- |
| `caffeine` | 保持系统唤醒 (macOS)。 |
| `genpass` | 生成安全密码。 |
| `sysinfo` | 显示系统信息。 |
| `stopwatch` | 一个简单的终端秒表。 |
| `matrix` | 黑客帝国数字雨效果。 |
| `myproc` | 列出我的进程。 |
| `kill` | 交互式终止进程 (通过 fzf)。 |

## 导航
| 函数 | 描述 |
| :--- | :--- |
| `goto` | 快速导航到书签目录。 |
| `prependpath` | 将目录添加到 $PATH 前面。 |

> [!TIP]
> 在终端中使用 `type <function_name>` 查看任何函数的源代码！
