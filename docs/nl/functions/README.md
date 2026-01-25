---
description: Shell-functies die je terminal-ervaring verbeteren. Hulpprogramma's voor API-testen, bestandsbeheer, systeemoperaties en meer.
lang: nl-NL
metaTitle: Functies - Dotfiles (NL)
permalink: /nl/functions/

meta:
  - name: keywords
    content: functies, shell, bash, zsh, dotfiles, productiviteit, hulpprogramma's, api, bestand, systeem
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-functies die je terminal-ervaring verbeteren. Hulpprogramma's voor API-testen, bestandsbeheer, systeemoperaties en meer.
  - name: twitter:title
    content: Functies - Dotfiles
  - name: og:title
    content: Functies - Dotfiles
  - name: og:description
    content: Shell-functies die je terminal-ervaring verbeteren. Hulpprogramma's voor API-testen, bestandsbeheer, systeemoperaties en meer.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Functies

Shell-hulpprogramma's om je productiviteit te verhogen op macOS, Linux en Windows.

## Ontdek

Functies worden gedefinieerd als individuele `.sh`-bestanden. Tijdens `chezmoi apply` worden ze samengevoegd in `~/.config/shell/functions.sh` en door je shell geladen.

## Aan de slag

### Een functie toevoegen

1. Maak een nieuw `.sh`-bestand aan (bijv. `myfunc.sh`)
2. Voeg je functiedefinitie toe
3. Pas wijzigingen toe:
   ```bash
   chezmoi apply
   ```

## Referentie

### API-testen

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `apihealth` | Controleer gezondheid van een of meerdere API's | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Monitor API-responstijd | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Voer eenvoudige load-testen uit | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Debug HTTP-verzoeken met timing | `httpdebug [options] [url]` |

### HTTP-hulpprogramma's

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `curlheader` | Bekijk HTTP-headers | `curlheader [header] [url]` |
| `curlstatus` | Controleer HTTP-statuscode | `curlstatus [url]` |
| `curltime` | Meet HTTP-timing-metrieken | `curltime [url]` |
| `view-source` | Bekijk broncode van website | `view-source URL` |
| `whoisport` | Vind proces dat een poort gebruikt | `whoisport PORT` |

### Bestandsbeheer

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `backup` | Maak back-ups met tijdstempel | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Base64-codering en -decodering | `encode64 "string"` |
| `extract` | Pak archiefformaten uit | `extract [file]` |
| `hexdump` | Toon bestand in hex-formaat | `hexdump [file] [lines]` |
| `ren` | Batch hernoem extensies | `ren OLD_EXT NEW_EXT` |
| `size` | Controleer bestand- of mapgrootte | `size [file/directory]` |
| `zipf` | Maak ZIP-archieven | `zipf [folder]` |

### Bestandsnaamgeving

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `kebabcase` | Converteer naar kebab-case | `kebabcase <files...>` |
| `lowercase` | Converteer naar kleine letters | `lowercase <files...>` |
| `sentencecase` | Converteer naar zinsopmaak | `sentencecase <files...>` |
| `snakecase` | Converteer naar snake_case | `snakecase <files...>` |
| `titlecase` | Converteer naar Titelopmaak | `titlecase <files...>` |
| `uppercase` | Converteer naar HOOFDLETTERS | `uppercase <files...>` |

### Systeemhulpprogramma's

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `caffeine` | Voorkom dat systeem in slaapstand gaat | `caffeine [command]` |
| `environment` | Detecteer OS-omgeving | `environment` |
| `freespace` | Schoon purgeerbare schijfruimte op | `freespace [disk]` |
| `hiddenfiles` | Schakel verborgen bestanden in Finder | `hiddenfiles [show\|hide]` |
| `hostinfo` | Toon hostinformatie | `hostinfo` |
| `hstats` | Bekijk commando-gebruiksstatistieken | `hstats` |
| `last` | Lijst recent gewijzigde bestanden | `last [minutes]` |
| `logout` | Cross-platform uitloggen | `logout [--force]` |
| `myproc` | Lijst gebruikersprocessen | `myproc` |
| `stopwatch` | Terminal-stopwatch | `stopwatch` |
| `sysinfo` | Toon systeeminformatie | `sysinfo` |

### Caffeine-commando's

Voorkom dat je systeem in slaapstand gaat of de screensaver activeert.

| Commando | Beschrijving |
|:---|:---|
| `caffeine daemon` | Start de caffeine-daemon |
| `caffeine status` | Controleer of daemon draait |
| `caffeine start` | Houd het scherm wakker |
| `caffeine stop` | Sta toe dat scherm slaapt |
| `caffeine toggle` | Schakel scherm wakker |
| `caffeine shutdown` | Sluit de daemon af |

Werkt op macOS (native `caffeinate`), Linux (`xdg-screensaver`) en Windows (PowerShell).

### Beveiliging

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `genpass` | Genereer sterke wachtwoorden | `genpass [num_blocks] [separator]` |
| `keygen` | Genereer SSH-sleutelparen | `keygen [name] [email] [type] [bits]` |

### Navigatie

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `cdls` | Wijzig map en toon lijst | `cdls [directory]` |
| `goto` | Snelle mapnavigatie | `goto [directory]` |
| `mount_read_only` | Koppel alleen-lezen als lezen-schrijven | `mount_read_only [image]` |
| `rd` | Verwijder map | `rd [directory]` |
| `remove_disk` | Verwijder schijf veilig | `remove_disk [disk]` |

### Diversen

| Functie | Beschrijving | Gebruik |
|:---|:---|:---|
| `matrix` | Terminal Matrix-effecten | `matrix [options]` |
| `prependpath` | Voeg map toe aan PATH | `prependpath [directory]` |
| `ql` | Open in macOS Quick Look | `ql [file]` |
| `vscode` | Open in VS Code | `vscode [file]` |

## Compatibiliteit

- **macOS** — Volledige ondersteuning met macOS-specifieke hulpprogramma's
- **Linux** — Compatibel met gangbare distributies
- **Windows** — Ondersteuning via WSL, Cygwin of Git Bash

## Help

Elke functie bevat documentatie via `--help`:

```bash
apihealth --help
```
