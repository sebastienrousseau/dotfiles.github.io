---
title: "Alias Pnpm: atajos para gestión rápida de paquetes"
description: "Optimiza flujos pnpm con alias para instalar, compilar, probar y gestionar dependencias Node.js."
lang: es-ES
metaTitle: "Pnpm Aliases | Dotfiles"
permalink: /aliases/pnpm/
sidebar: true
meta:
  - name: keywords
    content: "alias pnpm, gestor de paquetes, node.js, alternativa a npm, dotfiles, shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Pnpm Aliases | Dotfiles"
  - name: twitter:description
    content: "Optimiza flujos pnpm con alias para instalar, compilar, probar y gestionar dependencias Node.js."
  - name: og:title
    content: "Pnpm Aliases | Dotfiles"
  - name: og:description
    content: "Optimiza flujos pnpm con alias para instalar, compilar, probar y gestionar dependencias Node.js."
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Pnpm

Atajos para el gestor de paquetes rápido y eficiente en disco.

![Dotfiles banner][banner]

## Descubrir

Estos alias se definen en `pnpm.aliases.sh` y se cargan automáticamente por chezmoi. Proporcionan acceso rápido a comandos [pnpm](https://pnpm.io/) comunes para la gestión de paquetes Node.js.

## Referencia

### Inicialización del proyecto

| Alias | Descripción |
|-------|-------------|
| `pni` | Inicializar un nuevo proyecto |
| `pnc` | Crear un nuevo proyecto |
| `pnin` | Instalar dependencias del proyecto |
| `pnun` | Desinstalar dependencias del proyecto |

### Desarrollo

| Alias | Descripción |
|-------|-------------|
| `pnb` | Compilar el proyecto |
| `pnrun` | Ejecutar un script del proyecto |
| `pnd` | Ejecutar el proyecto en modo dev |
| `pns` | Ejecutar el proyecto en modo serve |
| `pnst` | Iniciar el proyecto |
| `pnsv` | Ejecutar el proyecto en modo server |

### Pruebas y calidad

| Alias | Descripción |
|-------|-------------|
| `pnt` | Probar el proyecto |
| `pntc` | Probar con cobertura |
| `pnln` | Lint del proyecto |
| `pndoc` | Generar documentación del proyecto |

### Gestión de dependencias

| Alias | Descripción |
|-------|-------------|
| `pnls` | Listar todas las dependencias |
| `pnout` | Comprobar dependencias desactualizadas |
| `pnwhy` | Ver por qué una dependencia está instalada |
| `pnad` | Añadir dependencia dev |
| `pnap` | Añadir dependencia peer |
| `pnrm` | Eliminar dependencia |
| `pnup` | Actualizar dependencia |
| `pnui` | Actualizar dependencia de forma interactiva |
| `pnuil` | Actualizar dependencia interactiva a latest |

### Paquetes globales

| Alias | Descripción |
|-------|-------------|
| `pnga` | Añadir dependencia global |
| `pngls` | Listar dependencias globales |
| `pngrm` | Eliminar dependencia global |
| `pngu` | Actualizar dependencia global |

### Publicación y utilidades

| Alias | Descripción |
|-------|-------------|
| `pnpub` | Publicar el proyecto |
| `pnx` | Atajo a pnpx |
| `pnh` | Mostrar ayuda |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
