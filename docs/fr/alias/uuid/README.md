---
description: Les alias UUID sont des alias qui vous permettent de simplifier l'utilisation de la commande UUID. UUID est une commande qui permet de générer des UUID.
lang: fr-FR
metaTitle: Les alias UUID - Dotfiles (FR)
permalink: /aliases/uuid/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, shell, universal unique identifier, uuid, uuidgen
  - name: twitter:card
    content: Les alias UUID sont des alias qui vous permettent de simplifier l'utilisation de la commande UUID. UUID est une commande qui permet de générer des UUID.
  - name: twitter:description
    content: Les alias UUID sont des alias qui vous permettent de simplifier l'utilisation de la commande UUID. UUID est une commande qui permet de générer des UUID.
  - name: twitter:title
    content: Les alias UUID - Dotfiles (FR)
  - name: og:title
    content: Les alias UUID - Dotfiles (FR)
  - name: og:description
    content: Les alias UUID sont des alias qui vous permettent de simplifier l'utilisation de la commande UUID.UUID est une commande qui permet de générer des UUID.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias UUID

Le fichier `uuid.aliases.sh` crée des raccourcis utiles pour générer des
[UUIDs](https://fr.wikipedia.org/wiki/Universally_unique_identifier).

Les alias UUID créent des raccourcis utiles pour la commande `uuidgen`. La
commande uuidgen génère un Universally Unique IDentifier (UUID), une valeur de
128 bits garantie d'être unique dans l'espace et le temps.

## Raccourcis UUID

| Alias | Command | Description |
| ----- | ----- | ----- |
| uuid | `uuidgen \| tr -d '\n' \| tr '[:upper:]' '[:lower:]' \| pbcopy && pbpaste && echo` | Génère un UUID et le copie dans le presse-papier |
