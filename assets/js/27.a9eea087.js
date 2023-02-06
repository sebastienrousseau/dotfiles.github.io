(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{221:function(t,e,v){"use strict";v.r(e);var _=v(5),l=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"list-aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-aliases"}},[t._v("#")]),t._v(" List aliases")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("list.aliases.sh")]),t._v(" file creates helpful shortcut aliases for listing files\nand directories.")]),t._v(" "),e("p",[t._v("The List aliases are a collection of aliases that allow you to interact with\nthe "),e("code",[t._v("ls")]),t._v(" command in a more interactive way in order to display the content of a\ndirectory.")]),t._v(" "),e("p",[t._v("For each operand that names a file of a type other than directory, "),e("code",[t._v("ls")]),t._v(" displays\nits name as well as any requested, associated information. For each operand\nthat names a file of type directory, "),e("code",[t._v("ls")]),t._v(" displays the names of files contained\nwithin that directory, as well as any requested, associated information.")]),t._v(" "),e("h2",{attrs:{id:"ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[t._v("#")]),t._v(" ls")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ls",target:"_blank",rel:"noopener noreferrer"}},[t._v("ls"),e("OutboundLink")],1),t._v(" is a command that lists the contents of\na directory.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Alias")]),t._v(" "),e("th",[t._v("Command")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("l.")]),t._v(" "),e("td",[e("code",[t._v('ls -dlhF .\\* | grep -v "^d"')])]),t._v(" "),e("td",[t._v("List hidden files.")])]),t._v(" "),e("tr",[e("td",[t._v("l")]),t._v(" "),e("td",[e("code",[t._v("ls -lFh")])]),t._v(" "),e("td",[t._v("Size, show type, human readable.")])]),t._v(" "),e("tr",[e("td",[t._v("l1")]),t._v(" "),e("td",[e("code",[t._v("ls -1")])]),t._v(" "),e("td",[t._v("Display one file per line.")])]),t._v(" "),e("tr",[e("td",[t._v("la")]),t._v(" "),e("td",[e("code",[t._v("ls -lAFh")])]),t._v(" "),e("td",[t._v("All files, show type, human readable.")])]),t._v(" "),e("tr",[e("td",[t._v("labc")]),t._v(" "),e("td",[e("code",[t._v("ls -lap")])]),t._v(" "),e("td",[t._v("List all files in alphabetical order.")])]),t._v(" "),e("tr",[e("td",[t._v("lc")]),t._v(" "),e("td",[e("code",[t._v("wc -l")])]),t._v(" "),e("td",[t._v("Count the number of lines in the file.")])]),t._v(" "),e("tr",[e("td",[t._v("lct")]),t._v(" "),e("td",[e("code",[t._v("ls -lcrh")])]),t._v(" "),e("td",[t._v("List files by time, newest first.")])]),t._v(" "),e("tr",[e("td",[t._v("ld")]),t._v(" "),e("td",[e("code",[t._v("ls -ltrh")])]),t._v(" "),e("td",[t._v("Sort by date, oldest first.")])]),t._v(" "),e("tr",[e("td",[t._v("ldir")]),t._v(" "),e("td",[e("code",[t._v("ls -l | egrep '^d'")])]),t._v(" "),e("td",[t._v("List directories only.")])]),t._v(" "),e("tr",[e("td",[t._v("ldot")]),t._v(" "),e("td",[e("code",[t._v("l.")])]),t._v(" "),e("td",[t._v("List hidden files.")])]),t._v(" "),e("tr",[e("td",[t._v("left")]),t._v(" "),e("td",[e("code",[t._v("ls -t -1")])]),t._v(" "),e("td",[t._v("List files by date, most recent last.")])]),t._v(" "),e("tr",[e("td",[t._v("right")]),t._v(" "),e("td",[e("code",[t._v("ls -t -1r")])]),t._v(" "),e("td",[t._v("List files by date, most recent first.")])]),t._v(" "),e("tr",[e("td",[t._v("lf")]),t._v(" "),e("td",[e("code",[t._v("ls -l | egrep -v '^d'")])]),t._v(" "),e("td",[t._v("List files only.")])]),t._v(" "),e("tr",[e("td",[t._v("lk")]),t._v(" "),e("td",[e("code",[t._v("ls -lSrh")])]),t._v(" "),e("td",[t._v("Sort by size, largest first.")])]),t._v(" "),e("tr",[e("td",[t._v("ll")]),t._v(" "),e("td",[e("code",[t._v("la")])]),t._v(" "),e("td",[t._v("Long list, show almost all, show type, human readable.")])]),t._v(" "),e("tr",[e("td",[t._v("lla")]),t._v(" "),e("td",[e("code",[t._v("ls -l -d $PWD/*")])]),t._v(" "),e("td",[t._v("List full path of all files in current directory.")])]),t._v(" "),e("tr",[e("td",[t._v("locale")]),t._v(" "),e("td",[e("code",[t._v("locale -a | grep UTF-8")])]),t._v(" "),e("td",[t._v("List all available locales.")])]),t._v(" "),e("tr",[e("td",[t._v("lp")]),t._v(" "),e("td",[e("code",[t._v("sudo lsof -i -T -n")])]),t._v(" "),e("td",[t._v("List all open ports.")])]),t._v(" "),e("tr",[e("td",[t._v("lr")]),t._v(" "),e("td",[e("code",[t._v("ls -lRh")])]),t._v(" "),e("td",[t._v("Recursive list, show type, human readable.")])]),t._v(" "),e("tr",[e("td",[t._v("ls")]),t._v(" "),e("td",[e("code",[t._v("ls --color")])]),t._v(" "),e("td",[t._v("Colorize the output.")])]),t._v(" "),e("tr",[e("td",[t._v("lS")]),t._v(" "),e("td",[e("code",[t._v("ls -1FSsh")])]),t._v(" "),e("td",[t._v("Order Files Based on Last Modified Time and size.")])]),t._v(" "),e("tr",[e("td",[t._v("lt")]),t._v(" "),e("td",[e("code",[t._v("tree")])]),t._v(" "),e("td",[t._v("List contents of directories in a tree-like format.")])]),t._v(" "),e("tr",[e("td",[t._v("lu")]),t._v(" "),e("td",[e("code",[t._v("ls -lurh")])]),t._v(" "),e("td",[t._v("Sort by date, oldest first.")])]),t._v(" "),e("tr",[e("td",[t._v("lw")]),t._v(" "),e("td",[e("code",[t._v("ls -xAh")])]),t._v(" "),e("td",[t._v("Wide list, show almost all, show type, human readable.")])]),t._v(" "),e("tr",[e("td",[t._v("lx")]),t._v(" "),e("td",[e("code",[t._v("ls | sort -k 1,1 -t .")])]),t._v(" "),e("td",[t._v("Sort by extension.")])]),t._v(" "),e("tr",[e("td",[t._v("lz")]),t._v(" "),e("td",[e("code",[t._v("ls -lSr")])]),t._v(" "),e("td",[t._v("Sort by size, smallest first.")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);