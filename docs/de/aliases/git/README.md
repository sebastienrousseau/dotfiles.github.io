---
description: Die Git-Aliase bieten leistungsstarke Befehle, die Kurzbefehle fuer haeufig genutzte Git-Kommandos erstellen. Alle diese Funktionen und Aliase sind Wrapper um die Git-CLI. Git-Aliase verbessern Geschwindigkeit und Effizienz.
lang: de-DE
metaTitle: Die Git-Aliase - Dotfiles (DE)
permalink: /de/aliases/git/

meta:
  - name: keywords
    content: aliases, git, gitconfig, gitconfig, git, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Die Git-Aliase bieten leistungsstarke Befehle, die Kurzbefehle fuer haeufig genutzte Git-Kommandos erstellen. Alle diese Funktionen und Aliase sind Wrapper um die Git-CLI. Git-Aliase verbessern Geschwindigkeit und Effizienz.
  - name: twitter:description
    content: Die Git-Aliase bieten leistungsstarke Befehle, die Kurzbefehle fuer haeufig genutzte Git-Kommandos erstellen. Alle diese Funktionen und Aliase sind Wrapper um die Git-CLI. Git-Aliase verbessern Geschwindigkeit und Effizienz.
  - name: twitter:title
    content: Die Git-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die Git-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Git-Aliase bieten leistungsstarke Befehle, die Kurzbefehle fuer haeufig genutzte Git-Kommandos erstellen. Alle diese Funktionen und Aliase sind Wrapper um die Git-CLI. Git-Aliase verbessern Geschwindigkeit und Effizienz.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Git-Aliase

