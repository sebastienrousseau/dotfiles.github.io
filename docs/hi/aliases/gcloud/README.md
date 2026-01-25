---
title: "Google Cloud एलियास: अपने gcloud CLI वर्कफ़्लो को सुव्यवस्थित करें"
description: "Google Cloud SDK के लिए शॉर्टकट एलियास। याद रखने योग्य कमांड के साथ Compute Engine, IAM, Cloud SQL, और अधिक प्रबंधित करें।"
lang: hi-IN
metaTitle: "Google Cloud एलियास | Dotfiles"
permalink: /aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "gcloud aliases, google cloud cli, gcloud shortcuts, cloud sdk commands, dotfiles, shell aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Google Cloud एलियास | Dotfiles"
  - name: twitter:description
    content: "Google Cloud SDK के लिए शॉर्टकट एलियास। Compute Engine, IAM, Cloud SQL, और अधिक प्रबंधित करें।"
  - name: og:title
    content: "Google Cloud एलियास | Dotfiles"
  - name: og:description
    content: "Google Cloud SDK के लिए शॉर्टकट एलियास।"
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# Google Cloud एलियास

Google Cloud SDK कमांड लाइन के लिए याद रखने योग्य शॉर्टकट।

## अवलोकन

ये एलियास `gcloud.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड होते हैं। वे Compute Engine, IAM, Cloud SQL, और अन्य GCP सेवाओं को प्रबंधित करने को सरल करने के लिए सामान्य Google Cloud SDK कमांड को रैप करते हैं।

## संदर्भ

### कोर कमांड

| एलियास | विवरण |
|-------|-------------|
| `gcd` | डिफ़ॉल्ट प्रोजेक्ट को वर्तमान डायरेक्टरी नाम पर सेट करें |
| `gck` | सभी कॉन्फ़िगरेशन सूचीबद्ध करें |
| `gcsa` | वर्तमान कॉन्फ़िगरेशन के लिए अकाउंट सेट करें |
| `gcso` | वर्तमान प्रोजेक्ट के लिए Google Cloud Console खोलें |

### Compute Engine

| एलियास | विवरण |
|-------|-------------|
| `gci` | Compute Engine इंस्टेंस प्रबंधित करें |
| `gcca` | Compute Engine IP एड्रेस प्रबंधित करें |
| `gccc` | नया वर्चुअल मशीन इंस्टेंस बनाएं |
| `gcco` | SSH के माध्यम से वर्चुअल मशीन इंस्टेंस से कनेक्ट करें |

### स्टोरेज और डेटाबेस

| एलियास | विवरण |
|-------|-------------|
| `gcss` | Cloud Storage प्रबंधित करें |
| `gcsq` | Cloud SQL प्रबंधित करें |
| `gcdb` | Cloud Datastore प्रबंधित करें |

### सर्वरलेस और कंटेनर

| एलियास | विवरण |
|-------|-------------|
| `gcf` | Cloud Functions प्रबंधित करें |
| `gcro` | Cloud Run प्रबंधित करें |
| `gcu` | App Engine प्रबंधित करें |
| `gcs` | Kubernetes Engine क्लस्टर प्रबंधित करें |

### नेटवर्किंग और सुरक्षा

| एलियास | विवरण |
|-------|-------------|
| `gcn` | Cloud Networks प्रबंधित करें |
| `gcic` | Identity and Access Management प्रबंधित करें |
| `gcki` | Cloud KMS प्रबंधित करें |

### ऑपरेशन और मॉनिटरिंग

| एलियास | विवरण |
|-------|-------------|
| `gcla` | Cloud Logging प्रबंधित करें |
| `gcma` | Cloud Monitoring प्रबंधित करें |
| `gclb` | Cloud Build प्रबंधित करें |
| `gct` | Cloud Tasks प्रबंधित करें |
