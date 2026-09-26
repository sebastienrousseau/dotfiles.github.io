---
layout: index
title: ".dotfiles — one configuration for every shell, signed and verifiable"
description: "Chezmoi-managed dotfiles for macOS, Linux, WSL and PowerShell: one configuration across bash, zsh, fish and nushell, a dot CLI, light and dark themes, and releases you can verify."
hero_tag: "v0.2.526"
hero_tagline: "Apache-2.0 OR MIT"
headline: "One configuration for every shell"
lead: "Chezmoi-managed dotfiles for macOS, Linux and WSL, with PowerShell parity. The same aliases, prompt and tools across bash, zsh, fish and nushell, driven by one dot command and installed from releases you can verify."
cta_primary: "Install"
cta_secondary: "Read the docs"
---

<section id="features" class="band band-soft" aria-labelledby="features-h">
  <div class="lu-shell">
    <h2 id="features-h" class="band-h">What you get</h2>
    <p class="band-lead">Everything is chezmoi-managed and switched by feature flags and profiles in one data file.</p>
    <ul class="cards">
      <li class="card"><h3 class="card-h">Four shells, one configuration</h3><p>Bash, zsh, fish and nushell share the same aliases, functions and prompt. Fish is the default login shell; switch with one setting.</p></li>
      <li class="card"><h3 class="card-h">The dot command</h3><p>More than 100 commands for the whole lifecycle: <code>dot sync</code>, <code>dot doctor</code>, <code>dot health</code>, <code>dot heal</code>, <code>dot rollback</code>, <code>dot secrets</code> and more.</p></li>
      <li class="card"><h3 class="card-h">Themes that follow the system</h3><p>114 palette families, each in light and dark. In auto mode the terminal, editor and prompt follow your operating system's appearance.</p></li>
      <li class="card"><h3 class="card-h">Ready for AI coding tools</h3><p><code>dot ai tools</code> checks 19 terminal AI coding assistants in one view. Everything AI-related is opt-in, and telemetry is off by default.</p></li>
      <li class="card"><h3 class="card-h">Profiles and feature flags</h3><p>Pick <code>laptop</code>, <code>minimal</code> or <code>server</code>, then turn individual features on or off. The same repository suits a workstation and a headless box.</p></li>
      <li class="card"><h3 class="card-h">Secrets kept out of the repository</h3><p><code>dot secrets</code> stores them in the macOS Keychain, <code>pass</code>, or an age-encrypted local store, never in plain text in your dotfiles.</p></li>
    </ul>
  </div>
</section>

<section id="install" class="band" aria-labelledby="install-h">
  <div class="lu-shell">
    <h2 id="install-h" class="band-h">Install</h2>
    <p class="band-lead">Download the installer for the latest release, check it against its SHA-256, then run it. You need <code>git</code> and <code>curl</code>; on Linux without <code>shasum</code>, use <code>sha256sum -c -</code> for the check.</p>
    <div class="snippet">
      <p class="snippet-h" id="install-cap">Install v0.2.526</p>
      <pre class="snippet-body" tabindex="0" role="group" aria-labelledby="install-cap"><code>r=https://github.com/sebastienrousseau/dotfiles/releases/download
curl -fsSL -o install.sh "$r/v0.2.526/dotfiles-install-0.2.526.sh"
sum=3e2f04a22459883b344f4a22b43845fcb37689b61edfb971d5a7f9319efd86dc
echo "$sum  install.sh" | shasum -a 256 -c - &amp;&amp; bash install.sh
dot doctor    &#35; then check the machine</code></pre>
    </div>
    <p class="band-lead">The installer fetches a checksum-verified chezmoi, clones the release to <code>~/.dotfiles</code>, applies it and puts <code>dot</code> on your <code>PATH</code>. Homebrew, Scoop, AUR, npm and Nix routes are in the <a href="https://doc.dotfiles.io/guides/INSTALL/">install guide</a>.</p>
  </div>
</section>

