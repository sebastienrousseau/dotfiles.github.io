---
description: Los alias de editor abriran el archivo en el editor configurado en la variable de entorno `editor`.
lang: es-ES
metaTitle: Alias de editor - Dotfiles (ES)
permalink: /es/aliases/editor/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Los alias de editor abriran el archivo en el editor configurado en la variable de entorno `editor`.
  - name: twitter:description
    content: Los alias de editor abriran el archivo en el editor configurado en la variable de entorno `editor`.
  - name: twitter:title
    content: Alias de editor - Dotfiles (ES)
  - name: og:title
    content: Alias de editor - Dotfiles (ES)
  - name: og:description
    content: Los alias de editor abriran el archivo en el editor configurado en la variable de entorno `editor`.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de editor

Gestionar los alias de editor. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `editor.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto completo de alias para editar archivos con el editor configurado en tu entorno. Funciona junto con el script de configuracion del editor (`editor.sh`), que selecciona automaticamente el mejor editor disponible en tu sistema.
### Editores compatibles
Se admiten los siguientes editores con alias especializados:
- **Neovim** - Version moderna y mejorada de Vim
- **Visual Studio Code** - Editor de codigo con extensiones
- **Vim** - Editor de texto altamente configurable
- **Nano** - Editor de terminal simple y facil de usar
- **Emacs** - Editor de texto extensible y personalizable
- **Sublime Text** - Editor sofisticado para codigo
- **Atom** - Editor hackeable para el siglo XXI
Estos alias universales funcionan con cualquier editor configurado por `editor.sh`:
- `e` - Edicion rapida
- `edit` - Comando de edicion estandar
- `editor` - Comando de editor completo
- `mate` - Comando estilo TextMate
- `n` - Alias corto de edicion
- `v` - Alias de edicion estilo Vim
Segun el editor seleccionado por `editor.sh`, estan disponibles automaticamente alias adicionales:
- `vi`, `vim` - Redirigido a Neovim cuando es el editor principal
- `nvimrc` - Editar el archivo de configuracion Vimscript de Neovim
- `nvimlua` - Editar el archivo de configuracion Lua de Neovim
- `nvimconf` - Abrir el directorio de configuracion de Neovim
- `vsc` - Atajo para VS Code
- `vsca` - Anadir carpeta a la ventana actual
- `vscd` - Comparar dos archivos
- `vscn` - Abrir una ventana nueva
- `vscr` - Reutilizar la ventana al abrir archivos
- `vscu` - Abrir con directorio de datos de usuario personalizado
- `vsced` - Abrir con directorio de extensiones personalizado
- `vscex` - Instalar extension de VS Code
- `vsclist` - Listar extensiones instaladas
- `vi` - Redirigido a Vim cuando es el editor principal
- `vimrc` - Editar el archivo de configuracion de Vim
- `vimconf` - Abrir el directorio de configuracion de Vim
- `nanorc` - Editar el archivo de configuracion de Nano
- `ne` - Nano mejorado con numeros de linea y desplazamiento suave
- `em` - Atajo para Emacs
- `emacs-nw` - Ejecutar Emacs en modo terminal
- `emacsc` - Lanzar el cliente de Emacs
- `emacsrc` - Editar el archivo de configuracion de Emacs
- `et` - Emacs rapido en terminal
- `st` - Lanzar Sublime Text
- `stt` - Abrir el directorio actual en Sublime Text
- `stn` - Abrir en una nueva ventana de Sublime Text
- `a` - Lanzar Atom
- `at` - Abrir el directorio actual en Atom
- `an` - Abrir en una nueva ventana de Atom
### Edicion rapida de configuraciones
El script proporciona la funcion `editrc` para editar rapidamente archivos de configuracion comunes:
```bash
editrc bash     # Editar ~/.bashrc
editrc zsh      # Editar ~/.zshrc
editrc vim      # Editar ~/.vimrc
editrc nvim     # Editar el archivo init de Neovim
editrc tmux     # Editar ~/.tmux.conf
editrc git      # Editar ~/.gitconfig
editrc ssh      # Editar ~/.ssh/config
editrc alias    # Editar ~/.dotfiles/aliases
editrc dotfiles # Editar ~/.dotfiles
```
### Integracion con editor.sh
Estos alias funcionan en armonia con el script `editor.sh`, que:
1. Detecta automaticamente los editores disponibles en tu sistema
2. Configura las variables de entorno apropiadas (`EDITOR`, `VISUAL`, `GIT_EDITOR`, etc.)
3. Configura ajustes especificos del editor
4. Proporciona alternativas inteligentes
Los alias de este archivo estan disenados para ofrecer atajos convenientes segun el editor seleccionado por el proceso de deteccion.
### Ejemplos de uso
```bash
# Edicion rapida de un archivo con el editor por defecto
e myfile.txt
# Editar archivos de configuracion directamente
nvimrc    # Cuando se usa Neovim (vimscript)
nvimlua   # Cuando se usa Neovim (lua)
vimrc     # Cuando se usa Vim
nanorc    # Cuando se usa Nano
# Usar VS Code para abrir una carpeta en una nueva ventana
vscn ~/projects/my-project
# Usar nano mejorado con numeros de linea
ne config.txt
# Editar archivos de configuracion especificos
editrc git    # Editar configuracion de git
editrc bash   # Editar configuracion de bash
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
