---
description: Los alias Tmux son una coleccion de alias que permiten interactuar con el comando `tmux`. Tmux es una herramienta que permite ejecutar multiples sesiones de terminal en una sola ventana.
lang: es-ES
metaTitle: Alias de Tmux - Dotfiles (ES)
permalink: /es/aliases/tmux/

meta:
  - name: keywords
    content: aliases, tmux, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Los alias Tmux son una coleccion de alias que permiten interactuar con el comando `tmux`. Tmux es una herramienta que permite ejecutar multiples sesiones de terminal en una sola ventana.
  - name: twitter:description
    content: Los alias Tmux son una coleccion de alias que permiten interactuar con el comando `tmux`. Tmux es una herramienta que permite ejecutar multiples sesiones de terminal en una sola ventana.
  - name: twitter:title
    content: Alias de Tmux - Dotfiles (ES)
  - name: og:title
    content: Alias de Tmux - Dotfiles (ES)
  - name: og:description
    content: Los alias Tmux son una coleccion de alias que permiten interactuar con el comando `tmux`. Tmux es una herramienta que permite ejecutar multiples sesiones de terminal en una sola ventana.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Tmux

Gestionar los alias de Tmux. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `tmux.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

## 🆃🅼🆄🆇 🅲🅾🅽🅵🅸🅶🆄🆁🅰🆃🅸🅾🅽
Una configuracion tmux completa, disenada para la productividad y la facilidad de uso. La configuracion esta organizada en archivos modulares para una mejor mantenibilidad:
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
- Menu de ayuda desplazable (presione `Ctrl+a ?` para acceder)
- Soporte de raton para una navegacion sencilla
### Navegacion y atajos de teclado
Presione `Ctrl+a ?` para ver todos los atajos disponibles. Las principales funciones incluyen:
- **Gestion de ventanas**: Dividir, crear, navegar y renombrar ventanas facilmente
- **Navegacion de paneles**: Moverse entre paneles con las teclas h/j/k/l de Vim
- **Gestion de sesiones**: Crear, renombrar y cambiar entre sesiones
- **Modo de copia**: Seleccion estilo Vim, busqueda e integracion del portapapeles

Alias practicos para operaciones tmux:
| Alias | Descripcion |
|-------|-------------|
| `tm`  | Iniciar tmux |
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
## Instalacion
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git ~/.dotfiles
   ```
2. Ejecutar el script de instalacion:
   ```bash
   cd ~/.dotfiles && ./install.sh
   ```
3. Instalar el gestor de plugins de tmux (si aun no esta instalado):
   ```bash
   git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
   ```
4. Abrir tmux y presionar `Ctrl+a I` para instalar los plugins
## Uso
Inicia una nueva sesion tmux con:
```bash
tmux
```
O utiliza cualquiera de los alias proporcionados para operaciones comunes.
## Licencia
MIT

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
