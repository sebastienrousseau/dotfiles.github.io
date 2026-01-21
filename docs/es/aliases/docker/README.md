---
description: Los alias de Docker gestionan alias de Docker. Parte de la configuración de **Universal Dotfiles**.
lang: es-ES
metaTitle: Alias de Docker - Dotfiles (ES)
permalink: /es/aliases/docker/
---

# Alias de Docker

Gestiona los alias de Docker. Parte de la configuración de **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripción

Estos alias están definidos en `docker.aliases.sh` y son cargados automáticamente por `chezmoi`.

## ⚡ Alias

Este código proporciona un conjunto completo de alias para el desarrollo con Docker
utilizando comandos de `docker`, `docker-compose` y Docker Swarm.

#### Comandos Básicos

- `dk` - Atajo para Docker
- `dkv` - Mostrar versión de Docker
- `dki` - Mostrar información de todo el sistema
- `dkl` - Iniciar sesión en el registro de Docker
- `dklo` - Cerrar sesión del registro de Docker

#### Operaciones con Contenedores

- `dkps` - Listar contenedores en ejecución
- `dkpsa` - Listar todos los contenedores
- `dkr` - Ejecutar un comando en un nuevo contenedor
- `dkri` - Ejecutar contenedor interactivo
- `dkrd` - Ejecutar contenedor en segundo plano (background)
- `dks` - Iniciar contenedor
- `dkst` - Detener contenedor
- `dkrs` - Reiniciar contenedor
- `dkp` - Pausar contenedor
- `dkup` - Reanudar contenedor
- `dkrm` - Eliminar contenedor
- `dkrma` - Eliminar todos los contenedores
- `dkrmf` - Forzar la eliminación del contenedor

#### Inspección de Contenedores

- `dkin` - Inspeccionar contenedor
- `dkl` - Mostrar registros (logs) del contenedor
- `dklf` - Seguir registros del contenedor
- `dkt` - Mostrar procesos en ejecución en el contenedor
- `dkst` - Mostrar uso de recursos del contenedor
- `dkdf` - Mostrar cambios en el sistema de archivos del contenedor
- `dkpl` - Descargar (Pull) imagen del registro
- `dkex` - Ejecutar comando en el contenedor
- `dkeit` - Ejecutar comando interactivo

#### Imágenes

- `dki` - Listar imágenes
- `dkia` - Listar todas las imágenes
- `dkb` - Construir una imagen (Build)
- `dkbt` - Construir y etiquetar una imagen
- `dkpu` - Subir (Push) imagen al registro
- `dkrmi` - Eliminar imagen
- `dkh` - Mostrar historial de imagen
- `dksv` - Guardar imagen en archivo tar
- `dkld` - Cargar imagen desde archivo tar
- `dkprune` - Eliminar datos no utilizados
- `dkprunea` - Eliminar todos los datos no utilizados
- `dkrmi_dangling` - Eliminar imágenes colgantes (dangling)

#### Volúmenes

- `dkv` - Atajo para volúmenes
- `dkvls` - Listar volúmenes
- `dkvc` - Crear volumen
- `dkvi` - Inspeccionar volumen
- `dkvrm` - Eliminar volumen
- `dkvp` - Eliminar volúmenes no utilizados

#### Redes

- `dkn` - Atajo para redes
- `dknls` - Listar redes
- `dknc` - Crear red
- `dkni` - Inspeccionar red
- `dknrm` - Eliminar red
- `dknp` - Eliminar redes no utilizadas
- `dkncon` - Conectar contenedor a red
- `dkndis` - Desconectar contenedor de red

#### Sistema

- `dks` - Atajo para sistema
- `dksdf` - Mostrar uso de disco de Docker
- `dksev` - Obtener eventos en tiempo real de Docker
- `dksi` - Mostrar información de todo el sistema
- `dksp` - Eliminar datos no utilizados
- `dkspa` - Eliminar todos los datos no utilizados
- `dkcon` - Gestión de contexto

#### Varios

