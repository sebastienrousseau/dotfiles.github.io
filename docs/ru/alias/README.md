---
description: Псевдонимы командной оболочки для создания ярлыков часто используемых команд. Повысьте продуктивность, сократив набор текста в повседневной работе.
lang: ru-RU
metaTitle: Псевдонимы - Dotfiles (RU)
permalink: /ru/alias/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Псевдонимы командной оболочки для создания ярлыков часто используемых команд. Повысьте продуктивность, сократив набор текста в повседневной работе.
  - name: twitter:title
    content: Псевдонимы - Dotfiles
  - name: og:title
    content: Псевдонимы - Dotfiles
  - name: og:description
    content: Псевдонимы командной оболочки для создания ярлыков часто используемых команд. Повысьте продуктивность, сократив набор текста в повседневной работе.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Псевдонимы

Модульные псевдонимы командной оболочки, управляемые **Chezmoi**. Меньше набора текста, больше результатов.

## Обзор

Псевдонимы организованы в небольшие, целенаправленные файлы - по одному для каждого инструмента или рабочего процесса. При выполнении `chezmoi apply` все файлы псевдонимов объединяются в `~/.config/shell/aliases.sh` и подключаются к вашей оболочке.

## Начало работы

### Добавление псевдонима

1. Создайте новый файл (например, `mytool/mytool.aliases.sh`)
2. Определите ваши псевдонимы:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Примените изменения:
   ```bash
   chezmoi apply
   ```

## Справочник

Просмотр псевдонимов по категориям:

<!-- markdownlint-disable MD013-->

| Категория | Описание |
| :--- | :--- |
| [AI](ai/) | Ярлыки для AI-ассистентов и LLM-инструментов |
| [Archives](archives/) | Сжатие и распаковка файлов |
| [CD](cd/) | Навигация по файловой системе |
| [Chmod](chmod/) | Изменение прав доступа к файлам |
| [Clear](clear/) | Очистка экрана терминала |
| [Compliance](compliance/) | Инструменты SOC2 и конфиденциальности |
| [Configuration](configuration/) | Управление dotfiles и конфигурацией оболочки |
| [Default](default/) | Стандартные псевдонимы оболочки |
| [Diagnostics](diagnostics/) | Самовосстановление и проверка состояния |
| [Dig](dig/) | Запросы к DNS-серверам |
| [Disk Usage](disk-usage/) | Отображение информации об использовании диска |
| [Docker](docker/) | Управление контейнерами |
| [Editor](editor/) | Настройка текстовых редакторов |
| [Find](find/) | Поиск файлов и директорий |
| [Fonts](fonts/) | Управление кэшем шрифтов |
| [GCloud](gcloud/) | Инструменты Google Cloud SDK |
| [Git](git/) | Система контроля версий Git |
| [GNU](gnu/) | Утилиты GNU coreutils |
| [Go](go/) | Инструменты языка Go |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | Начальная настройка и развёртывание |
| [Interactive](interactive/) | Интерактивное поведение оболочки |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Инструменты сканирования лицензий |
| [macOS](macOS/) | Настройки для macOS |
| [Make](make/) | Утилиты GNU Make |
| [Mkdir](mkdir/) | Создание директорий |
| [Modern](modern/) | Замены инструментов на Rust |
| [NPM](npm/) | Менеджер пакетов Node.js |
| [Permission](permission/) | Права доступа к файлам |
| [PNPM](pnpm/) | Менеджер пакетов PNPM |
| [PS](ps/) | Статус процессов |
| [Python](python/) | Утилиты Python |
| [Rsync](rsync/) | Эффективная передача файлов |
| [Rust](rust/) | Инструменты программирования на Rust |
| [Security](security/) | Неизменяемость и подписание |
| [Subversion](subversion/) | Система контроля версий SVN |
| [Sudo](sudo/) | Операции суперпользователя |
| [Terraform](terraform/) | Инфраструктура как код |
| [Tmux](tmux/) | Терминальный мультиплексор |
| [Update](update/) | Обновление dotfiles |
| [UUID](uuid/) | Генерация UUID |
| [Wget](wget/) | Загрузчик командной строки |
| [Yarn](yarn/) | Менеджер пакетов Yarn |

<!-- markdownlint-enable MD013-->
