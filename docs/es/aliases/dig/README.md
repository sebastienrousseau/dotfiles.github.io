---
title: "Alias Dig: atajos DNS para el terminal"
description: "Simplifica las consultas DNS con alias dig. Busca IPv4, IPv6 y registros DNS más rápido."
lang: es-ES
metaTitle: "Alias Dig | Dotfiles"
permalink: /aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "alias dig, consulta dns, alias shell, dotfiles, búsqueda ipv4, búsqueda ipv6"
  - name: twitter:card
    content: "Simplifica las consultas DNS con alias dig. Busca IPv4, IPv6 y registros DNS más rápido."
  - name: twitter:description
    content: "Simplifica las consultas DNS con alias dig. Busca IPv4, IPv6 y registros DNS más rápido."
  - name: twitter:title
    content: "Alias Dig | Dotfiles"
  - name: og:title
    content: "Alias Dig | Dotfiles"
  - name: og:description
    content: "Simplifica las consultas DNS con alias dig. Busca IPv4, IPv6 y registros DNS más rápido."
  - name: og:image:alt
    content: "Dotfiles - Diseñado para tu vida en el shell"
  - name: og:locale
    content: es_ES
---

# Alias Dig

Simplifica las búsquedas DNS con un conjunto conciso de alias de shell.

## Descubrir

Estos alias simplifican el trabajo con DNS (Domain Name System) usando `dig` en sistemas Unix. Definidos en `dig.aliases.sh`, se cargan automáticamente por chezmoi como parte de Universal Dotfiles.

## Referencia

La siguiente tabla lista todos los alias dig y sus funciones.

| Alias  | Descripción                                |
|--------|--------------------------------------------|
| `d`    | Ejecuta dig con opciones por defecto       |
| `d4`   | Consulta DNS para una dirección IPv4       |
| `d6`   | Consulta DNS para una dirección IPv6       |
| `dga`  | Consulta DNS para todos los registros      |
| `dgs`  | Consulta DNS con respuesta corta           |
| `digg` | Consulta dig usando Google DNS             |
| `ip4`  | Obtiene tu IPv4 pública                    |
| `ip6`  | Obtiene tu IPv6 pública                    |
| `ips`  | Obtiene IPv4 e IPv6 públicas               |
| `wip`  | Obtiene tu IP pública                      |
