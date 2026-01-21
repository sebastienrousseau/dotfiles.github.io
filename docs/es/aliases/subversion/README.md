---
description: Los alias de Subversion son una colección de alias que te permiten interactuar con el comando `svn`. Subversion es un sistema de control de versiones.
lang: es-ES
metaTitle: Alias de Subversion - Dotfiles (ES)
permalink: /es/aliases/subversion/
---

# Alias de Subversion

El archivo `subversion.aliases.sh` crea atajos útiles para muchos comandos de [Subversion](https://subversion.apache.org) utilizados comúnmente.

Los alias de Subversion son una colección de alias que te permiten interactuar con el comando `svn`. Subversion es un sistema de control de versiones, que te permite mantener versiones antiguas de archivos y directorios (generalmente código fuente), y llevar un registro de quién, cuándo y por qué ocurrieron los cambios.

## Subversion

[Subversion](https://subversion.apache.org) es un sistema de control de versiones que rastrea los cambios en archivos y directorios. Se utiliza para gestionar el código fuente de proyectos de software.

| Alias | Comando          | Descripción                                                                                             |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| sad   | `svn add`        | Poner nuevos archivos y directorios bajo control de versiones                                                     |
| sau   | `svn auth`       | Gestionar credenciales de autenticación en caché                                                                |
| sbl   | `svn blame`      | Mostrar cuándo fue modificada por última vez (o próxima) cada línea de un archivo                                                |
| scg   | `svn changelist` | Asociar (o disociar) la lista de cambios CLNAME con los archivos nombrados                                        |
| sco   | `svn checkout`   | Obtener una copia de trabajo de un repositorio                                                              |
| scl   | `svn cleanup`    | Recuperarse de una operación interrumpida que dejó la copia de trabajo bloqueada, o eliminar archivos no deseados |
| sci   | `svn commit`     | Enviar cambios de tu copia de trabajo al repositorio                                                   |
| scp   | `svn copy`       | Copiar archivos y directorios en una copia de trabajo o repositorio                                              |
| sct   | `svn cat`        | Mostrar el contenido de archivos o URL especificados                                                           |
| sdi   | `svn diff`       | Mostrar cambios locales o diferencias entre dos revisiones o rutas                                     |
| sdl   | `svn delete`     | Eliminar archivos y directorios del control de versiones                                                       |
| shp   | `svn help`       | Describir el uso de este programa o sus subcomandos                                                   |
| sin   | `svn info`       | Mostrar información sobre un elemento local o remoto                                                        |
| sip   | `svn import`     | Confirmar (commit) un archivo o árbol no versionado en el repositorio                                                 |
| slg   | `svn log`        | Mostrar los mensajes de registro para un conjunto de revisión(es) y/o ruta(s)                                           |
| slk   | `svn lock`       | Bloquear rutas de copia de trabajo o URL en el repositorio, ningún otro usuario puede confirmar cambios en ellos             |
| sls   | `svn list`       | Listar entradas del directorio en el repositorio                                                                |
| smd   | `svn mkdir`      | Crear un nuevo directorio bajo control de versiones                                                            |
| smg   | `svn merge`      | Fusionar cambios en una copia de trabajo                                                                       |
| smgi  | `svn mergeinfo`  | Mostrar información relacionada con la fusión                                                                       |
| smv   | `svn move`       | Mover (renombrar) un elemento en una copia de trabajo o repositorio                                                   |
| sp    | `svn propset`    | Establecer el valor de una propiedad en archivos, directorios o revisiones                                                |
| spdl  | `svn propdel`    | Eliminar una propiedad de archivos, directorios o revisiones                                                        |
| spdt  | `svn propedit`   | Editar una propiedad con un editor externo                                                                 |
| spgt  | `svn propget`    | Imprimir el valor de una propiedad en archivos, directorios o revisiones                                              |
| sph   | `svn patch`      | Aplicar un parche a una copia de trabajo                                                                         |
| spls  | `svn proplist`   | Listar todas las propiedades en archivos, directorios o revisiones                                                        |
| srl   | `svn relocate`   | Reubicar la copia de trabajo para apuntar a una URL de raíz de repositorio diferente                                   |
| srs   | `svn resolve`    | Resolver conflictos en archivos o directorios de la copia de trabajo                                                  |
| srsd  | `svn resolved`   | Eliminar el estado 'en conflicto' en archivos o directorios de la copia de trabajo                                          |
| srv   | `svn revert`     | Restaurar estado prístino de la copia de trabajo (deshacer cambios locales)                                                |
| sst   | `svn status`     | Imprimir el estado de los archivos y directorios de la copia de trabajo                                                  |
| ssw   | `svn switch`     | Actualizar la copia de trabajo a una URL diferente dentro del mismo repositorio                                   |
| sulk  | `svn unlock`     | Desbloquear rutas o URL de la copia de trabajo.                                                                      |
| sup   | `svn update`     | Traer cambios del repositorio a la copia de trabajo                                                 |
| supg  | `svn upgrade`    | Actualizar el formato de almacenamiento de metadatos para una copia de trabajo                                                  |
| sxp   | `svn export`     | Crear una copia no versionada de un árbol                                                                   |
