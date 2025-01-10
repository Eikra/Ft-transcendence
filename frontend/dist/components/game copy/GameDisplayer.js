import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { initPongGame } from "./dependencies/initPongGame3.js";
import { initLocalPongGame } from "./dependencies/initLocalPongGame.js";
import { Matching } from "./Matching.js";
// import { init_socket, Game } from "./tester.js";
import { init_socket, Game } from "./dependencies/pong3d.js";
import { GameOver } from "./GameOver.js";
import { InviteLobby } from "./InviteLobby.js";
import { InvalidInvite } from "./InvalidInvite.js";
// import { initPingPongGame } from "./dependencies/initPingPongGame.js";
export const GameDisplayer = defineComponent({
  state() {
    return {
      loading: true,
      gameOver: false,
      isWinner: false,
      hasInvite: false,
      game: null,
      socket: null,
      inviteNoteValide: false
    };
  },
  render() {
    return h("div", {
      className: "h-100 d-flex justify-content-center align-items-center",
      id: "canvasParent"
    }, this.state.inviteNoteValide ? h(InvalidInvite, null) : h(Fragment, null), this.state.hasInvite ? h(InviteLobby, null) : h(Fragment, null), this.state.gameOver ? h(GameOver, {
      isWinner: this.state.isWinner
    }) : h(Fragment, null), this.state.loading ? h(Matching, null) : h(Fragment, null));
  },
  async onMounted() {
    const socket = await init_socket("ws://localhost:8000/ws/game/pong3d/");
    this.$updateState({
      socket
    });
    const inviteId = this.props.inviteId;
    if (inviteId) {
      this.$updateState({
        hasInvite: true,
        loading: false
      });
      console.log("has invite", inviteId);
      socket.send(JSON.stringify({
        type: "join_by_invite",
        inviteId
      }));
    } else {
      console.log("no invite");
      socket.send(JSON.stringify({
        type: "join_queue",
        game: "pong"
      }));
    }
    const canvasParent = document.getElementById("canvasParent");
    this.$updateState({
      game: new Game(canvasParent, socket, this)
    });
    // const game = new Game(canvasParent, socket, this);
    window.addEventListener("resize", () => {
      this.state.game.handleResize();
    });
  },
  onUnmounted() {
    console.log("unmounting");
    this.state.socket.close();
    window.removeEventListener("resize", () => {
      this.state.game.handleResize();
    });
  }
});