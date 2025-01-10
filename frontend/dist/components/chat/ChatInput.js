import { h, defineComponent } from "../../../lib/index.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
import { i18n } from "../../utils/i18n.js";
export const ChatInput = defineComponent({
  state() {
    return {
      message: "" // Message input value
    };
  },
  methods: {
    handleSendMessage() {
      if (this.state.message.trim()) {
        this.$emit("onSendMessage", this.state.message.trim());
        this.$updateState({
          message: ""
        }); // Clear the input after sending
      }
    }
  },
  render() {
    return h("div", {
      className: "c-chat-input m-2 mt-0  d-flex justify-content-center align-items-center"
    }, h("div", {
      className: "h-75 w-75 d-flex justify-content-center align-items-center"
    }, h("input", {
      type: "text",
      className: "form-control h-100 w-100 c-chat-input-box",
      placeholder: i18n.t("chat.message_placeholder"),
      value: this.state.message,
      "on:input": e => this.$updateState({
        message: e.target.value
      }),
      "on:keydown": e => {
        if (e.key === "Enter") {
          this.handleSendMessage();
        }
      }
    })), h("div", {
      className: "mx-2 c-send-msg-btn",
      "on:click": () => this.handleSendMessage()
    }, h("i", {
      className: "fa-solid fa-location-arrow fs-2"
    })));
  }
});