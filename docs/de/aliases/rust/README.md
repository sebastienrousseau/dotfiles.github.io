---
description: Umfassende Rust-Shell-Aliase fuer Cargo und Rustup. Bauen, testen, dokumentieren und Toolchains verwalten.
lang: de-DE
metaTitle: Rust Aliase - Dotfiles (DE)
permalink: /de/aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust aliase, cargo aliase, rustup aliase, rust entwicklung, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Rust Aliase - Dotfiles
  - name: twitter:description
    content: Umfassende Rust-Shell-Aliase fuer Cargo und Rustup. Bauen, testen und Toolchains verwalten.
  - name: og:title
    content: Rust Aliase - Dotfiles
  - name: og:description
    content: Umfassende Rust-Shell-Aliase fuer Cargo und Rustup. Bauen, testen und Toolchains verwalten.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Rust Aliase

Beschleunigen Sie Ihre Rust-Entwicklung mit umfassenden Cargo- und Rustup-Verknuepfungen.

## Uebersicht

Diese Aliase sind in `rust.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf Cargo-Build-Befehle, Tests, Dokumentation und Rustup-Toolchain-Verwaltung.

## Referenz

### Grundlegende Befehle

| Alias | Beschreibung |
|:---|:---|
| `cg` | Cargo-Verknuepfung |
| `cgn` | Neues Binary-Projekt erstellen |
| `cgni` | Neues Library-Projekt erstellen |
| `cginit` | Projekt im aktuellen Verzeichnis initialisieren |

### Build und Ausfuehrung

| Alias | Beschreibung |
|:---|:---|
| `cgb` | Debug-Build |
| `cgbr` | Release-Build |
| `cgr` | Im Debug-Modus ausfuehren |
| `cgrr` | Im Release-Modus ausfuehren |
| `cgw` | Beobachten und bei Aenderungen neu bauen |

### Tests und Benchmarks

| Alias | Beschreibung |
|:---|:---|
| `cgt` | Tests ausfuehren |
| `cgtr` | Tests im Release-Modus ausfuehren |
| `cgbh` | Benchmarks ausfuehren |
| `cgta` | Alle Targets testen |
| `cgtt` | Single-threaded Tests |

### Code-Qualitaet

| Alias | Beschreibung |
|:---|:---|
| `cgc` | Kompilierung pruefen |
| `cgcl` | Build-Artefakte bereinigen |
| `cgcy` | Clippy-Lints ausfuehren |
| `cgf` | Code formatieren |
| `cgfa` | Gesamten Code formatieren |
| `cgfx` | Code-Probleme automatisch beheben |
| `cgaud` | Sicherheitsluecken ueberpruefen |

### Dokumentation

| Alias | Beschreibung |
|:---|:---|
| `cgd` | Dokumentation bauen und oeffnen |
| `cgdr` | Release-Dokumentation bauen |
| `cgdo` | Private Items dokumentieren |

### Abhaengigkeiten

| Alias | Beschreibung |
|:---|:---|
| `cga` | Abhaengigkeit hinzufuegen |
| `cgad` | Dev-Abhaengigkeit hinzufuegen |
| `cgu` | Abhaengigkeiten aktualisieren |
| `cgo` | Veraltete Abhaengigkeiten pruefen |
| `cgv` | Abhaengigkeiten vendorn |
| `cgtree` | Abhaengigkeitsbaum anzeigen |

### Cross-Compilation

| Alias | Beschreibung |
|:---|:---|
| `cgx` | Mit Zig bauen |
| `cgxw` | Cross-Compilation |
| `cgxt` | Plattform-spezifisches Target |

### Analyse und Profiling

| Alias | Beschreibung |
|:---|:---|
| `cgfl` | Flamegraph erzeugen |
| `cgbl` | Binary-Groessenanalyse |
| `cgl` | Code-Coverage |
| `cgm` | Modulstruktur |
| `cgex` | Makros expandieren |

### Paketverwaltung

| Alias | Beschreibung |
|:---|:---|
| `cgi` | Binary installieren |
| `cgun` | Binary deinstallieren |
| `cgp` | Auf crates.io veroeffentlichen |
| `cgs` | crates.io durchsuchen |
| `cgcp` | Release-Paket erstellen |

### Rustup-Updates

| Alias | Beschreibung |
|:---|:---|
| `ru` | Alle Toolchains aktualisieren |
| `rus` | Stable-Toolchain aktualisieren |
| `run` | Nightly-Toolchain aktualisieren |
| `rti` | Bestimmte Toolchain installieren |

### Komponentenverwaltung

| Alias | Beschreibung |
|:---|:---|
| `rca` | Komponente hinzufuegen |
| `rcl` | Komponenten auflisten |
| `rcr` | Komponente entfernen |

### Toolchain-Verwaltung

| Alias | Beschreibung |
|:---|:---|
| `rtl` | Installierte Toolchains auflisten |
| `rtu` | Toolchain deinstallieren |
| `rde` | Standard-Toolchain setzen |

### Target-Verwaltung

| Alias | Beschreibung |
|:---|:---|
| `rtaa` | Compile-Target hinzufuegen |
| `rtal` | Verfuegbare Targets auflisten |
| `rtar` | Compile-Target entfernen |

### Environment Running

| Alias | Beschreibung |
|:---|:---|
| `rns` | Befehl mit Stable ausfuehren |
| `rnn` | Befehl mit Nightly ausfuehren |

### Dokumentation und Hilfe

| Alias | Beschreibung |
|:---|:---|
| `rdo` | Rust-Dokumentation oeffnen |

### Override-Verwaltung

| Alias | Beschreibung |
|:---|:---|
| `rpr` | Toolchain fuer Verzeichnis setzen |
| `rpl` | Verzeichnis-Overrides auflisten |
| `rpn` | Verzeichnis-Override entfernen |

### Toolchain-Info

| Alias | Beschreibung |
|:---|:---|
| `rws` | Aktiven rustc-Pfad anzeigen |
| `rsh` | Toolchain-Infos anzeigen |
