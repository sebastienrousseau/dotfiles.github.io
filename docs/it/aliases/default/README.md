---
description: Alias shell essenziali per navigazione, controllo sistema e attivita quotidiane. Semplifica il tuo flusso di lavoro nel terminale con queste scorciatoie universali.
lang: it-IT
metaTitle: Alias Default - Dotfiles (IT)
permalink: /aliases/default/
sidebar: true

meta:
  - name: keywords
    content: alias predefiniti, alias shell, scorciatoie terminale, dotfiles, alias bash
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Default - Dotfiles
  - name: twitter:description
    content: Alias shell essenziali per navigazione, controllo sistema e attivita quotidiane.
  - name: og:title
    content: Alias Default - Dotfiles
  - name: og:description
    content: Alias shell essenziali per navigazione, controllo sistema e attivita quotidiane.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Default

Scorciatoie shell essenziali per le attivita quotidiane del terminale.

## Panoramica

Gli alias default forniscono una collezione di scorciatoie shell universali che semplificano le operazioni comuni del terminale. Questi alias sono definiti in `default.aliases.sh` e caricati automaticamente da chezmoi su tutte le shell supportate.

Queste scorciatoie coprono utility generali, comandi di uscita, diagnostica di rete, monitoraggio sistema e navigazione del file system.

## Riferimento

### Generale

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Visualizza data e ora correnti |
| `p` | `pwd` | Stampa directory di lavoro |
| `path` | `echo ${PATH//:/\\n}` | Visualizza variabile PATH su nuove righe |
| `r` | `reload` | Ricarica la shell |
| `t` | `tail -f` | Segui output file in tempo reale |
| `wk` | `date +%V` | Mostra numero settimana corrente |

### Uscita e spegnimento

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `q` | `exit` | Esci dalla shell |
| `quit` | `exit` | Esci dalla shell |
| `bye` | `exit` | Esci dalla shell |
| `:q` | `exit` | Esci dalla shell (stile vim) |
| `halt` | `sudo /sbin/halt` | Arresta il sistema |
| `poweroff` | `sudo /sbin/shutdown` | Spegni il sistema |
| `reboot` | `sudo /sbin/reboot` | Riavvia il sistema |

### Cronologia

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `h` | `history` | Visualizza cronologia comandi |
| `history` | `fc -il 1` | Mostra cronologia con timestamp ISO 8601 |

### Rete

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configura interfacce di rete |
| `ipinfo` | `ipconfig getpacket en0` | Ottieni parametri rete per en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Mostra listener di rete attivi |
| `op` | `sudo lsof -i -P` | Elenca porte aperte |
| `ping` | `ping -c 5` | Ping con limite 5 pacchetti |
| `ports` | `netstat -tulan` | Elenca tutte le porte in ascolto |

### Monitoraggio sistema

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `top` | `sudo btop` | Monitor processi interattivo |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Pulisci file log ASL |

### Utility

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | Conta file nella directory corrente |
| `qfind` | `find . -name` | Ricerca file rapida |
| `reload` | `exec $SHELL -l` | Ricarica la shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Ottieni meteo corrente |
