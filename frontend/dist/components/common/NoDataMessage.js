import { h, defineComponent } from "../../../lib/index.js";
export const NoDataMessage = defineComponent({
  render() {
    return h("div", {
      className: "d-flex  justify-content-center align-items-center c-no-result py-3 h-100"
    }, h("div", null, h("img", {
      src: this.props.iconPath,
      alt: "",
      className: " c-no-result-icon my-4"
    }), h("div", {
      className: "mb-3"
    }, h("h5", null, this.props.message))));
  }
});