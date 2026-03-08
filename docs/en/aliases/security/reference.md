---
title: Security Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Security in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Security Reference Appendix | Dotfiles preview
canonical: /en/aliases/security/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Security Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/security/reference/
---

# Security Reference Appendix

## Source files

- `.chezmoitemplates/aliases/security/crypto-utils.aliases.sh`
- `.chezmoitemplates/aliases/security/gpg-crypto.aliases.sh`
- `.chezmoitemplates/aliases/security/gpg-keys.aliases.sh`
- `.chezmoitemplates/aliases/security/gpg-keyserver.aliases.sh`
- `.chezmoitemplates/aliases/security/gpg-trust.aliases.sh`
- `.chezmoitemplates/aliases/security/immutability.aliases.sh`
- `.chezmoitemplates/aliases/security/nmap-scanning.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-certs.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-connections.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-conversion.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-crypto.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-csr.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-keys.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-server.aliases.sh`
- `.chezmoitemplates/aliases/security/openssl-verification.aliases.sh`
- `.chezmoitemplates/aliases/security/security-audit.aliases.sh`
- `.chezmoitemplates/aliases/security/security.aliases.sh`
- `.chezmoitemplates/aliases/security/ssh-config.aliases.sh`
- `.chezmoitemplates/aliases/security/ssh-keys.aliases.sh`
- `.chezmoitemplates/aliases/security/ssh-tunnels.aliases.sh`
- `.chezmoitemplates/aliases/security/ufw-rules.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `ccc` | `ccrypt -c` |
| `ccd` | `ccrypt -d` |
| `cce` | `ccrypt -e` |
| `check-locks` | `bash $script_path check` |
| `f2b` | `sudo fail2ban-client` |
| `f2br` | `sudo fail2ban-client reload` |
| `f2bs` | `sudo fail2ban-client status` |
| `f2bsa` | `sudo fail2ban-client status all` |
| `f2bssh` | `sudo fail2ban-client status sshd` |
| `fwahttp` | `sudo ufw allow http` |
| `fwahttps` | `sudo ufw allow https` |
| `fwaimaps` | `sudo ufw allow imaps` |
| `fwamongo` | `sudo ufw allow 27017` |
| `fwamysql` | `sudo ufw allow mysql` |
| `fwapop3s` | `sudo ufw allow pop3s` |
| `fwaredis` | `sudo ufw allow 6379` |
| `fwasftp` | `sudo ufw allow sftp` |
| `fwasmtp` | `sudo ufw allow smtp` |
| `fwassh` | `sudo ufw allow ssh` |
| `fwda` | `sudo ufw default allow outgoing` |
| `fwdis` | `sudo ufw disable` |
| `fwds` | `sudo ufw default deny incoming` |
| `fwdssh` | `sudo ufw deny ssh` |
| `fwe` | `sudo ufw enable` |
| `fwreset` | `sudo ufw reset` |
| `fws` | `sudo ufw status` |
| `fwsn` | `sudo ufw status numbered` |
| `fwsv` | `sudo ufw status verbose` |
| `gpgcheck` | `gpg --check-signatures` |
| `gpgclear` | `gpg --clearsign` |
| `gpgdec` | `gpg --decrypt` |
| `gpgdecfiles` | `gpg --decrypt-files` |
| `gpgdel` | `gpg --delete-key` |
| `gpgdels` | `gpg --delete-secret-key` |
| `gpgdetach` | `gpg --detach-sign` |
| `gpgdetacha` | `gpg --detach-sign --armor` |
| `gpgexport` | `gpg --export --armor` |
| `gpgexports` | `gpg --export-secret-keys --armor` |
| `gpgfp` | `gpg --fingerprint` |
| `gpggen` | `gpg --full-generate-key` |
| `gpgimp` | `gpg --import` |
| `gpgk` | `gpg --list-keys` |
| `gpgka` | `gpg --list-keys --with-colons` |
| `gpgkrefresh` | `gpg --keyserver hkps://keys.openpgp.org --refresh-keys` |
| `gpgks` | `gpg --list-secret-keys` |
| `gpgksa` | `gpg --list-secret-keys --with-colons` |
| `gpgminexp` | `gpg --export-options export-minimal --export` |
| `gpgrenew` | `gpg --edit-key` |
| `gpgsearch` | `gpg --search-keys` |
| `gpgserver` | `gpg --keyserver hkps://keys.openpgp.org` |
| `gpgsig` | `gpg --list-signatures` |
| `gpgsign` | `gpg --sign` |
| `gpgsym` | `gpg --symmetric` |
| `gpgver` | `gpg --version` |
| `gpgverify` | `gpg --verify` |
| `gpgverifyf` | `gpg --verify-files` |
| `lock-configs` | `bash $script_path lock` |
| `lyna` | `sudo lynis audit system` |
| `lynr` | `sudo lynis show reports` |
| `lyns` | `sudo lynis update info` |
| `lynsu` | `sudo lynis update release` |
| `md5` | `dot_hash_md5` |
| `pwgen12` | `pwgen -s 12 1` |
| `pwgen16` | `pwgen -s 16 1` |
| `pwgen20` | `pwgen -s 20 1` |
| `pwgen32` | `pwgen -s 32 1` |
| `pwgen64` | `pwgen -s 64 1` |
| `pwgen8` | `pwgen -s 8 1` |
| `sha1` | `dot_hash_sha1` |
| `sha256` | `dot_hash_sha256` |
| `sha512` | `dot_hash_sha512` |
| `sshagent` | `eval "$(ssh-agent -s)" && ssh-add` |
| `sshagentdel` | `ssh-add -d` |
| `sshagentdelall` | `ssh-add -D` |
| `sshagentls` | `ssh-add -l` |
| `sshcheck` | `ssh -T git@github.com` |
| `sshconfig` | `cat ~/.ssh/config` |
| `sshedit` | `${EDITOR:-vi} ~/.ssh/config` |
| `sshkeyaudit` | `'ssh-audit' # 3rd-party tool` |
| `sshkeycp` | `ssh-copy-id` |
| `sshkeylist` | `ls -la ~/.ssh` |
| `sshls` | `grep "^Host " ~/.ssh/config \| sed "s/Host //"` |
| `sshscan` | `nmap -p 22 --script ssh-auth-methods` |
| `sshv` | `ssh -v` |
| `sshvv` | `ssh -vv` |
| `sshvvv` | `ssh -vvv` |
| `ssl` | `'openssl'          # OpenSSL shortcut` |
| `sslhelp` | `'openssl help' # Show OpenSSL help` |
| `sslmd5` | `'openssl dgst -md5' # Not recommended for security` |
| `sslreq` | `openssl req` |
| `sslsha1` | `openssl dgst -sha1` |
| `sslsha256` | `openssl dgst -sha256` |
| `sslsha384` | `openssl dgst -sha384` |
| `sslsha512` | `openssl dgst -sha512` |
| `sslspeed` | `openssl speed` |
| `sslv` | `'openssl version' # Show OpenSSL version` |
| `sslx509` | `'openssl x509' # X.509 certificate utility` |
| `unlock-configs` | `bash $script_path unlock` |

