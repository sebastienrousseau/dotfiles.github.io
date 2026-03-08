---
title: แนวทางปฏิบัติที่ดีในการจัดการความลับ | Dotfiles
description: วิธีจัดการความลับ API keys และข้อมูลรับรองในไฟล์ dotfiles อย่างปลอดภัยด้วย age, SOPS และ 1Password CLI
lang: th-TH
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: แนวทางปฏิบัติที่ดีในการจัดการความลับ preview
canonical: /th/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: การจัดการความลับ
pageType: article
schemaType: TechArticle
permalink: /th/guides/secret-management/
---

# แนวทางปฏิบัติที่ดีในการจัดการความลับ

เก็บความลับออกจากรีโพ dotfiles ของคุณ คู่มือนี้ครอบคลุมสามวิธีที่ทดสอบแล้วสำหรับการจัดการข้อมูลรับรองอย่างปลอดภัยด้วย Chezmoi

## ทำไมจึงสำคัญ

รีโพ dotfiles มักเป็นสาธารณะ API key, token หรือรหัสผ่านที่คอมมิตเพียงรายการเดียวอาจนำไปสู่:

- **บัญชีถูกบุกรุก** ภายในไม่กี่นาทีหลัง push
- **การใช้บิลคลาวด์ในทางที่ผิด** จากข้อมูลรับรองคลาวด์ที่รั่วไหล
- **การโจมตี supply-chain** เมื่อ CI tokens ถูกเปิดเผย

## กฎทอง

1. **อย่าเก็บความลับแบบข้อความธรรมดาใน version control**
2. **เข้ารหัสขณะเก็บ** — ใช้ age, SOPS หรือตัวจัดการความลับ
3. **ตรวจสอบก่อนทุก commit** — ทำอัตโนมัติด้วย pre-commit hooks

## วิธีที่ 1: Chezmoi + age (แนะนำ)

age เป็นเครื่องมือเข้ารหัสไฟล์ที่ง่ายและทันสมัย Chezmoi รวมกับ age โดยเนทีฟ

### ตั้งค่า

```bash
# ติดตั้ง age
brew install age    # macOS
sudo apt install age  # Ubuntu

# สร้างคู่กุญแจ
age-keygen -o ~/.config/chezmoi/key.txt

# บอก Chezmoi ให้ใช้มัน
chezmoi edit-config
```

เพิ่มใน `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### เข้ารหัสไฟล์

```bash
# เพิ่มไฟล์ลับเป็นแบบเข้ารหัส
chezmoi add --encrypt ~/.config/gh/hosts.yml

# ไฟล์จะถูกเก็บแบบเข้ารหัสในไดเรกทอรีต้นฉบับ
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### ความลับในเทมเพลต

```bash
# ใช้เทมเพลต Chezmoi สำหรับความลับแบบอินไลน์
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## วิธีที่ 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) เข้ารหัสเฉพาะคีย์ในไฟล์ YAML/JSON ทำให้โครงสร้างยังคงมองเห็นได้

### ตั้งค่า

```bash
# ติดตั้ง SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# สร้างไฟล์กำหนดค่า SOPS
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### เข้ารหัส

```bash
# สร้างไฟล์ความลับ
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# เข้ารหัสด้วย SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### ใช้ในเทมเพลต

เพิ่มใน `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## วิธีที่ 3: 1Password CLI

1Password CLI (`op`) ดึงความลับตอน apply โดยไม่เก็บไว้ในเครื่อง

### ตั้งค่า

```bash
# ติดตั้ง 1Password CLI
brew install --cask 1password-cli   # macOS

# ลงชื่อเข้าใช้
op signin
```

### ใช้ในเทมเพลต Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### ข้อดี

- ความลับไม่ถูกเขียนลงดิสก์โดยไม่เข้ารหัส
- แชร์ทีมผ่าน 1Password vaults
- รองรับการหมุนเวียนอัตโนมัติ

## ตาข่ายนิรภัย Pre-commit

### git-secrets

```bash
# ติดตั้ง
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# กำหนดค่าสำหรับรีโพของคุณ
git secrets --install
git secrets --register-aws

# เพิ่มรูปแบบกำหนดเอง
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

ยกเว้นพาธที่ละเอียดอ่อนเสมอ:

```text
# ความลับ - อย่า commit
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

ป้องกัน Chezmoi จากการจัดการไฟล์ที่ละเอียดอ่อน:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## รายการตรวจสอบการตรวจสอบ

- [ ] ไม่มีความลับข้อความธรรมดาใน source state: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] กุญแจ age **ไม่ได้** ถูก commit: `git ls-files | grep key.txt` คืนค่าว่าง
- [ ] git-secrets hook ทำงานอยู่: `git secrets --scan`
- [ ] `.gitignore` ครอบคลุม `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` ผ่านโดยไม่มีคำเตือน
- [ ] ไฟล์ที่เข้ารหัส SOPS ถอดรหัสได้ถูกต้อง: `sops --decrypt chezmoi-data.yaml`

## ทดสอบแล้วบน

| แพลตฟอร์ม | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## ที่เกี่ยวข้อง

- [เกี่ยวกับ](/th/about/)
- [ตารางความเข้ากันได้](/th/compatibility/)
- [นามแฝง Security](/th/aliases/security/)
