---
description: O comando dot é o ponto de entrada unificado para gerenciar seus dotfiles, aprender recursos e verificar a integridade do sistema.
lang: pt-BR
metaTitle: O comando dot - Dotfiles (BR)
permalink: /pt/aliases/dot/
---

# O Comando `dot`

O comando `dot` é a nova interface unificada para interagir com seus dotfiles. Ele envolve `chezmoi` e outros utilitários para fornecer uma experiência perfeita.

## Uso

```bash
dot [comando]
```

## Comandos

| Comando      | Descrição                                                                                                                                               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dot learn`  | **Modo Interativo**: Lança um tour pelas ferramentas Modern Core (Atuin, Yazi, Zellij) e recursos de IA.                                                |
| `dot doctor` | **Verificação de Saúde**: Verifica se seu sistema está configurado corretamente e se todas as dependências estão instaladas. (Envolve `chezmoi doctor`) |
| `dot update` | **Atualizar Sistema**: Puxa as alterações mais recentes do repositório e as reaplica. (Envolve `chezmoi update`)                                        |
| `dot help`   | **Ajuda**: Exibe informações de uso.                                                                                                                    |

## Exemplos

### Aprendizagem Interativa

Inicie o tour guiado para aprender novos atalhos de teclado:

```bash
dot learn
```

### Verificação do Sistema

Verifique se tudo está funcionando perfeitamente:

```bash
dot doctor
```
