# Wget aliases

This `wget.aliases.zsh` file creates helpful shortcut aliases for many commonly
used [wget](https://www.gnu.org/software/wget/) commands.

## 📥 Wget

 GNU [Wget](https://www.gnu.org/software/wget/) is a free utility for
 non-interactive download of files from the Web.  It supports HTTP, HTTPS, and
 FTP protocols, as well as retrieval through HTTP proxies.

| Alias | Command | Description |
| ----- | ----- | ----- |
| wg | `wget` | Download a file. |
| wgc | `wg` | Continue a partially-downloaded file. |
| wge | `wg -e robots=off` | Download a file, ignoring robots.txt. |
| wget | `wget -c` | Continue a partially-downloaded file. |
