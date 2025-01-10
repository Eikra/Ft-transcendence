import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { NoDataMessage } from "../common/NoDataMessage.js";
export const Matching = defineComponent({
  render() {
    return h("div", {
      className: "d-flex flex-column h-100 "
    }, h("div", {
      className: "d-flex d-flex justify-content-center align-items-center c-no-result py-3 h-100"
    }, h("div", null, h("img", {
      src: "img/matching.png",
      alt: "",
      className: " c-matching-icon my-4"
    }), h("div", {
      className: "mb-3"
    }, h("h5", null, "Searching the galaxy for your perfect opponent... Hold tight, astronaut!")))));
  }
});