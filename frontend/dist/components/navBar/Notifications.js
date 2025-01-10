import { h, Fragment, defineComponent } from "../../../lib/index.js";
export const Notification = defineComponent({
  render() {
    return h("div", {
      className: "position-relative",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false"
    }, h("i", {
      class: "fa-solid fa-bell fs-3 c-notif"
    }), h("span", {
      className: "bg-danger p-1 rounded-circle c-notif-count"
    }, "9"), h("ul", {
      class: "dropdown-menu   mt-3 p-2 c-dropdown-menu-nofif "
    }, h("li", null, h("a", {
      class: "dropdown-item  c-dropdown-item",
      href: "#"
    }, "Message 1")), h("li", null, h("a", {
      class: "dropdown-item  c-dropdown-item",
      href: "#"
    }, "Message 1")), h("li", null, h("a", {
      class: "dropdown-item  c-dropdown-item",
      href: "#"
    }, "Message 1"))));
  }
});