---
description: Les alias PS sont une collection d'alias permettant d'interagir avec l'outil `ps`. Ps rapporte un instantané des processus en cours.
lang: fr-FR
metaTitle: Les alias PS - Dotfiles (FR)
permalink: /alias/ps/

meta:
  - name: keywords
    content: alias, ps, processus, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Les alias PS sont une collection d'alias permettant d'interagir avec l'outil `ps`. Ps rapporte un instantané des processus en cours.
  - name: twitter:description
    content: Les alias PS sont une collection d'alias permettant d'interagir avec l'outil `ps`. Ps rapporte un instantané des processus en cours.
  - name: twitter:title
    content: Les alias PS - Dotfiles (FR)
  - name: og:title
    content: Les alias PS - Dotfiles (FR)
  - name: og:description
    content: Les alias PS sont une collection d'alias permettant d'interagir avec l'outil `ps`. Ps rapporte un instantané des processus en cours.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias Ps

Gérer les alias Ps. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `ps.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce code fournit un ensemble d'alias pour
[ps](https://www.gnu.org/software/ps/).
- `pid` Afficher l'uid, le pid, le pid parent, l'usage CPU récent, l'heure de démarrage,
  le tty de contrôle, l'usage CPU écoulé, et la commande associée.
- `ps` Afficher tous les processus.
- `psa` Lister tous les processus.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
