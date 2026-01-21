---
description: Der dot-Befehl ist der zentrale Einstiegspunkt für die Verwaltung Ihrer Dotfiles, das Lernen von Funktionen und die Überprüfung der Systemgesundheit.
lang: de-DE
metaTitle: Der dot Befehl - Dotfiles (DE)
permalink: /de/aliases/dot/
---

# Der `dot` Befehl

Der `dot`-Befehl ist die neue, vereinheitlichte Schnittstelle für die Interaktion mit Ihren Dotfiles. Er kapselt `chezmoi` und andere Dienstprogramme, um ein nahtloses Erlebnis zu bieten.

## Verwendung

```bash
dot [command]
```

## Befehle

| Befehl       | Beschreibung                                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **Interaktiver Modus**: Startet eine Tour durch die Modern Core Tools (Atuin, Yazi, Zellij) und KI-Funktionen.                   |
| `dot doctor` | **Gesundheitscheck**: Überprüft, ob Ihr System korrekt konfiguriert ist und alle Abhängigkeiten installiert sind. (Kapselt `chezmoi doctor`) |
| `dot update` | **System aktualisieren**: Lädt die neuesten Änderungen aus dem Repository und wendet sie erneut an. (Kapselt `chezmoi update`)    |
| `dot help`   | **Hilfe**: Zeigt Informationen zur Verwendung an.                                                                                |

## Beispiele

### Interaktives Lernen

Starten Sie die geführte Tour, um neue Tastenbelegungen zu lernen:

```bash
dot learn
```

### Systemüberprüfung

Überprüfen Sie, ob alles reibungslos läuft:

```bash
dot doctor
```
