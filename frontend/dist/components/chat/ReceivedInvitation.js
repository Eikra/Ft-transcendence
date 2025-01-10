import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { formatDate } from "../../utils/dateFormater.js";
import { i18n } from "../../utils/i18n.js";
export const ReceivedInvitation = defineComponent({
  render() {
    return h("div", {
      className: "d-flex justify-content-start align-items-center ms-3 my-2 "
    }, h("div", {
      className: "d-flex flex-column align-items-start w-75 "
    }, this.props.message.invitation?.is_expired ? h("div", {
      className: "c-received-msg p-2 px-3 text-start"
    }, h("p", {
      className: "m-0"
    }, h("i", {
      className: "fa-solid fa-clock pe-1"
    }), i18n.t('invitation.expired'))) : h("div", {
      className: "c-received-msg p-2 px-3 text-start "
    }, h("div", {
      className: "d-flex justify-content-center align-items-center gap-2"
    }, h("p", {
      className: "m-0"
    }, i18n.t('invitation.play_game')), h("button", {
      className: "btn c-btn-danger",
      "on:click": () => this.$emit("acceptInvitation")
    }, i18n.t('invitation.play_button'))), h("div", {
      className: "c-expire-time"
    }, h("p", {
      className: "m-0"
    }, h("i", {
      className: "fa-solid fa-clock pe-1"
    }), i18n.t('invitation.expire_warning')))), h("div", {
      className: "c-mesg-time"
    }, formatDate(new Date(this.props.message.time)))));
  }
});