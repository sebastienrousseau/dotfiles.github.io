---
title: ตารางความเข้ากันได้ข้ามแพลตฟอร์ม | Dotfiles
description: การรองรับแพลตฟอร์มที่ทดสอบแล้วสำหรับเชลล์ เครื่องมือ เทอร์มินัล และหมวดหมู่นามแฝงใน Dotfiles v0.2.495
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: ตารางความเข้ากันได้ข้ามแพลตฟอร์ม preview
canonical: /th/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: ความเข้ากันได้
pageType: docs
schemaType: TechArticle
permalink: /th/compatibility/
---

# ตารางความเข้ากันได้ข้ามแพลตฟอร์ม

หน้านี้บันทึกการรองรับแพลตฟอร์มที่ทดสอบแล้วสำหรับ Dotfiles v0.2.495 บน macOS, Linux และ WSL2

## คำอธิบายสัญลักษณ์

| สัญลักษณ์ | ความหมาย |
|-------|---------|
| ✅ | ทดสอบและรองรับเต็มรูปแบบ |
| ⚠️ | รองรับบางส่วน — ดูหมายเหตุ |
| ❌ | ไม่รองรับ |
| — | ไม่เกี่ยวข้อง |

## สภาพแวดล้อมเชลล์

| ส่วนประกอบ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | หมายเหตุ |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS ต้องใช้ Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | ค่าเริ่มต้นบน macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | รองรับนามแฝงจำกัด |
| PowerShell | — | — | ⚠️ | WSL interop เท่านั้น |

## เครื่องมือหลักสมัยใหม่

| เครื่องมือ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | ติดตั้ง |
|------|:---:|:---:|:---:|---------|
| Atuin (ประวัติ) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (fuzzy) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (ตัวจัดการไฟล์) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (mux) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## อีมูเลเตอร์เทอร์มินัล

| เทอร์มินัล | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | หมายเหตุ |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland เนทีฟบน Linux |
| Alacritty | ✅ | ✅ | ⚠️ | เร่งความเร็วด้วย GPU |
| WezTerm | ✅ | ✅ | ✅ | กำหนดค่าด้วย Lua |
| iTerm2 | ✅ | — | — | macOS เท่านั้น |
| Windows Terminal | — | — | ✅ | โฮสต์ WSL |

## ตัวจัดการแพ็กเกจ

| ตัวจัดการ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | หมายเหตุ |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | หลักสำหรับ macOS |
| apt | — | ✅ | ✅ | แพ็กเกจระบบ |
| Cargo | ✅ | ✅ | ✅ | เครื่องมือ Rust |
| npm / pnpm | ✅ | ✅ | ✅ | เครื่องมือ Node |
| pip / pipx | ✅ | ✅ | ✅ | เครื่องมือ Python |

## ความปลอดภัยและการลงนาม

| คุณสมบัติ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | หมายเหตุ |
|---------|:---:|:---:|:---:|-------|
| การลงนาม SSH commit | ✅ | ✅ | ✅ | เนทีฟ ไม่ต้องใช้ GPG |
| การเข้ารหัส age | ✅ | ✅ | ✅ | รวมกับ Chezmoi |
| SOPS | ✅ | ✅ | ✅ | แบ็กเอนด์ age หรือ GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL ต้องใช้ bridge |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit hook |

## หมวดหมู่นามแฝง

| หมวดหมู่ | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | หมายเหตุ |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | ต้องมี API keys |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | ต้องมี Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | จำกัดบน headless |
| gcloud | ✅ | ✅ | ✅ | ต้องมี SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS ต้องใช้ coreutils |
| Go | ✅ | ✅ | ✅ | ต้องมี Go |
| Heroku | ✅ | ✅ | ✅ | ต้องมี CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | ต้องมี kubectl |
| Lua | ✅ | ✅ | ✅ | ต้องมี Lua |
| macOS | ✅ | — | — | macOS เท่านั้น |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | ทดแทนด้วย Rust |
| npm | ✅ | ✅ | ✅ | ต้องมี Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | ต้องมี pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | ต้องมี Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | ต้องมี Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | ต้องมี svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | ต้องมี Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | ต้องมี Yarn |

## ที่เกี่ยวข้อง

- [เกี่ยวกับ](/th/about/)
- [นามแฝง](/th/aliases/)
- [แนวทางปฏิบัติที่ดีในการจัดการความลับ](/th/guides/secret-management/)
