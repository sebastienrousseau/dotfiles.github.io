---
description: Alias shell per sviluppo Rust. Scorciatoie complete per cargo, rustup, build, test e gestione toolchain.
lang: it-IT
metaTitle: Alias Rust - Dotfiles (IT)
permalink: /aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: alias rust, alias cargo, alias rustup, sviluppo rust, toolchain rust, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell per sviluppo Rust. Scorciatoie complete per cargo, rustup, build, test e gestione toolchain.
  - name: twitter:title
    content: Alias Rust - Dotfiles
  - name: og:title
    content: Alias Rust - Dotfiles
  - name: og:description
    content: Alias shell per sviluppo Rust. Scorciatoie complete per cargo, rustup, build, test e gestione toolchain.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Rust

Scorciatoie complete per sviluppo Rust con cargo e rustup.

## Panoramica

Questi alias sono definiti in `rust.aliases.sh` e caricati automaticamente da chezmoi. Forniscono un set completo di scorciatoie per lo sviluppo Rust.

## Riferimento

### Comandi base

| Alias | Descrizione |
|-------|-------------|
| `cg` | Scorciatoia Cargo |
| `cgn` | Crea nuovo progetto binario |
| `cgni` | Crea nuovo progetto libreria |
| `cginit` | Inizializza progetto nella directory corrente |

### Build ed esecuzione

| Alias | Descrizione |
|-------|-------------|
| `cgb` | Compila debug |
| `cgbr` | Compila release |
| `cgr` | Esegui debug |
| `cgrr` | Esegui release |
| `cgw` | Guarda e ricompila |

### Test e qualita

| Alias | Descrizione |
|-------|-------------|
| `cgt` | Esegui test |
| `cgtr` | Esegui test release |
| `cgbh` | Esegui benchmark |
| `cgc` | Controlla compilazione |
| `cgcy` | Esegui lint clippy |
| `cgf` | Formatta codice |
| `cgaud` | Controllo vulnerabilita sicurezza |

### Dipendenze

| Alias | Descrizione |
|-------|-------------|
| `cga` | Aggiungi dipendenza |
| `cgad` | Aggiungi dipendenza sviluppo |
| `cgu` | Aggiorna dipendenze |
| `cgo` | Controlla dipendenze obsolete |
| `cgtree` | Visualizza albero dipendenze |

### Documentazione

| Alias | Descrizione |
|-------|-------------|
| `cgd` | Compila e apri documentazione |
| `cgdr` | Compila documentazione release |
| `cgdo` | Documenta elementi privati |

### Gestione toolchain

| Alias | Descrizione |
|-------|-------------|
| `ru` | Aggiorna tutte le toolchain |
| `rus` | Aggiorna toolchain stable |
| `run` | Aggiorna toolchain nightly |
| `rtl` | Elenca toolchain installate |
| `rde` | Imposta toolchain predefinita |

## Flussi di lavoro comuni

### Configurazione nuovo progetto

```bash
cgn myproject && cd myproject && cga serde && cgad tokio
```

### Flusso di lavoro release

```bash
cgcy && cgt && cgbr && cgaud
```
