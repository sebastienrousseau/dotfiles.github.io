---
title: "Go Aliases: Streamline Your Go Development Workflow"
description: "Shell aliases for Go development. Run, build, test, and manage Go modules with simple shortcuts."
lang: en-GB
metaTitle: "Go Aliases | Dotfiles"
permalink: /aliases/go/
sidebar: true
meta:
  - name: keywords
    content: "go aliases, go shell shortcuts, go development, dotfiles, golang commands"
---

# Go Aliases

Streamline your Go development workflow with intuitive shell shortcuts.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overview

These aliases are defined in `go.aliases.sh` and are automatically loaded by chezmoi. They provide quick access to common Go commands for running, building, testing, and managing modules.

## Reference

| Alias    | Command       | Description                        |
|----------|---------------|------------------------------------|
| `go`     | `go`          | Go shortcut                        |
| `gor`    | `go run`      | Run Go program                     |
| `gob`    | `go build`    | Build Go package                   |
| `got`    | `go test`     | Run Go tests                       |
| `gomt`   | `go mod tidy` | Tidy Go module dependencies        |
| `goget`  | `go get`      | Download and install Go packages   |
