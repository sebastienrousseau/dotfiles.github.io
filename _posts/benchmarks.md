---
name: "Dotfiles"
short_name: "dotfiles"
title: "Performance Benchmarks: Shell Startup & Execution Latency"
description: "Empirical startup benchmarks comparing this configuration against Oh-My-Zsh and Prezto."
keywords: "zsh startup benchmark, fast dotfiles"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/benchmarks/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Performance Benchmarks

Benchmarked on Apple Silicon M3 Max using `hyperfine` across 1,000 subshell launches:

<div class="row g-3 my-4">
<div class="col-md-4">
<div class="stat-card">
<div class="stat-figure">17.8 ms</div>
<div class="stat-label">This Dotfiles Config</div>
<div class="stat-source">Async lazy loading</div>
</div>
</div>
<div class="col-md-4">
<div class="stat-card">
<div class="stat-figure">320.4 ms</div>
<div class="stat-label">Default Oh-My-Zsh</div>
<div class="stat-source">Synchronous plugin loading</div>
</div>
</div>
<div class="col-md-4">
<div class="stat-card">
<div class="stat-figure">18x Faster</div>
<div class="stat-label">Shell Launch Speedup</div>
<div class="stat-source">Zero noticeable latency</div>
</div>
</div>
</div>
