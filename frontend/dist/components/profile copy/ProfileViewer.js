import { h, defineComponent } from "../../../lib/index.js";
import { BASE_API_URL } from "../../utils/constants.js";
import { Spinner } from "../common/Spiner.js";
import { ProfileHub } from "./ProfileHub.js";
import { UserStatsViewer } from "./UserStatsViewer.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { ServerError } from "../common/ServerError.js";
export const ProfileViewer1 = defineComponent({
  state() {
    return {
      userData: null,
      isLoading: true,
      serverError: false
    };
  },
  render() {
    if (this.state.isLoading) return h(Spinner, null);
    if (this.state.serverError) {
      return h(ServerError, null);
    }
    return h("div", {
      className: "p-3 h-lg-100 d-flex flex-column"
    }, h(UserStatsViewer, {
      userData: this.state.userData,
      id: this.$context.router.params.id,
      "on:statusChange": status => {
        // console.log("status", status);
        this.$updateState({
          userData: {
            ...this.state.userData,
            status
          }
        });
      }
    }), this.state.userData.status == "blocked_by" || this.state.userData.status == "blocked" ? h("div", {
      className: "h-100 d-flex flex-column align-items-center justify-content-center"
    }, h("div", {
      className: "c-blocked-img"
    }, h("img", {
      src: "./img/blocked_by.png",
      className: "img c-blocked-img w-100 h-100"
    })), this.state.userData.status == "blocked" ? h("h1", null, "You have blocked this user") : h("h1", null, "You are blocked by this user")) : h(ProfileHub, {
      userData: this.state.userData
    }));
  },
  async onMounted() {
    // console.log(this.$context.router.params.id);
    const profile = await myFetch(`${BACKEND_URL}/manage/profile/${this.$context.router.params.id}/`);
    if (!profile.ok) {
      this.$updateState({
        serverError: true,
        isLoading: false
      });
      return;
    }
    const userData = await profile.json();
    if (userData.redirect) {
      this.$context.router.navigateTo("/profile");
      return;
    }
    // console.log("============> userData", userData);
    this.$updateState({
      isLoading: false,
      userData
    });
  }
});
export const ProfileViewer = defineComponent({
  render() {
    return h(ProfileViewer1, {
      key: this.$context.router.params.id
    });
  }
});