import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { Link } from "../common/Link.js";
import { SearchBar } from "./SearchBar.js";
export const SideBar = defineComponent({
  render() {
    return h("div", {
      className: " position-relative c-sidbar-container ms-md-2 flex-shrink-0"
    }, h("div", {
      className: " position-absolute start-0 col-md-12 c-icons-bar d-flex align-items-center justify-content-center "
    }, h("ul", {
      className: "d-flex flex-md-column justify-content-around align-items-center h-100 m-0 p-0 w-100 flex-grow-1"
    }, h("li", null, h(Link, {
      className: "text-decoration-none",
      to: "/"
    }, h("i", {
      class: "fa-solid fa-trophy"
    }))), h("li", null, h(Link, {
      className: "text-decoration-none",
      to: "/leaderbord"
    }, h("i", {
      class: "fa-solid fa-ranking-star"
    }))), h("li", {
      className: "d-inline d-md-none cursor-pointer",
      "data-bs-toggle": "modal",
      "data-bs-target": "#exampleModal"
    }, h("a", {
      className: "text-decoration-none "
    }, h("i", {
      class: "fa-solid fa-magnifying-glass"
    }))), h("li", null, h(Link, {
      className: "text-decoration-none",
      to: "/game"
    }, h("i", {
      class: "fa-solid fa-gamepad"
    }))), h("li", null, h(Link, {
      className: "text-decoration-none",
      to: "/chat"
    }, h("i", {
      class: "fa-solid fa-comments"
    }))))), h("div", {
      class: "modal-wrapper d-md-none"
    }, h("div", {
      className: "modal fade",
      id: "exampleModal",
      tabindex: "-1",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }, h("div", {
      class: "modal-dialog  "
    }, h("div", {
      class: "modal-content c-search-modal"
    }, h("div", {
      class: "modal-header border-bottom-0 p-0"
    }, h(SearchBar, {
      className: " w-100 ",
      id: "navbar-search-sm"
    })))))));
  }
});