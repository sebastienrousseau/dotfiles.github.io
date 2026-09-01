---
name: "Dotfiles"
short_name: "dotfiles"
title: "Frequently Asked Questions (FAQ): Dotfiles"
description: "Answers to common questions about installation, package management, and customization."
keywords: "dotfiles FAQ, zsh questions"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "faqs"
permalink: "https://dotfiles.io/faqs/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Frequently Asked Questions

<div class="apple-faq-section my-4">
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
<span class="apple-faq-question">How do I add custom local configurations without merge conflicts?</span>
<span class="apple-faq-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
</summary>
<div class="apple-faq-body">
<p>Create a `~/.zshrc.local` file. The main `.zshrc` automatically sources this file if present, keeping your private environment variables and machine-specific aliases out of Git.</p>
</div>
</details>

<details class="apple-faq-item">
<summary class="apple-faq-summary">
<span class="apple-faq-question">How do I update the dotfiles repository?</span>
<span class="apple-faq-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
</summary>
<div class="apple-faq-body">
<p>Run `cd ~/.dotfiles && git pull && brew bundle` or use the alias `dotupdate`.</p>
</div>
</details>
</div>
</div>
