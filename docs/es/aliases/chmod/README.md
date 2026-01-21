---
description: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
lang: es-ES
metaTitle: Alias de Chmod - Dotfiles (ES)
permalink: /es/aliases/chmod/
meta:
  - name: twitter:card
    content: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
  - name: twitter:description
    content: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
  - name: twitter:title
    content: Alias de Chmod - Dotfiles (ES)
  - name: og:title
    content: Alias de Chmod - Dotfiles (ES)
  - name: og:description
    content: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Chmod

El archivo `chmod.aliases.sh` crea atajos útiles para cambiar los permisos de archivos.

## Permisos

La utilidad chmod modifica los bits de modo de archivo de los archivos listados según lo especificado por el operando de modo. También se puede utilizar para modificar las Listas de Control de Acceso (ACL) asociadas con los archivos listados.

| Alias  | Comando             | Descripción                                                                                                                                                                                                                      |
| ------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 000    | `chmod -R 000`      | (chmod a-rwx) establece permisos para que el (U)suario/dueño no pueda leer, escribir ni ejecutar. El (G)rupo no pueda leer, escribir ni ejecutar. (O)tros no puedan leer, escribir ni ejecutar.                                  |
| 400    | `chmod -R 400`      | (chmod a-rw) establece permisos para que el (U)suario/dueño no pueda leer, ni escribir, pero pueda ejecutar. (G)rupo no pueda leer, ni escribir, pero pueda ejecutar. (O)tros no puedan leer, ni escribir, pero puedan ejecutar. |
| 444    | `chmod -R 444`      | (chmod a-r) establece permisos para que el (U)suario/dueño no pueda leer, ni escribir, pero pueda ejecutar. (G)rupo no pueda leer, ni escribir, pero pueda ejecutar. (O)tros no puedan leer, ni escribir, pero puedan ejecutar.  |
| 600    | `chmod -R 600`      | (chmod a+rwx,u-x,g-rwx,o-rwx) establece permisos para que el (U)suario/dueño pueda leer, escribir, pero no ejecutar. (G)rupo no pueda leer, escribir ni ejecutar. (O)tros no puedan leer, escribir ni ejecutar.                  |
| 644    | `chmod -R 644`      | (chmod a+rwx,u-x,g-wx,o-wx) establece permisos para que el (U)suario/dueño pueda leer, escribir, pero no ejecutar. (G)rupo pueda leer, pero no escribir ni ejecutar. (O)tros puedan leer, pero no escribir ni ejecutar.          |
| 666    | `chmod -R 666`      | (chmod a+rwx,u-x,g-x,o-x) establece permisos para que el (U)suario/dueño pueda leer, escribir, pero no ejecutar. (G)rupo pueda leer, escribir, pero no ejecutar. (O)tros puedan leer, escribir, pero no ejecutar.                |
| 755    | `chmod -R 755`      | (chmod a+rwx,g-w,o-w) establece permisos para que el (U)suario/dueño pueda leer, escribir y ejecutar. (G)rupo pueda leer, pero no escribir, y ejecutar. (O)tros puedan leer, pero no escribir, y ejecutar.                       |
| 764    | `chmod -R 764`      | (chmod a+rwx,g-x,o-wx) establece permisos para que el (U)suario/dueño pueda leer, escribir y ejecutar. (G)rupo pueda leer, escribir, pero no ejecutar. (O)tros puedan leer, pero no escribir, ni ejecutar.                       |
| 777    | `chmod -R 777`      | (chmod a+rwx) establece permisos para que el (U)suario/dueño pueda leer, escribir y ejecutar. (G)rupo pueda leer, escribir y ejecutar. (O)tros puedan leer, escribir y ejecutar.                                                 |
| chgrp  | `chgrp -v`          | Cambiar la propiedad de grupo de archivos o directorios.                                                                                                                                                                         |
| chgrpr | `chgrp -Rv`         | Cambiar la propiedad de grupo de archivos o directorios recursivamente.                                                                                                                                                          |
| chgrpu | `chgrp -Rv ${USER}` | Cambiar la propiedad de grupo de archivos o directorios recursivamente al usuario actual.                                                                                                                                        |
| chmod  | `chmod -v`          | Cambiar los bits de modo de archivo.                                                                                                                                                                                             |
| chmodr | `chmod -Rv`         | Cambiar los bits de modo de archivo recursivamente.                                                                                                                                                                              |
| chmodu | `chmod -Rv u+rwX`   | Cambiar los bits de modo de archivo recursivamente para el usuario actual.                                                                                                                                                       |
| chmox  | `chmod +x`          | Hacer un archivo ejecutable.                                                                                                                                                                                                     |
| chown  | `chown -v`          | Cambiar el propietario y grupo del archivo.                                                                                                                                                                                      |
| chownr | `chown -Rv`         | Cambiar el propietario y grupo del archivo recursivamente.                                                                                                                                                                       |
| chownu | `chown -Rv ${USER}` | Cambiar el propietario y grupo del archivo recursivamente al usuario actual.                                                                                                                                                     |
