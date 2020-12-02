/* import Piano from "./Controller"; */
import Controller from "./Controller";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const controller = new Controller();
  controller.init();
});
