---
title: "Alias Docker: simplifica tu flujo de trabajo de contenedores"
description: "Alias completos de Docker para contenedores, imágenes, volúmenes, redes, Compose y Swarm. Aumenta la productividad."
lang: es-ES
metaTitle: "Alias Docker | Dotfiles"
permalink: /aliases/docker/
sidebar: true
meta:
  - name: keywords
    content: "alias docker, atajos docker, comandos contenedor, alias docker compose, alias docker swarm, dotfiles"
---

# Alias Docker

Simplifica tu flujo de trabajo con atajos intuitivos para Docker, Compose y Swarm.

![Dotfiles banner][banner]

## Descubrir

Estos alias se definen en `docker.aliases.sh` y se cargan automáticamente por chezmoi. Proporcionan un conjunto completo de atajos para desarrollo con Docker: contenedores, imágenes, volúmenes, redes, Docker Compose y Docker Swarm.

## Referencia

### Comandos básicos

| Alias | Descripción |
|-------|-------------|
| `dk` | Atajo de Docker |
| `dkv` | Mostrar versión de Docker |
| `dki` | Mostrar información del sistema |
| `dkl` | Iniciar sesión en el registro Docker |
| `dklo` | Cerrar sesión del registro Docker |

### Operaciones con contenedores

| Alias | Descripción |
|-------|-------------|
| `dkps` | Listar contenedores en ejecución |
| `dkpsa` | Listar todos los contenedores |
| `dkr` | Ejecutar un comando en un nuevo contenedor |
| `dkri` | Ejecutar contenedor interactivo |
| `dkrd` | Ejecutar contenedor en segundo plano |
| `dks` | Iniciar contenedor |
| `dkst` | Detener contenedor |
| `dkrs` | Reiniciar contenedor |
| `dkp` | Pausar contenedor |
| `dkup` | Reanudar contenedor |
| `dkrm` | Eliminar contenedor |
| `dkrma` | Eliminar todos los contenedores |
| `dkrmf` | Forzar eliminación de contenedor |

### Inspección de contenedores

| Alias | Descripción |
|-------|-------------|
| `dkin` | Inspeccionar contenedor |
| `dkl` | Ver logs del contenedor |
| `dklf` | Seguir logs del contenedor |
| `dkt` | Mostrar procesos en el contenedor |
| `dkst` | Mostrar uso de recursos del contenedor |
| `dkdf` | Mostrar cambios del sistema de archivos |
| `dkpl` | Descargar imagen del registro |
| `dkex` | Ejecutar comando en contenedor |
| `dkeit` | Ejecutar comando interactivo |

### Imágenes

| Alias | Descripción |
|-------|-------------|
| `dki` | Listar imágenes |
| `dkia` | Listar todas las imágenes |
| `dkb` | Construir una imagen |
| `dkbt` | Construir y etiquetar una imagen |
| `dkpu` | Subir imagen al registro |
| `dkrmi` | Eliminar imagen |
| `dkh` | Mostrar historial de imagen |
| `dksv` | Guardar imagen en tar |
| `dkld` | Cargar imagen desde tar |
| `dkprune` | Eliminar datos no usados |
| `dkprunea` | Eliminar todos los datos no usados |
| `dkrmi_dangling` | Eliminar imágenes huérfanas |

### Volúmenes

| Alias | Descripción |
|-------|-------------|
| `dkv` | Atajo de volúmenes |
| `dkvls` | Listar volúmenes |
| `dkvc` | Crear volumen |
| `dkvi` | Inspeccionar volumen |
| `dkvrm` | Eliminar volumen |
| `dkvp` | Eliminar volúmenes sin uso |

### Redes

| Alias | Descripción |
|-------|-------------|
| `dkn` | Atajo de redes |
| `dknls` | Listar redes |
| `dknc` | Crear red |
| `dkni` | Inspeccionar red |
| `dknrm` | Eliminar red |
| `dknp` | Eliminar redes sin uso |
| `dkncon` | Conectar contenedor a red |
| `dkndis` | Desconectar contenedor de red |

### Sistema

| Alias | Descripción |
|-------|-------------|
| `dks` | Atajo de sistema |
| `dksdf` | Mostrar uso de disco Docker |
| `dksev` | Obtener eventos Docker en tiempo real |
| `dksi` | Mostrar información del sistema |
| `dksp` | Eliminar datos no usados |
| `dkspa` | Eliminar todos los datos no usados |
| `dkcon` | Gestión de contextos |

