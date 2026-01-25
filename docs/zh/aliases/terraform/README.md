---
description: 用于基础设施即代码的 Terraform 和 Ansible shell 别名。IaC 工作流的快捷方式。
lang: zh-CN
metaTitle: Terraform 别名 - Dotfiles (CN)
permalink: /aliases/terraform/
sidebar: true

meta:
  - name: keywords
    content: terraform, ansible, 基础设施即代码, IaC, shell 别名, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 用于基础设施即代码的 Terraform 和 Ansible shell 别名。IaC 工作流的快捷方式。
  - name: twitter:title
    content: Terraform 别名 - Dotfiles
  - name: og:title
    content: Terraform 别名 - Dotfiles
  - name: og:description
    content: 用于基础设施即代码的 Terraform 和 Ansible shell 别名。IaC 工作流的快捷方式。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Terraform 别名

使用 Terraform 和 Ansible 进行基础设施即代码的快捷方式。

## 概述

这些别名定义在 `terraform.aliases.sh` 中，由 Chezmoi 自动加载。

## 参考

### Terraform

| 别名 | 描述 |
|:---|:---|
| `tf` | Terraform 快捷方式 |
| `tfi` | 初始化配置 |
| `tfp` | 计划更改 |
| `tfa` | 应用更改 |
| `tfaa` | 应用并自动批准 |
| `tfd` | 销毁基础设施 |
| `tff` | 格式化配置 |
| `tfv` | 验证配置 |

### Ansible

| 别名 | 描述 |
|:---|:---|
| `ans` | Ansible 快捷方式 |
| `ansp` | 运行 Ansible Playbook |
| `anslint` | Lint Ansible 文件 |
