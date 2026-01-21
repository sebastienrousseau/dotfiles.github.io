---
description: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git utilizados con frecuencia. Todas estas funciones y alias son envoltorios (wrappers) alrededor de las herramientas de línea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
lang: es-ES
metaTitle: Alias de Git - Dotfiles (ES)
permalink: /es/aliases/git/

meta:
  - name: keywords
    content: alias, git, gitconfig, configuración, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git utilizados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
  - name: twitter:description
    content: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git utilizados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
  - name: twitter:title
    content: Alias de Git - Dotfiles (ES)
  - name: og:title
    content: Alias de Git - Dotfiles (ES)
  - name: og:description
    content: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git utilizados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Git

El archivo `git.aliases.sh` crea atajos útiles para muchos comandos comunes de [Git](https://www.heroku.com/).

Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git utilizados con frecuencia. Todas estas funciones y alias son envoltorios (wrappers) alrededor de las herramientas de línea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.

## Trabajar en el cambio actual

| Alias | Comando               | Descripción                                                                           |
| ----- | --------------------- | ------------------------------------------------------------------------------------- |
| g     | `git`                 | Comandos de Git en forma abreviada.                                                   |
| ga    | `git add`             | Añadir contenido del archivo al índice.                                               |
| gaa   | `git add --all`       | Añadir todo el contenido del archivo al índice.                                       |
| gad   | `git add .`           | Añadir el contenido del archivo del directorio actual al índice.                      |
| gau   | `git add --update`    | Añadir contenido del archivo y actualizar el índice con cambios del árbol de trabajo. |
| gco   | `git checkout`        | Deshacer hasta el último commit.                                                      |
| gdis  | `git checkout --`     | Descartar cambios en un archivo (o lista de archivos) en el árbol de trabajo.         |
| gmv   | `git mv`              | Mover o renombrar un archivo, un directorio o un enlace simbólico.                    |
| grs   | `git restore`         | Restaurar archivos del árbol de trabajo.                                              |
| gsc   | `git sparse-checkout` | Inicializar y modificar el sparse-checkout.                                           |

## Iniciar un área de trabajo

| Alias | Comando     | Descripción                                                   |
| ----- | ----------- | ------------------------------------------------------------- |
| gcl   | `git clone` | Clonar un repositorio en un nuevo directorio.                 |
| gin   | `git init`  | Crear un repositorio Git vacío o reinicializar uno existente. |

## Examinar el historial y el estado

| Alias | Comando                                                             | Descripción                                                                                                                            |
| ----- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| gbs   | `git bisect`                                                        | Usar búsqueda binaria para encontrar el commit que introdujo un error.                                                                 |
| gd    | `git diff`                                                          | Mostrar cambios entre commits, commit y árbol de trabajo, etc.                                                                         |
| gg    | `git grep`                                                          | Imprimir líneas que coincidan con un patrón.                                                                                           |
| gl    | `git log --since="last month" --oneline`                            | Mostrar registros de commit de este mes.                                                                                               |
| glg   | `git log --oneline --graph --full-history --all --color --decorate` | Mostrar registros de commit y dibujar una representación gráfica basada en texto del historial de commits a la izquierda de la salida. |
| gs    | `git show`                                                          | Mostrar varios tipos de objetos.                                                                                                       |

## Listar, crear o borrar ramas

| Alias | Comando            | Descripción                                        |
| ----- | ------------------ | -------------------------------------------------- |
| gb    | `git branch`       | Crear una rama.                                    |
| gbd   | `git branch -d`    | Borrar una rama.                                   |
| gbl   | `git branch -l`    | Listar ramas.                                      |
| gbr   | `git branch -r`    | Listar las ramas de seguimiento remoto.            |
| gbrd  | `git branch -d -r` | Borrar las ramas de seguimiento remoto.            |
| gbrsb | `git show-branch`  | Imprimir una lista de ramas y sus commits.         |
| gct   | `git commit`       | Registrar cambios en el repositorio.               |
| gmg   | `git merge`        | Unir dos o más historiales de desarrollo.          |
| grb   | `git rebase`       | Reaplicar commits sobre otra base.                 |
| grs   | `git reset`        | Restablecer el HEAD actual al estado especificado. |
| gswb  | `git switch`       | Cambiar de rama.                                   |

## Colaborar

| Alias | Comando     | Descripción                                                     |
| ----- | ----------- | --------------------------------------------------------------- |
| gf    | `git fetch` | Descargar objetos y referencias de otro repositorio.            |
| gi    | `git init`  | Crear un repositorio Git vacío o reinicializar uno existente.   |
| gp    | `git pull`  | Obtener de e integrar con otro repositorio o una rama local.    |
| gpu   | `git push`  | Actualizar referencias remotas junto con los objetos asociados. |

## Registrar cambios en el repositorio

| Alias | Comando                        | Descripción                                                                              |
| ----- | ------------------------------ | ---------------------------------------------------------------------------------------- |
| gc    | `git commit -a`                | Comando de commit para "añadir" automáticamente cambios de todos los archivos conocidos. |
| gca   | `git commit --amend`           | Enmendar la punta de la rama actual en lugar de crear un nuevo commit.                   |
| gcall | `git add -A && git commit -av` | Confirmar (commit) todos los cambios.                                                    |
| gcam  | `git commit --amend --message` | Enmendar la punta de la rama actual y editar el mensaje.                                 |
| gcane | `git commit --amend --no-edit` | Enmendar la punta de la rama actual y no editar el mensaje.                              |
| gcint | `git commit --interactive`     | Commit interactivo.                                                                      |
| gcm   | `git commit --message`         | Commit con un mensaje.                                                                   |

## Mostrar cambios entre commits, commit y árbol de trabajo, etc

| Alias    | Command                                    | Description                                                                                                      |
| -------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| gd       | `git diff`                                 | Mostrar cambios entre el árbol de trabajo y el índice o un árbol.                                                |
| gdcached | `git diff --cached`                        | Muestra los cambios entre el índice y el HEAD (que es el último commit en esta rama).                            |
| gdch     | `git diff --name-status`                   | Mostrar solo nombres y estado de los archivos modificados.                                                       |
| gdh      | `git diff HEAD`                            | Mostrar todos los cambios de archivos rastreados presentes en el directorio de trabajo y el área de preparación. |
| gdstaged | `git diff --staged`                        | Mostrar cambios en los archivos en el área "staged" (preparada).                                                 |
| gdstat   | `git diff --stat --ignore-space-change -r` | Generar un diffstat.                                                                                             |

## Mostrar registros de commit

| Alias | Comando                                                                                                                                                                                                           | Descripción                                                                                                      |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| gclc  | `git log --oneline --reverse`                                                                                                                                                                                     | Mostrar registro de cambios, los más recientes primero.                                                          |
| gld   | `git log --since=1-day-ago`                                                                                                                                                                                       | Mostrar el registro del día reciente.                                                                            |
| gldc  | `git log -1 --date-order --format=%cI`                                                                                                                                                                            | Mostrar la fecha del último commit, en formato estricto ISO 8601.                                                |
| gldl  | `git log --date=local`                                                                                                                                                                                            | Mostrar registro con fechas en nuestra zona horaria local.                                                       |
| glf   | `git log ORIG_HEAD.. --stat --no-merges`                                                                                                                                                                          | Mostrar registro de nuevos commits después de hacer fetch, con estadísticas, excluyendo merges.                  |
| glfd  | `!"git log --date-order --format=%cI                                                                                                                                                                              | tail -1"`                                                                                                        | Mostrar la fecha del commit más antiguo, en formato estricto ISO 8601. |
| glfh  | `git log --graph --full-history --all --color`                                                                                                                                                                    | Visualización de la topología de ramas.                                                                          |
| glg   | `git log --graph --all --oneline --decorate`                                                                                                                                                                      | Mostrar registro como un gráfico.                                                                                |
| glh   | `git log --since=1-hour-ago`                                                                                                                                                                                      | Mostrar el registro de la hora reciente.                                                                         |
| gll   | `git log --graph --topo-order --date=short --abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn]%Creset %Cblue%G?%Creset"`                   | Mostrar registro en nuestro formato preferido para indicadores clave de rendimiento. También conocido como `ll`. |
| glll  | `git log --graph --topo-order --date=iso8601-strict --no-abbrev-commit --decorate --all --boundary --pretty=format:"%Cgreen%ad %Cred%h%Creset -%C(yellow)%d%Creset %s %Cblue[%cn <%ce>]%Creset %Cblue%G?%Creset"` | Mostrar registro en nuestro formato preferido, con ítems largos. También conocido como `lll`.                    |
| glm   | `git log --since=1-month-ago`                                                                                                                                                                                     | Mostrar el registro del mes reciente.                                                                            |
| glmy  | `!git log --author $(git config user.email)`                                                                                                                                                                      | Mostrar el registro de mis propios commits por mi propio correo de usuario.                                      |
| glw   | `git log --since=1-week-ago`                                                                                                                                                                                      | Mostrar el registro de la semana reciente.                                                                       |
| gly   | `git log --since=1-year-ago`                                                                                                                                                                                      | Mostrar el registro del año reciente.                                                                            |

## Cambiar ramas o restaurar archivos del árbol de trabajo

| Alias  | Command                                                                         | Description                                                                  |
| ------ | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| gclout | `git clean -df && git checkout -- .`                                            | Limpiar y descartar cambios y archivos no rastreados en el árbol de trabajo. |
| gco    | `git checkout`                                                                  | Cambiar ramas o restaurar archivos del árbol de trabajo.                     |
| gcob   | `git checkout -b`                                                               | Crear una nueva rama llamada <new_branch> e iniciarla en <start_point>.      |
| gcode  | `git checkout main && git branch --merged                                       | xargs git branch --delete`                                                   | Borrar todas las ramas locales que han sido fusionadas en la rama main local. |
| gcom   | `git checkout main && git fetch origin --prune && git reset --hard origin/main` | Asegurar que local es como la rama main.                                     |

## Actualizar referencias remotas junto con los objetos asociados

| Alias  | Command                                                | Description                                                                                                          |
| ------ | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------- |
| gpb    | `git push --set-upstream origin $(git current-branch)` | Publicar la rama actual empujándola al remoto "origin" y configurando la rama actual para rastrear la rama upstream. |
| gpcb   | `git push origin "$(git branch                         | grep '\*'                                                                                                            | tr -d '\* \n')"`                                     | Empujar (Push) rama actual. |
| gpo    | `git push origin`                                      | Empujar cambios locales al repositorio en línea.                                                                     |
| gpoll  | `git push origin --all`                                | Empujar cada una de tus ramas locales de git al repositorio remoto.                                                  |
| gpt    | `git push --tags`                                      | Empujar etiquetas locales.                                                                                           |
| gpull  | `git pull`                                             | Obtener de e integrar con otro repositorio o una rama local.                                                         |
| gpullo | `git pull origin $(git current-branch)`                | Hacer un pull para solo una rama.                                                                                    |
| gpullm | `git pull origin master`                               | Hacer pull de cambios de la rama origin/master almacenada localmente y fusionarla a la rama local actual.            |
| gpush  | `git push`                                             | Actualizar referencias remotas junto con los objetos asociados.                                                      |
| gpusho | `git push origin $(git current-branch)`                | Hacer un push para solo una rama.                                                                                    |
| gpushr | `git remote                                            | xargs -I% -n1 git push %`                                                                                            | git remotes-push - Para cada rama remota, empujarla. |
| gunpub | `git push origin :$(git current-branch)`               | Dejar de publicar la rama actual borrando la versión remota de la rama actual.                                       |

## Gestionar conjunto de repositorios rastreados

| Alias   | Command                                                                                                                    | Description                                                                                                 |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- | --------- | ------------------------------------- |
| gr      | `git remote`                                                                                                               | Gestionar conjunto de repositorios rastreados.                                                              |
| gra     | `git remote add`                                                                                                           | Añadir un remoto llamado name para el repositorio en url.                                                   |
| grall   | `git remote                                                                                                                | xargs -L1 git push --all`                                                                                   | Empujar todas las ramas a todos los remotos. |
| grallo  | `git remote -v                                                                                                             | grep "(fetch)"                                                                                              |                                              | Git remote todos los remotos excepto origin. |
| grao    | `git remote add origin`                                                                                                    | Añadir un nuevo remoto 'origin' si no existe.                                                               |
| grbk    | `git reset --soft HEAD^`                                                                                                   | Retroceder (Rollback) a stage.                                                                              |
| grcl    | `git remote prune`                                                                                                         | Eliminar ramas de seguimiento remoto obsoletas.                                                             |
| grf     | `find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && echo '{}' && git config --get remote.origin.url" \;` | Mostrar GIT Remote Origin para cada subcarpeta inmediata.                                                   |
| grfall  | `git branch -r                                                                                                             | awk -F'/' '{print "git fetch "$1,$2}'                                                                       | xargs -I {} sh -c {}`                        | Fetch todos los git remotos para un repo.    |
| gro     | `open`git remote -v                                                                                                        | awk '/fetch/{print $2}'                                                                                     | sed -Ee 's#(git@                             | git://)#http://#' -e 's@com:@com/@'`         | head -n1` | Abrir URL del repositorio Git actual. |
| grp     | `git remote                                                                                                                | xargs -I% -n1 git push %`                                                                                   | Para cada rama remota, empujarla.            |
| grpa    | `for i in`git remote`; do git push $i; done;`                                                                              | Empujar todos los remotos.                                                                                  |
| grprint | `git remote -v`                                                                                                            |                                                                                                             | Imprimir la url para el repo actual.         |
| grs     | `git show`                                                                                                                 | Mostrar varios tipos de objetos.                                                                            |
| grso    | `git remote show origin`                                                                                                   | Mostrar dónde reside el origin.                                                                             |
| grv     | `git remote -v`                                                                                                            | Muestra URLs de repositorios remotos al listar tus conexiones remotas actuales.                             |
| gru     | `git remote update`                                                                                                        | Obtener actualizaciones para un conjunto de remotos nombrados en el repositorio según definido por remotes. |

## Revertir algunos commits existentes

| Alias  | Command                  | Description                                                                                                   |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| grev   | `git revert`             | Deshacer los cambios de algunos commits existentes.                                                           |
| grevnc | `git revert --no-commit` | Revertir sin autocommit; útil cuando estás revirtiendo el efecto de más de un commit a tu índice en una fila. |

## Inicializar, actualizar o inspeccionar submódulos

| Alias  | Command                                   | Description                                                                                                                                                                                                                 |
| ------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gsmi   | `git submodule init`                      | Inicializar los submódulos registrados en el índice.                                                                                                                                                                        |
| gsma   | `git submodule add`                       | Añadir el repositorio dado como un Submódulo en la ruta dada al changeset para ser confirmado junto al proyecto actual: el proyecto actual se denomina "superproyecto".                                                     |
| gsm    | `git submodule`                           | Permite incrustar repositorios foráneos dentro de un subdirectorio dedicado del árbol de fuentes.                                                                                                                           |
| gsms   | `git submodule sync`                      | Sincroniza la configuración de URL remota de los submódulos al valor especificado en .gitmodules.                                                                                                                           |
| gsmu   | `git submodule update`                    | Actualizar los submódulos registrados para que coincidan con lo que el superproyecto espera clonando submódulos faltantes, obteniendo commits faltantes en submódulos y actualizando el árbol de trabajo de los submódulos. |
| gsmui  | `git submodule update --init`             | Actualización de Submódulo con Inicializar.                                                                                                                                                                                 |
| gsmuir | `git submodule update --init --recursive` | Actualización de Submódulo con Inicializar y recursivo; esto es útil para traer un submódulo completamente al día.                                                                                                          |

## Mostrar el estado del árbol de trabajo

| Alias  | Command                       | Description                                                             |
| ------ | ----------------------------- | ----------------------------------------------------------------------- | ------------ | ------------ | ------------------------------------------------------ |
| gst    | `git status`                  | Mostrar el estado del árbol de trabajo.                                 |
| gstrmu | `git status -su               | cut -d' ' -f2-                                                          | tr '\n' '\0' | xargs -0 rm` | Eliminar archivos no rastreados en un repositorio git. |
| gsts   | `git status --short`          | Estado con formato corto en lugar de detalles completos.                |
| gstsb  | `git status --short --branch` | Estado con formato corto y mostrando rama e información de seguimiento. |

## Crear, listar, borrar o verificar un objeto etiqueta firmado con GPG

| Alias | Comando                                                         | Descripción                                                                      |
| ----- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| gt    | `git tag`                                                       | gt: Ver todas las etiquetas.                                                     |
| gta   | `git tag -a $1 -m $2`                                           | gta: Añadir una etiqueta.                                                        |
| gtg   | `git tag`                                                       | gtg: Crear, Listar, Borrar o Verificar un objeto etiqueta (tag) firmado con GPG. |
| gtl   | `git describe --tags --abbrev=0`                                | gtl: Última etiqueta en la rama actual.                                          |
| gtrm  | `for t in`git tag`do; git push origin :$t; git tag -d $t; done` | gtrm: Borrar todas las etiquetas.                                                |

## Mostrar varios tipos de objetos

| Alias  | Command                                                            | Description                                                                          |
| ------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | --------------------- | -------- | -------------------------------------------------------------- |
| gshab  | `for k in ``git branch                                             | perl -pe s/^..//`;do echo `git show --pretty=format:"%Cgreen%ci %Cblue%cr%Creset" $k | head -n 1``\\t$k;done | sort -r` | Mostrar ramas git por fecha - útil para mostrar ramas activas. |
| gshf   |                                                                    | Encontrar la rama padre más cercana de la rama git actual.                           |
| gshls  | `git show --relative --pretty=format:''`                           | Mostrar lista de archivos cambiados por commit.                                      |
| gshnp  | `git show --no-patch --pretty="tformat:%h (%s, %ad)" --date=short` | Dado cualquier objeto git, intentar mostrarlo brevemente.                            |
| gshwho | `git shortlog --summary --numbered --no-merges`                    | Mostrar quién contribuyó, en orden descendente por número de commits.                |

## Restablecer el HEAD actual al estado especificado

| Alias  | Command                                    | Description         |
| ------ | ------------------------------------------ | ------------------- |
| grescl | `git reset --hard HEAD~1 && git clean -fd` | Reset commit clean. |
| gresh  | `git reset --hard HEAD~1`                  | Reset commit hard.  |
| gresp  | `git reset --hard && git clean -ffdx`      | Reset pristine.     |
| gress  | `git reset --soft HEAD~1`                  | Reset commit.       |
| gresu  | `git reset --hard $(git upstream-branch)`  | Reset to upstream.  |

## Elegir y masajear parámetros

| Alias | Comando                                                                     | Descripción                                         |
| ----- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| gtp   | `git rev-parse --show-toplevel`                                             | Obtener el nombre del directorio de nivel superior. |
| gcb   | `git rev-parse --abbrev-ref HEAD`                                           | Obtener el nombre de la rama actual.                |
| gub   | `git for-each-ref --format='%(upstream:short)' $(git symbolic-ref -q HEAD)` | Obtener el nombre de la rama upstream.              |

## Eliminar archivos del árbol de trabajo y del índice

| Alias | Comando                                                              | Descripción                                          |
| ----- | -------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| grm   | `git rm`                                                             | Eliminar archivos del árbol de trabajo y del índice. |
| grmc  | `git rm --cached`                                                    | Unstage y eliminar rutas solo del índice.            |
| grmd  | `git ls-files -z --deleted                                           | xargs -0 git rm`                                     | git eliminar archivos que han sido borrados.                                                                                                |
| grmd2 | `git rm $(git ls-files --deleted)`                                   | git eliminar archivos que han sido borrados.         |
| grmds | `find . -name .DS_Store -exec git rm --ignore-unmatch --cached {} +` | Eliminar .DS_Store del repositorio.                  |
| grmn  | `for file in $(git status                                            | grep "new file"                                      | sed "s/#\tnew file://"); do git rm --cached $file; done`                                                                                    | Eliminar todos los archivos nuevos. |
| grmx  | `git ls-files -z -d                                                  | xargs -0 git rm --`                                  | Eliminar para todos los archivos borrados, incluyendo aquellos con espacio/comillas/caracteres no imprimibles en su nombre de archivo/ruta. |

## Mostrar qué revisión y autor modificó por última vez cada línea de un archivo

| Alias | Comando                          | Descripción                                             |
| ----- | -------------------------------- | ------------------------------------------------------- | ---------------------- | ------- | --------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| gbl   | `git blame --date short "$1"`    | Especifica un formato usado para mostrar fechas cortas. |
| gblc  | `git blame --line-porcelain "$1" | sed -n 's/^author //p'                                  | sort                   | uniq -c | sort -rn` | Contar el número de líneas atribuidas a cada autor. |
| gblau | `git ls-files                    | xargs -n1 git blame --line-porcelain                    | sed -n 's/^author //p' | sort -f | uniq -ic  | sort -nr`                                           | Imprime contribución por línea por autor para un repositorio GIT. |

## Obtener y establecer opciones de repositorio o globales

| Alias     | Command                                        | Description                                                 |
| --------- | ---------------------------------------------- | ----------------------------------------------------------- |
| gconfdiff | `git config alias.dcolor "diff --color-words"` | Mejor git diff, delimitado por palabras y coloreado.        |
| gconfl    | `git config --list`                            | Listar todas las configuraciones.                           |
| gconfr    | `git config --local --get remote.origin.url`   | Mostrar origen remoto desde dentro de un repositorio local. |
