import type { NavbarConfig } from "@vuepress/theme-default";

import { alias } from "../aliases/fr";
import { apropos } from "../about/fr";

export const frNavbar: NavbarConfig = [
  { text: "Alias", link: "/fr/alias/", ariaLabel: "Les Alias - Dotfiles" },
  { text: "À propos", link: "/fr/apropos/", ariaLabel: "À propos - Dotfiles" },
];
