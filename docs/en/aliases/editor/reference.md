---
title: Editor Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Editor in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Editor Reference Appendix | Dotfiles preview
canonical: /en/aliases/editor/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Editor Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/editor/reference/
---

# Editor Reference Appendix

## Source files

- `.chezmoitemplates/aliases/editor/editor.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `e` | `${EDITOR}` |
| `edit` | `${EDITOR}` |
| `editor` | `${EDITOR}` |
| `em` | `emacs` |
| `emacs-nw` | `emacs -nw` |
| `emacsc` | `emacsclient` |
| `emacsrc` | `emacs ~/.emacs` |
| `et` | `"emacs -nw" # Terminal mode` |
| `mate` | `${EDITOR}` |
| `n` | `${EDITOR}` |
| `nanorc` | `nano "${HOME}/.nanorc"` |
| `ne` | `nanoedit` |
| `nvimconf` | `nvim "${HOME}/.config/nvim"` |
| `nvimlua` | `nvim "${HOME}/.config/nvim/init.lua"` |
| `nvimrc` | `nvim "${HOME}/.config/nvim/init.lua"` |
| `st` | `subl` |
| `stn` | `"subl -n" # Open in new window` |
| `stt` | `"subl ."  # Open current directory` |
| `v` | `${EDITOR}` |
| `vi` | `nvim` |
| `vim` | `nvim` |
| `vsc` | `code` |
| `vsca` | `code --add` |
| `vscd` | `code --diff` |
| `vsced` | `code --extensions-dir` |
| `vscex` | `code --install-extension` |
| `vsclist` | `code --list-extensions` |
| `vscn` | `code --new-window` |
| `vscr` | `code --reuse-window` |
| `vscu` | `code --user-data-dir` |

## Helper functions

- `editrc()`
- `nanoedit()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
