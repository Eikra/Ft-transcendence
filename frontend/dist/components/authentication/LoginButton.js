import { h, Fragment, defineComponent, createApp } from "../../../lib/index.js";
export const LoginButton = defineComponent({
  render() {
    return h("button", {
      type: "submit",
      disabled: this.props.disabled || this.props.loginInProgress,
      className: "btn c-btn w-100",
      "on:click": () => this.$emit("click")
    }, this.props.loginInProgress ? h("span", null, h("div", {
      class: "spinner-border spinner-border-sm me-2",
      role: "status"
    }, h("span", {
      class: "visually-hidden"
    }, this.props.content, "...")), this.props.content, "...") : h("span", {
      className: ""
    }, this.props.content));
  }
});