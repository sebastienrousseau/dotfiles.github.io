(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{207:function(e,t,r){"use strict";r.r(t);var a=r(5),c=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"chmod-aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod-aliases"}},[e._v("#")]),e._v(" Chmod aliases")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("chmod.aliases.sh")]),e._v(" file creates helpful shortcut aliases for changing\nfile permissions.")]),e._v(" "),t("h2",{attrs:{id:"permission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permission"}},[e._v("#")]),e._v(" Permission")]),e._v(" "),t("p",[e._v("The chmod utility modifies the file mode bits of the listed files as specified\nby the mode operand. It may also be used to modify the Access Control Lists\n(ACLs) associated with the listed files.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Alias")]),e._v(" "),t("th",[e._v("Command")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("000")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 000")])]),e._v(" "),t("td",[e._v("(chmod a-rwx) sets permissions so that, (U)ser / owner can't read, can't write and can't execute. (G)roup can't read, can't write and can't execute. (O)thers can't read, can't write and can't execute.")])]),e._v(" "),t("tr",[t("td",[e._v("400")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 400")])]),e._v(" "),t("td",[e._v("(chmod a-rw) sets permissions so that, (U)ser / owner can't read, can't write and can execute. (G)roup can't read, can't write and can execute. (O)thers can't read, can't write and can execute.")])]),e._v(" "),t("tr",[t("td",[e._v("444")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 444")])]),e._v(" "),t("td",[e._v("(chmod a-r) sets permissions so that, (U)ser / owner can't read, can't write and can execute. (G)roup can't read, can't write and can execute. (O)thers can't read, can't write and can execute.")])]),e._v(" "),t("tr",[t("td",[e._v("600")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 600")])]),e._v(" "),t("td",[e._v("(chmod a+rwx,u-x,g-rwx,o-rwx) sets permissions so that, (U)ser / owner can read, can write and can't execute. (G)roup can't read, can't write and can't execute. (O)thers can't read, can't write and can't execute.")])]),e._v(" "),t("tr",[t("td",[e._v("644")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 644")])]),e._v(" "),t("td",[e._v("(chmod a+rwx,u-x,g-wx,o-wx) sets permissions so that, (U)ser / owner can read, can write and can't execute. (G)roup can read, can't write and can't execute. (O)thers can read, can't write and can't execute.")])]),e._v(" "),t("tr",[t("td",[e._v("666")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 666")])]),e._v(" "),t("td",[e._v("(chmod a+rwx,u-x,g-x,o-x) sets permissions so that, (U)ser / owner can read, can write and can't execute. (G)roup can read, can write and can't execute. (O)thers can read, can write and can't execute.")])]),e._v(" "),t("tr",[t("td",[e._v("755")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 755")])]),e._v(" "),t("td",[e._v("(chmod a+rwx,g-w,o-w) sets permissions so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can't write and can execute. (O)thers can read, can't write and can execute.")])]),e._v(" "),t("tr",[t("td",[e._v("764")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 764")])]),e._v(" "),t("td",[e._v("(chmod a+rwx,g-x,o-wx) sets permissions so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can write and can't execute. (O)thers can read, can't write and can't execute.")])]),e._v(" "),t("tr",[t("td",[e._v("777")]),e._v(" "),t("td",[t("code",[e._v("chmod -R 777")])]),e._v(" "),t("td",[e._v("(chmod a+rwx) sets permissions so that, (U)ser / owner can read, can write and can execute. (G)roup can read, can write and can execute. (O)thers can read, can write and can execute.")])]),e._v(" "),t("tr",[t("td",[e._v("chgrp")]),e._v(" "),t("td",[t("code",[e._v("chgrp -v")])]),e._v(" "),t("td",[e._v("Change group ownership of files or directories.")])]),e._v(" "),t("tr",[t("td",[e._v("chgrpr")]),e._v(" "),t("td",[t("code",[e._v("chgrp -Rv")])]),e._v(" "),t("td",[e._v("Change group ownership of files or directories recursively.")])]),e._v(" "),t("tr",[t("td",[e._v("chgrpu")]),e._v(" "),t("td",[t("code",[e._v("chgrp -Rv ${USER}")])]),e._v(" "),t("td",[e._v("Change group ownership of files or directories recursively to the current user.")])]),e._v(" "),t("tr",[t("td",[e._v("chmod")]),e._v(" "),t("td",[t("code",[e._v("chmod -v")])]),e._v(" "),t("td",[e._v("Change file mode bits.")])]),e._v(" "),t("tr",[t("td",[e._v("chmodr")]),e._v(" "),t("td",[t("code",[e._v("chmod -Rv")])]),e._v(" "),t("td",[e._v("Change file mode bits recursively.")])]),e._v(" "),t("tr",[t("td",[e._v("chmodu")]),e._v(" "),t("td",[t("code",[e._v("chmod -Rv u+rwX")])]),e._v(" "),t("td",[e._v("Change file mode bits recursively to the current user.")])]),e._v(" "),t("tr",[t("td",[e._v("chmox")]),e._v(" "),t("td",[t("code",[e._v("chmod +x")])]),e._v(" "),t("td",[e._v("Make a file executable.")])]),e._v(" "),t("tr",[t("td",[e._v("chown")]),e._v(" "),t("td",[t("code",[e._v("chown -v")])]),e._v(" "),t("td",[e._v("Change file owner and group.")])]),e._v(" "),t("tr",[t("td",[e._v("chownr")]),e._v(" "),t("td",[t("code",[e._v("chown -Rv")])]),e._v(" "),t("td",[e._v("Change file owner and group recursively.")])]),e._v(" "),t("tr",[t("td",[e._v("chownu")]),e._v(" "),t("td",[t("code",[e._v("chown -Rv ${USER}")])]),e._v(" "),t("td",[e._v("Change file owner and group recursively to the current user.")])])])])])}),[],!1,null,null,null);t.default=c.exports}}]);