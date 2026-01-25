---
description: Alias de seguridad para inmutabilidad de configuracion y fortalecimiento del entorno. Bloquea y desbloquea archivos criticos del sistema.
lang: es-ES
metaTitle: Alias de Security - Dotfiles (ES)
permalink: /es/aliases/security/
sidebar: true

meta:
  - name: keywords
    content: alias seguridad, inmutabilidad, bloqueo archivos, fortalecimiento, chattr, chflags, dotfiles, shell
---

# Alias de Security

Herramientas para fortalecer el entorno y gestionar la inmutabilidad de la configuracion.

## Descripcion

Los alias de seguridad proporcionan comandos para bloquear archivos criticos de configuracion, previniendo modificaciones accidentales o maliciosas. Estos alias funcionan tanto en macOS (chflags) como en Linux (chattr).

## Referencia

### Inmutabilidad

| Alias | Descripcion |
|:---|:---|
| `lock-configs` | Bloquear archivos criticos (.zshrc, etc.) para evitar modificaciones |
| `unlock-configs` | Desbloquear archivos criticos para edicion |
| `check-locks` | Verificar el estado de bloqueo de archivos criticos |

### Firma de Git

Consulta [Alias de Git](../git/) para la configuracion de firma de commits.
