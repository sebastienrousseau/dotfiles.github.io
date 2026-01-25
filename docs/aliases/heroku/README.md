---
title: "Heroku Aliases: Shell Shortcuts for the Heroku CLI"
description: "Speed up Heroku workflows with 200+ shell aliases for apps, databases, pipelines, and deployments."
lang: en-GB
metaTitle: Heroku Aliases | Dotfiles
permalink: /aliases/heroku/
sidebar: true
meta:
  - name: keywords
    content: heroku aliases, heroku cli shortcuts, heroku shell commands, dotfiles, paas deployment, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Heroku Aliases | Dotfiles
  - name: twitter:description
    content: Speed up Heroku workflows with 200+ shell aliases for apps, databases, pipelines, and deployments.
  - name: og:title
    content: Heroku Aliases | Dotfiles
  - name: og:description
    content: Speed up Heroku workflows with 200+ shell aliases for apps, databases, pipelines, and deployments.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Heroku Aliases

Shell shortcuts for the Heroku CLI, defined in `heroku.aliases.sh` and loaded automatically by chezmoi.

## Overview

This collection provides over 200 aliases for the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), covering app management, add-ons, databases, pipelines, containers, and more.

## Reference

### General Commands

| Alias | Description |
|-------|-------------|
| `hkk` | Heroku CLI command shortcut |
| `hka` | Add new users to your app |
| `hkau` | Update existing collaborators on a team app |
| `hkh` | Display help for Heroku |
| `hkj` | Add yourself to a team app |
| `hkl` | List all commands |
| `hkla` | List who has access to an app |
| `hklg` | Display recent log output |
| `hkn` | Display notifications |
| `hko` | List the teams you are a member of |
| `hkoo` | Open the team interface in a browser |
| `hkp` | Open a psql shell to the database |
| `hkq` | Remove yourself from a team app |
| `hkr` | Remove users from a team app |
| `hkrg` | List available regions for deployment |
| `hks` | Display current status of the Heroku platform |
| `hkt` | List the teams you are a member of |
| `hku` | Update the Heroku CLI |
| `hkulk` | Unlock an app so any team member can join |
| `hkw` | Show which plugin a command is in |

### Add-ons

| Alias | Description |
|-------|-------------|
| `hkada` | Attach an existing add-on resource to an app |
| `hkadc` | Create a new add-on resource |
| `hkadd` | Detach an existing add-on resource from an app |
| `hkaddoc` | Open an add-on's Dev Center documentation in your browser |
| `hkaddown` | Change add-on plan |
| `hkadi` | Show detailed add-on resource and attachment information |
| `hkadk` | Permanently destroy an add-on resource |
| `hkadl` | List your add-ons and attachments |
| `hkado` | Open an add-on's dashboard in your browser |
| `hkadp` | List all available plans for an add-on service |
| `hkadr` | Rename an add-on |
| `hkads` | List all available add-on services |
| `hkadu` | Change add-on plan |
| `hkadw` | Show provisioning status of the add-ons on the app |

### Apps

| Alias | Description |
|-------|-------------|
| `hkapc` | Create a new app |
| `hkape` | View app errors |
| `hkapfav` | List favorite apps |
| `hkapfava` | Favorite an app |
| `hkapunfav` | Unfavorite an app |
| `hkapi` | Show detailed app information |
| `hkapj` | Add yourself to a team app |
| `hkapk` | Permanently destroy an app |
| `hkapl` | List your apps |
| `hkaplk` | Prevent team members from joining an app |
| `hkapo` | Open the app in a web browser |
| `hkapq` | Remove yourself from a team app |
| `hkapr` | Rename an app |
| `hkaps` | Show the list of available stacks |
| `hkapss` | Set the stack of an app |
| `hkapt` | Transfer applications to another user or team |
| `hkapulk` | Unlock an app so any team member can join |

### Authentication

| Alias | Description |
|-------|-------------|
| `hk2fa` | Display the current logged in user |
| `hk2fad` | Disable 2FA on account |
| `hk2fain` | Login with your Heroku credentials |
| `hk2faout` | Clear local login credentials and invalidate API session |
| `hk2fas` | Check 2FA status |
| `hk2fat` | Output current CLI authentication token |

### OAuth Authorizations

| Alias | Description |
|-------|-------------|
| `hkauc` | Create a new OAuth authorization |
| `hkaui` | Show an existing OAuth authorization |
| `hkaul` | List OAuth authorizations |
| `hkaur` | Revoke OAuth authorization |
| `hkauro` | Update an OAuth authorization token |
| `hkauu` | Update an OAuth authorization |

