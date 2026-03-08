---
title: Go Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Go in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Go Reference Appendix | Dotfiles preview
canonical: /en/aliases/go/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Go Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/go/reference/
---

# Go Reference Appendix

## Source files

- `.chezmoitemplates/aliases/go/go.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `gob` | `go build` |
| `gocv` | `go coverage` |
| `gofmt` | `go fmt` |
| `goget` | `go get` |
| `goinstall` | `go install` |
| `gom` | `go mod tidy` |
| `gomod` | `go mod` |
| `gomv` | `go mod vendor` |
| `gor` | `go run` |
| `got` | `go test` |
| `gota` | `go test ./...` |
| `govet` | `go vet` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
