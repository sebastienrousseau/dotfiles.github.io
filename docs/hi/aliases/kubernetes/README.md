---
title: "Kubernetes एलियास: अपने क्लस्टर मैनेजमेंट को सुव्यवस्थित करें"
description: "kubectl, Helm, और k9s एलियास के साथ Kubernetes वर्कफ़्लो तेज़ करें। पॉड, कॉन्टेक्स्ट, और नेमस्पेस कुशलता से प्रबंधित करें।"
lang: hi-IN
metaTitle: "Kubernetes एलियास | Dotfiles"
permalink: /aliases/kubernetes/
sidebar: true
meta:
  - name: keywords
    content: "kubernetes aliases, kubectl shortcuts, helm aliases, k9s, dotfiles, shell"
  - name: og:locale
    content: hi_IN
---

# Kubernetes एलियास

kubectl, Helm, और क्लस्टर मैनेजमेंट के लिए संक्षिप्त शेल एलियास के साथ अपने Kubernetes वर्कफ़्लो को सुव्यवस्थित करें।

## अवलोकन

ये एलियास `kubernetes.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड होते हैं। वे सामान्य Kubernetes ऑपरेशन के लिए कीस्ट्रोक कम करते हैं, क्लस्टर, पॉड, और रिलीज़ को तेज़ी से प्रबंधित करने में मदद करते हैं।

## संदर्भ

### कोर

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `k` | `kubectl` | kubectl शॉर्टकट |
| `kg` | `kubectl get` | रिसोर्स प्राप्त करें |
| `kgp` | `kubectl get pods` | पॉड प्राप्त करें |
| `kga` | `kubectl get all` | सभी रिसोर्स प्राप्त करें |
| `kd` | `kubectl describe` | रिसोर्स वर्णन करें |
| `kdel` | `kubectl delete` | रिसोर्स हटाएं |
| `kl` | `kubectl logs` | लॉग देखें |
| `kex` | `kubectl exec -it` | इंटरैक्टिव शेल निष्पादित करें |

### कॉन्टेक्स्ट

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `kcx` | - | कॉन्टेक्स्ट सूचीबद्ध करें |
| `kuse` | - | कॉन्टेक्स्ट स्विच करें |
| `kns` | - | नेमस्पेस स्विच करें |

### Helm

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `h` | `helm` | Helm शॉर्टकट |
| `hls` | `helm list` | रिलीज़ सूचीबद्ध करें |
| `hi` | `helm install` | चार्ट इंस्टॉल करें |

### UI

| एलियास | कमांड | विवरण |
|-------|---------|-------------|
| `k9` | `k9s` | k9s टर्मिनल UI |
