# SPDX-License-Identifier: Apache-2.0 OR MIT
.PHONY: all build serve validate clean help

all: build

help:
	@echo "make build     Build dotfiles.io with ssg and the Voxt theme into _site/"
	@echo "make serve     Build, then serve at http://127.0.0.1:8000/"
	@echo "make validate  Build, then validate the HTML (needs npx)"
	@echo "make clean     Remove _site/"

build:
	python3 scripts/build-site.py

serve:
	python3 scripts/build-site.py --serve 8000

validate: build
	npx --yes html-validate@10 --config .htmlvalidate.json "_site/**/*.html"

clean:
	rm -rf _site
