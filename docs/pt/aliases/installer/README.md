---
title: "Aliases de Instalador: Bootstrap e Deploy Remoto"
description: "Aliases de shell para bootstrapping e deploy remoto de dotfiles. Execute o script de instalacao ou teletransporte configuracao para servidores."
lang: pt-BR
metaTitle: "Aliases de Instalador | Dotfiles"
permalink: /pt/aliases/installer/
sidebar: true
meta:
  - name: keywords
    content: "aliases instalador, bootstrap, deploy remoto, teleport, dotfiles"
---

# Aliases de Instalador

Ferramentas para bootstrapping e deploy remoto.

## Visao Geral

Estes aliases sao definidos em `installer.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

| Alias | Descricao |
|-------|-------------|
| `dot-install` | Executar o script `install.sh` localmente |
| `dot-teleport` | Teletransportar configuracao para servidor remoto (`dot-teleport usuario@host`) |
