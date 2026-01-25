---
description: Alias de Tmux para gestion de sesiones de terminal. Atajos para crear, adjuntar, listar y gestionar sesiones, ventanas y paneles.
lang: es-ES
metaTitle: Alias de Tmux - Dotfiles (ES)
permalink: /es/aliases/tmux/
sidebar: true

meta:
  - name: keywords
    content: alias tmux, multiplexor terminal, sesiones, ventanas, paneles, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de Tmux para gestion de sesiones de terminal. Atajos para crear, adjuntar, listar y gestionar sesiones.
  - name: twitter:title
    content: Alias de Tmux - Dotfiles
  - name: og:title
    content: Alias de Tmux - Dotfiles
  - name: og:description
    content: Alias de Tmux para gestion de sesiones de terminal. Atajos para crear, adjuntar, listar y gestionar sesiones.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Tmux

Atajos para el multiplexor de terminal tmux.

## Descripcion

Estos alias estan definidos en `tmux.aliases.sh` y se cargan automaticamente por chezmoi. Proporcionan atajos practicos para operaciones comunes de tmux.

## Referencia

| Alias | Descripcion |
|:---|:---|
| `tm` | Iniciar tmux |
| `tma` | Adjuntar la ultima sesion |
| `tmat` | Adjuntar a una sesion especifica |
| `tmks` | Matar todas las sesiones excepto la actual |
| `tmka` | Matar todas las sesiones (servidor) |
| `tml` | Listar todas las sesiones |
| `tmn` | Nueva sesion sin nombre |
| `tms` | Nueva sesion con nombre |
| `tmr` | Recargar la configuracion de tmux |
| `tmls` | Listar ventanas |
| `tmlp` | Listar paneles |
| `tmi` | Mostrar informacion de tmux |

## Caracteristicas de la configuracion

La configuracion de tmux incluye:

- **default**: Configuracion base y de plugins
- **display**: Configuracion visual y de comportamiento
- **linux**: Funcionalidad especifica de plataforma
- **navigation**: Atajos de teclado completos
- **panes**: Configuracion especifica de paneles
- **theme**: Barra de estado y estilo visual

### Caracteristicas clave

- Esquema de colores moderno con barra de estado adaptada al sistema operativo
- Atajos de teclado intuitivos con Ctrl+a como tecla de prefijo
- Control completo de ventanas y paneles
- Persistencia de sesiones con tmux-resurrect y tmux-continuum
- Menu de ayuda desplazable (presiona `Ctrl+a ?` para acceder)
- Soporte de raton para una navegacion sencilla
