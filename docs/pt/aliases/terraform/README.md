---
description: Aliases do Terraform para Dotfiles
lang: pt-BR
metaTitle: Aliases do Terraform - Dotfiles (BR)
permalink: /pt/aliases/terraform/
---

# Aliases do Terraform

Gerencie aliases de Infraestrutura como Código (Terraform, OpenTofu, Ansible). Parte da configuração **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descrição

Esses aliases são definidos em `terraform.aliases.sh` e são carregados automaticamente pelo `chezmoi`.

## ⚡ Aliases

### terraform

- `tf` - Atalho do Terraform
- `tfi` - Init
- `tfp` - Plan
- `tfa` - Apply
- `tfaa` - Apply (auto-aprovação)
- `tfd` - Destroy
- `tff` - Format
- `tfv` - Validate

### ansible

- `ans` - Atalho do Ansible
- `ansp` - Playbook do Ansible
- `anslint` - Ansible Lint

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
