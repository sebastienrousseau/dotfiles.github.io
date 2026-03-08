---
title: Permission Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Permission in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Permission Reference Appendix | Dotfiles preview
canonical: /en/aliases/permission/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Permission Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/permission/reference/
---

# Permission Reference Appendix

## Source files

- `.chezmoitemplates/aliases/permission/permission.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `000` | `chmod -R 000` |
| `400` | `chmod -R 400` |
| `444` | `chmod -R 444` |
| `600` | `chmod -R 600` |
| `644` | `chmod -R 644` |
| `755` | `chmod -R 755` |
| `764` | `chmod -R 764` |
| `chgrp` | `chgrp -v` |
| `chgrpr` | `chgrp -Rv` |
| `chgrpu` | `chgrp -Rv ${USER}` |
| `chmod` | `chmod -v` |
| `chmodr` | `chmod -Rv` |
| `chmodu` | `chmod -Rv u+rwX` |
| `chmox` | `chmod +x` |
| `chown` | `chown -v` |
| `chownr` | `chown -Rv` |
| `chownu` | `chown -Rv ${USER}` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
