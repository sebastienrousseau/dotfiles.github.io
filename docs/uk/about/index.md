---
title: Про Dotfiles | Dotfiles
description: Дослідіть технічний огляд Dotfiles v0.2.495. Сумісно з macOS, Linux та WSL через Dotfiles.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Про Dotfiles | Dotfiles preview
canonical: /uk/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Про Dotfiles
pageType: docs
schemaType: WebPage
permalink: /uk/about/
---

# Про Dotfiles

Dotfiles v0.2.495 — кросплатформна конфігурація оболонки, керована Chezmoi.

## Встановлення

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## Перевірка

```bash
dot doctor
```

## Основні команди

- `dot apply` застосовує зміни конфігурації.
- `dot update` оновлює репозиторій та прогріває кеші.
- `dot doctor` перевіряє шляхи, інструменти та стан оболонки.
- `dot heal` відновлює відсутній або пошкоджений стан.
- `dot smoke-test` перевіряє основні ланцюжки інструментів.

## Пов'язане

- [Аліаси](/uk/aliases/)
- [Функції](/uk/functions/)
- [Шляхи](/uk/paths/)
