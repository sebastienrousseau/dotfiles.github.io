---
description: Los alias de Utilidades Principales GNU proporcionan comandos potentes que crean atajos a comandos de utilidades principales utilizados frecuentemente. Todos estas funciones y alias son envoltorios alrededor de las Utilidades Principales GNU que son las herramientas básicas y fundamentales de un sistema GNU/Linux.
lang: es-ES
metaTitle: Alias de Utilidades Principales GNU - Dotfiles (ES)
permalink: /es/aliases/gnu/
meta:
  - name: keywords
    content: alias, git, gitconfig, configuración, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Los alias de Utilidades Principales GNU proporcionan comandos potentes que crean atajos a comandos de utilidades principales utilizados frecuentemente. Todos estas funciones y alias son envoltorios alrededor de las Utilidades Principales GNU que son las herramientas básicas y fundamentales de un sistema GNU/Linux.
  - name: twitter:description
    content: Los alias de Utilidades Principales GNU proporcionan comandos potentes que crean atajos a comandos de utilidades principales utilizados frecuentemente. Todos estas funciones y alias son envoltorios alrededor de las Utilidades Principales GNU que son las herramientas básicas y fundamentales de un sistema GNU/Linux.
  - name: twitter:title
    content: Alias de Utilidades Principales GNU - Dotfiles (ES)
  - name: og:title
    content: Alias de Utilidades Principales GNU - Dotfiles (ES)
  - name: og:description
    content: Los alias de Utilidades Principales GNU proporcionan comandos potentes que crean atajos a comandos de utilidades principales utilizados frecuentemente. Todos estas funciones y alias son envoltorios alrededor de las Utilidades Principales GNU que son las herramientas básicas y fundamentales de un sistema GNU/Linux.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Utilidades Principales GNU

El archivo `gnucoreutils-aliases.sh` crea atajos útiles para muchos comandos comúnmente utilizados de [GNU coreutils][coreutils].

Los alias de Utilidades Principales GNU proporcionan comandos potentes que crean atajos a comandos de utilidades principales utilizados frecuentemente. Todos estas funciones y alias son envoltorios alrededor de las Utilidades Principales GNU que son las herramientas básicas y fundamentales de un sistema GNU/Linux.

Estas son las utilidades principales que se espera que existan en cada sistema operativo.

## Alias de GNU coreutils

