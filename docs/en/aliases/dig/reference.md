---
title: Dig Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Dig in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dig Reference Appendix | Dotfiles preview
canonical: /en/aliases/dig/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Dig Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/dig/reference/
---

# Dig Reference Appendix

## Source files

- `.chezmoitemplates/aliases/dig/dig.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `d` | `dig` |
| `d4` | `dig +short -4` |
| `d6` | `dig +short -6` |
| `dga` | `dig +all ANY` |
| `dgs` | `dig +short` |
| `digg` | `dig @8.8.8.8 +nocmd any +multiline +noall +answer` |
| `ip4` | `dig +short myip.opendns.com @resolver1.opendns.com -4` |
| `ip6` | `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` |
| `ips` | `ip4; ip6` |
| `wip` | `dig +short myip.opendns.com @resolver1.opendns.com` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
