import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const DOTFILES_ROOT = process.env.DOTFILES_ROOT || path.join(os.homedir(), '.dotfiles')
const EN_DOCS_ROOT = path.resolve('docs/en')
const ALIASES_ROOT = path.join(DOTFILES_ROOT, '.chezmoitemplates/aliases')
const FUNCTIONS_ROOT = path.join(DOTFILES_ROOT, '.chezmoitemplates/functions')
const PATHS_FILE = path.join(DOTFILES_ROOT, 'dot_config/shell/00-core-paths.sh.tmpl')
const VERSION = 'v0.2.495'

const categoryDescriptions = {
  ai: 'Short AI command names.',
  archives: 'Short archive command names.',
  cd: 'Short folder move commands.',
  chmod: 'Short permission commands.',
  clear: 'Short screen clear commands.',
  compliance: 'Short compliance commands.',
  configuration: 'Short config commands.',
  default: 'Main daily shell aliases.',
  diagnostics: 'Short health check commands.',
  dig: 'Short DNS query commands.',
  'disk-usage': 'Short disk usage commands.',
  docker: 'Short Docker command names.',
  editor: 'Short edit commands.',
  find: 'Short file search commands.',
  fonts: 'Short font cache commands.',
  gcloud: 'Short gcloud commands.',
  git: 'Short Git commands.',
  gnu: 'Short GNU utility commands.',
  go: 'Short Go tool commands.',
  heroku: 'Short Heroku commands.',
  installer: 'Short install commands.',
  interactive: 'Short interactive shell commands.',
  kubernetes: 'Short kubectl and Helm commands.',
  legal: 'Short legal check commands.',
  lua: 'Short Lua commands.',
  macOS: 'Short macOS commands.',
  make: 'Short make commands.',
  mkdir: 'Short folder create commands.',
  modern: 'Short modern tool commands.',
  npm: 'Short npm commands.',
  permission: 'Short permission and owner commands.',
  pnpm: 'Short pnpm commands.',
  ps: 'Short process list commands.',
  python: 'Short Python commands.',
  rsync: 'Short sync commands.',
  rust: 'Short Rust commands.',
  security: 'Short security commands.',
  subversion: 'Short SVN commands.',
  sudo: 'Short sudo commands.',
  terraform: 'Short Terraform commands.',
  tmux: 'Short tmux commands.',
  update: 'Short update commands.',
  uuid: 'Short UUID commands.',
  wget: 'Short download commands.',
  yarn: 'Short Yarn commands.',
}

function titleCaseCategory(value) {
  const map = { ai: 'AI', npm: 'NPM', pnpm: 'PNPM', ps: 'PS', uuid: 'UUID', macOS: 'macOS' }
  if (map[value]) return map[value]
  return value
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
}

function walk(dir, ext = null, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p, ext, files)
    else if (!ext || p.endsWith(ext)) files.push(p)
  }
  return files
}

function parseAliases(fileContent) {
  const out = []
  for (const line of fileContent.split('\n')) {
    const m = line.match(/^\s*alias\s+([A-Za-z0-9:_-]+)=(.+)$/)
    if (!m) continue
    let command = m[2].trim()
    if ((command.startsWith("'") && command.endsWith("'")) || (command.startsWith('"') && command.endsWith('"'))) {
      command = command.slice(1, -1)
    }
    out.push({ alias: m[1], command })
  }
  return out
}

function parseFunctions(fileContent) {
  const out = []
  for (const line of fileContent.split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_-]*)\s*\(\)\s*\{/)
    if (!m) continue
    const name = m[1]
    if (name.startsWith('_') || name.includes('_')) continue
    out.push(name)
  }
  return out
}

