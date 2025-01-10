import { h, defineComponent, Fragment } from "../../../lib/index.js";
import { SearchInput } from "./SearchInput.js";
import { BASE_API_URL } from "../../utils/constants.js";
import { debounce } from "../../utils/debounse.js";
import { i18n } from "../../utils/i18n.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
export const SearchCard = defineComponent({
  render() {
    // console.log(this.props.user);
    return h("div", {
      className: "d-flex gap-2  cursor-pointer c-search-card p-1 ps-2 m-1",
      "on:click": () => {
        // console.log("click");
        this.$context.router.navigateTo(`/profile/${this.props.user.id}`);
      }
    }, h("div", null, h("img", {
      src: `${BACKEND_URL}/auth${this.props.user.avatar}`,
      alt: "profile_pic",
      className: "c-img"
    })), h("div", {
      className: "text-start"
    }, h("p", {
      className: "c-friend-name m-0"
    }, this.props.user.first_name, " ", this.props.user.last_name), h("p", {
      className: "c-display-name m-0"
    }, "@_", this.props.user.display_name)));
  }
});
export const SearchResult = defineComponent({
  render() {
    if (this.props.error) return h("div", {
      className: " position-absolute  w-100  rounded mt-1 p-2 search-result"
    }, h("div", {
      className: "p-2"
    }, h("i", {
      class: "fa-solid fa-circle-exclamation pe-2"
    }), i18n.t("errors.gettingData")));
    return h("div", {
      className: " position-absolute  w-100  rounded mt-1 p-2 search-result"
    }, this.props.resultUsrs.length != 0 ? this.props.resultUsrs.map(user => h(SearchCard, {
      user: user,
      key: user.id
    })) : h("div", {
      className: "p-2"
    }, h("i", {
      class: "fa-solid fa-user-large-slash pe-2"
    }), i18n.t("errors.userNotFound")));
  }
});