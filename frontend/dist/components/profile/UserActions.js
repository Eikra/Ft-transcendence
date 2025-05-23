import { h, defineComponent, Fragment } from "../../../lib/index.js";
import { notify } from "../../../lib/store.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { i18n } from "../../utils/i18n.js";
export const UserActions = defineComponent({
  render() {
    return h("div", {
      className: " d-flex justify-content-center justify-content-lg-start"
    }, this.props.status == "not_friends" ? h("button", {
      className: "btn c-btn p-lg-2",
      "on:click": this.addFriend
    }, h("i", {
      class: "fa-solid fa-user-plus pe-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.addFriend"))) : h(Fragment, null), this.props.status == "friends" ? h("div", {
      className: "d-flex gap-1"
    }, h("button", {
      className: "btn c-btn c-btn-danger  p-lg-2 ",
      "on:click": () => {
        this.$context.router.navigateTo(`/chat/${this.props.id}`);
      }
    }, h("i", {
      class: "fa-solid fa-comment pe-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.message"))), h("div", {
      className: "dropdown"
    }, h("button", {
      className: "btn c-btn  p-lg-2 ",
      type: "button",
      id: "dropdownMenuButton1",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false"
    }, h("i", {
      class: "fa-solid fa-sort-down"
    })), h("ul", {
      className: "dropdown-menu",
      "aria-labelledby": "dropdownMenuButton1"
    }, h("li", null, h("button", {
      className: "dropdown-item",
      "on:click": this.removeFriend
    }, h("i", {
      class: "fa-solid fa-user-minus pe-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.unfriend")))), h("li", null, h("button", {
      className: "dropdown-item",
      "on:click": this.blockUser
    }, h("i", {
      class: "fa-solid fa-ban pe-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.block"))))))) : h(Fragment, null), this.props.status == "blocked" ? h("button", {
      className: "btn c-btn p-lg-2",
      "on:click": this.unblockUser
    }, h("i", {
      class: "fa-solid fa-user-large pe-lg-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.unblock"))) : h(Fragment, null), this.props.status == "pending" ? h("button", {
      className: "btn c-btn p-lg-2",
      "on:click": this.cancelRequest
    }, h("i", {
      class: "fa-solid fa-xmark pe-lg-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.cancelRequest"))) : h(Fragment, null), this.props.status == "pending_by" ? h("div", null, h("button", {
      className: " btn c-btn-danger me-2 p-lg-2 ",
      "on:click": this.acceptRequest
    }, h("i", {
      class: "fa-solid fa-check pe-lg-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.accept"))), h("button", {
      className: "btn c-btn p-lg-2 ",
      "on:click": this.rejectRequest
    }, h("i", {
      class: "fa-solid fa-xmark pe-lg-2"
    }), h("span", {
      className: ""
    }, i18n.t("profile.reject")))) : h(Fragment, null));
  },
  onMounted() {},
  methods: {
    async addFriend() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/send/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        this.$emit("statusChange", "pending");
        notify("success", i18n.t("profile.notifications.requestSent"));
      } else {
        // console.log("Failed to send friend request");
        notify("error", i18n.t("profile.notifications.requestSentError"));
      }
    },
    async acceptRequest() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/accept/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        this.$emit("statusChange", "friends");
        notify("success", i18n.t("profile.notifications.requestAccepted"));
      } else {
        // console.log("Failed to accept friend request");
        notify("error", i18n.t("profile.notifications.requestAcceptedError"));
      }
    },
    async rejectRequest() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/reject/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        this.$emit("statusChange", "not_friends");
        notify("success", i18n.t("profile.notifications.requestRejected"));
      } else {
        // console.log("Failed to reject friend request");
        notify("error", i18n.t("profile.notifications.requestRejectedError"));
      }
    },
    async blockUser() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/block/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        notify("success", i18n.t("profile.notifications.userBlocked"));
        this.$emit("statusChange", "blocked");
      } else {
        // console.log("Failed to block user");
        notify("error", i18n.t("profile.notifications.userBlockedError"));
      }
    },
    async unblockUser() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/unblock/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        this.$emit("statusChange", "not_friends");
        notify("success", i18n.t("profile.notifications.userUnblocked"));
      } else {
        // console.log("Failed to unblock user");
        notify("error", i18n.t("profile.notifications.userUnblockedError"));
      }
    },
    async removeFriend() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/unfriend/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        this.$emit("statusChange", "not_friends");
        notify("success", i18n.t("profile.notifications.friendRemoved"));
      } else {
        // console.log("Failed to remove friend");
        notify("error", i18n.t("profile.notifications.friendRemovedError"));
      }
    },
    async cancelRequest() {
      const response = await myFetch(`${BACKEND_URL}/manage/friends/cancel/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          friend_id: this.props.id
        })
      });
      if (response.ok) {
        this.$emit("statusChange", "not_friends");
        notify("success", i18n.t("profile.notifications.requestCancelled"));
      } else {
        // console.log("Failed to cancel request");
        notify("error", i18n.t("profile.notifications.requestCancelledError"));
      }
    }
  }
});