function escapeInlineCode(value) {
  return value.replace(/`/g, '\\`').replace(/\{\{/g, '\\{\\{').replace(/\}\}/g, '\\}\\}')
}

function frontmatterBlock(meta) {
  const ordered = [
    ['title', meta.title],
    ['description', meta.description],
    ['lang', 'en-GB'],
    ['author', 'Sebastien Rousseau'],
    ['lastUpdated', 'true'],
    ['image', '/logo.png'],
    ['imageAlt', meta.imageAlt || `${meta.title} preview`],
    ['canonical', meta.canonical],
    ['robots', 'index, follow'],
    ['draft', 'false'],
    ['noindex', 'false'],
    ['sitemap', 'true'],
    ['breadcrumbTitle', meta.breadcrumbTitle || meta.title.replace(/\s+\|\s+Dotfiles$/, '')],
    ['pageType', 'docs'],
    ['schemaType', 'WebPage'],
    ['permalink', meta.canonical],
  ]
  return `---\n${ordered.map(([k, v]) => `${k}: ${v}`).join('\n')}\n---\n`
}

function buildOverviewPage(category, aliases, helperFunctions, relSources) {
  const pretty = titleCaseCategory(category)
  const description = categoryDescriptions[category] || 'Use these aliases for this tool category.'
  const topAliases = aliases.slice(0, 12)
  const lines = []
  lines.push(
    frontmatterBlock({
      title: `${pretty} Aliases | Dotfiles`,
      description: `${description} Overview for Dotfiles ${VERSION}.`,
      canonical: `/en/aliases/${category}/`,
      breadcrumbTitle: `${pretty} Aliases`,
    }).trimEnd()
  )
  lines.push('')
  lines.push(`# ${pretty} Aliases`)
  lines.push('')
  lines.push(description)
  lines.push('')
  lines.push('This page introduces one alias group and its common command shortcuts.')
  lines.push('Read it first to understand naming conventions, expected inputs, and safe execution patterns.')
  lines.push('Then open the reference appendix for the complete command inventory and exact syntax.')
  lines.push('These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.')
  lines.push('')
  lines.push('## When to use')
  lines.push('')
  lines.push('Use this page before daily shell work when you need predictable command patterns.')
  lines.push('')
  lines.push('## What is included')
  lines.push('')
  lines.push(`- Aliases: ${aliases.length}`)
  lines.push(`- Helper functions: ${helperFunctions.length}`)
  lines.push(`- Source files: ${relSources.length}`)
  lines.push('')
  lines.push('## Quick examples')
  lines.push('')
  if (topAliases.length === 0) {
    lines.push('No alias examples are available for this category.')
  } else {
    for (const item of topAliases) lines.push(`- \`${escapeInlineCode(item.alias)}\` → \`${escapeInlineCode(item.command)}\``)
  }
  lines.push('')
  lines.push('## Next step')
  lines.push('')
  lines.push('Open the full list:')
  lines.push('')
  lines.push(`- [${pretty} Reference Appendix](./reference.md)`)
  lines.push('')
  return `${lines.join('\n').trim()}\n`
}

function buildReferencePage(category, aliases, helperFunctions, relSources) {
  const pretty = titleCaseCategory(category)
  const lines = []
  lines.push(
    frontmatterBlock({
      title: `${pretty} Reference Appendix | Dotfiles`,
      description: `Complete alias and helper function reference for ${pretty} in Dotfiles ${VERSION}.`,
      canonical: `/en/aliases/${category}/reference/`,
      breadcrumbTitle: `${pretty} Reference`,
    }).trimEnd()
  )
  lines.push('')
  lines.push(`# ${pretty} Reference Appendix`)
  lines.push('')
  lines.push('## Source files')
  lines.push('')
  for (const src of relSources) lines.push(`- \`${src}\``)
  lines.push('')
  lines.push('## Alias reference')
  lines.push('')
  if (aliases.length === 0) {
    lines.push('No aliases are currently defined for this category.')
  } else {
    lines.push('| Alias | Command |')
    lines.push('| :--- | :--- |')
    for (const item of aliases) {
      lines.push(`| \`${escapeInlineCode(item.alias)}\` | \`${escapeInlineCode(item.command.replace(/\|/g, '\\|'))}\` |`)
    }
  }
  if (helperFunctions.length > 0) {
    lines.push('')
    lines.push('## Helper functions')
    lines.push('')
    for (const fn of helperFunctions) lines.push(`- \`${escapeInlineCode(fn)}()\``)
  }
  lines.push('')
  lines.push('## Validation')
  lines.push('')
  lines.push('- Run `chezmoi apply` after alias updates.')
  lines.push('- Run `dot doctor` to validate your shell state.')
  lines.push('')
  return `${lines.join('\n').trim()}\n`
}

function updateAliasCategoryPages(category) {
  const categoryDir = path.join(ALIASES_ROOT, category)
  const aliasFiles = walk(categoryDir, '.aliases.sh').sort()
  const aliases = []
  const helperFunctions = []
  for (const file of aliasFiles) {
    const raw = fs.readFileSync(file, 'utf8')
    aliases.push(...parseAliases(raw))
    helperFunctions.push(...parseFunctions(raw))
  }
  aliases.sort((a, b) => a.alias.localeCompare(b.alias))
  const uniqueHelpers = [...new Set(helperFunctions)].sort((a, b) => a.localeCompare(b))
  const relSources = aliasFiles.map((f) => path.relative(DOTFILES_ROOT, f))

  const outDir = path.join(EN_DOCS_ROOT, 'aliases', category)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.md'), buildOverviewPage(category, aliases, uniqueHelpers, relSources))
  fs.writeFileSync(path.join(outDir, 'reference.md'), buildReferencePage(category, aliases, uniqueHelpers, relSources))
  return { category, count: aliases.length, files: relSources.length, helpers: uniqueHelpers.length }
}

function updateAliasesIndex(categoryData) {
  const lines = []
  lines.push(
    frontmatterBlock({
      title: 'Aliases | Dotfiles',
      description: `Overview and appendices for ${categoryData.length} alias categories in Dotfiles ${VERSION}.`,
      canonical: '/en/aliases/',
      breadcrumbTitle: 'Aliases',
    }).trimEnd()
  )
  lines.push('')
  lines.push('# Aliases')
  lines.push('')
  lines.push('Each alias group has two pages:')
  lines.push('')
  lines.push('- **Overview** with quick examples.')
  lines.push('- **Reference appendix** with the full list.')
  lines.push('')
  lines.push('## Category map')
  lines.push('')
  lines.push('| Category | Aliases | Helpers | Overview | Reference |')
  lines.push('| :--- | ---: | ---: | :--- | :--- |')
  for (const row of categoryData.sort((a, b) => a.category.localeCompare(b.category))) {
    const pretty = titleCaseCategory(row.category)
    lines.push(`| ${pretty} | ${row.count} | ${row.helpers} | [Open](./${row.category}/) | [Open](./${row.category}/reference.md) |`)
  }
  lines.push('')
  fs.writeFileSync(path.join(EN_DOCS_ROOT, 'aliases/index.md'), `${lines.join('\n').trim()}\n`)
}

function updateFunctionsPage() {
  const files = walk(FUNCTIONS_ROOT, '.sh').sort()
  const rows = []
  for (const file of files) {
    const rel = path.relative(DOTFILES_ROOT, file)
    const content = fs.readFileSync(file, 'utf8')
    for (const fn of parseFunctions(content)) rows.push({ fn, source: rel })
  }
  const dedup = []
  const seen = new Set()
  for (const row of rows.sort((a, b) => a.fn.localeCompare(b.fn))) {
    const key = `${row.fn}|${row.source}`
    if (seen.has(key)) continue
    seen.add(key)
    dedup.push(row)
  }
  const lines = []
  lines.push(
    frontmatterBlock({
      title: 'Functions | Dotfiles',
      description: `Public shell function reference sourced from Dotfiles ${VERSION}.`,
      canonical: '/en/functions/',
      breadcrumbTitle: 'Functions',
    }).trimEnd()
  )
  lines.push('')
  lines.push('# Functions')
  lines.push('')
  lines.push('This page lists public shell functions generated from `.chezmoitemplates/functions/`.')
  lines.push('')
  lines.push('## Reference')
  lines.push('')
  lines.push('| Function | Source |')
  lines.push('| :--- | :--- |')
  for (const row of dedup) lines.push(`| \`${escapeInlineCode(row.fn)}()\` | \`${escapeInlineCode(row.source)}\` |`)
  lines.push('')
  fs.writeFileSync(path.join(EN_DOCS_ROOT, 'functions/index.md'), `${lines.join('\n').trim()}\n`)
}

function updatePathsPage() {
  const content = fs.readFileSync(PATHS_FILE, 'utf8')
  const entries = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('path_prepend '))
    .map((line) => line.replace(/^path_prepend\s+/, '').trim())
  const unique = [...new Set(entries)]
  const lines = []
  lines.push(
    frontmatterBlock({
      title: 'Paths | Dotfiles',
      description: `PATH precedence overview and entries sourced from Dotfiles ${VERSION}.`,
      canonical: '/en/paths/',
      breadcrumbTitle: 'Paths',
    }).trimEnd()
  )
  lines.push('')
  lines.push('# Paths')
  lines.push('')
  lines.push('Dotfiles sets PATH order in one template and prepends entries by priority.')
  lines.push('')
  lines.push('## Precedence')
  lines.push('')
  lines.push('1. Start with system paths.')
  lines.push('2. Prepend runtime and package manager paths.')
  lines.push('3. Prepend local user paths last for highest priority.')
  lines.push('4. Deduplicate entries while preserving first match.')
  lines.push('')
  lines.push('## Declared entries')
  lines.push('')
  for (const entry of unique) lines.push(`- \`${entry}\``)
  lines.push('')
  fs.writeFileSync(path.join(EN_DOCS_ROOT, 'paths/index.md'), `${lines.join('\n').trim()}\n`)
}

