---
description: دوال الشل التي تُحسّن تجربتك مع الطرفية. أدوات لاختبار API وإدارة الملفات وعمليات النظام والمزيد.
lang: ar-SA
metaTitle: الدوال - Dotfiles (AR)
permalink: /functions/

meta:
  - name: keywords
    content: functions, shell, bash, zsh, dotfiles, productivity, utilities, api, file, system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: دوال الشل التي تُحسّن تجربتك مع الطرفية. أدوات لاختبار API وإدارة الملفات وعمليات النظام والمزيد.
  - name: twitter:title
    content: الدوال - Dotfiles
  - name: og:title
    content: الدوال - Dotfiles
  - name: og:description
    content: دوال الشل التي تُحسّن تجربتك مع الطرفية. أدوات لاختبار API وإدارة الملفات وعمليات النظام والمزيد.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# الدوال

أدوات شل لتعزيز إنتاجيتك عبر macOS وLinux وWindows.

## اكتشف

الدوال معرّفة كملفات `.sh` فردية. أثناء `chezmoi apply`، تُجمّع في `~/.config/shell/functions.sh` ويتم تحميلها بواسطة الشل الخاص بك.

## ابدأ

### إضافة دالة

1. أنشئ ملف `.sh` جديد (مثال: `myfunc.sh`)
2. أضف تعريف دالتك
3. طبّق التغييرات:
   ```bash
   chezmoi apply
   ```

## المرجع

### اختبار API

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `apihealth` | فحص صحة واحد أو أكثر من APIs | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | مراقبة زمن استجابة API | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | إجراء اختبار حمل أساسي | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | تصحيح طلبات HTTP مع التوقيت | `httpdebug [options] [url]` |

### أدوات HTTP

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `curlheader` | عرض رؤوس HTTP | `curlheader [header] [url]` |
| `curlstatus` | فحص رمز حالة HTTP | `curlstatus [url]` |
| `curltime` | قياس مقاييس توقيت HTTP | `curltime [url]` |
| `view-source` | عرض الكود المصدري لموقع | `view-source URL` |
| `whoisport` | إيجاد العملية التي تستخدم منفذًا | `whoisport PORT` |

### إدارة الملفات

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `backup` | إنشاء نسخ احتياطية بطابع زمني | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | ترميز وفك ترميز Base64 | `encode64 "string"` |
| `extract` | استخراج صيغ الأرشيف | `extract [file]` |
| `hexdump` | عرض الملف بصيغة hex | `hexdump [file] [lines]` |
| `ren` | إعادة تسمية الامتدادات بالجملة | `ren OLD_EXT NEW_EXT` |
| `size` | فحص حجم ملف أو مجلد | `size [file/directory]` |
| `zipf` | إنشاء أرشيفات ZIP | `zipf [folder]` |

### تسمية الملفات

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `kebabcase` | التحويل إلى kebab-case | `kebabcase <files...>` |
| `lowercase` | التحويل إلى أحرف صغيرة | `lowercase <files...>` |
| `sentencecase` | التحويل إلى حالة الجملة | `sentencecase <files...>` |
| `snakecase` | التحويل إلى snake_case | `snakecase <files...>` |
| `titlecase` | التحويل إلى حالة العنوان | `titlecase <files...>` |
| `uppercase` | التحويل إلى أحرف كبيرة | `uppercase <files...>` |

### أدوات النظام

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `caffeine` | منع النظام من النوم | `caffeine [command]` |
| `environment` | اكتشاف بيئة نظام التشغيل | `environment` |
| `freespace` | تنظيف مساحة القرص القابلة للإزالة | `freespace [disk]` |
| `hiddenfiles` | تبديل الملفات المخفية في Finder | `hiddenfiles [show\|hide]` |
| `hostinfo` | عرض معلومات المضيف | `hostinfo` |
| `hstats` | عرض إحصائيات استخدام الأوامر | `hstats` |
| `last` | سرد الملفات المعدلة مؤخرًا | `last [minutes]` |
| `logout` | تسجيل خروج عابر للمنصات | `logout [--force]` |
| `myproc` | سرد عمليات المستخدم | `myproc` |
| `stopwatch` | ساعة إيقاف للطرفية | `stopwatch` |
| `sysinfo` | عرض معلومات النظام | `sysinfo` |

### أوامر Caffeine

منع نظامك من النوم أو تفعيل شاشة التوقف.

| الأمر | الوصف |
|:---|:---|
| `caffeine daemon` | بدء خدمة caffeine |
| `caffeine status` | التحقق من تشغيل الخدمة |
| `caffeine start` | إبقاء الشاشة مستيقظة |
| `caffeine stop` | السماح للشاشة بالنوم |
| `caffeine toggle` | تبديل يقظة الشاشة |
| `caffeine shutdown` | إيقاف الخدمة |

يعمل على macOS (باستخدام `caffeinate` الأصلي) وLinux (`xdg-screensaver`) وWindows (PowerShell).

### الأمان

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `genpass` | توليد كلمات مرور قوية | `genpass [num_blocks] [separator]` |
| `keygen` | توليد أزواج مفاتيح SSH | `keygen [name] [email] [type] [bits]` |

### التنقل

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `cdls` | تغيير المجلد وسرد المحتويات | `cdls [directory]` |
| `goto` | تنقل سريع بين المجلدات | `goto [directory]` |
| `mount_read_only` | تركيب للقراءة فقط كقراءة/كتابة | `mount_read_only [image]` |
| `rd` | حذف مجلد | `rd [directory]` |
| `remove_disk` | إخراج القرص بأمان | `remove_disk [disk]` |

### متنوعات

| الدالة | الوصف | الاستخدام |
|:---|:---|:---|
| `matrix` | تأثيرات Matrix للطرفية | `matrix [options]` |
| `prependpath` | إضافة مجلد إلى PATH | `prependpath [directory]` |
| `ql` | فتح في Quick Look على macOS | `ql [file]` |
| `vscode` | فتح في VS Code | `vscode [file]` |

## التوافق

- **macOS** — دعم كامل مع أدوات خاصة بـ macOS
- **Linux** — متوافق مع التوزيعات الشائعة
- **Windows** — دعم عبر WSL أو Cygwin أو Git Bash

## المساعدة

كل دالة تتضمن توثيقًا عبر `--help`:

```bash
apihealth --help
```
