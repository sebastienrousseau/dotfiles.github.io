---
description: Les alias Rust sont des alias qui vous permettent de simplifier l'utilisation de la commande Rust.Rust est un langage de programmation qui permet de créer des programmes plus rapidement et plus efficacement.
lang: fr-FR
metaTitle: Les alias Rust - Dotfiles (FR)
permalink: /aliases/rust/

meta:
  - name: keywords
    content: alias, cargo, commandes, dotfiles, rsync, rust, rustup, shell, toolchain
  - name: twitter:card
    content: Les alias Rust sont des alias qui vous permettent de simplifier l'utilisation de la commande Rust.Rust est un langage de programmation qui permet de créer des programmes plus rapidement et plus efficacement.
  - name: twitter:description
    content: Les alias Rust sont des alias qui vous permettent de simplifier l'utilisation de la commande Rust.Rust est un langage de programmation qui permet de créer des programmes plus rapidement et plus efficacement.
  - name: twitter:title
    content: Les alias Rust - Dotfiles (FR)
  - name: og:title
    content: Les alias Rust - Dotfiles (FR)
  - name: og:description
    content: Les alias Rust sont des alias qui vous permettent de simplifier l'utilisation de la commande Rust.Rust est un langage de programmation qui permet de créer des programmes plus rapidement et plus efficacement.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias Rust

Le fichier `rust.aliases.sh` crée des raccourcis utiles pour travailler avec
[Rust](https://www.rust-lang.org/). Rust est un langage de programmation qui
permet de créer des programmes plus rapidement et plus efficacement.

Les alias Rust sont une collection d'alias qui vous permettent d'interagir avec
les commandes commandes `rustup` et `cargo`. Ils sont conçus pour être utilisés
avec le gestionnaire de chaîne d'outils `rustup` et le gestionnaire de paquets
`cargo`.

## Raccourcis Rust

| Alias | Command | Description |
| ----- | ----- | ----- |
| ru | `rustup update` | Met à jour Rust |
| rca | `rustup component add` | Ajoute un composant à Rust |
| rcl | `rustup component list` | Liste les composants de Rust |
| rcr | `rustup component remove` | Supprime un composant de Rust |
| rde | `rustup default` | Définit la version par défaut de Rust |
| rnn | `rustup run nightly` | Exécute une commande avec la version de Rust nightly |
| rns | `rustup run stable` | Exécute une commande avec la version de Rust stable |
| rtaa | `rustup target add` | Ajoute une cible à Rust |
| rtal | `rustup target list` | Liste les cibles de Rust |
| rtar | `rustup target remove` | Supprime une cible de Rust |
| rti | `rustup toolchain install` | Installe une chaîne d'outils de Rust |
| rtl | `rustup toolchain list` | Liste les chaînes d'outils de Rust |
| rtu | `rustup toolchain uninstall` | Désinstalle une chaîne d'outils de Rust |
| ruc | `rustup update nightly` | Met à jour Rust nightly |
| rus | `rustup update stable` | Met à jour Rust stable |

## Cargo

[Cargo](https://doc.rust-lang.org/cargo/) est le gestionnaire de paquets de
Rust. Il est utilisé pour construire, tester et empaqueter des projets Rust.
Cargo est inclus avec Rustup.

| Alias | Command | Description |
| ----- | ----- | ----- |
| cg | `cargo` | Exécute la commande Cargo |
| cgb | `cg  build` | Compile le projet |
| cgbh | `cg  bench` | Compile et exécute les tests de performance |
| cgbr | `cg  build --release` | Compile le projet en mode de sortie |
| cgc | `cg  check` | Vérifie le projet sans le compiler |
| cgcl | `cg  clean` | Supprime les fichiers de sortie du projet |
| cgcy | `cg  clippy` | Exécute Clippy sur le projet |
| cgd | `cg  doc --open` | Génère la documentation du projet et l'ouvre dans un navigateur |
| cgdr | `cg  doc --release` | Génère la documentation du projet en mode de sortie |
| cgf | `cg  fmt` | Formate le code source du projet |
| cgi | `cg  install` | Installe un exécutable du projet |
| cginit | `cg  init` | Crée un nouveau projet Cargo |
| cgn | `cg  new` | Crée un nouveau projet Cargo |
| cgp | `cg  publish` | Publie le projet sur crates.io |
| cgr | `cg  run` | Compile et exécute le projet |
| cgrr | `cg  run --release` | Compile et exécute le projet en mode de sortie |
| cgs | `cg  search` | Recherche un paquet sur crates.io |
| cgt | `cg  test` | Compile et exécute les tests du projet |
| cgtr | `cg  test --release` | Compile et exécute les tests du projet en mode de sortie |
| cgtt | `cg  tree` | Affiche l'arborescence des dépendances du projet |
| cgu | `cg  update` | Met à jour les dépendances du projet |
| cgun | `cg  uninstall` | Désinstalle un exécutable du projet |
