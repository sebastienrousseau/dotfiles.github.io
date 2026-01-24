---
description: dot 命令是统一入口，用于管理 dotfiles、学习功能并验证系统健康。
lang: zh-CN
metaTitle: dot 命令 - Dotfiles (ZH)
permalink: /zh/aliases/dot/

meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# `dot` 命令

`dot` 是与 dotfiles 交互的统一接口，封装 `chezmoi` 与其他工具。

## Usage

```bash
dot [command]
```

## Commands

| Command      | Description                                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **交互模式**：启动 Modern Core 工具与 AI 功能导览。                                                                              |
| `dot doctor` | **健康检查**：验证系统配置与依赖。（封装 `chezmoi doctor`）                                                                      |
| `dot update` | **更新系统**：拉取最新更改并重新应用。（封装 `chezmoi update`）                                                                  |
| `dot help`   | **帮助**：显示使用信息。                                                                                                         |

## Examples

### 交互式学习

```bash
dot learn
```

### 系统验证

```bash
dot doctor
```
