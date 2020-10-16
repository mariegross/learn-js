import { createElement } from "../../utils/elements";
import calendarIconSrc from "../../assets/calendar-symbol.svg";

export const createDetailElement = () => {
  const detailText = createElement("div", {
    className: "detail__text",
    children: [
      createElement("h3", {
        innerText: "Departure",
      }),
      createElement("p", {
        innerText: "12 Feb, 2020",
      }),
    ],
  });

  const detailButton = createElement("button", {
    className: "detail__btn",
    children: [
      createElement("img", {
        className: "detail__icon",
        src: calendarIconSrc,
        alt: "Calendar Icon",
      }),
      detailText,
    ],
  });

  return detailButton;
};

/*
<button>
    <img src="../../assets/calendar-symbol.svg" alt="Calendar">
    <div>
        <h4>DEPARTURE</h4>
        <p>12 Feb, 2020</p>
    </div>
</button>
*/
