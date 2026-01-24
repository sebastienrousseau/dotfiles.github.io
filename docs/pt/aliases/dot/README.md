---
description: O comando dot e o ponto de entrada unificado para gerenciar dotfiles, aprender recursos e verificar a saude do sistema.
lang: pt-PT
metaTitle: O comando dot - Dotfiles (PT)
permalink: /pt/aliases/dot/

meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# O comando `dot`

O comando `dot` e a interface unificada para interagir com seus dotfiles. Ele envolve `chezmoi`
e outras utilidades para uma experiencia integrada.

## Uso

```bash
dot [command]
```

## Comandos

| Command      | Description                                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **Modo interativo**: Tour de ferramentas Modern Core (Atuin, Yazi, Zellij) e recursos de AI.                                     |
| `dot doctor` | **Health Check**: Verifica configuracao e dependencias. (Wrapper para `chezmoi doctor`)                                          |
| `dot update` | **Update System**: Busca as ultimas mudancas e reaplica. (Wrapper para `chezmoi update`)                                         |
| `dot help`   | **Ajuda**: Exibe informacoes de uso.                                                                                             |

## Exemplos

### Aprendizado interativo

```bash
dot learn
```

### Verificacao do sistema

```bash
dot doctor
```
