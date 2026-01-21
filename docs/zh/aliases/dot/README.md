---
description: dot 命令是管理 dotfiles、学习功能和验证系统健康的统一入口点。
lang: zh-CN
metaTitle: dot 命令 - Dotfiles (CN)
permalink: /zh/aliases/dot/
---

# `dot` 命令

`dot` 命令是用于与您的 dotfiles 交互的新的统一接口。它封装了 `chezmoi` 和其他实用程序，以提供无缝体验。

## 用法

```bash
dot [command]
```

## 命令

| 命令         | 描述                                                                                   |
| :----------- | :------------------------------------------------------------------------------------- |
| `dot learn`  | **交互模式**: 启动 Modern Core 工具 (Atuin, Yazi, Zellij) 和 AI 功能的导览。           |
| `dot doctor` | **健康检查**: 验证您的系统配置是否正确以及所有依赖项是否已安装。（封装 `chezmoi doctor`） |
| `dot update` | **更新系统**: 从存储库中拉取最新更改并重新应用它们。（封装 `chezmoi update`）          |
| `dot help`   | **帮助**: 显示用法信息。                                                               |

## 示例

### 交互式学习

开始指导导览以学习新的按键绑定：

```bash
dot learn
```

### 系统验证

检查一切是否运行顺利：

```bash
dot doctor
```
