---
title: "Dig-aliassen: DNS-lookup snelkoppelingen voor de terminal"
description: "Vereenvoudig DNS-query's met dig-aliassen. Zoek sneller IPv4, IPv6 en DNS-records op met deze shell-snelkoppelingen."
lang: nl-NL
metaTitle: "Dig-aliassen | Dotfiles"
permalink: /nl/aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "dig aliassen, dns lookup, shell aliassen, dotfiles, ipv4 lookup, ipv6 lookup"
  - name: twitter:card
    content: "Vereenvoudig DNS-query's met dig-aliassen. Zoek sneller IPv4, IPv6 en DNS-records op met deze shell-snelkoppelingen."
  - name: twitter:description
    content: "Vereenvoudig DNS-query's met dig-aliassen. Zoek sneller IPv4, IPv6 en DNS-records op met deze shell-snelkoppelingen."
  - name: twitter:title
    content: "Dig-aliassen | Dotfiles"
  - name: og:title
    content: "Dig-aliassen | Dotfiles"
  - name: og:description
    content: "Vereenvoudig DNS-query's met dig-aliassen. Zoek sneller IPv4, IPv6 en DNS-records op met deze shell-snelkoppelingen."
  - name: og:image:alt
    content: "Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen"
  - name: og:locale
    content: nl_NL
---

# Dig-aliassen

Stroomlijn DNS-lookups met een beknopte set shell-aliassen.

## Overzicht

Deze aliassen vereenvoudigen het werken met DNS (Domain Name System) query's met behulp van het `dig` commando op Unix-gebaseerde systemen. Gedefinieerd in `dig.aliases.sh`, worden ze automatisch geladen door chezmoi als onderdeel van de Universal Dotfiles-configuratie.

## Referentie

De volgende tabel toont alle beschikbare dig-aliassen en hun functies.

| Alias  | Beschrijving                               |
|--------|--------------------------------------------|
| `d`    | Voert het dig-commando uit met standaardopties |
| `d4`   | Voert een DNS-lookup uit voor een IPv4-adres |
| `d6`   | Voert een DNS-lookup uit voor een IPv6-adres |
| `dga`  | Voert een DNS-lookup uit voor alle records |
| `dgs`  | Voert een DNS-lookup uit voor een kort antwoord |
| `digg` | Voert een dig-query uit met Google DNS    |
| `ip4`  | Haalt je publieke IPv4-adres op            |
| `ip6`  | Haalt je publieke IPv6-adres op            |
| `ips`  | Haalt je publieke IPv4- en IPv6-adressen op |
| `wip`  | Haalt je publieke IP-adres op              |
