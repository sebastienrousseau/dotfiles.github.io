---
title: "קיצורי Kubernetes: ייעל את ניהול האשכולות שלך"
description: "האץ זרימות עבודה של Kubernetes עם קיצורי kubectl, Helm ו-k9s. נהל pods, contexts ו-namespaces ביעילות."
lang: he-IL
metaTitle: "קיצורי Kubernetes | Dotfiles"
permalink: /he/aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell"
---

# קיצורי Kubernetes

ייעל את זרימות העבודה של Kubernetes עם קיצורי מעטפת תמציתיים ל-kubectl, Helm וניהול אשכולות.

## סקירה

קיצורים אלה מוגדרים ב-`kubernetes.aliases.sh` ונטענים אוטומטית על ידי chezmoi. הם מפחיתים הקשות לפעולות Kubernetes נפוצות, ועוזרים לך לנהל אשכולות, pods ושחרורים מהר יותר.

## הפניה

### ליבה

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `k` | `kubectl` | קיצור דרך ל-kubectl |
| `kg` | `kubectl get` | קבל משאבים |
| `kgp` | `kubectl get pods` | קבל pods |
| `kga` | `kubectl get all` | קבל את כל המשאבים |
| `kd` | `kubectl describe` | תאר משאבים |
| `kdel` | `kubectl delete` | מחק משאבים |
| `kl` | `kubectl logs` | הצג יומנים |
| `kex` | `kubectl exec -it` | בצע מעטפת אינטראקטיבית |

### Context

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `kcx` | - | הצג contexts |
| `kuse` | - | החלף context |
| `kns` | - | החלף namespace |

### Helm

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `h` | `helm` | קיצור דרך ל-Helm |
| `hls` | `helm list` | הצג שחרורים |
| `hi` | `helm install` | התקן chart |

### UI

| קיצור | פקודה | תיאור |
|-------|---------|-------------|
| `k9` | `k9s` | ממשק טרמינל k9s |
