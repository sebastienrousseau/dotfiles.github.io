---
description: Come Dotfiles gestisce la gerarchia PATH per assicurare che gli strumenti giusti vengano caricati nell'ordine corretto.
lang: it-IT
metaTitle: Percorsi - Dotfiles (IT)
permalink: /paths/

meta:
  - name: keywords
    content: percorso, ambiente, variabili, gerarchia, dotfiles, chezmoi, shell, configurazione
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Come Dotfiles gestisce la gerarchia PATH per assicurare che gli strumenti giusti vengano caricati nell'ordine corretto.
  - name: twitter:title
    content: Percorsi - Dotfiles
  - name: og:title
    content: Percorsi - Dotfiles
  - name: og:description
    content: Come Dotfiles gestisce la gerarchia PATH per assicurare che gli strumenti giusti vengano caricati nell'ordine corretto.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Percorsi

Gestione modulare del `PATH`. Assicura che gli strumenti giusti vengano caricati nell'ordine corretto.

## Scopri

Le configurazioni dei percorsi sono suddivise in file basati su priorita. Durante `chezmoi apply`:

1. I file in questa directory vengono scansionati alfabeticamente
2. Il contenuto viene aggregato in `~/.config/shell/paths.sh`
3. Caricato da `.zshrc` all'avvio

## Riferimento

| Script | Descrizione |
|:---|:---|
| `00-default.paths.sh` | Percorsi di sistema base (`/usr/bin`, `/sbin`) e Homebrew. Caricato per primo. |
| `99-custom.paths.sh` | Percorsi utente personalizzati (SDK linguaggi, bin locali). Caricato per ultimo per precedenza. |

## Inizia

### Aggiungi un percorso utente

1. Modifica `99-custom.paths.sh` o crea un nuovo file (es., `50-myproject.paths.sh`)
2. Aggiungi il tuo percorso:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. Applica le modifiche:
   ```bash
   chezmoi apply
   ```
4. Verifica:
   ```bash
   echo $PATH
   ```
