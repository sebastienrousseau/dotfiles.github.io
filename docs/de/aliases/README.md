---
description: Aliases ermöglichen Ihnen das Erstellen von Verknüpfungen für Shell-Befehle, die Sie häufig verwenden. Dies ermöglicht Ihnen, produktiver und effizienter zu sein, indem Sie die Menge an Schreibarbeit reduzieren, die Sie beim regelmäßigen Verwenden der Shell leisten müssen.
lang: de-DE
metaTitle: Aliases - Dotfiles (DE)
permalink: /de/aliases/
---

# Aliases

Aliases ermöglichen es Ihnen, Verknüpfungen für Shell-Befehle zu erstellen, die Sie häufig verwenden. Dies ermöglicht Ihnen, produktiver und effizienter zu sein, indem Sie die Menge an Schreibarbeit reduzieren, die Sie leisten müssen, wenn Sie die Shell regelmäßig verwenden. Anstatt beispielsweise `git status` einzugeben, könnten Sie `gst` eingeben, um das gleiche Ergebnis zu erhalten.

Dies ist eine großartige Möglichkeit, Zeit zu sparen und die Menge an Schreibarbeit, die Sie täglich bei der Verwendung des Terminals leisten müssen, erheblich zu reduzieren, was Ihnen hilft, produktiver und effizienter zu sein.

## Voreinstellungen

Dotfiles verfügt über eine Sammlung von Konfigurationsvoreinstellungen und diversen Rezepten, mit denen Sie beginnen können.

### Automatische Systemerkennung

Dotfiles enthält eine Dienstprogrammfunktion zur Erkennung des aktuellen `ls`-Flavors, der verwendet wird, um beim Einrichten der richtigen `LS_COLORS`-Umgebungsvariablen für Ihr System zu helfen.

Die Umgebungsvariable `LS_COLORS` wird vom Befehl `ls` verwendet, um die Ausgabe des Befehls einzufärben.

### Überprüfen Sie integrierte Aliases

Geben Sie den folgenden Alias-Befehl in Ihr Terminal ein:

```bash
alias
```

### GNU Find Dienstprogramm-Aliases

macOS-Systeme basieren auf BSD und nicht auf GNU/Linux wie RedHat, Debian und Ubuntu. Infolgedessen sind viele der Befehlszeilentools, die mit macOS geliefert werden, nicht zu 100% kompatibel. Beispielsweise unterstützt der Befehl `find` unter macOS nicht die Option `-printf`, die vom Befehl `locate` verwendet wird. Dies bedeutet, dass der Befehl `locate` unter macOS nicht funktioniert. Um dies zu beheben, können Sie die GNU-Versionen dieser Befehle installieren, die vollständig mit den Linux-Versionen kompatibel sind.

Die GNU Find Utilities sind die grundlegenden Verzeichnissuchprogramme des GNU-Betriebssystems. Diese Programme werden normalerweise in Verbindung mit anderen Programmen verwendet, um anderen Befehlen modulare und leistungsstarke Verzeichnissuch- und Dateisuchfunktionen bereitzustellen.

Die mit diesem Paket gelieferten Tools sind:

- find - Suche nach Dateien in einer Verzeichnishierarchie
- locate - Dateien in Datenbanken auflisten, die einem Muster entsprechen
- updatedb - Aktualisieren einer Dateinamendatenbank
- xargs - Befehlszeilen aus Standardeingabe erstellen und ausführen

Geben Sie den folgenden Alias-Befehl in Ihr Terminal ein:

```bash
brew install findutils
```

### Die Dotfiles Aliases

Die in Dotfiles bereitgestellten Dateien enthalten einige meinungsstarke Aliases, die Sie möglicherweise nützlich finden. Diese sind im Verzeichnis `./dist/lib/aliases` definiert und werden automatisch geladen, wenn Sie eine neue Shell-Sitzung starten.

Die Aliases werden entweder von der Datei `~/.bashrc` geladen, wenn Sie die Bash-Shell verwenden, oder in der Datei `~/.zshrc`, wenn Sie die Zsh-Shell verwenden.

Sie wurden nach logischen Kategorien gruppiert:

