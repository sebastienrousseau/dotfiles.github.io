---
title: Configuration Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Configuration in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Configuration Reference Appendix | Dotfiles preview
canonical: /en/aliases/configuration/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Configuration Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/configuration/reference/
---

# Configuration Reference Appendix

## Source files

- `.chezmoitemplates/aliases/configuration/configuration.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `dot` | `$HOME/.local/bin/dot` |
| `eddot` | `${EDITOR} $HOME/.dotfiles` |
| `edit_bash_profile` | `${EDITOR} $HOME/.bash_profile` |
| `edit_bashrc` | `${EDITOR} $HOME/.bashrc` |
| `edit_current_directory` | `${EDITOR} .` |
| `edit_docker_compose` | `${EDITOR} docker-compose.yml` |
| `edit_git_config` | `${EDITOR} $HOME/.gitconfig` |
| `edit_git_ignore` | `${EDITOR} $HOME/.gitignore` |
| `edit_ssh_config` | `${EDITOR} $HOME/.ssh/config` |
| `edit_zsh_profile` | `${EDITOR} $HOME/.zsh_profile` |
| `edit_zshrc` | `${EDITOR} $HOME/.zshrc` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
