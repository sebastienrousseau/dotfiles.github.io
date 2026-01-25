---
description: Alias de desarrollo Rust para Cargo y Rustup. Atajos para compilar, probar y gestionar proyectos Rust.
lang: es-ES
metaTitle: Aliases Rust - Dotfiles (ES)
permalink: /aliases/rust/
sidebar: true

meta:
  - name: keywords
    content: rust, cargo, rustup, alias shell, dotfiles, desarrollo rust
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de desarrollo Rust para Cargo y Rustup. Atajos para compilar, probar y gestionar proyectos Rust.
  - name: twitter:title
    content: Aliases Rust - Dotfiles
  - name: og:title
    content: Aliases Rust - Dotfiles
  - name: og:description
    content: Alias de desarrollo Rust para Cargo y Rustup. Atajos para compilar, probar y gestionar proyectos Rust.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Rust

Atajos para desarrollo Rust con Cargo y Rustup.

## Descubrir

Estos alias se definen en `rust.aliases.sh` y se cargan automáticamente por Chezmoi.

## Referencia

### Comandos básicos

| Alias | Descripción |
|:---|:---|
| `cg` | Atajo de Cargo |
| `cgn` | Crear nuevo proyecto binario |
| `cgni` | Crear nuevo proyecto de librería |
| `cginit` | Inicializar proyecto en el directorio actual |

### Build y ejecución

| Alias | Descripción |
|:---|:---|
| `cgb` | Build debug |
| `cgbr` | Build release |
| `cgr` | Ejecutar en debug |
| `cgrr` | Ejecutar en release |
| `cgw` | Watch y rebuild |

### Pruebas y benchmarking

| Alias | Descripción |
|:---|:---|
| `cgt` | Ejecutar tests |
| `cgtr` | Ejecutar tests en release |
| `cgbh` | Ejecutar benchmarks |
| `cgta` | Probar todos los targets |
| `cgtt` | Tests en un solo hilo |

### Calidad de código

| Alias | Descripción |
|:---|:---|
| `cgc` | Comprobar compilación |
| `cgcl` | Limpiar artefactos |
| `cgcy` | Ejecutar lints de clippy |
| `cgf` | Formatear código |
| `cgfa` | Formatear todo el código |
| `cgfx` | Arreglar problemas automáticamente |
| `cgaud` | Comprobar vulnerabilidades |

### Documentación

| Alias | Descripción |
|:---|:---|
| `cgd` | Construir y abrir documentación |
| `cgdr` | Construir documentación release |
| `cgdo` | Documentar elementos privados |

### Dependencias

| Alias | Descripción |
|:---|:---|
| `cga` | Añadir dependencia |
| `cgad` | Añadir dependencia dev |
| `cgu` | Actualizar dependencias |
| `cgo` | Comprobar dependencias obsoletas |
| `cgv` | Vendorizar dependencias |
| `cgtree` | Mostrar árbol de dependencias |

### Cross compilation

| Alias | Descripción |
|:---|:---|
| `cgx` | Build usando Zig |
| `cgxw` | Cross compilation |
| `cgxt` | Target específico |

### Análisis y profiling

| Alias | Descripción |
|:---|:---|
| `cgfl` | Generar flamegraph |
| `cgbl` | Análisis de tamaño binario |
| `cgl` | Cobertura de código |
| `cgm` | Estructura de módulos |
| `cgex` | Expandir macros |

### Gestión de paquetes

| Alias | Descripción |
|:---|:---|
| `cgi` | Instalar binario |
| `cgun` | Desinstalar binario |
| `cgp` | Publicar en crates.io |
| `cgs` | Buscar en crates.io |
| `cgcp` | Crear paquete release |

### Build avanzado

| Alias | Descripción |
|:---|:---|
| `cgba` | Build de todos los targets |
| `cgbt` | Build con todas las features |
| `cgbp` | Build con perfil específico |

### Plantillas de proyecto

| Alias | Descripción |
|:---|:---|
| `cgnb` | Nuevo binario desde plantilla |
| `cgnl` | Nueva librería desde plantilla |
| `cgnt` | Nuevo desde plantilla personalizada |

### Actualizaciones Rustup

| Alias | Descripción |
|:---|:---|
| `ru` | Actualizar todos los toolchains |
| `rus` | Actualizar toolchain estable |
| `run` | Actualizar toolchain nightly |
| `rti` | Instalar toolchain específico |

### Gestión de componentes

| Alias | Descripción |
|:---|:---|
| `rca` | Añadir componente |
| `rcl` | Listar componentes |
| `rcr` | Eliminar componente |

### Gestión de toolchains

| Alias | Descripción |
|:---|:---|
| `rtl` | Listar toolchains instalados |
| `rtu` | Desinstalar toolchain |
| `rde` | Establecer toolchain por defecto |

### Gestión de targets

| Alias | Descripción |
|:---|:---|
| `rtaa` | Añadir target de compilación |
| `rtal` | Listar targets disponibles |
| `rtar` | Eliminar target de compilación |

### Ejecución por entorno

| Alias | Descripción |
|:---|:---|
| `rns` | Ejecutar comando con stable |
| `rnn` | Ejecutar comando con nightly |

### Documentación y ayuda

| Alias | Descripción |
|:---|:---|
| `rdo` | Abrir documentación de Rust |

### Gestión de overrides

| Alias | Descripción |
|:---|:---|
| `rpr` | Establecer toolchain para directorio |
| `rpl` | Listar overrides de directorio |
| `rpn` | Eliminar override de directorio |

### Información de toolchain

| Alias | Descripción |
|:---|:---|
| `rws` | Mostrar ruta activa de rustc |
| `rsh` | Mostrar info del toolchain |
