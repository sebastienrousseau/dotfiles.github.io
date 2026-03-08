---
title: Cd Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Cd in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Cd Reference Appendix | Dotfiles preview
canonical: /en/aliases/cd/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Cd Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/cd/reference/
---

# Cd Reference Appendix

## Source files

- `.chezmoitemplates/aliases/cd/cd-bookmarks.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-completion.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-config.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-core.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-help.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-history.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-init.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-navigation.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-shortcuts.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-stack.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd-utils.aliases.sh`
- `.chezmoitemplates/aliases/cd/cd.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `bm` | `'bm add'            # Create bookmark` |
| `bmg` | `'cd "$(bm goto $1)"' # Go to bookmark (requires shell cd)` |
| `bml` | `'bm list'           # List bookmarks` |
| `bmr` | `'bm remove'         # Remove bookmark` |
| `bmu` | `'bm update'         # Update bookmark` |
| `cd` | `'cd_with_history' # Override default cd command` |
| `cdh` | `'cd_with_history' # Explicit enhanced cd helper` |
| `cdhelp` | `cd_aliases_help` |
| `cdversion` | `cd_aliases_version` |
| `dh` | `'dirhistory' # Show directory history` |
| `dirs` | `'dirs -v'        # List directory stack with indices` |
| `ld` | `'lwd'        # Return to last directory` |
| `mcd` | `'mkdir -p "$1" && cd "$1"' # Create and enter directory` |
| `pd` | `'pushd'            # Push directory to stack` |
| `popd` | `'popd && ls -lh' # Pop directory from stack and list contents` |
| `pr` | `'proj'       # Navigate to project root` |

## Helper functions

- `bookmark()`
- `dirhistory()`
- `goto()`
- `lwd()`
- `mkcd()`
- `proj()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
