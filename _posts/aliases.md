---
name: "Dotfiles"
short_name: "dotfiles"
title: "Developer Aliases & Productivity Functions"
description: "Comprehensive list of shell aliases and utility functions for Rust, Docker, Git, and Kubernetes."
keywords: "zsh aliases, git aliases, modern cli replacements"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/aliases/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Developer Aliases & Modern CLI Replacements

<div class="table-responsive my-4">
<table class="table table-dark table-striped">
<thead>
<tr>
<th>Alias</th>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ls</code></td>
<td><code>eza --icons --group-directories-first</code></td>
<td>Modern colorized listing with icons</td>
</tr>
<tr>
<td><code>cat</code></td>
<td><code>bat --paging=never</code></td>
<td>Syntax-highlighted file viewing</td>
</tr>
<tr>
<td><code>find</code></td>
<td><code>fd</code></td>
<td>Fast multi-threaded file search</td>
</tr>
<tr>
<td><code>grep</code></td>
<td><code>rg -S</code></td>
<td>Smart-case ripgrep search</td>
</tr>
<tr>
<td><code>cd</code></td>
<td><code>z</code> (zoxide)</td>
<td>Fuzzy directory jumping</td>
</tr>
<tr>
<td><code>gprune</code></td>
<td><code>git fetch -p && git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D</code></td>
<td>Clean merged remote branches</td>
</tr>
</tbody>
</table>
</div>
