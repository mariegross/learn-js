import { createElement } from "../../utils/elements";
import singleArrowSrc from "../../assets/arrow-right.svg";

export const createActionElement = () => {
  const actionButton = createElement("button", {
    className: "action__btn active__btn",
    children: [
      createElement("img", {
        className: "action__icon",
        src: singleArrowSrc,
        alt: "Single arrow",
      }),
      createElement("h3", {
        className: "headline",
        innerText: "One Way",
      }),
    ],
  });
  //   const ActionElement = createElement("div", {
  //     className: "action",
  //     children: [actionButton],
  //   });
  return actionButton;
};
