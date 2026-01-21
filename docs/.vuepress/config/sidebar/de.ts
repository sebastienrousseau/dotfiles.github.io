import type { SidebarConfig } from "@vuepress/theme-default";
import { aliases } from "../aliases/de";
import { about } from "../about/de";

export const deSidebar: SidebarConfig = [
    about,
    ["/de/paths/", "Pfade"],
    ["/de/functions/", "Funktionen"],
    {
        title: "Aliase",
        collapsable: false,
        children: aliases.children,
    },
];
