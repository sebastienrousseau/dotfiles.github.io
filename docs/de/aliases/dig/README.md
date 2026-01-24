---
description: Die Dig-Aliase ermoeglichen Abfragen zu DNS-Records, einschliesslich Hostadressen, Mail-Exchanges und Nameservern.
lang: de-DE
metaTitle: Dig-Aliase - Dotfiles (DE)
permalink: /de/aliases/dig/

meta:
  - name: twitter:card
    content: Die Dig-Aliase ermoeglichen Abfragen zu DNS-Records, einschliesslich Hostadressen, Mail-Exchanges und Nameservern.
  - name: twitter:description
    content: Die Dig-Aliase ermoeglichen Abfragen zu DNS-Records, einschliesslich Hostadressen, Mail-Exchanges und Nameservern.
  - name: twitter:title
    content: Dig-Aliase - Dotfiles (DE)
  - name: og:title
    content: Dig-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Dig-Aliase ermoeglichen Abfragen zu DNS-Records, einschliesslich Hostadressen, Mail-Exchanges und Nameservern.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Dig-Aliase

Dig-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `dig.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet eine Reihe von Aliasen, um die DNS-Abfrage (Domain Name System)
mit dem dig-Befehl zu vereinfachen.
Die folgenden Aliase sind enthalten:
- `d`: dig mit Standardoptionen.
- `d4`: DNS-Abfrage fuer IPv4-Adresse.
- `d6`: DNS-Abfrage fuer IPv6-Adresse.
- `dga`: DNS-Abfrage fuer alle Records.
- `dgs`: DNS-Abfrage mit kurzer Antwort.
- `digg`: dig mit Google DNS.
- `ip4`: oeffentliche IPv4-Adresse ermitteln.
- `ip6`: oeffentliche IPv6-Adresse ermitteln.
- `ips`: oeffentliche IPv4- und IPv6-Adresse ermitteln.
- `wip`: oeffentliche IP-Adresse ermitteln.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
