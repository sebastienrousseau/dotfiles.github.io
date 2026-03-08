---
title: Default Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Default in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Default Reference Appendix | Dotfiles preview
canonical: /en/aliases/default/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Default Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/default/reference/
---

# Default Reference Appendix

## Source files

- `.chezmoitemplates/aliases/default/default.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `clearasl` | `clear_asl_logs` |
| `ctf` | `echo $(ls -1 \| wc -l)` |
| `da` | `date "+%Y-%m-%d %A %T %Z"` |
| `halt` | `sudo shutdown -h now` |
| `history` | `'fc -il 1' # Show history with ISO 8601 timestamps (zsh)` |
| `ipinfo` | `ip -br addr` |
| `ipinfo` | `ipconfig getpacket en0` |
| `ping` | `ping -c 5` |
| `poweroff` | `sudo shutdown -h now` |
| `q` | `quit` |
| `qfind` | `find . -name ` |
| `quit` | `exit` |
| `r` | `reload` |
| `reboot` | `sudo shutdown -r now` |
| `reload` | `exec $SHELL -l` |
| `t` | `tail -f` |
| `wk` | `date +%V` |

## Helper functions

- `pbcopy()`
- `pbpaste()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
