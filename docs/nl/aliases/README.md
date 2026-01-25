---
description: Shell-aliassen die snelkoppelingen maken voor veelgebruikte commando's. Verhoog je productiviteit door minder te typen in je dagelijkse workflow.
lang: nl-NL
metaTitle: Aliassen - Dotfiles (NL)
permalink: /nl/aliases/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, snelkoppelingen, commando's, dotfiles, chezmoi, productiviteit, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-aliassen die snelkoppelingen maken voor veelgebruikte commando's. Verhoog je productiviteit door minder te typen in je dagelijkse workflow.
  - name: twitter:title
    content: Aliassen - Dotfiles
  - name: og:title
    content: Aliassen - Dotfiles
  - name: og:description
    content: Shell-aliassen die snelkoppelingen maken voor veelgebruikte commando's. Verhoog je productiviteit door minder te typen in je dagelijkse workflow.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Aliassen

Modulaire shell-aliassen beheerd door **Chezmoi**. Minder typen, meer doen.

## Ontdek

Aliassen zijn georganiseerd in kleine, gerichte bestanden - een voor elke tool of workflow. Tijdens `chezmoi apply` worden alle alias-bestanden samengevoegd in `~/.config/shell/aliases.sh` en door je shell geladen.

## Aan de slag

### Een alias toevoegen

1. Maak een nieuw bestand aan (bijv. `mytool/mytool.aliases.sh`)
2. Definieer je aliassen:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Pas wijzigingen toe:
   ```bash
   chezmoi apply
   ```

## Referentie

Blader door aliassen per categorie:

<!-- markdownlint-disable MD013-->

| Categorie | Beschrijving |
| :--- | :--- |
| [AI](ai/) | AI-assistent en LLM-tool snelkoppelingen |
| [Archives](archives/) | Bestanden comprimeren en uitpakken |
| [CD](cd/) | Navigeren door het bestandssysteem |
| [Chmod](chmod/) | Bestandsrechten wijzigen |
| [Clear](clear/) | Terminalscherm wissen |
| [Compliance](compliance/) | SOC2- en privacy-tools |
| [Configuration](configuration/) | Dotfiles en shell-configuratie beheren |
| [Default](default/) | Standaard shell-aliassen |
| [Diagnostics](diagnostics/) | Zelfherstel en gezondheidscontroles |
| [Dig](dig/) | DNS-servers bevragen |
| [Disk Usage](disk-usage/) | Schijfgebruik informatie weergeven |
| [Docker](docker/) | Containerbeheer |
| [Editor](editor/) | Teksteditors configureren |
| [Find](find/) | Bestanden en mappen zoeken |
| [Fonts](fonts/) | Lettertype-cache beheer |
| [GCloud](gcloud/) | Google Cloud SDK-tools |
| [Git](git/) | Git-versiebeheer |
| [GNU](gnu/) | GNU core-hulpprogramma's |
| [Go](go/) | Go-taal tools |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | Bootstrap en deployment |
| [Interactive](interactive/) | Interactief shell-gedrag |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Licentiescan-tools |
| [macOS](macOS/) | macOS-specifieke instellingen |
| [Make](make/) | GNU Make-hulpprogramma's |
| [Mkdir](mkdir/) | Mappen aanmaken |
| [Modern](modern/) | Rust-gebaseerde tool-vervangingen |
| [NPM](npm/) | Node.js pakketbeheerder |
| [Permission](permission/) | Bestandsrechten |
| [PNPM](pnpm/) | PNPM pakketbeheerder |
| [PS](ps/) | Processtatus |
| [Python](python/) | Python-hulpprogramma's |
| [Rsync](rsync/) | Efficiente bestandsoverdracht |
| [Rust](rust/) | Rust-programmeertools |
| [Security](security/) | Onveranderlijkheid en ondertekening |
| [Subversion](subversion/) | SVN-versiebeheer |
| [Sudo](sudo/) | Superuser-operaties |
| [Terraform](terraform/) | Infrastructure as Code |
| [Tmux](tmux/) | Terminal-multiplexer |
| [Update](update/) | Dotfiles bijwerken |
| [UUID](uuid/) | UUID's genereren |
| [Wget](wget/) | Commandoregel-downloader |
| [Yarn](yarn/) | Yarn pakketbeheerder |

<!-- markdownlint-enable MD013-->
