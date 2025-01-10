import { h, defineComponent, Fragment } from "../../../lib/index.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
import { UserActions } from "./UserActions.js";
import { getUserbadge } from "../../utils/dateFormater.js";
export const UserStatsViewer = defineComponent({
  render() {
    return h("div", {
      className: "row mb-3  d-flex align-items-center"
    }, h("div", {
      className: "col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end mb-3"
    }, h("div", {
      className: "c-profile-img "
    }, h("img", {
      src: `${BACKEND_URL}/auth${this.props.userData.avatar}`,
      className: "img c-profile-img  w-100 h-100"
    }))), h("div", {
      className: "col-12 col-lg-6  d-flex justify-content-center justify-content-lg-start  align-items-center mb-3"
    }, h("div", {
      className: "text-lg-start "
    }, h("p", {
      className: "mb-1 c-user-stat-name fs-3"
    }, this.props.userData.first_name, " ", this.props.userData.last_name), h("div", {
      className: "mb-3 d-flex justify-content-center justify-content-lg-start align-items-center"
    }, h("p", {
      className: "m-0 c-user-stat-d-name pe-2"
    }, "@_", this.props.userData.display_name)), h(UserActions, {
      status: this.props.userData.status,
      id: this.props.id,
      "on:statusChange": status => this.$emit("statusChange", status)
    }))), h("div", {
      className: "col-12 col-lg-3 d-flex justify-content-center  justify-content-lg-start   mb-3 "
    }, h("div", {
      className: "d-flex flex-column"
    }, h("div", {
      className: "c-ranking-img"
    }, h("img", {
      src: getUserbadge(this.props.userData.level),
      className: "img c-profile-badge"
    })))));
  }
});