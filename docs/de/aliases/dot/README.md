---
description: Der dot-Befehl ist der einheitliche Einstiegspunkt, um Dotfiles zu verwalten, Funktionen zu lernen und die Systemgesundheit zu pruefen.
lang: de-DE
metaTitle: Der dot-Befehl - Dotfiles (DE)
permalink: /de/aliases/dot/

meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# Der `dot` Befehl

Der `dot` Befehl ist die neue, einheitliche Schnittstelle fuer deine Dotfiles. Er kapselt `chezmoi`
und weitere Tools fuer eine nahtlose Erfahrung.

## Nutzung

```bash
dot [command]
```

## Befehle

| Command      | Description                                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **Interaktiver Modus**: Startet eine Tour der Modern-Core-Tools (Atuin, Yazi, Zellij) und AI-Features.                           |
| `dot doctor` | **Health Check**: Prueft, ob System und Abhaengigkeiten korrekt konfiguriert sind. (Wrapper fuer `chezmoi doctor`)               |
| `dot update` | **Update System**: Holt die neuesten Aenderungen und wendet sie erneut an. (Wrapper fuer `chezmoi update`)                       |
| `dot help`   | **Hilfe**: Zeigt die Nutzung an.                                                                                                |

## Beispiele

### Interaktives Lernen

Starte die gefuehrte Tour fuer neue Keybindings:

```bash
dot learn
```

### Systempruefung

Pruefen, ob alles korrekt laeuft:

```bash
dot doctor
```
