---
description: Los alias le permiten crear accesos directos para los comandos de shell que utiliza con frecuencia. Esto le permite ser más productivo y eficiente al reducir la cantidad de escritura que tiene que hacer cuando usa el shell regularmente.
lang: es-ES
metaTitle: Alias - Dotfiles (ES)
permalink: /es/aliases/
---

# Alias

Los alias le permiten crear accesos directos para los comandos de shell que utiliza con frecuencia. Esto le permite ser más productivo y eficiente al reducir la cantidad de escritura que tiene que hacer cuando usa el shell regularmente. Por ejemplo, en lugar de escribir `git status`, podría escribir `gst` para obtener el mismo resultado.

Esta es una excelente manera de ahorrar tiempo y reducir considerablemente la cantidad de escritura que tiene que hacer al usar la terminal a diario, lo que le ayuda a ser más productivo y eficiente.

## Preajustes

Dotfiles tiene una colección de preajustes de configuración y diversas recetas con las que puede comenzar.

### Detección automática del sistema

Dotfiles contiene una función de utilidad para detectar el sabor de `ls` actual que está en uso para ayudar a configurar las variables de entorno `LS_COLORS` correctas para su sistema.

La variable de entorno `LS_COLORS` es utilizada por el comando `ls` para colorear la salida del comando.

### Comprobar alias integrados

Escriba el siguiente comando alias en su terminal:

```bash
alias
```

### Alias de utilidades GNU Find

Los sistemas macOS se basan en BSD, en lugar de en GNU/Linux, como RedHat, Debian y Ubuntu. Como resultado, muchas de las herramientas de línea de comandos que se envían con macOS no son 100% compatibles. Por ejemplo, el comando `find` en macOS no admite la opción `-printf`, que utiliza el comando `locate`. Esto significa que el comando `locate` no funciona en macOS. Para solucionar esto, puede instalar las versiones GNU de estos comandos, que son totalmente compatibles con las versiones de Linux.

Las Utilidades de Búsqueda GNU son las utilidades básicas de búsqueda de directorios del sistema operativo GNU. Estos programas se utilizan normalmente junto con otros programas para proporcionar capacidades modulares y potentes de búsqueda de directorios y localización de archivos a otros comandos.

Las herramientas suministradas con este paquete son:

- find - buscar archivos en una jerarquía de directorios
- locate - listar archivos en bases de datos que coinciden con un patrón
- updatedb - actualizar una base de datos de nombres de archivo
- xargs - construir y ejecutar líneas de comando desde la entrada estándar

Escriba el siguiente comando alias en su terminal:

```bash
brew install findutils
```

### Los alias de Dotfiles

Los archivos proporcionados en Dotfiles contienen algunos alias obstinados que puede encontrar útiles. Estos se definen en el directorio `./dist/lib/aliases` y se cargan automáticamente cuando inicia una nueva sesión de shell.

Los alias se cargan mediante el archivo `~/.bashrc` si está utilizando el shell Bash, o en el archivo `~/.zshrc` si está utilizando el shell Zsh.

Se han agrupado por categorías lógicas:

- [ai][ai] - Alias para inteligencia artificial.
- [archives][archives] - Alias para trabajar con archivos.
- [cd][cd] - Alias para trabajar con directorios.
- [chmod][chmod] - Alias para trabajar con permisos de archivos.
- [clear][clear] - Alias para limpiar la pantalla del terminal.
- [compliance][compliance] - Alias para cumplimiento.
- [configuration][configuration] - Alias para configuración.
- [default][default] - Los alias predeterminados que se cargan para todos los usuarios.
- [diagnostics][diagnostics] - Alias para diagnóstico.
- [dig][dig] - Alias para trabajar con DNS.
- [docker][docker] - Alias para Docker.
- [dot][dot] - La CLI unificada para administrar sus dotfiles.
- [du][du] - Alias para trabajar con uso de disco.
- [editor][editor] - Alias para trabajar con el editor.
- [find][find] - Alias para trabajar con el comando `fd`.
- [fonts][fonts] - Alias para fuentes.
- [gcloud][gcloud] - Alias para trabajar con el comando `gcloud`.
- [git][git] - Alias para trabajar con Git.
- [gnu][gnu] - Alias para trabajar con utilidades centrales de GNU.
- [go][go] - Alias para Go.
- [installer][installer] - Alias para instaladores.
- [interactive][interactive] - Alias para trabajar con comandos interactivos.
- [jekyll][jekyll] - Alias para trabajar con Jekyll.
- [kubernetes][kubernetes] - Alias para Kubernetes.
- [legal][legal] - Alias legales.
- [list][list] - Alias para trabajar con el comando `ls`.
- [macOS][macos] - Alias para macOS.
- [make][make] - Alias para trabajar con el comando `make`.
- [mkdir][mkdir] - Alias para trabajar con el comando `mkdir`.
- [modern][modern] - Unix Moderno.
- [modern-core][modern-core] - Herramientas de alto rendimiento (Atuin, Yazi, Zellij).
- [npm][npm] - Alias para trabajar con el comando `npm`.
- [permission][permission] - Alias para permisos.
- [pnpm][pnpm] - Alias para trabajar con el comando `pnpm`.
- [ps][ps] - Alias para trabajar con el comando `ps`.
- [python][python] - Alias para trabajar con Python.
- [rsync][rsync] - Alias para trabajar con el comando `rsync`.
- [rust][rust] - Alias para trabajar con el lenguaje de programación Rust.
- [security][security] - Alias de seguridad.
- [subversion][subversion] - Alias para trabajar con Subversion.
- [sudo][sudo] - Alias para trabajar con el comando `sudo`.
- [terraform][terraform] - Alias para Terraform.
- [tmux][tmux] - Alias para trabajar con el comando `tmux`.
- [update][update] - Alias para trabajar con el comando `update`.
- [uuid][uuid] - Alias para trabajar con el comando `uuid`.
- [wget][wget] - Alias para trabajar con el comando `wget`.
- [yarn][yarn] - Alias para trabajar con Yarn.

[ai]: ./ai/
[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[compliance]: ./compliance/
[configuration]: ./configuration/
[default]: ./default/
[diagnostics]: ./diagnostics/
[dig]: ./dig/
[docker]: ./docker/
[dot]: ./dot/
[du]: ./du/
[editor]: ./editor/
[find]: ./find/
[fonts]: ./fonts/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/
[go]: ./go/
[installer]: ./installer/
[interactive]: ./interactive/
[jekyll]: ./jekyll/
[kubernetes]: ./kubernetes/
[legal]: ./legal/
[list]: ./list/
[macos]: ./macOS/
[make]: ./make/
[mkdir]: ./mkdir/
[modern]: ./modern/
[modern-core]: ./modern-core/
[npm]: ./npm/
[permission]: ./permission/
[pnpm]: ./pnpm/
[ps]: ./ps/
[python]: ./python/
[rsync]: ./rsync/
[rust]: ./rust/
[security]: ./security/
[subversion]: ./subversion/
[sudo]: ./sudo/
[terraform]: ./terraform/
[tmux]: ./tmux/
[update]: ./update/
[uuid]: ./uuid/
[wget]: ./wget/
[yarn]: ./yarn/
