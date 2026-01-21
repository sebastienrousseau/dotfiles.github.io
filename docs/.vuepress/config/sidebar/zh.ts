import type { SidebarConfig } from "@vuepress/theme-default";
import { aliases } from "../aliases/zh";
import { about } from "../about/zh";

export const zhSidebar: SidebarConfig = [
  about,
  ["/zh/paths/", "路径"],
  ["/zh/functions/", "函数"],
  {
    title: "别名",
    collapsable: false,
    children: aliases.children,
  },
];
