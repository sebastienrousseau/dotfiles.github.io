---
title: เกี่ยวกับ Dotfiles | Dotfiles
description: สำรวจภาพรวมทางเทคนิคของ Dotfiles v0.2.495 รองรับ macOS, Linux และ WSL ผ่าน Dotfiles
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: เกี่ยวกับ Dotfiles | Dotfiles preview
canonical: /th/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: เกี่ยวกับ Dotfiles
pageType: docs
schemaType: WebPage
permalink: /th/about/
---

# เกี่ยวกับ Dotfiles

Dotfiles v0.2.495 คือการกำหนดค่าเชลล์ข้ามแพลตฟอร์มที่จัดการโดย Chezmoi

## ติดตั้ง

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
```

## ตรวจสอบ

```bash
dot doctor
```

## คำสั่งหลัก

- `dot apply` ใช้การเปลี่ยนแปลงการกำหนดค่า
- `dot update` อัปเดตรีโพและอุ่นแคช
- `dot doctor` ตรวจสอบพาธ เครื่องมือ และสุขภาพเชลล์
- `dot heal` ซ่อมแซมสถานะที่หายไปหรือเสียหาย
- `dot smoke-test` ตรวจสอบ toolchain หลัก

## ที่เกี่ยวข้อง

- [นามแฝง](/th/aliases/)
- [ฟังก์ชัน](/th/functions/)
- [พาธ](/th/paths/)

## คำสั่งหลัก

CLI `dot` มี 53 คำสั่งจัดตามหมวดหมู่

### แกนหลัก

- `dot apply` — ใช้การเปลี่ยนแปลงการกำหนดค่า.
- `dot sync` — ดึงสถานะ repo ล่าสุดและใช้งาน.
- `dot update` — อัปเดต repo และอุ่นแคช.
- `dot add` — เพิ่มไฟล์ใหม่ลงในแหล่ง Chezmoi.
- `dot diff` — แสดงการเปลี่ยนแปลงที่รอดำเนินการก่อนใช้งาน.
- `dot status` — แสดงสถานะไฟล์ที่จัดการ.
- `dot remove` — ยกเลิกการจัดการไฟล์และลบรายการแหล่ง.
- `dot cd` — เปิด Shell ในไดเรกทอรีแหล่ง Chezmoi.
- `dot edit` — เปิดไฟล์ที่จัดการในโปรแกรมแก้ไข.
- `dot clean-cache` — ล้างแคชชั่วคราว.
- `dot prewarm` — เติมแคชล่วงหน้าเพื่อเริ่ม Shell เร็วขึ้น.

### การวินิจฉัย

- `dot doctor` — ตรวจสอบเส้นทาง เครื่องมือ และสถานะ Shell.
- `dot heal` — ซ่อมแซมสถานะที่ขาดหายหรือเสียหายโดยอัตโนมัติ.
- `dot health` — รันการตรวจสอบสุขภาพแบบเบา.
- `dot verify` — ตรวจสอบความสมบูรณ์ของไฟล์เทียบกับแหล่ง.
- `dot scorecard` — แสดงคะแนนคุณภาพการกำหนดค่า.
- `dot snapshot` — บันทึกสถานะปัจจุบันเพื่อเปรียบเทียบในภายหลัง.
- `dot smoke-test` — ตรวจสอบ toolchain หลักแบบครบวงจร.
- `dot chaos` — ใส่ข้อผิดพลาดเพื่อทดสอบการซ่อมแซมตัวเอง.
- `dot bundle` — ส่งออกชุดการกำหนดค่าแบบพกพา.
- `dot rollback` — ย้อนกลับไปยัง snapshot ก่อนหน้า.
- `dot drift` — ตรวจจับการเปลี่ยนแปลงที่ไม่คาดคิดในไฟล์ที่จัดการ.
- `dot history` — แสดงบันทึกประวัติ apply/sync.
- `dot benchmark` — วัดเวลาเริ่มต้น Shell.
- `dot perf` — วิเคราะห์การเริ่มต้น Shell ที่ช้า.

### ลักษณะที่ปรากฏ

- `dot theme` — เปลี่ยนชุดสีของเทอร์มินัล.
- `dot wallpaper` — ตั้งวอลเปเปอร์เดสก์ท็อป (macOS).
- `dot fonts` — ติดตั้งหรืออัปเดต Nerd Fonts.
- `dot tune` — ปรับความหนาแน่น UI และสไตล์ prompt.

### ความปลอดภัย

- `dot backup` — สร้างการสำรองข้อมูลการกำหนดค่าที่เข้ารหัส.
- `dot encrypt-check` — ตรวจสอบการเข้ารหัสข้อมูลลับในขณะพัก.
- `dot firewall` — กำหนดค่ากฎไฟร์วอลล์ของโฮสต์.
- `dot telemetry` — ควบคุมการวัดผลการใช้งานแบบไม่ระบุตัวตน.
- `dot dns-doh` — เปิดใช้งาน DNS-over-HTTPS.
- `dot lock-screen` — ล็อกหน้าจอทันที.
- `dot usb-safety` — จำกัดการเมาท์อัตโนมัติของ USB mass-storage.

### ข้อมูลลับ

- `dot secrets-init` — เริ่มต้นแบ็กเอนด์ข้อมูลลับ (age / GPG).
- `dot secrets` — แสดงรายการข้อมูลลับที่เข้ารหัส.
- `dot secrets-create` — สร้างข้อมูลลับที่เข้ารหัสใหม่.
- `dot ssh-key` — สร้างหรือหมุนเวียนคู่กุญแจ SSH.
- `dot ssh-cert` — ขอใบรับรอง SSH จาก CA.

### AI

- `dot ai` — เปิดเซสชันผู้ช่วย AI แบบโต้ตอบ.
- `dot ai-setup` — กำหนดค่าคีย์ API สำหรับผู้ให้บริการ AI.
- `dot ai-query` — ส่ง prompt ครั้งเดียวไปยังโมเดล AI.
- ตัวครอบ AI tool: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### เครื่องมือ

- `dot tools` — แสดงรายการเครื่องมือ CLI ทดแทนที่รวมมาและสถานะ.
- `dot new` — สร้างไฟล์นามแฝงหรือฟังก์ชันใหม่.
- `dot sandbox` — เปิด Shell แซนด์บ็อกซ์แบบใช้แล้วทิ้ง.
- `dot keys` — แสดงการผูกปุ่มปัจจุบัน.
- `dot learn` — เริ่มบทเรียนแบบโต้ตอบ.

### เมตา

- `dot upgrade` — อัปเกรด Dotfiles เป็นเวอร์ชันล่าสุด.
- `dot packages` — แสดงรายการแพ็คเกจที่ติดตั้งซึ่งจัดการโดย Dotfiles.
- `dot version` / `dot help` — แสดงข้อมูลเวอร์ชันหรือการใช้งาน
