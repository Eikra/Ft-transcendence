import { h, defineComponent } from "../../../lib/index.js";
import { BASE_API_URL_2 } from "../../utils/constants.js";
import { SettingImg } from "./SettingImg.js";
import { SettingInf } from "./SettingInf.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { Spinner } from "../common/Spiner.js";
import { setLanguage } from "../../utils/language.js";
import { notify, Store, updateStore } from "../../../lib/store.js";
import { i18n } from "../../utils/i18n.js";
import { ServerError } from "../common/ServerError.js";
// import { Store } from "../../../lib/store.js";

let i = 0;
export const Settings = defineComponent({
  subscribeStore: ["language"],
  state() {
    return {
      isLoading: true,
      userData: null,
      newData: {},
      serverError: false
    };
  },
  render() {
    if (this.state.serverError) {
      return h(ServerError, null);
    }
    if (this.state.isLoading) return h(Spinner, null);
    // console.log("userData from settings",Store.userData);
    return h("div", {
      className: "p-3 h-100 overflow-auto hidden-scrollbar "
    }, h("div", {
      className: " d-flex  flex-column align-items-center gap-1"
    }, h(SettingImg, {
      imgUrl: `${BACKEND_URL}/auth${this.state.userData.avatar}`,
      "on:imgUpdated": imgUrl => {
        this.$emit("imgUpdated", imgUrl);
      }
    }), h("div", {
      className: " mt-2"
    }, h("h4", {
      className: "c-friend-name"
    }, this.state.userData.username), h("p", {
      className: "text-warning small"
    }, h("i", {
      class: "fa-solid fa-triangle-exclamation pe-2"
    }), "You can't change your username."))), h("div", {
      className: ""
    }, h(SettingInf, {
      userData: this.state.userData,
      "on:updateData": data => {
        this.$updateState({
          newData: {
            ...this.state.newData,
            ...data
          }
        });
        this.updateUserData(this.state.newData);
      }
    })));
  },
  methods: {
    getRandomAvatar() {
      let randomNumber = Math.floor(Math.random() * 30) + 1;
      const imgUrl = `./img/Avatar/avatar-${randomNumber}.jpg`;
      this.$updateState({
        imgUrl
      });
    },
    async updateUserData(data) {
      const response = await myFetch(`${BACKEND_URL}/manage/update_user/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.status === 200) {
        setLanguage(data.language);
        updateStore({
          language: !Store.language
        });
        notify("success", i18n.t('settings.updateSuccess'));
      } else {
        notify("error", i18n.t('settings.updateError'));
      }
    }
  },
  async onMounted() {
    const profile = await myFetch(`${BACKEND_URL}/manage/profile/`);
    if (!profile.ok) {
      this.$updateState({
        serverError: true,
        isLoading: false
      });
      return;
    }
    const userData = await profile.json();
    // console.log("userData", userData);
    this.$updateState({
      isLoading: false,
      userData
    });
  }
});