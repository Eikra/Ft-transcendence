import { h, defineComponent } from "../../../lib/index.js";
export const ServerError = defineComponent({
  render() {
    return h("div", {
      className: "d-flex d-flex justify-content-center align-items-center c-no-result py-3 h-100"
    }, h("div", null, h("img", {
      src: "./img/server-error.png",
      alt: "",
      className: " c-server-error-icon my-4"
    }), h("div", {
      className: "mb-3"
    }, h("h5", null, "Looks like something went wrong. Please try again later."))));
  }
});