Git-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `git.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dies ist eine Sammlung praktischer Git-Aliase, die gaengige Git-Befehle vereinfachen und
beschleunigen.
- `gc` Commit-Befehl, der automatisch alle bekannten Dateien hinzufuegt.
- `gca` Die Spitze des aktuellen Branches aendern, statt einen neuen Commit zu erstellen.
- `gcall` Alle Aenderungen committen.
- `gcam` Die Spitze des aktuellen Branches aendern und die Nachricht bearbeiten.
- `gcane` Die Spitze des aktuellen Branches aendern und die Nachricht nicht bearbeiten.
- `gcint` Interaktiver Commit.
- `gcm` Commit mit Nachricht.
- `gd` Aenderungen zwischen Arbeitsbaum und Index oder einem Baum anzeigen.
- `gdch` Nur Namen und Status geaenderter Dateien anzeigen.
- `gdh` Alle Aenderungen verfolgter Dateien im Arbeitsverzeichnis und Staging anzeigen.
- `gdstaged` Aenderungen an Dateien im "staged" Bereich anzeigen.
- `gdcached` Aenderungen zwischen Index und HEAD anzeigen.
- `gdstat` Diffstat erzeugen.
- `glc` Log der Aenderungen, neueste zuerst.
- `gld` Log des letzten Tages anzeigen.
- `gldc` Datum des letzten Commits im strikten ISO 8601 Format anzeigen.
- `gldl` Logs mit Datum in lokaler Zeitzone anzeigen.
- `glf` Log neuer Commits nach Fetch mit Stats, ohne Merges.
- `glfd` Datum des fruehesten Commits im strikten ISO 8601 Format anzeigen.
- `glfh` Visualisierung der Branch-Topologie.
- `glg` Log als Graph anzeigen.
- `glh` Log der letzten Stunde anzeigen.
- `gll` Log im bevorzugten Format fuer KPIs anzeigen.
- `glll` Log im bevorzugten Format fuer KPIs, mit langen Eintraegen.
- `glm` Log des letzten Monats anzeigen.
- `glmy` Log meiner Commits nach eigener E-Mail.
- `glw` Log der letzten Woche anzeigen.
- `gly` Log des letzten Jahres anzeigen.
- `gclout` Aenderungen und ungetrackte Dateien verwerfen.
- `gco` Branch wechseln oder Arbeitsbaumdateien wiederherstellen.
- `gcb` Neuen Branch <new_branch> bei <start_point> erstellen.
- `gcode` Alle lokalen Branches loeschen, die in main gemergt wurden.
- `gcom` Lokalen Branch an main angleichen.
- `gpb` Aktuellen Branch pushen und Upstream setzen.
- `gpo` Lokale Aenderungen zum Remote pushen.
- `gpt` Lokale Tags pushen.
- `gpoll` Alle lokalen Branches pushen.
- `gpull` Von anderem Repository oder lokalem Branch fetchen und integrieren.
- `gpullm` Aenderungen von origin/master ziehen und mergen.
- `gpullo` Pull nur fuer einen Branch.
- `gpush` Remote-Refs mit Objekten aktualisieren.
- `gpusho` Push nur fuer einen Branch.
- `gpushr` Jeden Remote-Branch pushen.
- `gunpub` Aktuellen Branch remote loeschen.
- `gpcb` Aktuellen Branch pushen.
- `gr` Satz getrackter Repositories verwalten.
- `gra` Remote `name` fuer `url` hinzufuegen.
- `grall` Alle Branches zu allen Remotes pushen.
- `grallo` Alle Remotes ausser origin.
- `grao` Remote 'origin' anlegen, falls nicht vorhanden.
- `grbk` Zur Stage zurueckrollen.
- `grcl` Veraltete Remote-Tracking-Branches unter `name` loeschen.
- `grf` Git Remote Origin fuer jedes Unterverzeichnis anzeigen.
- `grfall` Alle Git-Remotes fuer ein Repo fetchen.
- `grp` Alle Remotes pushen.
- `grprint` URL des aktuellen Repos ausgeben.
- `grs` Informationen ueber Remote `name` anzeigen.
- `grso` Zeigen, wo origin liegt.
- `gru` Updates fuer ein benanntes Set von Remotes fetchen.
- `grv` URLs der Remotes anzeigen.
- `grev` Aenderungen bestehender Commits rueckgaengig machen.
- `grevnc` Revert ohne Autocommit.
- `gsm` Fremde Repos als Subverzeichnis einbetten.
- `gsmi` Submodules initialisieren.
- `gsma` Repo als Submodule hinzufuegen.
- `gsms` Submodule-URLs mit .gitmodules synchronisieren.
- `gsmu` Submodules auf erwarteten Stand aktualisieren.
- `gsmui` Submodule mit Initialisierung aktualisieren.
- `gsmuir` Submodule mit Initialisierung und rekursiv aktualisieren.
- `gst` Status anzeigen.
- `gsta` Aenderungen stashen.
- `gstrmu` Ungetrackte Dateien entfernen.
- `gsts` Status im Kurzformat.
- `gstsb` Kurzstatus inkl. Branch/Tracking.
- `gt` Alle Tags anzeigen.
- `gtg` Signierte Tags erstellen/listen/loeschen/pruefen.
- `gtl` Letzter Tag im aktuellen Branch.
- `gshow` Verschiedene Objektarten anzeigen.
- `gshf` Naechsten Parent-Branch finden.
- `gshls` Dateien anzeigen, die ein Commit geaendert hat.
- `gshnp` Git-Objekt kurz anzeigen.
- `gshwho` Beitraege pro Autor anzeigen.
- `grescl` Reset commit clean.
- `gresh` Reset commit hard.
- `gresp` Reset pristine.
- `gress` Reset commit.
- `gresu` Reset auf upstream.
- `gtp` Top-Level-Verzeichnisname.
- `grpa` Aktuellen Branchnamen.
- `gub` Upstream-Branchnamen.
- `grm` Dateien aus Arbeitsbaum und Index entfernen.
- `grmc` Nur aus dem Index entfernen.
- `grmd` Geloeschte Dateien entfernen.
- `grmd2` Geloeschte Dateien entfernen.
- `grmds` .DS_Store entfernen.
- `grmx` Alle geloeschten Dateien entfernen.
- `gblau` Zeilenbeitraege pro Autor anzeigen.
- `gconfdiff` Besseres Git diff, wortbasiert und farbig.
- `gconfl` Alle Einstellungen auflisten.
- `gconfr` Remote Origin aus lokalem Repo ausgeben.
- `undopush` Letzten Push rueckgaengig machen.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
