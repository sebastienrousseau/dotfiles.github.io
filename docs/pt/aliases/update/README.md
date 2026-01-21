---
description: Os aliases de Atualização criam atalhos úteis para atualizar o sistema operacional e o software instalado. Ajuda a proteger e aprimorar a instalação atual do Dotfiles para proteger contra vulnerabilidades de segurança, adicionar novos recursos e corrigir bugs críticos.
lang: pt-BR
metaTitle: Aliases de Atualização - Dotfiles (BR)
permalink: /pt/aliases/update/
---

# Aliases de Atualização

O arquivo `update.aliases.sh` cria aliases de atalho úteis para atualizar o
sistema operacional e o software.

As atualizações ajudam a proteger e aprimorar a instalação atual do Dotfiles para proteger
contra vulnerabilidades de segurança, adicionar novos recursos e corrigir bugs críticos.

## Atualização

Para maior controle, o processo de atualização é combinado em um único comando que:

1. Atualizará o sistema operacional e os pacotes de software,
2. Atualizará para a versão mais recente do Dotfiles.
3. Isso também atualizará o arquivo `update.aliases.sh`, para que você sempre tenha
   a versão mais recente do atualizador.

## Plataformas

### Linux

O alias `upd` foi adaptado para funcionar no Linux. Ele atualizará distribuições Linux
baseadas em Debian, via o gerenciador de pacotes `apt` e outras dependências via
pnpm, rustup (Rust) e gem (Ruby).

| Alias | Comando                                                                                                            | Descrição                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| upd   | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | Comando de atualização para sistemas operacionais Linux baseados em Debian. |

### macOS

O alias `upd` também está disponível para macOS. Ele atualizará o macOS, via a
ferramenta de linha de comando `softwareupdate`, e gerenciará suas dependências usando
os gerenciadores de pacotes pnpm, Homebrew, mas, rustup e gem.

| Alias | Comando                                                                                                                                                                                            | Descrição          |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| upd   | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | Atualizar o sistema. |
