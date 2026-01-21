---
description: Alias modernos para Dotfiles
lang: es-ES
metaTitle: Alias Modernos - Dotfiles (ES)
permalink: /es/aliases/modern/
---

# Alias de Herramientas Modernas

Gestiona alias de Herramientas Modernas. Parte de la configuración de **Universal Dotfiles**.

![Banner de Dotfiles][banner]

## 📖 Descripción

Estos alias están definidos en `modern.aliases.sh` y son cargados automáticamente por `chezmoi`.
Proporcionan reemplazos modernos para herramientas Unix heredadas (basadas en Rust).

## ⚡ Alias

### Listado de Archivos (eza)

Si `eza` está instalado (reemplazando a `ls`):

- `ls` - Listar archivos (`eza --icons`)
- `ll` - Listado largo (`eza -alF`)
- `la` - Listar todo (`eza -a`)
- `lt` - Listar árbol (`eza --tree`)

_(Recurre al `ls` estándar si `eza` no está disponible)_

### Contenido de Archivos (bat)

Si `bat` está instalado (reemplazando a `cat`):

- `cat` - Mostrar contenido del archivo con resaltado de sintaxis

### Búsqueda (rg)

Si `rg` está instalado (reemplazando a `grep`):

- `grep` - Buscar con Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
