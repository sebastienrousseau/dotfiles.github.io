---
description: 法务别名用于 Dotfiles
lang: zh-CN
metaTitle: 法务别名 - Dotfiles
permalink: /zh/aliases/legal/
---
# 法务与许可别名

用于开源合规、许可证扫描与署名归属。

## ⚖️ 别名

### License Scanning
| Alias | Description | Type |
|-------|-------------|------|
| `fossology-start` | 在 8081 启动本地 FOSSology | Docker |
| `fossology-stop` | 停止 FOSSology | Docker |
| `license-scan` | 快速扫描当前目录许可证（Trivy） | Binary |

### Copyright Headers
| Alias | Description | Type |
|-------|-------------|------|
| `add-headers` | 递归添加 MIT 许可头 | Docker (google/addlicense) |

### Attribution
| Alias | Description | Type |
|-------|-------------|------|
| `gen-notice` | 生成 `NOTICE` 文件 | Docker |

### Contribution
| Alias | Description | Type |
|-------|-------------|------|
| `check-cla` | 监控 PR 检查（含 CLA） | CLI (`gh`) |

## 📦 依赖

- **Docker**
- **GitHub CLI (`gh`)**
- **Trivy**
