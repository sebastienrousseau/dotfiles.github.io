---
title: "Alias Dig : raccourcis DNS pour le terminal"
description: "Simplifiez les requêtes DNS avec des alias dig. Recherchez IPv4, IPv6 et les enregistrements DNS plus vite."
lang: fr-FR
metaTitle: "Alias Dig | Dotfiles"
permalink: /aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "alias dig, requête dns, alias shell, dotfiles, recherche ipv4, recherche ipv6"
  - name: twitter:card
    content: "Simplifiez les requêtes DNS avec des alias dig. Recherchez IPv4, IPv6 et les enregistrements DNS plus vite."
  - name: twitter:description
    content: "Simplifiez les requêtes DNS avec des alias dig. Recherchez IPv4, IPv6 et les enregistrements DNS plus vite."
  - name: twitter:title
    content: "Alias Dig | Dotfiles"
  - name: og:title
    content: "Alias Dig | Dotfiles"
  - name: og:description
    content: "Simplifiez les requêtes DNS avec des alias dig. Recherchez IPv4, IPv6 et les enregistrements DNS plus vite."
  - name: og:image:alt
    content: "Dotfiles - Conçus pour s'adapter à votre vie de shell"
  - name: og:locale
    content: fr_FR
---

# Alias Dig

Simplifiez les recherches DNS avec un ensemble concis d’alias shell.

## Aperçu

Ces alias simplifient les requêtes DNS via la commande `dig` sur les systèmes Unix. Définis dans `dig.aliases.sh`, ils sont chargés automatiquement par chezmoi dans la configuration Universal Dotfiles.

## Référence

Le tableau suivant liste tous les alias dig et leurs fonctions.

| Alias  | Description                                |
|--------|--------------------------------------------|
| `d`    | Exécute dig avec les options par défaut    |
| `d4`   | Requête DNS pour une adresse IPv4          |
| `d6`   | Requête DNS pour une adresse IPv6          |
| `dga`  | Requête DNS pour tous les enregistrements  |
| `dgs`  | Requête DNS avec réponse courte            |
| `digg` | Requête dig via Google DNS                 |
| `ip4`  | Récupère l’adresse IPv4 publique           |
| `ip6`  | Récupère l’adresse IPv6 publique           |
| `ips`  | Récupère IPv4 et IPv6 publiques            |
| `wip`  | Récupère l’adresse IP publique             |
