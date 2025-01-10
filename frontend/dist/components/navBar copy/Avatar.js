import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { Link } from "../common/Link.js";
import { i18n } from "../../utils/i18n.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { Store } from "../../../lib/store.js";
export const Avatar = defineComponent({
  subscribeStore: ["image_changed"],
  render() {
    return h("div", {
      class: "nav-item dropdown position-relative"
    }, h("button", {
      class: "nav-link  custom-navBar-items",
      role: "button",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false"
    }, h("img", {
      src: Store.image_changed ?? `${BACKEND_URL}/auth${this.props.userImg}`,
      className: " c-img "
    })), h("div", {
      class: "dropdown-menu  p-2 mt-2 c-dropdown-menu  "
    }, h("div", {
      className: ""
    }, h(Link, {
      className: "dropdown-item  c-dropdown-item",
      to: "/profile"
    }, h("i", {
      class: "fa-solid fa-user pe-2"
    }), i18n.t("navBar.viewProfile"))), h("div", {
      className: " "
    }, h(Link, {
      className: "dropdown-item text-decoration-none  c-dropdown-item",
      to: "/settings"
    }, h("i", {
      class: "fa-solid fa-gear pe-2"
    }), i18n.t("navBar.settings"))), h("li", null, h("hr", {
      className: "dropdown-divider bg-light"
    })), h("div", null, h("a", {
      class: "dropdown-item  c-dropdown-item",
      href: "#",
      "on:click": () => this.$emit("logout")
    }, h("i", {
      class: "fa-solid fa-right-from-bracket pe-2"
    }), i18n.t("navBar.logout")))));
  }
});