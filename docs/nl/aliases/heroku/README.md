---
title: "Heroku-aliassen: Shell-snelkoppelingen voor de Heroku CLI"
description: "Versnel Heroku-workflows met 200+ shell-aliassen voor apps, databases, pipelines en deployments."
lang: nl-NL
metaTitle: Heroku-aliassen | Dotfiles
permalink: /nl/aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: heroku aliassen, heroku cli snelkoppelingen, heroku shell commando's, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Heroku-aliassen | Dotfiles
  - name: twitter:description
    content: Versnel Heroku-workflows met 200+ shell-aliassen voor apps, databases, pipelines en deployments.
  - name: og:title
    content: Heroku-aliassen | Dotfiles
  - name: og:description
    content: Versnel Heroku-workflows met 200+ shell-aliassen voor apps, databases, pipelines en deployments.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Heroku-aliassen

Shell-snelkoppelingen voor de Heroku CLI, gedefinieerd in `heroku.aliases.sh` en automatisch geladen door chezmoi.

## Overzicht

Deze collectie biedt meer dan 200 aliassen voor de [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), inclusief app-beheer, add-ons, databases, pipelines, containers en meer.

## Referentie

### Algemene commando's

| Alias | Beschrijving |
|-------|-------------|
| `hkk` | Heroku CLI commando-snelkoppeling |
| `hka` | Voeg nieuwe gebruikers toe aan je app |
| `hkh` | Toon help voor Heroku |
| `hkl` | Toon alle commando's |
| `hklg` | Toon recente log-uitvoer |
| `hks` | Toon huidige status van het Heroku-platform |
| `hku` | Werk de Heroku CLI bij |

### Apps

| Alias | Beschrijving |
|-------|-------------|
| `hkapc` | Maak een nieuwe app |
| `hkape` | Bekijk app-fouten |
| `hkapi` | Toon gedetailleerde app-informatie |
| `hkapk` | Verwijder een app permanent |
| `hkapl` | Toon je apps |
| `hkapo` | Open de app in een webbrowser |
| `hkapr` | Hernoem een app |

### Configuratievariabelen

| Alias | Beschrijving |
|-------|-------------|
| `hkcfe` | Bewerk config vars interactief |
| `hkcfg` | Toon een enkele config-waarde voor een app |
| `hkcfs` | Stel een of meer config vars in |
| `hkcfu` | Verwijder een of meer config vars |
| `hkcfv` | Toon de config vars voor een app |

### PostgreSQL

| Alias | Beschrijving |
|-------|-------------|
| `hkpg` | Toon database-informatie |
| `hkpgbk` | Toon database-backups |
| `hkpgbkc` | Maak een nieuwe backup |
| `hkpgbkr` | Herstel een backup naar een database |
| `hkpgpsql` | Open een psql-shell naar de database |

### Pipelines

| Alias | Beschrijving |
|-------|-------------|
| `hkpipe` | Toon pipelines waar je toegang toe hebt |
| `hkpipea` | Voeg deze app toe aan een pipeline |
| `hkpipec` | Maak een nieuwe pipeline |
| `hkpipep` | Promoot de laatste release naar downstream app(s) |

### Releases

| Alias | Beschrijving |
|-------|-------------|
| `hkrel` | Toon de releases voor een app |
| `hkreli` | Bekijk gedetailleerde informatie voor een release |
| `hkrelr` | Rollback naar een vorige release |
