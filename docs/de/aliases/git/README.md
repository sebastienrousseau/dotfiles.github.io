---
description: Die Git-Aliase bieten leistungsstarke Befehle, die Verknüpfungen zu häufig verwendeten Git-Befehlen erstellen. Alle diese Funktionen und Aliase sind Wrapper für die Git-Kommandozeilen-Tools. Git-Aliase verbessern Geschwindigkeit und Effizienz.
lang: de-DE
metaTitle: Die Git-Aliase - Dotfiles (DE)
permalink: /de/aliases/git/
---

# Git Aliase

Die Datei `git.aliases.sh` erstellt hilfreiche Shortcut-Aliase für viele häufig
verwendete [Git](https://git-scm.com/)-Befehle.

Die Git-Aliase bieten leistungsstarke Befehle, die Verknüpfungen zu häufig
verwendeten Git-Befehlen erstellen. Alle diese Funktionen und Aliase sind Wrapper
für die Git-Kommandozeilen-Tools. Git-Aliase verbessern Geschwindigkeit und Effizienz.

## Arbeit an der aktuellen Änderung

| Alias | Befehl                | Beschreibung                                                               |
| ----- | --------------------- | -------------------------------------------------------------------------- |
| g     | `git`                 | Git-Kurzbefehl.                                                            |
| ga    | `git add`             | Füge Dateiinhalt zum Index hinzu.                                          |
| gaa   | `git add --all`       | Füge Dateiinhalt (alle) zum Index hinzu.                                   |
| gad   | `git add .`           | Füge Dateiinhalt des aktuellen Verzeichnisses zum Index hinzu.             |
| gau   | `git add --update`    | Aktualisiere den Index mit Änderungen aus dem Arbeitsbaum.                 |
| gco   | `git checkout`        | Zum letzten Commit zurückkehren.                                           |
| gdis  | `git checkout --`     | Änderungen in einer (Liste von) Datei(en) im Arbeitsbaum verwerfen.        |
| gmv   | `git mv`              | Verschiebe oder benenne eine Datei, ein Verzeichnis oder einen Symlink um. |
| grs   | `git restore`         | Arbeitsbaum-Dateien wiederherstellen.                                      |
| gsc   | `git sparse-checkout` | Initialisiere und modifiziere Sparse-Checkout.                             |

## Einen Arbeitsbereich starten

| Alias | Befehl      | Beschreibung                                                             |
| ----- | ----------- | ------------------------------------------------------------------------ |
| gcl   | `git clone` | Klone ein Repository in ein neues Verzeichnis.                           |
| gin   | `git init`  | Erstelle ein leeres Git-Repository oder reinitialisiere ein bestehendes. |

## Verlauf und Status untersuchen

| Alias | Befehl                                                              | Beschreibung                                                                                                    |
| ----- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| gbs   | `git bisect`                                                        | Verwende binäre Suche, um den Commit zu finden, der einen Fehler eingeführt hat.                                |
| gd    | `git diff`                                                          | Zeige Änderungen zwischen Commits, Commit und Arbeitsbaum usw.                                                  |
| gg    | `git grep`                                                          | Gebe Zeilen aus, die einem Muster entsprechen.                                                                  |
| gl    | `git log --since="last month" --oneline`                            | Zeige Commit-Logs dieses Monats.                                                                                |
| glg   | `git log --oneline --graph --full-history --all --color --decorate` | Zeige Commit-Logs und zeichne eine textbasierte grafische Darstellung des Commit-Verlaufs auf der linken Seite. |
| gs    | `git show`                                                          | Zeige verschiedene Arten von Objekten.                                                                          |

## Zweige auflisten, erstellen oder löschen

| Alias | Befehl             | Beschreibung                                             |
| ----- | ------------------ | -------------------------------------------------------- |
| gb    | `git branch`       | Erstelle einen Branch.                                   |
| gbd   | `git branch -d`    | Lösche einen Branch.                                     |
| gbl   | `git branch -l`    | Liste Branches auf.                                      |
| gbr   | `git branch -r`    | Liste Remote-Tracking-Branches auf.                      |
| gbrd  | `git branch -d -r` | Lösche Remote-Tracking-Branches.                         |
| gbrsb | `git show-branch`  | Drucke eine Liste von Branches und deren Commits.        |
| gct   | `git commit`       | Zeichne Änderungen am Repository auf.                    |
| gmg   | `git merge`        | Führe zwei oder mehr Entwicklungsverläufe zusammen.      |
| grb   | `git rebase`       | Wende Commits erneut auf einer anderen Basis an.         |
| grs   | `git reset`        | Setze aktuellen HEAD auf den angegebenen Zustand zurück. |
| gswb  | `git switch`       | Wechsle Branches.                                        |

## Zusammenarbeiten

| Alias | Befehl      | Beschreibung                                                             |
| ----- | ----------- | ------------------------------------------------------------------------ |
| gf    | `git fetch` | Lade Objekte und Refs von einem anderen Repository herunter.             |
| gi    | `git init`  | Erstelle ein leeres Git-Repository oder reinitialisiere ein bestehendes. |
| gp    | `git pull`  | Hole von einem anderen Repository oder lokalen Branch und integriere.    |
| gpu   | `git push`  | Aktualisiere Remote-Refs zusammen mit zugehörigen Objekten.              |

## Änderungen am Repository aufzeichnen

| Alias | Befehl                         | Beschreibung                                                                       |
| ----- | ------------------------------ | ---------------------------------------------------------------------------------- |
| gc    | `git commit -a`                | Commit-Befehl, um Änderungen von allen bekannten Dateien automatisch hinzuzufügen. |
| gca   | `git commit --amend`           | Ändere die Spitze des aktuellen Branches, anstatt einen neuen Commit zu erstellen. |
| gcall | `git add -A && git commit -av` | Alle Änderungen committen.                                                         |
| gcam  | `git commit --amend --message` | Ändere die Spitze des aktuellen Branches und bearbeite die Nachricht.              |
| gcane | `git commit --amend --no-edit` | Ändere die Spitze des aktuellen Branches und bearbeite die Nachricht nicht.        |
| gcint | `git commit --interactive`     | Interaktives Committen.                                                            |
| gcm   | `git commit --message`         | Commit mit einer Nachricht.                                                        |

## Änderungen zwischen Commits, Commit und Arbeitsbaum anzeigen

| Alias    | Befehl                                     | Beschreibung                                                                                 |
| -------- | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| gd       | `git diff`                                 | Zeige Änderungen zwischen Arbeitsbaum und Index oder einem Baum.                             |
| gdcached | `git diff --cached`                        | Zeigt die Änderungen zwischen dem Index und dem HEAD (dem letzten Commit auf diesem Branch). |
| gdch     | `git diff --name-status`                   | Zeige nur Namen und Status der geänderten Dateien.                                           |
| gdh      | `git diff HEAD`                            | Zeige alle Änderungen von verfolgten Dateien im Arbeitsverzeichnis und Staging-Bereich.      |
| gdstaged | `git diff --staged`                        | Zeige Änderungen an Dateien im "staged" Bereich.                                             |
| gdstat   | `git diff --stat --ignore-space-change -r` | Generiere einen Diffstat.                                                                    |

## Commit-Logs anzeigen

| Alias | Befehl                                                                                                                                                                                                            | Beschreibung                                                                  |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| gclc  | `git log --oneline --reverse`                                                                                                                                                                                     | Zeige Änderungsprotokoll, neueste zuerst.                                     |
| gld   | `git log --since=1-day-ago`                                                                                                                                                                                       | Zeige das Protokoll des letzten Tages.                                        |
| gldc  | `git log -1 --date-order --format=%cI`                                                                                                                                                                            | Zeige das Datum des letzten Commits im strikten ISO 8601 Format.              |
| gldl  | `git log --date=local`                                                                                                                                                                                            | Zeige Log mit Daten in unserer lokalen Zeitzone.                              |
| glf   | `git log ORIG_HEAD.. --stat --no-merges`                                                                                                                                                                          | Zeige Log neuer Commits nach dem Abrufen, mit Statistiken, ohne Merges.       |
| glfd  | `!"git log --date-order --format=%cI \| tail -1"`                                                                                                                                                                 | Zeige das Datum des frühesten Commits im strikten ISO 8601 Format.            |
| glfh  | `git log --graph --full-history --all --color`                                                                                                                                                                    | Visualisierung der Branch-Topologie.                                          |
| glg   | `git log --graph --all --oneline --decorate`                                                                                                                                                                      | Zeige Log als Graph.                                                          |
| glh   | `git log --since=1-hour-ago`                                                                                                                                                                                      | Zeige das Protokoll der letzten Stunde.                                       |
| gll   | `git log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset"`                   | Zeige Log im bevorzugten Format für KPIs. A.k.a. `ll`.                        |
| glll  | `git log --graph --topo-order --date=iso8601-strict --no-abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn <%ce>]%Creset %Cblue%G?%Creset"` | Zeige Log im bevorzugten Format für KPIs, mit langen Einträgen. A.k.a. `lll`. |
| glm   | `git log --since=1-month-ago`                                                                                                                                                                                     | Zeige das Protokoll des letzten Monats.                                       |
| glmy  | `!git log --author $(git config user.email)`                                                                                                                                                                      | Zeige das Protokoll für meine eigenen Commits anhand meiner E-Mail.           |
| glw   | `git log --since=1-week-ago`                                                                                                                                                                                      | Zeige das Protokoll der letzten Woche.                                        |
| gly   | `git log --since=1-year-ago`                                                                                                                                                                                      | Zeige das Protokoll des letzten Jahres.                                       |

## Branches wechseln oder Arbeitsbaumdateien wiederherstellen

| Alias  | Befehl                                                                          | Beschreibung                                                                  |
| ------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| gclout | `git clean -df && git checkout -- .`                                            | Bereinige und verwerfe Änderungen und nicht verfolgte Dateien im Arbeitsbaum. |
| gco    | `git checkout`                                                                  | Wechsle Branches oder stelle Arbeitsbaumdateien wieder her.                   |
| gcob   | `git checkout -b`                                                               | Erstelle einen neuen Branch namens <new_branch> und starte bei <start_point>. |
| gcode  | `git checkout main && git branch --merged \| xargs git branch --delete`         | Lösche alle lokalen Branches, die in den lokalen main-Branch gemerged wurden. |
| gcom   | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Stelle sicher, dass lokal wie der main-Branch ist.                            |

## Remote-Refs zusammen mit zugehörigen Objekten aktualisieren

| Alias  | Befehl                                                          | Beschreibung                                                                                                                    |
| ------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| gpb    | `git push --set-upstream origin $(git branch --show-current)`          | Veröffentliche den aktuellen Branch durch Pushen zum Remote "origin" und setze den aktuellen Branch auf Tracking des Upstreams. |
| gpcb   | `git push origin "$(git branch \| grep '\*' \| tr -d '\* \n')"` | Pushe aktuellen Branch.                                                                                                         |
| gpo    | `git push origin`                                               | Pushe lokale Änderungen zum Online-Repository.                                                                                  |
| gpoll  | `git push origin --all`                                         | Pushe jeden deiner lokalen Git-Branches zum Remote-Repository.                                                                  |
| gpt    | `git push --tags`                                               | Pushe lokale Tags.                                                                                                              |
| gpull  | `git pull`                                                      | Hole von einem anderen Repository oder lokalen Branch und integriere.                                                           |
| gpullo | `git pull origin $(git branch --show-current)`                         | Führe einen Pull nur für einen Branch durch.                                                                                    |
| gpullm | `git pull origin master`                                        | Ziehe Änderungen vom lokal gespeicherten Branch origin/master und merge diese in den lokal ausgecheckten Branch.                |
| gpush  | `git push`                                                      | Aktualisiere Remote-Refs zusammen mit zugehörigen Objekten.                                                                     |
| gpusho | `git push origin $(git branch --show-current)`                         | Führe einen Push nur für einen Branch durch.                                                                                    |
| gpushr | `git remote \| xargs -I% -n1 git push %`                        | git remotes-push - Für jeden Remote-Branch, pushe ihn.                                                                          |
| gunpub | `git push origin :$(git branch --show-current)`                        | Veröffentlichung des aktuellen Branch rückgängig machen, indem die Remote-Version gelöscht wird.                                |

## Satz verfolgter Repositories verwalten

| Alias   | Befehl                                                                                                                     | Beschreibung                                                                         |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| gr      | `git remote`                                                                                                               | Verwalte Satz verfolgter Repositories.                                               |
| gra     | `git remote add`                                                                                                           | Füge ein Remote namens name für das Repository unter url hinzu.                      |
| grall   | `git remote \| xargs -L1 git push --all`                                                                                   | Pushe alle Branches zu allen Remotes.                                                |
| grallo  | `git remote -v \| grep "(fetch)"`                                                                                          | Git remote alle Remotes außer origin.                                                |
| grao    | `git remote add origin`                                                                                                    | Füge ein neues Remote 'origin' hinzu, falls es nicht existiert.                      |
| grbk    | `git reset --soft HEAD^`                                                                                                   | Rollback zum Stage.                                                                  |
| grcl    | `git remote prune`                                                                                                         | Entferne veraltete Remote-Tracking-Branches.                                         |
| grf     | `find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && echo '{}' && git config --get remote.origin.url" \;` | Zeige GIT Remote Origin für jeden unmittelbaren Unterordner.                         |
| grfall  | `git branch -r \| awk -F'/' '{print "git fetch "$1,$2}' \| xargs -I {} sh -c {}`                                           | Hole alle Git-Remotes für ein Repo.                                                  |
| gro     | `open`git remote -v \| awk '/fetch/{print $2}' \| sed -Ee 's#(git@\|git://)#http://#' -e 's@com:@com/@'` \| head -n1`      | Öffne aktuelle Git-Repository-URL.                                                   |
| grp     | `git remote \| xargs -I% -n1 git push %`                                                                                   | Für jeden Remote-Branch, pushe ihn.                                                  |
| grpa    | `for i in`git remote`; do git push $i; done;`                                                                              | Pushe alle Remotes.                                                                  |
| grprint | `git remote -v`                                                                                                            | Drucke die URL für das aktuelle Repo.                                                |
| grs     | `git show`                                                                                                                 | Zeige verschiedene Arten von Objekten.                                               |
| grso    | `git remote show origin`                                                                                                   | Zeige an, wo sich origin befindet.                                                   |
| grv     | `git remote -v`                                                                                                            | Zeigt URLs von Remote-Repositories beim Auflisten der aktuellen Remote-Verbindungen. |
| gru     | `git remote update`                                                                                                        | Hole Updates für einen benannten Satz von Remotes im Repository.                     |

## Einige existierende Commits rückgängig machen

| Alias  | Befehl                   | Beschreibung                                                                                                                |
| ------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| grev   | `git revert`             | Mache die Änderungen von einigen existierenden Commits rückgängig.                                                          |
| grevnc | `git revert --no-commit` | Rückgängig machen ohne Autocommit; nützlich, wenn du den Effekt von mehr als einem Commit hintereinander rückgängig machst. |

## Submodule initialisieren, aktualisieren oder inspizieren

| Alias  | Befehl                                    | Beschreibung                                                                                                               |
| ------ | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| gsmi   | `git submodule init`                      | Initialisiere die im Index aufgezeichneten Submodule.                                                                      |
| gsma   | `git submodule add`                       | Füge das angegebene Repository als Submodul am angegebenen Pfad hinzu.                                                     |
| gsm    | `git submodule`                           | Ermöglicht das Einbetten fremder Repositories in ein dediziertes Unterverzeichnis des Quellbaums.                          |
| gsms   | `git submodule sync`                      | Synchronisiert die Remote-URL-Konfiguration der Submodule mit dem in .gitmodules angegebenen Wert.                         |
| gsmu   | `git submodule update`                    | Aktualisiere die registrierten Submodule, um dem zu entsprechen, was das Superprojekt erwartet.                            |
| gsmui  | `git submodule update --init`             | Submodul-Update mit Initialisierung.                                                                                       |
| gsmuir | `git submodule update --init --recursive` | Submodul-Update mit Initialisierung und rekursiv; nützlich, um ein Submodul vollständig auf den neuesten Stand zu bringen. |

## Den Arbeitsbaumstatus anzeigen

| Alias  | Befehl                                                            | Beschreibung                                                |
| ------ | ----------------------------------------------------------------- | ----------------------------------------------------------- |
| gst    | `git status`                                                      | Zeige den Arbeitsbaumstatus.                                |
| gstrmu | `git status -su \| cut -d' ' -f2- \| tr '\n' '\0' \| xargs -0 rm` | Entferne nicht verfolgte Dateien in einem Git-Repository.   |
| gsts   | `git status --short`                                              | Status mit Kurzformat anstelle vollständiger Details.       |
| gstsb  | `git status --short --branch`                                     | Status mit Kurzformat und Anzeige von Branch/Tracking-Info. |

## Ein Tag-Objekt erstellen, auflisten, löschen oder überprüfen

| Alias | Befehl                                                          | Beschreibung                                                           |
| ----- | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| gt    | `git tag`                                                       | gt: Zeige alle Tags.                                                   |
| gta   | `git tag -a $1 -m $2`                                           | gta: Füge ein Tag hinzu.                                               |
| gtg   | `git tag`                                                       | gtg: Erstelle, liste, lösche oder überprüfe ein signiertes Tag-Objekt. |
| gtl   | `git describe --tags --abbrev=0`                                | gtl: Letzter Tag im aktuellen Branch.                                  |
| gtrm  | `for t in`git tag`do; git push origin :$t; git tag -d $t; done` | gtrm: Lösche alle Tags.                                                |

## Verschiedene Arten von Objekten anzeigen

| Alias  | Befehl                                                             | Beschreibung                                                            |
| ------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| gshab  | `...`                                                              | Zeige Git-Branches nach Datum - nützlich, um aktive Branches zu zeigen. |
| gshf   |                                                                    | Finde den nächsten übergeordneten Branch des aktuellen Git-Branches.    |
| gshls  | `git show --relative --pretty=format:''`                           | Zeige Liste der durch Commit geänderten Dateien.                        |
| gshnp  | `git show --no-patch --pretty="tformat:%h (%s, %ad)" --date=short` | Zeige jedes Git-Objekt kurz an.                                         |
| gshwho | `git shortlog --summary --numbered --no-merges`                    | Zeige Mitwirkende, absteigend sortiert nach Anzahl der Commits.         |

## Aktuellen HEAD auf den angegebenen Zustand zurücksetzen

| Alias  | Befehl                                     | Beschreibung         |
| ------ | ------------------------------------------ | -------------------- |
| grescl | `git reset --hard HEAD~1 && git clean -fd` | Reset Commit sauber. |
| gresh  | `git reset --hard HEAD~1`                  | Reset Commit hart.   |
| gresp  | `git reset --hard && git clean -ffdx`      | Reset unberührt.     |
| gress  | `git reset --soft HEAD~1`                  | Reset Commit weich.  |
| gresu  | `git reset --hard $(git upstream-branch)`  | Reset auf Upstream.  |

## Parameter auswählen und massieren

| Alias | Befehl                                                                      | Beschreibung                                 |
| ----- | --------------------------------------------------------------------------- | -------------------------------------------- |
| gtp   | `git rev-parse --show-toplevel`                                             | Hole den Namen des Top-Level-Verzeichnisses. |
| gcb   | `git rev-parse --abbrev-ref HEAD`                                           | Hole den aktuellen Branch-Namen.             |
| gub   | `git for-each-ref --format='%(upstream:short)' $(git symbolic-ref -q HEAD)` | Hole den Upstream-Branch-Namen.              |

## Dateien aus dem Arbeitsbaum und dem Index entfernen

| Alias | Befehl                                                               | Beschreibung                                        |
| ----- | -------------------------------------------------------------------- | --------------------------------------------------- |
| grm   | `git rm`                                                             | Entferne Dateien aus dem Arbeitsbaum und dem Index. |
| grmc  | `git rm --cached`                                                    | Enferne Pfade nur aus dem Index (unstaging).        |
| grmd  | `git ls-files -z --deleted \| xargs -0 git rm`                       | Entferne Dateien, die gelöscht wurden.              |
| grmd2 | `git rm $(git ls-files --deleted)`                                   | Entferne Dateien, die gelöscht wurden.              |
| grmds | `find . -name .DS_Store -exec git rm --ignore-unmatch --cached {} +` | Entferne .DS_Store aus dem Repository.              |
| grmn  | `...`                                                                | Entferne alle neuen Dateien.                        |
| grmx  | `...`                                                                | Entferne alle gelöschten Dateien sicher.            |

## Anzeigen, welche Revision und welcher Autor jede Zeile zuletzt modifiziert hat

| Alias | Befehl                        | Beschreibung                             |
| ----- | ----------------------------- | ---------------------------------------- |
| gbl   | `git blame --date short "$1"` | Spezifiziert ein Format für kurze Daten. |
| gblc  | `...`                         | Zählt die Anzahl der Zeilen pro Autor.   |
| gblau | `...`                         | Druckt zeilenweise Beiträge pro Autor.   |

## Repository- oder globale Optionen abrufen und setzen

| Alias     | Befehl                                         | Beschreibung                                       |
| --------- | ---------------------------------------------- | -------------------------------------------------- |
| gconfdiff | `git config alias.dcolor "diff --color-words"` | Besserer Git-Diff, wortweise und coloriert.        |
| gconfl    | `git config --list`                            | Liste alle Einstellungen auf.                      |
| gconfr    | `git config --local --get remote.origin.url`   | Gebe Remote-Origin eines lokalen Repositories aus. |