### Buildpacks

| Alias | Description |
|-------|-------------|
| `hkbpac` | Display autocomplete installation instructions |
| `hkbpad` | Add new app buildpack, inserting into list of buildpacks if necessary |
| `hkbpcl` | Clear all buildpacks set on the app |
| `hkbpi` | Fetch info about a buildpack |
| `hkbpl` | Display the buildpacks for an app |
| `hkbpr` | Remove a buildpack set on the app |
| `hkbps` | Search for buildpacks |
| `hkbpv` | List versions of a buildpack |

### Certificates

| Alias | Description |
|-------|-------------|
| `hkca` | Show ACM status for an app |
| `hkcad` | Add an SSL certificate to an app |
| `hkcae` | Enable ACM status for an app |
| `hkcak` | Disable ACM for an app |
| `hkcar` | Refresh ACM for an app |
| `hkcc` | Print an ordered and complete chain for a certificate |
| `hkcg` | Generate a key and a CSR or self-signed certificate |
| `hkci` | Show certificate information for an SSL certificate |
| `hkck` | Print the correct key for the given certificate |
| `hkcl` | List SSL certificates for an app |
| `hkcr` | Remove an SSL certificate from an app |
| `hkcu` | Update an SSL certificate on an app |

### CI

| Alias | Description |
|-------|-------------|
| `hkcicg` | Get a CI config var |
| `hkcics` | Set CI config vars |
| `hkcicu` | Unset CI config vars |
| `hkcicv` | Display CI config vars |
| `hkcid` | Open an interactive test debugging session with the contents of the current directory |
| `hkcie` | Look for the most recent run and return the output of that run |
| `hkcii` | Show the status of a specific test run |
| `hkcil` | Display the most recent CI runs for the given pipeline |
| `hkcim` | Migrate app-ci.json to app.json with an environments key |
| `hkcio` | Open the Dashboard version of Heroku CI |
| `hkcir` | Run tests against current directory |
| `hkcir2` | Rerun tests against current directory |

### OAuth Clients

| Alias | Description |
|-------|-------------|
| `hkclc` | Create a new OAuth client |
| `hkcli` | Show details of an OAuth client |
| `hkclk` | Delete client by ID |
| `hkcll` | List your OAuth clients |
| `hkcls` | Rotate OAuth client secret |
| `hkclu` | Update OAuth client |

### Config Vars

| Alias | Description |
|-------|-------------|
| `hkcfe` | Interactively edit config vars |
| `hkcfg` | Display a single config value for an app |
| `hkcfs` | Set one or more config vars |
| `hkcfu` | Unset one or more config vars |
| `hkcfv` | Display the config vars for an app |

### Containers

| Alias | Description |
|-------|-------------|
| `hkct` | Use containers to build and deploy Heroku apps |
| `hkctin` | Log in to Heroku Container Registry |
| `hkctout` | Log out from Heroku Container Registry |
| `hkctpull` | Pull an image from an app's process type |
| `hkctpush` | Build, then push Docker images to deploy your Heroku app |
| `hkctrelease` | Release previously pushed Docker images to your Heroku app |
| `hkctrm` | Remove the process type from your app |
| `hkctrun` | Build, then run the Docker image locally |

### Domains

| Alias | Description |
|-------|-------------|
| `hkdo` | List domains for an app |
| `hkdoa` | Add a domain to an app |
| `hkdoc` | Remove all domains from an app |
| `hkdoi` | Show detailed information for a domain on an app |
| `hkdor` | Remove a domain from an app |
| `hkdou` | Update a domain to use a different SSL certificate on an app |
| `hkdow` | Wait for domain to be active for an app |

### Drains

| Alias | Description |
|-------|-------------|
| `hkdr` | Display the log drains of an app |
| `hkdra` | Add a log drain to an app |
| `hkdrr` | Remove a log drain from an app |

### Dynos

| Alias | Description |
|-------|-------------|
| `hkdyk` | Stop app dyno |
| `hkdyrz` | Manage dyno sizes |
| `hkdyrs` | Restart app dynos |
| `hkdysc` | Scale dyno quantity up or down |
| `hkdyst` | Stop app dyno |

### Features

| Alias | Description |
|-------|-------------|
| `hkfeat` | List available app features |
| `hkfeatd` | Disable an app feature |
| `hkfeate` | Enable an app feature |
| `hkfeati` | Display information about a feature |

### Git

| Alias | Description |
|-------|-------------|
| `hkgitc` | Clone a Heroku app to your local machine at DIRECTORY (defaults to app name) |
| `hkgitr` | Add a git remote to an app repo |

