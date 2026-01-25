---
description: शेल फंक्शंस जो आपके टर्मिनल अनुभव को बेहतर बनाते हैं। API टेस्टिंग, फाइल मैनेजमेंट, सिस्टम ऑपरेशन, और अधिक के लिए यूटिलिटीज।
lang: hi-IN
metaTitle: फंक्शंस - Dotfiles (HI)
permalink: /functions/

meta:
  - name: keywords
    content: functions, shell, bash, zsh, dotfiles, productivity, utilities, api, file, system, फंक्शंस
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: शेल फंक्शंस जो आपके टर्मिनल अनुभव को बेहतर बनाते हैं। API टेस्टिंग, फाइल मैनेजमेंट, सिस्टम ऑपरेशन, और अधिक के लिए यूटिलिटीज।
  - name: twitter:title
    content: फंक्शंस - Dotfiles
  - name: og:title
    content: फंक्शंस - Dotfiles
  - name: og:description
    content: शेल फंक्शंस जो आपके टर्मिनल अनुभव को बेहतर बनाते हैं। API टेस्टिंग, फाइल मैनेजमेंट, सिस्टम ऑपरेशन, और अधिक के लिए यूटिलिटीज।
  - name: og:image:alt
    content: Dotfiles - आपकी शेल लाइफ के लिए डिज़ाइन किया गया
  - name: og:locale
    content: hi_IN
---

# फंक्शंस

macOS, Linux, और Windows में आपकी उत्पादकता बढ़ाने के लिए शेल यूटिलिटीज।

## खोजें

फंक्शंस व्यक्तिगत `.sh` फाइलों के रूप में परिभाषित हैं। `chezmoi apply` के दौरान, वे `~/.config/shell/functions.sh` में एकत्र किए जाते हैं और आपके शेल द्वारा स्रोत किए जाते हैं।

## शुरू करें

### एक फंक्शन जोड़ें

1. एक नई `.sh` फाइल बनाएं (उदा., `myfunc.sh`)
2. अपना फंक्शन परिभाषा जोड़ें
3. परिवर्तन लागू करें:
   ```bash
   chezmoi apply
   ```

## संदर्भ

### API टेस्टिंग

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `apihealth` | एक या अधिक APIs की हेल्थ जांचें | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | API रिस्पॉन्स टाइम मॉनिटर करें | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | बेसिक लोड टेस्टिंग करें | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | टाइमिंग के साथ HTTP रिक्वेस्ट डीबग करें | `httpdebug [options] [url]` |

### HTTP यूटिलिटीज

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `curlheader` | HTTP हेडर देखें | `curlheader [header] [url]` |
| `curlstatus` | HTTP स्टेटस कोड जांचें | `curlstatus [url]` |
| `curltime` | HTTP टाइमिंग मेट्रिक्स मापें | `curltime [url]` |
| `view-source` | वेबसाइट सोर्स कोड देखें | `view-source URL` |
| `whoisport` | किसी पोर्ट का उपयोग करने वाली प्रोसेस खोजें | `whoisport PORT` |

### फाइल मैनेजमेंट

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `backup` | टाइमस्टैम्प्ड बैकअप बनाएं | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Base64 एनकोडिंग और डिकोडिंग | `encode64 "string"` |
| `extract` | आर्काइव फॉर्मेट एक्सट्रैक्ट करें | `extract [file]` |
| `hexdump` | फाइल को हेक्स फॉर्मेट में दिखाएं | `hexdump [file] [lines]` |
| `ren` | बैच में एक्सटेंशन रीनेम करें | `ren OLD_EXT NEW_EXT` |
| `size` | फाइल या डायरेक्टरी साइज जांचें | `size [file/directory]` |
| `zipf` | ZIP आर्काइव बनाएं | `zipf [folder]` |

