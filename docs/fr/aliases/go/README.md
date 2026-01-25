---
title: "Alias Go : simplifiez votre workflow Go"
description: "Alias shell pour le développement Go. Exécuter, compiler, tester et gérer les modules avec des raccourcis."
lang: fr-FR
metaTitle: "Alias Go | Dotfiles"
permalink: /aliases/go/
sidebar: true
meta:
  - name: keywords
    content: "alias go, raccourcis shell go, développement go, dotfiles, commandes golang"
---

# Alias Go

Simplifiez votre workflow Go avec des raccourcis shell intuitifs.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Aperçu

Ces alias sont définis dans `go.aliases.sh` et chargés automatiquement par chezmoi. Ils donnent un accès rapide aux commandes Go courantes pour exécuter, compiler, tester et gérer les modules.

## Référence

| Alias    | Commande       | Description                        |
|----------|---------------|------------------------------------|
| `go`     | `go`          | Raccourci Go                       |
| `gor`    | `go run`      | Exécuter un programme Go           |
| `gob`    | `go build`    | Compiler un paquet Go              |
| `got`    | `go test`     | Exécuter les tests Go              |
| `gomt`   | `go mod tidy` | Nettoyer les dépendances du module |
| `goget`  | `go get`      | Télécharger et installer des paquets Go |
