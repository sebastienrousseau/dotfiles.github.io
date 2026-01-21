---
description: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
lang: zh-CN
metaTitle: The Heroku aliases - Dotfiles (CN)
permalink: /zh/aliases/heroku/

meta:
  - name: keywords
    content: aliases, heroku, cli, api, configuration, dotfiles, linux, macos, shell, windows, bash, zsh
  - name: twitter:card
    content: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
  - name: twitter:description
    content: The Heroku aliases, provide powerful commands that create shortcuts to frequently used Heroku commands. All of these functions and aliases are wrappers around the Heroku CLI which is the basic, fundamental tools of a Heroku system.
  - name: twitter:title
    content: The Heroku aliases - Dotfiles (CN)
  - name: og:title
    content: The Heroku aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | ---------------------- | ---------------------------------------------- |
| hk    | `heroku`               | Heroku CLI command shortcut.                   |
| hka   | `heroku access:add`    | 添加 new users to your app.                     |
| hkau  | `heroku access:update` | 更新 existing collaborators on an team app.  |
| hkh   | `heroku help`          | Display help for heroku.                       |
| hkj   | `heroku join`          | 添加 yourself to a team app.                    |
| hkl   | `heroku commands`      | 列出 all the commands.                         |
| hkla  | `heroku access`        | 列出 who has access to an app.                 |
| hklg  | `heroku logs`          | Display recent log output.                     |
| hkn   | `heroku notifications` | Display notifications.                         |
| hko   | `heroku orgs`          | 列出 the teams that you are a member of.       |
| hkoo  | `heroku orgs:open`     | 打开 the team interface in a browser.          |
| hkp   | `heroku psql`          | 打开 a psql shell to the database.             |
| hkq   | `heroku leave`         | 移除 yourself from a team app.               |
| hkr   | `heroku access:remove` | 移除 users from a team app.                  |
| hkrg  | `heroku regions`       | 列出 available regions for deployment.         |
| hks   | `heroku status`        | Display current status of the Heroku platform. |
| hkt   | `heroku teams`         | 列出 the teams that you are a member of.       |
| hku   | `heroku update`        | 更新 the heroku CLI.                         |
| hkulk | `heroku unlock`        | Unlock an app so any team member can join.     |
| hkw   | `heroku which`         | 显示 which plugin a command is in.             |

## Heroku Add-ons aliases

| Alias    | Command                   | Description                                                |
| -------- | ------------------------- | ---------------------------------------------------------- |
| hkada    | `heroku addons:attach`    | Attach an existing 添加-on resource to an app.              |
| hkadc    | `heroku addons:create`    | 创建 a new 添加-on resource.                              |
| hkadd    | `heroku addons:detach`    | Detach an existing 添加-on resource from an app.            |
| hkaddoc  | `heroku addons:docs`      | 打开 an 添加-on's Dev Center documentation in your browser. |
| hkaddown | `heroku addons:downgrade` | Change 添加-on plan.                                        |
| hkadi    | `heroku addons:info`      | 显示 detailed 添加-on resource and attachment information.  |
| hkadk    | `heroku addons:destroy`   | Permanently destroy an 添加-on resource.                    |
| hkadl    | `heroku addons`           | Lists your 添加-ons and attachments.                        |
| hkado    | `heroku addons:open`      | 打开 an 添加-on's dashboard in your browser.                |
| hkadp    | `heroku addons:plans`     | 列出 all available plans for an 添加-on services.           |
| hkadr    | `heroku addons:rename`    | 重命名 an 添加-on.                                          |
| hkads    | `heroku addons:services`  | 列出 all available 添加-on services.                        |
| hkadu    | `heroku addons:upgrade`   | Change 添加-on plan.                                        |
| hkadw    | `heroku addons:wait`      | 显示 provisioning status of the 添加-ons on the app.        |

## Heroku Apps aliases

