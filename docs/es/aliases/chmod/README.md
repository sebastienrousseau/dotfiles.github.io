---
description: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
lang: es-ES
metaTitle: Alias de Chmod - Dotfiles (ES)
permalink: /es/aliases/chmod/
meta:
  - name: twitter:card
    content: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
  - name: twitter:description
    content: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
  - name: twitter:title
    content: Alias de Chmod - Dotfiles (ES)
  - name: og:title
    content: Alias de Chmod - Dotfiles (ES)
  - name: og:description
    content: Los alias de Chmod permiten cambiar los permisos (o modo de acceso) de un archivo o directorio.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Chmod

Gestionar alias de Chmod. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `chmod.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

---
## 🚀 Introduccion
Este script proporciona un conjunto mejorado de atajos y funciones para el
comando `chmod`, facilitando la gestion de permisos de archivos y directorios.
Con funciones como validacion de entrada, confirmacion recursiva y alias faciles de usar,
puedes personalizar permisos de forma eficiente.
---
## 🛠️ Funcionalidades
Aplica rapidamente configuraciones comunes de permisos con alias predefinidos:
| Alias        | Permisos         | Descripcion                                   |
|--------------|------------------|-----------------------------------------------|
| `chmod_000`  | `----------`     | Sin permisos para nadie                       |
| `chmod_400`  | `r--------`      | Solo lectura para el propietario              |
| `chmod_444`  | `r--r--r--`      | Solo lectura para todos                       |
| `chmod_600`  | `rw-------`      | Lectura/escritura para el propietario         |
| `chmod_644`  | `rw-r--r--`      | Lectura/escritura propietario, lectura otros  |
| `chmod_666`  | `rw-rw-rw-`      | Lectura/escritura para todos                  |
| `chmod_755`  | `rwxr-xr-x`      | Total propietario, lectura/ejecucion otros    |
| `chmod_764`  | `rwxrw-r--`      | Total propietario, lectura/escritura grupo    |
| `chmod_777`  | `rwxrwxrwx`      | Permisos completos para todos                 |
---
### 🔧 Confirmacion recursiva para permisos
La funcion `change_permission` permite aplicar permisos de forma recursiva
con un aviso de confirmacion, mostrando el numero de elementos afectados:
```bash
change_permission 755 /path/to/directory -R
```
---
### 📂 Atajos para usuario, grupo y otros
Ajusta permisos para grupos especificos (propietario, grupo u otros):
| Alias         | Descripcion                                   |
|---------------|-----------------------------------------------|
| `chmod_u+x`   | Agregar permiso de ejecucion al propietario   |
| `chmod_u-x`   | Quitar permiso de ejecucion al propietario    |
| `chmod_u+w`   | Agregar permiso de escritura al propietario   |
| `chmod_u-w`   | Quitar permiso de escritura al propietario    |
| `chmod_u+r`   | Agregar permiso de lectura al propietario     |
| `chmod_u-r`   | Quitar permiso de lectura al propietario      |
| `chmod_g+x`   | Agregar permiso de ejecucion al grupo         |
| `chmod_g-x`   | Quitar permiso de ejecucion al grupo          |
| `chmod_g+w`   | Agregar permiso de escritura al grupo         |
| `chmod_g-w`   | Quitar permiso de escritura al grupo          |
| `chmod_g+r`   | Agregar permiso de lectura al grupo           |
| `chmod_g-r`   | Quitar permiso de lectura al grupo            |
| `chmod_o+x`   | Agregar permiso de ejecucion a otros          |
| `chmod_o-x`   | Quitar permiso de ejecucion a otros           |
| `chmod_o+w`   | Agregar permiso de escritura a otros          |
| `chmod_o-w`   | Quitar permiso de escritura a otros           |
| `chmod_o+r`   | Agregar permiso de lectura a otros            |
| `chmod_o-r`   | Quitar permiso de lectura a otros             |
---
Establece permisos para tipos de archivo especificos:
| Alias        | Descripcion                                        |
|--------------|----------------------------------------------------|
| `chmod_755d` | Establecer permisos de directorios a `rwxr-xr-x`   |
| `chmod_644f` | Establecer permisos de archivos a `rw-r--r--`      |
---
## 📦 Instalacion
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git
   ```
2. Incluir el script en tu configuracion de shell:
   ```bash
   echo 'source /path/to/dotfiles/chmod.sh' >> ~/.bashrc
   ```
3. Recargar el shell:
   ```bash
   source ~/.bashrc
   ```
---
## 🧑‍💻 Uso
Ejemplos de uso de alias y funciones de `chmod`:
- Aplicar permisos comunes:
  ```bash
  chmod_644 /path/to/file
  chmod_755 /path/to/directory
  ```
- Modificar permisos para usuario, grupo u otros:
  ```bash
  chmod_u+x /path/to/script
  chmod_g-w /path/to/file
  chmod_o+r /path/to/file
  ```
- Establecer permisos recursivos con confirmacion:
  ```bash
  change_permission 755 /path/to/directory -R
  ```
---
## 🛡️ Licencia
Este proyecto esta licenciado bajo la
[Licencia MIT](https://opensource.org/licenses/MIT). Consulta el archivo `LICENSE` para
mas informacion.
---
## 👨‍💻 Autor
Creado con ♥ por [Sebastien Rousseau](https://sebastienrousseau.com)
- Sitio web: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
