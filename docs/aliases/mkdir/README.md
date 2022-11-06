# Mkdir aliases

The `mkdir.aliases.sh` file creates helpful shortcut aliases for creating directories.

## 📁 Mkdir

[Mkdir](https://en.wikipedia.org/wiki/Mkdir) is a command that creates a
directory. The mkdir utility creates the directories named as operands, in the
order specified, using mode “rwxrwxrwx” (0777).

| Alias | Command | Description |
| ----- | ----- | ----- |
| mcd | `mkdir -pv && cd` | Make directory and cd into it. |
| mcdp | `mkdir -pv && cd` | Make directory and parents and cd into it. |
| md | `mkd` | Make directory. |
| mdd | `mkdir -pv $(date +%Y%m%d)` | Make directory with date. |
| mdp | `mkdir -pv` | Make directory and parents. |
| mdt | `mkdir -pv $(date +%h%m%s)` | Make directory with time. |
