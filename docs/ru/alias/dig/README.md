---
description: Упростите DNS-запросы с помощью псевдонимов dig. Быстрее выполняйте поиск IPv4, IPv6 и DNS-записей с этими ярлыками оболочки.
lang: ru-RU
metaTitle: Dig-псевдонимы - Dotfiles (RU)
permalink: /ru/alias/dig/
sidebar: true

meta:
  - name: keywords
    content: dig aliases, dns lookup, shell aliases, dotfiles, ipv4 lookup, ipv6 lookup
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Упростите DNS-запросы с помощью псевдонимов dig. Быстрее выполняйте поиск IPv4, IPv6 и DNS-записей с этими ярлыками оболочки.
  - name: twitter:title
    content: Dig-псевдонимы - Dotfiles
  - name: og:title
    content: Dig-псевдонимы - Dotfiles
  - name: og:description
    content: Упростите DNS-запросы с помощью псевдонимов dig. Быстрее выполняйте поиск IPv4, IPv6 и DNS-записей с этими ярлыками оболочки.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Dig-псевдонимы

Упростите DNS-запросы с помощью компактного набора псевдонимов оболочки.

## Обзор

Эти псевдонимы упрощают работу с DNS (Domain Name System) запросами с помощью команды `dig` в Unix-подобных системах. Определённые в `dig.aliases.sh`, они автоматически загружаются chezmoi как часть конфигурации Universal Dotfiles.

## Справочник

В следующей таблице перечислены все доступные псевдонимы dig и их функции.

| Псевдоним | Описание |
|--------|--------------------------------------------|
| `d` | Запустить команду dig с параметрами по умолчанию |
| `d4` | Выполнить DNS-запрос для IPv4-адреса |
| `d6` | Выполнить DNS-запрос для IPv6-адреса |
| `dga` | Выполнить DNS-запрос для всех записей |
| `dgs` | Выполнить DNS-запрос для краткого ответа |
| `digg` | Выполнить dig-запрос через Google DNS |
| `ip4` | Получить ваш публичный IPv4-адрес |
| `ip6` | Получить ваш публичный IPv6-адрес |
| `ips` | Получить ваши публичные IPv4 и IPv6 адреса |
| `wip` | Получить ваш публичный IP-адрес |
