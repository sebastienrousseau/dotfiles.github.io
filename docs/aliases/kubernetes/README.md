---
title: "Kubernetes Aliases: Streamline Your Cluster Management"
description: "Speed up Kubernetes workflows with kubectl, Helm, and k9s aliases. Manage pods, contexts, and namespaces efficiently."
lang: en-GB
metaTitle: "Kubernetes Aliases | Dotfiles"
permalink: /aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell"
---

# Kubernetes Aliases

Streamline your Kubernetes workflows with concise shell aliases for kubectl, Helm, and cluster management.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overview

These aliases are defined in `kubernetes.aliases.sh` and are automatically loaded by chezmoi. They reduce keystrokes for common Kubernetes operations, helping you manage clusters, pods, and releases faster.

## Reference

### Core

| Alias | Command | Description |
|-------|---------|-------------|
| `k` | `kubectl` | kubectl shortcut |
| `kg` | `kubectl get` | Get resources |
| `kgp` | `kubectl get pods` | Get pods |
| `kga` | `kubectl get all` | Get all resources |
| `kd` | `kubectl describe` | Describe resources |
| `kdel` | `kubectl delete` | Delete resources |
| `kl` | `kubectl logs` | View logs |
| `kex` | `kubectl exec -it` | Execute interactive shell |

### Context

| Alias | Command | Description |
|-------|---------|-------------|
| `kcx` | - | List contexts |
| `kuse` | - | Switch context |
| `kns` | - | Switch namespace |

### Helm

| Alias | Command | Description |
|-------|---------|-------------|
| `h` | `helm` | Helm shortcut |
| `hls` | `helm list` | List releases |
| `hi` | `helm install` | Install chart |

### UI

| Alias | Command | Description |
|-------|---------|-------------|
| `k9` | `k9s` | k9s terminal UI |