### Keys

| Alias | Description |
|-------|-------------|
| `hkka` | Add an SSH key for a user |
| `hkkcl` | Remove all SSH keys for current user |
| `hkkr` | Remove an SSH key from the user |

### Labs

| Alias | Description |
|-------|-------------|
| `hklab` | List experimental features |
| `hklabd` | Disable an experimental feature |
| `hklabe` | Enable an experimental feature |
| `hklabi` | Show feature info |

### Local

| Alias | Description |
|-------|-------------|
| `hkloc` | Run Heroku app locally |
| `hklocr` | Run a one-off command |
| `hklocv` | Display node-foreman version |
| `hkloclk` | Prevent team members from joining an app |

### Maintenance

| Alias | Description |
|-------|-------------|
| `hkmt` | Display the current maintenance status of app |
| `hkmtoff` | Take the app out of maintenance mode |
| `hkmton` | Put the app into maintenance mode |

### Members

| Alias | Description |
|-------|-------------|
| `hkmb` | List members of a team |
| `hkmba` | Add a user to a team |
| `hkmbr` | Remove a user from a team |
| `hkmbs` | Set a member's role in a team |

### PostgreSQL

| Alias | Description |
|-------|-------------|
| `hkpg` | Show database information |
| `hkpgb` | Show table and index bloat in your database ordered by most wasteful |
| `hkpgbk` | List database backups |
| `hkpgbkcl` | Cancel an in-progress backup or restore (default newest) |
| `hkpgbkc` | Capture a new backup |
| `hkpgbkdl` | Delete a backup |
| `hkpgbkdw` | Download database backup |
| `hkpgbki` | Get information about a specific backup |
| `hkpgbkr` | Restore a backup (default latest) to a database |
| `hkpgbks` | Schedule daily backups for given database |
| `hkpgbksh` | List backup schedule |
| `hkpgbkurl` | Get secret but publicly accessible URL of a backup |
| `hkpgbkk` | Stop daily backups |
| `hkpgblk` | Display queries holding locks other queries are waiting to be released |
| `hkpgc` | Copy all data from source db to target |
| `hkpgcpa` | Add an attachment to a database using connection pooling |
| `hkpgcr` | Show information on credentials in the database |
| `hkpgcrc` | Create credential within database |
| `hkpgcrd` | Destroy credential within database |
| `hkpgcrr` | Rotate the database credentials |
| `hkpgcrrd` | Repair the permissions of the default credential within database |
| `hkpgcrurl` | Show information on a database credential |
| `hkpgdg` | Run or view diagnostics report |
| `hkpgi` | Show database information |
| `hkpgk` | Kill a query |
| `hkpgka` | Terminate all connections for all credentials |
| `hkpglks` | Display queries with active locks |
| `hkpglnk` | List all databases and information on link |
| `hkpglnkc` | Create a link between data stores |
| `hkpglnkd` | Destroy a link between data stores |
| `hkpgmt` | Show maintenance status |
| `hkpgmtr` | Start maintenance |
| `hkpgmtw` | Set weekly maintenance window |
| `hkpgo` | Show 10 queries that have longest execution time in aggregate |
| `hkpgp` | Set DATABASE as your DATABASE_URL |
| `hkpgps` | View active queries with execution time |
| `hkpgpsql` | Open a psql shell to the database |
| `hkpgpull` | Pull Heroku database into local or remote database |
| `hkpgpush` | Push local or remote into Heroku database |
| `hkpgreset` | Delete all data in DATABASE |
| `hkpgset` | Show your current database settings |
| `hkpgsetllw` | Control whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock |
| `hkpgsetlmds` | Log the duration of each completed statement if it completes after the time specified by VALUE |
| `hkpgsetlgs` | Control which SQL statements are logged |
| `hkpguf` | Stop a replica from following and make it a writeable database |
| `hkpgup` | Unfollow a database and upgrade it to the latest stable PostgreSQL version |
| `hkpgvs` | Show dead rows and whether an automatic vacuum is expected to be triggered |
| `hkpgww` | Block until database is available |

### Pipelines

| Alias | Description |
|-------|-------------|
| `hkpipe` | List pipelines you have access to |
| `hkpipea` | Add this app to a pipeline |
| `hkpipec` | Create a new pipeline |
| `hkpipect` | Connect a GitHub repo to an existing pipeline |
| `hkpipediff` | Compare the latest release of this app to its downstream app(s) |
| `hkpipei` | Show list of apps in a pipeline |
| `hkpipek` | Destroy a pipeline |
| `hkpipeo` | Open a pipeline in dashboard |
| `hkpipep` | Promote the latest release of this app to its downstream app(s) |
| `hkpiper` | Remove this app from its pipeline |
| `hkpipern` | Rename a pipeline |
| `hkpipes` | Bootstrap a new pipeline with common settings and create a production and staging app |
| `hkpipett` | Transfer ownership of a pipeline |
| `hkpipeu` | Update the app's stage in a pipeline |

