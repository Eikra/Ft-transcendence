import { h, defineComponent } from "../../../../lib/index.js";
import { BACKEND_URL } from "../../../utils/apiRequest.js";
import { getUserbadge } from "../../../utils/dateFormater.js";
export const FriendCard = defineComponent({
  render() {
    // console.log("FriendCard" , this.props.friendInf.profile);
    return h("div", {
      className: "mx-2 mx-lg-5  c-match-card mb-3  d-flex align-items-center cursor-pointer p-2 row",
      "on:click": () => this.$context.router.navigateTo(`/profile/${this.props.friendInf.id}`)
    }, h("div", {
      className: "col-10 d-flex justify-content-start"
    }, h("div", null, h("img", {
      src: `${BACKEND_URL}/auth${this.props.friendInf.profile.avatar}`,
      alt: "",
      className: "c-enemy-avatar  me-2"
    })), h("div", {
      className: "text-start"
    }, h("div", {
      className: "c-friend-name",
      "on:click": () => this.$context.router.navigateTo(`/profile/${this.props.friendInf.id}`)
    }, this.props.friendInf.profile.first_name, " ", this.props.friendInf.profile.last_name), h("div", {
      className: "c-display-name",
      "on:click": () => this.$context.router.navigateTo(`/profile/${this.props.friendInf.id}`)
    }, `@${this.props.friendInf.profile.display_name}`))), h("div", {
      className: "col-2  d-flex justify-content-end  h-100"
    }, h("div", null, h("div", {
      className: "c-friend-list-badge"
    }, h("img", {
      src: getUserbadge(this.props.friendInf.profile.level),
      className: "img-fluid h-100 w-100"
    })))));
  }
});