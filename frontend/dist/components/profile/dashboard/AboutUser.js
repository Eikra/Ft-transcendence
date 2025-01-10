import { h, defineComponent } from "../../../../lib/index.js";
export const AboutUser = defineComponent({
  render() {
    return h("div", {
      className: "my-3  c-about-card p-3 glass-effect"
    }, h("div", {
      className: "ps-2 text-center text-lg-start"
    }, h("p", {
      className: ""
    }, h("i", {
      class: "fa-solid fa-hashtag pe-1"
    }), "About Me")), h("div", {
      className: "text-center text-lg-start"
    }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
  }
});