function updateAboutPage() {
  const lines = []
  lines.push(
    frontmatterBlock({
      title: 'About Dotfiles | Dotfiles',
      description: `Technical overview of Dotfiles ${VERSION}.`,
      canonical: '/en/about/',
      breadcrumbTitle: 'About Dotfiles',
    }).trimEnd()
  )
  lines.push('')
  lines.push('# About Dotfiles')
  lines.push('')
  lines.push(`Dotfiles ${VERSION} is a cross-platform shell configuration managed by Chezmoi.`)
  lines.push('')
  lines.push('## Install')
  lines.push('')
  lines.push('```bash')
  lines.push('bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"')
  lines.push('```')
  lines.push('')
  lines.push('## Verify')
  lines.push('')
  lines.push('```bash')
  lines.push('dot doctor')
  lines.push('```')
  lines.push('')
  lines.push('## Core commands')
  lines.push('')
  lines.push('- `dot apply` applies configuration changes.')
  lines.push('- `dot update` updates the repo and warms caches.')
  lines.push('- `dot doctor` validates paths, tools, and shell health.')
  lines.push('- `dot heal` repairs missing or broken state.')
  lines.push('- `dot smoke-test` validates core toolchains.')
  lines.push('')
  lines.push('## Related')
  lines.push('')
  lines.push('- [Aliases](/en/aliases/)')
  lines.push('- [Functions](/en/functions/)')
  lines.push('- [Paths](/en/paths/)')
  lines.push('')
  fs.writeFileSync(path.join(EN_DOCS_ROOT, 'about/index.md'), `${lines.join('\n').trim()}\n`)
}

