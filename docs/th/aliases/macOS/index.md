---
title: นามแฝง macOS | Dotfiles
description: คำสั่ง macOS แบบสั้น ภาพรวมสำหรับ Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: นามแฝง macOS | Dotfiles preview
canonical: /th/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: นามแฝง macOS
pageType: docs
schemaType: WebPage
permalink: /th/aliases/macOS/
---

# นามแฝง macOS

คำสั่ง macOS แบบสั้น

หน้านี้แนะนำกลุ่มนามแฝงหนึ่งกลุ่มและทางลัดคำสั่งทั่วไป
อ่านหน้านี้ก่อนเพื่อทำความเข้าใจแบบแผนการตั้งชื่อ อินพุตที่คาดหวัง และรูปแบบการดำเนินการที่ปลอดภัย
จากนั้นเปิดภาคผนวกอ้างอิงเพื่อดูรายการคำสั่งทั้งหมดและไวยากรณ์ที่แน่นอน
นามแฝงเหล่านี้ลดการพิมพ์ซ้ำและรักษาพฤติกรรมเวิร์กโฟลว์ที่สม่ำเสมอบน macOS, Linux และ WSL

## เมื่อใดควรใช้

ใช้หน้านี้ก่อนการทำงานเชลล์ประจำวันเมื่อคุณต้องการรูปแบบคำสั่งที่คาดเดาได้

## สิ่งที่รวมอยู่

- นามแฝง: 18
- ฟังก์ชันตัวช่วย: 1
- ไฟล์ต้นฉบับ: 2

## ตัวอย่างสั้น

- `cleanup_dsstore` → `find . -type f -name "*.DS_Store" -ls -delete`
- `code` → `/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code`
- `desktop_hide` → `defaults write com.apple.finder CreateDesktop false; killall Finder`
- `desktop_show` → `defaults write com.apple.finder CreateDesktop true; killall Finder`
- `finder_hide` → `defaults write com.apple.finder ShowAllFiles FALSE; killall Finder`
- `finder_show` → `defaults write com.apple.finder ShowAllFiles TRUE; killall Finder`
- `iphone` → `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app`
- `lockscreen` → `/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend`
- `no_network_ds` → `defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true`
- `ofd` → `open $PWD`
- `safari_safe` → `open -a Safari --args -safe-mode`

## ขั้นตอนถัดไป

เปิดรายการทั้งหมด:

