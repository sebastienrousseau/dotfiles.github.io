---
title: "اختصارات Diagnostics: صحة النظام وأوامر الإصلاح الذاتي"
description: "اختصارات شل لتشخيص النظام وفحوصات الصحة واكتشاف الانحراف والإصلاح الذاتي في بيئة dotfiles الخاصة بك."
lang: ar-SA
metaTitle: "اختصارات Diagnostics | Dotfiles"
permalink: /ar/aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "diagnostics aliases, system health check, dotfiles doctor, chezmoi verify, self-healing shell"
---

# اختصارات Diagnostics

أدوات للإصلاح الذاتي وفحوصات صحة النظام.

## نظرة عامة

توفر اختصارات Diagnostics أوامر لمراقبة صحة النظام واكتشاف انحراف الإعدادات وإصلاح بيئة dotfiles الخاصة بك تلقائيًا. تتكامل هذه الأدوات مع chezmoi لضمان بقاء ملفاتك المحلية متزامنة مع حالتك المُدارة.

## المرجع

### الصحة والإصلاح

| الاختصار | الوصف |
|-------|-------------|
| `doc`, `dot-doctor` | تشغيل سكريبت فحص صحة النظام (`doctor.sh`). |
| `drift`, `dot-drift` | التحقق مما إذا كانت الملفات المحلية قد انحرفت عن الحالة المُدارة (`chezmoi verify`). |
| `heal`, `dot-heal` | تطبيق الحالة المُدارة لإصلاح الانحراف (`chezmoi apply`). |
| `doc-full` | تشغيل doctor مع معلومات تصحيح المسار الموسعة. |
