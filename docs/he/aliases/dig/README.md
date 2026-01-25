---
title: "קיצורי Dig: קיצורי חיפוש DNS לטרמינל"
description: "פשט שאילתות DNS עם קיצורי dig. חפש כתובות IPv4, IPv6 ורשומות DNS מהר יותר עם קיצורי מעטפת אלה."
lang: he-IL
metaTitle: "קיצורי Dig | Dotfiles"
permalink: /he/aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "dig aliases, dns lookup, shell aliases, dotfiles, ipv4 lookup, ipv6 lookup"
  - name: twitter:card
    content: "פשט שאילתות DNS עם קיצורי dig. חפש כתובות IPv4, IPv6 ורשומות DNS מהר יותר עם קיצורי מעטפת אלה."
  - name: twitter:description
    content: "פשט שאילתות DNS עם קיצורי dig. חפש כתובות IPv4, IPv6 ורשומות DNS מהר יותר עם קיצורי מעטפת אלה."
  - name: twitter:title
    content: "קיצורי Dig | Dotfiles"
  - name: og:title
    content: "קיצורי Dig | Dotfiles"
  - name: og:description
    content: "פשט שאילתות DNS עם קיצורי dig. חפש כתובות IPv4, IPv6 ורשומות DNS מהר יותר עם קיצורי מעטפת אלה."
  - name: og:image:alt
    content: "Dotfiles - עוצב בפשטות להתאים לחיי המעטפת שלך"
  - name: og:locale
    content: he_IL
---

# קיצורי Dig

ייעל חיפושי DNS עם סט תמציתי של קיצורי מעטפת.

## סקירה

קיצורים אלה מפשטים עבודה עם שאילתות DNS באמצעות פקודת `dig` במערכות Unix. מוגדרים ב-`dig.aliases.sh`, הם נטענים אוטומטית על ידי chezmoi כחלק מתצורת Dotfiles האוניברסלית.

## הפניה

הטבלה הבאה מפרטת את כל קיצורי dig הזמינים והפונקציות שלהם.

| קיצור  | תיאור                                |
|--------|--------------------------------------------|
| `d`    | מריץ את פקודת dig עם אפשרויות ברירת מחדל  |
| `d4`   | מבצע חיפוש DNS עבור כתובת IPv4  |
| `d6`   | מבצע חיפוש DNS עבור כתובת IPv6  |
| `dga`  | מבצע חיפוש DNS עבור כל הרשומות      |
| `dgs`  | מבצע חיפוש DNS לתשובה קצרה   |
| `digg` | מבצע שאילתת dig באמצעות Google DNS      |
| `ip4`  | מאחזר את כתובת ה-IPv4 הציבורית שלך         |
| `ip6`  | מאחזר את כתובת ה-IPv6 הציבורית שלך         |
| `ips`  | מאחזר את כתובות ה-IPv4 וה-IPv6 הציבוריות שלך |
| `wip`  | מאחזר את כתובת ה-IP הציבורית שלך           |
