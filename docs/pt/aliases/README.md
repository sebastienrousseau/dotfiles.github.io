---
description: Aliases de shell que criam atalhos para comandos usados frequentemente. Aumente a produtividade reduzindo a digitacao no seu fluxo de trabalho diario.
lang: pt-BR
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

Os aliases sao organizados em arquivos pequenos e focados - um para cada ferramenta ou fluxo de trabalho. Durante o `chezmoi apply`, todos os arquivos de aliases sao agregados em `~/.config/shell/aliases.sh` e carregados pelo seu shell.

## Comece agora

### Adicionar um alias

1. Crie um novo arquivo (ex.: `mytool/mytool.aliases.sh`)
2. Defina seus aliases:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Aplique as alteracoes:
   ```bash
   chezmoi apply
   ```

## Referencia

Navegue pelos aliases por categoria:

<!-- markdownlint-disable MD013-->

| Categoria | Descricao |
| :--- | :--- |
| [AI](ai/) | Atalhos para assistentes de IA e ferramentas LLM |
| [Archives](archives/) | Compactar e extrair arquivos |
| [CD](cd/) | Navegar pelo sistema de arquivos |
| [Chmod](chmod/) | Alterar permissoes de arquivo |
| [Clear](clear/) | Limpar a tela do terminal |
| [Compliance](compliance/) | Ferramentas SOC2 e privacidade |
| [Configuration](configuration/) | Gerenciar dotfiles e configuracao do shell |
| [Default](default/) | Aliases de shell padrao |
| [Diagnostics](diagnostics/) | Auto-reparo e verificacoes de integridade |
| [Dig](dig/) | Consultar servidores DNS |
| [Disk Usage](disk-usage/) | Exibir informacoes de uso de disco |
| [Docker](docker/) | Gerenciamento de containers |
| [Editor](editor/) | Configurar editores de texto |
| [Find](find/) | Pesquisar arquivos e diretorios |
| [Fonts](fonts/) | Gerenciamento de cache de fontes |
| [GCloud](gcloud/) | Ferramentas Google Cloud SDK |
| [Git](git/) | Controle de versao Git |
| [GNU](gnu/) | Utilitarios GNU core |
| [Go](go/) | Ferramentas da linguagem Go |
| [Heroku](heroku/) | CLI do Heroku |
| [Installer](installer/) | Bootstrap e implantacao |
| [Interactive](interactive/) | Comportamento interativo do shell |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Ferramentas de verificacao de licenca |
| [macOS](macOS/) | Configuracoes especificas do macOS |
| [Make](make/) | Utilitarios GNU Make |
| [Mkdir](mkdir/) | Criar diretorios |
| [Modern](modern/) | Substituicoes de ferramentas baseadas em Rust |
| [NPM](npm/) | Gerenciador de pacotes Node.js |
| [Permission](permission/) | Permissoes de arquivo |
| [PNPM](pnpm/) | Gerenciador de pacotes PNPM |
| [PS](ps/) | Status de processos |
| [Python](python/) | Utilitarios Python |
| [Rsync](rsync/) | Transferencia eficiente de arquivos |
| [Rust](rust/) | Ferramentas de programacao Rust |
| [Security](security/) | Imutabilidade e assinatura |
| [Subversion](subversion/) | Controle de versao SVN |
| [Sudo](sudo/) | Operacoes de superusuario |
| [Terraform](terraform/) | Infraestrutura como codigo |
| [Tmux](tmux/) | Multiplexador de terminal |
| [Update](update/) | Atualizar dotfiles |
| [UUID](uuid/) | Gerar UUIDs |
| [Wget](wget/) | Downloader de linha de comando |
| [Yarn](yarn/) | Gerenciador de pacotes Yarn |

<!-- markdownlint-enable MD013-->
