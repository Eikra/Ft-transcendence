import { h, Fragment, defineComponent, createApp } from "../../../lib/index.js";
import { LogIn } from "./LogIn.js";
import { WelcomeBanner } from "./WelcomeBanner.js";
import { SignUp } from "./SignUp.js";
import { Verify2FA } from "./Verify2FA.js";
import { Store } from "../../../lib/store.js";
export const Authentication = defineComponent({
  state() {
    return {
      activeComponent: "welcome" // welcome , login, singUp , verify2FA
    };
  },
  render() {
    // console.log("render", Store);
    if (Store.userData) {
      this.$context.router.navigateTo("/");
    }
    return h("div", {
      className: "sky-bg"
    }, this.state.activeComponent === "welcome" ? h(WelcomeBanner, {
      "on:changeState": () => this.$updateState({
        activeComponent: "login"
      })
    }) : h(Fragment, null), this.state.activeComponent === "login" ? h(LogIn, {
      "on:changeState": () => this.$updateState({
        activeComponent: "welcome"
      }),
      "on:singUp": () => this.$updateState({
        activeComponent: "singUp"
      }),
      "on:loggedIn": () => this.$emit("loggedIn"),
      "on:verify2FA": () => this.$updateState({
        activeComponent: "verify2FA"
      })
    }) : h(Fragment, null), this.state.activeComponent === "verify2FA" ? h(Verify2FA, {
      "on:changeState": () => this.$updateState({
        activeComponent: "welcome"
      })
    }) : h(Fragment, null), this.state.activeComponent === "singUp" ? h(SignUp, {
      "on:changeState": () => this.$updateState({
        activeComponent: "welcome"
      }),
      "on:login": () => this.$updateState({
        activeComponent: "login"
      }),
      "on:loggedIn": () => this.$emit("loggedIn")
    }) : h(Fragment, null));
  }
});