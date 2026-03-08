---
title: Sobre | Dotfiles
description: A próxima geração de arquivos de configuração, gerenciada pelo Chezmoi. Alto desempenho, seguro e nativo de IA.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Sobre preview
canonical: /pt/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Sobre
pageType: docs
schemaType: WebPage
metaTitle: Sobre - Dotfiles (BR)
permalink: /pt/about/
meta:
  - name: keywords
    content: chezmoi, dotfiles, configuração, automação, macos, linux, rust, zellij
---

# Sobre Dotfiles v0.2.481

## Introdução

Dotfiles representa o padrão moderno para configuração de ambiente. É construído sobre **Chezmoi**, fornecendo uma maneira segura, confiável e multiplataforma de gerenciar seu shell, aplicativos e segredos.

Ao contrário de dotfiles legados que dependem de Makefiles complexos ou scripts de link simbólico, Dotfiles usa uma abordagem baseada em modelo que é atômica e rápida.

## O que há de novo na v0.2.481

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
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
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

## Comandos principais

A CLI `dot` oferece 53 comandos organizados por categoria.

### Núcleo

- `dot apply` — aplica as alterações de configuração.
- `dot sync` — obtém o estado mais recente do repositório e aplica.
- `dot update` — atualiza o repositório e pré-aquece os caches.
- `dot add` — adiciona novos arquivos na fonte do Chezmoi.
- `dot diff` — mostra as alterações pendentes antes de aplicar.
- `dot status` — exibe o status dos arquivos gerenciados.
- `dot remove` — remove um arquivo do gerenciamento e exclui a entrada fonte.
- `dot cd` — abre um shell no diretório fonte do Chezmoi.
- `dot edit` — abre um arquivo gerenciado no seu editor.
- `dot clean-cache` — limpa os caches transitórios.
- `dot prewarm` — pré-carrega os caches para inicialização mais rápida do shell.

### Diagnósticos

- `dot doctor` — valida caminhos, ferramentas e estado do shell.
- `dot heal` — repara automaticamente o estado ausente ou corrompido.
- `dot health` — executa uma sonda de saúde leve.
- `dot verify` — verifica a integridade dos arquivos contra a fonte.
- `dot scorecard` — exibe uma pontuação de qualidade da configuração.
- `dot snapshot` — captura o estado atual para comparação posterior.
- `dot smoke-test` — valida as cadeias de ferramentas principais de ponta a ponta.
- `dot chaos` — injeta falhas para testar a auto-reparação.
- `dot bundle` — exporta um pacote de configuração portátil.
- `dot rollback` — reverte para um snapshot anterior.
- `dot drift` — detecta alterações não autorizadas em arquivos gerenciados.
- `dot history` — mostra o registro de histórico de apply/sync.
- `dot benchmark` — mede o tempo de inicialização do shell.
- `dot perf` — analisa a inicialização lenta do shell.

### Aparência

- `dot theme` — altera o esquema de cores do terminal.
- `dot wallpaper` — define o papel de parede da área de trabalho (macOS).
- `dot fonts` — instala ou atualiza Nerd Fonts.
- `dot tune` — ajusta a densidade da interface e o estilo do prompt.

### Segurança

- `dot backup` — cria backups criptografados da configuração.
- `dot encrypt-check` — verifica a criptografia de segredos em repouso.
- `dot firewall` — configura as regras do firewall do host.
- `dot telemetry` — controla a telemetria de uso anônimo.
- `dot dns-doh` — habilita DNS-over-HTTPS.
- `dot lock-screen` — bloqueia a tela imediatamente.
- `dot usb-safety` — restringe a montagem automática de armazenamento USB.

### Segredos

- `dot secrets-init` — inicializa o backend de segredos (age / GPG).
- `dot secrets` — lista as entradas de segredos criptografados.
- `dot secrets-create` — cria um novo segredo criptografado.
- `dot ssh-key` — gera ou rotaciona pares de chaves SSH.
- `dot ssh-cert` — solicita um certificado SSH de uma CA.

### IA

- `dot ai` — abre uma sessão interativa de assistente IA.
- `dot ai-setup` — configura chaves de API para provedores de IA.
- `dot ai-query` — envia um prompt único para um modelo de IA.
- Wrappers de ferramentas IA: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Ferramentas

- `dot tools` — lista as ferramentas CLI incluídas e seu status.
- `dot new` — cria um novo arquivo de alias ou função.
- `dot sandbox` — abre um shell sandbox descartável.
- `dot keys` — mostra as combinações de teclas atuais.
- `dot learn` — inicia o tutorial interativo.

### Meta

- `dot upgrade` — atualiza o Dotfiles para a versão mais recente.
- `dot packages` — lista os pacotes instalados gerenciados pelo Dotfiles.
- `dot version` / `dot help` — exibe informações de versão ou uso.

## Contribuindo

Agradecemos contribuições! Por favor, revise nosso [Código de Conduta][code-of-conduct-url] e [Diretrizes de Contribuição][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
