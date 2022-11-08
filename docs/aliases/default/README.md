---
description: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
lang: en-GB
metaTitle: Default aliases - Dotfiles (UK)
permalink: /aliases/default/

meta:
  - name: twitter:card
    content: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
  - name: twitter:creator
    content: "@wwdseb"
  - name: twitter:description
    content: The Default aliases are aliases that are not specific to any particular command. They are common aliases that are used in many different contexts and are listed here for convenience.
  - name: og:title
    content: Default aliases - Dotfiles (UK)
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

| Alias | Command | Description |
| ----- | ----- | ----- |
| :q    | `quit` | Shortcut for the `exit` command. |
| bye   | `quit` | Shortcut for the `exit` command. |
| ctf   | `echo $(ls -1 | wc -l)` | Count the number of files in the current directory. |
| curl  | `curl --compressed` | Use compression when transferring data. |
| da    | `date "+%Y-%m-%d %A %T %Z"` | Display the current date and time. |
| h     | `history` | Lists all recently used commands. |
| halt  | `sudo /sbin/halt` | Shutdown the system. |
| ifconfig | `sudo ifconfig` | Append sudo to ifconfig (configure network interface parameters) command. |
| ipinfo | `ipconfig getpacket en0` | Get network interface parameters for en0. |
| moon  | `curl -s "wttr.in/?format=%m"` | Get the moon phase. |
| nls   | `sudo lsof -i -P | grep LISTEN` | how only active network listeners. |
| now   | `date +"%T"` | Show the current time. |
| op    | `sudo lsof -i -P` | List of open ports. |
| p     | `pwd` | Shortcut for `pwd` which returns working directory name. |
| path  | `echo  ${PATH//:/\\n}` | Display the $PATH variable on newlines. |
| pid   | `ps -f` | Display the uid, pid, parent pid, recent CPU usage, process start time, controlling tty, elapsed CPU usage, and the associated command. |
| ping  | `ping -c 5` | Limit Ping to 5 ECHO_REQUEST packets. |
| please | `sudo -` | Execute a command as the superuser. |
| ports | `netstat -tulan` | List all listening ports. |
| poweroff | `sudo /sbin/shutdown` | Power off the system. |
| ps | `ps auxwww` | Getting full path of executables. |
| q | `quit` | Shortcut for the `exit` command. |
| qfind | `find . -name` | Quickly search for file. |
| quit | `exit` | Shortcut for the`exit` command. |
| r | `reload` | Reload the shell. |
| reboot | `sudo /sbin/reboot` | Reboot the system. |
| reload | `exec $SHELL -l` | Reload the shell. |
| shutdown | `sudo shutdown -h now'` | Shutdown the system. |
| spd | `sudo rm -rf /private/var/log/asl/*` | Remove all log files in /private/var/log/asl. |
| srv | `python3 -m http.server` | Start a simple HTTP server. |
| t | `tail -f` | Prints the last 10 lines of a text or log file, and then waits for new additions to the file to print it in real time. |
| top | `sudo btop` | Allows the user to interactively monitor the system's vital resources or server's processes in real time. |
| tree | `tree --dirsfirst` | Display a directory tree. |
| wk | `date +%V` | Show the current week number. |
| wth | `curl -s "wttr.in/?format=3"` | Get the weather. |
| x | `quit` | Shortcut for the`exit` command. |
