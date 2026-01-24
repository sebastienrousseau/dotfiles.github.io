---
description: Die Chmod-Aliase erlauben das Aendern von Berechtigungen (Zugriffsmodus) fuer Dateien und Verzeichnisse.
lang: de-DE
metaTitle: Chmod-Aliase - Dotfiles (DE)
permalink: /de/aliases/chmod/
meta:
  - name: twitter:card
    content: Die Chmod-Aliase erlauben das Aendern von Berechtigungen (Zugriffsmodus) fuer Dateien und Verzeichnisse.
  - name: twitter:description
    content: Die Chmod-Aliase erlauben das Aendern von Berechtigungen (Zugriffsmodus) fuer Dateien und Verzeichnisse.
  - name: twitter:title
    content: Chmod-Aliase - Dotfiles (DE)
  - name: og:title
    content: Chmod-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Chmod-Aliase erlauben das Aendern von Berechtigungen (Zugriffsmodus) fuer Dateien und Verzeichnisse.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Chmod-Aliase

Chmod-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `chmod.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

---
## 🚀 Einfuehrung
Dieses Skript bietet erweiterte Kurzbefehle und Funktionen fuer den
`chmod`-Befehl, um Berechtigungen einfacher zu verwalten.
Mit Features wie Eingabevalidierung, rekursiver Bestaetigung und benutzerfreundlichen
Aliasen kannst du Berechtigungen effizient anpassen.
---
## 🛠️ Features
Schnelles Anwenden gaengiger Berechtigungen mit vordefinierten Aliasen:
| Alias        | Berechtigungen | Beschreibung                            |
|--------------|----------------|----------------------------------------|
| `chmod_000`  | `----------`   | Keine Berechtigungen fuer niemanden    |
| `chmod_400`  | `r--------`    | Nur Lesen fuer den Besitzer            |
| `chmod_444`  | `r--r--r--`    | Nur Lesen fuer alle                    |
| `chmod_600`  | `rw-------`    | Lesen/Schreiben fuer den Besitzer      |
| `chmod_644`  | `rw-r--r--`    | Lesen/Schreiben Besitzer, Lesen andere |
| `chmod_666`  | `rw-rw-rw-`    | Lesen/Schreiben fuer alle              |
| `chmod_755`  | `rwxr-xr-x`    | Voll fuer Besitzer, Lesen/Ausf. andere |
| `chmod_764`  | `rwxrw-r--`    | Voll Besitzer, Lesen/Schreiben Gruppe  |
| `chmod_777`  | `rwxrwxrwx`    | Volle Berechtigungen fuer alle         |
---
### 🔧 Rekursive Bestaetigung
Die Funktion `change_permission` kann Berechtigungen rekursiv anwenden
und zeigt vorab eine Bestaetigung samt Anzahl betroffener Elemente:
```bash
change_permission 755 /path/to/directory -R
```
---
### 📂 Kurzbefehle fuer User/Group/Others
Feintuning fuer Besitzer, Gruppe und andere:
| Alias         | Beschreibung                               |
|---------------|-------------------------------------------|
| `chmod_u+x`   | Ausfuehrrecht fuer Besitzer hinzufuegen   |
| `chmod_u-x`   | Ausfuehrrecht fuer Besitzer entfernen     |
| `chmod_u+w`   | Schreibrecht fuer Besitzer hinzufuegen    |
| `chmod_u-w`   | Schreibrecht fuer Besitzer entfernen      |
| `chmod_u+r`   | Leserecht fuer Besitzer hinzufuegen       |
| `chmod_u-r`   | Leserecht fuer Besitzer entfernen         |
| `chmod_g+x`   | Ausfuehrrecht fuer Gruppe hinzufuegen     |
| `chmod_g-x`   | Ausfuehrrecht fuer Gruppe entfernen       |
| `chmod_g+w`   | Schreibrecht fuer Gruppe hinzufuegen      |
| `chmod_g-w`   | Schreibrecht fuer Gruppe entfernen        |
| `chmod_g+r`   | Leserecht fuer Gruppe hinzufuegen         |
| `chmod_g-r`   | Leserecht fuer Gruppe entfernen           |
| `chmod_o+x`   | Ausfuehrrecht fuer andere hinzufuegen     |
| `chmod_o-x`   | Ausfuehrrecht fuer andere entfernen       |
| `chmod_o+w`   | Schreibrecht fuer andere hinzufuegen      |
| `chmod_o-w`   | Schreibrecht fuer andere entfernen        |
| `chmod_o+r`   | Leserecht fuer andere hinzufuegen         |
| `chmod_o-r`   | Leserecht fuer andere entfernen           |
---
Berechtigungen fuer bestimmte Dateitypen setzen:
| Alias        | Beschreibung                                       |
|--------------|---------------------------------------------------|
| `chmod_755d` | Berechtigungen aller Verzeichnisse auf `rwxr-xr-x` |
| `chmod_644f` | Berechtigungen aller Dateien auf `rw-r--r--`       |
---
## 📦 Installation
1. Repository klonen:
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git
   ```
2. Skript in die Shell-Konfiguration einbinden:
   ```bash
   echo 'source /path/to/dotfiles/chmod.sh' >> ~/.bashrc
   ```
3. Shell neu laden:
   ```bash
   source ~/.bashrc
   ```
---
## 🧑‍💻 Nutzung
Beispiele fuer die Nutzung der `chmod`-Aliase und Funktionen:
- Gaengige Berechtigungen setzen:
  ```bash
  chmod_644 /path/to/file
  chmod_755 /path/to/directory
  ```
- Berechtigungen fuer User/Group/Others anpassen:
  ```bash
  chmod_u+x /path/to/script
  chmod_g-w /path/to/file
  chmod_o+r /path/to/file
  ```
- Rekursive Berechtigungen mit Bestaetigung setzen:
  ```bash
  change_permission 755 /path/to/directory -R
  ```
---
## 🛡️ Lizenz
Dieses Projekt ist unter der
[MIT License](https://opensource.org/licenses/MIT) lizenziert. Siehe `LICENSE` fuer
weitere Informationen.
---
## 👨‍💻 Autor
Erstellt mit ♥ von [Sebastien Rousseau](https://sebastienrousseau.com)
- Website: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
