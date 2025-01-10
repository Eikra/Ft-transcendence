import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { SearchBar } from "./SearchBar.js";
import { Notification } from "./Notifications.js";
import { Link } from "../common/Link.js";
import { Avatar } from "./Avatar.js";
export const NavBarTop = defineComponent({
  render() {
    return h("div", null, h("nav", {
      class: "navbar navbar-expand-lg  row px-3 w-100 c-navbar-container"
    }, h("div", {
      class: "container"
    }, h("a", {
      class: "  custom-navBar-items-logo ",
      href: "#"
    }, h("i", {
      class: "fa-duotone fa-solid fa-shuttle-space"
    }), " Pong"), h(SearchBar, {
      className: "d-none d-md-inline col-6 col-lg-4 ",
      id: "navbar-search-lg"
    }), h("div", {
      className: "d-flex align-items-center gap-5  p-1 px-4 rounded-4 c-avatar "
    }, h(Avatar, {
      "on:logout": () => this.$emit("logout"),
      userImg: this.props.userImg
    })))));
  }
});