---
title: AI Reference Appendix | Dotfiles
description: Complete alias and helper function reference for AI in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: AI Reference Appendix | Dotfiles preview
canonical: /en/aliases/ai/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: AI Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/ai/reference/
---

# AI Reference Appendix

## Source files

- `.chezmoitemplates/aliases/ai/ai.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `a` | `ai_core query` |
| `ai` | `sgpt` |
| `aic` | `sgpt --code` |
| `aid` | `aider --read ~/.config/ai/identity.md` |
| `aida` | `aider --read ~/.config/ai/identity.md --chat-mode ask` |
| `aidc` | `aider --read ~/.config/ai/identity.md --chat-mode code` |
| `aidw` | `aider --read ~/.config/ai/identity.md --watch-files` |
| `aie` | `sgpt --shell` |
| `cl` | `claude` |
| `clc` | `claude --chat` |
| `clp` | `claude < ~/.config/ai/identity.md` |
| `cod` | `codex` |
| `codi` | `codex instruct` |
| `dcl` | `dot cl` |
| `dcla` | `dot cl --pattern architect` |
| `dclh` | `dot cl --pattern hardener` |
| `dclr` | `dot cl --pattern refactor` |
| `dgmn` | `dot gemini` |
| `dgmna` | `dot gemini --pattern architect` |
| `dgmnh` | `dot gemini --pattern hardener` |
| `dgmnr` | `dot gemini --pattern refactor` |
| `dki` | `dot kiro` |
| `dkia` | `dot kiro --pattern architect` |
| `dkih` | `dot kiro --pattern hardener` |
| `dkir` | `dot kiro --pattern refactor` |
| `fab` | `fabric` |
| `gaic` | `git-ai-commit` |
| `gaice` | `git-ai-commit --edit` |
| `gaid` | `git-ai-diff` |
| `gaids` | `git-ai-diff --staged` |
| `gemi` | `gemini info` |
| `gems` | `gemini chat` |
| `ghcp` | `gh copilot` |
| `ghe` | `gh copilot explain` |
| `ghs` | `gh copilot suggest` |
| `gmn` | `gemini` |
| `kic` | `kiro-cli chat` |
| `kiro` | `kiro-cli` |
| `kit` | `kiro-cli term` |
| `oc` | `opencode` |
| `ocr` | `opencode run` |
| `ol` | `ollama` |
| `oll` | `ollama list` |
| `ollama-show` | `ollama show --modelfile` |
| `olp` | `ollama ps` |
| `olr` | `ollama run` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