### Plugins

| Alias | Description |
|-------|-------------|
| `hkplugs` | List installed plugins |
| `hkplugsi` | Install a plugin into the CLI |
| `hkplugslk` | Link a plugin into the CLI for development |
| `hkplugsui` | Remove a plugin from the CLI |
| `hkplugsu` | Update installed plugins |

### Process

| Alias | Description |
|-------|-------------|
| `hkpsad` | Disable web dyno autoscaling |
| `hkps` | List dynos for an app |
| `hkpsae` | Enable web dyno autoscaling |
| `hkpsc` | Copy a file from a dyno to the local filesystem |
| `hkpse` | Create an SSH session to a dyno |
| `hkpsf` | Forward traffic on a local port to a dyno |
| `hkpsk` | Stop app dyno |
| `hkpsr` | Restart app dynos |
| `hkpsrs` | Manage dyno sizes |
| `hkpss` | Stop app dyno |
| `hkpssc` | Scale dyno quantity up or down |
| `hkpssck` | Launch a SOCKS proxy into a dyno |
| `hkpst` | Manage dyno sizes |
| `hkpsw` | Wait for all dynos to be running latest version after a release |

### Redis

| Alias | Description |
|-------|-------------|
| `hkred` | Get information about Redis |
| `hkredcli` | Open a Redis prompt |
| `hkredcr` | Display credentials information |
| `hkredi` | Get information about Redis |
| `hkredkn` | Set the keyspace notifications configuration |
| `hkredmm` | Set the key eviction policy |
| `hkredmt` | Manage maintenance windows |
| `hkredp` | Set DATABASE as your REDIS_URL |
| `hkredsr` | Reset all stats covered by RESETSTAT |
| `hkredt` | Set the number of seconds to wait before killing idle connections |
| `hkredw` | Wait for Redis instance to be available |

### Releases

| Alias | Description |
|-------|-------------|
| `hkrel` | Display the releases for an app |
| `hkreli` | View detailed information for a release |
| `hkrelo` | View the release command output |
| `hkrelr` | Rollback to a previous release |

### Review Apps

| Alias | Description |
|-------|-------------|
| `hkrvae` | Enable review apps and/or settings on an existing pipeline |
| `hkrvad` | Disable review apps and/or settings on an existing pipeline |

### Run

| Alias | Description |
|-------|-------------|
| `hkrun` | Run a one-off process inside a Heroku dyno |
| `hkrund` | Run a detached dyno, where output is sent to your logs |

### Sessions

| Alias | Description |
|-------|-------------|
| `hksessions` | List your OAuth sessions |
| `hksessionsd` | Delete (logout) OAuth session by ID |

### Spaces

| Alias | Description |
|-------|-------------|
| `hksp` | List available spaces |
| `hkspc` | Create a new space |
| `hkspd` | Destroy a space |
| `hkspi` | Show info about a space |
| `hksppi` | Display the information necessary to initiate a peering connection |
| `hkspp` | List peering connections for a space |
| `hksppa` | Accept a pending peering request for a private space |
| `hksppd` | Destroy an active peering connection in a private space |
| `hkspps` | List dynos for a space |
| `hkspr` | Rename a space |
| `hksptop` | Show space topology |
| `hkspt` | Transfer a space to another team |
| `hkspconf` | Display the configuration information for VPN |
| `hkspvc` | Create VPN |
| `hkspvcs` | List the VPN connections for a space |
| `hkspvk` | Destroy VPN in a private space |
| `hkspvi` | Display the information for VPN |
| `hkspvu` | Update VPN |
| `hkspvw` | Wait for VPN connection to be created |
| `hkspw` | Wait for a space to be created |

### Webhooks

| Alias | Description |
|-------|-------------|
| `hkwh` | List webhooks on an app |
| `hkwha` | Add a webhook to an app |
| `hkwhdv` | List webhook deliveries on an app |
| `hkwhdvi` | Info for a webhook event on an app |
| `hkwhev` | List webhook events on an app |
| `hkwhevi` | Info for a webhook event on an app |
| `hkwhi` | Info for a webhook on an app |
| `hkwhr` | Remove a webhook from an app |
| `hkwhu` | Update a webhook in an app |
