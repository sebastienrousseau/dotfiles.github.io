---
layout: index
title: ".dotfiles — one configuration for every shell, signed and verifiable"
description: "Chezmoi-managed dotfiles for macOS, Linux, WSL and PowerShell: one configuration across bash, zsh, fish and nushell, a dot CLI, light and dark themes, and releases you can verify."
headline: "One configuration for every shell"
lead: "Chezmoi-managed dotfiles for macOS, Linux and WSL, with PowerShell parity. The same aliases, prompt and tools across bash, zsh, fish and nushell, driven by one dot command and installed from releases you can verify."
badge_tag: "Latest"
badge_text: "v0.2.522 · Apache-2.0 OR MIT"
cta_primary: "Install"
cta_docs: "Read the docs"
---

<section id="features" class="section">
  <div class="container text-center">
    <h2 class="section-title">What you get</h2>
    <p class="section-desc">Everything is chezmoi-managed and switched by feature flags and profiles in one data file.</p>
    <div class="grid-2x2">
      <div class="card">
        <h3>Four shells, one configuration</h3>
        <p>Bash, zsh, fish and nushell share the same aliases, functions and prompt. Fish is the default login shell; switch with one setting.</p>
      </div>
      <div class="card">
        <h3>The dot command</h3>
        <p>More than 100 commands for the whole lifecycle: <code>dot sync</code>, <code>dot doctor</code>, <code>dot health</code>, <code>dot heal</code>, <code>dot rollback</code>, <code>dot secrets</code> and more.</p>
      </div>
      <div class="card">
        <h3>Themes that follow the system</h3>
        <p>114 palette families, each in light and dark. In auto mode the terminal, editor and prompt follow your operating system's appearance.</p>
      </div>
      <div class="card">
        <h3>Ready for AI coding tools</h3>
        <p><code>dot ai tools</code> checks 19 terminal AI coding assistants in one view. Everything AI-related is opt-in, and telemetry is off by default.</p>
      </div>
      <div class="card">
        <h3>Profiles and feature flags</h3>
        <p>Pick <code>laptop</code>, <code>minimal</code> or <code>server</code>, then turn individual features on or off. The same repository suits a workstation and a headless box.</p>
      </div>
      <div class="card">
        <h3>Secrets kept out of the repository</h3>
        <p><code>dot secrets</code> stores them in the macOS Keychain, <code>pass</code>, or an age-encrypted local store, never in plain text in your dotfiles.</p>
      </div>
    </div>
  </div>
</section>

<section id="quickstart" class="section">
  <div class="container narrow">
    <h2 class="section-title text-center">Install</h2>
    <p class="section-desc text-center">Download the installer for the latest release, check it against its SHA-256, then run it. You need <code>git</code> and <code>curl</code>; on Linux without <code>shasum</code>, use <code>sha256sum -c -</code> for the check.</p>
    <pre><code>r=https://github.com/sebastienrousseau/dotfiles/releases/download
curl -fsSL -o install.sh "$r/v0.2.522/dotfiles-install-0.2.522.sh"
sum=07ef5a3fbf3a98d7cb4cf6dc787ecce516121ca5a33b5ac793645bdcab6eaf03
echo "$sum  install.sh" | shasum -a 256 -c - &amp;&amp; bash install.sh
dot doctor    &#35; then check the machine</code></pre>
    <p class="section-desc text-center">The installer fetches a checksum-verified chezmoi, clones the release to <code>~/.dotfiles</code>, applies it and puts <code>dot</code> on your <code>PATH</code>. Homebrew, Scoop, AUR, npm and Nix routes are in the <a href="https://doc.dotfiles.io/guides/INSTALL/">install guide</a>.</p>
  </div>
</section>

