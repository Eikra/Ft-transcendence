import { h, Fragment, defineComponent, createApp } from "../../../lib/index.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { LoginButton } from "./LoginButton.js";
import { Store, updateStore } from "../../../lib/store.js";
import { i18n } from "../../utils/i18n.js";
export const Verify2FA = defineComponent({
  state() {
    return {
      code: "",
      verifying: false,
      error: false,
      serverError: false
    };
  },
  render() {
    if (Store.userData) {
      this.$context.router.navigateTo("/");
    }
    return h("form", {
      className: "sky-bg"
    }, h("div", {
      className: "vh-100 d-flex justify-content-center align-items-center c-welcoming-animation "
    }, h("div", {
      className: "p-2   position-relative c-login-bg border"
    }, h("div", {
      className: "m-2 text-center text-light m-3 mb-4"
    }, h("h2", {
      className: "mb-0"
    }, "Hello !")), h("div", {
      className: "m-2 c-input-h"
    }, h("input", {
      type: "text",
      className: "form-control h-100 w-100 c-login-input-box",
      placeholder: "Enter 2FA code",
      "on:input": e => {
        this.$updateState({
          code: e.target.value
        });
      }
    })), this.state.error ? h("div", {
      className: "m-2 text-danger ps-3 "
    }, "Incorrect code") : h(Fragment, null), this.state.serverError ? h("div", {
      className: "m-2 text-danger ps-3 "
    }, "Somthing went wrong, please try again later") : h(Fragment, null), h("div", {
      className: "m-2 mt-3"
    }, h(LoginButton, {
      content: "Verify",
      disabled: this.state.code.length < 6,
      loginInProgress: this.state.verifying,
      "on:click": () => {
        this.verify2FACode(this.state.code);
      }
    })))));
  },
  methods: {
    async verify2FACode(code) {
      const response = await fetch(`${BACKEND_URL}/auth/verify_2fa_tmp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          otp_code: code
        })
      });
      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access;
        localStorage.setItem("access_token", accessToken);
        // console.log("Login successful, access token stored.");
        updateStore({
          userData: await fetchUserData()
        });
        // console.log("User data fetched", Store.userData);
        this.$context.router.navigateTo("/");
        return accessToken;
      } else if (response.status === 400) {
        this.$updateState({
          verifying: false,
          error: true
        });
      } else {
        const data = await response.json();
        // console.log("Login failed.", data);
        this.$updateState({
          verifying: false,
          serverError: true
        });
        // this.$emit("changeState");
      }
    }
  }
});
export async function fetchUserData() {
  const profile = await myFetch(`${BACKEND_URL}/manage/profile/`);
  if (!profile.ok) {
    return null;
  }
  const userData = await profile.json();
  i18n.locale = userData.language;
  return userData;
}