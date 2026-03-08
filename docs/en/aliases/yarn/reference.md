---
title: Yarn Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Yarn in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Yarn Reference Appendix | Dotfiles preview
canonical: /en/aliases/yarn/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Yarn Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/yarn/reference/
---

# Yarn Reference Appendix

## Source files

- `.chezmoitemplates/aliases/yarn/yarn.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `y` | `yarn` |
| `ya` | `yarn add` |
| `yad` | `yarn add --dev` |
| `yga` | `yarn global add` |
| `yi` | `yarn install` |
| `yin` | `yarn init` |
| `yls` | `yarn list` |
| `yout` | `yarn outdated` |
| `yp` | `yarn pack` |
| `yrm` | `yarn remove` |
| `yrun` | `yarn run` |
| `ys` | `yarn serve` |
| `yst` | `yarn start` |
| `yt` | `yarn test` |
| `ytc` | `yarn test --coverage` |
| `yuc` | `yarn global upgrade && yarn cache clean` |
| `yui` | `yarn upgrade-interactive` |
| `yup` | `yarn upgrade` |
| `yv` | `yarn version` |
| `yw` | `yarn workspace` |
| `yws` | `yarn workspaces` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
