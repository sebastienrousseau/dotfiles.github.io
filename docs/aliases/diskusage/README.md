# Disk usage aliases

The `diskusage.aliases.sh` file creates helpful shortcut aliases for the `du` command.

## 💾 Disk usage

[Disk usage](https://en.wikipedia.org/wiki/Du_(Unix)) is a command that estimates file space usage. The `du` command is used to estimate file space usage. The space used by each file is shown in kilobytes. The space used by each directory is shown in kilobytes, along with the total space used by all files in that directory and its subdirectories.

| Alias | Command | Description |
| ----- | ----- | ----- |
| du    | `du -h` | Show the disk usage of the current directory. |
| du1   | `du -hxd 1 | sort -h` | File size of files and directories in current directory. |
| ducks | `du -cks *.*| sort -rn | head -n 10` | Top 10 largest files and directories in current directory. |
| duh   | `du` | File size of files and directories. |
| dus   | `du -hs *` | File size human readable output sorted by size. |
| dusym | `du * -hsLc` | File size of files and directories in current directory including symlinks. |
| dut   | `dus` | Total file size of current directory. |
