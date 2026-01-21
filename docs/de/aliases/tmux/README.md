---
description: Die Tmux-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem `tmux` Befehl zu interagieren. Tmux ist ein Tool, das es Ihnen ermöglicht, mehrere Terminalsitzungen in einem einzigen Fenster auszuführen.
lang: de-DE
metaTitle: Tmux Aliase - Dotfiles (DE)
permalink: /de/aliases/tmux/
---

# Tmux Aliase

Diese `tmux.aliases.sh` Datei erstellt hilfreiche Shortcut-Aliase für viele
häufig verwendete [tmux](https://github.com/tmux/tmux/wiki) Befehle.

Die Tmux-Aliase sind eine Sammlung von Aliasen, die es Ihnen ermöglichen, mit dem
`tmux` Befehl zu interagieren. Tmux ist ein Tool, das es Ihnen ermöglicht, mehrere Terminal-
Sitzungen in einem einzigen Fenster auszuführen.

> [!NOTE]
> **Modern Core**: In v0.2.471+ haben wir [Zellij](/aliases/modern-core/#zellij) als moderne, Rust-basierte Alternative zu Tmux eingeführt.
> Tmux wird weiterhin unterstützt, aber Zellij wird für neue Benutzer empfohlen.

## Tmux

[Tmux](https://github.com/tmux/tmux/wiki) ist ein Terminal-Multiplexer. Er lässt Sie
einfach zwischen mehreren Programmen in einem Terminal wechseln, sie abtrennen (sie laufen
im Hintergrund weiter) und sie an einem anderen Terminal wieder anhängen.

| Alias | Befehl                   | Beschreibung                             |
| ----- | ------------------------ | ---------------------------------------- |
| tm    | `tmux`                   | Starte tmux.                             |
| tma   | `tmux attach-session`    | Hänge an eine tmux-Sitzung an.           |
| tmat  | `tmux attach-session -t` | Hänge an eine tmux-Sitzung mit Namen an. |
| tmks  | `tmux kill-session -a`   | Beende alle tmux-Sitzungen.              |
| tml   | `tmux list-sessions`     | Liste tmux-Sitzungen auf.                |
| tmn   | `tmux new-session`       | Starte eine neue tmux-Sitzung.           |
| tmns  | `tmux new -s`            | Starte eine neue tmux-Sitzung mit Namen. |
| tms   | `tmux new-session -s`    | Starte eine neue tmux-Sitzung.           |
