import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { NoDataMessage } from "../common/NoDataMessage.js";
export const InviteLobby = defineComponent({
  render() {
    return h("div", {
      className: "d-flex flex-column h-100 "
    }, h("div", {
      className: "d-flex d-flex justify-content-center align-items-center c-no-result py-3 h-100"
    }, h("div", null, h("img", {
      src: "img/waiting.png",
      alt: "",
      className: " c-matching-icon my-4"
    }), h("div", {
      className: "mb-3"
    }, h("h5", null, "Waithing for the other player to accept the invitation...")))));
  }
});