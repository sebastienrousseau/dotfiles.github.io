---
description: Les alias dig sont des alias de la commande `dig`. Ils sont utilisés pour afficher les informations DNS.
lang: fr-FR
metaTitle: Les alias dig - Dotfiles (FR)
permalink: /aliases/dig/

meta:
  - name: keywords
    content: alias, dig, dns, serveurs, domaine, ip, ipv4, ipv6
  - name: twitter:card
    content: Les alias dig sont des alias de la commande `dig`. Ils sont utilisés pour afficher les informations DNS.
  - name: twitter:description
    content: Les alias dig sont des alias de la commande `dig`. Ils sont utilisés pour afficher les informations DNS.
  - name: twitter:title
    content: Les alias dig - Dotfiles (FR)
  - name: og:title
    content: Les alias dig - Dotfiles (FR)
  - name: og:description
    content: Les alias dig sont des alias de la commande `dig`. Ils sont utilisés pour afficher les informations DNS.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias dig

Le fichier `dig.aliases.sh` crée des alias de raccourcis pour la commande `dig`.
Ils sont utilisés pour afficher les informations DNS.

Le [Dig](<https://en.wikipedia.org/wiki/Dig_(command)>)
(domain information groper) est un outil flexible pour interroger les
serveurs de noms DNS de noms. Il effectue des recherches DNS et affiche les
réponses renvoyées par le(s) du ou des serveurs de noms qui ont été interrogés.
Il est surtout utilisé pour résoudre les problèmes de DNS et pour trouver des
informations sur un domaine, comme l'adresse IP.

## Raccourcis dig

| Alias | Commande                                                                | Description                                                         |
| ----- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| d     | `$(which dig)`                                                          | Exécute la commande `dig`                                           |
| d4    | `$(which dig) +short -4`                                                | Exécute la commande `dig` avec l'option `+short -4`                 |
| d6    | `$(which dig) +short -6`                                                | Exécute la commande `dig` avec l'option `+short -6`                 |
| dga   | `$(which dig) +all ANY`                                                 | Exécute la commande `dig` avec l'option `+all ANY`                  |
| dgs   | `$(which dig) +short`                                                   | Exécute la commande `dig` avec l'option `+short`                    |
| digg  | `$(which dig) @8.8.8.8 +nocmd any +multiline +noall +answer`            | Exécute la commande `dig` avec Google DNS                           |
| ip4   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com -4`        | Exécute la commande `dig` pour récupérer l'adresse IP publique IPv4 |
| ip6   | `$(which dig) -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` | Exécute la commande `dig` pour récupérer l'adresse IP publique IPv6 |
| ips   | `ip4; ip6`                                                              | Exécute les commandes `ip4` et `ip6`                                |
| wip   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com`           | Exécute la commande `dig` pour récupérer l'adresse IP publique      |
