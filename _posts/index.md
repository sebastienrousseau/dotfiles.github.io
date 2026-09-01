---
name: "Dotfiles"
short_name: "dotfiles"
title: "Dotfiles: Minimalist macOS & Linux Developer Environment"
description: "Curated, high-velocity zsh, tmux, git, and neovim configurations optimized for Apple Silicon and Linux with sub-20ms shell startup."
keywords: "dotfiles, zsh config, starship prompt, neovim lua, tmux config, brewfile macos, git signing ssh"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "index"
permalink: "https://dotfiles.io/"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

<section class="hero-editorial">
<div class="eyebrow-badge">
<span class="eyebrow-pulse"></span>
<span>Developer Environment · Open Source · Zsh & Neovim · Updated September 2026</span>
</div>
<h1>A minimalist, blazingly fast terminal setup.<br>Engineered for macOS & Linux.</h1>
<p class="hero-lead">An opinionated, zero-bloat developer environment featuring Zsh with instant startup, Starship prompt, Lua-configured Neovim, modular Tmux sessions, and automated Homebrew workstation provisioning.</p>
<div class="hero-actions">
<a href="/installation/index.html" class="btn-primary-quantum">Quickstart Install (1-Line) →</a>
<a href="/shell/index.html" class="btn-secondary-quantum">Explore Shell & Zsh</a>
</div>
</section>

<!-- SECTION 2: KEY STATS TICKER -->
<section class="clock-ticker-section my-5" aria-label="Performance Benchmarks">
<div class="row g-3">
<div class="col-md-4 col-lg-2-4">
<div class="stat-card">
<div class="stat-figure">&lt; 18 ms</div>
<div class="stat-label">Shell Startup Time</div>
<div class="stat-source">Async lazy loading · <a href="/benchmarks/index.html">Benchmark Specs ↗</a></div>
</div>
</div>

<div class="col-md-4 col-lg-2-4">
<div class="stat-card">
<div class="stat-figure">100% Rust Tools</div>
<div class="stat-label">Modern CLI Replacements</div>
<div class="stat-source">bat, eza, ripgrep, fd, zoxide · <a href="/tools/index.html">Tool Matrix ↗</a></div>
</div>
</div>

<div class="col-md-4 col-lg-2-4">
<div class="stat-card">
<div class="stat-figure">Zero Secrets</div>
<div class="stat-label">Air-Gapped & Safe</div>
<div class="stat-source">1Password & GPG integration · <a href="/security/index.html">Security Architecture ↗</a></div>
</div>
</div>

<div class="col-md-6 col-lg-2-4">
<div class="stat-card">
<div class="stat-figure">Idempotent</div>
<div class="stat-label">Automated Provisioning</div>
<div class="stat-source">Brewfile & install scripts · <a href="/installation/index.html">Setup Guide ↗</a></div>
</div>
</div>

<div class="col-md-6 col-lg-2-4">
<div class="stat-card">
<div class="stat-figure">Dual Apache/MIT</div>
<div class="stat-label">Open Source License</div>
<div class="stat-source">Free for all · <a href="https://github.com/sebastienrousseau/dotfiles.github.io" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a></div>
</div>
</div>
</div>
</section>

<!-- SECTION 3: CORE CAPABILITIES BENTO GRID -->
<section class="my-5" aria-label="Core Capabilities">
<div class="text-center mb-4">
<h2 class="h3 fw-bold">Engineered for Daily Engineering Flow</h2>
<p class="text-muted">Every configuration is tested on macOS Apple Silicon and Linux for maximum speed and keyboard ergonomics.</p>
</div>

<div class="bento-grid">
<div class="bento-card bento-col-4">
<div>
<div class="bento-tag">Shell & Prompt</div>
<h3 class="bento-title">Zsh + Starship Prompt</h3>
<p class="bento-desc">Instant shell startup under 20ms using modular lazy-loading. Starship prompt renders contextual Git branch status, Rust/Go toolchain versions, and execution times without UI lag.</p>
</div>
<a href="/shell/index.html" class="author-link">View Zsh Configurations →</a>
</div>

<div class="bento-card bento-col-4">
<div>
<div class="bento-tag">Editor & LSP</div>
<h3 class="bento-title">Neovim with Lua & Treesitter</h3>
<p class="bento-desc">Blazing-fast text editing with native LSP client, Treesitter syntax highlighting, Telescope fuzzy finding, and Copilot AI assistance configured cleanly in modular Lua.</p>
</div>
<a href="/editor/index.html" class="author-link">View Neovim Setup →</a>
</div>

