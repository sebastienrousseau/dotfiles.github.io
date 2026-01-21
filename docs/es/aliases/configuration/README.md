---
description: Los alias de Configuración son alias para abrir los archivos de configuración para la terminal y el shell.
lang: es-ES
metaTitle: Alias de Configuración - Dotfiles (ES)
permalink: /es/aliases/configuration/
meta:
  - name: keywords
    content: alias, configuración, dotfiles, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias de Configuración son alias para abrir los archivos de configuración para la terminal y el shell.
  - name: twitter:description
    content: Los alias de Configuración son alias para abrir los archivos de configuración para la terminal y el shell.
  - name: twitter:title
    content: Alias de Configuración - Dotfiles (ES)
  - name: og:title
    content: Alias de Configuración - Dotfiles (ES)
  - name: og:description
    content: Los alias de Configuración son alias para abrir los archivos de configuración para la terminal y el shell.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Configuración

El archivo `configuration.aliases.sh` crea atajos útiles para abrir los archivos de configuración para la terminal y el shell.

> [!TIP]
> **Nuevo en v0.2.471**: Ahora puedes usar el comando `dot` para gestionar tu configuración.
> Prueba `dot learn` para un recorrido interactivo o `dot doctor` para verificar tu configuración.

## Configuración

| Alias | Comando                          | Descripción                                                  |
| ----- | -------------------------------- | ------------------------------------------------------------ |
| bshp  | `${=EDITOR} $HOME/.bash_profile` | Abrir el perfil de Bash en el editor de texto predeterminado.            |
| bshrc | `${=EDITOR} $HOME/.bashrc`       | Abrir el archivo de configuración de Bash en el editor de texto predeterminado. |
| gcfg  | `${=EDITOR} $HOME/.gitconfig`    | Abrir el archivo de configuración de Git en el editor de texto predeterminado.  |
| gign  | `${=EDITOR} $HOME/.gitignore`    | Abrir el archivo gitignore en el editor de texto predeterminado.         |
| zshrc | `${=EDITOR} $HOME/.zshrc`        | Abrir el archivo de configuración de Zsh en el editor de texto predeterminado.  |
