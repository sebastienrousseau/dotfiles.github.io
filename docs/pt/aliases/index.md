---
title: Aliases | Dotfiles
description: Aliases de shell que criam atalhos para comandos usados frequentemente. Aumente a produtividade reduzindo a digitacao no seu fluxo de trabalho diario.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliases preview
canonical: /pt/aliases/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliases
pageType: docs
schemaType: WebPage
metaTitle: Aliases - Dotfiles (PT)
permalink: /pt/aliases/
meta:
  - name: keywords
    content: aliases, shell, bash, zsh, atalhos, comandos, dotfiles, chezmoi, produtividade, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell que criam atalhos para comandos usados frequentemente. Aumente a produtividade reduzindo a digitacao no seu fluxo de trabalho diario.
  - name: twitter:title
    content: Aliases - Dotfiles
  - name: og:title
    content: Aliases - Dotfiles
  - name: og:description
    content: Aliases de shell que criam atalhos para comandos usados frequentemente. Aumente a produtividade reduzindo a digitacao no seu fluxo de trabalho diario.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases

Aliases de shell modulares gerenciados pelo **Chezmoi**. Digite menos, faca mais.

## Descubra

Os aliases são organizados em arquivos pequenos e focados - um para cada ferramenta ou fluxo de trabalho. Durante o `chezmoi apply`, todos os arquivos de aliases são agregados em `~/.config/shell/aliases.sh` e carregados pelo seu shell.

## Comece agora

### Adicionar um alias

1. Crie um novo arquivo (ex.: `mytool/mytool.aliases.sh`)
2. Defina seus aliases:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Aplique as alterações:
   ```bash
   chezmoi apply
   ```

## Referência

Navegue pelos aliases por categoria:

<!-- markdownlint-disable MD013-->

| Categoria | Descrição |
| :--- | :--- |
| [AI](ai/) | Atalhos para assistentes de IA e ferramentas LLM |
| [Archives](archives/) | Compactar e extrair arquivos |
| [Benchmarks](benchmarks/) | Comandos de benchmarking |
| [CD](cd/) | Navegar pelo sistema de arquivos |
| [Chmod](chmod/) | Alterar permissões de arquivo |
| [Clear](clear/) | Limpar a tela do terminal |
| [Compliance](compliance/) | Ferramentas SOC2 e privacidade |
| [Configuration](configuration/) | Gerenciar dotfiles e configuração do shell |
| [Default](default/) | Aliases de shell padrão |
| [Diagnostics](diagnostics/) | Auto-reparo e verificações de integridade |
| [Dig](dig/) | Consultar servidores DNS |
| [Disk Usage](disk-usage/) | Exibir informações de uso de disco |
| [Docker](docker/) | Gerenciamento de containers |
| [Editor](editor/) | Configurar editores de texto |
| [Find](find/) | Pesquisar arquivos e diretorios |
| [Fonts](fonts/) | Gerenciamento de cache de fontes |
| [GCloud](gcloud/) | Ferramentas Google Cloud SDK |
| [Git](git/) | Controle de versão Git |
| [GNU](gnu/) | Utilitarios GNU core |
| [Go](go/) | Ferramentas da linguagem Go |
| [Heroku](heroku/) | CLI do Heroku |
| [Installer](installer/) | Bootstrap e implantacao |
| [Interactive](interactive/) | Comportamento interativo do shell |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Ferramentas de verificação de licenca |
| [macOS](macOS/) | Configurações especificas do macOS |
| [Make](make/) | Utilitarios GNU Make |
| [Mkdir](mkdir/) | Criar diretorios |
| [Modern](modern/) | Substituições de ferramentas baseadas em Rust |
| [NPM](npm/) | Gerenciador de pacotes Node.js |
| [Permission](permission/) | Permissões de arquivo |
| [PNPM](pnpm/) | Gerenciador de pacotes PNPM |
| [PS](ps/) | Status de processos |
| [Python](python/) | Utilitarios Python |
| [Rsync](rsync/) | Transferencia eficiente de arquivos |
| [Rust](rust/) | Ferramentas de programacao Rust |
| [Security](security/) | Imutabilidade e assinatura |
| [Subversion](subversion/) | Controle de versão SVN |
| [Sudo](sudo/) | Operações de superusuario |
| [System](system/) | Administração do sistema |
| [Terraform](terraform/) | Infraestrutura como codigo |
| [Tmux](tmux/) | Multiplexador de terminal |
| [Update](update/) | Atualizar dotfiles |
| [UUID](uuid/) | Gerar UUIDs |
| [Vagrant](vagrant/) | Comandos Vagrant |
| [Wget](wget/) | Downloader de linha de comando |
| [Yarn](yarn/) | Gerenciador de pacotes Yarn |

<!-- markdownlint-enable MD013-->
