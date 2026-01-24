---
description: Modern Core e uma suite de ferramentas Rust para substituir utilitarios Unix legados.
lang: pt-PT
metaTitle: Modern Core - Dotfiles (PT)
permalink: /pt/aliases/modern-core/

meta:
  - name: keywords
    content: modern core, atuin, yazi, zellij, ghostty, rust, shell, tools
---

# Modern Core Tools

Em **v0.2.471**, introduzimos o "Modern Core" — uma suite de ferramentas Rust
para substituir utilitarios Unix legados.

## Tools Overview

| Tool        | Replaces        | Description                                             | Keybinding      |
| :---------- | :-------------- | :------------------------------------------------------ | :-------------- |
| **Atuin**   | `history`       | Historico criptografado e sincronizado com busca fuzzy. | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | Gerenciador de arquivos rapido com previews.            | `yy` (alias)    |
| **Zellij**  | `tmux`          | Multiplexador moderno com layouts intuitivos.           | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | Emulador de terminal acelerado por GPU.                 | N/A             |

## Atuin (Magical History)

Atuin substitui o historico por um banco SQLite.

- **Search**: `Ctrl+R` ou `Up Arrow`.
- **Filter**: linguagem natural ou codigos de saida.
- **Sync**: historico criptografado sincronizado.

## Yazi (File Manager)

Yazi e um file manager em Rust, baseado em async I/O.

- **Launch**: `yy` no terminal.
- **Features**:
  - Inicializacao instantanea.
  - Previews Sixel/Kitty.
  - Plugins em Lua.

## Zellij (Multiplexer)

Zellij e um workspace de terminal com recursos completos.

- **Launch**: `zellij` (ou alias configurado).
- **Features**:
  - Layouts (salvar/restaurar).
  - Panes flutuantes.
  - Keybindings amigaveis (onscreen).

## Ghostty (Terminal)

Ghostty e o emulador de terminal padrao do Modern Core.

- **Features**:
  - Performance nativa (GPU).
  - Ligaturas e suporte a fontes modernas.
  - Renderizacao sem flicker.
