import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { NoDataMessage } from "../common/NoDataMessage.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
export const GameOver = defineComponent({
  onMounted() {
    const {
      tournamentId
    } = this.props;
    if (tournamentId) {
      this.$context.router.navigateTo(`/tournament/${tournamentId}`);
    }
  },
  render() {
    const winner_color = "rgb(65, 191, 179)";
    const loser_color = "rgb(140, 31, 40)";
    return h("div", {
      className: "d-flex flex-column justify-content-center  h-100 w-100 row align-items-center"
    }, h("div", {
      className: " flex-grow-1 d-flex  justify-content-center align-items-end mb-3 mb-sm-0"
    }, h("h1", null, "Game Over")), h("div", {
      className: "  col-12 col-lg-6 flex-grow-1 "
    }, h("div", {
      className: "d-flex  flex-column flex-sm-row justify-content-between align-items-center  h-100"
    }, h("div", null, h("img", {
      src: `${BACKEND_URL}/auth/media${this.props.playersInfo.playerFrontAvatar}`,
      alt: "user",
      className: "c-profile-img mb-2",
      style: {
        border: `2px solid ${this.props.isWinner ? winner_color : loser_color}`
      }
    }), h("p", null, this.props.playersInfo.playerFront)), h("div", {
      className: "d-flex flex-column justify-content-center flex-grow-1"
    }, h("p", null, "Score"), h("p", null, " ", this.props.playersInfo.playerFrontScore, " -", " ", this.props.playersInfo.playerBackScore)), h("div", null, h("div", null, h("img", {
      src: `${BACKEND_URL}/auth/media${this.props.playersInfo.playerBackAvatar}`,
      alt: "user",
      className: "c-profile-img mb-2",
      style: {
        border: `2px solid ${this.props.isWinner ? loser_color : winner_color}`
      }
    }), h("p", null, this.props.playersInfo.playerBack))))), h("div", {
      className: " flex-grow-1"
    }, this.props.isWinner ? h("h2", {
      className: "",
      style: {
        color: winner_color
      }
    }, "You won") : h("h2", {
      className: "",
      style: {
        color: loser_color
      }
    }, "You lost"), h("button", {
      className: "btn c-btn mt-3",
      "on:click": () => this.$emit("backToMenu")
    }, "Back to Menu")));
  }
});