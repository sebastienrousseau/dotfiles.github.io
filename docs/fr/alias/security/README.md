---
description: alias de sécurité pour Dotfiles
lang: fr-FR
metaTitle: Alias de sécurité - Dotfiles (FR)
permalink: /aliases/security/
---
# Alias de sécurité

Outils pour durcir l'environnement et gérer l'immutabilité de la configuration.

## 🔒 Immutabilité

| Alias | Description |
|-------|-------------|
| `lock-configs` | Verrouille les fichiers critiques (`.zshrc`, etc.) pour empêcher les modifications (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Déverrouille les fichiers critiques pour l'édition. |
| `check-locks` | Vérifie l'état de verrouillage des fichiers critiques. |

## 🔑 Signature Git

(Voir [Alias Git](../git/README.md) pour la configuration de signature)
