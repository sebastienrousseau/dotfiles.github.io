---
title: Справочное приложение Benchmarks | Dotfiles
description: Полный справочник псевдонимов и вспомогательных функций для Benchmarks в Dotfiles v0.2.495. Включает все ярлыки, примеры использования и функции оболочки для macOS, Linux и WSL.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Справочное приложение Benchmarks | Dotfiles preview
canonical: /ru/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /ru/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, справочник, псевдонимы, оболочка, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Полный справочник псевдонимов для Benchmarks в Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Полный справочник псевдонимов для Benchmarks в Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Создано для вашей жизни в Shell
  - name: og:locale
    content: ru_RU
---

# Справочное приложение Benchmarks

## Исходные файлы

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Справочник псевдонимов

| Псевдоним | Команда |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Проверка

- Выполните `chezmoi apply` после обновления псевдонимов.
- Выполните `dot doctor` для проверки состояния оболочки.
