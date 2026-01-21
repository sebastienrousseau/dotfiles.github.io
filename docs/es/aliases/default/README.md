---
description: Los alias Predeterminados son alias que no son específicos de ningún comando en particular. Son alias comunes que se utilizan en muchos contextos diferentes y se enumeran aquí por conveniencia.
lang: es-ES
metaTitle: Alias Predeterminados - Dotfiles (ES)
permalink: /es/aliases/default/
meta:
  - name: twitter:card
    content: Los alias Predeterminados son alias que no son específicos de ningún comando en particular. Son alias comunes que se utilizan en muchos contextos diferentes y se enumeran aquí por conveniencia.
  - name: twitter:description
    content: Los alias Predeterminados son alias que no son específicos de ningún comando en particular. Son alias comunes que se utilizan en muchos contextos diferentes y se enumeran aquí por conveniencia.
  - name: twitter:title
    content: Alias Predeterminados - Dotfiles (ES)
  - name: og:title
    content: Alias Predeterminados - Dotfiles (ES)
  - name: og:description
    content: Los alias Predeterminados son alias que no son específicos de ningún comando en particular. Son alias comunes que se utilizan en muchos contextos diferentes y se enumeran aquí por conveniencia.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Predeterminados

El archivo `default.aliases.sh` crea atajos útiles para muchos comandos utilizados comúnmente.

## Predeterminados

Los alias Predeterminados son alias que no son específicos de ningún comando en particular. Son alias comunes que se utilizan en muchos contextos diferentes y se enumeran aquí por conveniencia. Los alias se enumeran en orden alfabético para facilitar su uso.

| Alias    | Comando                              | Descripción                                                                                                                                     |
| -------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| :q       | `quit`                               | Atajo para el comando `exit`.                                                                                                                   |
| bye      | `quit`                               | Atajo para el comando `exit`.                                                                                                                   |
| ctf      | `echo $(ls -1                        | wc -l)`                                                                                                                                         | Contar el número de archivos en el directorio actual. |
| curl     | `curl --compressed`                  | Usar compresión al transferir datos.                                                                                                            |
| da       | `date "+%Y-%m-%d %A %T %Z"`          | Mostrar la fecha y hora actual.                                                                                                                 |
| h        | `history`                            | Listar todos los comandos usados recientemente.                                                                                                 |
| halt     | `sudo /sbin/halt`                    | Apagar el sistema.                                                                                                                              |
| ifconfig | `sudo ifconfig`                      | Añadir sudo al comando ifconfig (configurar parámetros de interfaz de red).                                                                     |
| ipinfo   | `ipconfig getpacket en0`             | Obtener parámetros de interfaz de red para en0.                                                                                                 |
| moon     | `curl -s "wttr.in/?format=%m"`       | Obtener la fase lunar.                                                                                                                          |
| nls      | `sudo lsof -i -P                     | grep LISTEN`                                                                                                                                    | Mostrar solo escuchas de red activas.                 |
| now      | `date +"%T"`                         | Mostrar la hora actual.                                                                                                                         |
| op       | `sudo lsof -i -P`                    | Lista de puertos abiertos.                                                                                                                      |
| p        | `pwd`                                | Atajo para `pwd` que devuelve el nombre del directorio de trabajo.                                                                              |
| path     | `echo ${PATH//:/\\n}`                | Mostrar la variable $PATH en nuevas líneas.                                                                                                     |
| pid      | `ps -f`                              | Mostrar el uid, pid, pid padre, uso reciente de CPU, hora de inicio del proceso, tty de control, uso de CPU transcurrido y el comando asociado. |
| ping     | `ping -c 5`                          | Limitar Ping a 5 paquetes ECHO_REQUEST.                                                                                                         |
| please   | `sudo -`                             | Ejecutar un comando como superusuario.                                                                                                          |
| ports    | `netstat -tulan`                     | Listar todos los puertos en escucha.                                                                                                            |
| poweroff | `sudo /sbin/shutdown`                | Apagar el sistema.                                                                                                                              |
| ps       | `ps auxwww`                          | Obtener ruta completa de ejecutables.                                                                                                           |
| q        | `quit`                               | Atajo para el comando `exit`.                                                                                                                   |
| qfind    | `find . -name`                       | Buscar archivo rápidamente.                                                                                                                     |
| quit     | `exit`                               | Atajo para el comando `exit`.                                                                                                                   |
| r        | `reload`                             | Recargar el shell.                                                                                                                              |
| reboot   | `sudo /sbin/reboot`                  | Reiniciar el sistema.                                                                                                                           |
| reload   | `exec $SHELL -l`                     | Recargar el shell.                                                                                                                              |
| shutdown | `sudo shutdown -h now'`              | Apagar el sistema.                                                                                                                              |
| spd      | `sudo rm -rf /private/var/log/asl/*` | Eliminar todos los archivos de registro en /private/var/log/asl.                                                                                |
| srv      | `python3 -m http.server`             | Iniciar un servidor HTTP simple.                                                                                                                |
| t        | `tail -f`                            | Imprime las últimas 10 líneas de un archivo de texto o registro, y luego espera nuevas adiciones al archivo para imprimirlo en tiempo real.     |
| top      | `sudo btop`                          | Permite al usuario monitorear interactivamente los recursos vitales del sistema o los procesos del servidor en tiempo real.                     |
| tree     | `tree --dirsfirst`                   | Mostrar un árbol de directorios.                                                                                                                |
| wk       | `date +%V`                           | Mostrar el número de semana actual.                                                                                                             |
| wth      | `curl -s "wttr.in/?format=3"`        | Obtener el clima.                                                                                                                               |
| x        | `quit`                               | Atajo para el comando `exit`.                                                                                                                   |
