---
description: Die Chmod-Aliase ermöglichen das Ändern der Berechtigungen (oder des Zugriffsmodus) einer Datei oder eines Verzeichnisses.
lang: de-DE
metaTitle: Chmod Aliase - Dotfiles (DE)
permalink: /de/aliases/chmod/
---

# Chmod Aliase

Die Datei `chmod.aliases.sh` erstellt hilfreiche Shortcut-Aliase zum Ändern
von Dateiberechtigungen.

## Berechtigung

Das chmod-Dienstprogramm ändert die Dateimodus-Bits der aufgelisteten Dateien wie
durch den Modus-Operanden angegeben. Es kann auch verwendet werden, um die Access Control Lists
(ACLs) zu ändern, die mit den aufgelisteten Dateien verknüpft sind.

| Alias  | Befehl              | Beschreibung                                                                                                                                                                                                                                                  |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 000    | `chmod -R 000`      | (chmod a-rwx) setzt Berechtigungen so, dass (U)ser / Eigentümer nicht lesen, nicht schreiben und nicht ausführen kann. (G)roup nicht lesen, nicht schreiben und nicht ausführen kann. (O)thers nicht lesen, nicht schreiben und nicht ausführen können.       |
| 400    | `chmod -R 400`      | (chmod a-rw) setzt Berechtigungen so, dass (U)ser / Eigentümer nicht lesen, nicht schreiben, aber ausführen kann. (G)roup nicht lesen, nicht schreiben, aber ausführen kann. (O)thers nicht lesen, nicht schreiben, aber ausführen können.                    |
| 444    | `chmod -R 444`      | (chmod a-r) setzt Berechtigungen so, dass (U)ser / Eigentümer nicht lesen, nicht schreiben, aber ausführen kann. (G)roup nicht lesen, nicht schreiben, aber ausführen kann. (O)thers nicht lesen, nicht schreiben, aber ausführen können.                     |
| 600    | `chmod -R 600`      | (chmod a+rwx,u-x,g-rwx,o-rwx) setzt Berechtigungen so, dass (U)ser / Eigentümer lesen, schreiben, aber nicht ausführen kann. (G)roup nicht lesen, nicht schreiben und nicht ausführen kann. (O)thers nicht lesen, nicht schreiben und nicht ausführen können. |
| 644    | `chmod -R 644`      | (chmod a+rwx,u-x,g-wx,o-wx) setzt Berechtigungen so, dass (U)ser / Eigentümer lesen, schreiben, aber nicht ausführen kann. (G)roup lesen, nicht schreiben und nicht ausführen kann. (O)thers lesen, nicht schreiben und nicht ausführen können.               |
| 666    | `chmod -R 666`      | (chmod a+rwx,u-x,g-x,o-x) setzt Berechtigungen so, dass (U)ser / Eigentümer lesen, schreiben, aber nicht ausführen kann. (G)roup lesen, schreiben, aber nicht ausführen kann. (O)thers lesen, schreiben, aber nicht ausführen können.                         |
| 755    | `chmod -R 755`      | (chmod a+rwx,g-w,o-w) setzt Berechtigungen so, dass (U)ser / Eigentümer lesen, schreiben und ausführen kann. (G)roup lesen, nicht schreiben, aber ausführen kann. (O)thers lesen, nicht schreiben, aber ausführen können.                                     |
| 764    | `chmod -R 764`      | (chmod a+rwx,g-x,o-wx) setzt Berechtigungen so, dass (U)ser / Eigentümer lesen, schreiben und ausführen kann. (G)roup lesen, schreiben, aber nicht ausführen kann. (O)thers lesen, nicht schreiben und nicht ausführen können.                                |
| 777    | `chmod -R 777`      | (chmod a+rwx) setzt Berechtigungen so, dass (U)ser / Eigentümer lesen, schreiben und ausführen kann. (G)roup lesen, schreiben und ausführen kann. (O)thers lesen, schreiben und ausführen können.                                                             |
| chgrp  | `chgrp -v`          | Ändere Gruppenzugehörigkeit von Dateien oder Verzeichnissen.                                                                                                                                                                                                  |
| chgrpr | `chgrp -Rv`         | Ändere Gruppenzugehörigkeit von Dateien oder Verzeichnissen rekursiv.                                                                                                                                                                                         |
| chgrpu | `chgrp -Rv ${USER}` | Ändere Gruppenzugehörigkeit von Dateien oder Verzeichnissen rekursiv auf den aktuellen Benutzer.                                                                                                                                                              |
| chmod  | `chmod -v`          | Ändere Dateimodus-Bits.                                                                                                                                                                                                                                       |
| chmodr | `chmod -Rv`         | Ändere Dateimodus-Bits rekursiv.                                                                                                                                                                                                                              |
| chmodu | `chmod -Rv u+rwX`   | Ändere Dateimodus-Bits rekursiv auf den aktuellen Benutzer.                                                                                                                                                                                                   |
| chmox  | `chmod +x`          | Mache eine Datei ausführbar.                                                                                                                                                                                                                                  |
| chown  | `chown -v`          | Ändere Dateieigentümer und Gruppe.                                                                                                                                                                                                                            |
| chownr | `chown -Rv`         | Ändere Dateieigentümer und Gruppe rekursiv.                                                                                                                                                                                                                   |
| chownu | `chown -Rv ${USER}` | Ändere Dateieigentümer und Gruppe rekursiv auf den aktuellen Benutzer.                                                                                                                                                                                        |
