---
description: Ярлыки псевдонимов для Google Cloud SDK. Управляйте Compute Engine, IAM, Cloud SQL и другими сервисами с запоминающимися командами.
lang: ru-RU
metaTitle: Google Cloud-псевдонимы - Dotfiles (RU)
permalink: /ru/alias/gcloud/
sidebar: true

meta:
  - name: keywords
    content: gcloud aliases, google cloud cli, gcloud shortcuts, cloud sdk commands, dotfiles, shell aliases
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Google Cloud-псевдонимы - Dotfiles
  - name: twitter:description
    content: Ярлыки псевдонимов для Google Cloud SDK. Управляйте Compute Engine, IAM, Cloud SQL и другими сервисами с запоминающимися командами.
  - name: og:title
    content: Google Cloud-псевдонимы - Dotfiles
  - name: og:description
    content: Ярлыки псевдонимов для Google Cloud SDK. Управляйте Compute Engine, IAM, Cloud SQL и другими сервисами с запоминающимися командами.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Google Cloud-псевдонимы

Запоминающиеся ярлыки для командной строки Google Cloud SDK.

![Баннер Dotfiles][banner]

## Обзор

Эти псевдонимы определены в `gcloud.aliases.sh` и автоматически загружаются chezmoi. Они оборачивают распространённые команды Google Cloud SDK для упрощения управления Compute Engine, IAM, Cloud SQL и другими сервисами GCP.

## Справочник

### Основные команды

| Псевдоним | Описание |
|-------|-------------|
| `gcd` | Установить проект по умолчанию по имени текущей директории |
| `gck` | Показать все конфигурации |
| `gcsa` | Установить аккаунт для текущей конфигурации |
| `gcso` | Открыть Google Cloud Console для текущего проекта |

### Compute Engine

| Псевдоним | Описание |
|-------|-------------|
| `gci` | Управление инстансами Compute Engine |
| `gcca` | Управление IP-адресами Compute Engine |
| `gccc` | Создать новый инстанс виртуальной машины |
| `gcco` | Подключиться к инстансу виртуальной машины через SSH |
| `gcpha` | Показать детали IP-адреса Compute Engine |

### Хранилище и базы данных

| Псевдоним | Описание |
|-------|-------------|
| `gcss` | Управление Cloud Storage |
| `gcsq` | Управление Cloud SQL |
| `gcdb` | Управление Cloud Datastore |

### Бессерверные вычисления и контейнеры

| Псевдоним | Описание |
|-------|-------------|
| `gcf` | Управление Cloud Functions |
| `gcro` | Управление Cloud Run |
| `gcu` | Управление App Engine |
| `gcs` | Управление кластерами Kubernetes Engine |
| `gcr` | Удалить образ контейнера из Container Registry |

### Данные и аналитика

| Псевдоним | Описание |
|-------|-------------|
| `gcdp` | Управление Cloud Dataproc |
| `gcps` | Управление Cloud Pub/Sub |

### Сеть и безопасность

| Псевдоним | Описание |
|-------|-------------|
| `gcn` | Управление Cloud Networks |
| `gcic` | Управление Identity and Access Management |
| `gcki` | Управление Cloud KMS |

### Операции и мониторинг

| Псевдоним | Описание |
|-------|-------------|
| `gcla` | Управление Cloud Logging |
| `gcma` | Управление Cloud Monitoring |
| `gclb` | Управление Cloud Build |
| `gct` | Управление Cloud Tasks |

### Дополнительные сервисы

| Псевдоним | Описание |
|-------|-------------|
| `gcp` | Управление проектами Cloud |
| `gcpd` | Удалить проект Cloud |
| `gce` | Управление Cloud Endpoints |
| `gcem` | Управление Cloud Eventarc |
| `gcrm` | Управление ресурсами Cloud |
| `gcsc` | Управление Cloud Source Repositories |
| `gcst` | Включить или отключить сервисы Cloud |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
