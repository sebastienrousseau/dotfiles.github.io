---
title: PNPM Reference Appendix | Dotfiles
description: Complete alias and helper function reference for PNPM in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: PNPM Reference Appendix | Dotfiles preview
canonical: /en/aliases/pnpm/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: PNPM Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/pnpm/reference/
---

# PNPM Reference Appendix

## Source files

- `.chezmoitemplates/aliases/pnpm/pnpm.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `pna` | `pnpm add` |
| `pnad` | `pnpm add --save-dev` |
| `pnap` | `pnpm add --save-peer` |
| `pnau` | `pnpm audit` |
| `pnb` | `pnpm run build` |
| `pnc` | `pnpm create` |
| `pnd` | `pnpm run dev` |
| `pndoc` | `pnpm run doc` |
| `pnga` | `pnpm add --global` |
| `pngls` | `pnpm list --global` |
| `pngrm` | `pnpm remove --global` |
| `pngu` | `pnpm update --global` |
| `pnh` | `pnpm help` |
| `pni` | `pnpm init` |
| `pnin` | `pnpm install` |
| `pnln` | `pnpm run lint` |
| `pnls` | `pnpm list` |
| `pnout` | `pnpm outdated` |
| `pnp` | `pnpm` |
| `pnpub` | `pnpm publish` |
| `pnrm` | `pnpm remove` |
| `pnrun` | `pnpm run` |
| `pns` | `pnpm run serve` |
| `pnst` | `pnpm start` |
| `pnsv` | `pnpm server` |
| `pnt` | `pnpm test` |
| `pntc` | `pnpm test --coverage` |
| `pnui` | `pnpm update --interactive` |
| `pnuil` | `pnpm update --interactive --latest` |
| `pnun` | `pnpm uninstall` |
| `pnup` | `pnpm update` |
| `pnwhy` | `pnpm why` |
| `pnx` | `pnpx` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
