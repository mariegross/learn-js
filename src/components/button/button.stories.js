import "./button.css";
import { createActionElement } from "./button";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const oneWayButton = () => createActionElement();
