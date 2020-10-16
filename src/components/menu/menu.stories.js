import "./menu.css";
import { createMenuElement } from "./menu";

export default {
  title: "Components/menu",
  parameters: {
    layout: "centered",
  },
};

export const burgerMenu = () => createMenuElement();
