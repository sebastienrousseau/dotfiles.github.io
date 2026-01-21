import type { SidebarConfig } from "@vuepress/theme-default";
import { aliases } from "../aliases/es";
import { about } from "../about/es";

export const esSidebar: SidebarConfig = [
    about,
    ["/es/paths/", "Rutas"],
    ["/es/functions/", "Funciones"],
    {
        title: "Alias",
        collapsable: false,
        children: aliases.children,
    },
];
