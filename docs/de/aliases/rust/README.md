---
description: Die Rust-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit den Befehlen `rustup` und `cargo` erleichtern. Sie sind fuer den Toolchain-Manager `rustup` und den Paketmanager `cargo` gedacht.
lang: de-DE
metaTitle: Die Rust-Aliase - Dotfiles (DE)
permalink: /de/aliases/rust/

meta:
  - name: keywords
    content: aliases, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die Rust-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit den Befehlen `rustup` und `cargo` erleichtern. Sie sind fuer den Toolchain-Manager `rustup` und den Paketmanager `cargo` gedacht.
  - name: twitter:description
    content: Die Rust-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit den Befehlen `rustup` und `cargo` erleichtern. Sie sind fuer den Toolchain-Manager `rustup` und den Paketmanager `cargo` gedacht.
  - name: twitter:title
    content: Die Rust-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die Rust-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Rust-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit den Befehlen `rustup` und `cargo` erleichtern. Sie sind fuer den Toolchain-Manager `rustup` und den Paketmanager `cargo` gedacht.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Rust-Aliase

Rust-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `rust.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet einen umfassenden Satz von Aliasen fuer die Rust-Entwicklung
mit `cargo` und `rustup`.
#### Grundlegende Befehle
- `cg` - Cargo-Kurzbefehl
- `cgn` - Neues Binary-Projekt erstellen
- `cgni` - Neues Library-Projekt erstellen
- `cginit` - Projekt im aktuellen Verzeichnis initialisieren
#### Build und Run
- `cgb` - Debug-Build
- `cgbr` - Release-Build
- `cgr` - Debug ausfuehren
- `cgrr` - Release ausfuehren
- `cgw` - Beobachten und neu bauen
#### Tests und Benchmarks
- `cgt` - Tests ausfuehren
- `cgtr` - Tests im Release-Modus
- `cgbh` - Benchmarks ausfuehren
- `cgta` - Alle Targets testen
- `cgtt` - Single-threaded Tests
#### Code-Qualitaet
- `cgc` - Compilation pruefen
- `cgcl` - Build-Artefakte bereinigen
- `cgcy` - Clippy-Lints ausfuehren
- `cgf` - Code formatieren
- `cgfa` - Gesamten Code formatieren
- `cgfx` - Code-Probleme automatisch beheben
- `cgaud` - Sicherheitsluecken pruefen
#### Dokumentation
- `cgd` - Dokumentation bauen und oeffnen
- `cgdr` - Release-Dokumentation bauen
- `cgdo` - Private Items dokumentieren
#### Abhaengigkeiten
- `cga` - Abhaengigkeit hinzufuegen
- `cgad` - Dev-Abhaengigkeit hinzufuegen
- `cgu` - Abhaengigkeiten aktualisieren
- `cgo` - Veraltete Abhaengigkeiten pruefen
- `cgv` - Abhaengigkeiten vendorn
- `cgtree` - Abhaengigkeitsbaum anzeigen
#### Cross-Compilation
- `cgx` - Mit Zig bauen
- `cgxw` - Cross-Compilation
- `cgxt` - Plattform-spezifisches Target
#### Analyse und Profiling
- `cgfl` - Flamegraph erzeugen
- `cgbl` - Binary-Groessenanalyse
- `cgl` - Code-Coverage
- `cgm` - Modulstruktur
- `cgex` - Makros expandieren
#### Paketverwaltung
- `cgi` - Binary installieren
- `cgun` - Binary deinstallieren
- `cgp` - Auf crates.io veroeffentlichen
- `cgs` - crates.io durchsuchen
- `cgcp` - Release-Paket erstellen
#### Advanced Build
- `cgba` - Alle Targets bauen
- `cgbt` - Mit allen Features bauen
- `cgbp` - Mit spezifischem Profil bauen
#### Projektvorlagen
- `cgnb` - Neues Binary aus Vorlage
- `cgnl` - Neue Library aus Vorlage
- `cgnt` - Neues aus eigener Vorlage
#### Updates und Installation
- `ru` - Alle Toolchains aktualisieren
- `rus` - Stable-Toolchain aktualisieren
- `run` - Nightly-Toolchain aktualisieren
- `rti` - Bestimmte Toolchain installieren
#### Komponentenverwaltung
- `rca` - Komponente hinzufuegen
- `rcl` - Komponenten auflisten
- `rcr` - Komponente entfernen
#### Toolchain-Verwaltung
- `rtl` - Installierte Toolchains auflisten
- `rtu` - Toolchain deinstallieren
- `rde` - Standard-Toolchain setzen
#### Target-Verwaltung
- `rtaa` - Compile-Target hinzufuegen
- `rtal` - Verfuegbare Targets auflisten
- `rtar` - Compile-Target entfernen
#### Environment Running
- `rns` - Befehl mit stable ausfuehren
- `rnn` - Befehl mit nightly ausfuehren
#### Dokumentation und Hilfe
- `rdo` - Rust-Dokumentation oeffnen
#### Override-Verwaltung
- `rpr` - Toolchain fuer Verzeichnis setzen
- `rpl` - Verzeichnis-Overrides auflisten
- `rpn` - Verzeichnis-Override entfernen
#### Toolchain-Info
- `rws` - Aktiven rustc-Pfad anzeigen
- `rsh` - Toolchain-Infos anzeigen
### Haefige Workflows
#### Neues Projekt
```bash
# Neues Projekt mit gängigen Abhaengigkeiten erstellen
cgn myproject && cd myproject && cga serde && cgad tokio
```
#### Release-Workflow
```bash
# Pruefen, testen und Release bauen
cgcy && cgt && cgbr && cgaud
```
#### Doku-Update
```bash
# Code formatieren und Doku aktualisieren
cgfa && cgd && cgdo
```
#### Cross-Compilation Check
```bash
# Build fuer andere Architektur pruefen
cgxw check --target aarch64-unknown-linux-gnu
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
