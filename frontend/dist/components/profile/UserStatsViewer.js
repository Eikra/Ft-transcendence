import { h, defineComponent, Fragment } from "../../../lib/index.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
import { chatWebSocketManager } from "../../utils/WebSocket.js";
import { UserActions } from "./UserActions.js";
import { getUserbadge } from "../../utils/dateFormater.js";
export const UserStatsViewer = defineComponent({
  state() {
    return {
      isOnline: false
    };
  },
  onUnmounted() {
    chatWebSocketManager.unsubscribe("friend_status_update", this.friendStatusUpdateCallback);
    chatWebSocketManager.unsubscribe("initial_status", this.initialStatusCallback);
  },
  async onMounted() {
    await chatWebSocketManager.connect();
    this.friendStatusUpdateCallback = data => this.updateOnlineStatus([data.friend_update]);
    this.initialStatusCallback = data => this.updateOnlineStatus(data.friend_list);
    chatWebSocketManager.subscribe("friend_status_update", this.friendStatusUpdateCallback);
    chatWebSocketManager.subscribe("initial_status", this.initialStatusCallback);
    if (chatWebSocketManager.socket) {
      // console.log("Requesting initial status from the server...");

      chatWebSocketManager.socket.send(JSON.stringify({
        type: "initial_status_request"
      }));
    } else {
      console.warn("Socket is not connected. Initial status request skipped.");
    }
  },
  methods: {
    updateOnlineStatus(updates) {
      // console.log({ updates });

      const update = updates.find(u => u.user_id === this.props.userData.user);

      // console.log(update);

      const isOnline = update && update.status === "online";
      this.$updateState({
        isOnline: isOnline
      });
    }
  },
  render() {
    const {
      isOnline
    } = this.state;
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
    }, "@_", this.props.userData.display_name), isOnline ? h("i", {
      class: "fa-solid fa-circle .fa-beat-fade c-online-dote"
    }) : h(Fragment, null)), h(UserActions, {
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