| Alias     | Command                        | Description                                    |
| --------- | ------------------------------ | ---------------------------------------------- |
| hkapc     | `heroku apps:create`           | Creates a new app.                             |
| hkape     | `heroku apps:errors`           | View app errors.                               |
| hkapfav   | `heroku apps:favorites`        | 列出 favorites apps.                           |
| hkapfava  | `heroku apps:favorites:add`    | Favorites an app.                              |
| hkapunfav | `heroku apps:favorites:remove` | Unfavorite an app.                             |
| hkapi     | `heroku apps:info`             | 显示 detailed app information.                 |
| hkapj     | `heroku apps:join`             | 添加 yourself to a team app.                    |
| hkapk     | `heroku apps:destroy`          | Permanently destroy an app.                    |
| hkapl     | `heroku apps`                  | 列出 your apps.                                |
| hkaplk    | `heroku apps:lock`             | Prevent team members from joining an app.      |
| hkapo     | `heroku apps:open`             | 打开 the app in a web browser.                 |
| hkapq     | `heroku apps:leave`            | 移除 yourself from a team app.               |
| hkapr     | `heroku apps:rename`           | 重命名 an app.                                 |
| hkaps     | `heroku apps:stacks`           | 显示 the 列出 of available stacks.             |
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
| hk2fas   | `heroku auth:2fa`         | 检查 2fa status.                                           |
| hk2fat   | `heroku auth:token`       | Outputs current CLI authentication token.                   |

## Heroku Authorizations aliases

| Alias  | Command                        | Description                           |
| ------ | ------------------------------ | ------------------------------------- |
| hkauc  | `heroku authorizations:create` | 创建 a new OAuth authorization.     |
| hkaui  | `heroku authorizations:info`   | 显示 an existing OAuth authorization. |
| hkaul  | `heroku authorizations`        | 列出 OAuth authorizations.            |
| hkaur  | `heroku authorizations:revoke` | Revoke OAuth authorization.           |
| hkauro | `heroku authorizations:rotate` | Updates an OAuth authorization token. |
| hkauu  | `heroku authorizations:update` | Updates an OAuth authorization.       |

## Heroku Build packs aliases

| Alias  | Command                      | Description                                                              |
| ------ | ---------------------------- | ------------------------------------------------------------------------ |
| hkbpac | `heroku autocomplete`        | Display autocomplete installation instructions.                          |
| hkbpad | `heroku buildpacks:add`      | 添加 new app 构建-pack, inserting into 列出 of 构建-packs if necessary. |
| hkbpcl | `heroku buildpacks:clear`    | Clear all 构建-packs set on the app.                                    |
| hkbpi  | `heroku buildpacks:info`     | Fetch info about a 构建-pack.                                           |
| hkbpl  | `heroku buildpacks`          | Display the 构建-packs for an app.                                      |
| hkbpr  | `heroku buildpacks:remove`   | 移除 a 构建-pack set on the app.                                      |
| hkbps  | `heroku buildpacks:search`   | 搜索 for 构建-packs.                                                  |
| hkbpv  | `heroku buildpacks:versions` | 列出 versions of a 构建-pack.                                           |

## Heroku Certs aliases

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------------- | ---------------------------------------------------- |
| hkca  | `heroku certs:auto`         | 显示 ACM status for an app.                          |
| hkcad | `heroku certs:add`          | 添加 an SSL certificate to an app.                    |
| hkcae | `heroku certs:auto:enable`  | Enable ACM status for an app.                        |
| hkcak | `heroku certs:auto:disable` | Disable ACM for an app.                              |
| hkcar | `heroku certs:auto:refresh` | Refresh ACM for an app.                              |
| hkcc  | `heroku certs:chain`        | 打印 an ordered & complete chain for a certificate. |
| hkcg  | `heroku certs:generate`     | Generate a key and a CSR or self-signed certificate. |
| hkci  | `heroku certs:info`         | 显示 certificate information for an SSL certificate. |
| hkck  | `heroku certs:key`          | 打印 the correct key for the given certificate.     |
| hkcl  | `heroku certs`              | 列出 SSL certificates for an app.                    |
| hkcr  | `heroku certs:remove`       | 移除 an SSL certificate from an app.               |
| hkcu  | `heroku certs:update`       | 更新 an SSL certificate on an app.                 |

