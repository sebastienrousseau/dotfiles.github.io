---
description: Shell-Aliase erstellen Verknüpfungen für häufig verwendete Befehle. Steigern Sie Ihre Produktivität durch weniger Tipparbeit.
lang: de-DE
metaTitle: Aliase - Dotfiles (DE)
permalink: /de/aliases/
sidebar: true

meta:
  - name: keywords
    content: aliase, shell, bash, zsh, verknüpfungen, befehle, dotfiles, chezmoi, produktivität, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-Aliase erstellen Verknüpfungen für häufig verwendete Befehle. Steigern Sie Ihre Produktivität durch weniger Tipparbeit.
  - name: twitter:title
    content: Aliase - Dotfiles
  - name: og:title
    content: Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase erstellen Verknüpfungen für häufig verwendete Befehle. Steigern Sie Ihre Produktivität durch weniger Tipparbeit.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Aliase

Modulare Shell-Aliase verwaltet von **Chezmoi**. Weniger tippen, mehr erreichen.

## Entdecken

Aliase sind in kleine, fokussierte Dateien organisiert — eine für jedes Tool oder jeden Workflow. Während `chezmoi apply` werden alle Alias-Dateien zu `~/.config/shell/aliases.sh` zusammengefasst und von Ihrer Shell geladen.

## Erste Schritte

### Alias hinzufügen

1. Erstellen Sie eine neue Datei (z.B. `mytool/mytool.aliases.sh`)
2. Definieren Sie Ihre Aliase:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Änderungen anwenden:
   ```bash
   chezmoi apply
   ```

## Referenz

Aliase nach Kategorie durchsuchen:

<!-- markdownlint-disable MD013-->

| Kategorie | Beschreibung |
| :--- | :--- |
| [AI](ai/) | KI-Assistenten und LLM-Tool-Verknüpfungen |
| [Archives](archives/) | Dateien komprimieren und entpacken |
| [CD](cd/) | Im Dateisystem navigieren |
| [Chmod](chmod/) | Dateiberechtigungen ändern |
| [Clear](clear/) | Terminalbildschirm löschen |
| [Compliance](compliance/) | SOC2- und Datenschutz-Tools |
| [Configuration](configuration/) | Dotfiles und Shell-Konfiguration verwalten |
| [Default](default/) | Standard-Shell-Aliase |
| [Diagnostics](diagnostics/) | Selbstheilung und Gesundheitsprüfungen |
| [Dig](dig/) | DNS-Server abfragen |
| [Disk Usage](disk-usage/) | Festplattennutzung anzeigen |
| [Docker](docker/) | Container-Verwaltung |
| [Editor](editor/) | Texteditoren konfigurieren |
| [Find](find/) | Dateien und Verzeichnisse suchen |
| [Fonts](fonts/) | Schriftarten-Cache-Verwaltung |
| [GCloud](gcloud/) | Google Cloud SDK-Tools |
| [Git](git/) | Git-Versionskontrolle |
| [GNU](gnu/) | GNU Core Utilities |
| [Go](go/) | Go-Sprachtools |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | Bootstrap und Bereitstellung |
| [Interactive](interactive/) | Interaktives Shell-Verhalten |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Lizenz-Scanning-Tools |
| [macOS](macOS/) | macOS-spezifische Einstellungen |
| [Make](make/) | GNU Make-Dienstprogramme |
| [Mkdir](mkdir/) | Verzeichnisse erstellen |
| [Modern](modern/) | Rust-basierte Tool-Ersetzungen |
| [NPM](npm/) | Node.js-Paketmanager |
| [Permission](permission/) | Dateiberechtigungen |
| [PNPM](pnpm/) | PNPM-Paketmanager |
| [PS](ps/) | Prozessstatus |
| [Python](python/) | Python-Dienstprogramme |
| [Rsync](rsync/) | Effiziente Dateiübertragung |
| [Rust](rust/) | Rust-Programmiertools |
| [Security](security/) | Unveränderlichkeit und Signierung |
| [Subversion](subversion/) | SVN-Versionskontrolle |
| [Sudo](sudo/) | Superuser-Operationen |
| [Terraform](terraform/) | Infrastructure as Code |
| [Tmux](tmux/) | Terminal-Multiplexer |
| [Update](update/) | Dotfiles aktualisieren |
| [UUID](uuid/) | UUIDs generieren |
| [Wget](wget/) | Kommandozeilen-Downloader |
| [Yarn](yarn/) | Yarn-Paketmanager |

<!-- markdownlint-enable MD013-->
