---
description: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
lang: pt-BR
metaTitle: The Heroku aliases - Dotfiles (BR)
permalink: /pt/aliases/heroku/

meta:
  - name: keywords
    content: aliases, heroku, cli, api, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
  - name: twitter:description
    content: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
  - name: twitter:title
    content: The Heroku aliases - Dotfiles (BR)
  - name: og:title
    content: The Heroku aliases - Dotfiles (BR)
  - name: og:description
    content: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Heroku aliases

The `heroku.aliases.sh` file creates helpful shortcut aliases for many commonly
[Heroku](https://www.heroku.com/) commands.

The Heroku aliases, provide powerful commands that create shortcuts to
frequently used Heroku commands. All of these functions and aliases are
wrappers around the Heroku CLI which is the basic, fundamental tools of a
Heroku system.

## Heroku Access aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | ---------------------- | ---------------------------------------------- |
| hk    | `heroku`               | Heroku CLI command shortcut.                   |
| hka   | `heroku access:add`    | Adicionar new users to your app.                     |
| hkau  | `heroku access:update` | Atualizar existing collaborators on an team app.  |
| hkh   | `heroku help`          | Display help for heroku.                       |
| hkj   | `heroku join`          | Adicionar yourself to a team app.                    |
| hkl   | `heroku commands`      | Listar all the commands.                         |
| hkla  | `heroku access`        | Listar who has access to an app.                 |
| hklg  | `heroku logs`          | Display recent log output.                     |
| hkn   | `heroku notifications` | Display notifications.                         |
| hko   | `heroku orgs`          | Listar the teams that you are a member of.       |
| hkoo  | `heroku orgs:open`     | Abrir the team interface in a browser.          |
| hkp   | `heroku psql`          | Abrir a psql shell to the database.             |
| hkq   | `heroku leave`         | Remover yourself from a team app.               |
| hkr   | `heroku access:remove` | Remover users from a team app.                  |
| hkrg  | `heroku regions`       | Listar available regions for deployment.         |
| hks   | `heroku status`        | Display current status of the Heroku platform. |
| hkt   | `heroku teams`         | Listar the teams that you are a member of.       |
| hku   | `heroku update`        | Atualizar the heroku CLI.                         |
| hkulk | `heroku unlock`        | Unlock an app so any team member can join.     |
| hkw   | `heroku which`         | Mostrar which plugin a command is in.             |

## Heroku Add-ons aliases

| Alias    | Command                   | Description                                                |
| -------- | ------------------------- | ---------------------------------------------------------- |
| hkada    | `heroku addons:attach`    | Attach an existing Adicionar-on resource to an app.              |
| hkadc    | `heroku addons:create`    | Criar a new Adicionar-on resource.                              |
| hkadd    | `heroku addons:detach`    | Detach an existing Adicionar-on resource from an app.            |
| hkaddoc  | `heroku addons:docs`      | Abrir an Adicionar-on's Dev Center documentation in your browser. |
| hkaddown | `heroku addons:downgrade` | Change Adicionar-on plan.                                        |
| hkadi    | `heroku addons:info`      | Mostrar detailed Adicionar-on resource and attachment information.  |
| hkadk    | `heroku addons:destroy`   | Permanently destroy an Adicionar-on resource.                    |
| hkadl    | `heroku addons`           | Lists your Adicionar-ons and attachments.                        |
| hkado    | `heroku addons:open`      | Abrir an Adicionar-on's dashboard in your browser.                |
| hkadp    | `heroku addons:plans`     | Listar all available plans for an Adicionar-on services.           |
| hkadr    | `heroku addons:rename`    | Renomear an Adicionar-on.                                          |
| hkads    | `heroku addons:services`  | Listar all available Adicionar-on services.                        |
| hkadu    | `heroku addons:upgrade`   | Change Adicionar-on plan.                                        |
| hkadw    | `heroku addons:wait`      | Mostrar provisioning status of the Adicionar-ons on the app.        |

## Heroku Apps aliases

| Alias     | Command                        | Description                                    |
| --------- | ------------------------------ | ---------------------------------------------- |
| hkapc     | `heroku apps:create`           | Creates a new app.                             |
| hkape     | `heroku apps:errors`           | View app errors.                               |
| hkapfav   | `heroku apps:favorites`        | Listar favorites apps.                           |
| hkapfava  | `heroku apps:favorites:add`    | Favorites an app.                              |
| hkapunfav | `heroku apps:favorites:remove` | Unfavorite an app.                             |
| hkapi     | `heroku apps:info`             | Mostrar detailed app information.                 |
| hkapj     | `heroku apps:join`             | Adicionar yourself to a team app.                    |
| hkapk     | `heroku apps:destroy`          | Permanently destroy an app.                    |
| hkapl     | `heroku apps`                  | Listar your apps.                                |
| hkaplk    | `heroku apps:lock`             | Prevent team members from joining an app.      |
| hkapo     | `heroku apps:open`             | Abrir the app in a web browser.                 |
| hkapq     | `heroku apps:leave`            | Remover yourself from a team app.               |
| hkapr     | `heroku apps:rename`           | Renomear an app.                                 |
| hkaps     | `heroku apps:stacks`           | Mostrar the Listar of available stacks.             |
| hkapss    | `heroku apps:stacks:set`       | Set the stack of an app.                       |
| hkapt     | `heroku apps:transfer`         | Transfer applications to another user or team. |
| hkapulck  | `heroku apps:unlock`           | unlock an app so any team member can join.     |

## Heroku Auth 2fa aliases

| Alias    | Command                   | Description                                                 |
| -------- | ------------------------- | ----------------------------------------------------------- |
| hk2fa    | `heroku auth:whoami`      | Display the current logged in user.                         |
| hk2fad   | `heroku auth:2fa:disable` | Disables 2fa on account.                                    |
| hk2fain  | `heroku auth:login`       | Login with your Heroku credentials.                         |
| hk2faout | `heroku auth:logout`      | Clears local login credentials and invalidates API session. |
| hk2fas   | `heroku auth:2fa`         | Verificar 2fa status.                                           |
| hk2fat   | `heroku auth:token`       | Outputs current CLI authentication token.                   |

## Heroku Authorizations aliases

| Alias  | Command                        | Description                           |
| ------ | ------------------------------ | ------------------------------------- |
| hkauc  | `heroku authorizations:create` | Criar a new OAuth authorization.     |
| hkaui  | `heroku authorizations:info`   | Mostrar an existing OAuth authorization. |
| hkaul  | `heroku authorizations`        | Listar OAuth authorizations.            |
| hkaur  | `heroku authorizations:revoke` | Revoke OAuth authorization.           |
| hkauro | `heroku authorizations:rotate` | Updates an OAuth authorization token. |
| hkauu  | `heroku authorizations:update` | Updates an OAuth authorization.       |

## Heroku Build packs aliases

| Alias  | Command                      | Description                                                              |
| ------ | ---------------------------- | ------------------------------------------------------------------------ |
| hkbpac | `heroku autocomplete`        | Display autocomplete installation instructions.                          |
| hkbpad | `heroku buildpacks:add`      | Adicionar new app Construir-pack, inserting into Listar of Construir-packs if necessary. |
| hkbpcl | `heroku buildpacks:clear`    | Clear all Construir-packs set on the app.                                    |
| hkbpi  | `heroku buildpacks:info`     | Fetch info about a Construir-pack.                                           |
| hkbpl  | `heroku buildpacks`          | Display the Construir-packs for an app.                                      |
| hkbpr  | `heroku buildpacks:remove`   | Remover a Construir-pack set on the app.                                      |
| hkbps  | `heroku buildpacks:search`   | Pesquisar for Construir-packs.                                                  |
| hkbpv  | `heroku buildpacks:versions` | Listar versions of a Construir-pack.                                           |

## Heroku Certs aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | --------------------------- | ---------------------------------------------------- |
| hkca  | `heroku certs:auto`         | Mostrar ACM status for an app.                          |
| hkcad | `heroku certs:add`          | Adicionar an SSL certificate to an app.                    |
| hkcae | `heroku certs:auto:enable`  | Enable ACM status for an app.                        |
| hkcak | `heroku certs:auto:disable` | Disable ACM for an app.                              |
| hkcar | `heroku certs:auto:refresh` | Refresh ACM for an app.                              |
| hkcc  | `heroku certs:chain`        | Imprimir an ordered & complete chain for a certificate. |
| hkcg  | `heroku certs:generate`     | Generate a key and a CSR or self-signed certificate. |
| hkci  | `heroku certs:info`         | Mostrar certificate information for an SSL certificate. |
| hkck  | `heroku certs:key`          | Imprimir the correct key for the given certificate.     |
| hkcl  | `heroku certs`              | Listar SSL certificates for an app.                    |
| hkcr  | `heroku certs:remove`       | Remover an SSL certificate from an app.               |
| hkcu  | `heroku certs:update`       | Atualizar an SSL certificate on an app.                 |

## Heroku ci aliases

| Alias  | Command                      | Description                                                                                    |
| ------ | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| hkcicg | `heroku ci:config:get`       | Get a CI config var.                                                                           |
| hkcics | `heroku ci:config:set`       | Set CI config vars.                                                                            |
| hkcicu | `heroku ci:config:unset`     | Unset CI config vars.                                                                          |
| hkcicv | `ci:config`                  | Display CI config vars.                                                                        |
| hkcid  | `heroku ci:debug`            | Opens an interactive test debugging session with the contents of the current diretório.        |
| hkcie  | `heroku ci:last`             | Looks for the most recent run and returns the output of that run.                              |
| hkcii  | `heroku ci:info`             | Mostrar the status of a specific test run.                                                        |
| hkcil  | `heroku ci`                  | Display the most recent CI runs for the given pipeline.                                        |
| hkcim  | `heroku ci:migrate-manifest` | `app-ci.json` is deprecated. Run this command to migrate to app.json with an environments key. |
| hkcio  | `heroku ci:open`             | Abrir the Dashboard version of Heroku CI.                                                       |
| hkcir  | `heroku ci:run`              | Run tests against current diretório.                                                           |
| hkcir2 | `heroku ci:rerun`            | Rerun tests against current diretório.                                                         |

## Heroku config aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | ------------------------ | -------------------------------- |
| hkclc | `heroku clients:create`  | Criar a new OAuth client.       |
| hkcli | `heroku clients:info`    | Mostrar details of an oauth client. |
| hkclk | `heroku clients:destroy` | Excluir client by ID.             |
| hkcll | `heroku clients`         | Listar your OAuth clients.         |
| hkcls | `heroku clients:rotate`  | Rotate OAuth client secret.      |
| hkclu | `heroku clients:update`  | Atualizar OAuth client.             |

## Heroku Configuration aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | --------------------- | ----------------------------------------- |
| hkcfe | `heroku config:edit`  | Interactively edit config vars.           |
| hkcfg | `heroku config:get`   | Display a single config value for an app. |
| hkcfs | `heroku config:set`   | Set one or more config vars.              |
| hkcfu | `heroku config:unset` | Unset one or more config vars.            |
| hkcfv | `heroku config`       | Display the config vars for an app.       |

## Heroku Container aliases

| Alias       | Command                    | Description                                                  |
| ----------- | -------------------------- | ------------------------------------------------------------ |
| hkct        | `heroku container`         | Use containers to Construir and deploy Heroku apps.              |
| hkctin      | `heroku container:login`   | Log in to Heroku Container Registry.                         |
| hkctout     | `heroku container:logout`  | Log out from Heroku Container Registry.                      |
| hkctpull    | `heroku container:pull`    | Pulls an image from an app's process type.                   |
| hkctpush    | `heroku container:push`    | Builds, then pushes Docker images to deploy your Heroku app. |
| hkctrelease | `heroku container:release` | Releases previously pushed Docker images to your Heroku app. |
| hkctrm      | `heroku container:rm`      | Remover the process type from your app.                       |
| hkctrun     | `heroku container:run`     | Builds, then runs the docker image locally.                  |

## Heroku Domains aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | ----------------------- | ------------------------------------------------------------- |
| hkdo  | `heroku domains`        | Listar domains for an app.                                      |
| hkdoa | `heroku domains:add`    | Adicionar a domain to an app.                                       |
| hkdoc | `heroku domains:clear`  | Remover all domains from an app.                               |
| hkdoi | `heroku domains:info`   | Mostrar detailed information for a domain on an app.             |
| hkdor | `heroku domains:remove` | Remover a domain from an app.                                  |
| hkdou | `heroku domains:update` | Atualizar a domain to use a different SSL certificate on an app. |
| hkdow | `heroku domains:wait`   | Wait for domain to be active for an app.                      |

## Heroku Drains aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | ---------------------- | --------------------------------- |
| hkdr  | `heroku drains`        | Display the log drains of an app. |
| hkdra | `heroku drains:add`    | Adds a log drain to an app.       |
| hkdrr | `heroku drains:remove` | Removes a log drain from an app.  |

## Heroku Dyno aliases

| Alias  | Command               | Description                     |
| ------ | --------------------- | ------------------------------- |
| hkdyk  | `heroku dyno:kill`    | Parar app dyno.                  |
| hkdyrz | `heroku dyno:resize`  | Gerenciar dyno sizes.              |
| hkdyrs | `heroku dyno:restart` | Reiniciar app dynos.              |
| hkdysc | `heroku dyno:scale`   | Scale dyno quantity up or down. |
| hkdyst | `heroku dyno:stop`    | Parar app dyno.                  |

## Heroku Features aliases

| Alias   | Command                   | Description                          |
| ------- | ------------------------- | ------------------------------------ |
| hkfeat  | `heroku features`         | Listar available app features.         |
| hkfeatd | `heroku features:disable` | Disables an app feature.             |
| hkfeate | `heroku features:enable`  | Enables an app feature.              |
| hkfeati | `heroku features:info`    | Display information about a feature. |

## Heroku Git aliases

| Alias  | Command             | Description                                                                    |
| ------ | ------------------- | ------------------------------------------------------------------------------ |
| hkgitc | `heroku git:clone`  | Clones a heroku app to your local machine at diretório (defaults to app name). |
| hkgitr | `heroku git:remote` | Adds a git remote to an app repo.                                              |

## Heroku Keys aliases

| Alias  | Command              | Description                           |
| ------ | -------------------- | ------------------------------------- |
| hkk    | `heroku keys`        | Display your SSH keys.                |
| hkk:a  | `heroku keys:add`    | Adicionar an SSH key for a user.            |
| hkk:cl | `heroku keys:clear`  | Remover all SSH keys for current user. |
| hkk:r  | `heroku keys:remove` | Remover an SSH key from the user.      |

## Heroku Labs aliases

| Alias   | Command               | Description                       |
| ------- | --------------------- | --------------------------------- |
| hklab   | `heroku labs`         | Listar experimental features.       |
| hklab:d | `heroku labs:disable` | Disables an experimental feature. |
| hklab:e | `heroku labs:enable`  | Enables an experimental feature.  |
| hklab:i | `heroku labs:info`    | Mostrar feature info.                |

## Heroku Local aliases

| Alias    | Command                | Description                               |
| -------- | ---------------------- | ----------------------------------------- |
| hkloc    | `heroku local`         | Run heroku app locally.                   |
| hklocr   | `heroku local:run`     | Run a one-off command.                    |
| hklocv   | `heroku local:version` | Display node-foreman version.             |
| hkloclck | `heroku lock`          | Prevent team members from joining an app. |

## Heroku Maintenance aliases

| Alias   | Command                  | Description                                    |
| ------- | ------------------------ | ---------------------------------------------- |
| hkmt    | `heroku maintenance`     | Display the current maintenance status of app. |
| hkmtoff | `heroku maintenance:off` | take the app out of maintenance mode.          |
| hkmton  | `heroku maintenance:on`  | Put the app into maintenance mode.             |

## Heroku Members aliases

| Alias | Comando               | Descrição                                                                  |
| ----- | ----------------------- | ------------------------------ |
| hkmb  | `heroku members`        | Listar members of a team.        |
| hkmba | `heroku members:add`    | Adds a user to a team.         |
| hkmbr | `heroku members:remove` | Removes a user from a team.    |
| hkmbs | `heroku members:set`    | Sets a members role in a team. |

## Heroku Postgres aliases

| Alias       | Command                                         | Description                                                                                                           |
| ----------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| hkpg        | `heroku pg`                                     | Mostrar database information.                                                                                            |
| hkpgb       | `heroku pg:bloat`                               | Mostrar table and index bloat in your database ordered by most wasteful.                                                 |
| hkpgbk      | `heroku pg:backups`                             | Listar database backups.                                                                                                |
| hkpgbkcl    | `heroku pg:backups:cancel`                      | Cancel an in-progress backup or restore (default newest).                                                             |
| hkpgbkc     | `heroku pg:backups:capture`                     | Capture a new backup.                                                                                                 |
| hkpgbkdl    | `heroku pg:backups:delete`                      | Excluir a backup.                                                                                                      |
| hkpgbkdw    | `heroku pg:backups:download`                    | Downloads database backup.                                                                                            |
| hkpgbki     | `heroku pg:backups:info`                        | Get information about a specific backup.                                                                              |
| hkpgbkr     | `heroku pg:backups:restore`                     | Restore a backup (default latest) to a database.                                                                      |
| hkpgbks     | `heroku pg:backups:schedule`                    | Schedule daily backups for given database.                                                                            |
| hkpgbksh    | `heroku pg:backups:schedules`                   | Listar backup schedule.                                                                                                 |
| hkpgbkurl   | `heroku pg:backups:url`                         | Get secret but publicly accessible URL of a backup.                                                                   |
| hkpgbkk     | `heroku pg:backups:unschedule`                  | Parar daily backups.                                                                                                   |
| hkpgblk     | `heroku pg:blocking`                            | Display queries holding locks other queries are waiting to be released.                                               |
| hkpgc       | `heroku pg:copy`                                | Copiar all data from source db to target.                                                                               |
| hkpgcpa     | `heroku pg:connection-pooling:attach`           | Adicionar an attachment to a database using connection pooling.                                                             |
| hkpgcr      | `heroku pg:credentials`                         | Mostrar information on credentials in the database.                                                                      |
| hkpgcrc     | `heroku pg:credentials:create`                  | Criar credential within database.                                                                                    |
| hkpgcrd     | `heroku pg:credentials:destroy`                 | Destroy credential within database.                                                                                   |
| hkpgcrr     | `heroku pg:credentials:rotate`                  | Rotate the database credentials.                                                                                      |
| hkpgcrrd    | `heroku pg:credentials:repair-default`          | Repair the permissions of the default credential within database.                                                     |
| hkpgcrurl   | `heroku pg:credentials:url`                     | Mostrar information on a database credential.                                                                            |
| hkpgdg      | `heroku pg:diagnose`                            | Run or view diagnostics report.                                                                                       |
| hkpgi       | `heroku pg:info`                                | Mostrar database information.                                                                                            |
| hkpgk       | `heroku pg:kill`                                | Kill a query.                                                                                                         |
| hkpgka      | `heroku pg:killall`                             | Terminates all connections for all credentials.                                                                       |
| hkpglks     | `heroku pg:locks`                               | Display queries with active locks.                                                                                    |
| hkpglnk     | `heroku pg:links`                               | Lists all databases and information on link.                                                                          |
| hkpglnkc    | `heroku pg:links:create`                        | Criar a link between data stores.                                                                                    |
| hkpglnkd    | `heroku pg:links:destroy`                       | Destroys a link between data stores.                                                                                  |
| hkpgmt      | `heroku pg:maintenance`                         | Mostrar current maintenance information.                                                                                 |
| hkpgmtr     | `heroku pg:maintenance:run`                     | Iniciar maintenance.                                                                                                    |
| hkpgmtw     | `heroku pg:maintenance:window`                  | Set weekly maintenance window.                                                                                        |
| hkpgo       | `heroku pg:outliers`                            | Mostrar 10 queries that have longest execution time in aggregate.                                                        |
| hkpgp       | `heroku pg:promote`                             | Sets DATABASE as your DATABASE_URL.                                                                                   |
| hkpgps      | `heroku pg:ps`                                  | View active queries with execution time.                                                                              |
| hkpgpsql    | `heroku pg:psql`                                | Abrir a psql shell to the database.                                                                                    |
| hkpgpull    | `heroku pg:pull`                                | Pull Heroku database into local or remote database.                                                                   |
| hkpgpush    | `heroku pg:push`                                | Push local or remote into Heroku database.                                                                            |
| hkpgreset   | `heroku pg:reset`                               | Excluir all data in DATABASE.                                                                                          |
| hkpgset     | `heroku pg:settings`                            | Mostrar your current database settings.                                                                                  |
| hkpgsetllw  | `heroku pg:settings:log-lock-waits`             | Controls whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock.   |
| hkpgsetlmds | `heroku pg:settings:log-min-duration-statement` | The duration of each completed statement will be logged if the statement completes after the time specified by VALUE. |
| hkpgsetlgs  | `heroku pg:settings:log-statement`              | `log_statement` controls which SQL statements are logged.                                                             |
| hkpguf      | `heroku pg:unfollow`                            | Parar a replica from following and make it a writeable database.                                                       |
| hkpgup      | `heroku pg:upgrade`                             | Unfollow a database and upgrade it to the latest stable PostgreSQL version.                                           |
| hkpgvs      | `heroku pg:vacuum-stats`                        | Mostrar dead rows and whether an automatic vacuum is expected to be triggered.                                           |
| hkpgww      | `heroku pg:wait`                                | Blocks until database is available.                                                                                   |

## Heroku Pipelines aliases

| Alias      | Command                     | Description                                                                                                                           |
| ---------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| hkpipe     | `heroku pipelines`          | Listar pipelines you have access to.                                                                                                    |
| hkpipea    | `heroku pipelines:add`      | Adicionar this app to a pipeline.                                                                                                           |
| hkpipec    | `heroku pipelines:create`   | Criar a new pipeline.                                                                                                                |
| hkpipect   | `heroku pipelines:connect`  | Connect a github repo to an existing pipeline.                                                                                        |
| hkpipediff | `heroku pipelines:diff`     | Compares the latest release of this app to its downstream app(s).                                                                     |
| hkpipei    | `heroku pipelines:info`     | Mostrar Listar of apps in a pipeline.                                                                                                      |
| hkpipek    | `heroku pipelines:destroy`  | Destroy a pipeline.                                                                                                                   |
| hkpipeo    | `heroku pipelines:open`     | Abrir a pipeline in dashboard.                                                                                                         |
| hkpipep    | `heroku pipelines:promote`  | Promote the latest release of this app to its downstream app(s).                                                                      |
| hkpiper    | `heroku pipelines:remove`   | Remover this app from its pipeline.                                                                                                    |
| hkpipern   | `heroku pipelines:rename`   | Renomear a pipeline.                                                                                                                    |
| hkpipes    | `heroku pipelines:setup`    | Bootstrap a new pipeline with common settings and Criar a production and staging app (requires a fully formed app.json in the repo). |
| hkpipett   | `heroku pipelines:transfer` | Transfer ownership of a pipeline.                                                                                                     |
| hkpipeu    | `heroku pipelines:update`   | Atualizar the app's stage in a pipeline.                                                                                                 |

## Heroku Plugins aliases

| Alias     | Command                    | Description                                  |
| --------- | -------------------------- | -------------------------------------------- |
| hkplugs   | `heroku plugins`           | Listar installed plugins.                      |
| hkplugsi  | `heroku plugins:install`   | Installs a plugin into the CLI.              |
| hkplugslk | `heroku plugins:link`      | Links a plugin into the CLI for development. |
| hkplugsui | `heroku plugins:uninstall` | Removes a plugin from the CLI.               |
| hkplugsu  | `heroku plugins:update`    | Atualizar installed plugins.                    |

## Heroku `ps` aliases

| Alias   | Command                       | Description                                                      |
| ------- | ----------------------------- | ---------------------------------------------------------------- |
| hkps    | `heroku ps`                   | Listar dynos for an app.                                           |
| hkpsad  | `heroku ps:autoscale:disable` | Disable web dyno autoscaling.                                    |
| hkpsae  | `heroku ps:autoscale:enable`  | Enable web dyno autoscaling.                                     |
| hkpsc   | `heroku ps:copy`              | Copiar a arquivo from a dyno to the local filesystem.                 |
| hkpse   | `heroku ps:exec`              | Criar an SSH session to a dyno.                                 |
| hkpsf   | `heroku ps:forward`           | Forward traffic on a local port to a dyno.                       |
| hkpsk   | `heroku ps:kill`              | Parar app dyno.                                                   |
| hkpsr   | `heroku ps:restart`           | Reiniciar app dynos.                                               |
| hkpsrs  | `heroku ps:resize`            | Gerenciar dyno sizes.                                               |
| hkpss   | `heroku ps:stop`              | Parar app dyno.                                                   |
| hkpssc  | `heroku ps:scale`             | Scale dyno quantity up or down.                                  |
| hkpssck | `heroku ps:socks`             | Launch a SOCKS proxy into a dyno.                                |
| hkpst   | `heroku ps:type`              | Gerenciar dyno sizes.                                               |
| hkpsw   | `heroku ps:wait`              | Wait for all dynos to be running latest version after a release. |

## Heroku redis aliases

| Alias    | Command                               | Description                                                                          |
| -------- | ------------------------------------- | ------------------------------------------------------------------------------------ |
| hkred    | `heroku redis`                        | Gets information about redis.                                                        |
| hkredcli | `heroku redis:cli`                    | Opens a redis prompt.                                                                |
| hkredcr  | `heroku redis:credentials`            | Display credentials information.                                                     |
| hkredi   | `heroku redis:info`                   | Gets information about redis.                                                        |
| hkredkn  | `heroku redis:keyspace-notifications` | Set the keyspace notifications configuration.                                        |
| hkredmm  | `heroku redis:maxmemory`              | Set the key eviction policy.                                                         |
| hkredmt  | `heroku redis:maintenance`            | Gerenciar maintenance windows.                                                          |
| hkredp   | `heroku redis:promote`                | Sets DATABASE as your REDIS_URL.                                                     |
| hkredsr  | `heroku redis:stats-reset`            | Reset all stats covered by RESETSTAT (<https://redis.io/commands/config-resetstat>). |
| hkredt   | `heroku redis:timeout`                | Set the number of seconds to wait before killing idle connections.                   |
| hkredw   | `heroku redis:wait`                   | Wait for Redis instance to be available.                                             |

## Heroku Releases aliases

| Alias  | Command                    | Description                              |
| ------ | -------------------------- | ---------------------------------------- |
| hkrel  | `heroku releases`          | Display the releases for an app.         |
| hkreli | `heroku releases:info`     | View detailed information for a release. |
| hkrelo | `heroku releases:output`   | View the release command output.         |
| hkrelr | `heroku releases:rollback` | Rollback to a previous release.          |

## Heroku Spaces aliases

| Alias  | Command                     | Description                                                  |
| ------ | --------------------------- | ------------------------------------------------------------ |
| hkrvad | `heroku reviewapps:disable` | Disable review apps and/or settings on an existing pipeline. |
| hkrvae | `heroku reviewapps:enable`  | Enable review apps and/or settings on an existing pipeline.  |

## Heroku Run aliases

| Alias  | Command               | Description                                             |
| ------ | --------------------- | ------------------------------------------------------- |
| hkrun  | `heroku run`          | Run a one-off process inside a heroku dyno.             |
| hkrund | `heroku run:detached` | Run a detached dyno, where output is sent to your logs. |

## Heroku Sessions aliases

| Alias       | Command                   | Description                          |
| ----------- | ------------------------- | ------------------------------------ |
| hksessions  | `heroku sessions`         | Listar your OAuth sessions.            |
| hksessionsd | `heroku sessions:destroy` | Excluir (logout) OAuth session by ID. |

## Heroku Spaces aliases

| Alias    | Command                          | Description                                                         |
| -------- | -------------------------------- | ------------------------------------------------------------------- |
| hksp     | `heroku spaces`                  | Listar available spaces.                                              |
| hkspc    | `heroku spaces:create`           | Criar a new space.                                                 |
| hkspd    | `heroku spaces:destroy`          | Destroy a space.                                                    |
| hkspi    | `heroku spaces:info`             | Mostrar info about a space.                                            |
| hksppi   | `heroku spaces:peering:info`     | Display the information necessary to initiate a peering connection. |
| hkspp    | `heroku spaces:peerings`         | Listar peering connections for a space.                               |
| hksppa   | `heroku spaces:peerings:accept`  | Accepts a pending peering request for a private space.              |
| hksppd   | `heroku spaces:peerings:destroy` | Destroys an active peering connection in a private space.           |
| hkspps   | `heroku spaces:ps`               | Listar dynos for a space.                                             |
| hkspr    | `heroku spaces:rename`           | Renames a space.                                                    |
| hksptop  | `heroku spaces:topology`         | Mostrar space topology.                                                |
| hkspt    | `heroku spaces:transfer`         | Transfer a space to another team.                                   |
| hkspconf | `heroku spaces:vpn:config`       | Display the configuration information for VPN.                      |
| hkspvc   | `heroku spaces:vpn:connect`      | Criar VPN.                                                         |
| hkspvcs  | `heroku spaces:vpn:connections`  | Listar the VPN Connections for a space.                               |
| hkspvk   | `heroku spaces:vpn:destroy`      | Destroys VPN in a private space.                                    |
| hkspvi   | `heroku spaces:vpn:info`         | Display the information for VPN.                                    |
| hkspvu   | `heroku spaces:vpn:update`       | Atualizar VPN.                                                         |
| hkspvw   | `heroku spaces:vpn:wait`         | Wait for VPN Connection to be created.                              |
| hkspw    | `heroku spaces:wait`             | Wait for a space to be created.                                     |

## Heroku Webhooks aliases

| Alias   | Command                           | Description                         |
| ------- | --------------------------------- | ----------------------------------- |
| hkwh    | `heroku webhooks`                 | Listar webhooks on an app.            |
| hkwha   | `heroku webhooks:add`             | Adicionar a webhook to an app.            |
| hkwhdv  | `heroku webhooks:deliveries`      | Listar webhook deliveries on an app.  |
| hkwhdvi | `heroku webhooks:deliveries:info` | info for a webhook event on an app. |
| hkwhev  | `heroku webhooks:events`          | Listar webhook events on an app.      |
| hkwhevi | `heroku webhooks:events:info`     | info for a webhook event on an app. |
| hkwhi   | `heroku webhooks:info`            | info for a webhook on an app.       |
| hkwhr   | `heroku webhooks:remove`          | removes a webhook from an app.      |
| hkwhu   | `heroku webhooks:update`          | updates a webhook in an app.        |
