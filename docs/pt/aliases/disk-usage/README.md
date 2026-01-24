---
description: alias de Disk Usage para Dotfiles
lang: pt-PT
metaTitle: alias de Disk Usage - Dotfiles
permalink: /pt/aliases/disk-usage/
---
# Alias de Disk Usage

Gerenciar alias de Disk Usage. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `disk-usage.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Esses alias facilitam a exploracao do uso de disco com variantes de `du`,
ordenadas por tamanho e voltadas para diagnosticos rapidos.
- `du` executar `du -h` no diretorio atual.
- `du1` listar uso de disco do primeiro nivel, ordenado por tamanho.
- `ducks` mostrar os 10 maiores consumidores de espaco no diretorio atual.
- `duf` mostrar uso de disco de arquivos com profundidade 1.
- `dufi` como `duf`, ordenado de maior para menor.
- `duh` mostrar uso total do diretorio atual, legivel.
- `dui` mostrar uso de disco e inode, ordenado.
- `dul` listar diretorios ordenados por tamanho.
- `duls` listar uso de disco do diretorio atual, ordenado por tamanho.
- `dus` mostrar uso de disco do diretorio atual, ordenado por tamanho.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