## Heroku ci aliases

| Alias  | Command                      | Description                                                                                    |
| ------ | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| hkcicg | `heroku ci:config:get`       | Get a CI config var.                                                                           |
| hkcics | `heroku ci:config:set`       | Set CI config vars.                                                                            |
| hkcicu | `heroku ci:config:unset`     | Unset CI config vars.                                                                          |
| hkcicv | `ci:config`                  | Display CI config vars.                                                                        |
| hkcid  | `heroku ci:debug`            | Opens an interactive test debugging session with the contents of the current 目录.        |
| hkcie  | `heroku ci:last`             | Looks for the most recent run and returns the output of that run.                              |
| hkcii  | `heroku ci:info`             | 显示 the status of a specific test run.                                                        |
| hkcil  | `heroku ci`                  | Display the most recent CI runs for the given pipeline.                                        |
| hkcim  | `heroku ci:migrate-manifest` | `app-ci.json` is deprecated. Run this command to migrate to app.json with an environments key. |
| hkcio  | `heroku ci:open`             | 打开 the Dashboard version of Heroku CI.                                                       |
| hkcir  | `heroku ci:run`              | Run tests against current 目录.                                                           |
| hkcir2 | `heroku ci:rerun`            | Rerun tests against current 目录.                                                         |

## Heroku config aliases

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------------------ | -------------------------------- |
| hkclc | `heroku clients:create`  | 创建 a new OAuth client.       |
| hkcli | `heroku clients:info`    | 显示 details of an oauth client. |
| hkclk | `heroku clients:destroy` | 删除 client by ID.             |
| hkcll | `heroku clients`         | 列出 your OAuth clients.         |
| hkcls | `heroku clients:rotate`  | Rotate OAuth client secret.      |
| hkclu | `heroku clients:update`  | 更新 OAuth client.             |

## Heroku Configuration aliases

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------- | ----------------------------------------- |
| hkcfe | `heroku config:edit`  | Interactively edit config vars.           |
| hkcfg | `heroku config:get`   | Display a single config value for an app. |
| hkcfs | `heroku config:set`   | Set one or more config vars.              |
| hkcfu | `heroku config:unset` | Unset one or more config vars.            |
| hkcfv | `heroku config`       | Display the config vars for an app.       |

## Heroku Container aliases

| Alias       | Command                    | Description                                                  |
| ----------- | -------------------------- | ------------------------------------------------------------ |
| hkct        | `heroku container`         | Use containers to 构建 and deploy Heroku apps.              |
| hkctin      | `heroku container:login`   | Log in to Heroku Container Registry.                         |
| hkctout     | `heroku container:logout`  | Log out from Heroku Container Registry.                      |
| hkctpull    | `heroku container:pull`    | Pulls an image from an app's process type.                   |
| hkctpush    | `heroku container:push`    | Builds, then pushes Docker images to deploy your Heroku app. |
| hkctrelease | `heroku container:release` | Releases previously pushed Docker images to your Heroku app. |
| hkctrm      | `heroku container:rm`      | 移除 the process type from your app.                       |
| hkctrun     | `heroku container:run`     | Builds, then runs the docker image locally.                  |

## Heroku Domains aliases

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------------------- | ------------------------------------------------------------- |
| hkdo  | `heroku domains`        | 列出 domains for an app.                                      |
| hkdoa | `heroku domains:add`    | 添加 a domain to an app.                                       |
| hkdoc | `heroku domains:clear`  | 移除 all domains from an app.                               |
| hkdoi | `heroku domains:info`   | 显示 detailed information for a domain on an app.             |
| hkdor | `heroku domains:remove` | 移除 a domain from an app.                                  |
| hkdou | `heroku domains:update` | 更新 a domain to use a different SSL certificate on an app. |
| hkdow | `heroku domains:wait`   | Wait for domain to be active for an app.                      |

