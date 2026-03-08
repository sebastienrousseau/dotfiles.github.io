---
title: นามแฝง Chmod | Dotfiles
description: คำสั่งสิทธิ์แบบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง Chmod | Dotfiles preview
canonical: /th/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง Chmod
pageType: docs
schemaType: WebPage
permalink: /th/aliases/chmod/
---

# นามแฝง Chmod

คำสั่งสิทธิ์แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 17
- ฟังก์ชันตัวช่วย: 0
- ไฟล์ต้นฉบับ: 1

## ตัวอย่างสั้น

- `chmod_000` → `change_permission 000`
- `chmod_1755` → `'change_permission 1755' # Sticky bit + 755`
- `chmod_2755` → `'change_permission 2755' # Setgid + 755`
- `chmod_400` → `'change_permission 400' # อ่านอย่างเดียวสำหรับเจ้าของ`
- `chmod_444` → `'change_permission 444' # อ่านอย่างเดียวสำหรับทุกคน`
- `chmod_4755` → `'change_permission 4755' # Setuid + 755`
- `chmod_600` → `'change_permission 600' # อ่าน/เขียนสำหรับเจ้าของ`
- `chmod_644` → `'change_permission 644' # อ่าน/เขียนสำหรับเจ้าของ อ่านสำหรับคนอื่น`
- `chmod_664` → `'change_permission 664' # อ่าน/เขียนสำหรับเจ้าของและกลุ่ม อ่านสำหรับคนอื่น`
- `chmod_666` → `'change_permission 666' # อ่าน/เขียนสำหรับทุกคน`
- `chmod_700` → `'change_permission 700' # สิทธิ์เต็มสำหรับเจ้าของเท่านั้น`
- `chmod_744` → `'change_permission 744' # สิทธิ์เต็มสำหรับเจ้าของ อ่านสำหรับคนอื่น`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

