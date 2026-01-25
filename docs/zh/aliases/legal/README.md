---
description: 用于许可证扫描、版权头和 dotfiles 中归属管理的 shell 别名。
lang: zh-CN
metaTitle: Legal 别名 - Dotfiles (CN)
permalink: /aliases/legal/
sidebar: true

meta:
  - name: keywords
    content: 法律别名, 许可证扫描, 版权头, 开源合规, dotfiles
---

# Legal 别名

用于管理开源合规、许可证扫描和归属的 Shell 工具。

## 概述

法律别名提供了一个简化的工作流，用于在项目中维护开源合规性。这些工具处理许可证扫描、版权头管理和依赖归属。

## 参考

### 许可证扫描

| 别名 | 描述 | 类型 |
|:---|:---|:---|
| `fossology-start` | 在端口 8081 启动本地 FOSSology 服务器 | Docker |
| `fossology-stop` | 停止 FOSSology 服务器 | Docker |
| `license-scan` | 通过 Trivy 快速扫描当前目录的许可证 | 二进制 |

### 版权头

| 别名 | 描述 | 类型 |
|:---|:---|:---|
| `add-headers` | 递归地将 MIT 许可证头添加到所有源文件 | Docker (google/addlicense) |

### 归属

| 别名 | 描述 | 类型 |
|:---|:---|:---|
| `gen-notice` | 为依赖项生成 NOTICE 文件（初始支持 Go） | Docker |

### 贡献

| 别名 | 描述 | 类型 |
|:---|:---|:---|
| `check-cla` | 监控 GitHub PR 检查（包括 CLA 状态） | CLI (gh) |

## 要求

- **Docker** - 隔离合规工具所需
- **GitHub CLI (gh)** - PR 和 CLA 检查所需
- **Trivy** - 自动安装或建议用于快速扫描
