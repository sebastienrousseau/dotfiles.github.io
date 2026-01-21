---
description: Die Dig-Aliase ermöglichen das Abfragen von Informationen über verschiedene DNS-Datensätze, einschließlich Host-Adressen, Mail-Exchanges und Nameserver.
lang: de-DE
metaTitle: Dig Aliase - Dotfiles (DE)
permalink: /de/aliases/dig/
---

# Dig Aliase

Die Datei `dig.aliases.sh` erstellt hilfreiche Shortcut-Aliase für den Befehl `dig`.

`dig` (domain information groper) ist ein flexibles Werkzeug zum Abfragen von DNS-
Nameservern. Es führt DNS-Lookups durch und zeigt die Antworten an, die von den
abgefragten Nameservern zurückgegeben wurden. Es wird hauptsächlich verwendet, um DNS-
Probleme zu beheben und Informationen über eine Domain wie die IP-Adresse zu finden.

## Dig

[Dig](<https://de.wikipedia.org/wiki/Dig_(Unix)>) ist ein Befehl, der DNS-
Lookups durchführt und die Antworten anzeigt, die von den abgefragten Nameservern
zurückgegeben wurden.

| Alias | Befehl                                                                  | Beschreibung                                         |
| ----- | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| d     | `$(which dig)`                                                          | Führe den dig-Befehl mit den Standardoptionen aus.   |
| d4    | `$(which dig) +short -4`                                                | Führe einen DNS-Lookup für eine IPv4-Adresse durch.  |
| d6    | `$(which dig) +short -6`                                                | Führe einen DNS-Lookup für eine IPv6-Adresse durch.  |
| dga   | `$(which dig) +all ANY`                                                 | Führe einen DNS-Lookup für alle Datensätze durch.    |
| dgs   | `$(which dig) +short`                                                   | Führe einen DNS-Lookup für eine kurze Antwort durch. |
| digg  | `$(which dig) @8.8.8.8 +nocmd any +multiline +noall +answer`            | Dig mit Googles DNS.                                 |
| ip4   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com -4`        | Hole deine öffentliche IPv4-Adresse.                 |
| ip6   | `$(which dig) -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` | Hole deine öffentliche IPv6-Adresse.                 |
| ips   | `ip4; ip6`                                                              | Hole deine öffentlichen IPv4- und IPv6-Adressen.     |
| wip   | `$(which dig) +short myip.opendns.com @resolver1.opendns.com`           | Hole deine öffentliche IP-Adresse.                   |
