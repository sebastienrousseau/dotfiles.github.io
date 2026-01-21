---
description: A próxima geração de arquivos de configuração, gerenciada pelo Chezmoi. Alto desempenho, seguro e nativo de IA.
lang: pt-BR
metaTitle: Sobre - Dotfiles (BR)
permalink: /pt/about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuração, automação, macos, linux, rust, zellij
---

# Sobre Dotfiles v0.2.471

## Introdução

Dotfiles representa o padrão moderno para configuração de ambiente. É construído sobre **Chezmoi**, fornecendo uma maneira segura, confiável e multiplataforma de gerenciar seu shell, aplicativos e segredos.

Ao contrário de dotfiles legados que dependem de Makefiles complexos ou scripts de link simbólico, Dotfiles usa uma abordagem baseada em modelo que é atômica e rápida.

## O que há de novo na v0.2.471

- **Núcleo Moderno**: Substituímos ferramentas Unix legadas por alternativas Rust de alto desempenho:
  - **Atuin** (substitui `history`)
  - **Yazi** (substitui `ls`/`ranger`)
  - **Zellij** (substitui `tmux`)
  - **Ghostty** (Terminal moderno acelerado por GPU)
- **Segurança Nativa**: Assinatura SSH totalmente nativa (Keyless/Proprietary-free) sem agentes de terceiros.
- **Modo Interativo**: Novo comando `dot learn` para guiá-lo pelos recursos.

## Começando

### :one: Pré-requisitos

- **macOS** ou **Linux** (Debian/Ubuntu/Fedora/Arch)
- **Curl** (para baixar o instalador)
- **Git** (gerenciado automaticamente)

### :two: Instalação (Uma Linha)

Todo o pacote é instalado por meio de um único comando usando Chezmoi:

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply sebastienrousseau
```

Este comando irá:

1.  Instalar o binário `chezmoi`.
2.  Clonar o repositório para `~/.local/share/chezmoi`.
3.  Calcular a diferença entre seu estado atual e o estado desejado.
4.  Aplicar a configuração (instalando pacotes, fontes e ferramentas).

### :three: Pós-instalação

Uma vez instalado, basta digitar:

```bash
dot learn
```

Isso iniciará o tour interativo para ajudá-lo a se familiarizar com seu novo ambiente.

## O que está incluído

Sua configuração é gerenciada em `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_config/          # ~/.config (Ghostty, Zellij, Starship, etc.)
├── dot_local/           # ~/.local (Scripts personalizados, bin)
├── dot_ssh/             # Segurança SSH
├── dot_zshrc.tmpl       # Configuração Zsh
├── provision/           # Scripts de instalação (Darwin/Linux)
└── docs/                # Documentação
```

## Contribuindo

Agradecemos contribuições! Por favor, revise nosso [Código de Conduta][code-of-conduct-url] e [Diretrizes de Contribuição][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