## Heroku Drains aliases

| 别名  | 命令                   | 描述                                                                       |
| ----- | ---------------------- | --------------------------------- |
| hkdr  | `heroku drains`        | Display the log drains of an app. |
| hkdra | `heroku drains:add`    | Adds a log drain to an app.       |
| hkdrr | `heroku drains:remove` | Removes a log drain from an app.  |

## Heroku Dyno aliases

| Alias  | Command               | Description                     |
| ------ | --------------------- | ------------------------------- |
| hkdyk  | `heroku dyno:kill`    | 停止 app dyno.                  |
| hkdyrz | `heroku dyno:resize`  | 管理 dyno sizes.              |
| hkdyrs | `heroku dyno:restart` | 重启 app dynos.              |
| hkdysc | `heroku dyno:scale`   | Scale dyno quantity up or down. |
| hkdyst | `heroku dyno:stop`    | 停止 app dyno.                  |

## Heroku Features aliases

| Alias   | Command                   | Description                          |
| ------- | ------------------------- | ------------------------------------ |
| hkfeat  | `heroku features`         | 列出 available app features.         |
| hkfeatd | `heroku features:disable` | Disables an app feature.             |
| hkfeate | `heroku features:enable`  | Enables an app feature.              |
| hkfeati | `heroku features:info`    | Display information about a feature. |

## Heroku Git aliases

| Alias  | Command             | Description                                                                    |
| ------ | ------------------- | ------------------------------------------------------------------------------ |
| hkgitc | `heroku git:clone`  | Clones a heroku app to your local machine at 目录 (defaults to app name). |
| hkgitr | `heroku git:remote` | Adds a git remote to an app repo.                                              |

## Heroku Keys aliases

| Alias  | Command              | Description                           |
| ------ | -------------------- | ------------------------------------- |
| hkk    | `heroku keys`        | Display your SSH keys.                |
| hkk:a  | `heroku keys:add`    | 添加 an SSH key for a user.            |
| hkk:cl | `heroku keys:clear`  | 移除 all SSH keys for current user. |
| hkk:r  | `heroku keys:remove` | 移除 an SSH key from the user.      |

## Heroku Labs aliases

| Alias   | Command               | Description                       |
| ------- | --------------------- | --------------------------------- |
| hklab   | `heroku labs`         | 列出 experimental features.       |
| hklab:d | `heroku labs:disable` | Disables an experimental feature. |
| hklab:e | `heroku labs:enable`  | Enables an experimental feature.  |
| hklab:i | `heroku labs:info`    | 显示 feature info.                |

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

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------------------- | ------------------------------ |
| hkmb  | `heroku members`        | 列出 members of a team.        |
| hkmba | `heroku members:add`    | Adds a user to a team.         |
| hkmbr | `heroku members:remove` | Removes a user from a team.    |
| hkmbs | `heroku members:set`    | Sets a members role in a team. |

## Heroku Postgres aliases

