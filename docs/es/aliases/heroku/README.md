---
title: "Alias Heroku: atajos shell para la CLI de Heroku"
description: "Acelera flujos Heroku con 200+ alias para apps, bases de datos, pipelines y despliegues."
lang: es-ES
metaTitle: Alias Heroku | Dotfiles
permalink: /aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: alias heroku, atajos heroku cli, comandos shell heroku, dotfiles, despliegue paas, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Heroku | Dotfiles
  - name: twitter:description
    content: Acelera flujos Heroku con 200+ alias para apps, bases de datos, pipelines y despliegues.
  - name: og:title
    content: Alias Heroku | Dotfiles
  - name: og:description
    content: Acelera flujos Heroku con 200+ alias para apps, bases de datos, pipelines y despliegues.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Heroku

Atajos shell para la CLI de Heroku, definidos en `heroku.aliases.sh` y cargados automáticamente por chezmoi.

## Descubrir

Esta colección proporciona más de 200 alias para la [CLI de Heroku](https://devcenter.heroku.com/articles/heroku-cli), cubriendo gestión de apps, add-ons, bases de datos, pipelines, contenedores y más.

## Referencia

### Comandos generales

| Alias | Descripción |
|-------|-------------|
| `hkk` | Atajo de comando de Heroku CLI |
| `hka` | Añadir nuevos usuarios a tu app |
| `hkau` | Actualizar colaboradores en una app de equipo |
| `hkh` | Mostrar ayuda de Heroku |
| `hkj` | Añadirte a una app de equipo |
| `hkl` | Listar todos los comandos |
| `hkla` | Listar quién tiene acceso a una app |
| `hklg` | Mostrar salida de logs recientes |
| `hkn` | Mostrar notificaciones |
| `hko` | Listar equipos de los que eres miembro |
| `hkoo` | Abrir la interfaz de equipo en el navegador |
| `hkp` | Abrir un shell psql a la base |
| `hkq` | Quitarte de una app de equipo |
| `hkr` | Quitar usuarios de una app de equipo |
| `hkrg` | Listar regiones disponibles para despliegue |
| `hks` | Mostrar el estado de la plataforma Heroku |
| `hkt` | Listar equipos de los que eres miembro |
| `hku` | Actualizar la CLI de Heroku |
| `hkulk` | Desbloquear una app para que cualquier miembro se una |
| `hkw` | Mostrar en qué plugin está un comando |

### Add-ons

| Alias | Descripción |
|-------|-------------|
| `hkada` | Adjuntar un recurso add-on existente a una app |
| `hkadc` | Crear un nuevo recurso add-on |
| `hkadd` | Desvincular un recurso add-on existente |
| `hkaddoc` | Abrir documentación Dev Center del add-on |
| `hkaddown` | Cambiar plan del add-on |
| `hkadi` | Mostrar detalles del recurso/adjunto |
| `hkadk` | Destruir permanentemente un recurso add-on |
| `hkadl` | Listar add-ons y adjuntos |
| `hkado` | Abrir dashboard del add-on |
| `hkadp` | Listar planes disponibles del add-on |
| `hkadr` | Renombrar un add-on |
| `hkads` | Listar servicios add-on disponibles |
| `hkadu` | Cambiar plan del add-on |
| `hkadw` | Mostrar estado de aprovisionamiento |

### Apps

| Alias | Descripción |
|-------|-------------|
| `hkapc` | Crear una nueva app |
| `hkape` | Ver errores de la app |
| `hkapfav` | Listar apps favoritas |
| `hkapfava` | Marcar app como favorita |
| `hkapunfav` | Quitar favorito |
| `hkapi` | Mostrar información detallada de la app |
| `hkapj` | Añadirte a una app de equipo |
| `hkapk` | Destruir permanentemente una app |
| `hkapl` | Listar tus apps |
| `hkaplk` | Evitar que miembros se unan |
| `hkapo` | Abrir la app en navegador |
| `hkapq` | Quitarte de una app de equipo |
| `hkapr` | Renombrar una app |
| `hkaps` | Mostrar stacks disponibles |
| `hkapss` | Establecer stack de una app |
| `hkapt` | Transferir apps a otro usuario o equipo |
| `hkapulk` | Desbloquear una app para que un miembro se una |

### Autenticación

| Alias | Descripción |
|-------|-------------|
| `hk2fa` | Mostrar el usuario conectado |
| `hk2fad` | Desactivar 2FA |
| `hk2fain` | Iniciar sesión con credenciales Heroku |
| `hk2faout` | Borrar credenciales locales y invalidar sesión API |
| `hk2fas` | Comprobar estado 2FA |
| `hk2fat` | Mostrar token de autenticación CLI |

### Autorizaciones OAuth

| Alias | Descripción |
|-------|-------------|
| `hkauc` | Crear una autorización OAuth |
| `hkaui` | Mostrar una autorización OAuth |
| `hkaul` | Listar autorizaciones OAuth |
| `hkaur` | Revocar autorización OAuth |
| `hkauro` | Actualizar token de autorización OAuth |
| `hkauu` | Actualizar una autorización OAuth |

### Buildpacks

| Alias | Descripción |
|-------|-------------|
| `hkbpac` | Mostrar instrucciones de autocompletado |
| `hkbpad` | Añadir buildpack a la app |
| `hkbpcl` | Limpiar buildpacks de la app |
| `hkbpi` | Obtener info del buildpack |
| `hkbpl` | Mostrar buildpacks de la app |
| `hkbpr` | Eliminar un buildpack |
| `hkbps` | Buscar buildpacks |
| `hkbpv` | Listar versiones de un buildpack |

### Certificados

| Alias | Descripción |
|-------|-------------|
| `hkca` | Mostrar estado ACM |
| `hkcad` | Añadir certificado SSL |
| `hkcae` | Activar estado ACM |
| `hkcak` | Desactivar ACM |
| `hkcar` | Actualizar ACM |
| `hkcc` | Mostrar cadena completa de un certificado |
| `hkcg` | Generar clave y CSR o certificado autofirmado |
| `hkci` | Mostrar información de certificado SSL |
| `hkck` | Mostrar clave correcta para un certificado |
| `hkcl` | Listar certificados SSL |
| `hkcr` | Eliminar certificado SSL |
| `hkcu` | Actualizar certificado SSL |

### CI

| Alias | Descripción |
|-------|-------------|
| `hkcicg` | Obtener variable de config CI |
| `hkcics` | Establecer variables de config CI |
| `hkcicu` | Eliminar variables de config CI |
| `hkcicv` | Mostrar variables de config CI |
| `hkcid` | Abrir sesión interactiva de depuración de tests |
| `hkcie` | Obtener salida del último run |
| `hkcii` | Mostrar estado de un run de test |
| `hkcil` | Mostrar los últimos runs de CI |
| `hkcim` | Migrar app-ci.json a app.json con environments |
| `hkcio` | Abrir dashboard de Heroku CI |
| `hkcir` | Ejecutar tests en el directorio actual |
| `hkcir2` | Reejecutar tests en el directorio actual |

### Clientes OAuth

| Alias | Descripción |
|-------|-------------|
| `hkclc` | Crear un cliente OAuth |
| `hkcli` | Mostrar detalles de un cliente OAuth |
| `hkclk` | Eliminar cliente por ID |
| `hkcll` | Listar clientes OAuth |
| `hkcls` | Rotar el secreto del cliente OAuth |
| `hkclu` | Actualizar cliente OAuth |

### Variables de configuración

| Alias | Descripción |
|-------|-------------|
| `hkcfe` | Editar variables de config interactivamente |
| `hkcfg` | Mostrar un valor de config |
| `hkcfs` | Establecer variables de config |
| `hkcfu` | Eliminar variables de config |
| `hkcfv` | Mostrar variables de config |

### Contenedores

| Alias | Descripción |
|-------|-------------|
| `hkct` | Usar contenedores para build y deploy |
| `hkctin` | Login en el registro de contenedores Heroku |
| `hkctout` | Logout del registro de contenedores Heroku |
| `hkctpull` | Descargar imagen del tipo de proceso |
| `hkctpush` | Build y push de imágenes Docker |
| `hkctrelease` | Liberar imágenes Docker previamente subidas |
| `hkctrm` | Eliminar el tipo de proceso de la app |
| `hkctrun` | Build y ejecutar imagen localmente |

### Dominios

| Alias | Descripción |
|-------|-------------|
| `hkdo` | Listar dominios de una app |
| `hkdoa` | Añadir dominio a una app |
| `hkdoc` | Eliminar todos los dominios de una app |
| `hkdoi` | Mostrar info detallada del dominio |
| `hkdor` | Eliminar un dominio de una app |
| `hkdou` | Actualizar dominio con otro certificado SSL |
| `hkdow` | Esperar a que el dominio esté activo |

### Drains

| Alias | Descripción |
|-------|-------------|
| `hkdr` | Mostrar drains de logs |
| `hkdra` | Añadir un log drain |
| `hkdrr` | Eliminar un log drain |

### Dynos

| Alias | Descripción |
|-------|-------------|
| `hkdyk` | Detener dyno |
| `hkdyrz` | Gestionar tamaños de dyno |
| `hkdyrs` | Reiniciar dynos |
| `hkdysc` | Escalar cantidad de dynos |
| `hkdyst` | Detener dyno |

### Funciones

| Alias | Descripción |
|-------|-------------|
| `hkfeat` | Listar funciones disponibles |
| `hkfeatd` | Desactivar una función |
| `hkfeate` | Activar una función |
| `hkfeati` | Mostrar información de función |

### Git

| Alias | Descripción |
|-------|-------------|
| `hkgitc` | Clonar una app a local en DIRECTORY (por defecto nombre) |
| `hkgitr` | Añadir un remoto git a una app |

### Claves

| Alias | Descripción |
|-------|-------------|
| `hkka` | Añadir una clave SSH para un usuario |
| `hkkcl` | Eliminar todas las claves SSH del usuario actual |
| `hkkr` | Eliminar una clave SSH del usuario |

### Labs

| Alias | Descripción |
|-------|-------------|
| `hklab` | Listar funciones experimentales |
| `hklabd` | Desactivar una función experimental |
| `hklabe` | Activar una función experimental |
| `hklabi` | Mostrar información de la función |

### Local

| Alias | Descripción |
|-------|-------------|
| `hkloc` | Ejecutar app Heroku localmente |
| `hklocr` | Ejecutar un comando puntual |
| `hklocv` | Mostrar versión node-foreman |
| `hkloclk` | Evitar que miembros se unan a una app |

### Mantenimiento

| Alias | Descripción |
|-------|-------------|
| `hkmt` | Mostrar estado de mantenimiento |
| `hkmtoff` | Salir del modo mantenimiento |
| `hkmton` | Entrar en modo mantenimiento |

### Miembros

| Alias | Descripción |
|-------|-------------|
| `hkmb` | Listar miembros de un equipo |
| `hkmba` | Añadir usuario a un equipo |
| `hkmbr` | Eliminar usuario de un equipo |
| `hkmbs` | Establecer rol de miembro |

### PostgreSQL

| Alias | Descripción |
|-------|-------------|
| `hkpg` | Mostrar información de la base |
| `hkpgb` | Mostrar bloat de tablas/índices |
| `hkpgbk` | Listar backups |
| `hkpgbkcl` | Cancelar backup/restore en curso |
| `hkpgbkc` | Capturar un nuevo backup |
| `hkpgbkdl` | Eliminar un backup |
| `hkpgbkdw` | Descargar backup |
| `hkpgbki` | Información de un backup |
| `hkpgbkr` | Restaurar backup (por defecto el último) |
| `hkpgbks` | Programar backups diarios |
| `hkpgbksh` | Listar programación de backups |
| `hkpgbkurl` | Obtener URL pública del backup |
| `hkpgbkk` | Detener backups diarios |
| `hkpgblk` | Mostrar consultas con bloqueos |
| `hkpgc` | Copiar datos de DB origen a destino |
| `hkpgcpa` | Adjuntar DB con pool de conexiones |
| `hkpgcr` | Info de credenciales de la DB |
| `hkpgcrc` | Crear credencial en la DB |
| `hkpgcrd` | Destruir credencial en la DB |
| `hkpgcrr` | Rotar credenciales de DB |
| `hkpgcrrd` | Reparar permisos de credencial por defecto |
| `hkpgcrurl` | Info de credencial de DB |
| `hkpgdg` | Ejecutar/ver reporte de diagnóstico |
| `hkpgi` | Mostrar info de la DB |
| `hkpgk` | Matar una consulta |
| `hkpgka` | Terminar todas las conexiones |
| `hkpglks` | Mostrar consultas con locks activos |
| `hkpglnk` | Listar DBs y enlaces |
| `hkpglnkc` | Crear enlace entre data stores |
| `hkpglnkd` | Destruir enlace entre data stores |
| `hkpgmt` | Mostrar estado de mantenimiento |
| `hkpgmtr` | Iniciar mantenimiento |
| `hkpgmtw` | Establecer ventana semanal de mantenimiento |
| `hkpgo` | Mostrar 10 consultas más largas |
| `hkpgp` | Establecer DATABASE como DATABASE_URL |
| `hkpgps` | Ver consultas activas y duración |
| `hkpgpsql` | Abrir shell psql |
| `hkpgpull` | Traer DB Heroku a local/remota |
| `hkpgpush` | Subir DB local/remota a Heroku |
| `hkpgreset` | Borrar todos los datos de DATABASE |
| `hkpgset` | Mostrar ajustes actuales |
| `hkpgsetllw` | Log si una sesión espera demasiado por locks |
| `hkpgsetlmds` | Log de duración de consultas largas |
| `hkpgsetlgs` | Control de consultas SQL logueadas |
| `hkpguf` | Dejar de seguir una réplica para escritura |
| `hkpgup` | Unfollow y actualizar a la versión estable |
| `hkpgvs` | Mostrar filas muertas y vacuum esperado |
| `hkpgww` | Esperar disponibilidad de la DB |

### Pipelines

| Alias | Descripción |
|-------|-------------|
| `hkpipe` | Listar pipelines accesibles |
| `hkpipea` | Añadir app al pipeline |
| `hkpipec` | Crear un pipeline |
| `hkpipect` | Conectar repo GitHub a pipeline |
| `hkpipediff` | Comparar release con apps downstream |
| `hkpipei` | Listar apps en pipeline |
| `hkpipek` | Destruir pipeline |
| `hkpipeo` | Abrir pipeline en dashboard |
| `hkpipep` | Promover release al downstream |
| `hkpiper` | Quitar app del pipeline |
| `hkpipern` | Renombrar pipeline |
| `hkpipes` | Iniciar pipeline con ajustes comunes |
| `hkpipett` | Transferir propiedad del pipeline |
| `hkpipeu` | Actualizar etapa de la app en pipeline |

### Plugins

| Alias | Descripción |
|-------|-------------|
| `hkplugs` | Listar plugins instalados |
| `hkplugsi` | Instalar un plugin |
| `hkplugslk` | Vincular plugin para desarrollo |
| `hkplugsui` | Eliminar un plugin de la CLI |
| `hkplugsu` | Actualizar plugins instalados |

### Process

| Alias | Descripción |
|-------|-------------|
| `hkpsad` | Desactivar autoscaling de web dynos |
| `hkps` | Listar dynos de una app |
| `hkpsae` | Activar autoscaling de web dynos |
| `hkpsc` | Copiar un archivo desde un dyno |
| `hkpse` | Crear sesión SSH en un dyno |
| `hkpsf` | Forward de tráfico a un dyno |
| `hkpsk` | Detener dyno |
| `hkpsr` | Reiniciar dynos |
| `hkpsrs` | Gestionar tamaños de dyno |
| `hkpss` | Detener dyno |
| `hkpssc` | Escalar cantidad de dynos |
| `hkpssck` | Lanzar proxy SOCKS en un dyno |
| `hkpst` | Gestionar tamaños de dyno |
| `hkpsw` | Esperar a que todos los dynos estén en la última versión |

### Redis

| Alias | Descripción |
|-------|-------------|
| `hkred` | Obtener información de Redis |
| `hkredcli` | Abrir prompt Redis |
| `hkredcr` | Mostrar info de credenciales |
| `hkredi` | Obtener info de Redis |
| `hkredkn` | Configurar notificaciones keyspace |
| `hkredmm` | Configurar política de expulsión |
| `hkredmt` | Gestionar ventanas de mantenimiento |
| `hkredp` | Establecer DATABASE como REDIS_URL |
| `hkredsr` | Reiniciar estadísticas RESETSTAT |
| `hkredt` | Definir tiempo antes de matar conexiones inactivas |
| `hkredw` | Esperar disponibilidad de Redis |

### Releases

| Alias | Descripción |
|-------|-------------|
| `hkrel` | Mostrar releases |
| `hkreli` | Ver detalles de un release |
| `hkrelo` | Ver salida del comando release |
| `hkrelr` | Volver a un release anterior |

### Review Apps

| Alias | Descripción |
|-------|-------------|
| `hkrvae` | Habilitar review apps y/o ajustes |
| `hkrvad` | Deshabilitar review apps y/o ajustes |

### Run

| Alias | Descripción |
|-------|-------------|
| `hkrun` | Ejecutar proceso puntual en un dyno |
| `hkrund` | Ejecutar dyno en segundo plano con logs |

### Sessions

| Alias | Descripción |
|-------|-------------|
| `hksessions` | Listar tus sesiones OAuth |
| `hksessionsd` | Eliminar sesión OAuth por ID |

### Spaces

| Alias | Descripción |
|-------|-------------|
| `hksp` | Listar spaces disponibles |
| `hkspc` | Crear un space |
| `hkspd` | Destruir un space |
| `hkspi` | Mostrar info de un space |
| `hksppi` | Mostrar info para iniciar peering |
| `hkspp` | Listar conexiones de peering |
| `hksppa` | Aceptar solicitud de peering |
| `hksppd` | Eliminar una conexión de peering activa |
| `hkspps` | Listar dynos de un space |
| `hkspr` | Renombrar un space |
| `hksptop` | Mostrar topología del space |
| `hkspt` | Transferir un space a otro equipo |
| `hkspconf` | Mostrar configuración VPN |
| `hkspvc` | Crear VPN |
| `hkspvcs` | Listar conexiones VPN |
| `hkspvk` | Eliminar VPN en space privado |
| `hkspvi` | Mostrar info VPN |
| `hkspvu` | Actualizar VPN |
| `hkspvw` | Esperar creación de VPN |
| `hkspw` | Esperar creación del space |

### Webhooks

| Alias | Descripción |
|-------|-------------|
| `hkwh` | Listar webhooks de una app |
| `hkwha` | Añadir webhook a una app |
| `hkwhdv` | Listar entregas de webhooks |
| `hkwhdvi` | Info de un evento webhook |
| `hkwhev` | Listar eventos webhook |
| `hkwhevi` | Info de un evento webhook |
| `hkwhi` | Info de un webhook |
| `hkwhr` | Eliminar un webhook |
| `hkwhu` | Actualizar un webhook |
