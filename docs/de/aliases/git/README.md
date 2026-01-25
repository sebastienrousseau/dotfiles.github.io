---
description: Ueber 80 Git-Shell-Aliase fuer schnellere Commits, Branches, Diffs und Remotes. Beschleunigen Sie Ihre taeglichen Versionskontrollaufgaben.
lang: de-DE
metaTitle: Git Aliase - Dotfiles (DE)
permalink: /de/aliases/git/
sidebar: true

meta:
  - name: keywords
    content: git aliase, git verknuepfungen, git dotfiles, git commit alias, git branch alias, git push alias, shell, bash, zsh, linux, macos
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Ueber 80 Git-Shell-Aliase fuer schnellere Commits, Branches, Diffs und Remotes.
  - name: twitter:title
    content: Git Aliase - Dotfiles
  - name: og:title
    content: Git Aliase - Dotfiles
  - name: og:description
    content: Ueber 80 Git-Shell-Aliase fuer schnellere Commits, Branches, Diffs und Remotes.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Git Aliase

Optimieren Sie Ihren Versionskontroll-Workflow mit leistungsstarken Verknuepfungen.

## Uebersicht

Git-Aliase erstellen Verknuepfungen fuer haeufig verwendete Git-Befehle. Als Teil der [Dotfiles](https://github.com/sebastienrousseau/dotfiles)-Konfiguration werden diese Aliase automatisch ueber Chezmoi geladen.

In `git.aliases.sh` und `signing.aliases.sh` definiert, sind die Aliase in jeder Bash- oder Zsh-Sitzung nach der Installation verfuegbar.

## Referenz

### Kern

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `g` | `git` | Kurzform fuer git |
| `gtp` | `git rev-parse --show-toplevel` | Oberstes Verzeichnis des Repositories ausgeben |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Aktuellen Branch-Namen ausgeben |
| `gconfl` | `git config --list` | Alle Git-Konfigurationseinstellungen auflisten |
| `gconfr` | `git config --local --get remote.origin.url` | Remote-Origin-URL ausgeben |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Farbwort-Diff-Alias konfigurieren |

### Arbeitsbereich

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `ga` | `git add` | Dateien stagen |
| `gaa` | `git add --all` | Alle Aenderungen stagen (verfolgt und unverfolgt) |
| `gad` | `git add .` | Alles im aktuellen Verzeichnis stagen |
| `gau` | `git add --update` | Aenderungen und Loeschungen stagen (keine neuen Dateien) |
| `gcl` | `git clone` | Repository klonen |
| `gin` | `git init` | Neues Git-Repository initialisieren |
| `gco` | `git checkout` | Branches wechseln oder Arbeitsdateien wiederherstellen |
| `gcb` | `git checkout -b` | Neuen Branch erstellen und wechseln |
| `gdis` | `git checkout --` | Aenderungen im Arbeitsverzeichnis verwerfen |
| `grs` | `git restore` | Arbeitsdateien wiederherstellen |
| `gmv` | `git mv` | Datei verschieben oder umbenennen |
| `grm` | `git rm` | Dateien aus Arbeitsbaum und Index entfernen |
| `grmc` | `git rm --cached` | Datei entstagen (auf Festplatte behalten) |
| `gst` | `git status` | Status des Arbeitsbaums anzeigen |
| `gsts` | `git status --short` | Status im Kurzformat |
| `gstsb` | `git status --short --branch` | Kurzstatus mit Branch- und Tracking-Info |
| `gsta` | `git stash save` | Aktuelle Aenderungen stashen |
| `gstp` | `git stash pop` | Neuesten Stash anwenden und entfernen |
| `gstd` | `git stash drop` | Neuesten Stash-Eintrag loeschen |
| `gclout` | `git clean -df && git checkout -- .` | Alle Aenderungen und unverfolgte Dateien verwerfen |

### Commits

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `gc` | `git commit -a` | Alle verfolgten Aenderungen committen |
| `gca` | `git commit --amend` | Letzten Commit aendern |
| `gcall` | `git add -A && git commit -av` | Alles stagen und ausfuehrlich committen |
| `gcam` | `git commit --amend --message` | Commit mit neuer Nachricht aendern |
| `gcane` | `git commit --amend --no-edit` | Commit ohne Aenderung der Nachricht aendern |
| `gcm` | `git commit --message` | Commit mit Inline-Nachricht |

### Diff und Historie

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `gd` | `git diff` | Ungestagete Aenderungen anzeigen |
| `gdch` | `git diff --name-status` | Namen und Status geaenderter Dateien anzeigen |
| `gdh` | `git diff HEAD` | Alle Aenderungen seit letztem Commit anzeigen |
| `gdstaged` | `git diff --staged` | Gestagete Aenderungen anzeigen |
| `gdcached` | `git diff --cached` | Aenderungen zwischen Index und HEAD anzeigen |
| `gdstat` | `git diff --stat --ignore-space-change -r` | Diffstat ohne Leerzeichenaenderungen generieren |
| `gl` | `git log --since="last month" --oneline` | Einzeiliges Log des letzten Monats |
| `glg` | `git log --graph --all --oneline --decorate` | Graph-Log aller Branches |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | Vollstaendiges Graph-Log mit Farbe |
| `glc` | `git log --oneline --reverse` | Chronologisches einzeiliges Log |
| `gld` | `git log --since=1-day-ago` | Log der letzten 24 Stunden |
| `gldc` | `git log -1 --date-order --format=%cI` | ISO 8601-Datum des letzten Commits |
| `gldl` | `git log --date=local` | Log mit Daten in lokaler Zeitzone |
| `glf` | `git log ORIG_HEAD.. --stat --no-merges` | Neue Commits nach Fetch (ohne Merges) |
| `gll` | *(dekoriertes Graph-Format)* | Detailliertes Graph-Log mit Autor und GPG-Status |

### Branches

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `gb` | `git branch` | Lokale Branches auflisten |
| `gbd` | `git branch -d` | Gemergten Branch loeschen |
| `gbl` | `git branch -l` | Branches nach Muster auflisten |
| `gbr` | `git branch -r` | Remote-Branches auflisten |
| `gbrd` | `git branch -d -r` | Remote-Tracking-Branch loeschen |
| `gbrsb` | `git show-branch` | Branches und ihre Commits anzeigen |
| `gswb` | `git switch` | Branches wechseln (modern) |
| `gcode` | `git checkout main && git branch --merged \| xargs git branch --delete` | Alle in main gemergten Branches loeschen |
| `gcom` | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Lokalen main auf Remote zuruecksetzen |

### Remotes und Push/Pull

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `gf` | `git fetch` | Von Remote fetchen |
| `gp` | `git pull` | Von Remote pullen |
| `gph` | `git push` | Zu Remote pushen |
| `gpo` | `git push origin` | Zu origin pushen |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Pushen und Upstream fuer aktuellen Branch setzen |
| `gpoll` | `git push origin --all` | Alle Branches zu origin pushen |
| `gpull` | `git pull` | Von Remote pullen |
| `gpush` | `git push` | Zu Remote pushen |
| `gr` | `git remote` | Remotes verwalten |
| `gra` | `git remote add` | Neuen Remote hinzufuegen |
| `grall` | `git remote \| xargs -L1 git push --all` | Alle Branches zu allen Remotes pushen |
| `grao` | `git remote add origin` | Origin-Remote hinzufuegen |
| `grv` | `git remote -v` | Remote-URLs anzeigen |

### Revert und Reset

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `grev` | `git revert` | Commit rueckgaengig machen |
| `grevnc` | `git revert --no-commit` | Ohne Auto-Commit rueckgaengig machen |
| `grb` | `git rebase` | Aktuellen Branch rebasen |
| `grbk` | `git reset --soft HEAD^` | Letzten Commit rueckgaengig, Aenderungen gestaget behalten |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | Hard-Reset und unverfolgte Dateien bereinigen |
| `gresh` | `git reset --hard HEAD~1` | Hard-Reset zum vorherigen Commit |
| `gresp` | `git reset --hard && git clean -ffdx` | Alles auf urspruenglichen Zustand zuruecksetzen |
| `gress` | `git reset --soft HEAD~1` | Soft-Reset (Aenderungen gestaget behalten) |

### Submodule

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `gsm` | `git submodule` | Submodule verwalten |
| `gsmi` | `git submodule init` | Submodule initialisieren |
| `gsma` | `git submodule add` | Submodul hinzufuegen |
| `gsms` | `git submodule sync` | Submodul-URLs mit .gitmodules synchronisieren |
| `gsmu` | `git submodule update` | Submodule aktualisieren |
| `gsmui` | `git submodule update --init` | Submodule aktualisieren und initialisieren |
| `gsmuir` | `git submodule update --init --recursive` | Submodule aktualisieren, initialisieren und rekursiv |

### Werkzeuge

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `gg` | `git grep` | Repository-Inhalte durchsuchen |
| `gbs` | `git bisect` | Binaersuche fuer fehlerverursachenden Commit |
| `undopush` | `git push -f origin HEAD^:master` | Letzten Push zu master erzwungen rueckgaengig machen |

### Signierung und Sicherheit

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `enable-signing` | *(interaktiver Assistent)* | GPG- oder SSH-Commit-Signierung konfigurieren |
| `verify-signatures` | `git log --show-signature -n 10` | Signaturen der letzten 10 Commits verifizieren |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Aktuelle Signierungskonfiguration pruefen |
