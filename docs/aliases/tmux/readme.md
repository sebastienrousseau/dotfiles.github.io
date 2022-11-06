# Tmux aliases

This `tmux.aliases.zsh` file creates helpful shortcut aliases for many
commonly used [tmux](https://github.com/tmux/tmux/wiki) commands.

## 💻 Tmux

[Tmux](https://github.com/tmux/tmux/wiki) is a terminal multiplexer. It lets you
switch easily between several programs in one terminal, detach them (they keep
running in the background) and reattach them to a different terminal.

| Alias | Command | Description |
| ----- | ----- | ----- |
| tm |`tmux` | Start tmux. |
| tma |`tmux attach-session` | Attach to a tmux session. |
| tmat |`tmux attach-session -t` | Attach to a tmux session with name. |
| tmks |`tmux kill-session -a` | Kill all tmux sessions. |
| tml |`tmux list-sessions` | List tmux sessions. |
| tmn |`tmux new-session` | Start a new tmux session. |
| tmns |`tmux new -s` | Start a new tmux session with name. |
| tms |`tmux new-session -s` | Start a new tmux session. |
