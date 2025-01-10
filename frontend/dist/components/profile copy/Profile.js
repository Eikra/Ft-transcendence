import { h, defineComponent } from "../../../lib/index.js";
import { BASE_API_URL } from "../../utils/constants.js";
import { Spinner } from "../common/Spiner.js";
import { ProfileHub } from "./ProfileHub.js";
import { UserStats } from "./UserStats.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { ServerError } from "../common/ServerError.js";
export const Profile = defineComponent({
  state() {
    return {
      userData: null,
      isLoading: true,
      serverError: false
    };
  },
  render() {
    if (this.state.serverError) {
      return h(ServerError, null);
    }
    if (this.state.isLoading) return h(Spinner, null);
    return h("div", {
      className: "p-3 h-lg-100 d-flex flex-column"
    }, h(UserStats, {
      userData: this.state.userData
    }), h(ProfileHub, {
      userData: this.state.userData
    }));
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

    // console.log(userData);
    this.$updateState({
      isLoading: false,
      userData
    });
  }
});