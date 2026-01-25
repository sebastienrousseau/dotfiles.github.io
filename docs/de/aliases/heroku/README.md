---
description: Beschleunigen Sie Heroku-Workflows mit 200+ Shell-Aliasen fuer Apps, Datenbanken, Pipelines und Deployments.
lang: de-DE
metaTitle: Heroku Aliase - Dotfiles (DE)
permalink: /de/aliases/heroku/
sidebar: true

meta:
  - name: keywords
    content: heroku aliase, heroku cli verknuepfungen, heroku shell befehle, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Heroku Aliase - Dotfiles
  - name: twitter:description
    content: Beschleunigen Sie Heroku-Workflows mit 200+ Shell-Aliasen fuer Apps, Datenbanken und Pipelines.
  - name: og:title
    content: Heroku Aliase - Dotfiles
  - name: og:description
    content: Beschleunigen Sie Heroku-Workflows mit 200+ Shell-Aliasen fuer Apps, Datenbanken und Pipelines.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Heroku Aliase

Shell-Verknuepfungen fuer die Heroku CLI, in `heroku.aliases.sh` definiert und automatisch von Chezmoi geladen.

## Uebersicht

Diese Sammlung bietet ueber 200 Aliase fuer die [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), die App-Verwaltung, Add-ons, Datenbanken, Pipelines, Container und mehr abdecken.

## Referenz

### Allgemeine Befehle

| Alias | Beschreibung |
|:---|:---|
| `hkk` | Heroku CLI-Befehlsverknuepfung |
| `hka` | Neue Benutzer zu Ihrer App hinzufuegen |
| `hkau` | Bestehende Mitarbeiter einer Team-App aktualisieren |
| `hkh` | Hilfe fuer Heroku anzeigen |
| `hkj` | Sich selbst zu einer Team-App hinzufuegen |
| `hkl` | Alle Befehle auflisten |
| `hkla` | Auflisten, wer Zugriff auf eine App hat |
| `hklg` | Aktuelle Log-Ausgabe anzeigen |
| `hkn` | Benachrichtigungen anzeigen |
| `hko` | Teams auflisten, in denen Sie Mitglied sind |
| `hkoo` | Team-Oberflaeche im Browser oeffnen |
| `hkp` | psql-Shell zur Datenbank oeffnen |
| `hkq` | Sich selbst von einer Team-App entfernen |
| `hkr` | Benutzer von einer Team-App entfernen |
| `hkrg` | Verfuegbare Regionen fuer Deployment auflisten |
| `hks` | Aktuellen Status der Heroku-Plattform anzeigen |
| `hkt` | Teams auflisten, in denen Sie Mitglied sind |
| `hku` | Heroku CLI aktualisieren |
| `hkulk` | App entsperren, damit jedes Team-Mitglied beitreten kann |
| `hkw` | Anzeigen, in welchem Plugin sich ein Befehl befindet |

### Add-ons

| Alias | Beschreibung |
|:---|:---|
| `hkada` | Bestehende Add-on-Ressource an eine App anhaengen |
| `hkadc` | Neue Add-on-Ressource erstellen |
| `hkadd` | Bestehende Add-on-Ressource von einer App trennen |
| `hkaddoc` | Dev Center-Dokumentation eines Add-ons im Browser oeffnen |
| `hkaddown` | Add-on-Plan aendern |
| `hkadi` | Detaillierte Add-on-Ressourcen- und Anhang-Informationen anzeigen |
| `hkadk` | Add-on-Ressource dauerhaft loeschen |
| `hkadl` | Ihre Add-ons und Anhaenge auflisten |
| `hkado` | Dashboard eines Add-ons im Browser oeffnen |
| `hkadp` | Alle verfuegbaren Plaene fuer einen Add-on-Dienst auflisten |
| `hkadr` | Add-on umbenennen |
| `hkads` | Alle verfuegbaren Add-on-Dienste auflisten |
| `hkadu` | Add-on-Plan aendern |
| `hkadw` | Bereitstellungsstatus der Add-ons der App anzeigen |

### Apps

