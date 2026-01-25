---
title: "Diagnostiek-aliassen: Systeemgezondheid en zelfherstel-commando's"
description: "Shell-aliassen voor systeemdiagnostiek, gezondheidscontroles, afwijkingsdetectie en zelfherstel in je dotfiles-omgeving."
lang: nl-NL
metaTitle: "Diagnostiek-aliassen | Dotfiles"
permalink: /nl/aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "diagnostiek aliassen, systeemgezondheidscontrole, dotfiles doctor, chezmoi verify, zelfherstellende shell"
---

# Diagnostiek-aliassen

Tools voor zelfherstel en systeemgezondheidscontroles.

## Overzicht

De diagnostiek-aliassen bieden commando's voor het bewaken van systeemgezondheid, het detecteren van configuratie-afwijkingen en het automatisch repareren van je dotfiles-omgeving. Deze hulpprogramma's integreren met chezmoi om ervoor te zorgen dat je lokale bestanden gesynchroniseerd blijven met je beheerde status.

## Referentie

### Gezondheid en reparatie

| Alias | Beschrijving |
|-------|-------------|
| `doc`, `dot-doctor` | Voer het systeemgezondheidscontrole-script uit (`doctor.sh`). |
| `drift`, `dot-drift` | Verifieer of lokale bestanden zijn afgeweken van de beheerde status (`chezmoi verify`). |
| `heal`, `dot-heal` | Pas de beheerde status toe om afwijkingen te repareren (`chezmoi apply`). |
| `doc-full` | Voer doctor uit met uitgebreide pad-debug-informatie. |
