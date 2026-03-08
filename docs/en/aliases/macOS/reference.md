---
title: macOS Reference Appendix | Dotfiles
description: Complete alias and helper function reference for macOS in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: macOS Reference Appendix | Dotfiles preview
canonical: /en/aliases/macOS/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: macOS Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/macOS/reference/
---

# macOS Reference Appendix

## Source files

- `.chezmoitemplates/aliases/macOS/macos.aliases.sh`
- `.chezmoitemplates/aliases/macOS/vscode.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `cleanup_dsstore` | `find . -type f -name "*.DS_Store" -ls -delete` |
| `cleanup_ls` | `` |
| `code` | `/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code` |
| `desktop_hide` | `defaults write com.apple.finder CreateDesktop false; killall Finder` |
| `desktop_show` | `defaults write com.apple.finder CreateDesktop true; killall Finder` |
| `finder_hide` | `defaults write com.apple.finder ShowAllFiles FALSE; killall Finder` |
| `finder_show` | `defaults write com.apple.finder ShowAllFiles TRUE; killall Finder` |
| `iphone` | `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app` |
| `lockscreen` | `/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend` |
| `no_network_ds` | `defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true` |
| `ofd` | `open $PWD` |
| `safari_safe` | `open -a Safari --args -safe-mode` |
| `screensaver` | `/System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine -background` |
| `verify_perms` | `diskutil verifyPermissions /` |
| `verify_volume` | `diskutil verifyVolume /` |
| `wifi_off` | `networksetup -setairportpower en0 off` |
| `wifi_on` | `networksetup -setairportpower en0 on` |
| `xcode` | `open -a Xcode` |

## Helper functions

- `emptytrash()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
