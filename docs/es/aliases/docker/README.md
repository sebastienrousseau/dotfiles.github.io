---
description: alias de Docker para Dotfiles
lang: es-ES
metaTitle: alias de Docker - Dotfiles
permalink: /es/aliases/docker/
---
# Alias de Docker

Gestionar alias de Docker. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `docker.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto completo de alias para el desarrollo con Docker
usando comandos de `docker`, `docker-compose` y Docker Swarm.
#### Comandos basicos
- `dk` - Atajo de Docker
- `dkv` - Mostrar la version de Docker
- `dki` - Mostrar informacion del sistema
- `dkl` - Iniciar sesion en el registro de Docker
- `dklo` - Cerrar sesion del registro de Docker
#### Operaciones de contenedores
- `dkps` - Listar contenedores en ejecucion
- `dkpsa` - Listar todos los contenedores
- `dkr` - Ejecutar un comando en un contenedor nuevo
- `dkri` - Ejecutar contenedor interactivo
- `dkrd` - Ejecutar contenedor en segundo plano
- `dks` - Iniciar contenedor
- `dkst` - Detener contenedor
- `dkrs` - Reiniciar contenedor
- `dkp` - Pausar contenedor
- `dkup` - Reanudar contenedor
- `dkrm` - Eliminar contenedor
- `dkrma` - Eliminar todos los contenedores
- `dkrmf` - Forzar eliminacion de contenedor
#### Inspeccion de contenedores
- `dkin` - Inspeccionar contenedor
- `dkl` - Mostrar logs del contenedor
- `dklf` - Seguir logs del contenedor
- `dkt` - Mostrar procesos en ejecucion en el contenedor
- `dkst` - Mostrar uso de recursos del contenedor
- `dkdf` - Mostrar cambios en el sistema de archivos del contenedor
- `dkpl` - Descargar imagen desde el registro
- `dkex` - Ejecutar comando en el contenedor
- `dkeit` - Ejecutar comando interactivo
#### Imagenes
- `dki` - Listar imagenes
- `dkia` - Listar todas las imagenes
- `dkb` - Construir una imagen
- `dkbt` - Construir y etiquetar una imagen
- `dkpu` - Subir imagen al registro
- `dkrmi` - Eliminar imagen
- `dkh` - Mostrar historial de imagen
- `dksv` - Guardar imagen en archivo tar
- `dkld` - Cargar imagen desde archivo tar
- `dkprune` - Eliminar datos no usados
- `dkprunea` - Eliminar todos los datos no usados
- `dkrmi_dangling` - Eliminar imagenes colgantes
#### Volumenes
- `dkv` - Atajo de volumenes
- `dkvls` - Listar volumenes
- `dkvc` - Crear volumen
- `dkvi` - Inspeccionar volumen
- `dkvrm` - Eliminar volumen
- `dkvp` - Eliminar volumenes no usados
#### Redes
- `dkn` - Atajo de redes
- `dknls` - Listar redes
- `dknc` - Crear red
- `dkni` - Inspeccionar red
- `dknrm` - Eliminar red
- `dknp` - Eliminar redes no usadas
- `dkncon` - Conectar contenedor a red
- `dkndis` - Desconectar contenedor de red
#### Sistema
- `dks` - Atajo de sistema
- `dksdf` - Mostrar uso de disco de Docker
- `dksev` - Obtener eventos en tiempo real de Docker
- `dksi` - Mostrar informacion del sistema
- `dksp` - Eliminar datos no usados
- `dkspa` - Eliminar todos los datos no usados
- `dkcon` - Gestion de contextos
#### Varios
- `dkcp` - Copiar archivos entre contenedor y sistema de archivos local
- `dkw` - Bloquear hasta que el contenedor se detenga
- `dkk` - Matar contenedor
- `dkatt` - Adjuntar a un contenedor
- `dkd` - Inspeccionar cambios en el sistema de archivos del contenedor
- `dkcom` - Crear imagen desde contenedor
- `dktag` - Etiquetar una imagen
- `dkexp` - Exportar sistema de archivos del contenedor
- `dkimp` - Importar sistema de archivos del contenedor
- `dkscan` - Escanear imagen por vulnerabilidades
- `dc` - Atajo de Docker Compose
- `dcu` - Crear e iniciar contenedores
- `dcud` - Crear e iniciar contenedores en segundo plano
- `dcd` - Detener y eliminar contenedores
- `dcdv` - Detener y eliminar contenedores y volumenes
- `dcr` - Reiniciar servicios
- `dcs` - Detener servicios
- `dcsta` - Iniciar servicios
- `dcp` - Pausar servicios
- `dcup` - Reanudar servicios
- `dcps` - Listar contenedores
- `dcl` - Ver logs
- `dclf` - Seguir logs
- `dcex` - Ejecutar comando en contenedor
- `dcb` - Construir servicios
- `dcpull` - Descargar imagenes de servicio
- `dcpush` - Subir imagenes de servicio
- `dcrm` - Eliminar contenedores detenidos
- `dcrun` - Ejecutar un comando puntual
- `dci` - Listar imagenes
- `dck` - Matar contenedores
- `dccfg` - Validar y mostrar configuracion de compose
- `dcev` - Recibir eventos de contenedores
- `dctop` - Mostrar procesos en ejecucion
- `dcv` - Mostrar version de Docker Compose
#### Gestion de Swarm
- `dksw` - Atajo de Swarm
- `dkswi` - Inicializar Docker Swarm
- `dkswj` - Unirse a Docker Swarm
- `dkswjt` - Gestionar tokens de union
- `dkswl` - Abandonar el Swarm
- `dkswu` - Actualizar Swarm
- `dkswunl` - Desbloquear Swarm
- `dkswunk` - Gestionar claves de desbloqueo
#### Servicios
- `dksrv` - Atajo de servicio
- `dksrvls` - Listar servicios
- `dksrvc` - Crear servicio
- `dksrvi` - Inspeccionar servicio
- `dksrvps` - Listar tareas del servicio
- `dksrvl` - Ver logs del servicio
- `dksrvlf` - Seguir logs del servicio
- `dksrvrm` - Eliminar servicio
- `dksrvsc` - Escalar servicio
- `dksrvu` - Actualizar servicio
- `dksrvrl` - Revertir servicio
#### Stacks
- `dkstk` - Atajo de stack
- `dkstkls` - Listar stacks
- `dkstkd` - Desplegar stack
- `dkstkps` - Listar tareas en el stack
- `dkstksrv` - Listar servicios en el stack
- `dkstkrm` - Eliminar stack
#### Nodos
- `dkn` - Atajo de nodo
- `dknls` - Listar nodos
- `dkni` - Inspeccionar nodo
- `dknp` - Promover nodo a manager
- `dknd` - Degradar nodo a worker
- `dknrm` - Eliminar nodo
- `dknu` - Actualizar nodo
- `dknps` - Listar tareas que se ejecutan en el nodo

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