| Alias     | Comando      | Descripción                                                                                                                                                                              |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| b2sum     | `gb2sum`     | Imprimir o verificar sumas de comprobación BLAKE2b (512-bit).                                                                                                                                              |
| base32    | `gbase32`    | Codificar o decodificar en Base32 un ARCHIVO, o entrada estándar, a la salida estándar.                                                                                                                     |
| base64    | `gbase64`    | Codificar o decodificar en Base64 un ARCHIVO, o entrada estándar, a la salida estándar.                                                                                                                     |
| basename  | `gbasename`  | Imprimir NOMBRE con cualquier componente de directorio inicial eliminado.                                                                                                                                |
| basenc    | `gbasenc`    | Codificar o decodificar ARCHIVO con basenc, o entrada estándar, a la salida estándar.                                                                                                                            |
| cat       | `gcat`       | Concatenar ARCHIVO(s), o entrada estándar, a la salida estándar.                                                                                                                              |
| chcon     | `gchcon`     | Cambiar el contexto de seguridad SELinux de cada ARCHIVO al CONTEXTO especificado.                                                                                                                             |
| chgrp     | `gchgrp`     | Cambiar el grupo de cada ARCHIVO a GRUPO.                                                                                                                                                  |
| chmod     | `gchmod`     | Cambiar el modo de cada ARCHIVO a MODO.                                                                                                                                                    |
| chown     | `gchownn`    | Cambiar el propietario y/o grupo de cada ARCHIVO a PROPIETARIO y/o GRUPO.                                                                                                                        |
| chroot    | `gchroot`    | Ejecutar COMANDO con el directorio raíz establecido en NUEVORAÍZ (NEWROOT).                                                                                                                                          |
| cksum     | `gcksum`     | Imprimir suma de comprobación CRC y conteo de bytes.                                                                                                                                                      |
| comm      | `gcomm`      | Comparar dos archivos ordenados línea por línea.                                                                                                                                                   |
| cp        | `gcp`        | Copiar ORIGEN a DESTINO, o múltiples ORIGEN(es) a DIRECTORIO.                                                                                                                                 |
| csplit    | `gcsplit`    | Dividir un archivo en secciones determinadas por líneas de contexto.                                                                                                                                  |
| cut       | `gcut`       | Imprimir partes seleccionadas de líneas de cada ARCHIVO a la salida estándar.                                                                                                                         |
| date      | `gdate`      | Imprimir o establecer la fecha y hora del sistema.                                                                                                                                                   |
| dd        | `gdd`        | Copiar un archivo, convirtiendo y formateando de acuerdo con los operandos.                                                                                                                        |
| df        | `gdf`        | Informar del uso de espacio en disco del sistema de archivos.                                                                                                                                                     |
| dir       | `gdir`       | Listar contenidos del directorio.                                                                                                                                                                 |
| dircolors | `gdircolors` | Convertir colores de salida de ls al formato de dircolors.                                                                                                                                          |
| dirname   | `gdirname`   | Imprimir NOMBRE con su último componente que no sea barra y las barras finales eliminadas.                                                                                                               |
| du        | `gdu`        | Estimar uso de espacio de archivo.                                                                                                                                                               |
| echo      | `gecho`      | Mostrar una línea de texto.                                                                                                                                                                  |
| env       | `genv`       | Imprimir el entorno actual.                                                                                                                                                           |
| expand    | `gexpand`    | Convertir tabulaciones en cada ARCHIVO a espacios, escribiendo a la salida estándar.                                                                                                                         |
| expr      | `gexpr`      | Evaluar EXPRESIÓN.                                                                                                                                                                     |
| factor    | `gfactor`    | Imprimir factores primos de cada número dado.                                                                                                                                                |
| false     | `gfalse`     | No hacer nada, sin éxito.                                                                                                                                                              |
| fmt       | `gfmt`       | Reformatear texto de párrafo.                                                                                                                                                                 |
| fold      | `gfold`      | Ajustar cada línea de entrada para que se ajuste al ancho especificado.                                                                                                                                          |
| grep      | `ggrep`      | Imprimir líneas que coincidan con un patrón.                                                                                                                                                          |
| groups    | `ggroups`    | Imprimir los grupos en los que está un usuario.                                                                                                                                                           |
| head      | `ghead`      | Imprimir las primeras 10 líneas de cada ARCHIVO a la salida estándar.                                                                                                                                |
| hostid    | `ghostid`    | Imprimir el hostid.                                                                                                                                                                        |
| id        | `gid`        | Imprimir identificadores reales y efectivos de usuario y grupo.                                                                                                                                             |
| install   | `ginstall`   | Copiar archivos y establecer atributos.                                                                                                                                                           |
| join      | `gjoin`      | Unir líneas de dos archivos en un campo común.                                                                                                                                               |
| kill      | `gkill`      | Enviar una señal a un proceso.                                                                                                                                                              |
| link      | `glink`      | Crear un enlace a un archivo.                                                                                                                                                                 |
| ln        | `gln`        | Crear enlaces entre archivos.                                                                                                                                                                |
| logname   | `glogname`   | Imprimir el nombre de usuario asociado con el ID de usuario efectivo actual.                                                                                                                       |
| ls        | `gls`        | Listar contenidos del directorio.                                                                                                                                                                 |
| md5sum    | `gmd5sum`    | Imprimir o verificar sumas de comprobación MD5 (128-bit).                                                                                                                                                  |
| mkdir     | `gmkdir`     | Crear el/los DIRECTORIO(s), si no existen ya.                                                                                                                                 |
| mkfifo    | `gmkfifo`    | Crear tuberías con nombre (FIFOs) llamadas PIPE.                                                                                                                                                   |
| mknod     | `gmknod`     | Crear archivos especiales.                                                                                                                                                                    |
| mktemp    | `gmktemp`    | Crear un archivo o directorio temporal, de forma segura.                                                                                                                                            |
| mv        | `gmv`        | Mover ORIGEN a DESTINO, o múltiples ORIGEN(es) a DIRECTORIO.                                                                                                                                 |
| nice      | `gnice`      | Ejecutar una utilidad con prioridad de programación modificada.                                                                                                                                         |
| nl        | `gnl`        | Numerar líneas de archivos, escribiendo a la salida estándar.                                                                                                                                       |
| nohup     | `gnohup`     | Ejecutar un comando inmune a desconexiones (hangups), con salida a un no-tty.                                                                                                                               |
| nproc     | `gnproc`     | Imprimir el número de unidades de procesamiento disponibles.                                                                                                                                          |
| numfmt    | `gnumfmt`    | Reformatear números.                                                                                                                                                                        |
| od        | `god`        | Volcar un archivo en octal y otros formatos.                                                                                                                                                  |
| paste     | `gpaste`     | Fusionar líneas de archivos.                                                                                                                                                                    |
| pathchk   | `gpathchk`   | Comprobar si un nombre de archivo es válido o portátil.                                                                                                                                          |
| pinky     | `gpinky`     | Imprimir información sobre usuarios.                                                                                                                                                           |
| pr        | `gpr`        | Paginar ARCHIVO para impresión.                                                                                                                                                              |
| printenv  | `gprintenv`  | Imprimir el entorno actual.                                                                                                                                                           |
| printf    | `gprintf`    | Formatear e imprimir datos.                                                                                                                                                                   |
| ptx       | `gptx`       | Mostrar el contenido de un archivo de control de terminal.                                                                                                                                         |
| pwd       | `gpwd`       | Imprimir el nombre del directorio de trabajo actual.                                                                                                                                         |
| readlink  | `greadlink`  | Imprimir valor de un enlace simbólico o nombre de archivo canónico.                                                                                                                                   |
| realpath  | `grealpath`  | Canonizar nombres de archivo existentes.                                                                                                                                                        |
| rm        | `grm`        | Eliminar (desvincular) el/los ARCHIVO(s).                                                                                                                                                             |
| rmdir     | `grmdir`     | Eliminar el/los DIRECTORIO(s), si están vacíos.                                                                                                                                            |
| runcon    | `gruncon`    | Ejecutar un comando con un contexto de seguridad SELinux diferente.                                                                                                                                 |
| sed       | `gsed`       | Editor de flujo para filtrar y transformar texto.                                                                                                                                       |
| seq       | `gseq`       | Imprimir una secuencia de números.                                                                                                                                                             |
| sha1sum   | `gsha1sum`   | Imprimir o verificar sumas de comprobación SHA1 (160-bit).                                                                                                                                                 |
| sha224sum | `gsha224sum` | Imprimir o verificar sumas de comprobación SHA224 (224-bit).                                                                                                                                               |
| sha256sum | `gsha256sum` | Imprimir o verificar sumas de comprobación SHA256 (256-bit).                                                                                                                                               |
| sha384sum | `gsha384sum` | Imprimir o verificar sumas de comprobación SHA384 (384-bit).                                                                                                                                               |
| sha512sum | `gsha512sum` | Imprimir o verificar sumas de comprobación SHA512 (512-bit).                                                                                                                                               |
| shred     | `gshred`     | Sobrescribir un archivo para ocultar su contenido, y opcionalmente borrarlo.                                                                                                                         |
| shuf      | `gshuf`      | Generar una permutación aleatoria de las líneas de entrada.                                                                                                                                          |
| sleep     | `gsleep`     | Pausar por NÚMERO segundos.                                                                                                                                                                |
| sort      | `gsort`      | Ordenar líneas de archivos de texto.                                                                                                                                                                |
| split     | `gsplit`     | Dividir un archivo en piezas.                                                                                                                                                                |
| stat      | `gstat`      | Mostrar estado de archivo o sistema de archivos.                                                                                                                                                      |
| stdbuf    | `gstdbuf`    | Ejecutar COMANDO con operaciones de búfer modificadas para sus flujos estándar.                                                                                                                 |
| stty      | `gstty`      | Obtener y establecer atributos de terminal.                                                                                                                                                         |
| sum       | `gsum`       | Imprimir suma de comprobación CRC y conteo de bytes.                                                                                                                                                      |
| sync      | `gsync`      | Invocar sync para vaciar búferes del sistema de archivos.                                                                                                                                                 |
| tac       | `gtac`       | Concatenar e imprimir archivos en reverso.                                                                                                                                                  |
| tail      | `gtail`      | Mostrar la última parte de archivos.                                                                                                                                                           |
| tee       | `gtee`       | Leer de entrada estándar y escribir a salida estándar y archivos.                                                                                                                         |
| test      | `gtest`      | Evaluar expresión condicional.                                                                                                                                                         |
| timeout   | `gtimeout`   | Ejecutar un comando con un límite de tiempo.                                                                                                                                                         |
| touch     | `gtouch`     | Cambiar marcas de tiempo de archivo.                                                                                                                                                                  |
| tr        | `gtr`        | Traducir, comprimir y/o eliminar caracteres.                                                                                                                                            |
| true      | `gtrue`      | No hacer nada, con éxito.                                                                                                                                                                |
| truncate  | `gtruncate`  | truncate: Encoger o extender el tamaño de un archivo al tamaño especificado.                                                                                                                     |
| tsort     | `gtsort`     | Ordenamiento topológico.                                                                                                                                                                        |
| tty       | `gtty`       | Imprimir nombre de archivo de terminal conectado a la entrada estándar.                                                                                                                                 |
| uname     | `guname`     | Imprimir cierta información del sistema.                                                                                                                                                        |
| unexpand  | `gunexpand`  | unexpand: Convertir espacios en cada ARCHIVO a tabulaciones, escribiendo a la salida estándar.                                                                                                               |
| uniq      | `guniq`      | Filtrar líneas coincidentes adyacentes de ENTRADA (o entrada estándar), escribiendo a SALIDA (o salida estándar).                                                                                   |
| unlink    | `gunlink`    | Llamar a la función unlink para eliminar el ARCHIVO especificado.                                                                                                                                   |
| uptime    | `guptime`    | Imprimir la hora actual, el tiempo que el sistema ha estado encendido, el número de usuarios en el sistema, y el número promedio de trabajos en la cola de ejecución en los últimos 1, 5 y 15 minutos. |
| users     | `gusers`     | Mostrar quién está actualmente conectado.                                                                                                                                                       |
| vdir      | `gvdir`      | Listar información sobre los ARCHIVO(s) (el directorio actual por defecto).                                                                                                                     |
| wc        | `gwc`        | Imprimir conteo de nuevas líneas, palabras y bytes para cada ARCHIVO, y una línea total si se especifica más de un ARCHIVO.                                                                                 |
| who       | `gwho`       | Imprimir información sobre los usuarios que están conectados actualmente.                                                                                                                               |
| whoami    | `gwhoami`    | Imprimir el nombre de usuario asociado con el ID de usuario efectivo actual.                                                                                                                       |
| yes       | `gyes`       | Repetidamente mostrar una línea con todas las CADENA(s) especificadas, o 'y'.                                                                                                                           |
