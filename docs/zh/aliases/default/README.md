---
description: 默认别名是不特定于任何特定命令的别名。它们是在许多不同上下文中使用的常用别名，为了方便起见在此列出。
lang: zh-CN
metaTitle: 默认别名 - Dotfiles (CN)
permalink: /zh/aliases/default/
---

# 默认别名

`default.aliases.sh` 文件为许多常用命令创建了有用的快捷别名。

## 默认

默认别名是不特定于任何特定命令的别名。
它们是在许多不同上下文中使用的常用别名，为了方便起见在此列出。别名按字母顺序列出，通过方便使用。

| 别名     | 命令                                 | 描述                                                                                                                                     |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| :q       | `quit`                               | `exit` 命令的快捷方式。                                                                                                                  |
| bye      | `quit`                               | `exit` 命令的快捷方式。                                                                                                                  |
| ctf      | `echo $(ls -1 wc -l)`                | 统计当前目录中的文件数。                                                                                                                 |
| curl     | `curl --compressed`                  | 传输数据时使用压缩。                                                                                                                     |
| da       | `date "+%Y-%m-%d %A %T %Z"`          | 显示当前日期和时间。                                                                                                                     |
| h        | `history`                            | 列出所有最近使用的命令。                                                                                                                 |
| halt     | `sudo /sbin/halt`                    | 关闭系统。                                                                                                                               |
| ifconfig | `sudo ifconfig`                      | 将 sudo 附加到 ifconfig（配置网络接口参数）命令。                                                                                        |
| ipinfo   | `ipconfig getpacket en0`             | 获取 en0 的网络接口参数。                                                                                                                |
| moon     | `curl -s "wttr.in/?format=%m"`       | 获取月相。                                                                                                                               |
| nls      | `sudo lsof -i -P grep LISTEN`        | 仅显示活动的网络侦听器。                                                                                                                 |
| now      | `date +"%T"`                         | 显示当前时间。                                                                                                                           |
| op       | `sudo lsof -i -P`                    | 打开端口列表。                                                                                                                           |
| p        | `pwd`                                | `pwd` 的快捷方式，返回工作目录名称。                                                                                                     |
| path     | `echo ${PATH//:/\\n}`                | 在新行上显示 $PATH 变量。                                                                                                                |
| pid      | `ps -f`                              | 显示 uid、pid、父 pid、最近的 CPU 使用率、进程开始时间、控制 tty、经过的 CPU 使用率和关联的命令。                                        |
| ping     | `ping -c 5`                          | 限制 Ping 为 5 个 ECHO_REQUEST 数据包。                                                                                                  |
| please   | `sudo -`                             | 作为超级用户执行命令。                                                                                                                   |
| ports    | `netstat -tulan`                     | 列出所有监听端口。                                                                                                                       |
| poweroff | `sudo /sbin/shutdown`                | 关闭系统电源。                                                                                                                           |
| ps       | `ps auxwww`                          | 获取可执行文件的完整路径。                                                                                                               |
| q        | `quit`                               | `exit` 命令的快捷方式。                                                                                                                  |
| qfind    | `find . -name`                       | 快速搜索文件。                                                                                                                           |
| quit     | `exit`                               | `exit` 命令的快捷方式。                                                                                                                  |
| r        | `reload`                             | 重新加载 shell。                                                                                                                         |
| reboot   | `sudo /sbin/reboot`                  | 重启系统。                                                                                                                               |
| reload   | `exec $SHELL -l`                     | 重新加载 shell。                                                                                                                         |
| shutdown | `sudo shutdown -h now'`              | 关闭系统。                                                                                                                               |
| spd      | `sudo rm -rf /private/var/log/asl/*` | 删除 /private/var/log/asl 中的所有日志文件。                                                                                             |
| srv      | `python3 -m http.server`             | 启动一个简单的 HTTP 服务器。                                                                                                             |
| t        | `tail -f`                            | 打印文本或日志文件的最后 10 行，然后等待文件的新增内容以实时打印。                                                                       |
| top      | `sudo btop`                          | 允许用户实时交互式地监控系统的关键资源或服务器进程。                                                                                     |
| tree     | `tree --dirsfirst`                   | 显示目录树。                                                                                                                             |
| wk       | `date +%V`                           | 显示当前周数。                                                                                                                           |
| wth      | `curl -s "wttr.in/?format=3"`        | 获取天气。                                                                                                                               |
| x        | `quit`                               | `exit` 命令的快捷方式。                                                                                                                  |
