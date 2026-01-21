---
description: Os aliases do Tmux são uma coleção de aliases que permitem interagir com o comando `tmux`. Tmux é uma ferramenta que permite executar múltiplas sessões de terminal em uma única janela.
lang: pt-BR
metaTitle: Aliases do Tmux - Dotfiles (BR)
permalink: /pt/aliases/tmux/
---

# Aliases do Tmux

Este arquivo `tmux.aliases.sh` cria aliases de atalho úteis para muitos
comandos [tmux](https://github.com/tmux/tmux/wiki) comumente usados.

Os aliases do Tmux são uma coleção de aliases que permitem interagir com o
comando `tmux`. Tmux é uma ferramenta que permite executar múltiplas sessões
de terminal em uma única janela.

> [!NOTE]
> **Modern Core**: Na v0.2.471+, introduzimos o [Zellij](/pt/aliases/modern-core/#zellij) como uma alternativa moderna baseada em Rust ao Tmux.
> O Tmux ainda é suportado, mas o Zellij é recomendado para novos usuários.

## Tmux

[Tmux](https://github.com/tmux/tmux/wiki) é um multiplexador de terminal. Ele permite que você
alterne facilmente entre vários programas em um terminal, desconecte-os (eles continuam
rodando em segundo plano) e reconecte-os a um terminal diferente.

| Alias | Comando                  | Descrição                                 |
| ----- | ------------------------ | ----------------------------------------- |
| tm    | `tmux`                   | Iniciar o tmux.                           |
| tma   | `tmux attach-session`    | Anexar a uma sessão tmux.                 |
| tmat  | `tmux attach-session -t` | Anexar a uma sessão tmux com nome.        |
| tmks  | `tmux kill-session -a`   | Matar todas as sessões tmux.              |
| tml   | `tmux list-sessions`     | Listar sessões tmux.                      |
| tmn   | `tmux new-session`       | Iniciar uma nova sessão tmux.             |
| tmns  | `tmux new -s`            | Iniciar uma nova sessão tmux com nome.    |
| tms   | `tmux new-session -s`    | Iniciar uma nova sessão tmux.             |
