---
title: Docker Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Docker in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Docker Reference Appendix | Dotfiles preview
canonical: /en/aliases/docker/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Docker Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/docker/reference/
---

# Docker Reference Appendix

## Source files

- `.chezmoitemplates/aliases/docker/docker.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `d` | `docker` |
| `dbprune` | `docker builder prune -f` |
| `dbx` | `docker buildx` |
| `dbxb` | `docker buildx build` |
| `dbxbp` | `docker buildx build --push` |
| `dbxcreate` | `docker buildx create` |
| `dbxinspect` | `docker buildx inspect` |
| `dbxls` | `docker buildx ls` |
| `dbxmulti` | `docker buildx build --platform linux/amd64,linux/arm64` |
| `dbxrm` | `docker buildx rm` |
| `dbxstop` | `docker buildx stop` |
| `dbxuse` | `docker buildx use` |
| `dcb` | `docker compose build` |
| `dcdn` | `docker compose down` |
| `dcdownv` | `docker compose down -v` |
| `dce` | `docker compose exec` |
| `dcl` | `docker compose logs` |
| `dclf` | `docker compose logs -f` |
| `dco` | `docker compose` |
| `dcprune` | `docker container prune -f` |
| `dcps` | `docker compose ps` |
| `dcpull` | `docker compose pull` |
| `dcr` | `docker compose run` |
| `dcrestart` | `docker compose restart` |
| `dcrm` | `docker compose rm` |
| `dcstop` | `docker compose stop` |
| `dcup` | `docker compose up` |
| `dcupb` | `docker compose up -d --build` |
| `dcupd` | `docker compose up -d` |
| `ddfv` | `docker system df -v` |
| `ddive` | `dive` |
| `dex` | `docker exec -it` |
| `dflint` | `hadolint Dockerfile` |
| `diprune` | `docker image prune -f` |
| `dkb` | `docker build` |
| `dkbt` | `docker build -t` |
| `dkcon` | `docker context` |
| `dkcp` | `docker cp` |
| `dkdf` | `docker diff` |
| `dkh` | `docker history` |
| `dki` | `docker info` |
| `dkim` | `docker images` |
| `dkima` | `docker images -a` |
| `dkin` | `docker inspect` |
| `dkk` | `docker kill` |
| `dkl` | `docker login` |
| `dkld` | `docker load` |
| `dklf` | `docker logs -f` |
| `dklo` | `docker logout` |
| `dkn` | `docker network` |
| `dknc` | `docker network create` |
| `dkncon` | `docker network connect` |
| `dkndis` | `docker network disconnect` |
| `dkni` | `docker network inspect` |
| `dknls` | `docker network ls` |
| `dknode` | `docker node` |
| `dknodei` | `docker node inspect` |
| `dknodels` | `docker node ls` |
| `dknp` | `docker network prune` |
| `dknrm` | `docker network rm` |
| `dkp` | `docker pause` |
| `dkpl` | `docker pull` |
| `dkps` | `docker ps` |
| `dkpsa` | `docker ps -a` |
| `dkpu` | `docker push` |
| `dkr` | `docker run` |
| `dkrd` | `docker run -d` |
| `dkri` | `docker run -it` |
| `dkrm` | `docker rm` |
| `dkrmf` | `docker rm -f` |
| `dkrmi` | `docker rmi` |
| `dkrs` | `docker restart` |
| `dks` | `docker start` |
| `dksdf` | `docker system df` |
| `dksev` | `docker system events` |
| `dksi` | `docker system info` |
| `dksp` | `docker system prune` |
| `dksrv` | `docker service` |
| `dksrvc` | `docker service create` |
| `dksrvi` | `docker service inspect` |
| `dksrvl` | `docker service logs` |
| `dksrvls` | `docker service ls` |
| `dksrvps` | `docker service ps` |
| `dksrvrm` | `docker service rm` |
| `dksrvu` | `docker service update` |
| `dksrvu-force` | `docker service update --force` |
| `dkst` | `docker stats` |
| `dkstk` | `docker stack` |
| `dkstkd` | `docker stack deploy` |
| `dkstkls` | `docker stack ls` |
| `dkstkps` | `docker stack ps` |
| `dkstkrm` | `docker stack rm` |
| `dkstop` | `docker stop` |
| `dksv` | `docker save` |
| `dksw` | `docker swarm` |
| `dkswi` | `docker swarm init` |
| `dkswj` | `docker swarm join` |
| `dkswl` | `docker swarm leave` |
| `dkswu` | `docker swarm update` |
| `dksys` | `docker system` |
| `dkt` | `docker top` |
| `dkup` | `docker unpause` |
| `dkv` | `docker version` |
| `dkvc` | `docker volume create` |
| `dkvi` | `docker volume inspect` |
| `dkvl` | `docker volume` |
| `dkvls` | `docker volume ls` |
| `dkvp` | `docker volume prune` |
| `dkvrm` | `docker volume rm` |
| `dkw` | `docker wait` |
| `dlint` | `hadolint` |
| `dps` | `docker ps --format "table \{\{.Names\}\}\t\{\{.Status\}\}\t\{\{.Ports\}\}"` |
| `dvprune` | `docker volume prune -f` |
| `lzd` | `lazydocker` |

## Helper functions

- `denter()`
- `dip()`
- `dports()`
- `dpruneaf()`
- `drmall()`
- `drmiall()`
- `dstopall()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
