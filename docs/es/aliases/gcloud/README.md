---
description: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos del SDK de Google Cloud.
lang: es-ES
metaTitle: Alias de Google Cloud - Dotfiles (ES)
permalink: /es/aliases/gcloud/
meta:
  - name: keywords
    content: alias, gcloud, googlecloud, google, cloud, sdk, línea de comandos, cli, bash, configuración, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos del SDK de Google Cloud.
  - name: twitter:description
    content: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos del SDK de Google Cloud.
  - name: twitter:title
    content: Alias de Google Cloud - Dotfiles (ES)
  - name: og:title
    content: Alias de Google Cloud - Dotfiles (ES)
  - name: og:description
    content: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos del SDK de Google Cloud.
  - name: og:image:alt
    content: Dotfiles - Simplemente diseñado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias de Google Cloud

El archivo `gcloud.aliases.sh` crea atajos útiles para muchos comandos de [Google Cloud](https://cloud.google.com/) comúnmente utilizados.

Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de línea de comandos del SDK de Google Cloud.

## Herramienta de línea de comandos

| Alias | Comando                     | Descripción                                                          |
| ----- | --------------------------- | -------------------------------------------------------------------- |
| gcci  | `gcloud components install` | Instalar componentes específicos.                                    |
| gccsp | `gcloud config set project` | Establecer un proyecto de Google Cloud predeterminado para trabajar. |
| gccu  | `gcloud components update`  | Actualizar tu SDK de Cloud a la última versión.                      |
| gci   | `gcloud init`               | Inicializar, autorizar y configurar la herramienta gcloud.           |
| gcinf | `gcloud info`               | Mostrar detalles del entorno de la herramienta gcloud actual.        |
| gcv   | `gcloud version`            | Mostrar versión y componentes instalados.                            |

## Personalizado

| Alias | Comando                                 | Descripción                                                             |
| ----- | --------------------------------------- | ----------------------------------------------------------------------- |
| gccca | `gcloud config configurations activate` | Cambiar a una configuración nombrada existente.                         |
| gcccc | `gcloud config configurations create`   | Crear una nueva configuración nombrada.                                 |
| gcccl | `gcloud config configurations list`     | Mostrar una lista de todas las configuraciones disponibles.             |
| gccgv | `gcloud config get-value`               | Obtener valor de una propiedad del SDK de Cloud.                        |
| gccl  | `gcloud config list`                    | Mostrar todas las propiedades para la configuración actual.             |
| gccs  | `gcloud config set`                     | Definir una propiedad (como compute/zone) para la configuración actual. |

## Autorización

| Alias  | Comando                                | Descripción                                                                                                                                 |
| ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | Como gcloud auth login pero con credenciales de cuenta de servicio.                                                                         |
| gcacd  | `gcloud auth configure-docker`         | Registrar la herramienta gcloud como un ayudante de credenciales de Docker.                                                                 |
| gcal   | `gcloud auth list`                     | Listar todas las cuentas con credenciales.                                                                                                  |
| gcal   | `gcloud auth login`                    | Autorizar acceso a Google Cloud para la herramienta gcloud con credenciales de usuario de Google y establecer la cuenta actual como activa. |
| gcapat | `gcloud auth print-access-token`       | Mostrar el token de acceso de la cuenta actual.                                                                                             |
| gcar   | `gcloud auth revoke`                   | Eliminar credenciales de acceso para una cuenta.                                                                                            |

## Identidad y Gestión de Acceso en la Nube (IAM)

| Alias  | Comando                                              | Descripción                                                |
| ------ | ---------------------------------------------------- | ---------------------------------------------------------- |
| gciamk | `gcloud iam service-accounts keys list`              | Listar claves de una cuenta de servicio.                   |
| gciaml | `gcloud iam list-grantable-roles`                    | Listar roles otorgables para un recurso.                   |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | Añadir un enlace de política IAM a una cuenta de servicio. |
| gciamr | `gcloud iam roles create`                            | Crear un rol personalizado para un proyecto u org.         |
| gciams | `gcloud iam service-accounts set-iam-policy`         | Reemplazar enlace de política IAM existente.               |
| gciamv | `gcloud iam service-accounts create`                 | Crear una cuenta de servicio para un proyecto.             |

## Políticas de acceso

| Alias | Comando                                  | Descripción                                                  |
| ----- | ---------------------------------------- | ------------------------------------------------------------ |
| gcpa  | `gcloud projects add-iam-policy-binding` | Añadir un enlace de política IAM a un proyecto especificado. |
| gcpd  | `gcloud projects describe`               | Mostrar metadatos para un proyecto (incluyendo su ID).       |

## Kubernetes

| Alias | Comando                                     | Descripción                                                              |
| ----- | ------------------------------------------- | ------------------------------------------------------------------------ |
| gcccc | `gcloud container clusters create`          | Crear un clúster para ejecutar contenedores GKE.                         |
| gcccg | `gcloud container clusters get-credentials` | Actualizar kubeconfig para hacer que kubectl use un clúster GKE.         |
| gcccl | `gcloud container clusters list`            | Listar clústeres para ejecutar contenedores GKE.                         |
| gccil | `gcloud container images list-tags`         | Listar metadatos de etiquetas y resúmenes para una imagen de contenedor. |

## VMs

| Alias   | Comando                             | Descripción                                    |
| ------- | ----------------------------------- | ---------------------------------------------- |
| gcpc    | `gcloud compute copy-files`         | Copiar archivos                                |
| gcpdown | `gcloud compute instances stop`     | Detener instancia                              |
| gcpds   | `gcloud compute disks snapshot`     | Crear snapshot de discos persistentes.         |
| gcpid   | `gcloud compute instances describe` | Mostrar detalles de una instancia VM.          |
| gcpil   | `gcloud compute instances list`     | Listar todas las instancias VM en un proyecto. |
| gcprm   | `gcloud compute instances delete`   | Eliminar instancia                             |
| gcpsk   | `gcloud compute snapshots delete`   | Eliminar un snapshot.                          |
| gcpssh  | `gcloud compute ssh`                | Conectar a una instancia VM usando SSH.        |
| gcpup   | `gcloud compute instances start`    | Iniciar instancia.                             |
| gcpzl   | `gcloud compute zones list`         | Listar zonas de Compute Engine.                |

## alias de gcloud para construir aplicaciones altamente escalables en una plataforma serverless totalmente gestionada

| Alias | Comando                    | Descripción                                                                              |
| ----- | -------------------------- | ---------------------------------------------------------------------------------------- |
| gcapb | `gcloud app browse`        | Abrir la aplicación actual en un navegador web.                                          |
| gcapc | `gcloud app create`        | Crear una aplicación App Engine dentro de tu proyecto actual.                            |
| gcapd | `gcloud app deploy`        | Desplegar el código y configuración de tu aplicación al servidor App Engine.             |
| gcapl | `gcloud app logs read`     | Mostrar los últimos registros de la aplicación App Engine.                               |
| gcapv | `gcloud app versions list` | Listar todas las versiones de todos los servicios desplegados en el servidor App Engine. |

## alias de gcloud para comandos que podrían ser útiles

| Alias  | Comando                       | Descripción                                                                                                            |
| ------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| gckmsd | `gcloud kms decrypt`          | Desencriptar texto cifrado (a un archivo de texto plano) usando una clave de Cloud Key Management Service (Cloud KMS). |
| gclll  | `gcloud logging logs list`    | Listar los registros de tu proyecto.                                                                                   |
| gcsqlb | `gcloud sql backups describe` | Mostrar información sobre una copia de seguridad de una instancia Cloud SQL.                                           |
| gcsqle | `gcloud sql export sql`       | Exportar datos desde una instancia Cloud SQL a un archivo SQL.                                                         |
