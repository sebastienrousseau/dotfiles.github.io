---
title: "Alias NPM: simplifica la gestión de paquetes Node"
description: "Acelera flujos npm con alias para install, build, test y publish."
lang: es-ES
metaTitle: "NPM Aliases | Dotfiles"
permalink: /aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: alias npm, gestor de paquetes node, atajos npm, alias shell, dotfiles, comandos npm
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: NPM Aliases | Dotfiles
  - name: twitter:description
    content: Acelera flujos npm con alias para install, build, test y publish.
  - name: og:title
    content: NPM Aliases | Dotfiles
  - name: og:description
    content: Acelera flujos npm con alias para install, build, test y publish.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias NPM

Simplifica el desarrollo Node.js con comandos abreviados para el gestor npm.

![Dotfiles banner][banner]

## Descubrir

Estos alias se definen en `npm.aliases.sh` y se cargan automáticamente por chezmoi. Proporcionan acceso rápido a operaciones npm comunes.

## Referencia

### Gestión de paquetes

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `npi` | `npm install` | Instalar paquete npm |
| `npg` | `npm install -g` | Instalar paquete npm global |
| `nprm` | `npm uninstall` | Eliminar paquete npm |
| `npu` | `npm update` | Actualizar paquete npm |
| `npl` | `npm list` | Listar paquetes npm |
| `npc` | `npm cache` | Gestionar caché npm |

### Scripts

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `npr` | `npm run` | Ejecutar script npm |
| `nps` | `npm start` | Iniciar script npm |
| `npb` | `npm run build` | Build de script npm |
| `npd` | `npm run dev` | Script npm de dev |
| `npt` | `npm test` | Probar script npm |
| `nprw` | `npm run watch` | Script npm watch |
| `npsv` | `npm run serve` | Script npm serve |

### Publicación y análisis

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `npp` | `npm publish` | Publicar paquete npm |
| `npa` | `npm audit` | Auditar paquetes npm |
| `npx` | `npm exec` | Ejecutar paquete npm |
| `npy` | `npm why` | Por qué un paquete npm |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
