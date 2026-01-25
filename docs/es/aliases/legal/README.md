---
title: "Alias Legal: herramientas de cumplimiento open source"
description: "Alias shell para escaneo de licencias, encabezados de copyright y gestión de atribuciones."
lang: es-ES
metaTitle: "Alias Legal | Dotfiles"
permalink: /aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: "alias legal, escaneo de licencias, encabezados copyright, cumplimiento open source, dotfiles"
---

# Alias Legal

Herramientas de shell para cumplimiento open source, escaneo de licencias y atribuciones.

## Descubrir

Los alias legal proporcionan un flujo de trabajo simplificado para cumplir con open source. Estas herramientas manejan el escaneo de licencias, encabezados de copyright y atribución de dependencias.

## Referencia

### Escaneo de licencias

| Alias | Descripción | Tipo |
|-------|-------------|------|
| `fossology-start` | Iniciar servidor FOSSology local en el puerto 8081 | Docker |
| `fossology-stop` | Detener servidor FOSSology | Docker |
| `license-scan` | Escaneo rápido de licencias del directorio actual vía Trivy | Binario |

### Encabezados de copyright

| Alias | Descripción | Tipo |
|-------|-------------|------|
| `add-headers` | Añadir encabezados MIT de forma recursiva a archivos fuente | Docker (google/addlicense) |

### Atribución

| Alias | Descripción | Tipo |
|-------|-------------|------|
| `gen-notice` | Generar un archivo NOTICE para dependencias (Go inicialmente) | Docker |

### Contribución

| Alias | Descripción | Tipo |
|-------|-------------|------|
| `check-cla` | Vigilar checks de PR en GitHub incluyendo estado CLA | CLI (gh) |

## Requisitos

- **Docker** - Requerido para aislar herramientas de cumplimiento
- **GitHub CLI (gh)** - Requerido para PR y verificación CLA
- **Trivy** - Instalado automáticamente o sugerido para escaneo rápido
