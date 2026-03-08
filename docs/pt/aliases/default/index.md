---
title: "Aliases Padrão: Atalhos Essenciais de Shell"
description: Aliases de shell essenciais para navegação, controle do sistema e tarefas diarias. Simplifique seu fluxo de trabalho no terminal com estes atalhos universais.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases Padrão: Atalhos Essenciais de Shell preview"
canonical: /pt/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases Padrão: Atalhos Essenciais de Shell"
pageType: docs
schemaType: WebPage
metaTitle: Aliases Padrão | Dotfiles
permalink: /pt/aliases/default/
sidebar: true
meta:
  - name: keywords
    content: aliases padrão, aliases shell, atalhos terminal, dotfiles, aliases bash
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Aliases Padrão | Dotfiles
  - name: twitter:description
    content: Aliases de shell essenciais para navegação, controle do sistema e tarefas diarias.
  - name: og:title
    content: Aliases Padrão | Dotfiles
  - name: og:description
    content: Aliases de shell essenciais para navegação, controle do sistema e tarefas diarias.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases Padrão

Atalhos de shell essenciais para tarefas diarias do terminal.

## Visão Geral

Os aliases padrão fornecem uma colecao de atalhos de shell universais que simplificam operações comuns do terminal. Estes aliases são definidos em `default.aliases.sh` e são carregados automaticamente pelo chezmoi em todos os shells suportados.

Estes atalhos cobrem utilitarios gerais, comandos de saida, diagnosticos de rede, monitoramento do sistema e navegação do sistema de arquivos.

## Referência

### Geral

| Alias | Comando | Descrição |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Exibir data e hora atuais |
| `p` | `pwd` | Imprimir diretorio de trabalho |
| `path` | `echo ${PATH//:/\\n}` | Exibir variavel PATH em novas linhas |
| `r` | `reload` | Recarregar o shell |
| `t` | `tail -f` | Acompanhar saida de arquivo em tempo real |
| `wk` | `date +%V` | Mostrar numero da semana atual |

### Saida e Desligamento

| Alias | Comando | Descrição |
|-------|---------|-------------|
| `q` | `exit` | Sair do shell |
| `quit` | `exit` | Sair do shell |
| `bye` | `exit` | Sair do shell |
| `:q` | `exit` | Sair do shell (estilo vim) |
| `halt` | `sudo /sbin/halt` | Parar o sistema |
| `poweroff` | `sudo /sbin/shutdown` | Desligar o sistema |
| `reboot` | `sudo /sbin/reboot` | Reiniciar o sistema |

### Historico

| Alias | Comando | Descrição |
|-------|---------|-------------|
| `h` | `history` | Ver historico de comandos |
| `history` | `fc -il 1` | Mostrar historico com timestamps ISO 8601 |

### Rede

| Alias | Comando | Descrição |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configurar interfaces de rede |
| `ipinfo` | `ipconfig getpacket en0` | Obter parametros de rede para en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Mostrar ouvintes de rede ativos |
| `op` | `sudo lsof -i -P` | Listar portas abertas |
| `ping` | `ping -c 5` | Ping com limite de 5 pacotes |
| `ports` | `netstat -tulan` | Listar todas as portas em escuta |

### Monitoramento do Sistema

| Alias | Comando | Descrição |
|-------|---------|-------------|
| `top` | `sudo btop` | Monitor de processos interativo |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Limpar arquivos de log ASL |

### Utilitarios

| Alias | Comando | Descrição |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | Contar arquivos no diretorio atual |
| `qfind` | `find . -name` | Busca rapida de arquivos |
| `reload` | `exec $SHELL -l` | Recarregar o shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Obter clima atual |
