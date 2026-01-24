---
description: alias de Heroku para Dotfiles
lang: es-ES
metaTitle: alias de Heroku - Dotfiles
permalink: /es/aliases/heroku/
---
# Alias de Heroku

Gestionar alias de Heroku. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `heroku.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Estos alias ayudan a administrar aplicaciones Heroku y sus recursos asociados.
- `hk` atajo general de Heroku.
- `hkb` abrir un navegador en la app actual.
- `hkba` mostrar addons de la app.
- `hkconf` mostrar configuracion de la app.
- `hkcs` escalar dynos de la app.
- `hkinfo` mostrar informacion de la app.
- `hkl` mostrar logs recientes.
- `hklf` seguir logs en tiempo real.
- `hklt` mostrar logs con tail.
- `hkop` abrir el panel de Heroku.
- `hkps` listar procesos.
- `hkpsa` listar apps.
- `hkpsoff` detener todos los dynos.
- `hkpso` activar dynos.
- `hkrestart` reiniciar la app.
- `hkstack` mostrar stack de la app.
- `hkstackset` establecer stack.
- `hkt` ejecutar tests.
- `hktl` listar pipelines.
- `hktla` listar apps en un pipeline.
- `hktop` mostrar uso de procesos.
- `hkreleases` listar releases.
- `hkrl` promover release actual.
- `hkrb` revertir al release anterior.
- `hkrf` forzar release (rollback si falla).
- `hkrfi` forzar release (rollback, interactivo).

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
