---
description: اختصارات التنقل بين المجلدات مع إشارات مرجعية وتتبع السجل ومختصرات ذكية. تنقل في نظام ملفاتك بشكل أسرع.
lang: ar-SA
metaTitle: اختصارات CD - Dotfiles (AR)
permalink: /ar/aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: اختصارات التنقل بين المجلدات مع إشارات مرجعية وتتبع السجل ومختصرات ذكية. تنقل في نظام ملفاتك بشكل أسرع.
  - name: twitter:title
    content: اختصارات CD - Dotfiles
  - name: og:title
    content: اختصارات CD - Dotfiles
  - name: og:description
    content: اختصارات التنقل بين المجلدات مع إشارات مرجعية وتتبع السجل ومختصرات ذكية. تنقل في نظام ملفاتك بشكل أسرع.
  - name: og:image:alt
    content: Dotfiles - مصمم ببساطة ليناسب حياتك مع الشل
  - name: og:locale
    content: ar_SA
---

# اختصارات CD

تنقل في نظام ملفاتك بشكل أسرع. إشارات مرجعية وسجل ومختصرات ذكية.

## نظرة عامة

هذه الاختصارات معرّفة في `cd.aliases.sh` ويتم تحميلها تلقائيًا بواسطة Chezmoi.

## المرجع

### مختصرات التنقل

| الاختصار | الوصف |
|:---|:---|
| `-` | التبديل إلى المجلد السابق |
| `..` | الصعود مستوى واحد |
| `...` | الصعود مستويين |
| `....` | الصعود ثلاث مستويات |
| `.....` | الصعود أربع مستويات |
| `hom` | الانتقال إلى المجلد الرئيسي |

### مختصرات المجلدات

| الاختصار | المسار | الوصف |
|:---|:---|:---|
| `app` | `~/Applications` | التطبيقات |
| `cod` | `~/Code` | مجلد الكود |
| `dsk` | `~/Desktop` | سطح المكتب |
| `doc` | `~/Documents` | المستندات |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | التنزيلات |
| `mus` | `~/Music` | الموسيقى |
| `pic` | `~/Pictures` | الصور |
| `vid` | `~/Videos` | الفيديوهات |

### مجلدات النظام

| الاختصار | المسار | الوصف |
|:---|:---|:---|
| `etc` | `/etc` | إعدادات النظام |
| `var` | `/var` | الملفات المتغيرة |
| `tmp` | `/tmp` | الملفات المؤقتة |
| `usr` | `/usr` | برامج المستخدم |

### الإشارات المرجعية

| الأمر | الاختصار | الوصف |
|:---|:---|:---|
| `bookmark [name]` | `bm` | إنشاء إشارة مرجعية |
| `bookmark_list` | `bml` | سرد الإشارات المرجعية |
| `bookmark_update` | `bmu` | تحديث إشارة مرجعية |
| `bookmark_remove` | `bmr` | حذف إشارة مرجعية |
| `goto <name>` | `bmg` | الانتقال إلى إشارة مرجعية |

```bash
bm work-project      # إنشاء إشارة مرجعية
bmg work-project     # الانتقال إلى الإشارة المرجعية
bml                  # سرد جميع الإشارات المرجعية
```

### السجل

| الأمر | الاختصار | الوصف |
|:---|:---|:---|
| `dirhistory` | `dh` | عرض سجل المجلدات |
| `lwd` | `ld` | العودة إلى المجلد الأخير |

### متقدم

| الأمر | الاختصار | الوصف |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | إنشاء مجلد والدخول إليه |
| `proj` | `pr` | الانتقال إلى جذر المشروع |
| `pushd` | `pd` | دفع المجلد إلى المكدس |
| `popd` | — | إزالة من المكدس |
| `dirs` | — | سرد مكدس المجلدات |

## الإعدادات

خصص السلوك بمتغيرات البيئة:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## المساعدة

نفّذ `cdhelp` لعرض جميع الأوامر أو `cdversion` لمعلومات الإصدار.
