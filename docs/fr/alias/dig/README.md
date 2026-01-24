---
description: Les alias Dig permettent d'interroger des informations sur divers enregistrements DNS, notamment les adresses hôtes, les échanges de mail et les serveurs de noms.
lang: fr-FR
metaTitle: Alias Dig - Dotfiles (FR)
permalink: /alias/dig/

meta:
  - name: twitter:card
    content: Les alias Dig permettent d'interroger des informations sur divers enregistrements DNS, notamment les adresses hôtes, les échanges de mail et les serveurs de noms.
  - name: twitter:description
    content: Les alias Dig permettent d'interroger des informations sur divers enregistrements DNS, notamment les adresses hôtes, les échanges de mail et les serveurs de noms.
  - name: twitter:title
    content: Alias Dig - Dotfiles (FR)
  - name: og:title
    content: Alias Dig - Dotfiles (FR)
  - name: og:description
    content: Les alias Dig permettent d'interroger des informations sur divers enregistrements DNS, notamment les adresses hôtes, les échanges de mail et les serveurs de noms.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Dig

Gérer les alias Dig. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `dig.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias de commande pour simplifier le travail avec les recherches DNS
(Domain Name System) via la commande `dig` sur un système Unix.
Les alias suivants sont inclus :
- `d` : exécute la commande dig avec les options par défaut.
- `d4` : effectue une recherche DNS pour une adresse IPv4.
- `d6` : effectue une recherche DNS pour une adresse IPv6.
- `dga` : effectue une recherche DNS pour tous les enregistrements.
- `dgs` : effectue une recherche DNS pour une réponse courte.
- `digg` : effectue un dig avec le DNS de Google.
- `ip4` : récupère votre adresse IPv4 publique.
- `ip6` : récupère votre adresse IPv6 publique.
- `ips` : récupère vos adresses IPv4 et IPv6 publiques.
- `wip` : récupère votre adresse IP publique.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
