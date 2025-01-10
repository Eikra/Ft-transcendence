import { h, Fragment, defineComponent, createApp, Slot } from "../../lib/index.js";
import { Authentication } from "./authentication/Authentication.js";
import { NavBar } from "./navBar/NavBar.js";
import { BASE_API_URL } from "../utils/constants.js";
import { Spinner } from "./common/Spiner.js";
import { SideBar } from "./navBar/SideBar.js";
import { WelcomeBanner } from "./authentication/WelcomeBanner.js";
import { myFetch, BACKEND_URL } from "../utils/apiRequest.js";
import { i18n } from "../utils/i18n.js";
import { NotificationManager } from "./common/Toasts.js";
import { Store, updateStore } from "../../lib/store.js";
import { fetchUserData, Verify2FA } from "./authentication/Verify2FA.js";
export const Layout = defineComponent({
  subscribeStore: ["userData"],
  render() {
    // console.log("render");
    if (this.$context.router.matchedRoute?.skip_auth) {
      return h("div", null, h(Slot, null));
    }
    if (Store.needs_2fa) {
      return h(Verify2FA, null);
    }
    if (!Store.userData) return h(Authentication, {
      "on:loggedIn": async () => updateStore({
        userData: await fetchUserData()
      })
    });
    return h("div", {
      className: "h-100 text-light b"
    }, h("div", {
      className: "stars"
    }), h(NavBar, {
      "on:logout": this.logoutUser,
      userImg: Store.userData?.avatar
    }), h(NotificationManager, null), h("div", {
      className: "d-flex c-main flex-column flex-md-row-reverse "
    }, h("div", {
      className: "w-100 p-3   p-lg-5 flex-grow-1 overflow-hidden"
    }, h("div", {
      className: "h-100 w-100  rounded-4 text-center c-layout-bg overflow-auto  hidden-scrollbar "
    }, h(Slot, null))), h(SideBar, null)));
  },
  async onMounted() {
    // const subscription = this.$context.router.subscribe(({ to }) => {
    //   this.patch();
    // });
    const userData = await fetchUserData();
    // console.log(userData);
    if (userData) {
      i18n.locale = userData.language;
      Store.language = userData.language;
    }
    updateStore({
      userData: userData
    });
  },
  methods: {
    async logoutUser() {
      await myFetch(`${BACKEND_URL}/auth/api/logout`, {
        method: "POST"
      });
      localStorage.removeItem("access_token");
      updateStore({
        userData: null
      });
    }
  }
});