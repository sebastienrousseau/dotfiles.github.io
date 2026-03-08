---
title: Python Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Python in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Python Reference Appendix | Dotfiles preview
canonical: /en/aliases/python/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Python Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/python/reference/
---

# Python Reference Appendix

## Source files

- `.chezmoitemplates/aliases/python/python.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `black` | `'python -m black' # Code formatting with black` |
| `deact` | `'deactivate'                     # Deactivate venv` |
| `ipy` | `'ipython'           # Interactive Python shell` |
| `lint` | `'pylint'           # Code linting` |
| `mkvenv` | `'python -m venv .venv'          # Create .venv in current directory` |
| `mkvenvlocal` | `'python -m venv ./venv'    # Create ./venv in current directory` |
| `mypy` | `'python -m mypy'   # Static type checking` |
| `pep8` | `'autopep8'         # Code formatting` |
| `pipf` | `'pip freeze'                      # Show frozen requirements` |
| `pipi` | `'pip install'                     # Install packages` |
| `pipl` | `'pip list'                        # List installed packages` |
| `pipout` | `'pip freeze > requirements.txt' # Save requirements` |
| `pipr` | `'pip install -r'                  # Install from requirements` |
| `pipun` | `'pip uninstall -y'               # Uninstall packages` |
| `pipup` | `'pip install --upgrade'          # Upgrade packages` |
| `py` | `'python'             # Quick Python access` |
| `pydoc` | `'python -m pydoc' # Python documentation` |
| `pytest` | `'python -m pytest'     # Run tests` |
| `pytestc` | `'pytest --cov'        # Test coverage` |
| `pytestv` | `'pytest -v'           # Verbose test output` |
| `pyv` | `'python --version'  # Show Python version` |
| `rf` | `'ruff check --fix'   # Ruff auto-fix lint pass` |
| `rfmt` | `'ruff format'      # Ruff formatter` |
| `rmpyall` | `"find . -type f -name '*.py[cod]' -delete && find . -type d -name __pycache__ -delete" # Remove all` |
| `rmpyc` | `"find . -type f -name '*.pyc' -delete"                                                   # Remove .pyc files` |
| `rmpyo` | `"find . -type f -name '*.pyo' -delete"                                                   # Remove .pyo files` |
| `rmvenv` | `'rm -rf ./venv'                 # Remove venv` |
| `ruff` | `'python -m ruff'   # Fast Python linter` |
| `unittest` | `'python -m unittest' # Run unittest` |
| `uva` | `uv add` |
| `uvc` | `uv pip compile` |
| `uvi` | `uv init` |
| `uvl` | `uv lock` |
| `uvp` | `uv pip` |
| `uvpi` | `uv pip install` |
| `uvr` | `uv run` |
| `uvra` | `uv run --all` |
| `uvs` | `uv sync` |
| `uvsa` | `source .venv/bin/activate` |
| `uvt` | `uv tree` |
| `uvv` | `uv venv` |
| `venv` | `'python -m venv'                  # Create virtual environment` |
| `venva` | `'source ./.venv/bin/activate'    # Activate .venv` |
| `venvlocal` | `'source ./venv/bin/activate' # Activate ./venv` |

## Helper functions

- `pip()`
- `python()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
