---
description: Les alias pnpm sont des alias qui vous permettent de simplifier l'utilisation de la commande pnpm. pnpm est une commande qui permet de gérer les paquets npm.
lang: fr-FR
metaTitle: Les alias pnpm - Dotfiles (FR)
permalink: /aliases/pnpm/

meta:
  - name: keywords
    content: alias, commandes, dotfiles, npm, pnpm, pnpx, shell
  - name: twitter:card
    content: Les alias pnpm sont des alias qui vous permettent de simplifier l'utilisation de la commande pnpm. pnpm est une commande qui permet de gérer les paquets npm.
  - name: twitter:description
    content: Les alias pnpm sont des alias qui vous permettent de simplifier l'utilisation de la commande pnpm. pnpm est une commande qui permet de gérer les paquets npm.
  - name: twitter:title
    content: Les alias pnpm - Dotfiles (FR)
  - name: og:title
    content: Les alias pnpm - Dotfiles (FR)
  - name: og:description
    content: Les alias pnpm sont des alias qui vous permettent de simplifier l'utilisation de la commande pnpm. pnpm est une commande qui permet de gérer les paquets npm.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias pnpm

Le fichier `pnpm.aliases.zsh` crée des raccourcis utiles pour de nombreuses
commandes [pnpm](https://pnpm.io) couramment utilisées.

pnpm est une commande qui permet de gérer les paquets npm. pnpm est rapide et
utilise peu d'espace disque.

## Raccourcis pnpm

| Alias | Commande | Description |
| ----- | ----- | ----- |
  | pna | `pnpm add` | Installe un paquet |
  | pnad | `pnpm add --save-dev` | Installe un paquet en tant que dépendance de développement |
  | pnap | `pnpm add --save-peer` | Installe un paquet en tant que dépendance de pair |
  | pnau | `pnpm audit` | Exécute un audit de sécurité |
  | pnb | `pnpm run build` | Exécute la commande `build` |
  | pnc | `pnpm create` | Crée un nouveau projet |
  | pnd | `pnpm run dev` | Exécute la commande `dev` |
  | pndoc | `pnpm run doc` | Exécute la commande `doc` |
  | pnga | `pnpm add --global` | Installe un paquet en tant que paquet global |
  | pngls | `pnpm list --global` | Liste les paquets globaux |
  | pngrm | `pnpm remove --global` | Supprime un paquet global |
  | pngu | `pnpm update --global` | Met à jour un paquet global |
  | pnh | `pnpm help` | Affiche l'aide |
  | pni | `pnpm init` | Initialise un projet |
  | pnin | `pnpm install` | Installe les dépendances du projet |
  | pnln | `pnpm run lint` | Exécute la commande `lint` |
  | pnls | `pnpm list` | Liste les paquets locaux |
  | pnout | `pnpm outdated` | Liste les paquets obsolètes |
  | pnp | `pnpm` | Exécute la commande `pnpm` |
  | pnpub | `pnpm publish` | Publie le projet |
  | pnrm | `pnpm remove` | Supprime un paquet |
  | pnrun | `pnpm run` | Exécute une commande |
  | pns | `pnpm run serve` | Exécute la commande `serve` |
  | pnst | `pnpm start` | Exécute la commande `start` |
  | pnsv | `pnpm server` | Exécute la commande `server` |
  | pnt | `pnpm test` | Exécute la commande `test` |
  | pntc | `pnpm test --coverage` | Exécute la commande `test --coverage` |
  | pnui | `pnpm update --interactive` | Met à jour les paquets interactivement |
  | pnuil | `pnpm update --interactive --latest` | Met à jour les paquets interactivement vers la dernière version |
  | pnun | `pnpm uninstall` | Supprime un paquet |
  | pnup | `pnpm update` | Met à jour les paquets |
  | pnwhy | `pnpm why` | Affiche la raison pour laquelle un paquet est installé |
  | pnx | `pnpx` | Exécute la commande `pnpx` |
