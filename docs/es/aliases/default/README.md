---
description: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
lang: es-ES
metaTitle: Default aliases - Dotfiles (ES)
permalink: /es/aliases/default/

meta:
  - name: twitter:card
    content: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
  - name: twitter:description
    content: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
  - name: twitter:title
    content: Default aliases - Dotfiles (ES)
  - name: og:title
    content: Default aliases - Dotfiles (ES)
  - name: og:description
    content: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Default aliases

The `default.aliases.sh` file creates helpful shortcut aliases for many commonly
used commands.

## Default

The Default aliases are aliases that are not specific to any particular command.
They are common aliases that are used in many different contexts and are listed
here for convenience. The aliases are listed in alphabetical order for easy use.

| Alias    | Command                              | Description                                                                                                                             |
| -------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| :q       | `quit`                               | Shortcut for the `exit` command.                                                                                                        |
| bye      | `quit`                               | Shortcut for the `exit` command.                                                                                                        |
| ctf      | `echo $(ls -1                        | wc -l)`                                                                                                                                 | Count the number of archivos in the current directorio. |
| curl     | `curl --compressed`                  | Use compression when transferring data.                                                                                                 |
| da       | `date "+%Y-%m-%d %A %T %Z"`          | Display the current date and time.                                                                                                      |
| h        | `history`                            | Lists all recently used commands.                                                                                                       |
| halt     | `sudo /sbin/halt`                    | Shutdown the system.                                                                                                                    |
| ifconfig | `sudo ifconfig`                      | Append sudo to ifconfig (configure network interface parameters) command.                                                               |
| ipinfo   | `ipconfig getpacket en0`             | Get network interface parameters for en0.                                                                                               |
| moon     | `curl -s "wttr.in/?format=%m"`       | Get the moon phase.                                                                                                                     |
| nls      | `sudo lsof -i -P                     | grep LISTEN`                                                                                                                            | how only active network listeners.                  |
| now      | `date +"%T"`                         | Mostrar the current time.                                                                                                                  |
| op       | `sudo lsof -i -P`                    | Listar of Abrir ports.                                                                                                                     |
| p        | `pwd`                                | Shortcut for `pwd` which returns working directorio name.                                                                                |
| path     | `echo ${PATH//:/\\n}`                | Display the $PATH variable on newlines.                                                                                                 |
| pid      | `ps -f`                              | Display the uid, pid, parent pid, recent CPU usage, process Iniciar time, controlling tty, elapsed CPU usage, and the associated command. |
| ping     | `ping -c 5`                          | Limit Ping to 5 ECHO_REQUEST packets.                                                                                                   |
| please   | `sudo -`                             | Execute a command as the superuser.                                                                                                     |
| ports    | `netstat -tulan`                     | Listar all listening ports.                                                                                                               |
| poweroff | `sudo /sbin/shutdown`                | Power off the system.                                                                                                                   |
| ps       | `ps auxwww`                          | Getting full path of executables.                                                                                                       |
| q        | `quit`                               | Shortcut for the `exit` command.                                                                                                        |
| qfind    | `find . -name`                       | Quickly Buscar for archivo.                                                                                                                |
| quit     | `exit`                               | Shortcut for the`exit` command.                                                                                                         |
| r        | `reload`                             | Reload the shell.                                                                                                                       |
| reboot   | `sudo /sbin/reboot`                  | Reboot the system.                                                                                                                      |
| reload   | `exec $SHELL -l`                     | Reload the shell.                                                                                                                       |
| shutdown | `sudo shutdown -h now'`              | Shutdown the system.                                                                                                                    |
| spd      | `sudo rm -rf /private/var/log/asl/*` | Eliminar all log archivos in /private/var/log/asl.                                                                                           |
| srv      | `python3 -m http.server`             | Iniciar a simple HTTP server.                                                                                                             |
| t        | `tail -f`                            | Prints the last 10 lines of a text or log archivo, and then waits for new additions to the archivo to Imprimir it in real time.                  |
| top      | `sudo btop`                          | Allows the user to interactively monitor the system's vital resources or server's processes in real time.                               |
| tree     | `tree --dirsfirst`                   | Display a directorio tree.                                                                                                               |
| wk       | `date +%V`                           | Mostrar the current week number.                                                                                                           |
| wth      | `curl -s "wttr.in/?format=3"`        | Get the weather.                                                                                                                        |
| x        | `quit`                               | Shortcut for the`exit` command.                                                                                                         |
