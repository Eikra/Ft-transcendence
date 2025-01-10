import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { NoDataMessage } from "../common/NoDataMessage.js";
import { i18n } from "../../utils/i18n.js";
export const NotFound = defineComponent({
  render() {
    return h("div", {
      className: "d-flex flex-column h-100"
    }, h("div", {
      className: "d-flex d-flex justify-content-center align-items-center c-no-result py-3 h-100"
    }, h("div", null, h("img", {
      src: "img/404.png",
      alt: i18n.t('not_found.image_alt'),
      className: "c-matching-icon my-4"
    }), h("div", {
      className: "mb-3"
    }, h("h5", null, i18n.t('not_found.message'))))));
  }
});