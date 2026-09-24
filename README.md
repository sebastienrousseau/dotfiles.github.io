# dotfiles.io

The source of [dotfiles.io](https://dotfiles.io), the product site for
[.dotfiles](https://github.com/sebastienrousseau/dotfiles): chezmoi-managed
dotfiles for macOS, Linux, WSL and PowerShell. The full documentation lives
at [doc.dotfiles.io](https://doc.dotfiles.io/), built from the main
repository's `docs/`.

## Build

The site is built with [ssg](https://static-site-generator.com/) 0.0.63 or
later and the vendored Voxt theme in `_layouts/`.

```bash
cargo install ssg --locked   # or put an ssg release binary on PATH
make build                   # into _site/, with link and origin checks
make serve                   # build, then http://127.0.0.1:8000/
make validate                # build, then html-validate (needs npx)
```

`scripts/build-site.py` merges the site-wide fields into each page in
`content/`, runs ssg, and fails if an internal link is broken or a page
references a third-party origin.

## Deploy

`.github/workflows/pages.yml` builds and validates every pull request and
deploys `main` to GitHub Pages with a pinned, checksum-verified ssg.

## Layout

| Path | Contents |
|------|----------|
| `content/` | Page sources: home, privacy, accessibility, 404 |
| `_layouts/` | The Voxt theme: layouts, CSS, scripts, logo, favicon |
| `scripts/build-site.py` | Build and checks (Python standard library only) |
| `CNAME` | The custom domain, `dotfiles.io` |

## Licence

Apache-2.0 OR MIT, at your choice.
