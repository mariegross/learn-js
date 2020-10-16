import "./details.css";
import { createDetailElement } from "./details";
import calendarIconSrc from "../../assets/calendar-symbol.svg";
import chairIconSrc from "../../assets/office-chair.svg";
import personIconSrc from "../../assets/person.svg";
import cabIconSrc from "../../assets/taxi.svg";

export default {
  title: "Components/Details",
  parameters: { layout: "centered" },
};

export const departureDetail = () =>
  createDetailElement({
    title: "Departure",
    subline: "12 Feb, 2020",
    imgSrc: calendarIconSrc,
  });

export const classDetail = () =>
  createDetailElement({
    title: "Class",
    subline: "Business",
    imgSrc: chairIconSrc,
  });

export const travellerDetail = () =>
  createDetailElement({
    title: "Travellers",
    subline: "2 Adults",
    imgSrc: personIconSrc,
  });

export const taxiDetail = () =>
  createDetailElement({
    title: "Book a cab",
    subline: "In New Dehli",
    imgSrc: cabIconSrc,
  });
