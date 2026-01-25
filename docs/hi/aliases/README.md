---
description: शेल एलियास जो अक्सर उपयोग किए जाने वाले कमांड्स के लिए शॉर्टकट बनाते हैं। टाइपिंग कम करके अपनी उत्पादकता बढ़ाएं।
lang: hi-IN
metaTitle: एलियास - Dotfiles (HI)
permalink: /aliases/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal, एलियास
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: शेल एलियास जो अक्सर उपयोग किए जाने वाले कमांड्स के लिए शॉर्टकट बनाते हैं। टाइपिंग कम करके अपनी उत्पादकता बढ़ाएं।
  - name: twitter:title
    content: एलियास - Dotfiles
  - name: og:title
    content: एलियास - Dotfiles
  - name: og:description
    content: शेल एलियास जो अक्सर उपयोग किए जाने वाले कमांड्स के लिए शॉर्टकट बनाते हैं। टाइपिंग कम करके अपनी उत्पादकता बढ़ाएं।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# एलियास

**Chezmoi** द्वारा प्रबंधित मॉड्यूलर शेल एलियास। कम टाइप करें, ज्यादा करें।

## खोजें

एलियास छोटी, केंद्रित फाइलों में व्यवस्थित हैं — प्रत्येक टूल या वर्कफ़्लो के लिए एक। `chezmoi apply` के दौरान, सभी एलियास फाइलें `~/.config/shell/aliases.sh` में एकत्र की जाती हैं और आपके शेल द्वारा स्रोत की जाती हैं।

## शुरू करें

### एक एलियास जोड़ें

1. एक नई फाइल बनाएं (उदा., `mytool/mytool.aliases.sh`)
2. अपने एलियास परिभाषित करें:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. परिवर्तन लागू करें:
   ```bash
   chezmoi apply
   ```

## संदर्भ

श्रेणी के अनुसार एलियास ब्राउज़ करें:

<!-- markdownlint-disable MD013-->

| श्रेणी | विवरण |
| :--- | :--- |
| [AI](ai/) | AI असिस्टेंट और LLM टूल शॉर्टकट |
| [Archives](archives/) | फाइलों को कंप्रेस और एक्सट्रैक्ट करें |
| [CD](cd/) | फाइल सिस्टम नेविगेट करें |
| [Chmod](chmod/) | फाइल अनुमतियां बदलें |
| [Clear](clear/) | टर्मिनल स्क्रीन साफ करें |
| [Compliance](compliance/) | SOC2 और प्राइवेसी टूल्स |
| [Configuration](configuration/) | dotfiles और शेल कॉन्फिग प्रबंधित करें |
| [Default](default/) | डिफ़ॉल्ट शेल एलियास |
| [Diagnostics](diagnostics/) | सेल्फ-हीलिंग और हेल्थ चेक |
| [Dig](dig/) | DNS सर्वर क्वेरी करें |
| [Disk Usage](disk-usage/) | डिस्क उपयोग जानकारी प्रदर्शित करें |
| [Docker](docker/) | कंटेनर मैनेजमेंट |
| [Editor](editor/) | टेक्स्ट एडिटर कॉन्फ़िगर करें |
| [Find](find/) | फाइलें और डायरेक्टरी खोजें |
| [Fonts](fonts/) | फ़ॉन्ट कैश मैनेजमेंट |
| [GCloud](gcloud/) | Google Cloud SDK टूल्स |
| [Git](git/) | Git वर्जन कंट्रोल |
| [GNU](gnu/) | GNU कोर यूटिलिटीज |
| [Go](go/) | Go लैंग्वेज टूल्स |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | बूटस्ट्रैप और डिप्लॉयमेंट |
| [Interactive](interactive/) | इंटरैक्टिव शेल व्यवहार |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | लाइसेंस स्कैनिंग टूल्स |
| [macOS](macOS/) | macOS-विशिष्ट सेटिंग्स |
| [Make](make/) | GNU Make यूटिलिटीज |
| [Mkdir](mkdir/) | डायरेक्टरी बनाएं |
| [Modern](modern/) | Rust-आधारित टूल रिप्लेसमेंट |
| [NPM](npm/) | Node.js पैकेज मैनेजर |
| [Permission](permission/) | फाइल अनुमतियां |
| [PNPM](pnpm/) | PNPM पैकेज मैनेजर |
| [PS](ps/) | प्रोसेस स्टेटस |
| [Python](python/) | Python यूटिलिटीज |
| [Rsync](rsync/) | कुशल फाइल ट्रांसफर |
| [Rust](rust/) | Rust प्रोग्रामिंग टूल्स |
| [Security](security/) | इम्यूटेबिलिटी और साइनिंग |
| [Subversion](subversion/) | SVN वर्जन कंट्रोल |
| [Sudo](sudo/) | सुपरयूजर ऑपरेशन |
| [Terraform](terraform/) | Infrastructure as Code |
| [Tmux](tmux/) | टर्मिनल मल्टीप्लेक्सर |
| [Update](update/) | dotfiles अपडेट करें |
| [UUID](uuid/) | UUID जनरेट करें |
| [Wget](wget/) | कमांड-लाइन डाउनलोडर |
| [Yarn](yarn/) | Yarn पैकेज मैनेजर |

<!-- markdownlint-enable MD013-->
