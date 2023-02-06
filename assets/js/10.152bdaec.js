(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{204:function(e,t,i){"use strict";i.r(t);var a=i(5),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases"}},[e._v("#")]),e._v(" Aliases")]),e._v(" "),t("p",[e._v("Aliases allow you to create shortcuts for shell commands that you use\nfrequently. This allows you to be more productive and efficient by reducing the\namount of typing you have to do when using the shell regularly. As an example,\ninstead of typing "),t("code",[e._v("git status")]),e._v(" you could type "),t("code",[e._v("gst")]),e._v(" to obtain the same result.")]),e._v(" "),t("p",[e._v("This is a great way to save time and reduce considerably the amount of typing\nyou have to do when using the terminal on a daily basis which helps you to be\nmore productive and efficient.")]),e._v(" "),t("h2",{attrs:{id:"presets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#presets"}},[e._v("#")]),e._v(" Presets")]),e._v(" "),t("p",[e._v("Dotfiles has a collection of configuration presets and diverse recipes that you\ncan use to get started with.")]),e._v(" "),t("h3",{attrs:{id:"automatic-system-detection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatic-system-detection"}},[e._v("#")]),e._v(" Automatic System detection")]),e._v(" "),t("p",[e._v("Dotfiles contains a utility function for detecting the current "),t("code",[e._v("ls")]),e._v(" flavor that\nis in use in order to help setting up the right "),t("code",[e._v("LS_COLORS")]),e._v(" environment\nvariables to your system.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("LS_COLORS")]),e._v(" environment variable is used by the "),t("code",[e._v("ls")]),e._v(" command to colorize the\noutput of the command.")]),e._v(" "),t("h3",{attrs:{id:"check-built-in-aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-built-in-aliases"}},[e._v("#")]),e._v(" Check built-in aliases")]),e._v(" "),t("p",[e._v("Type the following alias command in your terminal:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v("\n")])])]),t("h3",{attrs:{id:"gnu-find-utilities-aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnu-find-utilities-aliases"}},[e._v("#")]),e._v(" GNU Find utilities aliases")]),e._v(" "),t("p",[e._v("macOS systems are based on BSD, rather than on GNU/Linux like RedHat, Debian,\nand Ubuntu. As a result, a lot of the command line tools that ship with macOS\naren’t 100% compatible. For example, the "),t("code",[e._v("find")]),e._v(" command on macOS doesn’t support\nthe "),t("code",[e._v("-printf")]),e._v(" option, which is used by the "),t("code",[e._v("locate")]),e._v(" command. This means that the\n"),t("code",[e._v("locate")]),e._v(" command doesn’t work on macOS. To fix this, you can install the GNU\nversions of these commands, which are fully compatible with the Linux versions.")]),e._v(" "),t("p",[e._v("The GNU Find Utilities are the basic directory searching utilities of the GNU\noperating system. These programs are typically used in conjunction with other\nprograms to provide modular and powerful directory search and file locating\ncapabilities to other commands.")]),e._v(" "),t("p",[e._v("The tools supplied with this package are:")]),e._v(" "),t("ul",[t("li",[e._v("find - search for files in a directory hierarchy")]),e._v(" "),t("li",[e._v("locate - list files in databases that match a pattern")]),e._v(" "),t("li",[e._v("updatedb - update a file name database")]),e._v(" "),t("li",[e._v("xargs - build and execute command lines from standard input")])]),e._v(" "),t("p",[e._v("Type the following alias command in your terminal:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" findutils\n")])])]),t("h3",{attrs:{id:"the-dotfiles-aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-dotfiles-aliases"}},[e._v("#")]),e._v(" The Dotfiles aliases")]),e._v(" "),t("p",[e._v("The files provided in Dotfiles contain a few opinionated aliases that you might\nfind useful. These are defined in the "),t("code",[e._v("./dist/lib/aliases")]),e._v(" directory and loaded\nautomatically when you start a new shell session.")]),e._v(" "),t("p",[e._v("The aliases are loaded either by the "),t("code",[e._v("~/.bashrc")]),e._v(" file if you are using the Bash\nshell, or in the "),t("code",[e._v("~/.zshrc")]),e._v(" file if you are using the Zsh shell.")]),e._v(" "),t("p",[e._v("They have been grouped by logical categories:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/aliases/archives/"}},[e._v("archives")]),e._v(" - Aliases for working with archives.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/cd/"}},[e._v("cd")]),e._v(" - Aliases for working with directories.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/chmod/"}},[e._v("chmod")]),e._v(" - Aliases for working with file permissions.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/clear/"}},[e._v("clear")]),e._v(" - Aliases for clearing the terminal screen.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/default/"}},[e._v("default")]),e._v(" - The default aliases that are loaded for all users,\nregardless of the shell they are using, and of the operating system they are\non,")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/dig/"}},[e._v("dig")]),e._v(" - Aliases for working with DNS.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/du/"}},[e._v("du")]),e._v(" - Aliases for working with disk usage.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/editor/"}},[e._v("editor")]),e._v(" - Aliases for working with the editor.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/find/"}},[e._v("find")]),e._v(" - Aliases for working with the "),t("code",[e._v("fd")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/gcloud/"}},[e._v("gcloud")]),e._v(" - Aliases for working with the "),t("code",[e._v("gcloud")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/git/"}},[e._v("git")]),e._v(" - Aliases for working with Git.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/gnu/"}},[e._v("gnu")]),e._v(" - Aliases for working with GNU Core utilities.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/heroku/"}},[e._v("heroku")]),e._v(" - Aliases for working with the Heroku CLI.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/interactive/"}},[e._v("interactive")]),e._v(" - Aliases for working with interactive commands.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/jekyll/"}},[e._v("jekyll")]),e._v(" - Aliases for working with Jekyll.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/list/"}},[e._v("list")]),e._v(" - Aliases for working with the "),t("code",[e._v("ls")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/make/"}},[e._v("make")]),e._v(" - Aliases for working with the "),t("code",[e._v("make")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/mkdir/"}},[e._v("mkdir")]),e._v(" - Aliases for working with the "),t("code",[e._v("mkdir")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/npm/"}},[e._v("npm")]),e._v(" - Aliases for working with the "),t("code",[e._v("npm")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/pnpm/"}},[e._v("pnpm")]),e._v(" - Aliases for working with the "),t("code",[e._v("pnpm")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/ps/"}},[e._v("ps")]),e._v(" - Aliases for working with the "),t("code",[e._v("ps")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/rsync/"}},[e._v("rsync")]),e._v(" - Aliases for working with the "),t("code",[e._v("rsync")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/rust/"}},[e._v("rust")]),e._v(" - Aliases for working with the Rust programming language.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/subversion/"}},[e._v("subversion")]),e._v(" - Aliases for working with Subversion.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/sudo/"}},[e._v("sudo")]),e._v(" - Aliases for working with the "),t("code",[e._v("sudo")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/tmux/"}},[e._v("tmux")]),e._v(" - Aliases for working with the "),t("code",[e._v("tmux")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/update/"}},[e._v("update")]),e._v(" - Aliases for working with the "),t("code",[e._v("update")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/uuid/"}},[e._v("uuid")]),e._v(" - Aliases for working with the "),t("code",[e._v("uuid")]),e._v(" command.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/aliases/wget/"}},[e._v("wget")]),e._v(" - Aliases for working with the "),t("code",[e._v("wget")]),e._v(" command.")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);