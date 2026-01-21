---
description: Terraform Aliase für Dotfiles
lang: de-DE
metaTitle: Terraform Aliase - Dotfiles (DE)
permalink: /de/aliases/terraform/
---

# Terraform Aliase

Verwalten Sie Infrastructure as Code Aliase (Terraform, OpenTofu, Ansible). Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `terraform.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

### Terraform

- `tf` - Terraform Kurzbefehl
- `tfi` - Init
- `tfp` - Plan
- `tfa` - Apply
- `tfaa` - Apply (automatisch genehmigen)
- `tfd` - Destroy
- `tff` - Format
- `tfv` - Validate

### Ansible

- `ans` - Ansible Kurzbefehl
- `ansp` - Ansible Playbook
- `anslint` - Ansible Lint

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