<section id="platforms" class="band band-soft" aria-labelledby="platforms-h">
  <div class="lu-shell">
    <h2 id="platforms-h" class="band-h">Where it runs</h2>
    <p class="band-lead">From the <a href="https://doc.dotfiles.io/reference/SUPPORT_MATRIX/">support matrix</a>.</p>
    <div class="prose">
      <h3>Operating systems</h3>
      <div class="table-wrap" tabindex="0" role="group" aria-label="Operating systems">
        <table>
          <thead><tr><th scope="col">System</th><th scope="col">Version</th><th scope="col">Architecture</th><th scope="col">Status</th></tr></thead>
          <tbody>
            <tr><td>macOS</td><td>14 (Sonoma) or later</td><td>Apple Silicon and Intel</td><td>Supported, CI tested on Apple Silicon</td></tr>
            <tr><td>Ubuntu</td><td>22.04 or later</td><td>x86_64 and aarch64</td><td>Supported, CI tested on 24.04 x86_64</td></tr>
            <tr><td>Debian</td><td>12 or later</td><td>x86_64</td><td>Supported</td></tr>
            <tr><td>WSL2</td><td>Ubuntu 22.04 or later</td><td>x86_64</td><td>Supported, with a clipboard bridge</td></tr>
            <tr><td>NixOS</td><td>23.11 or later</td><td>x86_64 and aarch64</td><td>Supported, via the Nix flake</td></tr>
            <tr><td>Windows</td><td>10 or 11</td><td>x86_64</td><td>PowerShell 7.4 LTS or later, CI tested</td></tr>
            <tr><td>Fedora, Arch Linux</td><td>41 or later, rolling</td><td>x86_64</td><td>Community, not CI tested</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Shells</h3>
      <div class="table-wrap" tabindex="0" role="group" aria-label="Shells">
        <table>
          <thead><tr><th scope="col">Shell</th><th scope="col">Minimum</th><th scope="col">Coverage</th></tr></thead>
          <tbody>
            <tr><td>zsh</td><td>5.8</td><td>Full</td></tr>
            <tr><td>bash</td><td>5.0 (3.2 for the dot CLI)</td><td>Full</td></tr>
            <tr><td>fish (default)</td><td>4.0</td><td>Core CLI and aliases</td></tr>
            <tr><td>nushell</td><td>0.98</td><td>Core CLI and aliases</td></tr>
            <tr><td>PowerShell</td><td>7.4 LTS</td><td>Core CLI and aliases</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section id="security" class="band" aria-labelledby="security-h">
  <div class="lu-shell">
    <h2 id="security-h" class="band-h">Verify what you install</h2>
    <p class="band-lead">Every release ships the evidence to check it. The <a href="https://doc.dotfiles.io/security/VERIFY_RELEASE/">release verification guide</a> walks through each step.</p>
    <ul class="cards">
      <li class="card"><h3 class="card-h">Checksums</h3><p>The installer and every archive have a published SHA-256. The install command above refuses to run a file that does not match.</p></li>
      <li class="card"><h3 class="card-h">Provenance and signatures</h3><p>The <code>dot</code> CLI archives carry SLSA provenance signed by the release workflow, and Sigstore bundles cover the installer and archives. Check provenance with <code>gh attestation verify dot-0.2.526.tar.gz --repo sebastienrousseau/dotfiles</code>.</p></li>
      <li class="card"><h3 class="card-h">SBOMs and signed commits</h3><p>Each release attaches SPDX and CycloneDX software bills of materials. Commits are signed and carry a Developer Certificate of Origin sign-off; CI rejects a change without one.</p></li>
    </ul>
  </div>
</section>

<section id="faq" class="band band-soft" aria-labelledby="faq-h">
  <div class="lu-shell">
    <h2 id="faq-h" class="band-h">Questions</h2>
    <div class="prose">
      <h3>Where is the documentation?</h3>
      <p>At <a href="https://doc.dotfiles.io/">doc.dotfiles.io</a>: guides, the <code>dot</code> command reference, architecture and security, and <a href="https://doc.dotfiles.io/manual/">the manual</a>.</p>
      <h3>Which shell do I get?</h3>
      <p>Fish is the default login shell. Set <code>default_shell</code> to <code>zsh</code>, <code>fish</code> or <code>nu</code>; bash is configured either way.</p>
      <h3>Does it work on Windows?</h3>
      <p>Through WSL2, and natively in PowerShell 7.4 LTS or later, which has its own <code>dot</code> and aliases. It is also packaged for Scoop.</p>
      <h3>Where do secrets go?</h3>
      <p>Outside the repository. <code>dot secrets</code> keeps them in the macOS Keychain, <code>pass</code>, or an age-encrypted local store.</p>
      <h3>Does it collect data?</h3>
      <p>No. Telemetry is disabled by default, and this website loads nothing from a third party.</p>
      <h3>How do I remove it?</h3>
      <p><code>dot uninstall</code> removes what it installed, after asking you to confirm.</p>
      <h3>What licence is it under?</h3>
      <p>Apache-2.0 or MIT, at your choice.</p>
    </div>
    <p class="band-cta"><a class="btn btn-primary" href="#install">Install .dotfiles</a> <a class="btn btn-quiet" href="https://doc.dotfiles.io/">Read the docs</a></p>
  </div>
</section>
