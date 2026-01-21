---
description: Die Google Cloud Aliase bieten einprägsame Befehle für das Arbeiten auf der Google Cloud Plattform. Alle diese Funktionen und Aliase sind Wrapper um die Google Cloud SDK Kommandozeilen-Tools.
lang: de-DE
metaTitle: Google Cloud Aliase - Dotfiles (DE)
permalink: /de/aliases/gcloud/
---

# Google Cloud Aliase

Die Datei `gcloud.aliases.sh` erstellt hilfreiche Shortcut-Aliase für viele häufig
verwendete [Google Cloud](https://cloud.google.com/) Befehle.

Die Google Cloud Aliase bieten einprägsame Befehle für das Arbeiten auf der Google
Cloud Plattform. Alle diese Funktionen und Aliase sind Wrapper um die
Google Cloud SDK Kommandozeilen-Tools.

## Kommandozeilen-Tool

| Alias | Befehl                      | Beschreibung                                                     |
| ----- | --------------------------- | ---------------------------------------------------------------- |
| gcci  | `gcloud components install` | Installiere spezifische Komponenten.                             |
| gccsp | `gcloud config set project` | Setze ein Standard Google Cloud Projekt, an dem gearbeitet wird. |
| gccu  | `gcloud components update`  | Aktualisiere dein Cloud SDK auf die neueste Version.             |
| gci   | `gcloud init`               | Initialisiere, autorisiere und konfiguriere das gcloud-Tool.     |
| gcinf | `gcloud info`               | Zeige aktuelle gcloud-Tool Umgebungsdetails an.                  |
| gcv   | `gcloud version`            | Zeige Version und installierte Komponenten an.                   |

## Benutzerdefiniert

| Alias | Befehl                                  | Beschreibung                                                                  |
| ----- | --------------------------------------- | ----------------------------------------------------------------------------- |
| gccca | `gcloud config configurations activate` | Wechsle zu einer bestehenden benannten Konfiguration.                         |
| gcccc | `gcloud config configurations create`   | Erstelle eine neue benannte Konfiguration.                                    |
| gcccl | `gcloud config configurations list`     | Zeige eine Liste aller verfügbaren Konfigurationen an.                        |
| gccgv | `gcloud config get-value`               | Hole den Wert einer Cloud SDK Eigenschaft.                                    |
| gccl  | `gcloud config list`                    | Zeige alle Eigenschaften für die aktuelle Konfiguration an.                   |
| gccs  | `gcloud config set`                     | Definiere eine Eigenschaft (wie compute/zone) für die aktuelle Konfiguration. |

## Autorisierung

| Alias  | Befehl                                 | Beschreibung                                                                                                                      |
| ------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | Wie gcloud auth login, aber mit Service-Account-Anmeldeinformationen.                                                             |
| gcacd  | `gcloud auth configure-docker`         | Registriere das gcloud-Tool als Docker Credential Helper.                                                                         |
| gcal   | `gcloud auth list`                     | Liste alle Konten mit Anmeldeinformationen auf.                                                                                   |
| gcal   | `gcloud auth login`                    | Autorisiere Google Cloud Zugriff für das gcloud-Tool mit Google Benutzeranmeldeinformationen und setze aktuelles Konto als aktiv. |
| gcapat | `gcloud auth print-access-token`       | Zeige das Zugriffstoken des aktuellen Kontos an.                                                                                  |
| gcar   | `gcloud auth revoke`                   | Entferne Zugriffsberechtigungen für ein Konto.                                                                                    |

## Cloud Identity & Access Management (IAM)

| Alias  | Befehl                                               | Beschreibung                                                                   |
| ------ | ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| gciamk | `gcloud iam service-accounts keys list`              | Liste die Schlüssel eines Service-Accounts auf.                                |
| gciaml | `gcloud iam list-grantable-roles`                    | Liste IAM vergebbare Rollen für eine Ressource auf.                            |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | Füge eine IAM-Richtlinienbindung zu einem Service-Account hinzu.               |
| gciamr | `gcloud iam roles create`                            | Erstelle eine benutzerdefinierte Rolle für ein Projekt oder eine Organisation. |
| gciams | `gcloud iam service-accounts set-iam-policy`         | Ersetze bestehende IAM-Richtlinienbindung.                                     |
| gciamv | `gcloud iam service-accounts create`                 | Erstelle einen Service-Account für ein Projekt.                                |

## Zugriffsrichtlinien

| Alias | Befehl                                   | Beschreibung                                                         |
| ----- | ---------------------------------------- | -------------------------------------------------------------------- |
| gcpa  | `gcloud projects add-iam-policy-binding` | Füge eine IAM-Richtlinienbindung zu einem angegebenen Projekt hinzu. |
| gcpd  | `gcloud projects describe`               | Zeige Metadaten für ein Projekt an (einschließlich seiner ID).       |

## Kubernetes

| Alias | Befehl                                      | Beschreibung                                                        |
| ----- | ------------------------------------------- | ------------------------------------------------------------------- |
| gcccc | `gcloud container clusters create`          | Erstelle einen Cluster, um GKE-Container auszuführen.               |
| gcccg | `gcloud container clusters get-credentials` | Aktualisiere kubeconfig, damit kubectl einen GKE-Cluster verwendet. |
| gcccl | `gcloud container clusters list`            | Liste Cluster zum Ausführen von GKE-Containern auf.                 |
| gccil | `gcloud container images list-tags`         | Liste Tag- und Digest-Metadaten für ein Container-Image auf.        |

## VMs

| Alias   | Befehl                              | Beschreibung                                    |
| ------- | ----------------------------------- | ----------------------------------------------- |
| gcpc    | `gcloud compute copy-files`         | Kopiere Dateien                                 |
| gcpdown | `gcloud compute instances stop`     | Stoppe Instanz                                  |
| gcpds   | `gcloud compute disks snapshot`     | Erstelle Snapshot von persistenten Festplatten. |
| gcpid   | `gcloud compute instances describe` | Zeige Details einer VM-Instanz an.              |
| gcpil   | `gcloud compute instances list`     | Liste alle VM-Instanzen in einem Projekt auf.   |
| gcprm   | `gcloud compute instances delete`   | Lösche Instanz                                  |
| gcpsk   | `gcloud compute snapshots delete`   | Lösche einen Snapshot.                          |
| gcpssh  | `gcloud compute ssh`                | Verbinde dich mit einer VM-Instanz über SSH.    |
| gcpup   | `gcloud compute instances start`    | Starte Instanz.                                 |
| gcpzl   | `gcloud compute zones list`         | Liste Compute Engine Zonen auf.                 |

## gcloud Aliase um hochskalierbare Anwendungen auf einer vollständig verwalteten serverlosen Plattform zu bauen

| Alias | Befehl                     | Beschreibung                                                                         |
| ----- | -------------------------- | ------------------------------------------------------------------------------------ |
| gcapb | `gcloud app browse`        | Öffne die aktuelle App in einem Webbrowser.                                          |
| gcapc | `gcloud app create`        | Erstelle eine App Engine App innerhalb deines aktuellen Projekts.                    |
| gcapd | `gcloud app deploy`        | Deploye deinen App-Code und die Konfiguration auf den App Engine Server.             |
| gcapl | `gcloud app logs read`     | Zeige die neuesten App Engine App Logs an.                                           |
| gcapv | `gcloud app versions list` | Liste alle Versionen aller Services auf, die auf dem App Engine Server deployt sind. |

## gcloud Aliase für Befehle, die nützlich sein könnten

| Alias  | Befehl                        | Beschreibung                                                                                                                  |
| ------ | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| gckmsd | `gcloud kms decrypt`          | Entschlüssele Chiffretext (in eine Klartextdatei) unter Verwendung eines Cloud Key Management Service (Cloud KMS) Schlüssels. |
| gclll  | `gcloud logging logs list`    | Liste die Logs deines Projekts auf.                                                                                           |
| gcsqlb | `gcloud sql backups describe` | Zeige Infos über ein Cloud SQL Instanz-Backup an.                                                                             |
| gcsqle | `gcloud sql export sql`       | Exportiere Daten von einer Cloud SQL Instanz in eine SQL-Datei.                                                               |
