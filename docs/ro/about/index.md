---
title: Despre Dotfiles | Dotfiles
description: Descoperă prezentare tehnică a Dotfiles v0.2.495. Compatibil cu macOS, Linux și WSL prin Dotfiles.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Despre Dotfiles | Previzualizare Dotfiles
canonical: /ro/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Despre Dotfiles
pageType: docs
schemaType: WebPage
permalink: /ro/about/
---

# Despre Dotfiles

Dotfiles v0.2.495 este o configurare shell cross-platform gestionată cu Chezmoi.

## Instalare

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
```

## Verificare

```bash
dot doctor
```

## Comenzi principale

- `dot apply` aplică modificările de configurare.
- `dot update` actualizează depozitul și preîncarcă cache-urile.
- `dot doctor` validează căile, instrumentele și starea shell-ului.
- `dot heal` repară starea lipsă sau deteriorată.
- `dot smoke-test` validează lanțurile de instrumente principale.

## Legături conexe

- [Aliasuri](/ro/aliases/)
- [Funcții](/ro/functions/)
- [Căi](/ro/paths/)

## Comenzi principale

CLI-ul `dot` oferă 53 de comenzi organizate pe categorii.

### Nucleu

- `dot apply` — aplică modificările de configurare.
- `dot sync` — obține starea cea mai recentă a depozitului și o aplică.
- `dot update` — actualizează depozitul și preîncălzește cache-urile.
- `dot add` — adaugă fișiere noi în sursa Chezmoi.
- `dot diff` — afișează modificările în așteptare înainte de aplicare.
- `dot status` — afișează starea fișierelor gestionate.
- `dot remove` — elimină un fișier din gestionare și șterge intrarea sursă.
- `dot cd` — deschide un shell în directorul sursă Chezmoi.
- `dot edit` — deschide un fișier gestionat în editorul tău.
- `dot clean-cache` — curăță cache-urile tranzitorii.
- `dot prewarm` — preîncarcă cache-urile pentru o pornire mai rapidă a shell-ului.

### Diagnostice

- `dot doctor` — validează căile, instrumentele și starea shell-ului.
- `dot heal` — repară automat starea lipsă sau defectă.
- `dot health` — execută o verificare de sănătate ușoară.
- `dot verify` — verifică integritatea fișierelor față de sursă.
- `dot scorecard` — afișează un scor de calitate a configurației.
- `dot snapshot` — capturează starea curentă pentru comparație ulterioară.
- `dot smoke-test` — validează lanțurile de instrumente principale complet.
- `dot chaos` — injectează defecte pentru a testa auto-repararea.
- `dot bundle` — exportă un pachet de configurare portabil.
- `dot rollback` — revine la un snapshot anterior.
- `dot drift` — detectează modificări neautorizate ale fișierelor gestionate.
- `dot history` — afișează jurnalul de istoric apply/sync.
- `dot benchmark` — măsoară timpul de pornire al shell-ului.
- `dot perf` — profilează inițializarea lentă a shell-ului.

### Aspect

- `dot theme` — schimbă schema de culori a terminalului.
- `dot wallpaper` — setează imaginea de fundal a desktopului (macOS).
- `dot fonts` — instalează sau actualizează Nerd Fonts.
- `dot tune` — ajustează densitatea interfeței și stilul promptului.

### Securitate

- `dot backup` — creează copii de rezervă criptate ale configurației.
- `dot encrypt-check` — verifică criptarea secretelor în repaus.
- `dot firewall` — configurează regulile firewall-ului gazdei.
- `dot telemetry` — controlează telemetria de utilizare anonimă.
- `dot dns-doh` — activează DNS-over-HTTPS.
- `dot lock-screen` — blochează ecranul imediat.
- `dot usb-safety` — restricționează montarea automată a dispozitivelor USB de stocare.

### Secrete

- `dot secrets-init` — inițializează backend-ul de secrete (age / GPG).
- `dot secrets` — listează intrările de secrete criptate.
- `dot secrets-create` — creează un nou secret criptat.
- `dot ssh-key` — generează sau rotește perechi de chei SSH.
- `dot ssh-cert` — solicită un certificat SSH de la o CA.

### IA

- `dot ai` — deschide o sesiune interactivă de asistent IA.
- `dot ai-setup` — configurează cheile API pentru furnizorii de IA.
- `dot ai-query` — trimite un prompt unic către un model de IA.
- Wrapper-e de instrumente IA: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Instrumente

- `dot tools` — listează înlocuitorii CLI incluși și starea lor.
- `dot new` — creează un nou fișier de alias sau funcție.
- `dot sandbox` — deschide un shell sandbox de unică folosință.
- `dot keys` — afișează combinațiile de taste curente.
- `dot learn` — pornește tutorialul interactiv.

### Meta

- `dot upgrade` — actualizează Dotfiles la cea mai recentă versiune.
- `dot packages` — listează pachetele instalate gestionate de Dotfiles.
- `dot version` / `dot help` — afișează informații despre versiune sau utilizare
