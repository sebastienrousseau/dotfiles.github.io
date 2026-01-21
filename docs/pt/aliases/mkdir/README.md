---
description: Os aliases do Mkdir são uma coleção de aliases que permitem interagir com a ferramenta de linha de comando `mkdir`. Mkdir é uma ferramenta que cria um diretório.
lang: pt-BR
metaTitle: Aliases do Mkdir - Dotfiles (BR)
permalink: /pt/aliases/mkdir/
---

# Aliases do Mkdir

O arquivo `mkdir.aliases.sh` cria aliases de atalho úteis para criar
diretórios.

Os aliases do Mkdir são uma coleção de aliases que permitem interagir com
a ferramenta de linha de comando `mkdir`. Mkdir é uma ferramenta que cria um diretório.

## Mkdir

[Mkdir](https://pt.wikipedia.org/wiki/Mkdir) é um comando que cria um
diretório. O utilitário mkdir cria os diretórios nomeados como operandos, na
ordem especificada, usando o modo “rwxrwxrwx” (0777).

| Alias | Comando                     | Descrição                             |
| ----- | --------------------------- | ------------------------------------- |
| mcd   | `mkdir -pv && cd`           | Criar diretório e entrar nele.        |
| mcdp  | `mkdir -pv && cd`           | Criar diretório e pais e entrar nele. |
| md    | `mkd`                       | Criar diretório.                      |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | Criar diretório com data.             |
| mdp   | `mkdir -pv`                 | Criar diretório e pais.               |
| mdt   | `mkdir -pv $(date +%h%m%s)` | Criar diretório com hora.             |
