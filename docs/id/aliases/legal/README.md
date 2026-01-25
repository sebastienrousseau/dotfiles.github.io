---
description: Alias Legal untuk Dotfiles
lang: id-ID
metaTitle: Alias Legal - Dotfiles (ID)
permalink: /alias/legal/
---

# Alias Legal dan Lisensi

Alat untuk kepatuhan open source, pemindaian lisensi, dan manajemen atribusi.

## Alias

### Pemindaian Lisensi
| Alias | Deskripsi | Tipe |
|-------|-------------|------|
| `fossology-start` | Mulai server FOSSology lokal di port 8081 | Docker |
| `fossology-stop` | Hentikan server FOSSology | Docker |
| `license-scan` | Pemindaian lisensi cepat direktori saat ini (via Trivy) | Binary |

### Header Hak Cipta
| Alias | Deskripsi | Tipe |
|-------|-------------|------|
| `add-headers` | Tambahkan header lisensi MIT ke semua file sumber secara rekursif | Docker (google/addlicense) |

### Atribusi
| Alias | Deskripsi | Tipe |
|-------|-------------|------|
| `gen-notice` | Generate file `NOTICE` untuk dependensi (awalnya mendukung Go) | Docker |

### Kontribusi
| Alias | Deskripsi | Tipe |
|-------|-------------|------|
| `check-cla` | Pantau pemeriksaan PR GitHub (termasuk CLA) | CLI (`gh`) |

## Persyaratan

- **Docker**: Untuk isolasi alat kepatuhan.
- **GitHub CLI (`gh`)**: Untuk pemeriksaan PR/CLA.
- **Trivy**: Diinstal otomatis/direkomendasikan untuk pemindaian cepat.
