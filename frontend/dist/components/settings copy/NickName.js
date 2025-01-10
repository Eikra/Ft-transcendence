import { h, defineComponent } from "../../../lib/index.js";
export const NickName = defineComponent({
  render() {
    return h("div", {
      className: "row mb-3"
    }, h("div", {
      class: "mb-3 text-start "
    }, h("label", {
      for: "exampleInputEmail1",
      class: "form-label ps-3"
    }, "Nick Name"), h("input", {
      type: "email",
      class: "form-control c-floating-input border-0",
      "aria-describedby": "emailHelp"
    })));
  }
});