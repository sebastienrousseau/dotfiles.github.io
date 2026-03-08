---
title: Terraform Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Terraform in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Terraform Reference Appendix | Dotfiles preview
canonical: /en/aliases/terraform/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Terraform Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/terraform/reference/
---

# Terraform Reference Appendix

## Source files

- `.chezmoitemplates/aliases/terraform/terraform.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `ans` | `ansible` |
| `ansg` | `ansible-galaxy` |
| `anslint` | `ansible-lint` |
| `ansp` | `ansible-playbook` |
| `tf` | `terraform` |
| `tfa` | `terraform apply` |
| `tfaa` | `terraform apply -auto-approve` |
| `tfd` | `terraform destroy` |
| `tfda` | `terraform destroy -auto-approve` |
| `tff` | `terraform fmt` |
| `tfi` | `terraform init` |
| `tfo` | `terraform output` |
| `tfp` | `terraform plan` |
| `tfs` | `terraform state` |
| `tfv` | `terraform validate` |
| `tip` | `tofu init && tofu plan` |
| `tofu` | `tofu` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
