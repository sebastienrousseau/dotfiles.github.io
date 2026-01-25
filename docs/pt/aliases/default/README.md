---
title: "Aliases Padrao: Atalhos Essenciais de Shell"
description: "Aliases de shell essenciais para navegacao, controle do sistema e tarefas diarias. Simplifique seu fluxo de trabalho no terminal com estes atalhos universais."
lang: pt-BR
metaTitle: "Aliases Padrao | Dotfiles"
permalink: /pt/aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "aliases padrao, aliases shell, atalhos terminal, dotfiles, aliases bash"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Aliases Padrao | Dotfiles
  - name: twitter:description
    content: Aliases de shell essenciais para navegacao, controle do sistema e tarefas diarias.
  - name: og:title
    content: Aliases Padrao | Dotfiles
  - name: og:description
    content: Aliases de shell essenciais para navegacao, controle do sistema e tarefas diarias.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases Padrao

Atalhos de shell essenciais para tarefas diarias do terminal.

## Visao Geral

Os aliases padrao fornecem uma colecao de atalhos de shell universais que simplificam operacoes comuns do terminal. Estes aliases sao definidos em `default.aliases.sh` e sao carregados automaticamente pelo chezmoi em todos os shells suportados.

Estes atalhos cobrem utilitarios gerais, comandos de saida, diagnosticos de rede, monitoramento do sistema e navegacao do sistema de arquivos.

## Referencia

### Geral

| Alias | Comando | Descricao |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Exibir data e hora atuais |
| `p` | `pwd` | Imprimir diretorio de trabalho |
| `path` | `echo ${PATH//:/\\n}` | Exibir variavel PATH em novas linhas |
| `r` | `reload` | Recarregar o shell |
| `t` | `tail -f` | Acompanhar saida de arquivo em tempo real |
| `wk` | `date +%V` | Mostrar numero da semana atual |

### Saida e Desligamento

| Alias | Comando | Descricao |
|-------|---------|-------------|
| `q` | `exit` | Sair do shell |
| `quit` | `exit` | Sair do shell |
| `bye` | `exit` | Sair do shell |
| `:q` | `exit` | Sair do shell (estilo vim) |
| `halt` | `sudo /sbin/halt` | Parar o sistema |
| `poweroff` | `sudo /sbin/shutdown` | Desligar o sistema |
| `reboot` | `sudo /sbin/reboot` | Reiniciar o sistema |

### Historico

| Alias | Comando | Descricao |
|-------|---------|-------------|
| `h` | `history` | Ver historico de comandos |
| `history` | `fc -il 1` | Mostrar historico com timestamps ISO 8601 |

### Rede

| Alias | Comando | Descricao |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configurar interfaces de rede |
| `ipinfo` | `ipconfig getpacket en0` | Obter parametros de rede para en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Mostrar ouvintes de rede ativos |
| `op` | `sudo lsof -i -P` | Listar portas abertas |
| `ping` | `ping -c 5` | Ping com limite de 5 pacotes |
| `ports` | `netstat -tulan` | Listar todas as portas em escuta |

### Monitoramento do Sistema

| Alias | Comando | Descricao |
|-------|---------|-------------|
| `top` | `sudo btop` | Monitor de processos interativo |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Limpar arquivos de log ASL |

### Utilitarios

| Alias | Comando | Descricao |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | Contar arquivos no diretorio atual |
| `qfind` | `find . -name` | Busca rapida de arquivos |
| `reload` | `exec $SHELL -l` | Recarregar o shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Obter clima atual |