### Miscelánea

| Alias | Descripción |
|-------|-------------|
| `dkcp` | Copiar archivos entre contenedor y sistema local |
| `dkw` | Esperar a que el contenedor se detenga |
| `dkk` | Matar contenedor |
| `dkatt` | Adjuntar al contenedor |
| `dkd` | Inspeccionar cambios del sistema de archivos |
| `dkcom` | Crear imagen desde contenedor |
| `dktag` | Etiquetar una imagen |
| `dkexp` | Exportar sistema de archivos del contenedor |
| `dkimp` | Importar sistema de archivos del contenedor |
| `dkscan` | Escanear imagen por vulnerabilidades |

### Docker Compose

| Alias | Descripción |
|-------|-------------|
| `dc` | Atajo de Docker Compose |
| `dcu` | Crear y arrancar contenedores |
| `dcud` | Crear y arrancar contenedores en segundo plano |
| `dcd` | Detener y eliminar contenedores |
| `dcdv` | Detener y eliminar contenedores y volúmenes |
| `dcr` | Reiniciar servicios |
| `dcs` | Detener servicios |
| `dcsta` | Iniciar servicios |
| `dcp` | Pausar servicios |
| `dcup` | Reanudar servicios |
| `dcps` | Listar contenedores |
| `dcl` | Ver logs |
| `dclf` | Seguir logs |
| `dcex` | Ejecutar comando en contenedor |
| `dcb` | Construir servicios |
| `dcpull` | Descargar imágenes de servicios |
| `dcpush` | Subir imágenes de servicios |
| `dcrm` | Eliminar contenedores detenidos |
| `dcrun` | Ejecutar comando puntual |
| `dci` | Listar imágenes |
| `dck` | Matar contenedores |
| `dccfg` | Validar y mostrar config Compose |
| `dcev` | Recibir eventos de contenedores |
| `dctop` | Mostrar procesos en ejecución |
| `dcv` | Mostrar versión de Docker Compose |

### Gestión Swarm

| Alias | Descripción |
|-------|-------------|
| `dksw` | Atajo Swarm |
| `dkswi` | Inicializar Docker Swarm |
| `dkswj` | Unirse a Docker Swarm |
| `dkswjt` | Gestionar tokens de unión |
| `dkswl` | Salir de Swarm |
| `dkswu` | Actualizar Swarm |
| `dkswunl` | Desbloquear Swarm |
| `dkswunk` | Gestionar claves de desbloqueo |

### Servicios

| Alias | Descripción |
|-------|-------------|
| `dksrv` | Atajo de servicios |
| `dksrvls` | Listar servicios |
| `dksrvc` | Crear servicio |
| `dksrvi` | Inspeccionar servicio |
| `dksrvps` | Listar tareas del servicio |
| `dksrvl` | Ver logs del servicio |
| `dksrvlf` | Seguir logs del servicio |
| `dksrvrm` | Eliminar servicio |
| `dksrvsc` | Escalar servicio |
| `dksrvu` | Actualizar servicio |
| `dksrvrl` | Revertir servicio |

### Stacks

| Alias | Descripción |
|-------|-------------|
| `dkstk` | Atajo de stacks |
| `dkstkls` | Listar stacks |
| `dkstkd` | Desplegar stack |
| `dkstkps` | Listar tareas en stack |
| `dkstksrv` | Listar servicios en stack |
| `dkstkrm` | Eliminar stack |

### Nodos

| Alias | Descripción |
|-------|-------------|
| `dkn` | Atajo de nodos |
| `dknls` | Listar nodos |
| `dkni` | Inspeccionar nodo |
| `dknp` | Promover nodo a manager |
| `dknd` | Degradar nodo a worker |
| `dknrm` | Eliminar nodo |
| `dknu` | Actualizar nodo |
| `dknps` | Listar tareas en nodo |

## Flujos de trabajo comunes

### Desarrollo de contenedores

```bash
# Iniciar un contenedor de desarrollo
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

### Desarrollo con Docker Compose

```bash
# Iniciar servicios, reconstruir si es necesario, en segundo plano
dcb && dcud
```

### Limpieza

```bash
# Eliminar contenedores detenidos, redes sin uso e imágenes huérfanas
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

### Despliegue en Swarm

```bash
# Desplegar o actualizar un stack desde un compose
dkstkd -c docker-compose.yml my-stack
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
