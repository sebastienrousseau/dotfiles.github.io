---
description: Los alias de Dig permiten consultar información sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
lang: es-ES
metaTitle: Alias de Dig - Dotfiles (ES)
permalink: /es/aliases/dig/
meta:
  - name: twitter:card
    content: Los alias de Dig permiten consultar información sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
  - name: twitter:description
    content: Los alias de Dig permiten consultar información sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
  - name: twitter:title
    content: Alias de Dig - Dotfiles (ES)
  - name: og:title
    content: Alias de Dig - Dotfiles (ES)
  - name: og:description
    content: Los alias de Dig permiten consultar información sobre varios registros DNS, incluyendo direcciones de host, intercambios de correo y servidores de nombres.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Dig

El archivo `dig.aliases.sh` crea atajos útiles para el comando `dig`.

`dig` (domain information groper) es una herramienta flexible para interrogar servidores de nombres DNS. Realiza búsquedas DNS y muestra las respuestas que se devuelven desde los servidores de nombres consultados. Se utiliza principalmente para solucionar problemas de DNS y para encontrar información sobre un dominio, como la dirección IP.

## Dig

[Dig](<https://es.wikipedia.org/wiki/Dig_(comando)>) es un comando que realiza búsquedas DNS y muestra las respuestas que se devuelven desde los servidores de nombres consultados.

| Alias | Comando                                                                 | Descripción                                               |
| ----- | ----------------------------------------------------------------------- | --------------------------------------------------------- |
| d     | `$(which dig)`                                                          | Ejecutar el comando dig con las opciones predeterminadas. |
| d4    | `$(which dig) +short -4`                                                | Realizar una búsqueda DNS para una dirección IPv4.        |
| d6    | `$(which dig) +short -6`                                                | Realizar una búsqueda DNS para una dirección IPv6.        |
| dga   | `$(which dig) +all ANY`                                                 | Realizar una búsqueda DNS para todos los registros.       |
| dgs   | `$(which dig) +short`                                                   | Realizar una búsqueda DNS para una respuesta corta.       |
| digg  | `$(which dig) @8.8.8.8 +nocmd any +multiline +noall +answer`            | Dig con el DNS de Google.                                 |
| ip4   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com -4`        | Obtener tu dirección IPv4 pública.                        |
| ip6   | `$(which dig) -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` | Obtener tu dirección IPv6 pública.                        |
| ips   | `ip4; ip6`                                                              | Obtener tus direcciones IPv4 e IPv6 públicas.             |
| wip   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com`           | Obtener tu dirección IP pública.                          |
