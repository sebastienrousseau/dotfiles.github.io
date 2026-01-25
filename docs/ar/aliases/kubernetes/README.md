---
title: "اختصارات Kubernetes: بسّط إدارة المجموعات"
description: "سرّع سير عمل Kubernetes مع اختصارات kubectl وHelm وk9s. أدر الحاويات والسياقات ومساحات الأسماء بكفاءة."
lang: ar-SA
metaTitle: "اختصارات Kubernetes | Dotfiles"
permalink: /ar/aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell"
---

# اختصارات Kubernetes

بسّط سير عمل Kubernetes مع اختصارات شل موجزة لـ kubectl وHelm وإدارة المجموعات.

## نظرة عامة

هذه الاختصارات معرّفة في `kubernetes.aliases.sh` ويتم تحميلها تلقائيًا بواسطة chezmoi. تقلل ضغطات المفاتيح لعمليات Kubernetes الشائعة، مما يساعدك على إدارة المجموعات والحاويات والإصدارات بشكل أسرع.

## المرجع

### الأساسية

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `k` | `kubectl` | اختصار kubectl |
| `kg` | `kubectl get` | الحصول على الموارد |
| `kgp` | `kubectl get pods` | الحصول على الحاويات |
| `kga` | `kubectl get all` | الحصول على جميع الموارد |
| `kd` | `kubectl describe` | وصف الموارد |
| `kdel` | `kubectl delete` | حذف الموارد |
| `kl` | `kubectl logs` | عرض السجلات |
| `kex` | `kubectl exec -it` | تنفيذ شل تفاعلي |

### السياق

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `kcx` | - | سرد السياقات |
| `kuse` | - | تبديل السياق |
| `kns` | - | تبديل مساحة الأسماء |

### Helm

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `h` | `helm` | اختصار Helm |
| `hls` | `helm list` | سرد الإصدارات |
| `hi` | `helm install` | تثبيت chart |

### واجهة المستخدم

| الاختصار | الأمر | الوصف |
|-------|---------|-------------|
| `k9` | `k9s` | واجهة k9s للطرفية |
