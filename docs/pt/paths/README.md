---
description: Como o Dotfiles gerencia sua hierarquia \$PATH para garantir que as ferramentas certas sejam carregadas na ordem certa.
lang: pt-BR
metaTitle: Caminhos (Paths) - Dotfiles (BR)
permalink: /paths/

meta:
  - name: keywords
    content: caminho, ambiente, variáveis, hierarquia, dotfiles, chezmoi
---

# Gerenciamento de Caminhos (Path)

Uma das funções mais críticas do Dotfiles é gerenciar sua variável de ambiente `$PATH`. Isso determina qual versão de uma ferramenta é executada quando você digita um comando.

Aderimos a uma hierarquia estrita para garantir consistência entre macOS e Linux.

## A Hierarquia

Da prioridade mais alta (verificada primeiro) para a mais baixa:

1.  **Binários Locais** (`~/.local/bin`)
    - **Prioridade**: 1
    - **Objetivo**: Scripts de usuário personalizados, CLI `dot` e ferramentas instaladas via `pipx` ou outros gerenciadores de pacotes de nível de usuário.
    - **Motivo**: Permite substituir ferramentas do sistema ou Homebrew por suas próprias versões.

2.  **Binários de Aplicativos** (macOS)
    - **Prioridade**: 2
    - **Objetivo**: Binários de aplicativos instalados (por exemplo, VS Code, iTerm).

3.  **Runtimes de Linguagem**
    - **Node.js**: `~/.node_modules/bin`
    - **Go**: `~/go/bin`
    - **Rust (Cargo)**: `~/.cargo/bin`
    - **Ruby (User Gems)**: `~/.gem/ruby/bin`
    - **Python (Pipx)**: `~/.local/share/pipx`

4.  **Homebrew** (`/opt/homebrew/bin`)
    - **Prioridade**: 3
    - **Objetivo**: Gerenciador de pacotes principal para macOS/Linux.
    - **Nota**: Carregamos o Homebrew propositalmente _antes_ dos caminhos do sistema para permitir a atualização de ferramentas do sistema (como `git` or `curl`).

5.  **Caminhos do Sistema** (`/usr/bin`, `/bin`)
    - **Prioridade**: Mais baixa
    - **Objetivo**: Ferramentas padrão do sistema operacional.
    - **Motivo**: Fallback para utilitários fundamentais.

## Deduplicação

O Dotfiles deduplica automaticamente seu `$PATH` enquanto preserva a ordem de precedência. Isso evita que a variável `$PATH` cresça indefinidamente ao gerar shells aninhados.
