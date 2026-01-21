---
description: Os aliases de Uso de Disco são projetados para exibir estatísticas de uso de disco. Eles são usados para calcular e imprimir o espaço em disco usado por arquivos ou diretórios.
lang: pt-BR
metaTitle: Aliases de Uso de Disco - Dotfiles (BR)
permalink: /pt/aliases/du/
---

# Aliases de Uso de Disco

O arquivo `du.aliases.sh` cria aliases de atalho úteis para o comando `du`.

Os aliases de Uso de Disco são projetados para exibir estatísticas de uso de disco. Eles são
usados para calcular e imprimir o espaço em disco usado por arquivos ou diretórios.

## Uso de disco

[Uso de disco](<https://pt.wikipedia.org/wiki/Du_(Unix)>) é um comando que
estima o uso de espaço em arquivo. O comando `du` é usado para estimar o uso de
espaço em arquivo. O espaço usado por cada arquivo é mostrado em kilobytes. O espaço
usado por cada diretório é mostrado em kilobytes, juntamente com o espaço total
usado por todos os arquivos nesse diretório e seus subdiretórios.

| Alias | Comando      | Descrição                                                                       |
| ----- | ------------ | ------------------------------------------------------------------------------- |
| du    | `du -h`      | Mostrar o uso de disco do diretório atual.                                      |
| du1   | `du -hxd 1   | sort -h`                                                                        | Tamanho de arquivos e diretórios no diretório atual. |
| ducks | `du -cks *   | sort -rn \| head -n 10`                                                         | Top 10 maiores arquivos e diretórios no diretório atual. |
| duh   | `du`         | Tamanho de arquivos e diretórios.                                               |
| dus   | `du -hs *`   | Tamanho de arquivo com saída legível por humanos ordenado por tamanho.          |
| dusym | `du * -hsLc` | Tamanho de arquivos e diretórios no diretório atual incluindo links simbólicos. |
| dut   | `dus`        | Tamanho total do arquivo do diretório atual.                                    |