### फाइल नेमिंग

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `kebabcase` | kebab-case में कन्वर्ट करें | `kebabcase <files...>` |
| `lowercase` | lowercase में कन्वर्ट करें | `lowercase <files...>` |
| `sentencecase` | sentence case में कन्वर्ट करें | `sentencecase <files...>` |
| `snakecase` | snake_case में कन्वर्ट करें | `snakecase <files...>` |
| `titlecase` | Title Case में कन्वर्ट करें | `titlecase <files...>` |
| `uppercase` | UPPERCASE में कन्वर्ट करें | `uppercase <files...>` |

### सिस्टम यूटिलिटीज

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `caffeine` | सिस्टम को स्लीप होने से रोकें | `caffeine [command]` |
| `environment` | OS एनवायरनमेंट पता लगाएं | `environment` |
| `freespace` | पर्जेबल डिस्क स्पेस साफ करें | `freespace [disk]` |
| `hiddenfiles` | Finder में छिपी फाइलें टॉगल करें | `hiddenfiles [show\|hide]` |
| `hostinfo` | होस्ट जानकारी दिखाएं | `hostinfo` |
| `hstats` | कमांड उपयोग स्टैट्स देखें | `hstats` |
| `last` | हाल में संशोधित फाइलें सूचीबद्ध करें | `last [minutes]` |
| `logout` | क्रॉस-प्लेटफॉर्म लॉगआउट | `logout [--force]` |
| `myproc` | यूजर प्रोसेस सूचीबद्ध करें | `myproc` |
| `stopwatch` | टर्मिनल स्टॉपवॉच | `stopwatch` |
| `sysinfo` | सिस्टम जानकारी दिखाएं | `sysinfo` |

### Caffeine कमांड्स

अपने सिस्टम को स्लीप होने या स्क्रीनसेवर एक्टिवेट होने से रोकें।

| कमांड | विवरण |
|:---|:---|
| `caffeine daemon` | caffeine daemon शुरू करें |
| `caffeine status` | जांचें कि daemon चल रहा है |
| `caffeine start` | स्क्रीन जागृत रखें |
| `caffeine stop` | स्क्रीन को स्लीप होने दें |
| `caffeine toggle` | स्क्रीन जागृत टॉगल करें |
| `caffeine shutdown` | daemon बंद करें |

macOS (नेटिव `caffeinate`), Linux (`xdg-screensaver`), और Windows (PowerShell) पर काम करता है।

### सुरक्षा

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `genpass` | मजबूत पासवर्ड जनरेट करें | `genpass [num_blocks] [separator]` |
| `keygen` | SSH कुंजी जोड़े जनरेट करें | `keygen [name] [email] [type] [bits]` |

### नेविगेशन

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `cdls` | डायरेक्टरी बदलें और सूची दिखाएं | `cdls [directory]` |
| `goto` | त्वरित डायरेक्टरी नेविगेशन | `goto [directory]` |
| `mount_read_only` | रीड-ओनली को रीड-राइट के रूप में माउंट करें | `mount_read_only [image]` |
| `rd` | डायरेक्टरी हटाएं | `rd [directory]` |
| `remove_disk` | सुरक्षित रूप से डिस्क इजेक्ट करें | `remove_disk [disk]` |

### विविध

| फंक्शन | विवरण | उपयोग |
|:---|:---|:---|
| `matrix` | टर्मिनल Matrix इफेक्ट्स | `matrix [options]` |
| `prependpath` | PATH में डायरेक्टरी जोड़ें | `prependpath [directory]` |
| `ql` | macOS Quick Look में खोलें | `ql [file]` |
| `vscode` | VS Code में खोलें | `vscode [file]` |

## संगतता

- **macOS** — macOS-विशिष्ट यूटिलिटीज के साथ पूर्ण समर्थन
- **Linux** — सामान्य डिस्ट्रीब्यूशन के साथ संगत
- **Windows** — WSL, Cygwin, या Git Bash के माध्यम से समर्थन

## सहायता

प्रत्येक फंक्शन में `--help` के माध्यम से डॉक्यूमेंटेशन शामिल है:

```bash
apihealth --help
```
