---
description: alias de Docker para Dotfiles
lang: pt-PT
metaTitle: alias de Docker - Dotfiles
permalink: /pt/aliases/docker/
---
# Alias de Docker

Gerenciar alias de Docker. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `docker.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece um conjunto completo de alias para desenvolvimento Docker
usando `docker`, `docker-compose` e Docker Swarm.
#### Comandos basicos
- `dk` - Atalho do Docker
- `dkv` - Mostrar versao do Docker
- `dki` - Mostrar informacoes do sistema
- `dkl` - Login no registro Docker
- `dklo` - Logout do registro Docker
#### Operacoes de contenedores
- `dkps` - Listar contenedores em execucao
- `dkpsa` - Listar todos os contenedores
- `dkr` - Executar comando em novo contenedor
- `dkri` - Executar contenedor interativo
- `dkrd` - Executar contenedor em background
- `dks` - Iniciar contenedor
- `dkst` - Parar contenedor
- `dkrs` - Reiniciar contenedor
- `dkp` - Pausar contenedor
- `dkup` - Retomar contenedor
- `dkrm` - Remover contenedor
- `dkrma` - Remover todos os contenedores
- `dkrmf` - Forcar remocao do contenedor
#### Inspecao de contenedores
- `dkin` - Inspecionar contenedor
- `dkl` - Mostrar logs do contenedor
- `dklf` - Seguir logs do contenedor
- `dkt` - Mostrar processos no contenedor
- `dkst` - Mostrar uso de recursos do contenedor
- `dkdf` - Mostrar mudancas no filesystem do contenedor
- `dkpl` - Baixar imagem do registro
- `dkex` - Executar comando no contenedor
- `dkeit` - Executar comando interativo
#### Imagens
- `dki` - Listar imagens
- `dkia` - Listar todas as imagens
- `dkb` - Construir imagem
- `dkbt` - Construir e taguear imagem
- `dkpu` - Enviar imagem ao registro
- `dkrmi` - Remover imagem
- `dkh` - Mostrar historico da imagem
- `dksv` - Salvar imagem em tar
- `dkld` - Carregar imagem de tar
- `dkprune` - Remover dados nao usados
- `dkprunea` - Remover todos os dados nao usados
- `dkrmi_dangling` - Remover imagens dangling
#### Volumes
- `dkv` - Atalho de volumes
- `dkvls` - Listar volumes
- `dkvc` - Criar volume
- `dkvi` - Inspecionar volume
- `dkvrm` - Remover volume
- `dkvp` - Remover volumes nao usados
#### Redes
- `dkn` - Atalho de redes
- `dknls` - Listar redes
- `dknc` - Criar rede
- `dkni` - Inspecionar rede
- `dknrm` - Remover rede
- `dknp` - Remover redes nao usadas
- `dkncon` - Conectar contenedor a rede
- `dkndis` - Desconectar contenedor da rede
#### Sistema
- `dks` - Atalho de sistema
- `dksdf` - Mostrar uso de disco do Docker
- `dksev` - Obter eventos em tempo real
- `dksi` - Mostrar informacoes do sistema
- `dksp` - Remover dados nao usados
- `dkspa` - Remover todos os dados nao usados
- `dkcon` - Gerenciamento de contextos
#### Diversos
- `dkcp` - Copiar arquivos entre contenedor e filesystem local
- `dkw` - Bloquear ate o contenedor parar
- `dkk` - Matar contenedor
- `dkatt` - Anexar ao contenedor
- `dkd` - Inspecionar mudancas no filesystem do contenedor
- `dkcom` - Criar imagem a partir do contenedor
- `dktag` - Taguear imagem
- `dkexp` - Exportar filesystem do contenedor
- `dkimp` - Importar filesystem do contenedor
- `dkscan` - Escanear imagem por vulnerabilidades
- `dc` - Atalho de Docker Compose
- `dcu` - Criar e iniciar contenedores
- `dcud` - Criar e iniciar contenedores em background
- `dcd` - Parar e remover contenedores
- `dcdv` - Parar e remover contenedores e volumes
- `dcr` - Reiniciar servicos
- `dcs` - Parar servicos
- `dcsta` - Iniciar servicos
- `dcp` - Pausar servicos
- `dcup` - Retomar servicos
- `dcps` - Listar contenedores
- `dcl` - Ver logs
- `dclf` - Seguir logs
- `dcex` - Executar comando no contenedor
- `dcb` - Construir servicos
- `dcpull` - Baixar imagens de servico
- `dcpush` - Enviar imagens de servico
- `dcrm` - Remover contenedores parados
- `dcrun` - Executar comando unico
- `dci` - Listar imagens
- `dck` - Matar contenedores
- `dccfg` - Validar e mostrar config do compose
- `dcev` - Receber eventos
- `dctop` - Mostrar processos em execucao
- `dcv` - Mostrar versao do Docker Compose
#### Gerenciamento de Swarm
- `dksw` - Atalho de Swarm
- `dkswi` - Inicializar Docker Swarm
- `dkswj` - Entrar no Docker Swarm
- `dkswjt` - Gerenciar tokens de entrada
- `dkswl` - Sair do Swarm
- `dkswu` - Atualizar Swarm
- `dkswunl` - Desbloquear Swarm
- `dkswunk` - Gerenciar chaves de desbloqueio
#### Servicos
- `dksrv` - Atalho de servico
- `dksrvls` - Listar servicos
- `dksrvc` - Criar servico
- `dksrvi` - Inspecionar servico
- `dksrvps` - Listar tarefas do servico
- `dksrvl` - Ver logs do servico
- `dksrvlf` - Seguir logs do servico
- `dksrvrm` - Remover servico
- `dksrvsc` - Escalar servico
- `dksrvu` - Atualizar servico
- `dksrvrl` - Fazer rollback do servico
#### Stacks
- `dkstk` - Atalho de stack
- `dkstkls` - Listar stacks
- `dkstkd` - Deploy de stack
- `dkstkps` - Listar tarefas no stack
- `dkstksrv` - Listar servicos no stack
- `dkstkrm` - Remover stack
#### Nodes
- `dkn` - Atalho de node
- `dknls` - Listar nodes
- `dkni` - Inspecionar node
- `dknp` - Promover node para manager
- `dknd` - Rebaixar node para worker
- `dknrm` - Remover node
- `dknu` - Atualizar node
- `dknps` - Listar tarefas em execucao no node

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