<section id="platforms" class="section">
  <div class="container">
    <h2 class="section-title text-center">Where it runs</h2>
    <p class="section-desc text-center">From the <a href="https://doc.dotfiles.io/reference/SUPPORT_MATRIX/">support matrix</a>.</p>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th scope="col">System</th><th scope="col">Version</th><th scope="col">Architecture</th><th scope="col">Status</th></tr>
        </thead>
        <tbody>
          <tr><td>macOS</td><td>14 (Sonoma) or later</td><td>Apple Silicon and Intel</td><td>Supported, CI tested on Intel</td></tr>
          <tr><td>Ubuntu</td><td>22.04 or later</td><td>x86_64 and aarch64</td><td>Supported, CI tested on x86_64</td></tr>
          <tr><td>Debian</td><td>12 or later</td><td>x86_64</td><td>Supported</td></tr>
          <tr><td>WSL2</td><td>Ubuntu 22.04 or later</td><td>x86_64</td><td>Supported, with a clipboard bridge</td></tr>
          <tr><td>NixOS</td><td>23.11 or later</td><td>x86_64 and aarch64</td><td>Supported, via the Nix flake</td></tr>
          <tr><td>Fedora, Arch Linux</td><td>39 or later, rolling</td><td>x86_64</td><td>Community, not CI tested</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th scope="col">Shell</th><th scope="col">Minimum</th><th scope="col">Coverage</th></tr>
        </thead>
        <tbody>
          <tr><td>zsh</td><td>5.8</td><td>Full</td></tr>
          <tr><td>bash</td><td>5.0</td><td>Full</td></tr>
          <tr><td>fish (default)</td><td>4.0</td><td>Core CLI and aliases</td></tr>
          <tr><td>nushell</td><td>0.98</td><td>Core CLI and aliases</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section id="security" class="section">
  <div class="container">
    <h2 class="section-title text-center">Verify what you install</h2>
    <p class="section-desc text-center">Every release ships the evidence to check it. The <a href="https://doc.dotfiles.io/security/VERIFY_RELEASE/">release verification guide</a> walks through each step.</p>
    <div class="grid-2x2">
      <div class="card">
        <h3>Checksums</h3>
        <p>The installer and every archive have a published SHA-256. The install command above refuses to run a file that does not match.</p>
      </div>
      <div class="card">
        <h3>Provenance and signatures</h3>
        <p>The <code>dot</code> CLI archives carry SLSA provenance signed by the release workflow, and Sigstore bundles cover the installer and archives. Check provenance with <code>gh attestation verify dot-0.2.522.tar.gz --repo sebastienrousseau/dotfiles</code>.</p>
      </div>
      <div class="card">
        <h3>SBOMs and signed commits</h3>
        <p>Each release attaches SPDX and CycloneDX software bills of materials. Commits are signed and carry a Developer Certificate of Origin sign-off; CI rejects a change without one.</p>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="section">
  <div class="container narrow">
    <h2 class="section-title text-center">Questions</h2>
    <div class="faq-stack">
      <div class="card">
        <h3>Where is the documentation?</h3>
        <p>At <a href="https://doc.dotfiles.io/">doc.dotfiles.io</a>: guides, the <code>dot</code> command reference, architecture and security, and <a href="https://doc.dotfiles.io/manual/">the manual</a>.</p>
      </div>
      <div class="card">
        <h3>Which shell do I get?</h3>
        <p>Fish is the default login shell. Set <code>default_shell</code> to <code>zsh</code>, <code>fish</code> or <code>nu</code>; bash is configured either way.</p>
      </div>
      <div class="card">
        <h3>Does it work on Windows?</h3>
        <p>Through WSL2, and natively in PowerShell 7.4 LTS or later, which has its own <code>dot</code> and aliases. It is also packaged for Scoop.</p>
      </div>
      <div class="card">
        <h3>Where do secrets go?</h3>
        <p>Outside the repository. <code>dot secrets</code> keeps them in the macOS Keychain, <code>pass</code>, or an age-encrypted local store.</p>
      </div>
      <div class="card">
        <h3>Does it collect data?</h3>
        <p>No. Telemetry is disabled by default, and this website loads nothing from a third party.</p>
      </div>
      <div class="card">
        <h3>How do I remove it?</h3>
        <p><code>dot uninstall</code> removes what it installed, after asking you to confirm.</p>
      </div>
      <div class="card">
        <h3>What licence is it under?</h3>
        <p>Apache-2.0 or MIT, at your choice.</p>
      </div>
    </div>
  </div>
</section>
