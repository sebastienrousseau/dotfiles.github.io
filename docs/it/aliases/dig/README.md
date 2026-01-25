---
description: Semplifica le query DNS con alias dig. Cerca IPv4, IPv6 e record DNS piu velocemente usando queste scorciatoie shell.
lang: it-IT
metaTitle: Alias Dig - Dotfiles (IT)
permalink: /aliases/dig/
sidebar: true

meta:
  - name: keywords
    content: alias dig, ricerca dns, alias shell, dotfiles, ricerca ipv4, ricerca ipv6
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Semplifica le query DNS con alias dig. Cerca IPv4, IPv6 e record DNS piu velocemente usando queste scorciatoie shell.
  - name: twitter:title
    content: Alias Dig - Dotfiles
  - name: og:title
    content: Alias Dig - Dotfiles
  - name: og:description
    content: Semplifica le query DNS con alias dig. Cerca IPv4, IPv6 e record DNS piu velocemente usando queste scorciatoie shell.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Dig

Ottimizza le ricerche DNS con un set conciso di alias shell.

## Panoramica

Questi alias semplificano il lavoro con le query DNS (Domain Name System) usando il comando `dig` su sistemi Unix-based. Definiti in `dig.aliases.sh`, vengono caricati automaticamente da chezmoi come parte della configurazione Universal Dotfiles.

## Riferimento

La seguente tabella elenca tutti gli alias dig disponibili e le loro funzioni.

| Alias | Descrizione |
|-------|-------------|
| `d` | Esegue il comando dig con opzioni predefinite |
| `d4` | Esegue una ricerca DNS per un indirizzo IPv4 |
| `d6` | Esegue una ricerca DNS per un indirizzo IPv6 |
| `dga` | Esegue una ricerca DNS per tutti i record |
| `dgs` | Esegue una ricerca DNS per una risposta breve |
| `digg` | Esegue una query dig usando Google DNS |
| `ip4` | Recupera il tuo indirizzo IPv4 pubblico |
| `ip6` | Recupera il tuo indirizzo IPv6 pubblico |
| `ips` | Recupera i tuoi indirizzi IPv4 e IPv6 pubblici |
| `wip` | Recupera il tuo indirizzo IP pubblico |
