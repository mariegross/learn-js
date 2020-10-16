import { createElement } from "../../utils/elements";

export const createDetailElement = (detail) => {
  const detailText = createElement("div", {
    className: "detail__text",
    children: [
      createElement("h3", {
        innerText: detail.title,
      }),
      createElement("p", {
        innerText: detail.subline,
      }),
    ],
  });

  const detailButton = createElement("button", {
    className: "detail__btn",
    children: [
      createElement("img", {
        className: "detail__icon",
        src: detail.imgSrc,
        alt: `Icon of ${detail.title}`,
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
