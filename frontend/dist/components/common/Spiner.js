import { h, Fragment, defineComponent } from "../../../lib/index.js";
export const Spinner = defineComponent({
  render() {
    return h("div", {
      className: "d-flex justify-content-center align-items-center h-100 w-100 "
    }, h("div", {
      class: "spinner-grow",
      role: "status"
    }, h("span", {
      class: "visually-hidden"
    }, "Loading...")));
  }
});