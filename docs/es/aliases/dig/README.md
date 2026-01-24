---
description: Los alias de Dig permiten consultar informacion sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
lang: es-ES
metaTitle: Alias de Dig - Dotfiles (ES)
permalink: /es/aliases/dig/

meta:
  - name: twitter:card
    content: Los alias de Dig permiten consultar informacion sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
  - name: twitter:description
    content: Los alias de Dig permiten consultar informacion sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
  - name: twitter:title
    content: Alias de Dig - Dotfiles (ES)
  - name: og:title
    content: Alias de Dig - Dotfiles (ES)
  - name: og:description
    content: Los alias de Dig permiten consultar informacion sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Dig

Gestionar alias de Dig. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `dig.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto de alias de comandos para simplificar el trabajo con busquedas DNS
(Domain Name System) usando el comando dig en un sistema basado en Unix.
Los siguientes alias estan incluidos:
- `d`: ejecuta el comando dig con opciones por defecto.
- `d4`: realiza una busqueda DNS para una direccion IPv4.
- `d6`: realiza una busqueda DNS para una direccion IPv6.
- `dga`: realiza una busqueda DNS para todos los registros.
- `dgs`: realiza una busqueda DNS para una respuesta corta.
- `digg`: realiza una consulta dig con el DNS de Google.
- `ip4`: obtiene tu direccion IPv4 publica.
- `ip6`: obtiene tu direccion IPv6 publica.
- `ips`: obtiene tus direcciones IPv4 e IPv6 publicas.
- `wip`: obtiene tu direccion IP publica.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