- [ai][ai] - Aliases für KI.
- [archives][archives] - Aliases für die Arbeit mit Archiven.
- [cd][cd] - Aliases für die Arbeit mit Verzeichnissen.
- [chmod][chmod] - Aliases für die Arbeit mit Dateiberechtigungen.
- [clear][clear] - Aliases zum Löschen des Terminalbildschirms.
- [compliance][compliance] - Aliases für Compliance.
- [configuration][configuration] - Aliases für Konfiguration.
- [default][default] - Die Standard-Aliases, die für alle Benutzer geladen werden.
- [diagnostics][diagnostics] - Aliases für Diagnose.
- [dig][dig] - Aliases für die Arbeit mit DNS.
- [docker][docker] - Aliases für Docker.
- [dot][dot] - Die vereinheitlichte CLI zur Verwaltung Ihrer Dotfiles.
- [du][du] - Aliases für die Arbeit mit Festplattennutzung.
- [editor][editor] - Aliases für die Arbeit mit dem Editor.
- [find][find] - Aliases für die Arbeit mit dem `fd`-Befehl.
- [fonts][fonts] - Aliases für Schriftarten.
- [gcloud][gcloud] - Aliases für die Arbeit mit dem `gcloud`-Befehl.
- [git][git] - Aliases für die Arbeit mit Git.
- [gnu][gnu] - Aliases für die Arbeit mit GNU Core-Dienstprogrammen.
- [go][go] - Aliases für Go.
- [installer][installer] - Aliases für Installer.
- [interactive][interactive] - Aliases für die Arbeit mit interaktiven Befehlen.
- [jekyll][jekyll] - Aliases für die Arbeit mit Jekyll.
- [kubernetes][kubernetes] - Aliases für Kubernetes.
- [legal][legal] - Rechtliche Aliases.
- [list][list] - Aliases für die Arbeit mit dem `ls`-Befehl.
- [macOS][macos] - Aliases für macOS.
- [make][make] - Aliases für die Arbeit mit dem `make`-Befehl.
- [mkdir][mkdir] - Aliases für die Arbeit mit dem `mkdir`-Befehl.
- [modern][modern] - Modernes Unix.
- [modern-core][modern-core] - Hochleistungswerkzeuge (Atuin, Yazi, Zellij).
- [npm][npm] - Aliases für die Arbeit mit dem `npm`-Befehl.
- [permission][permission] - Aliases für Berechtigungen.
- [pnpm][pnpm] - Aliases für die Arbeit mit dem `pnpm`-Befehl.
- [ps][ps] - Aliases für die Arbeit mit dem `ps`-Befehl.
- [python][python] - Aliases für Python.
- [rsync][rsync] - Aliases für die Arbeit mit dem `rsync`-Befehl.
- [rust][rust] - Aliases für die Arbeit mit der Programmiersprache Rust.
- [security][security] - Sicherheits-Aliases.
- [subversion][subversion] - Aliases für die Arbeit mit Subversion.
- [sudo][sudo] - Aliases für die Arbeit mit dem `sudo`-Befehl.
- [terraform][terraform] - Aliases für Terraform.
- [tmux][tmux] - Aliases für die Arbeit mit dem `tmux`-Befehl.
- [update][update] - Aliases für die Arbeit mit dem `update`-Befehl.
- [uuid][uuid] - Aliases für die Arbeit mit dem `uuid`-Befehl.
- [wget][wget] - Aliases für die Arbeit mit dem `wget`-Befehl.
- [yarn][yarn] - Aliases für die Arbeit mit Yarn.

[ai]: ./ai/
[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[compliance]: ./compliance/
[configuration]: ./configuration/
[default]: ./default/
[diagnostics]: ./diagnostics/
[dig]: ./dig/
[docker]: ./docker/
[dot]: ./dot/
[du]: ./du/
[editor]: ./editor/
[find]: ./find/
[fonts]: ./fonts/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/
[go]: ./go/
[installer]: ./installer/
[interactive]: ./interactive/
[jekyll]: ./jekyll/
[kubernetes]: ./kubernetes/
[legal]: ./legal/
[list]: ./list/
[macos]: ./macOS/
[make]: ./make/
[mkdir]: ./mkdir/
[modern]: ./modern/
[modern-core]: ./modern-core/
[npm]: ./npm/
[permission]: ./permission/
[pnpm]: ./pnpm/
[ps]: ./ps/
[python]: ./python/
[rsync]: ./rsync/
[rust]: ./rust/
[security]: ./security/
[subversion]: ./subversion/
[sudo]: ./sudo/
[terraform]: ./terraform/
[tmux]: ./tmux/
[update]: ./update/
[uuid]: ./uuid/
[wget]: ./wget/
[yarn]: ./yarn/
