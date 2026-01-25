---
title: "Alias Diagnostics : santé système et auto-réparation"
description: "Alias shell pour diagnostics système, contrôle de santé, détection de dérive et auto-réparation."
lang: fr-FR
metaTitle: "Alias Diagnostics | Dotfiles"
permalink: /aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "alias diagnostics, contrôle santé système, dotfiles doctor, chezmoi verify, auto-réparation shell"
---

# Alias Diagnostics

Outils d’auto-réparation et de contrôle de santé du système.

## Aperçu

Les alias diagnostics fournissent des commandes pour surveiller l’état du système, détecter les dérives de configuration et réparer automatiquement l’environnement dotfiles. Ces utilitaires s’intègrent à chezmoi pour garantir la cohérence entre l’état local et l’état géré.

## Référence

### Santé et réparation

| Alias | Description |
|-------|-------------|
| `doc`, `dot-doctor` | Exécuter le script de contrôle de santé (`doctor.sh`). |
| `drift`, `dot-drift` | Vérifier la dérive des fichiers locaux (`chezmoi verify`). |
| `heal`, `dot-heal` | Appliquer l’état géré pour réparer la dérive (`chezmoi apply`). |
| `doc-full` | Exécuter doctor avec informations de débogage étendues. |
