import { h, defineComponent } from "../../../lib/index.js";
import { MatchHistory } from "./history/MatchHistory.js";
import { UserFriends } from "./friends/UserFriends.js";
import { UserDashboard } from "./dashboard/UserDashboard.js";
import { i18n } from "../../utils/i18n.js";
export const ProfileHub = defineComponent({
  render() {
    return h("div", {
      className: " container flex-grow-1 overflow-hidden "
    }, h("div", {
      class: "row h-100"
    }, h("div", {
      class: "col-12 h-100 d-flex flex-column"
    }, h("ul", {
      class: "nav justify-content-lg-start justify-content-center flex-nowrap overflow-auto c-profile-nav flex-shrink-0",
      id: "myTab",
      role: "tablist"
    }, h("li", {
      class: "nav-item",
      role: "presentation"
    }, h("button", {
      class: "nav-link active",
      id: "dashboard-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#dashboard",
      type: "button",
      role: "tab",
      "aria-controls": "dashboard",
      "aria-selected": "true"
    }, h("div", null, h("i", {
      class: "fa-solid fa-gauge  pe-sm-2"
    }), h("span", {
      className: "d-none d-sm-inline"
    }, i18n.t("profile.dashboard"))))), h("li", {
      class: "nav-item",
      role: "presentation"
    }, h("button", {
      class: "nav-link ",
      id: "friends-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#friends",
      type: "button",
      role: "tab",
      "aria-controls": "friends",
      "aria-selected": "false"
    }, h("div", null, h("i", {
      class: "fa-solid fa-user-group pe-sm-2"
    }), h("span", {
      className: "d-none d-sm-inline"
    }, " ", i18n.t("profile.friends"))))), h("li", {
      class: "nav-item",
      role: "presentation"
    }, h("button", {
      class: "nav-link ",
      id: "history-tab",
      "data-bs-toggle": "tab",
      "data-bs-target": "#history",
      type: "button",
      role: "tab",
      "aria-controls": "history",
      "aria-selected": "false"
    }, h("div", null, h("i", {
      class: "fa-solid fa-clock-rotate-left pe-sm-2"
    }), h("span", {
      className: "d-none d-sm-inline"
    }, i18n.t("profile.history")))))), h("div", {
      className: "tab-content   c-profile-content overflow-auto  flex-grow-1 hidden-scrollbar"
    }, h("div", {
      class: "tab-pane fade  show active h-100",
      id: "dashboard",
      role: "tabpanel",
      "aria-labelledby": "dashboard-tab"
    }, h(UserDashboard, {
      userData: this.props.userData
    })), h("div", {
      class: "tab-pane fade  h-100   ",
      id: "friends",
      role: "tabpanel",
      "aria-labelledby": "friends-tab"
    }, h(UserFriends, null)), h("div", {
      class: "tab-pane fade  h-100",
      id: "history",
      role: "tabpanel",
      "aria-labelledby": "history-tab"
    }, h(MatchHistory, null))))));
  }
});