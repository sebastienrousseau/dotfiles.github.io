---
description: Rust-ontwikkelaliassen voor Cargo en Rustup. Snelkoppelingen voor bouwen, testen en beheren van Rust-projecten.
lang: nl-NL
metaTitle: Rust-aliassen - Dotfiles (NL)
permalink: /nl/aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, shell aliassen, dotfiles, rust ontwikkeling
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Rust-ontwikkelaliassen voor Cargo en Rustup. Snelkoppelingen voor bouwen, testen en beheren van Rust-projecten.
  - name: twitter:title
    content: Rust-aliassen - Dotfiles
  - name: og:title
    content: Rust-aliassen - Dotfiles
  - name: og:description
    content: Rust-ontwikkelaliassen voor Cargo en Rustup. Snelkoppelingen voor bouwen, testen en beheren van Rust-projecten.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Rust-aliassen

Snelkoppelingen voor Rust-ontwikkeling met Cargo en Rustup.

## Overzicht

Deze aliassen zijn gedefinieerd in `rust.aliases.sh` en worden automatisch geladen door Chezmoi.

## Referentie

### Basiscommando's

| Alias | Beschrijving |
|:---|:---|
| `cg` | Cargo-snelkoppeling |
| `cgn` | Maak nieuw binair project |
| `cgni` | Maak nieuw bibliotheekproject |
| `cginit` | Initialiseer project in huidige map |

### Bouwen en uitvoeren

| Alias | Beschrijving |
|:---|:---|
| `cgb` | Bouw debug |
| `cgbr` | Bouw release |
| `cgr` | Voer debug uit |
| `cgrr` | Voer release uit |
| `cgw` | Watch en herbouw |

### Testen en benchmarken

| Alias | Beschrijving |
|:---|:---|
| `cgt` | Voer tests uit |
| `cgtr` | Voer tests uit in release-modus |
| `cgbh` | Voer benchmarks uit |
| `cgta` | Test alle targets |
| `cgtt` | Single threaded tests |

### Codekwaliteit

| Alias | Beschrijving |
|:---|:---|
| `cgc` | Controleer compilatie |
| `cgcl` | Ruim build-artefacten op |
| `cgcy` | Voer clippy lints uit |
| `cgf` | Formatteer code |
| `cgfa` | Formatteer alle code |
| `cgfx` | Auto-fix code-issues |
| `cgaud` | Beveiligingskwetsbaarheden-controle |

### Documentatie

| Alias | Beschrijving |
|:---|:---|
| `cgd` | Bouw en open documentatie |
| `cgdr` | Bouw release-documentatie |
| `cgdo` | Documenteer private items |

### Afhankelijkheden

| Alias | Beschrijving |
|:---|:---|
| `cga` | Voeg afhankelijkheid toe |
| `cgad` | Voeg dev-afhankelijkheid toe |
| `cgu` | Werk afhankelijkheden bij |
| `cgo` | Controleer verouderde afhankelijkheden |
| `cgtree` | Toon afhankelijkheidsboom |

### Rustup-updates

| Alias | Beschrijving |
|:---|:---|
| `ru` | Werk alle toolchains bij |
| `rus` | Werk stable toolchain bij |
| `run` | Werk nightly toolchain bij |
| `rti` | Installeer specifieke toolchain |

### Componenten-beheer

| Alias | Beschrijving |
|:---|:---|
| `rca` | Voeg component toe |
| `rcl` | Toon componenten |
| `rcr` | Verwijder component |

### Toolchain-beheer

| Alias | Beschrijving |
|:---|:---|
| `rtl` | Toon geinstalleerde toolchains |
| `rtu` | Verwijder toolchain |
| `rde` | Stel standaard toolchain in |
