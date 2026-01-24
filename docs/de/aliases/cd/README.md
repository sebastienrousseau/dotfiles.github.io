---
description: Die Change-Directory-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `cd` CLI-Tool erleichtern. Cd wechselt das aktuelle Verzeichnis.
lang: de-DE
metaTitle: Change-Directory-Aliase - Dotfiles (DE)
permalink: /de/aliases/cd/

meta:
  - name: keywords
    content: aliases, cd, chdir, change directory, directory, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die Change-Directory-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `cd` CLI-Tool erleichtern. Cd wechselt das aktuelle Verzeichnis.
  - name: twitter:description
    content: Die Change-Directory-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `cd` CLI-Tool erleichtern. Cd wechselt das aktuelle Verzeichnis.
  - name: twitter:title
    content: Change-Directory-Aliase - Dotfiles (DE)
  - name: og:title
    content: Change-Directory-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Change-Directory-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `cd` CLI-Tool erleichtern. Cd wechselt das aktuelle Verzeichnis.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Cd-Aliase

Cd-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `cd.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

---
## 🚀 Einfuehrung
Dieses Repository enthaelt robuste Shell-Aliase und Skripte, die deine
CLI-Erfahrung verbessern. Das erweiterte Navigationssystem bietet:
- **Intelligente Verzeichnis-Historie**
- **Persistentes Bookmark-System**
- **Projekt-Root-Erkennung**
- **Cross-Platform-Kompatibilitaet**
- **Dynamische Fehlerbehandlung**
- **Automatisches Verzeichnis-Listing**
- **Performance-Optimierung fuer grosse Verzeichnisse**
- **Erhoehte Sicherheit und Validierung**
---
## 🛠️ Features
### 🌟 Navigations-Kurzbefehle
| Alias           | Beschreibung                         |
|------------------|--------------------------------------|
| `-`             | Zum vorherigen Verzeichnis wechseln  |
| `..`, `...`     | Eine oder zwei Ebenen nach oben      |
| `....`, `.....` | Drei oder vier Ebenen nach oben      |
| `hom`           | Zum Home-Verzeichnis (`~`)           |
---
### 📂 Benutzerdefinierte Verzeichnisse
Schneller Zugriff auf haeufig genutzte Verzeichnisse:
| Alias | Verzeichnis-Pfad        | Beschreibung            |
|-------|--------------------------|------------------------|
| `app` | `${HOME}/Applications`  | Applications-Verz.     |
| `cod` | `${HOME}/Code`          | Code-Verzeichnis       |
| `dsk` | `${HOME}/Desktop`       | Desktop-Verzeichnis    |
| `doc` | `${HOME}/Documents`     | Documents-Verzeichnis  |
| `dot` | `${HOME}/.dotfiles`     | Dotfiles-Verzeichnis   |
| `dwn` | `${HOME}/Downloads`     | Downloads-Verzeichnis  |
| `mus` | `${HOME}/Music`         | Music-Verzeichnis      |
| `pic` | `${HOME}/Pictures`      | Pictures-Verzeichnis   |
| `vid` | `${HOME}/Videos`        | Videos-Verzeichnis     |
---
### 📌 Bookmark-System
Persistente Bookmarks fuer beliebige Verzeichnisse:
| Command             | Alias | Beschreibung                   |
|---------------------|-------|-------------------------------|
| `bookmark [name]`   | `bm`  | Bookmark erstellen            |
| `bookmark_list`     | `bml` | Alle Bookmarks auflisten      |
| `bookmark_update`   | `bmu` | Bookmark aktualisieren        |
| `bookmark_remove`   | `bmr` | Bookmark loeschen             |
| `goto <name>`       | `bmg` | Zum Bookmark wechseln         |
```bash
# Bookmark fuer aktuelles Verzeichnis
bm work-project
# Zum Bookmark wechseln
bmg work-project
# Alle Bookmarks anzeigen
bml
```
---
### 🕒 Verzeichnis-Historie
Zuletzt besuchte Verzeichnisse anzeigen und anspringen:
| Command      | Alias | Beschreibung                      |
|--------------|-------|----------------------------------|
| `dirhistory` | `dh`  | Historie anzeigen und navigieren |
| `lwd`        | `ld`  | Zum letzten Arbeitsverzeichnis   |
---
### 🏗️ Erweiterte Navigation
| Command          | Alias | Beschreibung                                 |
|------------------|-------|---------------------------------------------|
| `mkcd <dir>`     | `mcd` | Verzeichnis erstellen und direkt betreten   |
| `proj`           | `pr`  | Zum Projekt-Root wechseln (Git, npm, etc.)  |
| `pushd`          | `pd`  | Verzeichnis auf Stack legen                 |
| `popd`           |       | Verzeichnis vom Stack nehmen                |
| `dirs`           |       | Stack mit Indizes anzeigen                  |
---
### 🔧 Systemverzeichnisse
Schnell zu wichtigen Systemverzeichnissen wechseln:
| Alias | Verzeichnis-Pfad | Beschreibung                 |
|-------|-----------------|-----------------------------|
| `etc` | `/etc`          | Systemkonfiguration          |
| `var` | `/var`          | Variable Dateien             |
| `tmp` | `/tmp`          | Temporaere Dateien           |
| `usr` | `/usr`          | Benutzerprogramme            |
---
### ⚙️ Erweiterte Anpassung
- **Cross-Platform-Support**: macOS, Linux und andere Unix-Systeme
- **Konfigurierbare Optionen** via Umgebungsvariablen:
  ```bash
  # In .bashrc oder .zshrc
  export SHOW_HIDDEN_FILES=true        # Versteckte Dateien anzeigen
  export ENABLE_COLOR_OUTPUT=true      # Farbausgabe aktivieren
  export ENABLE_DIR_GROUPING=true      # Verzeichnisse zuerst
  export AUTO_LIST_AFTER_CD=true       # Listing nach Navigation
  export LARGE_DIR_THRESHOLD=1000      # Listing bei grossen Verzeichnissen auslassen
  export MAX_RECENT_DIRS=15            # Anzahl Historie-Eintraege
  export RESTORE_LAST_DIR=true         # Letztes Verzeichnis beim Start
  ```
- **Tab Completion** fuer Bookmarks und Befehle
- **Help-System**: `cdhelp`
- **Version**: `cdversion`
---
## 📦 Installation
1. **Repository klonen**:
```bash
git clone https://github.com/sebastienrousseau/dotfiles.git
```
2. **Skript in Shell-Konfiguration einbinden**:
```bash
echo 'source /path/to/dotfiles/cd.aliases.sh' >> ~/.bashrc
```
3. **Shell neu laden**:
```bash
source ~/.bashrc
```
---
## 🧑‍💻 Beispiele
```bash
# In ein Verzeichnis wechseln
cd ~/projects/website
# Verzeichnis erstellen und wechseln
mcd ~/projects/new-project
# Bookmark anlegen
bm website
# Bookmarks anzeigen
bml
# Zu Bookmark wechseln
bmg website
# Projekt-Root finden
pr
# Struktur erstellen und wechseln
mcd ~/projects/app/src/components
# Historie anzeigen
dh
# Zum letzten Verzeichnis
ld
# Verzeichnis auf Stack legen
pd ~/downloads
# Zurueck auf Stack
popd
# Version anzeigen
cdversion
# Hilfe anzeigen
cdhelp
```
---
## 🛡️ Security Features
Die erweiterte Version umfasst bessere Sicherheit und Validierung:
- **Verzeichnis-Validierung**: Existenz und Rechte vor Navigation pruefen
- **Bookmark-Validierung**: Schutz vor Injection durch Name-Checks
- **Sichere Dateioperationen**: Verhindert Korruption
- **Input Sanitation**: Eingaben werden validiert
---
## 📋 Performance-Optimierungen
- **Grosse Verzeichnisse**: Listing wird ausgelassen
- **Effiziente Bookmark-Speicherung**
- **Duplikatvermeidung** in der Historie
- **Optimierte Dateioperationen**
---
## 📚 Dokumentation
Fuer erweiterte Konfiguration und Beispiele `cdhelp` ausfuehren oder die
[offizielle Dokumentation](https://dotfiles.io) besuchen.
---
## 🛡️ License
Dieses Projekt ist unter der
[MIT License](https://opensource.org/licenses/MIT) lizenziert.
---
## 👨‍💻 Author
Created with ♥ by [Sebastien Rousseau](https://sebastienrousseau.com)
- Website: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
