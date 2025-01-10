import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { Matching } from "./Matching.js";
import { GameDisplayer } from "./GameDisplayer.js";
import { GameIntro } from "./GameIntro.js ";
import { TicTacToe } from "./TicTacToe.js";
export const Game = defineComponent({
  state() {
    return {
      activeComponent: "gameIntro",
      game: "",
      inviteId: null
    };
  },
  render() {
    if (this.state.activeComponent === "gameIntro") {
      return h(GameIntro, {
        "on:startGame": e => this.$updateState({
          activeComponent: "matching",
          game: e
        })
      });
    }
    if (this.state.activeComponent === "matching") {
      if (this.state.game === "pong") {
        return h(GameDisplayer, {
          chosenGame: this.state.game,
          inviteId: this.state.inviteId
        });
      }
      if (this.state.game === "tic-tac-toe") {
        return h(TicTacToe, {
          chosenGame: this.state.game,
          inviteId: this.state.inviteId
        });
      }
    }
  },
  onMounted() {
    const inviteId = this.$context.router.params.id;
    if (inviteId) {
      this.$updateState({
        activeComponent: "matching",
        game: "pong",
        inviteId
      });
    }
    console.log("inviteId", inviteId);
  }
});