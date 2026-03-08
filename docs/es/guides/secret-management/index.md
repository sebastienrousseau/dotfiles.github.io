---
title: Mejores prácticas de gestión de secretos | Dotfiles
description: Cómo gestionar de forma segura secretos, claves API y credenciales en tus dotfiles usando age, SOPS y 1Password CLI.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Mejores prácticas de gestión de secretos preview
canonical: /es/guides/secret-management/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gestión de secretos
pageType: article
schemaType: TechArticle
permalink: /es/guides/secret-management/
---

# Mejores prácticas de gestión de secretos

Mantén los secretos fuera de tu repositorio de dotfiles. Esta guía cubre tres métodos probados para gestionar credenciales de forma segura con Chezmoi.

## Por qué esto importa

Los repositorios de dotfiles suelen ser públicos. Una sola clave API, token o contraseña comprometida puede provocar:

- **Compromiso de cuenta** en minutos tras el push.
- **Abuso de facturación en la nube** por credenciales filtradas.
- **Ataques a la cadena de suministro** cuando se exponen tokens de CI.

## Reglas de oro

1. **Nunca almacenes secretos en texto plano en el control de versiones.**
2. **Cifrado en reposo** — usa age, SOPS o un gestor de secretos.
3. **Verifica antes de cada commit** — automatiza con hooks pre-commit.

## Método 1: Chezmoi + age (Recomendado)

age es una herramienta de cifrado de archivos simple y moderna. Chezmoi tiene integración nativa.

### Configuración

```bash
# Install age
brew install age    # macOS
sudo apt install age  # Ubuntu

# Generate a key pair
age-keygen -o ~/.config/chezmoi/key.txt

# Tell Chezmoi to use it
chezmoi edit-config
```

Añade a `~/.config/chezmoi/chezmoi.toml`:

```toml
encryption = "age"

[age]
identity = "~/.config/chezmoi/key.txt"
recipient = "age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Cifrar un archivo

```bash
# Add a secret file as encrypted
chezmoi add --encrypt ~/.config/gh/hosts.yml

# The file is stored encrypted in the source directory
cat "$(chezmoi source-path)/encrypted_dot_config/gh/hosts.yml.age"
```

### Secretos en plantillas

```bash
# Use Chezmoi templates for inline secrets
chezmoi edit ~/.bashrc
```

```text
export GITHUB_TOKEN="{{ (bitwarden "github-token").notes }}"
export AWS_ACCESS_KEY_ID="{{ pass "aws/access-key-id" }}"
```

## Método 2: Chezmoi + SOPS

SOPS (Secrets OPerationS) cifra claves específicas en archivos YAML/JSON, manteniendo la estructura visible.

### Configuración

```bash
# Install SOPS
brew install sops   # macOS
sudo apt install sops  # Ubuntu

# Create a SOPS config
cat > .sops.yaml << 'EOF'
creation_rules:
  - age: >-
      age1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

### Cifrar

```bash
# Create a secrets file
cat > chezmoi-data.yaml << 'EOF'
github_token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
aws_key: AKIAIOSFODNN7EXAMPLE
EOF

# Encrypt with SOPS
sops --encrypt --in-place chezmoi-data.yaml
```

### Uso en plantillas

Añade a `chezmoi.toml`:

```toml
[data]
[data.secrets]
source = "sops"
path = "chezmoi-data.yaml"
```

## Método 3: 1Password CLI

1Password CLI (`op`) recupera secretos en tiempo de aplicación sin almacenarlos localmente.

### Configuración

```bash
# Install 1Password CLI
brew install --cask 1password-cli   # macOS

# Sign in
op signin
```

### Uso en plantillas de Chezmoi

```text
export GITHUB_TOKEN="{{ onepasswordRead "op://Private/GitHub Token/credential" }}"
export NPM_TOKEN="{{ onepasswordRead "op://Development/npm/token" }}"
```

### Ventajas

- Los secretos nunca tocan el disco sin cifrar.
- Compartición en equipo a través de bóvedas de 1Password.
- Soporte de rotación automática.

## Red de seguridad pre-commit

### git-secrets

```bash
# Install
brew install git-secrets  # macOS
sudo apt install git-secrets  # Ubuntu

# Configure for your repo
git secrets --install
git secrets --register-aws

# Add custom patterns
git secrets --add 'ghp_[A-Za-z0-9_]{36}'
git secrets --add 'sk-[A-Za-z0-9]{48}'
```

### .gitignore

Excluye siempre las rutas sensibles:

```text
# Secrets - never commit
*.age
*.enc
*.key
.sops.yaml
chezmoi-data.yaml
key.txt
```

### .chezmoiignore

Evita que Chezmoi gestione archivos sensibles:

```text
.ssh/id_*
.gnupg/
.config/chezmoi/key.txt
```

## Lista de verificación de auditoría

- [ ] Sin secretos en texto plano en el estado fuente: `chezmoi archive | tar -tf - | grep -v '.age'`
- [ ] La clave age **no** está comprometida: `git ls-files | grep key.txt` no devuelve nada
- [ ] El hook git-secrets está activo: `git secrets --scan`
- [ ] `.gitignore` cubre `*.age`, `*.key`, `.sops.yaml`
- [ ] `dot doctor` pasa sin advertencias
- [ ] Los archivos cifrados con SOPS se descifran correctamente: `sops --decrypt chezmoi-data.yaml`

## Probado en

| Plataforma | age | SOPS | 1Password CLI |
|----------|:---:|:----:|:---:|
| macOS Sonoma+ | ✅ | ✅ | ✅ |
| Ubuntu 24.04 | ✅ | ✅ | ✅ |
| WSL2 (Ubuntu) | ✅ | ✅ | ⚠️ |

## Relacionado

- [Acerca de](/es/about/)
- [Matriz de compatibilidad](/es/compatibility/)
- [Alias de seguridad](/es/aliases/security/)
