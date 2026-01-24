---
description: alias de seguridad para Dotfiles
lang: es-ES
metaTitle: alias de seguridad - Dotfiles
permalink: /es/aliases/security/
---
# Alias de seguridad

Herramientas para fortalecer el entorno y gestionar la inmutabilidad de la configuracion.

## 🔒 Inmutabilidad

| Alias | Descripcion |
|-------|-------------|
| `lock-configs` | Bloquea archivos criticos (`.zshrc`, etc.) para evitar modificaciones (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Desbloquea archivos criticos para edicion. |
| `check-locks` | Verifica el estado de bloqueo de archivos criticos. |

## 🔑 Firma de Git

(Consulta [Alias de Git](../git/README.md) para la configuracion de firma)
