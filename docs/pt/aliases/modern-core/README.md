---
description: O Modern Core é um conjunto de ferramentas baseadas em Rust que substituem utilitários Unix legados por alternativas mais rápidas e inteligentes.
lang: pt-BR
metaTitle: Modern Core - Dotfiles (BR)
permalink: /pt/aliases/modern-core/
---

# Ferramentas Modern Core

Na **v0.2.471**, introduzimos o "Modern Core" — um conjunto de ferramentas de alto desempenho, baseadas em Rust, projetadas para substituir utilitários Unix legados.

## Visão Geral das Ferramentas

| Ferramenta  | Substitui       | Descrição                                               | Atalho          |
| :---------- | :-------------- | :------------------------------------------------------ | :-------------- |
| **Atuin**   | `history`       | Histórico de shell criptografado e sincronizável com pesquisa difusa. | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | Gerenciador de arquivos de terminal extremamente rápido com visualização de imagens. | `yy` (alias)    |
| **Zellij**  | `tmux`          | Multiplexador de terminal moderno com layouts intuitivos. | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | Emulador de terminal acelerado por GPU e multiplataforma. | N/A             |

## Atuin (Histórico Mágico)

O Atuin substitui seu histórico de shell existente por um banco de dados SQLite.

- **Pesquisa**: Pressione `Ctrl+R` ou `Seta para Cima` para abrir a interface de pesquisa.
- **Filtro**: Digite consultas em linguagem natural ou códigos de saída específicos.
- **Sincronização**: Seu histórico é criptografado e sincronizado em seus dispositivos.

## Yazi (Gerenciador de Arquivos)

Yazi é um gerenciador de arquivos de terminal escrito em Rust, baseado em I/O assíncrono.

- **Iniciar**: Digite `yy` no seu terminal.
- **Recursos**:
  - Inicialização instantânea.
  - Suporte a visualização de imagens Sixel/Kitty.
  - Sistema de plugins Lua.

## Zellij (Multiplexador)

Zellij é um espaço de trabalho de terminal com baterias incluídas.

- **Iniciar**: Digite `zellij` (ou use seu alias configurado).
- **Recursos**:
  - Motor de layout (salvar/restaurar layouts de espaço de trabalho).
  - Painéis flutuantes.
  - Atalhos de teclado amigáveis (mostrados na tela).

## Ghostty (Terminal)

Ghostty é o emulador de terminal padrão para o Modern Core.

- **Recursos**:
  - Desempenho nativo (acelerado por GPU).
  - Ligaduras e suporte a fontes modernas.
  - Renderização sem cintilação.
