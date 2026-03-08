---
title: Kubernetes Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Kubernetes in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Kubernetes Reference Appendix | Dotfiles preview
canonical: /en/aliases/kubernetes/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Kubernetes Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/kubernetes/reference/
---

# Kubernetes Reference Appendix

## Source files

- `.chezmoitemplates/aliases/kubernetes/kubernetes.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `hi` | `helm install` |
| `hls` | `helm list` |
| `hm` | `helm` |
| `hrepo` | `helm repo` |
| `hrm` | `helm uninstall` |
| `hsearch` | `helm search repo` |
| `hu` | `helm upgrade` |
| `k` | `kubectl` |
| `k9` | `k9s` |
| `kaf` | `kubectl apply -f` |
| `kctx` | `kubectx` |
| `kctxc` | `'kubectx -c' # Current context` |
| `kcx` | `kubectl config get-contexts` |
| `kd` | `kubectl describe` |
| `kdel` | `kubectl delete` |
| `kdf` | `kubectl delete -f` |
| `kex` | `kubectl exec -it` |
| `kg` | `kubectl get` |
| `kga` | `kubectl get all` |
| `kgp` | `kubectl get pods` |
| `kl` | `kubectl logs` |
| `klint` | `kube-linter lint` |
| `klintc` | `kube-linter lint --config` |
| `klog` | `stern` |
| `klogs` | `stern --since 1h` |
| `klogsf` | `stern --tail 100` |
| `kn` | `kubens` |
| `knc` | `'kubens -c' # Current namespace` |
| `kns` | `kubectl config set-context --current --namespace` |
| `ksec` | `kubesec scan` |
| `kuse` | `kubectl config use-context` |
| `mkdash` | `minikube dashboard` |
| `mkg` | `minikube` |
| `mkip` | `minikube ip` |
| `mkssh` | `minikube ssh` |
| `mkstart` | `minikube start` |
| `mkstatus` | `minikube status` |
| `mkstop` | `minikube stop` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
