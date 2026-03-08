---
title: "Alias Fonts: gestionar fuentes del sistema"
description: Alias shell para gestionar fuentes y cachés. Actualiza la caché y lista familias instaladas.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Alias Fonts: gestionar fuentes del sistema preview"
canonical: /es/aliases/fonts/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Alias Fonts: gestionar fuentes del sistema"
pageType: docs
schemaType: WebPage
metaTitle: Alias Fonts | Dotfiles
permalink: /es/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: alias fuentes, caché de fuentes, fc-cache, listar fuentes, dotfiles, shell
---

# Alias Fonts

Alias de shell para gestionar fuentes del sistema y sus cachés.

## Descubrir

Los alias fonts ofrecen atajos para tareas comunes de gestión de fuentes. Estas órdenes simplifican la actualización de la caché tras instalar nuevas fuentes y la lista de familias disponibles.

## Referencia

### Comandos

| Alias | Comando | Descripción |
|-------|---------|-------------|
| `update-fonts` | `fc-cache -fv` | Actualiza la caché de fuentes del sistema |
| `list-fonts` | — | Lista todas las familias de fuentes instaladas |

### Fuentes instaladas

Las siguientes fuentes se configuran por defecto:

| Fuente | Uso |
|------|---------|
| JetBrainsMono Nerd Font | Fuente principal del terminal |
| Symbols Nerd Font | Fuente de respaldo para iconos |
