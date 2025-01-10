import { h, defineComponent } from "../../../lib/index.js";
export const TournamentHeader = defineComponent({
  render() {
    return h("div", {
      className: "d-flex flex-column justify-content-center  m-4 c-tour-header position-relative"
    }, h("i", {
      class: "fa-solid fa-circle position-absolute top-0 start-0 m-3 c-ti-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute top-0 end-0 m-3 c-ti-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute bottom-0 start-0 m-3 c-ti-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute bottom-0 end-0 m-3 c-ti-font-size"
    }), h("h1", {
      className: "text-center m-3"
    }, "Tournaments"), h("div", {
      className: "d-flex justify-content-center  align-items-center mx-3"
    }, h("button", {
      className: "btn c-btn m-2",
      "on:click": () => this.$emit("create")
    }, "Create Tournament")));
  }
});