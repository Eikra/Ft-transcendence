import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { Store, updateStore } from "../../../lib/store.js";
function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
export const NotificationManager = defineComponent({
  subscribeStore: ["notifications"],
  state() {
    return {
      activeNotifications: [],
      timeouts: []
    };
  },
  render() {
    this.handleToasts();
    const variantes = {
      toastClass: "c-toast text-black ",
      messageType: {
        error: "danger",
        warning: "warning",
        success: "success",
        info: "info"
      },
      icon: {
        error: "fa-circle-exclamation",
        warning: "fa-triangle-exclamation",
        success: "fa-circle-check",
        info: "fa-circle-info"
      }
    };
    return h("div", {
      className: "c-toast-container d-flex gap-2 flex-column"
    }, this.state.activeNotifications.map(notification => h("div", {
      className: variantes.toastClass,
      key: notification.id
    }, h("div", {
      className: "  d-flex justify-content-center align-items-center "
    }, h("i", {
      className: `fa-solid ${variantes.icon[notification.type]} text-${variantes.messageType[notification.type]} fs-5 pe-2`
    }), h("div", {
      className: "d-flex flex-column text-start c-toast-content"
    }, h("span", null, notification.message)), h("div", {
      "on:click": () => this.removeToast(notification.id)
    }, h("i", {
      class: "fa-solid fa-xmark ps-2"
    }))), h("div", {
      className: `c-toast-progress bg-${variantes.messageType[notification.type]}`
    }))));
  },
  onUnmounted() {
    this.state.timeouts.forEach(timeout => {
      clearTimeout(timeout);
    });
  },
  methods: {
    removeToast(id) {
      const activeNotifications = this.state.activeNotifications.filter(notification => notification.id !== id);
      this.$updateState({
        activeNotifications
      });
    },
    handleToasts() {
      if (Store.notifications.length > 0) {
        const notifications = Store.notifications;
        notifications.forEach(notification => {
          const id = makeid(8);
          this.state.activeNotifications.push({
            id,
            message: notification.message,
            type: notification.type
          });
          const timeout = setTimeout(() => {
            this.removeToast(id);
          }, 2000);
          this.state.timeouts.push(timeout);
        });
        updateStore({
          notifications: []
        });
      }
    }
  }
});