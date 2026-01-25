---
title: "Dig Aliases: DNS Lookup Shortcuts for the Terminal"
description: "Simplify DNS queries with dig aliases. Look up IPv4, IPv6, and DNS records faster using these shell shortcuts."
lang: en-GB
metaTitle: "Dig Aliases | Dotfiles"
permalink: /aliases/dig/
sidebar: true
meta:
  - name: keywords
    content: "dig aliases, dns lookup, shell aliases, dotfiles, ipv4 lookup, ipv6 lookup"
  - name: twitter:card
    content: "Simplify DNS queries with dig aliases. Look up IPv4, IPv6, and DNS records faster using these shell shortcuts."
  - name: twitter:description
    content: "Simplify DNS queries with dig aliases. Look up IPv4, IPv6, and DNS records faster using these shell shortcuts."
  - name: twitter:title
    content: "Dig Aliases | Dotfiles"
  - name: og:title
    content: "Dig Aliases | Dotfiles"
  - name: og:description
    content: "Simplify DNS queries with dig aliases. Look up IPv4, IPv6, and DNS records faster using these shell shortcuts."
  - name: og:image:alt
    content: "Dotfiles - Simply designed to fit your shell life"
  - name: og:locale
    content: en_GB
---

# Dig Aliases

Streamline DNS lookups with a concise set of shell aliases.

## Overview

These aliases simplify working with DNS (Domain Name System) queries using the `dig` command on Unix-based systems. Defined in `dig.aliases.sh`, they are automatically loaded by chezmoi as part of the Universal Dotfiles configuration.

## Reference

The following table lists all available dig aliases and their functions.

| Alias  | Description                                |
|--------|--------------------------------------------|
| `d`    | Runs the dig command with default options  |
| `d4`   | Performs a DNS lookup for an IPv4 address  |
| `d6`   | Performs a DNS lookup for an IPv6 address  |
| `dga`  | Performs a DNS lookup for all records      |
| `dgs`  | Performs a DNS lookup for a short answer   |
| `digg` | Performs a dig query using Google DNS      |
| `ip4`  | Retrieves your public IPv4 address         |
| `ip6`  | Retrieves your public IPv6 address         |
| `ips`  | Retrieves your public IPv4 and IPv6 addresses |
| `wip`  | Retrieves your public IP address           |
