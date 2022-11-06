# UUID aliases

The `uuid.aliases.zsh` file creates helpful shortcut aliases for generating
[UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier).

## 🔗 UUID

[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) is a 128-bit
number used to identify information in computer systems.

| Alias | Command | Description |
| ----- | ----- | ----- |
| uuid | `uuidgen \| tr -d '\n' \| tr '[:upper:]' '[:lower:]' \| pbcopy && pbpaste && echo` | Generate a UUID and copy it to the clipboard. |
