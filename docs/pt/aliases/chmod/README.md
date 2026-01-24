---
description: Os alias de Chmod permitem alterar permissoes (modo de acesso) de arquivos ou diretorios.
lang: pt-PT
metaTitle: Alias de Chmod - Dotfiles (PT)
permalink: /pt/aliases/chmod/
meta:
  - name: twitter:card
    content: Os alias de Chmod permitem alterar permissoes (modo de acesso) de arquivos ou diretorios.
  - name: twitter:description
    content: Os alias de Chmod permitem alterar permissoes (modo de acesso) de arquivos ou diretorios.
  - name: twitter:title
    content: Alias de Chmod - Dotfiles (PT)
  - name: og:title
    content: Alias de Chmod - Dotfiles (PT)
  - name: og:description
    content: Os alias de Chmod permitem alterar permissoes (modo de acesso) de arquivos ou diretorios.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Chmod

Gerenciar alias de Chmod. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `chmod.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

---
## 🚀 Introducao
Este script fornece um conjunto aprimorado de atalhos e funcoes para o
comando `chmod`, facilitando o gerenciamento de permissoes.
Com validacao de entrada, confirmacao recursiva e alias amigaveis,
voce pode ajustar permissoes com eficiencia.
---
## 🛠️ Funcionalidades
Aplicar permissoes comuns com alias predefinidos:
| Alias        | Permissoes      | Descricao                               |
|--------------|------------------|-----------------------------------------|
| `chmod_000`  | `----------`     | Sem permissoes para todos               |
| `chmod_400`  | `r--------`      | Somente leitura para o dono             |
| `chmod_444`  | `r--r--r--`      | Somente leitura para todos              |
| `chmod_600`  | `rw-------`      | Leitura/escrita para o dono             |
| `chmod_644`  | `rw-r--r--`      | Leitura/escrita dono, leitura outros    |
| `chmod_666`  | `rw-rw-rw-`      | Leitura/escrita para todos              |
| `chmod_755`  | `rwxr-xr-x`      | Total dono, leitura/execucao outros     |
| `chmod_764`  | `rwxrw-r--`      | Total dono, leitura/escrita grupo       |
| `chmod_777`  | `rwxrwxrwx`      | Permissoes completas para todos         |
---
### 🔧 Confirmacao recursiva
A funcao `change_permission` permite aplicar permissoes recursivamente
com confirmacao, mostrando o numero de itens afetados:
```bash
change_permission 755 /path/to/directory -R
```
---
### 📂 Atalhos para usuario, grupo e outros
Ajuste permissoes para grupos especificos:
| Alias         | Descricao                                |
|---------------|------------------------------------------|
| `chmod_u+x`   | Adicionar execucao ao dono               |
| `chmod_u-x`   | Remover execucao do dono                 |
| `chmod_u+w`   | Adicionar escrita ao dono                |
| `chmod_u-w`   | Remover escrita do dono                  |
| `chmod_u+r`   | Adicionar leitura ao dono                |
| `chmod_u-r`   | Remover leitura do dono                  |
| `chmod_g+x`   | Adicionar execucao ao grupo              |
| `chmod_g-x`   | Remover execucao do grupo                |
| `chmod_g+w`   | Adicionar escrita ao grupo               |
| `chmod_g-w`   | Remover escrita do grupo                 |
| `chmod_g+r`   | Adicionar leitura ao grupo               |
| `chmod_g-r`   | Remover leitura do grupo                 |
| `chmod_o+x`   | Adicionar execucao a outros              |
| `chmod_o-x`   | Remover execucao de outros               |
| `chmod_o+w`   | Adicionar escrita a outros               |
| `chmod_o-w`   | Remover escrita de outros                |
| `chmod_o+r`   | Adicionar leitura a outros               |
| `chmod_o-r`   | Remover leitura de outros                |
---
Definir permissoes para tipos de arquivo:
| Alias        | Descricao                                        |
|--------------|--------------------------------------------------|
| `chmod_755d` | Definir diretorios como `rwxr-xr-x`              |
| `chmod_644f` | Definir arquivos como `rw-r--r--`                |
---
## 📦 Instalacao
1. Clonar o repositorio:
   ```bash
   git clone https://github.com/sebastienrousseau/dotfiles.git
   ```
2. Adicionar o script ao shell:
   ```bash
   echo 'source /path/to/dotfiles/chmod.sh' >> ~/.bashrc
   ```
3. Recarregar o shell:
   ```bash
   source ~/.bashrc
   ```
---
## 🧑‍💻 Uso
Exemplos de uso:
- Aplicar permissoes comuns:
  ```bash
  chmod_644 /path/to/file
  chmod_755 /path/to/directory
  ```
- Ajustar permissoes por grupo:
  ```bash
  chmod_u+x /path/to/script
  chmod_g-w /path/to/file
  chmod_o+r /path/to/file
  ```
- Permissoes recursivas com confirmacao:
  ```bash
  change_permission 755 /path/to/directory -R
  ```
---
## 🛡️ Licenca
Este projeto e licenciado sob a
[MIT License](https://opensource.org/licenses/MIT). Consulte `LICENSE` para mais informacoes.
---
## 👨‍💻 Autor
Criado com ♥ por [Sebastien Rousseau](https://sebastienrousseau.com)
- Website: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