function updateHomePage() {
  const p = path.join(EN_DOCS_ROOT, 'index.md')
  if (!fs.existsSync(p)) return
  let content = fs.readFileSync(p, 'utf8')
  content = content
    .replace(/^title:\s*.+$/m, 'title: Dotfiles v0.2.495 | Dotfiles')
    .replace(/^description:\s*.+$/m, 'description: Cross-platform shell configuration for macOS, Linux, and WSL.')
    .replace(/^subtitle:\s*.+$/m, 'subtitle: Cross-platform shell configuration managed by Chezmoi.')
    .replace(/^tagline:\s*.+$/m, 'tagline: Cross-platform shell configuration managed by Chezmoi.')
    .replace(/^actionLink:\s*.+$/m, 'actionLink: /en/about/')
  fs.writeFileSync(p, content)
}

function main() {
  const categories = fs
    .readdirSync(path.join(EN_DOCS_ROOT, 'aliases'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
  const summary = []
  for (const category of categories) {
    if (!fs.existsSync(path.join(ALIASES_ROOT, category))) continue
    summary.push(updateAliasCategoryPages(category))
  }
  updateAliasesIndex(summary)
  updateFunctionsPage()
  updatePathsPage()
  updateAboutPage()
  updateHomePage()
  console.log(`Regenerated /en docs from ${DOTFILES_ROOT} (${VERSION}).`)
}

main()
