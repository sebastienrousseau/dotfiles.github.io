---
description: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git usados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
lang: es-ES
metaTitle: Alias de Git - Dotfiles (ES)
permalink: /es/aliases/git/

meta:
  - name: keywords
    content: alias, git, gitconfig, configuracion, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git usados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
  - name: twitter:description
    content: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git usados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
  - name: twitter:title
    content: Alias de Git - Dotfiles (ES)
  - name: og:title
    content: Alias de Git - Dotfiles (ES)
  - name: og:description
    content: Los alias de Git proporcionan comandos potentes que crean atajos para los comandos de Git usados con frecuencia. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos de Git. Los alias de Git mejoran la velocidad y la eficiencia.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Git

Gestionar los alias de Git. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `git.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Esta es una coleccion de alias de Git practicos que simplifican y aceleran los comandos Git
comunes, haciendolos mas cortos e intuitivos.
- `gc` Comando de commit para "anadir" automaticamente cambios de todos los archivos conocidos.
- `gca` Enmendar la punta de la rama actual en lugar de crear un nuevo commit.
- `gcall` Confirmar todos los cambios.
- `gcam` Enmendar la punta de la rama actual y editar el mensaje.
- `gcane` Enmendar la punta de la rama actual y no editar el mensaje.
- `gcint` Commit interactivo.
- `gcm` Commit con un mensaje.
- `gd` Mostrar cambios entre el arbol de trabajo y el indice o un arbol.
- `gdch` Mostrar solo nombres y estado de archivos cambiados.
- `gdh` Mostrar todos los cambios de archivos rastreados presentes en el directorio de trabajo y el area de staging.
- `gdstaged` Mostrar cambios en archivos en el area "staged".
- `gdcached` Mostrar los cambios entre el indice y HEAD (que es el ultimo commit en esta rama).
- `gdstat` Generar un diffstat.
- `glc` Mostrar el registro de cambios, los mas recientes primero.
- `gld` Mostrar el registro del dia reciente.
- `gldc` Mostrar la fecha del ultimo commit, en formato ISO 8601 estricto.
- `gldl` Mostrar registros con fechas en nuestra zona horaria local.
- `glf` Mostrar el registro de nuevos commits despues de hacer fetch, con estadisticas, excluyendo merges.
- `glfd` Mostrar la fecha del commit mas antiguo, en formato ISO 8601 estricto.
- `glfh` Visualizacion de la topologia de ramas.
- `glg` Mostrar el registro como grafico.
- `glh` Mostrar el registro de la ultima hora.
- `gll` Mostrar el registro en nuestro formato preferido para nuestros indicadores clave de rendimiento.
- `glll` Mostrar el registro en nuestro formato preferido para nuestros indicadores clave de rendimiento, con elementos largos.
- `glm` Mostrar el registro del mes reciente.
- `glmy` Mostrar el registro de mis propios commits por mi correo de usuario.
- `glw` Mostrar el registro de la semana reciente.
- `gly` Mostrar el registro del ano reciente.
- `gclout` Limpiar y descartar cambios y archivos no rastreados en el arbol de trabajo.
- `gco` Cambiar de rama o restaurar archivos del arbol de trabajo.
- `gcb` Crear una nueva rama llamada <new_branch> y comenzarla en <start_point>.
- `gcode` Eliminar todas las ramas locales que se han fusionado en la rama main local.
- `gcom` Asegurar que la rama local este como la rama main.
- `gpb` Publicar la rama actual empujandola al remoto "origin" y configurando el seguimiento upstream.
- `gpo` Enviar cambios locales al repositorio en linea.
- `gpt` Enviar etiquetas locales.
- `gpoll` Enviar cada una de tus ramas git locales al repositorio remoto.
- `gpull` Obtener e integrar desde otro repositorio o una rama local.
- `gpullm` Traer cambios desde la rama local origin/master y fusionarlos en la rama local activa.
- `gpullo` Hacer pull solo para una rama.
- `gpush` Actualizar referencias remotas junto con los objetos asociados.
- `gpusho` Hacer push solo para una rama.
- `gpushr` Para cada rama remota, hacer push.
- `gunpub` Despublicar la rama actual eliminando la version remota de la rama actual.
- `gpcb` Hacer push de la rama actual.
- `gr` Gestionar el conjunto de repositorios rastreados.
- `gra` Anadir un remoto llamado `name` para el repositorio en `url`.
- `grall` Enviar todas las ramas a todos los remotos.
- `grallo` Git remote all remotes excepto origin.
- `grao` Anadir un nuevo remoto 'origin' si no existe.
- `grbk` Revertir a stage.
- `grcl` Eliminar todas las ramas de seguimiento remoto obsoletas bajo `name`.
- `grf` Mostrar el origen Git para cada subcarpeta inmediata.
- `grfall` Obtener todos los remotos git para un repositorio.
- `grp` Enviar todos los remotos.
- `grprint` Imprimir la URL del repositorio actual.
- `grs` Mostrar informacion del remoto `name`.
- `grso` Mostrar donde reside origin.
- `gru` Obtener actualizaciones para un conjunto nombrado de remotos en el repositorio.
- `grv` Mostrar URLs de repositorios remotos al listar tus conexiones remotas.
- `grev` Deshacer los cambios de algunos commits existentes.
- `grevnc` Revertir sin autocommit; util cuando reviertes mas de un commit seguido.
- `gsm` Permitir que repositorios externos se incrusten dentro de un subdirectorio dedicado del arbol de origen.
- `gsmi` Inicializar los submodulos registrados en el indice.
- `gsma` Anadir el repositorio dado como submodulo en la ruta dada para el changeset a commitear.
- `gsms` Sincronizar la configuracion de URL remota de los submodulos con el valor especificado en .gitmodules.
- `gsmu` Actualizar los submodulos registrados para coincidir con lo que espera el superproyecto.
- `gsmui` Actualizacion de submodulos con inicializacion.
- `gsmuir` Actualizacion de submodulos con inicializacion y recursiva.
- `gst` Mostrar el estado del arbol de trabajo.
- `gsta` Guardar los cambios en stash.
- `gstrmu` Eliminar archivos no rastreados en un repositorio git.
- `gsts` Estado en formato corto en lugar de detalles completos.
- `gstsb` Estado en formato corto mostrando informacion de rama y seguimiento.
- `gt` Ver todas las etiquetas.
- `gtg` Crear, listar, eliminar o verificar un objeto de etiqueta firmado con GPG.
- `gtl` Ultima etiqueta en la rama actual.
- `gshow` Mostrar varios tipos de objetos.
- `gshf` Encontrar la rama padre mas cercana de la rama git actual.
- `gshls` Mostrar lista de archivos cambiados por commit.
- `gshnp` Dado cualquier objeto git, intentar mostrarlo brevemente.
- `gshwho` Mostrar quien contribuyo, en orden descendente por numero de commits.
- `grescl` Reset commit clean.
- `gresh` Reset commit hard.
- `gresp` Reset pristine.
- `gress` Reset commit.
- `gresu` Reset to upstream.
- `gtp` Obtener el nombre del directorio de nivel superior.
- `grpa` Obtener el nombre de la rama actual.
- `gub` Obtener el nombre de la rama upstream.
- `grm` Eliminar archivos del arbol de trabajo y del indice.
- `grmc` Desindexar y eliminar rutas solo del indice.
- `grmd` Eliminar archivos que han sido eliminados.
- `grmd2` Eliminar archivos que han sido eliminados.
- `grmds` Eliminar .DS_Store del repositorio.
- `grmx` Eliminar todos los archivos eliminados, incluidos los que tienen caracteres con espacios o comillas en su nombre o ruta.
- `gblau` Imprime la contribucion por linea por autor para un repositorio GIT.
- `gconfdiff` Mejor git diff, delimitado por palabras y con color.
- `gconfl` Listar todos los ajustes.
- `gconfr` Mostrar el origen remoto desde un repositorio local.
- `undopush` Deshacer el ultimo push.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
