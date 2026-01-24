---
description: Docker 别名用于 Dotfiles
lang: zh-CN
metaTitle: Docker 别名 - Dotfiles
permalink: /zh/aliases/docker/
---
# Docker 别名

管理 Docker 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `docker.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

该代码提供一整套 Docker 开发别名，覆盖 `docker`、`docker-compose` 与 Docker Swarm。
#### 基础命令
- `dk` - Docker 快捷方式
- `dkv` - 显示 Docker 版本
- `dki` - 显示系统信息
- `dkl` - 登录 Docker Registry
- `dklo` - 退出 Docker Registry
#### 容器操作
- `dkps` - 列出运行中的容器
- `dkpsa` - 列出所有容器
- `dkr` - 在新容器中运行命令
- `dkri` - 运行交互式容器
- `dkrd` - 后台运行容器
- `dks` - 启动容器
- `dkst` - 停止容器
- `dkrs` - 重启容器
- `dkp` - 暂停容器
- `dkup` - 恢复容器
- `dkrm` - 删除容器
- `dkrma` - 删除所有容器
- `dkrmf` - 强制删除容器
#### 容器检查
- `dkin` - 检查容器
- `dkl` - 查看容器日志
- `dklf` - 跟随容器日志
- `dkt` - 查看容器进程
- `dkst` - 查看容器资源占用
- `dkdf` - 查看容器文件系统变更
- `dkpl` - 从 Registry 拉取镜像
- `dkex` - 在容器中执行命令
- `dkeit` - 执行交互式命令
#### 镜像
- `dki` - 列出镜像
- `dkia` - 列出所有镜像
- `dkb` - 构建镜像
- `dkbt` - 构建并标记镜像
- `dkpu` - 推送镜像
- `dkrmi` - 删除镜像
- `dkh` - 显示镜像历史
- `dksv` - 保存镜像为 tar
- `dkld` - 从 tar 载入镜像
- `dkprune` - 清理未使用数据
- `dkprunea` - 清理所有未使用数据
- `dkrmi_dangling` - 删除悬挂镜像
#### 卷
- `dkv` - 卷快捷方式
- `dkvls` - 列出卷
- `dkvc` - 创建卷
- `dkvi` - 检查卷
- `dkvrm` - 删除卷
- `dkvp` - 删除未使用卷
#### 网络
- `dkn` - 网络快捷方式
- `dknls` - 列出网络
- `dknc` - 创建网络
- `dkni` - 检查网络
- `dknrm` - 删除网络
- `dknp` - 删除未使用网络
- `dkncon` - 连接容器到网络
- `dkndis` - 断开容器网络
#### 系统
- `dks` - 系统快捷方式
- `dksdf` - 显示 Docker 磁盘使用
- `dksev` - 获取 Docker 实时事件
- `dksi` - 显示系统信息
- `dksp` - 清理未使用数据
- `dkspa` - 清理所有未使用数据
- `dkcon` - 上下文管理
#### 其他
- `dkcp` - 容器与本地复制文件
- `dkw` - 阻塞直到容器停止
- `dkk` - 杀死容器
- `dkatt` - 附加到容器
- `dkd` - 检查容器文件系统变更
- `dkcom` - 从容器创建镜像
- `dktag` - 标记镜像
- `dkexp` - 导出容器文件系统
- `dkimp` - 导入容器文件系统
- `dkscan` - 扫描镜像漏洞
- `dc` - Docker Compose 快捷方式
- `dcu` - 创建并启动容器
- `dcud` - 后台创建并启动容器
- `dcd` - 停止并删除容器
- `dcdv` - 停止并删除容器与卷
- `dcr` - 重启服务
- `dcs` - 停止服务
- `dcsta` - 启动服务
- `dcp` - 暂停服务
- `dcup` - 恢复服务
- `dcps` - 列出容器
- `dcl` - 查看日志
- `dclf` - 跟随日志
- `dcex` - 容器内执行命令
- `dcb` - 构建服务
- `dcpull` - 拉取服务镜像
- `dcpush` - 推送服务镜像
- `dcrm` - 删除已停止容器
- `dcrun` - 运行一次性命令
- `dci` - 列出镜像
- `dck` - 杀死容器
- `dccfg` - 校验并显示 compose 配置
- `dcev` - 接收事件
- `dctop` - 显示进程
- `dcv` - 显示 Docker Compose 版本
#### Swarm 管理
- `dksw` - Swarm 快捷方式
- `dkswi` - 初始化 Docker Swarm
- `dkswj` - 加入 Docker Swarm
- `dkswjt` - 管理加入令牌
- `dkswl` - 离开 Swarm
- `dkswu` - 更新 Swarm
- `dkswunl` - 解锁 Swarm
- `dkswunk` - 管理解锁密钥
#### 服务
- `dksrv` - 服务快捷方式
- `dksrvls` - 列出服务
- `dksrvc` - 创建服务
- `dksrvi` - 检查服务
- `dksrvps` - 列出服务任务
- `dksrvl` - 查看服务日志
- `dksrvlf` - 跟随服务日志
- `dksrvrm` - 删除服务
- `dksrvsc` - 扩缩容服务
- `dksrvu` - 更新服务
- `dksrvrl` - 回滚服务
#### Stacks
- `dkstk` - Stack 快捷方式
- `dkstkls` - 列出 stacks
- `dkstkd` - 部署 stack
- `dkstkps` - 列出 stack 任务
- `dkstksrv` - 列出 stack 服务
- `dkstkrm` - 删除 stack
#### Nodes
- `dkn` - Node 快捷方式
- `dknls` - 列出 nodes
- `dkni` - 检查 node
- `dknp` - 升级为 manager
- `dknd` - 降级为 worker
- `dknrm` - 删除 node
- `dknu` - 更新 node
- `dknps` - 列出 node 上的任务

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
