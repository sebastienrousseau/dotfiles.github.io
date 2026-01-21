---
description: Dotfiles 的 Docker 别名
lang: zh-CN
metaTitle: Docker 别名 - Dotfiles (CN)
permalink: /zh/aliases/docker/
---

# Docker 别名

管理 Docker 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名在 `docker.aliases.sh` 中定义，并由 `chezmoi` 自动加载。

## ⚡ 别名

此代码为使用 `docker`、`docker-compose` 和 Docker Swarm 命令进行 Docker 开发提供了一套全面的别名。

#### 基本命令

- `dk` - Docker 快捷方式
- `dkv` - 显示 Docker 版本
- `dki` - 显示系统范围的信息
- `dkl` - 登录到 Docker 注册表
- `dklo` - 从 Docker 注册表注销

#### 容器操作

- `dkps` - 列出正在运行的容器
- `dkpsa` - 列出所有容器
- `dkr` - 在新容器中运行命令
- `dkri` - 运行交互式容器
- `dkrd` - 在后台运行容器
- `dks` - 启动容器
- `dkst` - 停止容器
- `dkrs` - 重启容器
- `dkp` - 暂停容器
- `dkup` - 取消暂停容器
- `dkrm` - 删除容器
- `dkrma` - 删除所有容器
- `dkrmf` - 强制删除容器

#### 容器检查

- `dkin` - 检查容器
- `dkl` - 显示容器日志
- `dklf` - 跟踪容器日志
- `dkt` - 显示容器中正在运行的进程
- `dkst` - 显示容器资源使用情况
- `dkdf` - 显示容器文件系统更改
- `dkpl` - 从注册表拉取镜像
- `dkex` - 在容器中执行命令
- `dkeit` - 执行交互式命令

#### 镜像

- `dki` - 列出镜像
- `dkia` - 列出所有镜像
- `dkb` - 构建镜像
- `dkbt` - 构建并标记镜像
- `dkpu` - 推送镜像到注册表
- `dkrmi` - 删除镜像
- `dkh` - 显示镜像历史记录
- `dksv` - 将镜像保存到 tar 归档
- `dkld` - 从 tar 归档加载镜像
- `dkprune` - 删除未使用的数据
- `dkprunea` - 删除所有未使用的数据
- `dkrmi_dangling` - 删除悬空镜像

#### 卷

- `dkv` - 卷快捷方式
- `dkvls` - 列出卷
- `dkvc` - 创建卷
- `dkvi` - 检查卷
- `dkvrm` - 删除卷
- `dkvp` - 删除未使用的卷

#### 网络

- `dkn` - 网络快捷方式
- `dknls` - 列出网络
- `dknc` - 创建网络
- `dkni` - 检查网络
- `dknrm` - 删除网络
- `dknp` - 删除未使用的网络
- `dkncon` - 将容器连接到网络
- `dkndis` - 将容器从网络断开连接

#### 系统

- `dks` - 系统快捷方式
- `dksdf` - 显示 Docker 磁盘使用情况
- `dksev` - 从 Docker 获取实时事件
- `dksi` - 显示系统范围的信息
- `dksp` - 删除未使用的数据
- `dkspa` - 删除所有未使用的数据
- `dkcon` - 上下文管理

#### 杂项

- `dkcp` - 在容器和本地文件系统之间复制文件
- `dkw` - 阻塞直到容器停止
- `dkk` - 杀死容器
- `dkatt` - 附加到容器
- `dkd` - 检查容器文件系统的更改
- `dkcom` - 从容器创建镜像
- `dktag` - 标记镜像
- `dkexp` - 导出容器的文件系统
- `dkimp` - 导入容器文件系统
- `dkscan` - 扫描镜像漏洞
- `dc` - Docker Compose 快捷方式
- `dcu` - 创建并启动容器
- `dcud` - 在后台创建并启动容器
- `dcd` - 停止并删除容器
- `dcdv` - 停止并删除容器和卷
- `dcr` - 重启服务
- `dcs` - 停止服务
- `dcsta` - 启动服务
- `dcp` - 暂停服务
- `dcup` - 取消暂停服务
- `dcps` - 列出容器
- `dcl` - 查看日志
- `dclf` - 跟踪日志
- `dcex` - 在容器中执行命令
- `dcb` - 构建服务
- `dcpull` - 拉取服务镜像
- `dcpush` - 推送服务镜像
- `dcrm` - 删除停止的容器
- `dcrun` - 运行一次性命令
- `dci` - 列出镜像
- `dck` - 杀死容器
- `dccfg` - 验证并显示 compose 配置
- `dcev` - 接收来自容器的事件
- `dctop` - 显示正在运行的进程
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
- `dksrvps` - 列出服务的任务
- `dksrvl` - 查看服务日志
- `dksrvlf` - 跟踪服务日志
- `dksrvrm` - 删除服务
- `dksrvsc` - 扩展服务
- `dksrvu` - 更新服务
- `dksrvrl` - 回滚服务

#### 堆栈

- `dkstk` - 堆栈快捷方式
- `dkstkls` - 列出堆栈
- `dkstkd` - 部署堆栈
- `dkstkps` - 列出堆栈中的任务
- `dkstksrv` - 列出堆栈中的服务
- `dkstkrm` - 删除堆栈

#### 节点

- `dkn` - 节点快捷方式
- `dknls` - 列出节点
- `dkni` - 检查节点
- `dknp` - 将节点提升为管理节点
- `dknd` - 将节点降级为工作节点
- `dknrm` - 删除节点
- `dknu` - 更新节点
- `dknps` - 列出节点上运行的任务

### 常见工作流程

#### 容器开发工作流程

```bash
# 启动开发容器
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

#### Docker Compose 开发

```bash
# 在后台启动服务，根据需要重建
dcb && dcud
```

#### 清理工作流程

```bash
# 删除所有停止的容器、未使用的网络和悬空镜像
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

#### 部署到 Swarm

```bash
# 从 compose 文件部署或更新堆栈
dkstkd -c docker-compose.yml my-stack
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
