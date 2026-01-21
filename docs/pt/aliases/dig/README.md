---
description: Os aliases do Dig permitem consultar informações sobre vários registros DNS, incluindo endereços de host, trocas de e-mail e servidores de nomes.
lang: pt-BR
metaTitle: Aliases do Dig - Dotfiles (BR)
permalink: /pt/aliases/dig/
---

# Aliases do Dig

O arquivo `dig.aliases.sh` cria aliases de atalho úteis para o comando `dig`.

O `dig` (domain information groper) é uma ferramenta flexível para interrogar
servidores de nomes DNS. Ele executa pesquisas DNS e exibe as respostas que são
retornadas do(s) servidor(es) de nomes consultados. É usado principalmente para solucionar
problemas de DNS e encontrar informações sobre um domínio, como o endereço IP.

## Dig

[Dig](<https://en.wikipedia.org/wiki/Dig_(command)>) é um comando que executa
pesquisas DNS e exibe as respostas que são retornadas do(s) servidor(es) de nomes
consultados.

| Alias | Comando                                                                 | Descrição                                         |
| ----- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| d     | `$(which dig)`                                                          | Executar o comando dig com as opções padrão.      |
| d4    | `$(which dig) +short -4`                                                | Realizar uma pesquisa DNS para um endereço IPv4.  |
| d6    | `$(which dig) +short -6`                                                | Realizar uma pesquisa DNS para um endereço IPv6.  |
| dga   | `$(which dig) +all ANY`                                                 | Realizar uma pesquisa DNS para todos os registros.|
| dgs   | `$(which dig) +short`                                                   | Realizar uma pesquisa DNS para uma resposta curta.|
| digg  | `$(which dig) @8.8.8.8 +nocmd any +multiline +noall +answer`            | Dig com o DNS do Google.                          |
| ip4   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com -4`        | Obter seu endereço IPv4 público.                  |
| ip6   | `$(which dig) -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` | Obter seu endereço IPv6 público.                  |
| ips   | `ip4; ip6`                                                              | Obter seus endereços IPv4 e IPv6 públicos.        |
| wip   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com`           | Obter seu endereço IP público.                    |
