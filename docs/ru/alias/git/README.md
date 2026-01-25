---
description: Git-псевдонимы оболочки. Более 80 ярлыков для ускорения работы с коммитами, ветками, diff и удалёнными репозиториями.
lang: ru-RU
metaTitle: Git-псевдонимы - Dotfiles (RU)
permalink: /ru/alias/git/
sidebar: true

meta:
  - name: keywords
    content: git aliases, git shortcuts, git dotfiles, git commit, git branch, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Git-псевдонимы оболочки. Более 80 ярлыков для ускорения работы с коммитами, ветками, diff и удалёнными репозиториями.
  - name: twitter:title
    content: Git-псевдонимы - Dotfiles
  - name: og:title
    content: Git-псевдонимы - Dotfiles
  - name: og:description
    content: Git-псевдонимы оболочки. Более 80 ярлыков для ускорения работы с коммитами, ветками, diff и удалёнными репозиториями.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Git-псевдонимы

Оптимизируйте рабочий процесс контроля версий с помощью мощных ярлыков.

## Обзор

Git-псевдонимы создают ярлыки для часто используемых команд Git. Являясь частью конфигурации [Dotfiles](https://github.com/sebastienrousseau/dotfiles), эти псевдонимы автоматически загружаются через Chezmoi.

Определённые в `git.aliases.sh` и `signing.aliases.sh`, псевдонимы доступны в любой сессии Bash или Zsh после установки.

## Справочник

### Ядро

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `g` | `git` | Сокращение для git |
| `gtp` | `git rev-parse --show-toplevel` | Показать корневую директорию репозитория |
| `grpa` | `git rev-parse --abbrev-ref HEAD` | Показать имя текущей ветки |
| `gconfl` | `git config --list` | Показать все настройки Git |
| `gconfr` | `git config --local --get remote.origin.url` | Показать URL удалённого origin |
| `gconfdiff` | `git config alias.dcolor "diff --color-words"` | Настроить псевдоним цветного diff |

### Рабочая область

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `ga` | `git add` | Добавить файлы в индекс |
| `gaa` | `git add --all` | Добавить все изменения в индекс |
| `gad` | `git add .` | Добавить текущую директорию в индекс |
| `gau` | `git add --update` | Добавить изменения и удаления в индекс |
| `gcl` | `git clone` | Клонировать репозиторий |
| `gin` | `git init` | Инициализировать новый Git-репозиторий |
| `gco` | `git checkout` | Переключить ветки |
| `gcb` | `git checkout -b` | Создать и переключиться на новую ветку |
| `gdis` | `git checkout --` | Отменить изменения в рабочей директории |
| `grs` | `git restore` | Восстановить файлы рабочего дерева |
| `gmv` | `git mv` | Переместить или переименовать файл |
| `grm` | `git rm` | Удалить файлы |
| `grmc` | `git rm --cached` | Убрать файл из индекса |
| `gst` | `git status` | Показать состояние рабочего дерева |
| `gsts` | `git status --short` | Показать состояние в кратком формате |
| `gstsb` | `git status --short --branch` | Краткое состояние с информацией о ветке |
| `gsta` | `git stash save` | Сохранить текущие изменения в stash |
| `gstp` | `git stash pop` | Применить последний stash |
| `gstd` | `git stash drop` | Удалить последний stash |
| `gclout` | `git clean -df && git checkout -- .` | Отменить все изменения |

### Коммиты

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `gc` | `git commit -a` | Закоммитить отслеживаемые изменения |
| `gca` | `git commit --amend` | Изменить последний коммит |
| `gcall` | `git add -A && git commit -av` | Добавить всё и закоммитить |
| `gcam` | `git commit --amend --message` | Изменить коммит с новым сообщением |
| `gcane` | `git commit --amend --no-edit` | Изменить без изменения сообщения |
| `gcm` | `git commit --message` | Коммит с инлайн-сообщением |

### Diff и история

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `gd` | `git diff` | Показать неиндексированные изменения |
| `gdch` | `git diff --name-status` | Показать имена изменённых файлов |
| `gdh` | `git diff HEAD` | Показать изменения с последнего коммита |
| `gdstaged` | `git diff --staged` | Показать индексированные изменения |
| `gdcached` | `git diff --cached` | Показать изменения между индексом и HEAD |
| `gdstat` | `git diff --stat --ignore-space-change -r` | Сгенерировать diffstat |
| `gl` | `git log --since="last month" --oneline` | Однострочный лог за месяц |
| `glg` | `git log --graph --all --oneline --decorate` | Графический лог всех веток |
| `glgg` | `git log --oneline --graph --full-history --all --color --decorate` | Полный графический лог |
| `glc` | `git log --oneline --reverse` | Хронологический однострочный лог |
| `gld` | `git log --since=1-day-ago` | Лог за последние 24 часа |

### Ветки

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `gb` | `git branch` | Показать локальные ветки |
| `gbd` | `git branch -d` | Удалить слитую ветку |
| `gbl` | `git branch -l` | Показать ветки по шаблону |
| `gbr` | `git branch -r` | Показать удалённые ветки |
| `gbrd` | `git branch -d -r` | Удалить удалённую отслеживающую ветку |
| `gswb` | `git switch` | Переключить ветки (современный) |

### Удалённые репозитории и Push/Pull

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `gf` | `git fetch` | Получить с удалённого репозитория |
| `gp` | `git pull` | Загрузить с удалённого репозитория |
| `gph` | `git push` | Отправить на удалённый репозиторий |
| `gpo` | `git push origin` | Отправить на origin |
| `gpb` | `git push --set-upstream origin $(git branch --show-current)` | Установить upstream и отправить |
| `gpoll` | `git push origin --all` | Отправить все ветки на origin |
| `gr` | `git remote` | Управление удалёнными репозиториями |
| `gra` | `git remote add` | Добавить новый удалённый репозиторий |
| `grao` | `git remote add origin` | Добавить origin |
| `grv` | `git remote -v` | Показать URL удалённых репозиториев |

### Отмена и сброс

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `grev` | `git revert` | Отменить коммит |
| `grevnc` | `git revert --no-commit` | Отменить без автокоммита |
| `grb` | `git rebase` | Перебазировать текущую ветку |
| `grbk` | `git reset --soft HEAD^` | Отменить последний коммит |
| `grescl` | `git reset --hard HEAD~1 && git clean -fd` | Жёсткий сброс и очистка |
| `gresh` | `git reset --hard HEAD~1` | Жёсткий сброс к предыдущему коммиту |
| `gresp` | `git reset --hard && git clean -ffdx` | Сброс в исходное состояние |
| `gress` | `git reset --soft HEAD~1` | Мягкий сброс |

### Субмодули

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `gsm` | `git submodule` | Управление субмодулями |
| `gsmi` | `git submodule init` | Инициализировать субмодули |
| `gsma` | `git submodule add` | Добавить субмодуль |
| `gsms` | `git submodule sync` | Синхронизировать URL субмодулей |
| `gsmu` | `git submodule update` | Обновить субмодули |
| `gsmui` | `git submodule update --init` | Обновить и инициализировать |
| `gsmuir` | `git submodule update --init --recursive` | Обновить, инициализировать, рекурсивно |

### Инструменты

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `gg` | `git grep` | Поиск по содержимому репозитория |
| `gbs` | `git bisect` | Бинарный поиск коммита с ошибкой |
| `undopush` | `git push -f origin HEAD^:master` | Принудительно отменить последний push |

### Подписание и безопасность

| Псевдоним | Команда | Описание |
|:---|:---|:---|
| `enable-signing` | *(интерактивный мастер)* | Настроить подписание коммитов GPG или SSH |
| `verify-signatures` | `git log --show-signature -n 10` | Проверить подписи последних 10 коммитов |
| `check-signing` | `git config --list \| grep "gpg\|signing"` | Проверить текущую конфигурацию подписания |