<div class="bento-card bento-col-4">
<div>
<div class="bento-tag">Multiplexer & Git</div>
<h3 class="bento-title">Tmux & Cryptographic Git</h3>
<p class="bento-desc">Persistent terminal sessions with seamless navigation between Vim splits and Tmux panes. Git configured with SSH key commit signing and Delta side-by-side syntax diffing.</p>
</div>
<a href="/git/index.html" class="author-link">Explore Git & Tmux →</a>
</div>
</div>
</section>

<!-- SECTION 4: TERMINAL QUICKSTART -->
<section class="my-5" aria-label="Developer Quickstart">
<div class="card-surface p-4 p-md-5">
<div class="row align-items-center g-4">
<div class="col-lg-6">
<div class="eyebrow-badge">Automated Installation</div>
<h2 class="h3 fw-bold text-headline mb-3">One Command to Set Up Your Entire Mac</h2>
<p class="text-muted mb-4">Clones dotfiles, links configs via symlinks, installs CLI utilities and casks from `Brewfile`, and configures Zsh with zero manual hassle.</p>
<div class="d-flex gap-3 flex-wrap">
<a href="/installation/index.html" class="btn-primary-quantum">Installation Instructions →</a>
<a href="/aliases/index.html" class="btn-secondary-quantum">Explore Aliases</a>
</div>
</div>
<div class="col-lg-6">
<div class="hero-visual-terminal">
<div class="terminal-header">
<span class="terminal-dot dot-red"></span>
<span class="terminal-dot dot-yellow"></span>
<span class="terminal-dot dot-green"></span>
<span class="terminal-title">bash — dotfiles installer</span>
</div>
<pre><code><span class="text-muted"># 1. Run automated installation</span>
$ bash -c "$(curl -fsSL https://dotfiles.io/install.sh)"

<span class="text-muted"># 2. Open new terminal window</span>
[INFO] Symlinked .zshrc -> ~/.zshrc
[INFO] Symlinked .config/nvim -> ~/.config/nvim
[INFO] Symlinked .tmux.conf -> ~/.tmux.conf
[SUCCESS] Developer environment ready in 0.018s</code></pre>
</div>
</div>
</div>
</div>
</section>

<!-- SECTION 5: QUESTIONS? ANSWERS. -->
<section class="my-5" aria-label="Frequently Asked Questions">
<div class="apple-faq-section">
<div class="apple-faq-header">
<h2 class="apple-faq-title">Questions? Answers.</h2>
<button type="button" class="apple-faq-expand-btn" id="faqExpandAllBtn" aria-expanded="false">
<span class="apple-faq-btn-text">Expand all</span>
<svg class="apple-faq-expand-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
</div>

<div class="apple-faq-list">
<details class="apple-faq-item">
<summary class="apple-faq-summary">
<span class="apple-faq-question">Will installing this overwrite my existing configurations?</span>
<span class="apple-faq-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
</summary>
<div class="apple-faq-body">
<p>No. The install script automatically backs up any existing `~/.zshrc`, `~/.gitconfig`, or `~/.config/nvim` files into a timestamped `~/.dotfiles_backup/` directory before symlinking.</p>
</div>
</details>

<details class="apple-faq-item">
<summary class="apple-faq-summary">
<span class="apple-faq-question">Does it work on Linux (Ubuntu, Debian, Arch)?</span>
<span class="apple-faq-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
</summary>
<div class="apple-faq-body">
<p>Yes. The shell, tmux, git, and Neovim configurations are 100% POSIX/Linux compatible. The installer detects the underlying OS and runs `apt`, `pacman`, or `brew` accordingly.</p>
</div>
</details>
</div>
</div>
</section>

<!-- SECTION 6: NEXT STEPS -->
<section class="card-surface p-4 p-md-5 my-5 text-center" aria-label="Conversion Next Steps">
<h2 class="h2 fw-bold text-headline mb-3">Supercharge Your Terminal Workflow</h2>
<p class="text-muted fs-5 mb-4 max-w-2xl mx-auto">Get started in minutes with the automated installer or browse individual configuration files:</p>
<div class="d-flex justify-content-center gap-3 flex-wrap">
<a href="/installation/index.html" class="btn-primary-quantum">Get Started (Install) →</a>
<a href="https://github.com/sebastienrousseau/dotfiles.github.io" target="_blank" rel="noopener noreferrer" class="btn-secondary-quantum">View on GitHub (Stars & Code) ↗</a>
<a href="/aliases/index.html" class="btn-secondary-quantum">Browse All Aliases</a>
</div>
</section>
