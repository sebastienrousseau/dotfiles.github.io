---
description: Alias de sécurité pour l’immutabilité des fichiers et la protection de configuration. Verrouillez et déverrouillez les fichiers critiques.
lang: fr-FR
metaTitle: Aliases Security - Dotfiles (FR)
permalink: /aliases/security/
sidebar: true

meta:
  - name: keywords
    content: sécurité, immutabilité, verrouillage fichiers, alias shell, dotfiles, protection configuration
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de sécurité pour l’immutabilité des fichiers et la protection de configuration. Verrouillez et déverrouillez les fichiers critiques.
  - name: twitter:title
    content: Aliases Security - Dotfiles
  - name: og:title
    content: Aliases Security - Dotfiles
  - name: og:description
    content: Alias de sécurité pour l’immutabilité des fichiers et la protection de configuration. Verrouillez et déverrouillez les fichiers critiques.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Security

Protégez les fichiers de configuration critiques avec des contrôles d’immutabilité.

## Aperçu

Ces alias sont définis dans `security.aliases.sh` et chargés automatiquement par Chezmoi.

## Référence

### Immutabilité

| Alias | Description |
|:---|:---|
| `lock-configs` | Verrouiller les fichiers critiques pour empêcher les modifications |
| `unlock-configs` | Déverrouiller les fichiers critiques pour l’édition |
| `check-locks` | Vérifier le statut de verrouillage des fichiers critiques |
