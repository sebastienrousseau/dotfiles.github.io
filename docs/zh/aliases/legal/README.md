---
description: Dotfiles 的法律别名
lang: zh-CN
metaTitle: 法律别名 - Dotfiles (CN)
permalink: /zh/aliases/legal/
---

# 法律与许可别名

用于管理开源合规性、许可证扫描和归属的工具。

## ⚖️ 别名

### 许可证扫描 (License Scanning)

| 别名              | 描述                                     | 类型   |
| ----------------- | ---------------------------------------- | ------ |
| `fossology-start` | 在端口 8081 上启动本地 FOSSology 服务器  | Docker |
| `fossology-stop`  | 停止 FOSSology 服务器                    | Docker |
| `license-scan`    |当前目录的快速许可证扫描（通过 Trivy）    | Binary |

### 版权头 (Copyright Headers)

| 别名          | 描述                                     | 类型                       |
| ------------- | ---------------------------------------- | -------------------------- |
| `add-headers` | 递归地将 MIT 许可证头添加到所有源文件    | Docker (google/addlicense) |

### 归属 (Attribution)

| 别名         | 描述                                     | 类型   |
| ------------ | ---------------------------------------- | ------ |
| `gen-notice` | 为依赖项生成 `NOTICE` 文件（最初支持 Go） | Docker |

### 贡献 (Contribution)

| 别名        | 描述                                     | 类型       |
| ----------- | ---------------------------------------- | ---------- |
| `check-cla` | 查看 GitHub PR 检查（包括 CLA）          | CLI (`gh`) |

## 📦 要求

- **Docker**: 用于隔离合规工具。
- **GitHub CLI (`gh`)**: 用于 PR/CLA 检查。
- **Trivy**: 自动安装/建议用于快速扫描。
