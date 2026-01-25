---
title: "NPM-aliassen: Stroomlijn je Node-pakketbeheer"
description: "Versnel npm-workflows met intuitive shell-aliassen voor install, build, test en publish-commando's."
lang: nl-NL
metaTitle: "NPM-aliassen | Dotfiles"
permalink: /nl/aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: npm aliassen, node package manager, npm snelkoppelingen, shell aliassen, dotfiles, npm commando's
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: NPM-aliassen | Dotfiles
  - name: twitter:description
    content: Versnel npm-workflows met intuitive shell-aliassen voor install, build, test en publish-commando's.
  - name: og:title
    content: NPM-aliassen | Dotfiles
  - name: og:description
    content: Versnel npm-workflows met intuitive shell-aliassen voor install, build, test en publish-commando's.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# NPM-aliassen

Vereenvoudig je Node.js-ontwikkeling met afkortingscommando's voor de npm pakketbeheerder.

![Dotfiles banner][banner]

## Overzicht

Deze aliassen zijn gedefinieerd in `npm.aliases.sh` en worden automatisch geladen door chezmoi. Ze bieden snelle toegang tot gangbare npm-operaties.

## Referentie

### Pakketbeheer

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `npi` | `npm install` | Installeer npm-pakket |
| `npg` | `npm install -g` | Globaal npm-pakket |
| `nprm` | `npm uninstall` | Verwijder npm-pakket |
| `npu` | `npm update` | Werk npm-pakket bij |
| `npl` | `npm list` | Toon npm-pakketten |
| `npc` | `npm cache` | Cache npm-pakket |

### Scripts

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `npr` | `npm run` | Voer npm-script uit |
| `nps` | `npm start` | Start npm-script |
| `npb` | `npm run build` | Build npm-script |
| `npd` | `npm run dev` | Dev npm-script |
| `npt` | `npm test` | Test npm-script |
| `nprw` | `npm run watch` | Voer npm-script watch uit |
| `npsv` | `npm run serve` | Serve npm-script |

### Publiceren en analyse

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `npp` | `npm publish` | Publiceer npm-pakket |
| `npa` | `npm audit` | Audit npm-pakketten |
| `npx` | `npm exec` | Exec npm-pakket |
| `npy` | `npm why` | Waarom npm-pakket |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
