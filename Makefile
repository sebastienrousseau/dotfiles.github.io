# SPDX-License-Identifier: Apache-2.0 OR MIT
# Semantic Version: v0.0.1
.PHONY: all build serve audit test contrast validate compress prune clean help

all: build

help:
	@echo "Available Makefile targets:"
	@echo "  make build      - Build the site with ssg and the Voxt theme into _site/"
	@echo "  make serve      - Build, then serve at http://127.0.0.1:8000/"
	@echo "  make audit      - Run WCAG 2.2 AAA and regression tests"
	@echo "  make contrast   - Verify color tokens against WCAG 2.2 AAA math ratios"
	@echo "  make validate   - Validate Markdown frontmatter schema integrity"
	@echo "  make clean      - Remove build artifacts and temporary files"

build: ## Build dotfiles.io with ssg and the Voxt theme into _site/
	python3 scripts/build-site.py

serve: ## Build, then serve at http://127.0.0.1:8000/
	python3 scripts/build-site.py --serve 8000

audit: contrast validate
	@/usr/bin/python3 scripts/regression-test.py

contrast:
	@/usr/bin/python3 scripts/audit-contrast.py

validate:
	@/usr/bin/python3 scripts/validate-frontmatter.py

clean:
	@rm -rf public docs dist .cache coverage *.log
	@echo "Workspace cleaned."
