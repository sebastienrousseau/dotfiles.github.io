import type { SidebarConfig } from "@vuepress/theme-default";

import { aliases } from "../aliases/en";
import { about } from "../about/en";

export const enSidebar: SidebarConfig = [
    about,
    ["/paths/", "Path Management"],
    ["/functions/", "Shell Functions"],
    {
        title: "Aliases",
        collapsable: false,
        children: aliases.children,
    },
];
