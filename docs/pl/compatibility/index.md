---
title: Macierz Zgodnosci Wieloplatformowej | Dotfiles
description: Przetestowane wsparcie platform dla powlok, narzedzi, terminali i kategorii aliasow w Dotfiles v0.2.495.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Macierz Zgodnosci Wieloplatformowej preview
canonical: /pl/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Zgodnosc
pageType: docs
schemaType: TechArticle
permalink: /pl/compatibility/
---

# Macierz Zgodnosci Wieloplatformowej

Ta strona dokumentuje przetestowane wsparcie platform dla Dotfiles v0.2.495 na macOS, Linux i WSL2.

## Legenda znaczkow

| Znaczek | Znaczenie |
|---------|-----------|
| ✅ | W pelni przetestowane i wspierane |
| ⚠️ | Czesciowe wsparcie -- zobacz uwagi |
| ❌ | Niewspierane |
| — | Nie dotyczy |

## Srodowisko powloki

| Komponent | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Uwagi |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS wymaga Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Domyslna na macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Ograniczone wsparcie aliasow |
| PowerShell | — | — | ⚠️ | Tylko interop WSL |

## Nowoczesne narzedzia podstawowe

| Narzedzie | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Instalacja |
|-----------|:---:|:---:|:---:|---------|
| Atuin (historia) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (rozmyte) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (menedzer plikow) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (multiplekser) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## Emulatory terminala

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Uwagi |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Natywny Wayland na Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Akceleracja GPU |
| WezTerm | ✅ | ✅ | ✅ | Konfiguracja Lua |
| iTerm2 | ✅ | — | — | Tylko macOS |
| Windows Terminal | — | — | ✅ | Host WSL |

## Menedzerowie pakietow

| Menedzer | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Uwagi |
|----------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Glowny dla macOS |
| apt | — | ✅ | ✅ | Pakiety systemowe |
| Cargo | ✅ | ✅ | ✅ | Narzedzia Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Narzedzia Node |
| pip / pipx | ✅ | ✅ | ✅ | Narzedzia Python |

## Bezpieczenstwo i podpisywanie

| Funkcja | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Uwagi |
|---------|:---:|:---:|:---:|-------|
| Podpisywanie commitow SSH | ✅ | ✅ | ✅ | Natywne, bez GPG |
| Szyfrowanie age | ✅ | ✅ | ✅ | Integracja Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age lub GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL wymaga mostu |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Kategorie aliasow

| Kategoria | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Uwagi |
|-----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Wymaga kluczy API |
| Archiwa | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Konfiguracja | ✅ | ✅ | ✅ | — |
| Domyslne | ✅ | ✅ | ✅ | — |
| Diagnostyka | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Uzycie dysku | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Wymaga Docker |
| Edytor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Czcionki | ✅ | ⚠️ | ⚠️ | Ograniczone bez GUI |
| gcloud | ✅ | ✅ | ✅ | Wymaga SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS wymaga coreutils |
| Go | ✅ | ✅ | ✅ | Wymaga Go |
| Heroku | ✅ | ✅ | ✅ | Wymaga CLI |
| Interaktywne | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Wymaga kubectl |
| Lua | ✅ | ✅ | ✅ | Wymaga Lua |
| macOS | ✅ | — | — | Tylko macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Nowoczesne | ✅ | ✅ | ✅ | Zamienniki w Rust |
| npm | ✅ | ✅ | ✅ | Wymaga Node |
| Uprawnienia | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Wymaga pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Wymaga Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Wymaga Rust |
| Bezpieczenstwo | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Wymaga svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Wymaga Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Aktualizacja | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Wymaga Yarn |

## Powiazane

- [O Dotfiles](/pl/about/)
- [Aliasy](/pl/aliases/)
- [Najlepsze Praktyki Zarzadzania Sekretami](/pl/guides/secret-management/)