| Alias       | Command                                         | Description                                                                                                           |
| ----------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| hkpg        | `heroku pg`                                     | 显示 database information.                                                                                            |
| hkpgb       | `heroku pg:bloat`                               | 显示 table and index bloat in your database ordered by most wasteful.                                                 |
| hkpgbk      | `heroku pg:backups`                             | 列出 database backups.                                                                                                |
| hkpgbkcl    | `heroku pg:backups:cancel`                      | Cancel an in-progress backup or restore (default newest).                                                             |
| hkpgbkc     | `heroku pg:backups:capture`                     | Capture a new backup.                                                                                                 |
| hkpgbkdl    | `heroku pg:backups:delete`                      | 删除 a backup.                                                                                                      |
| hkpgbkdw    | `heroku pg:backups:download`                    | Downloads database backup.                                                                                            |
| hkpgbki     | `heroku pg:backups:info`                        | Get information about a specific backup.                                                                              |
| hkpgbkr     | `heroku pg:backups:restore`                     | Restore a backup (default latest) to a database.                                                                      |
| hkpgbks     | `heroku pg:backups:schedule`                    | Schedule daily backups for given database.                                                                            |
| hkpgbksh    | `heroku pg:backups:schedules`                   | 列出 backup schedule.                                                                                                 |
| hkpgbkurl   | `heroku pg:backups:url`                         | Get secret but publicly accessible URL of a backup.                                                                   |
| hkpgbkk     | `heroku pg:backups:unschedule`                  | 停止 daily backups.                                                                                                   |
| hkpgblk     | `heroku pg:blocking`                            | Display queries holding locks other queries are waiting to be released.                                               |
| hkpgc       | `heroku pg:copy`                                | 复制 all data from source db to target.                                                                               |
| hkpgcpa     | `heroku pg:connection-pooling:attach`           | 添加 an attachment to a database using connection pooling.                                                             |
| hkpgcr      | `heroku pg:credentials`                         | 显示 information on credentials in the database.                                                                      |
| hkpgcrc     | `heroku pg:credentials:create`                  | 创建 credential within database.                                                                                    |
| hkpgcrd     | `heroku pg:credentials:destroy`                 | Destroy credential within database.                                                                                   |
| hkpgcrr     | `heroku pg:credentials:rotate`                  | Rotate the database credentials.                                                                                      |
| hkpgcrrd    | `heroku pg:credentials:repair-default`          | Repair the permissions of the default credential within database.                                                     |
| hkpgcrurl   | `heroku pg:credentials:url`                     | 显示 information on a database credential.                                                                            |
| hkpgdg      | `heroku pg:diagnose`                            | Run or view diagnostics report.                                                                                       |
| hkpgi       | `heroku pg:info`                                | 显示 database information.                                                                                            |
| hkpgk       | `heroku pg:kill`                                | Kill a query.                                                                                                         |
| hkpgka      | `heroku pg:killall`                             | Terminates all connections for all credentials.                                                                       |
| hkpglks     | `heroku pg:locks`                               | Display queries with active locks.                                                                                    |
| hkpglnk     | `heroku pg:links`                               | Lists all databases and information on link.                                                                          |
| hkpglnkc    | `heroku pg:links:create`                        | 创建 a link between data stores.                                                                                    |
| hkpglnkd    | `heroku pg:links:destroy`                       | Destroys a link between data stores.                                                                                  |
| hkpgmt      | `heroku pg:maintenance`                         | 显示 current maintenance information.                                                                                 |
| hkpgmtr     | `heroku pg:maintenance:run`                     | 开始 maintenance.                                                                                                    |
| hkpgmtw     | `heroku pg:maintenance:window`                  | Set weekly maintenance window.                                                                                        |
| hkpgo       | `heroku pg:outliers`                            | 显示 10 queries that have longest execution time in aggregate.                                                        |
| hkpgp       | `heroku pg:promote`                             | Sets DATABASE as your DATABASE_URL.                                                                                   |
| hkpgps      | `heroku pg:ps`                                  | View active queries with execution time.                                                                              |
| hkpgpsql    | `heroku pg:psql`                                | 打开 a psql shell to the database.                                                                                    |
| hkpgpull    | `heroku pg:pull`                                | Pull Heroku database into local or remote database.                                                                   |
| hkpgpush    | `heroku pg:push`                                | Push local or remote into Heroku database.                                                                            |
| hkpgreset   | `heroku pg:reset`                               | 删除 all data in DATABASE.                                                                                          |
| hkpgset     | `heroku pg:settings`                            | 显示 your current database settings.                                                                                  |
| hkpgsetllw  | `heroku pg:settings:log-lock-waits`             | Controls whether a log message is produced when a session waits longer than the deadlock_timeout to acquire a lock.   |
| hkpgsetlmds | `heroku pg:settings:log-min-duration-statement` | The duration of each completed statement will be logged if the statement completes after the time specified by VALUE. |
| hkpgsetlgs  | `heroku pg:settings:log-statement`              | `log_statement` controls which SQL statements are logged.                                                             |
| hkpguf      | `heroku pg:unfollow`                            | 停止 a replica from following and make it a writeable database.                                                       |
| hkpgup      | `heroku pg:upgrade`                             | Unfollow a database and upgrade it to the latest stable PostgreSQL version.                                           |
| hkpgvs      | `heroku pg:vacuum-stats`                        | 显示 dead rows and whether an automatic vacuum is expected to be triggered.                                           |
| hkpgww      | `heroku pg:wait`                                | Blocks until database is available.                                                                                   |

