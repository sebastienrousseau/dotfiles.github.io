---
title: O Dotfiles | Dotfiles
description: Odkryj przeglad techniczny Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: O Dotfiles | Dotfiles preview
canonical: /pl/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: O Dotfiles
pageType: docs
schemaType: WebPage
permalink: /pl/about/
---

# O Dotfiles

Dotfiles v0.2.495 to wieloplatformowa konfiguracja powloki zarzadzana przez Chezmoi.

## Instalacja

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
```

## Weryfikacja

```bash
dot doctor
```

## Polecenia glowne

- `dot apply` stosuje zmiany konfiguracji.
- `dot update` aktualizuje repozytorium i odswieza pamiec podreczna.
- `dot doctor` weryfikuje sciezki, narzedzia i stan powloki.
- `dot heal` naprawia brakujacy lub uszkodzony stan.
- `dot smoke-test` waliduje glowne lancuchy narzedzi.

## Powiazane

- [Aliasy](/pl/aliases/)
- [Funkcje](/pl/functions/)
- [Sciezki](/pl/paths/)

## Polecenia główne

CLI `dot` udostępnia 53 polecenia zorganizowane według kategorii.

### Rdzeń

- `dot apply` — stosuje zmiany konfiguracji.
- `dot sync` — pobiera najnowszy stan repozytorium i stosuje.
- `dot update` — aktualizuje repozytorium i rozgrzewa pamięci podręczne.
- `dot add` — dodaje nowe pliki do źródła Chezmoi.
- `dot diff` — wyświetla oczekujące zmiany przed zastosowaniem.
- `dot status` — wyświetla status zarządzanych plików.
- `dot remove` — usuwa plik z zarządzania i kasuje wpis źródłowy.
- `dot cd` — otwiera powłokę w katalogu źródłowym Chezmoi.
- `dot edit` — otwiera zarządzany plik w edytorze.
- `dot clean-cache` — czyści tymczasowe pamięci podręczne.
- `dot prewarm` — wstępnie wypełnia pamięci podręczne dla szybszego startu powłoki.

### Diagnostyka

- `dot doctor` — weryfikuje ścieżki, narzędzia i stan powłoki.
- `dot heal` — automatycznie naprawia brakujący lub uszkodzony stan.
- `dot health` — uruchamia lekkie sprawdzenie stanu.
- `dot verify` — sprawdza integralność plików względem źródła.
- `dot scorecard` — wyświetla ocenę jakości konfiguracji.
- `dot snapshot` — przechwytuje bieżący stan do późniejszego porównania.
- `dot smoke-test` — w pełni weryfikuje podstawowe łańcuchy narzędzi.
- `dot chaos` — wstrzykuje błędy w celu testowania samonaprawy.
- `dot bundle` — eksportuje przenośny pakiet konfiguracji.
- `dot rollback` — cofa do poprzedniego snapshota.
- `dot drift` — wykrywa nieautoryzowane zmiany w zarządzanych plikach.
- `dot history` — wyświetla dziennik historii apply/sync.
- `dot benchmark` — mierzy czas uruchamiania powłoki.
- `dot perf` — profiluje wolną inicjalizację powłoki.

### Wygląd

- `dot theme` — przełącza schemat kolorów terminala.
- `dot wallpaper` — ustawia tapetę pulpitu (macOS).
- `dot fonts` — instaluje lub aktualizuje Nerd Fonts.
- `dot tune` — dostosowuje gęstość interfejsu i styl znaku zachęty.

### Bezpieczeństwo

- `dot backup` — tworzy zaszyfrowane kopie zapasowe konfiguracji.
- `dot encrypt-check` — weryfikuje szyfrowanie sekretów w stanie spoczynku.
- `dot firewall` — konfiguruje reguły zapory ogniowej hosta.
- `dot telemetry` — kontroluje anonimową telemetrię użycia.
- `dot dns-doh` — włącza DNS-over-HTTPS.
- `dot lock-screen` — natychmiast blokuje ekran.
- `dot usb-safety` — ogranicza automatyczne montowanie pamięci masowej USB.

### Sekrety

- `dot secrets-init` — inicjalizuje backend sekretów (age / GPG).
- `dot secrets` — wyświetla zaszyfrowane wpisy sekretów.
- `dot secrets-create` — tworzy nowy zaszyfrowany sekret.
- `dot ssh-key` — generuje lub rotuje pary kluczy SSH.
- `dot ssh-cert` — żąda certyfikatu SSH od CA.

### AI

- `dot ai` — otwiera interaktywną sesję asystenta AI.
- `dot ai-setup` — konfiguruje klucze API dla dostawców AI.
- `dot ai-query` — wysyła jednorazowe zapytanie do modelu AI.
- Wrappery narzędzi AI: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Narzędzia

- `dot tools` — wyświetla dołączone zamienniki CLI i ich status.
- `dot new` — tworzy nowy plik aliasu lub funkcji.
- `dot sandbox` — otwiera jednorazową powłokę sandbox.
- `dot keys` — wyświetla aktualne skróty klawiszowe.
- `dot learn` — uruchamia interaktywny samouczek.

### Meta

- `dot upgrade` — aktualizuje Dotfiles do najnowszej wersji.
- `dot packages` — wyświetla zainstalowane pakiety zarządzane przez Dotfiles.
- `dot version` / `dot help` — wyświetla informacje o wersji lub użyciu
