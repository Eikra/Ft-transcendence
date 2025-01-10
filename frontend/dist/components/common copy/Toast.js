import { h, Fragment, defineComponent } from "../../../lib/index.js";
export const Toast = defineComponent({
  state() {
    return {
      toastClass: "c-toast text-black ",
      messageType: {
        error: "danger",
        warning: "warning",
        success: "success"
      },
      icon: {
        error: "fa-circle-exclamation",
        warning: "fa-triangle-exclamation",
        success: "fa-circle-check"
      }
    };
  },
  render() {
    return h("div", {
      className: this.state.toastClass
    }, h("div", {
      className: "  d-flex justify-content-center align-items-center "
    }, h("i", {
      className: `fa-solid ${this.state.icon[this.props.type]} text-${this.state.messageType[this.props.type]} fs-5 pe-2`
    }), h("div", {
      className: "d-flex flex-column text-start c-toast-content"
    }, h("span", null, this.props.message)), h("div", {
      "on:click": () => this.removeToast()
    }, h("i", {
      class: "fa-solid fa-xmark ps-2"
    }))), h("div", {
      className: `c-toast-progress bg-${this.state.messageType[this.props.type]}`
    }));
  },
  onMounted() {
    setTimeout(() => this.removeToast(), 2000);
  },
  methods: {
    removeToast() {
      //   const toastClass = this.state.toastClass + "c-hide-toast";
      //   this.$updateState({ toastClass });
      this.$emit("closeToast");
      //   console.log(this.state.toastClass);
    }
  }
});