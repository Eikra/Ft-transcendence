import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { NoDataMessage } from "../common/NoDataMessage.js";
export const GameOver = defineComponent({
  render() {
    return h(Fragment, null, h("div", {
      className: "d-flex flex-column justify-content-center  h-100"
    }, h("h1", null, "Game Over"), this.props.isWinner ? h("h2", null, "You won") : h("h2", null, "You lost")));
  }
});