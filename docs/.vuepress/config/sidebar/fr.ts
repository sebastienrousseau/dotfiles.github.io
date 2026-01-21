import type { SidebarConfig } from "@vuepress/theme-default";

import { alias } from "../aliases/fr";
import { apropos } from "../about/fr";

export const frSidebar: SidebarConfig = [
    apropos,
    ["/fr/paths/", "Gestion des Chemins"],
    ["/fr/functions/", "Fonctions Shell"],
    {
        title: "Les alias",
        collapsable: false,
        children: alias.children,
    },
];
