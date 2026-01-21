---
description: Dotfiles 的 Terraform 别名
lang: zh-CN
metaTitle: Terraform 别名 - Dotfiles (CN)
permalink: /zh/aliases/terraform/
---

# Terraform 别名

管理基础设施即代码别名 (Terraform, OpenTofu, Ansible)。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名在 `terraform.aliases.sh` 中定义，并由 `chezmoi` 自动加载。

## ⚡ 别名

### terraform

- `tf` - Terraform 快捷方式
- `tfi` - 初始化 (Init)
- `tfp` - 计划 (Plan)
- `tfa` - 应用 (Apply)
- `tfaa` - 应用 (自动批准)
- `tfd` -目前销毁 (Destroy)
- `tff` - 格式化 (Format)
- `tfv` - 验证 (Validate)

### ansible

- `ans` - Ansible 快捷方式
- `ansp` - Ansible Playbook
- `anslint` - Ansible Lint

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
