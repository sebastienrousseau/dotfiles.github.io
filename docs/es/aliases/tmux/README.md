---
description: Los alias de Tmux son una colección de alias que te permiten interactuar con el comando `tmux`. Tmux permite ejecutar múltiples sesiones de terminal en una sola ventana.
lang: es-ES
metaTitle: Alias de Tmux - Dotfiles (ES)
permalink: /es/aliases/tmux/
---

# Alias de Tmux

El archivo `tmux.aliases.sh` crea atajos útiles para muchos comandos de [tmux](https://github.com/tmux/tmux/wiki) utilizados comúnmente.

Los alias de Tmux son una colección de alias que te permiten interactuar con el comando `tmux`. Tmux es una herramienta que te permite ejecutar múltiples sesiones de terminal en una sola ventana.

> [!NOTE]
> **Núcleo Moderno**: En v0.2.471+, introdujimos [Zellij](/es/aliases/modern-core/#zellij) como una alternativa moderna basada en Rust para Tmux.
> Tmux todavía es compatible, pero se recomienda Zellij para nuevos usuarios.

## Tmux

[Tmux](https://github.com/tmux/tmux/wiki) es un multiplexor de terminal. Te permite cambiar fácilmente entre varios programas en un terminal, separarlos (manteniéndolos en ejecución en segundo plano) y volver a adjuntarlos a un terminal diferente.

| Alias | Comando                  | Descripción                         |
| ----- | ------------------------ | ----------------------------------- |
| tm    | `tmux`                   | Iniciar tmux.                         |
| tma   | `tmux attach-session`    | Adjuntar a una sesión de tmux.           |
| tmat  | `tmux attach-session -t` | Adjuntar a una sesión de tmux con nombre. |
| tmks  | `tmux kill-session -a`   | Eliminar todas las sesiones de tmux.             |
| tml   | `tmux list-sessions`     | Listar sesiones de tmux.                 |
| tmn   | `tmux new-session`       | Iniciar una nueva sesión de tmux.           |
| tmns  | `tmux new -s`            | Iniciar una nueva sesión de tmux con nombre. |
| tms   | `tmux new-session -s`    | Iniciar una nueva sesión de tmux.           |
