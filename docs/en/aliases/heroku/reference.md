---
title: Heroku Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Heroku in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Heroku Reference Appendix | Dotfiles preview
canonical: /en/aliases/heroku/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Heroku Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/heroku/reference/
---

# Heroku Reference Appendix

## Source files

- `.chezmoitemplates/aliases/heroku/heroku-addons.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-apps.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-auth.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-buildpacks.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-certs.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-ci.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-config.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-container.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-domains.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-infra.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-local.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-pipelines.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-postgres.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-ps.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-redis.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-spaces.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku-webhooks.aliases.sh`
- `.chezmoitemplates/aliases/heroku/heroku.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `hk2fa` | `heroku auth:whoami` |
| `hk2fad` | `heroku auth:2fa:disable` |
| `hk2fain` | `heroku auth:login` |
| `hk2faout` | `heroku auth:logout` |
| `hk2fas` | `heroku auth:2fa` |
| `hk2fat` | `heroku auth:token` |
| `hka` | `heroku access:add` |
| `hkada` | `heroku addons:attach` |
| `hkadc` | `heroku addons:create` |
| `hkadd` | `heroku addons:detach` |
| `hkaddoc` | `heroku addons:docs` |
| `hkaddown` | `heroku addons:downgrade` |
| `hkadi` | `heroku addons:info` |
| `hkadk` | `heroku addons:destroy` |
| `hkadl` | `heroku addons` |
| `hkado` | `heroku addons:open` |
| `hkadp` | `heroku addons:plans` |
| `hkadr` | `heroku addons:rename` |
| `hkads` | `heroku addons:services` |
| `hkadu` | `heroku addons:upgrade ` |
| `hkadw` | `heroku addons:wait` |
| `hkapc` | `heroku apps:create` |
| `hkape` | `heroku apps:errors` |
| `hkapfav` | `heroku apps:favorites` |
| `hkapfava` | `heroku apps:favorites:add` |
| `hkapi` | `heroku apps:info` |
| `hkapj` | `heroku apps:join` |
| `hkapk` | `heroku apps:destroy` |
| `hkapl` | `heroku apps` |
| `hkaplk` | `heroku apps:lock` |
| `hkapo` | `heroku apps:open` |
| `hkapq` | `heroku apps:leave` |
| `hkapr` | `heroku apps:rename` |
| `hkaps` | `heroku apps:stacks` |
| `hkapss` | `heroku apps:stacks:set` |
| `hkapt` | `heroku apps:transfer` |
| `hkapulk` | `heroku apps:unlock` |
| `hkapunfav` | `heroku apps:favorites:remove` |
| `hkau` | `heroku access:update` |
| `hkauc` | `heroku authorizations:create` |
| `hkaui` | `heroku authorizations:info` |
| `hkaul` | `heroku authorizations` |
| `hkaur` | `heroku authorizations:revoke` |
| `hkauro` | `heroku authorizations:rotate` |
| `hkauu` | `heroku authorizations:update` |
| `hkbpac` | `heroku autocomplete` |
| `hkbpad` | `heroku buildpacks:add` |
| `hkbpcl` | `heroku buildpacks:clear` |
| `hkbpi` | `heroku buildpacks:info` |
| `hkbpl` | `heroku buildpacks` |
| `hkbpr` | `heroku buildpacks:remove` |
| `hkbps` | `heroku buildpacks:search` |
| `hkbpv` | `heroku buildpacks:versions` |
| `hkca` | `heroku certs:auto` |
| `hkcad` | `heroku certs:add` |
| `hkcae` | `heroku certs:auto:enable` |
| `hkcak` | `heroku certs:auto:disable` |
| `hkcar` | `heroku certs:auto:refresh` |
| `hkcc` | `heroku certs:chain` |
| `hkcfe` | `heroku config:edit` |
| `hkcfg` | `heroku config:get` |
| `hkcfs` | `heroku config:set` |
| `hkcfu` | `heroku config:unset` |
| `hkcfv` | `heroku config` |
| `hkcg` | `heroku certs:generate` |
| `hkci` | `heroku certs:info` |
| `hkcicg` | `heroku ci:config:get` |
| `hkcics` | `heroku ci:config:set` |
| `hkcicu` | `heroku ci:config:unset` |
| `hkcicv` | `heroku ci:config` |
| `hkcid` | `heroku ci:debug` |
| `hkcie` | `heroku ci:last` |
| `hkcii` | `heroku ci:info` |
| `hkcil` | `heroku ci` |
| `hkcim` | `heroku ci:migrate-manifest` |
| `hkcio` | `heroku ci:open` |
| `hkcir` | `heroku ci:run` |
| `hkcir2` | `heroku ci:rerun` |
| `hkck` | `heroku certs:key` |
| `hkcl` | `heroku certs` |
| `hkclc` | `heroku clients:create` |
| `hkcli` | `heroku clients:info` |
| `hkclk` | `heroku clients:destroy` |
| `hkcll` | `heroku clients` |
| `hkcls` | `heroku clients:rotate` |
| `hkclu` | `heroku clients:update` |
| `hkcr` | `heroku certs:remove` |
| `hkct` | `heroku container` |
| `hkctin` | `heroku container:login` |
| `hkctout` | `heroku container:logout` |
| `hkctpull` | `heroku container:pull` |
| `hkctpush` | `heroku container:push` |
| `hkctrelease` | `heroku container:release` |
| `hkctrm` | `heroku container:rm` |
| `hkctrun` | `heroku container:run` |
| `hkcu` | `heroku certs:update` |
| `hkdo` | `heroku domains` |
| `hkdoa` | `heroku domains:add` |
| `hkdoc` | `heroku domains:clear` |
| `hkdoi` | `heroku domains:info` |
| `hkdor` | `heroku domains:remove` |
| `hkdou` | `heroku domains:update` |
| `hkdow` | `heroku domains:wait` |
| `hkdr` | `heroku drains` |
| `hkdra` | `heroku drains:add` |
| `hkdrr` | `heroku drains:remove` |
| `hkdyk` | `heroku dyno:kill` |
| `hkdyrs` | `heroku dyno:restart` |
| `hkdyrz` | `heroku dyno:resize` |
| `hkdysc` | `heroku dyno:scale` |
| `hkdyst` | `heroku dyno:stop` |
| `hkfeat` | `heroku features` |
| `hkfeatd` | `heroku features:disable` |
| `hkfeate` | `heroku features:enable` |
| `hkfeati` | `heroku features:info` |
| `hkgitc` | `heroku git:clone` |
| `hkgitr` | `heroku git:remote` |
| `hkh` | `heroku help` |
| `hkj` | `heroku join` |
| `hkk` | `heroku keys` |
| `hkk` | `heroku` |
| `hkka` | `heroku keys:add` |
| `hkkcl` | `heroku keys:clear` |
| `hkkr` | `heroku keys:remove` |
| `hkl` | `heroku commands` |
| `hkla` | `heroku access` |
| `hklab` | `heroku labs` |
| `hklabd` | `heroku labs:disable` |
| `hklabe` | `heroku labs:enable` |
| `hklabi` | `heroku labs:info` |
| `hklg` | `heroku logs` |
| `hkloc` | `heroku local` |
| `hkloclk` | `heroku lock` |
| `hklocr` | `heroku local:run` |
| `hklocv` | `heroku local:version` |
| `hkmb` | `heroku members` |
| `hkmba` | `heroku members:add` |
| `hkmbr` | `heroku members:remove` |
| `hkmbs` | `heroku members:set` |
| `hkmt` | `heroku maintenance` |
| `hkmtoff` | `heroku maintenance:off` |
| `hkmton` | `heroku maintenance:on` |
| `hkn` | `heroku notifications` |
| `hko` | `heroku orgs` |
| `hkoo` | `heroku orgs:open` |
| `hkp` | `heroku psql` |
| `hkpg` | `heroku pg` |
| `hkpgb` | `heroku pg:bloat` |
| `hkpgbk` | `heroku pg:backups` |
| `hkpgbkc` | `heroku pg:backups:capture` |
| `hkpgbkcl` | `heroku pg:backups:cancel` |
| `hkpgbkdl` | `heroku pg:backups:delete` |
| `hkpgbkdw` | `heroku pg:backups:download` |
| `hkpgbki` | `heroku pg:backups:info` |
| `hkpgbkk` | `heroku pg:backups:unschedule` |
| `hkpgbkr` | `heroku pg:backups:restore` |
| `hkpgbks` | `heroku pg:backups:schedule` |
| `hkpgbksh` | `heroku pg:backups:schedules` |
| `hkpgbkurl` | `heroku pg:backups:url` |
| `hkpgblk` | `heroku pg:blocking` |
| `hkpgc` | `heroku pg:copy` |
| `hkpgcpa` | `heroku pg:connection-pooling:attach` |
| `hkpgcr` | `heroku pg:credentials` |
| `hkpgcrc` | `heroku pg:credentials:create` |
| `hkpgcrd` | `heroku pg:credentials:destroy` |
| `hkpgcrr` | `heroku pg:credentials:rotate` |
| `hkpgcrrd` | `heroku pg:credentials:repair-default` |
| `hkpgcrurl` | `heroku pg:credentials:url` |
| `hkpgdg` | `heroku pg:diagnose` |
| `hkpgi` | `heroku pg:info` |
| `hkpgk` | `heroku pg:kill` |
| `hkpgka` | `heroku pg:killall` |
| `hkpglks` | `heroku pg:locks` |
| `hkpglnk` | `heroku pg:links` |
| `hkpglnkc` | `heroku pg:links:create` |
| `hkpglnkd` | `heroku pg:links:destroy` |
| `hkpgmt` | `heroku pg:maintenance` |
| `hkpgmtr` | `heroku pg:maintenance:run` |
| `hkpgmtw` | `heroku pg:maintenance:window` |
| `hkpgo` | `heroku pg:outliers` |
| `hkpgp` | `heroku pg:promote` |
| `hkpgps` | `heroku pg:ps` |
| `hkpgpsql` | `heroku pg:psql` |
| `hkpgpull` | `heroku pg:pull` |
| `hkpgpush` | `heroku pg:push` |
| `hkpgreset` | `heroku pg:reset` |
| `hkpgset` | `heroku pg:settings` |
| `hkpgsetlgs` | `heroku pg:settings:log-statement` |
| `hkpgsetllw` | `heroku pg:settings:log-lock-waits` |
| `hkpgsetlmds` | `heroku pg:settings:log-min-duration-statement` |
| `hkpguf` | `heroku pg:unfollow` |
| `hkpgup` | `heroku pg:upgrade` |
| `hkpgvs` | `heroku pg:vacuum-stats` |
| `hkpgww` | `heroku pg:wait` |
| `hkpipe` | `heroku pipelines` |
| `hkpipea` | `heroku pipelines:add` |
| `hkpipec` | `heroku pipelines:create` |
| `hkpipect` | `heroku pipelines:connect` |
| `hkpipediff` | `heroku pipelines:diff` |
| `hkpipei` | `heroku pipelines:info` |
| `hkpipek` | `heroku pipelines:destroy` |
| `hkpipeo` | `heroku pipelines:open` |
| `hkpipep` | `heroku pipelines:promote` |
| `hkpiper` | `heroku pipelines:remove` |
| `hkpipern` | `heroku pipelines:rename` |
| `hkpipes` | `heroku pipelines:setup` |
| `hkpipett` | `heroku pipelines:transfer` |
| `hkpipeu` | `heroku pipelines:update` |
| `hkplugs` | `heroku plugins` |
| `hkplugsi` | `heroku plugins:install` |
| `hkplugslk` | `heroku plugins:link` |
| `hkplugsu` | `heroku plugins:update` |
| `hkplugsui` | `heroku plugins:uninstall` |
| `hkps` | `heroku ps` |
| `hkpsad` | `heroku ps:autoscale:disable` |
| `hkpsae` | `heroku ps:autoscale:enable ` |
| `hkpsc` | `heroku ps:copy` |
| `hkpse` | `heroku ps:exec` |
| `hkpsf` | `heroku ps:forward` |
| `hkpsk` | `heroku ps:kill` |
| `hkpsr` | `heroku ps:restart` |
| `hkpsrs` | `heroku ps:resize` |
| `hkpss` | `heroku ps:stop` |
| `hkpssc` | `heroku ps:scale` |
| `hkpssck` | `heroku ps:socks` |
| `hkpst` | `heroku ps:type` |
| `hkpsw` | `heroku ps:wait` |
| `hkq` | `heroku leave` |
| `hkr` | `heroku access:remove` |
| `hkred` | `heroku redis` |
| `hkredcli` | `heroku redis:cli` |
| `hkredcr` | `heroku redis:credentials` |
| `hkredi` | `heroku redis:info` |
| `hkredkn` | `heroku redis:keyspace-notifications` |
| `hkredmm` | `heroku redis:maxmemory` |
| `hkredmt` | `heroku redis:maintenance` |
| `hkredp` | `heroku redis:promote` |
| `hkredsr` | `heroku redis:stats-reset` |
| `hkredt` | `heroku redis:timeout` |
| `hkredw` | `heroku redis:wait` |
| `hkrel` | `heroku releases` |
| `hkreli` | `heroku releases:info` |
| `hkrelo` | `heroku releases:output` |
| `hkrelr` | `heroku releases:rollback` |
| `hkrg` | `heroku regions` |
| `hkrun` | `heroku run` |
| `hkrund` | `heroku run:detached` |
| `hkrvad` | `heroku reviewapps:disable` |
| `hkrvae` | `heroku reviewapps:enable` |
| `hks` | `heroku status` |
| `hksessions` | `heroku sessions` |
| `hksessionsd` | `heroku sessions:destroy` |
| `hksp` | `heroku spaces` |
| `hkspc` | `heroku spaces:create` |
| `hkspconf` | `heroku spaces:vpn:config` |
| `hkspd` | `heroku spaces:destroy` |
| `hkspi` | `heroku spaces:info` |
| `hkspp` | `heroku spaces:peerings` |
| `hksppa` | `heroku spaces:peerings:accept` |
| `hksppd` | `heroku spaces:peerings:destroy` |
| `hksppi` | `heroku spaces:peering:info` |
| `hkspps` | `heroku spaces:ps` |
| `hkspr` | `heroku spaces:rename` |
| `hkspt` | `heroku spaces:transfer` |
| `hksptop` | `heroku spaces:topology` |
| `hkspvc` | `heroku spaces:vpn:connect` |
| `hkspvcs` | `heroku spaces:vpn:connections` |
| `hkspvi` | `heroku spaces:vpn:info` |
| `hkspvk` | `heroku spaces:vpn:destroy` |
| `hkspvu` | `heroku spaces:vpn:update` |
| `hkspvw` | `heroku spaces:vpn:wait` |
| `hkspw` | `heroku spaces:wait` |
| `hkt` | `heroku teams` |
| `hku` | `heroku update` |
| `hkulk` | `heroku unlock` |
| `hkw` | `heroku which` |
| `hkwh` | `heroku webhooks` |
| `hkwha` | `heroku webhooks:add` |
| `hkwhdv` | `heroku webhooks:deliveries` |
| `hkwhdvi` | `heroku webhooks:deliveries:info` |
| `hkwhev` | `heroku webhooks:events` |
| `hkwhevi` | `heroku webhooks:events:info` |
| `hkwhi` | `heroku webhooks:info` |
| `hkwhr` | `heroku webhooks:remove` |
| `hkwhu` | `heroku webhooks:update` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
