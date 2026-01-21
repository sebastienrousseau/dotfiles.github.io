---
description: The Chmod aliases allow to change the permissions (or access mode) of a file or directory.
lang: zh-CN
metaTitle: Chmod aliases - Dotfiles (CN)
permalink: /zh/aliases/chmod/

meta:
  - name: twitter:card
    content: The Chmod aliases allow to change the permissions (or access mode) of a file or directory.
  - name: twitter:description
    content: The Chmod aliases allow to change the permissions (or access mode) of a file or directory.
  - name: twitter:title
    content: Chmod aliases - Dotfiles (CN)
  - name: og:title
    content: Chmod aliases - Dotfiles (CN)
  - name: og:description
    content: The Chmod aliases allow to change the permissions (or access mode) of a file or directory.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Chmod aliases

The `chmod.aliases.sh` file creates helpful shortcut aliases for changing
file permissions.

## Permission

The chmod utility modifies the file mode bits of the listed files as specified
by the mode operand. It may also be used to modify the Access Control Lists
(ACLs) associated with the listed files.

| Alias  | Command             | Description                                                                                                                                                                                                          |
| ------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 000    | `chmod -R 000`      | (chmod a-rwx) sets permissions so that, (U)ser / owner can't read, can't write and can't execute. (G)roup can't read, can't write and can't execute. (O)thers can't read, can't write and can't execute.             |
| 400    | `chmod -R 400`      | (chmod a-rw) sets permissions so that, (U)ser / owner can't read, can't write and can execute. (G)roup can't read, can't write and can execute. (O)thers can't read, can't write and can execute.                    |
| 444    | `chmod -R 444`      | (chmod a-r) sets permissions so that, (U)ser / owner can't read, can't write and can execute. (G)roup can't read, can't write and can execute. (O)thers can't read, can't write and can execute.                     |
| 600    | `chmod -R 600`      | (chmod a+rwx,u-x,g-rwx,o-rwx) sets permissions so that, (U)ser / owner can read, can write and can't execute. (G)roup can't read, can't write and can't execute. (O)thers can't read, can't write and can't execute. |
| 644    | `chmod -R 644`      | (chmod a+rwx,u-x,g-wx,o-wx) sets permissions so that, (U)ser / owner can read, can write and can't execute. (G)roup can read, can't write and can't execute. (O)thers can read, can't write and can't execute.       |
| 666    | `chmod -R 666`      | (chmod a+rwx,u-x,g-x,o-x) sets permissions so that, (U)ser / owner can read, can write and can't execute. (G)roup can read, can write and can't execute. (O)thers can read, can write and can't execute.             |
| 755    | `chmod -R 755`      | (chmod a+rwx,g-w,o-w) sets permissions so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can't write and can execute. (O)thers can read, can't write and can execute.                   |
| 764    | `chmod -R 764`      | (chmod a+rwx,g-x,o-wx) sets permissions so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can write and can't execute. (O)thers can read, can't write and can't execute.                |
| 777    | `chmod -R 777`      | (chmod a+rwx) sets permissions so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can write and can execute. (O)thers can read, can write and can execute.                               |
| chgrp  | `chgrp -v`          | Change group ownership of 文件 or directories.                                                                                                                                                                      |
| chgrpr | `chgrp -Rv`         | Change group ownership of 文件 or directories recursively.                                                                                                                                                          |
| chgrpu | `chgrp -Rv ${USER}` | Change group ownership of 文件 or directories recursively to the current user.                                                                                                                                      |
| chmod  | `chmod -v`          | Change 文件 mode bits.                                                                                                                                                                                               |
| chmodr | `chmod -Rv`         | Change 文件 mode bits recursively.                                                                                                                                                                                   |
| chmodu | `chmod -Rv u+rwX`   | Change 文件 mode bits recursively to the current user.                                                                                                                                                               |
| chmox  | `chmod +x`          | Make a 文件 executable.                                                                                                                                                                                              |
| chown  | `chown -v`          | Change 文件 owner and group.                                                                                                                                                                                         |
| chownr | `chown -Rv`         | Change 文件 owner and group recursively.                                                                                                                                                                             |
| chownu | `chown -Rv ${USER}` | Change 文件 owner and group recursively to the current user.                                                                                                                                                         |
