---
description: Shell-Aliase fuer Terraform und Ansible. Infrastructure as Code Workflows mit einpraegsamen Befehlen vereinfachen.
lang: de-DE
metaTitle: Terraform Aliase - Dotfiles (DE)
permalink: /de/aliases/terraform/
sidebar: true

meta:
  - name: keywords
    content: terraform aliase, ansible aliase, infrastructure as code, iac aliase, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Terraform Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer Terraform und Ansible Infrastructure as Code Workflows.
  - name: og:title
    content: Terraform Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer Terraform und Ansible Infrastructure as Code Workflows.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Terraform Aliase

Optimieren Sie Ihre Infrastructure as Code Workflows mit Terraform und Ansible.

## Uebersicht

Diese Aliase sind in `terraform.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf gaengige Terraform- und Ansible-Operationen.

## Referenz

### Terraform

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `tf` | `terraform` | Terraform-Verknuepfung |
| `tfi` | `terraform init` | Arbeitsverzeichnis initialisieren |
| `tfp` | `terraform plan` | Ausfuehrungsplan anzeigen |
| `tfa` | `terraform apply` | Aenderungen anwenden |
| `tfaa` | `terraform apply -auto-approve` | Aenderungen ohne Bestaetigung anwenden |
| `tfd` | `terraform destroy` | Infrastruktur zerstoeren |
| `tff` | `terraform fmt` | Konfigurationsdateien formatieren |
| `tfv` | `terraform validate` | Konfiguration validieren |

### Ansible

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `ans` | `ansible` | Ansible-Verknuepfung |
| `ansp` | `ansible-playbook` | Ansible Playbook ausfuehren |
| `anslint` | `ansible-lint` | Playbooks linten |
