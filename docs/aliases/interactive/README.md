# Interactive aliases

The `interactive.aliases.sh` file creates helpful shortcut aliases for enabling
interactive mode to critical common functionality in the terminal.

## 🙏 Interactive mode

[Interactive mode](https://en.wikipedia.org/wiki/Interactive_mode) is a mode in
which the user is prompted for input before the command is executed.

This is a useful feature for commands such as `cp`, `mv`, `rm`, and `ln` that
can be used to overwrite files or directories.

| Alias | Command | Description |
| ----- | ----- | ----- |
| bin | `rm -fr ${HOME}/.Trash` | Remove all files in the trash. |
| cp  | `cp -vi` | Copy files and directories. |
| del | `rm -rfvi` | Remove a file or directory. |
| ln  | `ln -vi` | ln: interactive symbolic link. |
| mv  | `mv -vi` | Move files interactively (ask before overwrite) and verbose. |
| rm  | `rm -vi` | Prompts for every file before removing. |
| zap | `rm -vi` | Remove files interactively (ask before overwrite). |
