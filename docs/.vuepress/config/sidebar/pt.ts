import type { SidebarConfig } from "@vuepress/theme-default";
import { aliases } from "../aliases/pt";
import { about } from "../about/pt";

export const ptSidebar: SidebarConfig = [
  about,
  ["/pt/paths/", "Caminhos"],
  ["/pt/functions/", "Funções"],
  {
    title: "Aliases",
    collapsable: false,
    children: aliases.children,
  },
];