## Heroku Pipelines aliases

| Alias      | Command                     | Description                                                                                                                           |
| ---------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| hkpipe     | `heroku pipelines`          | 列出 pipelines you have access to.                                                                                                    |
| hkpipea    | `heroku pipelines:add`      | 添加 this app to a pipeline.                                                                                                           |
| hkpipec    | `heroku pipelines:create`   | 创建 a new pipeline.                                                                                                                |
| hkpipect   | `heroku pipelines:connect`  | Connect a github repo to an existing pipeline.                                                                                        |
| hkpipediff | `heroku pipelines:diff`     | Compares the latest release of this app to its downstream app(s).                                                                     |
| hkpipei    | `heroku pipelines:info`     | 显示 列出 of apps in a pipeline.                                                                                                      |
| hkpipek    | `heroku pipelines:destroy`  | Destroy a pipeline.                                                                                                                   |
| hkpipeo    | `heroku pipelines:open`     | 打开 a pipeline in dashboard.                                                                                                         |
| hkpipep    | `heroku pipelines:promote`  | Promote the latest release of this app to its downstream app(s).                                                                      |
| hkpiper    | `heroku pipelines:remove`   | 移除 this app from its pipeline.                                                                                                    |
| hkpipern   | `heroku pipelines:rename`   | 重命名 a pipeline.                                                                                                                    |
| hkpipes    | `heroku pipelines:setup`    | Bootstrap a new pipeline with common settings and 创建 a production and staging app (requires a fully formed app.json in the repo). |
| hkpipett   | `heroku pipelines:transfer` | Transfer ownership of a pipeline.                                                                                                     |
| hkpipeu    | `heroku pipelines:update`   | 更新 the app's stage in a pipeline.                                                                                                 |

## Heroku Plugins aliases

| Alias     | Command                    | Description                                  |
| --------- | -------------------------- | -------------------------------------------- |
| hkplugs   | `heroku plugins`           | 列出 installed plugins.                      |
| hkplugsi  | `heroku plugins:install`   | Installs a plugin into the CLI.              |
| hkplugslk | `heroku plugins:link`      | Links a plugin into the CLI for development. |
| hkplugsui | `heroku plugins:uninstall` | Removes a plugin from the CLI.               |
| hkplugsu  | `heroku plugins:update`    | 更新 installed plugins.                    |

## Heroku `ps` aliases

