---
description: Os aliases do Wget criam atalhos úteis para o comando `wget`. Wget é uma ferramenta que baixa arquivos da internet.
lang: pt-BR
metaTitle: Aliases do Wget - Dotfiles (BR)
permalink: /pt/aliases/wget/
---

# Aliases do Wget

O arquivo `wget.aliases.sh` cria aliases de atalho úteis para muitos comandos
[wget](https://www.gnu.org/software/wget/) comumente usados.

Os aliases do Wget criam atalhos úteis para o comando `wget`. Wget é
uma ferramenta que baixa arquivos da internet.

## Wget

GNU [Wget](https://www.gnu.org/software/wget/) é um utilitário gratuito para
download não interativo de arquivos da Web. Ele suporta protocolos HTTP, HTTPS e
FTP, bem como recuperação através de proxies HTTP.

| Alias | Comando            | Descrição                             |
| ----- | ------------------ | ------------------------------------- |
| wg    | `wget`             | Baixar um arquivo.                    |
| wgc   | `wg`               | Continuar um arquivo parcialmente baixado. |
| wge   | `wg -e robots=off` | Baixar um arquivo, ignorando robots.txt. |
| wget  | `wget -c`          | Continuar um arquivo parcialmente baixado. |
