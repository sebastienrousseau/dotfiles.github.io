---
description: The Dig aliases, allow to query information about various DNS records, including host addresses, mail exchanges, and name servers.
lang: en-GB
metaTitle: Dig aliases - Dotfiles (UK)
permalink: /aliases/dig/

meta:
  - name: twitter:card
    content: The Dig aliases, allow to query information about various DNS records, including host addresses, mail exchanges, and name servers.
  - name: twitter:description
    content: The Dig aliases, allow to query information about various DNS records, including host addresses, mail exchanges, and name servers.
  - name: twitter:title
    content: Dig aliases - Dotfiles (UK)
  - name: og:title
    content: Dig aliases - Dotfiles (UK)
  - name: og:description
    content: The Dig aliases, allow to query information about various DNS records, including host addresses, mail exchanges, and name servers.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Dig aliases

The `dig.aliases.sh` file creates helpful shortcut aliases for the `dig`
command.

The `dig` (domain information groper) is a flexible tool for interrogating DNS
name servers. It performs DNS lookups and displays the answers that are returned
from the name server(s) that were queried. It is mostly used to troubleshoot DNS
issues and to find information about a domain such the IP address.

## Dig

[Dig](https://en.wikipedia.org/wiki/Dig_(command)) is a command that performs
DNS lookups and displays the answers that are returned from the name server(s)
that were queried.

| Alias | Command | Description |
| ----- | ----- | ----- |
| d | `$(which dig)` | Run the dig command with the default options. |
| d4 | `$(which dig) +short -4` | Perform a DNS lookup for an IPv4 address. |
| d6 | `$(which dig) +short -6` | Perform a DNS lookup for an IPv6 address. |
| dga | `$(which dig) +all ANY` | Perform a DNS lookup for all records. |
| dgs | `$(which dig) +short` | Perform a DNS lookup for a short answer. |
| digg | `$(which dig) @8.8.8.8 +nocmd any +multiline +noall +answer` | Dig with Google's DNS. |
| ip4 | `$(which dig) +short myip.opendns.com @resolver1.opendns.com -4` | Get your public IPv4 address. |
| ip6 | `$(which dig) -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` | Get your public IPv6 address. |
| ips | `ip4; ip6` | Get your public IPv4 and IPv6 addresses. |
| wip | `$(which dig) +short myip.opendns.com @resolver1.opendns.com` | Get your public IP address. |