- `dkcp` - Copiar archivos entre contenedor y sistema de archivos local
- `dkw` - Bloquear hasta que el contenedor se detenga
- `dkk` - Matar (Kill) contenedor
- `dkatt` - Adjuntar (Attach) a contenedor
- `dkd` - Inspeccionar cambios en el sistema de archivos del contenedor
- `dkcom` - Crear imagen desde contenedor
- `dktag` - Etiquetar una imagen
- `dkexp` - Exportar sistema de archivos del contenedor
- `dkimp` - Importar sistema de archivos del contenedor
- `dkscan` - Escanear vulnerabilidades en la imagen
- `dc` - Atajo para Docker Compose
- `dcu` - Crear e iniciar contenedores
- `dcud` - Crear e iniciar contenedores en segundo plano
- `dcd` - Detener y eliminar contenedores
- `dcdv` - Detener y eliminar contenedores y volúmenes
- `dcr` - Reiniciar servicios
- `dcs` - Detener servicios
- `dcsta` - Iniciar servicios
- `dcp` - Pausar servicios
- `dcup` - Reanudar servicios
- `dcps` - Listar contenedores
- `dcl` - Ver registros
- `dclf` - Seguir registros
- `dcex` - Ejecutar comando en contenedor
- `dcb` - Construir servicios
- `dcpull` - Descargar (Pull) imágenes de servicio
- `dcpush` - Subir (Push) imágenes de servicio
- `dcrm` - Eliminar contenedores detenidos
- `dcrun` - Ejecutar comando único
- `dci` - Listar imágenes
- `dck` - Matar contenedores
- `dccfg` - Validar y mostrar configuración de compose
- `dcev` - Recibir eventos de contenedores
- `dctop` - Mostrar procesos en ejecución
- `dcv` - Mostrar versión de Docker Compose

#### Gestión de Swarm

- `dksw` - Atajo para Swarm
- `dkswi` - Inicializar Docker Swarm
- `dkswj` - Unirse a Docker Swarm
- `dkswjt` - Gestionar tokens de unión
- `dkswl` - Abandonar el Swarm
- `dkswu` - Actualizar Swarm
- `dkswunl` - Desbloquear Swarm
- `dkswunk` - Gestionar claves de desbloqueo

#### Servicios

- `dksrv` - Atajo para servicios
- `dksrvls` - Listar servicios
- `dksrvc` - Crear servicio
- `dksrvi` - Inspeccionar servicio
- `dksrvps` - Listar tareas del servicio
- `dksrvl` - Ver registros del servicio
- `dksrvlf` - Seguir registros del servicio
- `dksrvrm` - Eliminar servicio
- `dksrvsc` - Escalar servicio
- `dksrvu` - Actualizar servicio
- `dksrvrl` - Revertir (Rollback) servicio

#### Stacks (Pilas)

- `dkstk` - Atajo para Stacks
- `dkstkls` - Listar stacks
- `dkstkd` - Desplegar stack
- `dkstkps` - Listar tareas en stack
- `dkstksrv` - Listar servicios en stack
- `dkstkrm` - Eliminar stack

#### Nodos

- `dkn` - Atajo para nodos
- `dknls` - Listar nodos
- `dkni` - Inspeccionar nodo
- `dknp` - Promover nodo a manager
- `dknd` - Degradrar nodo a worker
- `dknrm` - Eliminar nodo
- `dknu` - Actualizar nodo
- `dknps` - Listar tareas ejecutándose en el nodo

### Flujos de Trabajo Comunes

#### Flujo de Desarrollo de Contenedores

```bash
# Iniciar un contenedor de desarrollo
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

#### Desarrollo con Docker Compose

```bash
# Iniciar servicios, reconstruir si es necesario, en segundo plano
dcb && dcud
```

#### Flujo de Limpieza

```bash
# Eliminar todos los contenedores detenidos, redes no utilizadas e imágenes colgantes
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

#### Despliegue en Swarm

```bash
# Desplegar o actualizar un stack desde un archivo compose
dkstkd -c docker-compose.yml my-stack
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
