---
description: Terraform 别名用于 Dotfiles
lang: zh-CN
metaTitle: Terraform 别名 - Dotfiles
permalink: /zh/aliases/terraform/
---
# Terraform 别名

管理 IaC 别名（Terraform、OpenTofu、Ansible）。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `terraform.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

### terraform
- `tf` - Terraform 快捷方式
- `tfi` - Init
- `tfp` - Plan
- `tfa` - Apply
- `tfaa` - Apply（自动批准）
- `tfd` - Destroy
- `tff` - Format
- `tfv` - Validate

### ansible
- `ans` - Ansible 快捷方式
- `ansp` - Ansible Playbook
- `anslint` - Ansible Lint

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
