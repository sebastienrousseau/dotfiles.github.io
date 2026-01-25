---
description: Ускорьте работу с Kubernetes с помощью псевдонимов kubectl, Helm и k9s. Эффективно управляйте подами, контекстами и пространствами имён.
lang: ru-RU
metaTitle: Kubernetes-псевдонимы - Dotfiles (RU)
permalink: /ru/alias/kubernetes/
sidebar: true

meta:
  - name: keywords
    content: kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Ускорьте работу с Kubernetes с помощью псевдонимов kubectl, Helm и k9s.
  - name: twitter:title
    content: Kubernetes-псевдонимы - Dotfiles
  - name: og:title
    content: Kubernetes-псевдонимы - Dotfiles
  - name: og:description
    content: Ускорьте работу с Kubernetes с помощью псевдонимов kubectl, Helm и k9s.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Kubernetes-псевдонимы

Оптимизируйте рабочие процессы Kubernetes с помощью кратких псевдонимов оболочки для kubectl, Helm и управления кластерами.

![Баннер Dotfiles](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Баннер Dotfiles")

## Обзор

Эти псевдонимы определены в `kubernetes.aliases.sh` и автоматически загружаются chezmoi. Они сокращают количество нажатий клавиш для распространённых операций Kubernetes, помогая быстрее управлять кластерами, подами и релизами.

## Справочник

### Ядро

| Псевдоним | Команда | Описание |
|-------|---------|-------------|
| `k` | `kubectl` | Ярлык kubectl |
| `kg` | `kubectl get` | Получить ресурсы |
| `kgp` | `kubectl get pods` | Получить поды |
| `kga` | `kubectl get all` | Получить все ресурсы |
| `kd` | `kubectl describe` | Описать ресурсы |
| `kdel` | `kubectl delete` | Удалить ресурсы |
| `kl` | `kubectl logs` | Просмотреть логи |
| `kex` | `kubectl exec -it` | Выполнить интерактивную оболочку |

### Контекст

| Псевдоним | Команда | Описание |
|-------|---------|-------------|
| `kcx` | - | Показать контексты |
| `kuse` | - | Переключить контекст |
| `kns` | - | Переключить пространство имён |

### Helm

| Псевдоним | Команда | Описание |
|-------|---------|-------------|
| `h` | `helm` | Ярлык Helm |
| `hls` | `helm list` | Показать релизы |
| `hi` | `helm install` | Установить чарт |

### UI

| Псевдоним | Команда | Описание |
|-------|---------|-------------|
| `k9` | `k9s` | Терминальный UI k9s |
