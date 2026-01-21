---
description: Los alias de actualización crean atajos útiles para actualizar el sistema operativo y el software instalado. Ayudan a asegurar y mejorar la instalación actual de Dotfiles para proteger contra vulnerabilidades de seguridad, agregar nuevas funciones y corregir errores críticos.
lang: es-ES
metaTitle: Alias de Actualización - Dotfiles (ES)
permalink: /es/aliases/update/
---

# Alias de Actualización

El archivo `update.aliases.sh` crea atajos útiles para actualizar el sistema operativo y el software.

Las actualizaciones ayudan a asegurar y mejorar la instalación actual de Dotfiles para proteger contra vulnerabilidades de seguridad, agregar nuevas funciones y corregir errores críticos.

## Actualizar

Para un mayor control, el proceso de actualización se combina en un solo comando que:

1. Actualizará los paquetes del sistema operativo y el software.
2. Actualizará a la última versión de Dotfiles.
3. Esto también actualizará el archivo `update.aliases.sh`, por lo que siempre tendrás la última versión del actualizador.

## Plataformas

### Linux

El alias `upd` se ha adaptado para funcionar en Linux. Actualizará las distribuciones de Linux basadas en Debian, a través del gestor de paquetes `apt` y otras dependencias mediante pnpm, rustup (Rust) y gem (Ruby).

| Alias | Comando                                                                                                            | Descripción                                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| upd   | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | Comando de actualización para sistemas operativos Linux basados en Debian. |

### macOS

El alias `upd` también está disponible para macOS. Actualizará macOS, a través de la herramienta de línea de comandos `softwareupdate`, y gestionará sus dependencias utilizando los gestores de paquetes pnpm, Homebrew, mas, rustup y gem.

| Alias | Comando                                                                                                                                                                                            | Descripción            |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| upd   | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | Actualizar el sistema. |
