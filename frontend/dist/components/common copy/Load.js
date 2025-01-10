import { h, defineComponent, Slot } from "../../../lib/index.js";
export const Load = defineComponent({
  render() {
    return h("button", {
      className: "btn c-btn mx-2 p-2 mb-3",
      "on:click": e => this.$emit("click", e),
      disabled: this.props.loading
    }, this.props.loading ? h("span", null, h("div", {
      class: "spinner-border spinner-border-sm me-2",
      role: "status"
    }, h("span", {
      class: "visually-hidden"
    }, "Loading...")), " ", "Loading...") : h("span", {
      className: ""
    }, h("i", {
      class: "fa-solid fa-arrow-down pe-2"
    }), "Load more"));
  }
});