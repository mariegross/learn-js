import { createElement } from "../../utils/elements";

import menuIconSrc from "../../assets/burger-menu-icon.svg";

export const createMenuElement = () => {
  const menuButton = createElement("button", {
    className: "menu__btn",
    children: [
      createElement("img", {
        className: "menu__icon",
        src: menuIconSrc,
        alt: "Burger Menu Icon",
      }),
    ],
  });
  return menuButton;
};
