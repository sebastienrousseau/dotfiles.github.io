---
description: El comando dot es el punto de entrada unificado para gestionar tus dotfiles, aprender funciones y verificar la salud del sistema.
lang: es-ES
metaTitle: El comando dot - Dotfiles (ES)
permalink: /es/aliases/dot/
meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# El Comando `dot`

El comando `dot` es la nueva interfaz unificada para interactuar con tus dotfiles. Envuelve `chezmoi` y otras utilidades para proporcionar una experiencia fluida.

## Uso

```bash
dot [comando]
```

## Comandos

| Comando      | Descripción                                                                                                                                                  |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **Modo Interactivo**: Inicia un recorrido por las herramientas del Núcleo Moderno (Atuin, Yazi, Zellij) y funciones de IA.                                   |
| `dot doctor` | **Comprobación de Salud**: Verifica que tu sistema esté configurado correctamente y que todas las dependencias estén instaladas. (Envuelve `chezmoi doctor`) |
| `dot update` | **Actualizar Sistema**: Obtiene los últimos cambios del repositorio y los vuelve a aplicar. (Envuelve `chezmoi update`)                                      |
| `dot help`   | **Ayuda**: Muestra información de uso.                                                                                                                       |

## Ejemplos

### Aprendizaje Interactivo

Inicia el recorrido guiado para aprender nuevas combinaciones de teclas:

```bash
dot learn
```

### Verificación del Sistema

Comprueba si todo funciona correctamente:

```bash
dot doctor
```
