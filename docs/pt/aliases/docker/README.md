---
description: Aliases do Docker para Dotfiles
lang: pt-BR
metaTitle: Aliases do Docker - Dotfiles (BR)
permalink: /pt/aliases/docker/
---

# Aliases do Docker

Gerencie aliases do Docker. Parte da configuração **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descrição

Esses aliases são definidos em `docker.aliases.sh` e são carregados automaticamente pelo `chezmoi`.

## ⚡ Aliases

Este código fornece um conjunto abrangente de aliases para desenvolvimento Docker
usando comandos `docker`, `docker-compose` e Docker Swarm.

#### Comandos Básicos

- `dk` - Atalho para Docker
- `dkv` - Mostrar versão do Docker
- `dki` - Exibir informações de todo o sistema
- `dkl` - Login no registro Docker
- `dklo` - Logout do registro Docker

#### Operações de Contêiner

- `dkps` - Listar contêineres em execução
- `dkpsa` - Listar todos os contêineres
- `dkr` - Executar um comando em um novo contêiner
- `dkri` - Executar contêiner interativo
- `dkrd` - Executar contêiner em segundo plano
- `dks` - Iniciar contêiner
- `dkst` - Parar contêiner
- `dkrs` - Reiniciar contêiner
- `dkp` - Pausar contêiner
- `dkup` - Despausar contêiner
- `dkrm` - Remover contêiner
- `dkrma` - Remover todos os contêineres
- `dkrmf` - Forçar remoção de contêiner

#### Inspeção de Contêiner

- `dkin` - Inspecionar contêiner
- `dkl` - Mostrar logs do contêiner
- `dklf` - Acompanhar logs do contêiner
- `dkt` - Mostrar processos em execução no contêiner
- `dkst` - Mostrar uso de recursos do contêiner
- `dkdf` - Mostrar alterações no sistema de arquivos do contêiner
- `dkpl` - Baixar imagem do registro
- `dkex` - Executar comando no contêiner
- `dkeit` - Executar comando interativo

#### Imagens

- `dki` - Listar imagens
- `dkia` - Listar todas as imagens
- `dkb` - Construir uma imagem
- `dkbt` - Construir e marcar uma imagem
- `dkpu` - Enviar imagem para o registro
- `dkrmi` - Remover imagem
- `dkh` - Mostrar histórico da imagem
- `dksv` - Salvar imagem em arquivo tar
- `dkld` - Carregar imagem de arquivo tar
- `dkprune` - Remover dados não utilizados
- `dkprunea` - Remover todos os dados não utilizados
- `dkrmi_dangling` - Remover imagens pendentes

#### Volumes

- `dkv` - Atalho para Volume
- `dkvls` - Listar volumes
- `dkvc` - Criar volume
- `dkvi` - Inspecionar volume
- `dkvrm` - Remover volume
- `dkvp` - Remover volumes não utilizados

#### Redes

- `dkn` - Atalho para Rede
- `dknls` - Listar redes
- `dknc` - Criar rede
- `dkni` - Inspecionar rede
- `dknrm` - Remover rede
- `dknp` - Remover redes não utilizadas
- `dkncon` - Conectar contêiner à rede
- `dkndis` - Desconectar contêiner da rede

#### Sistema

- `dks` - Atalho para Sistema
- `dksdf` - Mostrar uso de disco do Docker
- `dksev` - Obter eventos em tempo real do Docker
- `dksi` - Exibir informações de todo o sistema
- `dksp` - Remover dados não utilizados
- `dkspa` - Remover todos os dados não utilizados
- `dkcon` - Gerenciamento de contexto

#### Diversos

- `dkcp` - Copiar arquivos entre contêiner e sistema de arquivos local
- `dkw` - Bloquear até que o contêiner pare
- `dkk` - Matar contêiner
- `dkatt` - Anexar ao contêiner
- `dkd` - Inspecionar alterações no sistema de arquivos do contêiner
- `dkcom` - Criar imagem a partir do contêiner
- `dktag` - Marcar uma imagem
- `dkexp` - Exportar sistema de arquivos do contêiner
- `dkimp` - Importar sistema de arquivos do contêiner
- `dkscan` - Verificar vulnerabilidades na imagem
- `dc` - Atalho para Docker Compose
- `dcu` - Criar e iniciar contêineres
- `dcud` - Criar e iniciar contêineres em segundo plano
- `dcd` - Parar e remover contêineres
- `dcdv` - Parar e remover contêineres e volumes
- `dcr` - Reiniciar serviços
- `dcs` - Parar serviços
- `dcsta` - Iniciar serviços
- `dcp` - Pausar serviços
- `dcup` - Despausar serviços
- `dcps` - Listar contêineres
- `dcl` - Ver logs
- `dclf` - Acompanhar logs
- `dcex` - Executar comando no contêiner
- `dcb` - Construir serviços
- `dcpull` - Baixar imagens de serviço
- `dcpush` - Enviar imagens de serviço
- `dcrm` - Remover contêineres parados
- `dcrun` - Executar comando único
- `dci` - Listar imagens
- `dck` - Matar contêineres
- `dccfg` - Validar e mostrar configuração do compose
- `dcev` - Receber eventos de contêineres
- `dctop` - Exibir processos em execução
- `dcv` - Mostrar versão do Docker Compose

#### Gerenciamento de Swarm

- `dksw` - Atalho para Swarm
- `dkswi` - Inicializar Docker Swarm
- `dkswj` - Juntar-se ao Docker Swarm
- `dkswjt` - Gerenciar tokens de adesão
- `dkswl` - Sair do Swarm
- `dkswu` - Atualizar Swarm
- `dkswunl` - Desbloquear Swarm
- `dkswunk` - Gerenciar chaves de desbloqueio

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
