---
description: Alias de Terraform y Ansible para infraestructura como codigo. Atajos para init, plan, apply, destroy y operaciones de playbooks.
lang: es-ES
metaTitle: Alias de Terraform - Dotfiles (ES)
permalink: /es/aliases/terraform/
sidebar: true

meta:
  - name: keywords
    content: alias terraform, infraestructura codigo, iac, ansible, opentofu, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de Terraform y Ansible para infraestructura como codigo. Atajos para init, plan, apply, destroy y playbooks.
  - name: twitter:title
    content: Alias de Terraform - Dotfiles
  - name: og:title
    content: Alias de Terraform - Dotfiles
  - name: og:description
    content: Alias de Terraform y Ansible para infraestructura como codigo. Atajos para init, plan, apply, destroy y playbooks.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Terraform

Atajos para Infraestructura como Codigo (Terraform, OpenTofu, Ansible).

## Descripcion

Estos alias estan definidos en `terraform.aliases.sh` y se cargan automaticamente por chezmoi. Simplifican comandos comunes de gestion de infraestructura.

## Referencia

### Terraform

| Alias | Descripcion |
|:---|:---|
| `tf` | Atajo de Terraform |
| `tfi` | Init |
| `tfp` | Plan |
| `tfa` | Apply |
| `tfaa` | Apply (auto-approve) |
| `tfd` | Destroy |
| `tff` | Format |
| `tfv` | Validate |

### Ansible

| Alias | Descripcion |
|:---|:---|
| `ans` | Atajo de Ansible |
| `ansp` | Ansible Playbook |
| `anslint` | Ansible Lint |
