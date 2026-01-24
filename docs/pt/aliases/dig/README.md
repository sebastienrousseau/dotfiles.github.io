---
description: Os alias de Dig permitem consultar varios registros DNS, incluindo enderecos de host, MX e nameservers.
lang: pt-PT
metaTitle: Alias de Dig - Dotfiles (PT)
permalink: /pt/aliases/dig/

meta:
  - name: twitter:card
    content: Os alias de Dig permitem consultar varios registros DNS, incluindo enderecos de host, MX e nameservers.
  - name: twitter:description
    content: Os alias de Dig permitem consultar varios registros DNS, incluindo enderecos de host, MX e nameservers.
  - name: twitter:title
    content: Alias de Dig - Dotfiles (PT)
  - name: og:title
    content: Alias de Dig - Dotfiles (PT)
  - name: og:description
    content: Os alias de Dig permitem consultar varios registros DNS, incluindo enderecos de host, MX e nameservers.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Dig

Gerenciar alias de Dig. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `dig.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece alias para consultas DNS com o comando dig.
- `d`: executa dig com opcoes padrao.
- `d4`: consulta DNS para IPv4.
- `d6`: consulta DNS para IPv6.
- `dga`: consulta todos os registros.
- `dgs`: resposta curta.
- `digg`: dig usando DNS do Google.
- `ip4`: obter IPv4 publica.
- `ip6`: obter IPv6 publica.
- `ips`: obter IPv4 e IPv6 publicas.
- `wip`: obter IP publico.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
