---
description: Alias legales para Dotfiles
lang: es-ES
metaTitle: Alias Legales - Dotfiles (ES)
permalink: /es/aliases/legal/
---

# Alias Legales y de Licencias

Herramientas para gestionar el cumplimiento de código abierto, escaneo de licencias y atribución.

## ⚖️ Alias

### Escaneo de Licencias

| Alias             | Descripción                                   | Tipo   |
| ----------------- | --------------------------------------------- | ------ |
| `fossology-start` | Iniciar servidor local FOSSology en el puerto 8081     | Docker |
| `fossology-stop`  | Detener servidor FOSSology                         | Docker |
| `license-scan`    | Escaneo rápido de licencias del directorio actual (vía Trivy) | Binario |

### Cabeceras de Copyright

| Alias         | Descripción                                             | Tipo                       |
| ------------- | ------------------------------------------------------- | -------------------------- |
| `add-headers` | Agregar recursivamente cabeceras de licencia MIT a todos los archivos fuente | Docker (google/addlicense) |

### Atribución

| Alias        | Descripción                                                      | Tipo   |
| ------------ | ---------------------------------------------------------------- | ------ |
| `gen-notice` | Generar un archivo `NOTICE` para dependencias (soporte inicial para Go) | Docker |

### Contribución

| Alias       | Descripción                            | Tipo       |
| ----------- | -------------------------------------- | ---------- |
| `check-cla` | Observar comprobaciones de PR en GitHub (incluyendo CLA) | CLI (`gh`) |

## 📦 Requisitos

- **Docker**: Para el aislamiento de herramientas de cumplimiento.
- **GitHub CLI (`gh`)**: Para comprobar PR/CLA.
- **Trivy**: Instalado/sugerido automáticamente para escaneo rápido.