| Alias | Beschreibung |
|:---|:---|
| `hkapc` | Neue App erstellen |
| `hkape` | App-Fehler anzeigen |
| `hkapfav` | Favorisierte Apps auflisten |
| `hkapfava` | App als Favorit markieren |
| `hkapunfav` | App aus Favoriten entfernen |
| `hkapi` | Detaillierte App-Informationen anzeigen |
| `hkapj` | Sich selbst zu einer Team-App hinzufuegen |
| `hkapk` | App dauerhaft loeschen |
| `hkapl` | Ihre Apps auflisten |
| `hkaplk` | Team-Mitglieder vom Beitreten einer App abhalten |
| `hkapo` | App im Webbrowser oeffnen |
| `hkapq` | Sich selbst von einer Team-App entfernen |
| `hkapr` | App umbenennen |
| `hkaps` | Liste verfuegbarer Stacks anzeigen |
| `hkapss` | Stack einer App setzen |
| `hkapt` | Anwendungen auf anderen Benutzer oder Team uebertragen |
| `hkapulk` | App entsperren, damit jedes Team-Mitglied beitreten kann |

### Authentifizierung

| Alias | Beschreibung |
|:---|:---|
| `hk2fa` | Aktuell angemeldeten Benutzer anzeigen |
| `hk2fad` | 2FA fuer Konto deaktivieren |
| `hk2fain` | Mit Ihren Heroku-Anmeldedaten einloggen |
| `hk2faout` | Lokale Anmeldedaten loeschen und API-Sitzung ungueltig machen |
| `hk2fas` | 2FA-Status pruefen |
| `hk2fat` | Aktuelles CLI-Authentifizierungstoken ausgeben |

### Container

| Alias | Beschreibung |
|:---|:---|
| `hkct` | Container zum Bauen und Deployen von Heroku-Apps verwenden |
| `hkctin` | Bei Heroku Container Registry anmelden |
| `hkctout` | Von Heroku Container Registry abmelden |
| `hkctpull` | Image aus einem App-Prozesstyp ziehen |
| `hkctpush` | Docker-Images bauen und pushen, um Ihre Heroku-App zu deployen |
| `hkctrelease` | Zuvor gepushte Docker-Images fuer Ihre Heroku-App freigeben |
| `hkctrm` | Prozesstyp von Ihrer App entfernen |
| `hkctrun` | Docker-Image bauen und lokal ausfuehren |

### Dynos

| Alias | Beschreibung |
|:---|:---|
| `hkdyk` | App-Dyno stoppen |
| `hkdyrz` | Dyno-Groessen verwalten |
| `hkdyrs` | App-Dynos neu starten |
| `hkdysc` | Dyno-Anzahl hoch- oder runterskalieren |
| `hkdyst` | App-Dyno stoppen |

### PostgreSQL

| Alias | Beschreibung |
|:---|:---|
| `hkpg` | Datenbankinformationen anzeigen |
| `hkpgb` | Tabellen- und Index-Bloat in Ihrer Datenbank anzeigen |
| `hkpgbk` | Datenbank-Backups auflisten |
| `hkpgbkc` | Neues Backup erfassen |
| `hkpgbkdl` | Backup loeschen |
| `hkpgbkdw` | Datenbank-Backup herunterladen |
| `hkpgbkr` | Backup wiederherstellen |
| `hkpgpsql` | psql-Shell zur Datenbank oeffnen |
| `hkpgpull` | Heroku-Datenbank in lokale oder Remote-Datenbank ziehen |
| `hkpgpush` | Lokale oder Remote in Heroku-Datenbank pushen |
| `hkpgreset` | Alle Daten in DATABASE loeschen |

### Pipelines

| Alias | Beschreibung |
|:---|:---|
| `hkpipe` | Pipelines auflisten, auf die Sie Zugriff haben |
| `hkpipea` | Diese App zu einer Pipeline hinzufuegen |
| `hkpipec` | Neue Pipeline erstellen |
| `hkpipei` | Liste der Apps in einer Pipeline anzeigen |
| `hkpipek` | Pipeline loeschen |
| `hkpipeo` | Pipeline im Dashboard oeffnen |
| `hkpipep` | Neuestes Release dieser App zu Downstream-App(s) promoten |
| `hkpiper` | Diese App aus ihrer Pipeline entfernen |
| `hkpipern` | Pipeline umbenennen |

### Releases

| Alias | Beschreibung |
|:---|:---|
| `hkrel` | Releases fuer eine App anzeigen |
| `hkreli` | Detaillierte Informationen fuer ein Release anzeigen |
| `hkrelo` | Release-Befehlsausgabe anzeigen |
| `hkrelr` | Auf ein vorheriges Release zurueckrollen |

### Run

| Alias | Beschreibung |
|:---|:---|
| `hkrun` | Einmaligen Prozess in einem Heroku-Dyno ausfuehren |
| `hkrund` | Detached Dyno ausfuehren, Ausgabe geht in Ihre Logs |
