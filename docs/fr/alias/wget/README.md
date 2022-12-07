---
description: Les alias wget sont des alias qui vous permettent de simplifier l'utilisation de la commande wget.wget est une commande qui permet de télécharger des fichiers depuis des serveurs web.
lang: fr-FR
metaTitle: Les alias wget - Dotfiles (FR)
permalink: /aliases/wget/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, wget, shell
  - name: twitter:card
    content: Les alias wget sont des alias qui vous permettent de simplifier l'utilisation de la commande wget.wget est une commande qui permet de télécharger des fichiers depuis des serveurs web.
  - name: twitter:description
    content: Les alias wget sont des alias qui vous permettent de simplifier l'utilisation de la commande wget.wget est une commande qui permet de télécharger des fichiers depuis des serveurs web.
  - name: twitter:title
    content: Les alias wget - Dotfiles (FR)
  - name: og:title
    content: Les alias wget - Dotfiles (FR)
  - name: og:description
    content: Les alias wget sont des alias qui vous permettent de simplifier l'utilisation de la commande wget.wget est une commande qui permet de télécharger des fichiers depuis des serveurs web.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias wget

Le fichier `wget.aliases.sh` crée des raccourcis utiles pour de nombreuses
commandes wget couramment utilisées. wget est une commande qui permet de
télécharger des fichiers depuis des serveurs web.

GNU Wget est un logiciel libre et gratuit pour télécharger des fichiers à
partir d'Internet. Il supporte le protocole HTTP, HTTPS, et FTP, ainsi que les
proxies HTTP.

## Raccourcis wget

| Alias | Commande           | Description                                                         |
| ----- | ------------------ | ------------------------------------------------------------------- |
| wg    | `wget`             | Télécharge un fichier depuis un serveur web                         |
| wgc   | `wg`               | Télécharge un fichier depuis un serveur web                         |
| wge   | `wg -e robots=off` | Télécharge un fichier depuis un serveur web en désactivant le robot |
| wget  | `wget -c`          | Télécharge un fichier depuis un serveur web en continuant           |
