---
title: Benchmarks Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Benchmarks in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Benchmarks Reference Appendix | Dotfiles preview
canonical: /en/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/benchmarks/reference/
---

# Benchmarks Reference Appendix

## Source files

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
