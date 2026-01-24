---
description: Os alias de uso de disco exibem estatisticas de uso. Eles calculam e imprimem o espaco usado por arquivos ou diretorios.
lang: pt-PT
metaTitle: Alias de uso de disco - Dotfiles (PT)
permalink: /pt/aliases/du/

meta:
  - name: twitter:card
    content: Os alias de uso de disco exibem estatisticas de uso. Eles calculam e imprimem o espaco usado por arquivos ou diretorios.
  - name: twitter:description
    content: Os alias de uso de disco exibem estatisticas de uso. Eles calculam e imprimem o espaco usado por arquivos ou diretorios.
  - name: twitter:title
    content: Alias de uso de disco - Dotfiles (PT)
  - name: og:title
    content: Alias de uso de disco - Dotfiles (PT)
  - name: og:description
    content: Os alias de uso de disco exibem estatisticas de uso. Eles calculam e imprimem o espaco usado por arquivos ou diretorios.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---

# Alias de uso de disco

O arquivo `du.aliases.sh` cria atalhos uteis para o comando `du`.

Os alias de uso de disco exibem estatisticas de uso. Eles calculam e imprimem
espaco usado por arquivos ou diretorios.

## Uso de disco

[Disk usage](<https://en.wikipedia.org/wiki/Du_(Unix)>) estima uso de espaco.

| Alias | Command | Description |
| ----- | ------- | ----------- |
| du | `du -h` | Mostrar uso de disco do diretorio atual. |
| du1 | `du -hxd 1 | sort -h` | Tamanho de arquivos e diretorios do diretorio atual. |
| ducks | `du -cks * | sort -rn | head -n 10` | Top 10 maiores arquivos e diretorios no diretorio atual. |
| duh | `du` | Tamanho de arquivos e diretorios. |
| dus | `du -hs *` | Tamanho legivel ordenado por tamanho. |
| dusym | `du * -hsLc` | Tamanho incluindo links simbolicos. |
| dut | `dus` | Tamanho total do diretorio atual. |
