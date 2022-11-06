# Default aliases

The `default.aliases.sh` file creates helpful shortcut aliases for many commonly
used commands.

## 💠 Default

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

## 📝 Process aliases

| Alias | Command | Description |
|---|---|---|
| kill9 | `kill -9` | Kill a process. |
| killall | `killall` | Kill a process. |
| ps | `ps -ef` | List all processes. |
| psa | `ps aux` | List all processes. |
| psax | `ps ax` | List all processes. |
| psaux | `ps aux` | List all processes. |
| psauxw | `ps auxw` | List all processes. |
| psauxww | `ps auxww` | List all processes. |

## 🌐 Global aliases

These aliases are expanded in any position in the command line, meaning you can use them even at the
end of the command you've typed. Examples:

Quickly pipe to less:

```zsh
$ ls -l /var/log L
# will run
$ ls -l /var/log | less
```

Silences stderr output:

```zsh
$ find . -type f NE
# will run
$ find . -type f 2>/dev/null
```

| Alias | Command | Description |
|---|---|---|
| H | `\| head`              | Pipes output to head which outputs the first part of a file |
| T | `\| tail`              | Pipes output to tail which outputs the last part of a file |
| G | `\| grep`              | Pipes output to grep to search for some word           |
| L | `\| less`              | Pipes output to less, useful for paging                |
| M | `\| most`              | Pipes output to more, useful for paging                |
| LL | `2>&1 \| less`         | Writes stderr to stdout and passes it to less          |
| CA | `2>&1 \| cat -A`       | Writes stderr to stdout and passes it to cat           |
| NE | `2 > /dev/null`        | Silences stderr                     |
| NUL | `> /dev/null 2>&1`     | Silences both stdout and stderr     |
| P | `2>&1\| pygmentize -l pytb` | Writes stderr to stdout and passes it to pygmentize    |

## File extension aliases

These are special aliases that are triggered when a file name is passed as the command. For example,
if the pdf file extension is aliased to `acroread` (a popular Linux pdf reader), when running `file.pdf`
that file will be open with `acroread`.

### Reading Docs

| Alias | Command | Description |
|---|---|---|
| pdf | `acroread` | Opens up a document using acroread |
| ps | `gv`   | Opens up a .ps file using gv   |
| dvi | `xdvi` | Opens up a .dvi file using xdvi |
| chm | `xchm` | Opens up a .chm file using xchm |
| djvu | `djview` | Opens up a .djvu file using djview |

### Listing files inside a packed file

| Alias | Command | Description |
|---|---|---|
| zip | `unzip -l` | Lists files inside a .zip file |
| rar | `unrar l` | Lists files inside a .rar file |
| tar | `tar tf` | Lists files inside a .tar file |
| tar.gz | `echo` | Lists files inside a .tar.gz file |
| ace | `unace l` | Lists files inside a .ace file |