## Helper functions

- `fwallow()`
- `fwallowproto()`
- `fwdelete()`
- `fwdeln()`
- `fwdeny()`
- `fwdenyproto()`
- `fwlog()`
- `gpgclean()`
- `gpgencrypt()`
- `gpgesign()`
- `gpgkrecv()`
- `gpgksend()`
- `gpgtrust()`
- `nmscript()`
- `sshfp()`
- `sshfpsha256()`
- `sshkeyed25519()`
- `sshkeyrsa()`
- `sshtund()`
- `sshtunl()`
- `sshtunnel()`
- `sshtunr()`
- `sslaesdec()`
- `sslaesenc()`
- `sslca()`
- `sslciphers()`
- `sslconnect()`
- `sslconnectsni()`
- `sslcrl()`
- `ssldec()`
- `ssldigest()`
- `sslecparam()`
- `sslenc()`
- `sslgenpkey()`
- `sslgenrsa()`
- `sslpkcs12()`
- `sslpkcs12extract()`
- `sslpkcs8()`
- `sslpkey()`
- `sslprotocol()`
- `sslrand()`
- `sslrandbase64()`
- `sslrandhex()`
- `sslrandraw()`
- `sslreqinfo()`
- `sslreqnew()`
- `sslreqverify()`
- `sslrsa()`
- `sslrsainfo()`
- `sslrsapub()`
- `sslserver()`
- `sslshowcerts()`
- `sslverify()`
- `sslverifycapath()`
- `sslx509check()`
- `sslx509dates()`
- `sslx509extract()`
- `sslx509fp()`
- `sslx509info()`
- `sslx509issuer()`
- `sslx509subject()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
