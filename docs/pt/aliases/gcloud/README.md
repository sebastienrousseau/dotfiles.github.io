---
description: Os aliases do Google Cloud fornecem comandos memoráveis para operar na plataforma Google Cloud. Todas essas funções e aliases são wrappers em torno das ferramentas de linha de comando do SDK do Google Cloud.
lang: pt-BR
metaTitle: Aliases do Google Cloud - Dotfiles (BR)
permalink: /pt/aliases/gcloud/
---

# Aliases do Google Cloud

O arquivo `gcloud.aliases.sh` cria aliases de atalho úteis para muitos comandos
comuns do [Google Cloud](https://cloud.google.com/).

Os aliases do Google Cloud fornecem comandos memoráveis para operar na plataforma Google
Cloud. Todas essas funções e aliases são wrappers em torno das
ferramentas de linha de comando do SDK do Google Cloud.

## Ferramenta de linha de comando

| Alias | Comando                     | Descrição                                                |
| ----- | --------------------------- | -------------------------------------------------------- |
| gcci  | `gcloud components install` | Instalar componentes específicos.                        |
| gccsp | `gcloud config set project` | Definir um projeto Google Cloud padrão para trabalhar.   |
| gccu  | `gcloud components update`  | Atualizar seu Cloud SDK para a versão mais recente.      |
| gci   | `gcloud init`               | Inicializar, autorizar e configurar a ferramenta gcloud. |
| gcinf | `gcloud info`               | Exibir detalhes atuais do ambiente da ferramenta gcloud. |
| gcv   | `gcloud version`            | Exibir versão e componentes instalados.                  |

## Personalizado

| Alias | Comando                                 | Descrição                                                              |
| ----- | --------------------------------------- | ---------------------------------------------------------------------- |
| gccca | `gcloud config configurations activate` | Alternar para uma configuração nomeada existente.                      |
| gcccc | `gcloud config configurations create`   | Criar uma nova configuração nomeada.                                   |
| gcccl | `gcloud config configurations list`     | Exibir uma lista de todas as configurações disponíveis.                |
| gccgv | `gcloud config get-value`               | Buscar valor de uma propriedade do Cloud SDK.                          |
| gccl  | `gcloud config list`                    | Exibir todas as propriedades para a configuração atual.                |
| gccs  | `gcloud config set`                     | Definir uma propriedade (como compute/zone) para a configuração atual. |

## Autorização

| Alias  | Comando                                | Descrição                                                                                                                     |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | Como gcloud auth login, mas com credenciais de conta de serviço.                                                              |
| gcacd  | `gcloud auth configure-docker`         | Registrar a ferramenta gcloud como um assistente de credencial Docker.                                                        |
| gcal   | `gcloud auth list`                     | Listar todas as contas credenciadas.                                                                                          |
| gcal   | `gcloud auth login`                    | Autorizar acesso ao Google Cloud para a ferramenta gcloud com credenciais de usuário Google e definir conta atual como ativa. |
| gcapat | `gcloud auth print-access-token`       | Exibir o token de acesso da conta atual.                                                                                      |
| gcar   | `gcloud auth revoke`                   | Remover credenciais de acesso para uma conta.                                                                                 |

## Identidade e Gerenciamento de Acesso na Nuvem (IAM)

| Alias  | Comando                                              | Descrição                                                        |
| ------ | ---------------------------------------------------- | ---------------------------------------------------------------- |
| gciamk | `gcloud iam service-accounts keys list`              | Listar chaves de uma conta de serviço.                           |
| gciaml | `gcloud iam list-grantable-roles`                    | Listar papéis concedíveis IAM para um recurso.                   |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | Adicionar uma vinculação de política IAM a uma conta de serviço. |
| gciamr | `gcloud iam roles create`                            | Criar um papel personalizado para um projeto ou organização.     |
| gciams | `gcloud iam service-accounts set-iam-policy`         | Substituir vinculação de política IAM existente.                 |
| gciamv | `gcloud iam service-accounts create`                 | Criar uma conta de serviço para um projeto.                      |

## Políticas de acesso

| Alias | Comando                                  | Descrição                                                           |
| ----- | ---------------------------------------- | ------------------------------------------------------------------- |
| gcpa  | `gcloud projects add-iam-policy-binding` | Adicionar uma vinculação de política IAM a um projeto especificado. |
| gcpd  | `gcloud projects describe`               | Exibir metadados para um projeto (incluindo seu ID).                |

## Kubernetes

| Alias | Comando                                     | Descrição                                                         |
| ----- | ------------------------------------------- | ----------------------------------------------------------------- |
| gcccc | `gcloud container clusters create`          | Criar um cluster para executar contêineres GKE.                   |
| gcccg | `gcloud container clusters get-credentials` | Atualizar kubeconfig para obter kubectl para usar um cluster GKE. |
| gcccl | `gcloud container clusters list`            | Listar clusters para executar contêineres GKE.                    |
| gccil | `gcloud container images list-tags`         | Listar metadados de tag e digest para uma imagem de contêiner.    |

## VMs

| Alias   | Comando                             | Descrição                                    |
| ------- | ----------------------------------- | -------------------------------------------- |
| gcpc    | `gcloud compute copy-files`         | Copiar arquivos                              |
| gcpdown | `gcloud compute instances stop`     | Parar instância                              |
| gcpds   | `gcloud compute disks snapshot`     | Criar snapshot de discos persistentes.       |
| gcpid   | `gcloud compute instances describe` | Exibir detalhes de uma instância VM.         |
| gcpil   | `gcloud compute instances list`     | Listar todas as instâncias VM em um projeto. |
| gcprm   | `gcloud compute instances delete`   | Excluir instância                            |
| gcpsk   | `gcloud compute snapshots delete`   | Excluir um snapshot.                         |
| gcpssh  | `gcloud compute ssh`                | Conectar a uma instância VM usando SSH.      |
| gcpup   | `gcloud compute instances start`    | Iniciar instância.                           |
| gcpzl   | `gcloud compute zones list`         | Listar zonas do Compute Engine.              |

## Aliases gcloud para construir aplicativos altamente escaláveis em uma plataforma serverless totalmente gerenciada

| Alias | Comando                    | Descrição                                                                        |
| ----- | -------------------------- | -------------------------------------------------------------------------------- |
| gcapb | `gcloud app browse`        | Abrir o aplicativo atual em um navegador web.                                    |
| gcapc | `gcloud app create`        | Criar um aplicativo App Engine dentro do seu projeto atual.                      |
| gcapd | `gcloud app deploy`        | Implantar o código e a configuração do seu aplicativo no servidor App Engine.    |
| gcapl | `gcloud app logs read`     | Exibir os logs mais recentes do aplicativo App Engine.                           |
| gcapv | `gcloud app versions list` | Listar todas as versões de todos os serviços implantados no servidor App Engine. |

## Aliases gcloud para comandos que podem ser úteis

| Alias  | Comando                       | Descrição                                                                                                                      |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| gckmsd | `gcloud kms decrypt`          | Descriptografar texto cifrado (para um arquivo de texto simples) usando uma chave do Cloud Key Management Service (Cloud KMS). |
| gclll  | `gcloud logging logs list`    | Listar os logs do seu projeto.                                                                                                 |
| gcsqlb | `gcloud sql backups describe` | Exibir informações sobre um backup de instância do Cloud SQL.                                                                  |
| gcsqle | `gcloud sql export sql`       | Exportar dados de uma instância do Cloud SQL para um arquivo SQL.                                                              |
