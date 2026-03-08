---
title: Docker Aliases | Dotfiles
description: Discover Docker aliases in Dotfiles v0.2.495. Concise shortcuts for container, image, volume, and network management on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Docker Aliases | Dotfiles preview
canonical: /en/aliases/docker/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Docker Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/docker/
---

# Docker Aliases

Short Docker command names.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 114
- Helper functions: 7
- Source files: 1

## Quick examples

- `d` → `docker`
- `dbprune` → `docker builder prune -f`
- `dbx` → `docker buildx`
- `dbxb` → `docker buildx build`
- `dbxbp` → `docker buildx build --push`
- `dbxcreate` → `docker buildx create`
- `dbxinspect` → `docker buildx inspect`
- `dbxls` → `docker buildx ls`
- `dbxmulti` → `docker buildx build --platform linux/amd64,linux/arm64`
- `dbxrm` → `docker buildx rm`
- `dbxstop` → `docker buildx stop`
- `dbxuse` → `docker buildx use`

## Next step

Open the full list:

- [Docker Reference Appendix](./reference.md)