| Alias   | Command                       | Description                                                      |
| ------- | ----------------------------- | ---------------------------------------------------------------- |
| hkps    | `heroku ps`                   | 列出 dynos for an app.                                           |
| hkpsad  | `heroku ps:autoscale:disable` | Disable web dyno autoscaling.                                    |
| hkpsae  | `heroku ps:autoscale:enable`  | Enable web dyno autoscaling.                                     |
| hkpsc   | `heroku ps:copy`              | 复制 a 文件 from a dyno to the local filesystem.                 |
| hkpse   | `heroku ps:exec`              | 创建 an SSH session to a dyno.                                 |
| hkpsf   | `heroku ps:forward`           | Forward traffic on a local port to a dyno.                       |
| hkpsk   | `heroku ps:kill`              | 停止 app dyno.                                                   |
| hkpsr   | `heroku ps:restart`           | 重启 app dynos.                                               |
| hkpsrs  | `heroku ps:resize`            | 管理 dyno sizes.                                               |
| hkpss   | `heroku ps:stop`              | 停止 app dyno.                                                   |
| hkpssc  | `heroku ps:scale`             | Scale dyno quantity up or down.                                  |
| hkpssck | `heroku ps:socks`             | Launch a SOCKS proxy into a dyno.                                |
| hkpst   | `heroku ps:type`              | 管理 dyno sizes.                                               |
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
| hkredmt  | `heroku redis:maintenance`            | 管理 maintenance windows.                                                          |
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
| hksessions  | `heroku sessions`         | 列出 your OAuth sessions.            |
| hksessionsd | `heroku sessions:destroy` | 删除 (logout) OAuth session by ID. |

## Heroku Spaces aliases

| Alias    | Command                          | Description                                                         |
| -------- | -------------------------------- | ------------------------------------------------------------------- |
| hksp     | `heroku spaces`                  | 列出 available spaces.                                              |
| hkspc    | `heroku spaces:create`           | 创建 a new space.                                                 |
| hkspd    | `heroku spaces:destroy`          | Destroy a space.                                                    |
| hkspi    | `heroku spaces:info`             | 显示 info about a space.                                            |
| hksppi   | `heroku spaces:peering:info`     | Display the information necessary to initiate a peering connection. |
| hkspp    | `heroku spaces:peerings`         | 列出 peering connections for a space.                               |
| hksppa   | `heroku spaces:peerings:accept`  | Accepts a pending peering request for a private space.              |
| hksppd   | `heroku spaces:peerings:destroy` | Destroys an active peering connection in a private space.           |
| hkspps   | `heroku spaces:ps`               | 列出 dynos for a space.                                             |
| hkspr    | `heroku spaces:rename`           | Renames a space.                                                    |
| hksptop  | `heroku spaces:topology`         | 显示 space topology.                                                |
| hkspt    | `heroku spaces:transfer`         | Transfer a space to another team.                                   |
| hkspconf | `heroku spaces:vpn:config`       | Display the configuration information for VPN.                      |
| hkspvc   | `heroku spaces:vpn:connect`      | 创建 VPN.                                                         |
| hkspvcs  | `heroku spaces:vpn:connections`  | 列出 the VPN Connections for a space.                               |
| hkspvk   | `heroku spaces:vpn:destroy`      | Destroys VPN in a private space.                                    |
| hkspvi   | `heroku spaces:vpn:info`         | Display the information for VPN.                                    |
| hkspvu   | `heroku spaces:vpn:update`       | 更新 VPN.                                                         |
| hkspvw   | `heroku spaces:vpn:wait`         | Wait for VPN Connection to be created.                              |
| hkspw    | `heroku spaces:wait`             | Wait for a space to be created.                                     |

## Heroku Webhooks aliases

| Alias   | Command                           | Description                         |
| ------- | --------------------------------- | ----------------------------------- |
| hkwh    | `heroku webhooks`                 | 列出 webhooks on an app.            |
| hkwha   | `heroku webhooks:add`             | 添加 a webhook to an app.            |
| hkwhdv  | `heroku webhooks:deliveries`      | 列出 webhook deliveries on an app.  |
| hkwhdvi | `heroku webhooks:deliveries:info` | info for a webhook event on an app. |
| hkwhev  | `heroku webhooks:events`          | 列出 webhook events on an app.      |
| hkwhevi | `heroku webhooks:events:info`     | info for a webhook event on an app. |
| hkwhi   | `heroku webhooks:info`            | info for a webhook on an app.       |
| hkwhr   | `heroku webhooks:remove`          | removes a webhook from an app.      |
| hkwhu   | `heroku webhooks:update`          | updates a webhook in an app.        |
