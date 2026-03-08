---
title: Python Aliases | Dotfiles
description: Explore Python aliases in Dotfiles v0.2.495. Short commands for pip, venv, pytest, and package management on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Python Aliases | Dotfiles preview
canonical: /en/aliases/python/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Python Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/python/
---

# Python Aliases

Short Python commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 44
- Helper functions: 2
- Source files: 1

## Quick examples

- `black` → `'python -m black' # Code formatting with black`
- `deact` → `'deactivate'                     # Deactivate venv`
- `ipy` → `'ipython'           # Interactive Python shell`
- `lint` → `'pylint'           # Code linting`
- `mkvenv` → `'python -m venv .venv'          # Create .venv in current directory`
- `mkvenvlocal` → `'python -m venv ./venv'    # Create ./venv in current directory`
- `mypy` → `'python -m mypy'   # Static type checking`
- `pep8` → `'autopep8'         # Code formatting`
- `pipf` → `'pip freeze'                      # Show frozen requirements`
- `pipi` → `'pip install'                     # Install packages`
- `pipl` → `'pip list'                        # List installed packages`
- `pipout` → `'pip freeze > requirements.txt' # Save requirements`

## Next step

Open the full list:

- [Python Reference Appendix](./reference.md)
