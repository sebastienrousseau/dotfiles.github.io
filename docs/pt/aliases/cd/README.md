---
description: Os alias de Change Directory permitem interagir com o comando `cd`. Cd muda o diretorio atual.
lang: pt-PT
metaTitle: Alias de Change Directory - Dotfiles (PT)
permalink: /pt/aliases/cd/

meta:
  - name: keywords
    content: aliases, cd, chdir, change directory, directory, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Os alias de Change Directory permitem interagir com o comando `cd`. Cd muda o diretorio atual.
  - name: twitter:description
    content: Os alias de Change Directory permitem interagir com o comando `cd`. Cd muda o diretorio atual.
  - name: twitter:title
    content: Alias de Change Directory - Dotfiles (PT)
  - name: og:title
    content: Alias de Change Directory - Dotfiles (PT)
  - name: og:description
    content: Os alias de Change Directory permitem interagir com o comando `cd`. Cd muda o diretorio atual.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---
# Alias de Cd

Gerenciar alias de Cd. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `cd.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

---
## 🚀 Introducao
Este repositorio inclui um conjunto robusto de alias e scripts para
melhorar a navegacao em diretorios:
- Historico inteligente
- Bookmarks persistentes
- Deteccao de raiz do projeto
- Compatibilidade cross-platform
- Tratamento dinamico de erros
- Listagem automatica
- Otimizacao para diretorios grandes
- Seguranca e validacao aprimoradas
---
## 🛠️ Recursos
### 🌟 Atalhos de navegacao
| Alias           | Descricao                           |
|------------------|------------------------------------|
| `-`             | Voltar ao diretorio anterior        |
| `..`, `...`     | Subir um ou dois niveis             |
| `....`, `.....` | Subir tres ou quatro niveis         |
| `hom`           | Ir para o home (`~`)                |
---
### 📂 Acesso rapido a diretorios
| Alias | Caminho                 | Descricao           |
|-------|--------------------------|--------------------|
| `app` | `${HOME}/Applications`  | Applications       |
| `cod` | `${HOME}/Code`          | Code               |
| `dsk` | `${HOME}/Desktop`       | Desktop            |
| `doc` | `${HOME}/Documents`     | Documents          |
| `dot` | `${HOME}/.dotfiles`     | Dotfiles           |
| `dwn` | `${HOME}/Downloads`     | Downloads          |
| `mus` | `${HOME}/Music`         | Music              |
| `pic` | `${HOME}/Pictures`      | Pictures           |
| `vid` | `${HOME}/Videos`        | Videos             |
---
### 📌 Bookmarks
| Command             | Alias | Descricao                       |
|---------------------|-------|---------------------------------|
| `bookmark [name]`   | `bm`  | Criar bookmark                  |
| `bookmark_list`     | `bml` | Listar bookmarks                |
| `bookmark_update`   | `bmu` | Atualizar bookmark              |
| `bookmark_remove`   | `bmr` | Remover bookmark                |
| `goto <name>`       | `bmg` | Ir para bookmark                |
```bash
bm work-project
bmg work-project
bml
```
---
### 🕒 Historico de diretorios
| Command      | Alias | Descricao                         |
|--------------|-------|-----------------------------------|
| `dirhistory` | `dh`  | Mostrar e navegar no historico    |
| `lwd`        | `ld`  | Voltar ao ultimo diretorio        |
---
### 🏗️ Navegacao avancada
| Command          | Alias | Descricao                               |
|------------------|-------|-----------------------------------------|
| `mkcd <dir>`     | `mcd` | Criar e entrar no diretorio             |
| `proj`           | `pr`  | Ir para a raiz do projeto               |
| `pushd`          | `pd`  | Empilhar diretorio                      |
| `popd`           |       | Desempilhar diretorio                   |
| `dirs`           |       | Listar pilha de diretorios              |
---
### 🔧 Diretorios do sistema
| Alias | Caminho | Descricao                        |
|-------|--------|----------------------------------|
| `etc` | `/etc` | Configuracao do sistema           |
| `var` | `/var` | Arquivos variaveis                |
| `tmp` | `/tmp` | Temporarios                       |
| `usr` | `/usr` | Programas do usuario              |
---
### ⚙️ Customizacao
- Suporte a macOS/Linux
- Variaveis de ambiente:
  ```bash
  export SHOW_HIDDEN_FILES=true
  export ENABLE_COLOR_OUTPUT=true
  export ENABLE_DIR_GROUPING=true
  export AUTO_LIST_AFTER_CD=true
  export LARGE_DIR_THRESHOLD=1000
  export MAX_RECENT_DIRS=15
  export RESTORE_LAST_DIR=true
  ```
- Tab completion
- Ajuda: `cdhelp`
- Versao: `cdversion`
---
## 📦 Instalacao
```bash
git clone https://github.com/sebastienrousseau/dotfiles.git
```
```bash
echo 'source /path/to/dotfiles/cd.aliases.sh' >> ~/.bashrc
```
```bash
source ~/.bashrc
```
---
## 🧑‍💻 Exemplos
```bash
cd ~/projects/website
mcd ~/projects/new-project
bm website
bml
bmg website
pr
mcd ~/projects/app/src/components
dh
ld
pd ~/downloads
popd
cdversion
cdhelp
```
---
## 🛡️ Seguranca
- Validacao de diretorios
- Validacao de bookmarks
- Operacoes seguras
- Sanitizacao de entrada
---
## 📋 Performance
- Ignora listagem em diretorios grandes
- Armazenamento eficiente de bookmarks
- Evita duplicatas no historico
- Operacoes otimizadas
---
## 📚 Documentacao
Execute `cdhelp` ou consulte a documentacao oficial.
---
## 🛡️ License
[MIT License](https://opensource.org/licenses/MIT).
---
## 👨‍💻 Author
Created with ♥ by [Sebastien Rousseau](https://sebastienrousseau.com)
- Website: [https://sebastienrousseau.com](https://sebastienrousseau.com)
- GitHub: [https://github.com/sebastienrousseau](https://github.com/sebastienrousseau)
