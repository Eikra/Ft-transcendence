import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { formatDate } from "../../utils/dateFormater.js";
export const ReceivedMessage = defineComponent({
  render() {
    return h("div", {
      className: "d-flex justify-content-start align-items-center ms-3 my-2 "
    }, h("div", {
      className: "d-flex flex-column align-items-start w-75 "
    }, h("div", {
      className: "c-received-msg p-2 px-3 text-start"
    }, this.props.message.text), h("div", {
      className: "c-mesg-time"
    }, formatDate(new Date(this.props.message.time)))));
  }
});