---
description: A próxima geração de arquivos de configuração, gerenciada pelo Chezmoi. Alto desempenho, seguro e nativo de IA.
lang: pt-BR
metaTitle: Sobre - Dotfiles (BR)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuração, automação, macos, linux, rust, zellij
---

# Sobre Dotfiles v0.2.474

## Introdução

Dotfiles representa o padrão moderno para configuração de ambiente. É construído sobre **Chezmoi**, fornecendo uma maneira segura, confiável e multiplataforma de gerenciar seu shell, aplicativos e segredos.

Ao contrário de dotfiles legados que dependem de Makefiles complexos ou scripts de link simbólico, Dotfiles usa uma abordagem baseada em modelo que é atômica e rápida.

## O que há de novo na v0.2.474

- **Núcleo Moderno**: Substituímos ferramentas Unix legadas por alternativas Rust de alto desempenho:
  - **Atuin** (substitui `history`)
  - **Yazi** (substitui `ls`/`ranger`)
  - **Zellij** (substitui `tmux`)
  - **Ghostty** (Terminal moderno acelerado por GPU)
  - **NeoVim** (Editor moderno baseado em Vim)
- **Segurança Nativa**: Assinatura SSH totalmente nativa (Keyless/Proprietary-free) sem agentes de terceiros.
- **Modo Interativo**: Novo comando `dot learn` para guiá-lo pelos recursos.

## Começando

### :one: Pré-requisitos

- **macOS**, **Linux (Ubuntu/Debian)** ou **Windows (WSL)**
- **Curl** (para baixar o instalador)
- **Git**
- **Chezmoi** (instalado pelo script se estiver ausente)
- **Nerd Font** (para ícones no terminal)

### :two: Instalação (Uma Linha)

Todo o pacote é instalado por meio de um único comando usando Chezmoi:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

Este comando irá:

1.  Instalar o binário `chezmoi`.
2.  Clonar o repositório.
3.  **Instalar automaticamente** os pacotes necessários (via Homebrew no macOS ou Apt no Linux).
4.  Aplicar a configuração.

### :three: Pós-instalação

Uma vez instalado, reinicie seu terminal e então digite:

```bash
dot learn
```

Isso iniciará o tour interativo para ajudá-lo a se familiarizar com seu novo ambiente.

## O que está incluído

Sua configuração é gerenciada em `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Ponto de entrada do shell (bootloader XDG)
├── dot_config/             # Configuração base XDG (mapeada para ~/.config)
│   ├── atuin/              # Histórico do shell (config.toml)
│   ├── ghostty/            # Emulador de terminal (config)
│   ├── git/                # Configuração do Git (config)
│   ├── yazi/               # Gerenciador de arquivos (yazi.toml)
│   ├── zellij/             # Multiplexador (config.kdl)
│   ├── zsh/                # Configuração do Zsh (.zshrc)
│   └── shell/              # Configuração compartilhada do shell (aliases, caminhos)
├── provision/              # Scripts de ciclo de vida (pacotes, fontes)
├── install.sh              # Instalador universal
├── README.md               # Documentação
└── docs/                   # Documentação detalhada
```

## Contribuindo

Agradecemos contribuições! Por favor, revise nosso [Código de Conduta][code-of-conduct-url] e [Diretrizes de Contribuição][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
