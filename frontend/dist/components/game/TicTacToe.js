import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { init_socket } from "./dependencies/pong3d.js";
import { Tile } from "./Tile.js";
import { Matching } from "./Matching.js";
import { GameOver } from "./GameOver.js";
import { InviteLobby } from "./InviteLobby.js";
import { TicTacToeManager } from "./TicTacToeManager.js";
import { Store } from "../../../lib/store.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
export const TicTacToe = defineComponent({
  state() {
    return {
      loading: true,
      gameOver: false,
      isWinner: "",
      hasInvite: false,
      socket: null,
      gameBoard: Array(9).fill(""),
      playerTurn: "X",
      player_symbol: "",
      game: null,
      winner_line: 10,
      enemy: null
    };
  },
  render() {
    const boarders = ["border-start-0 border-top-0", "border-top-0", "border-end-0 border-top-0", "border-start-0", "", "border-end-0", "border-start-0 border-bottom-0", "border-bottom-0", "border-end-0 border-bottom-0"];
    if (this.state.hasInvite) {
      return h(InviteLobby, null);
    }
    // if (this.state.gameOver) {
    //   return <GameOver isWinner={this.state.isWinner} />;
    // }
    if (this.state.loading) {
      return h(Matching, null);
    }
    console.log("player_symbol", this.state.player_symbol);
    return h("div", {
      class: "container py-2 h-100 overflow-auto hidden-scrollbar"
    }, h("div", {
      class: "row justify-content-center h-100"
    }, h("div", {
      class: "col-12 col-md-8 col-lg-6"
    }, h("div", {
      className: "w-100  d-flex flex-column flex-sm-row justify-content-between align-items-center p-2"
    }, h("div", null, h("img", {
      src: `${BACKEND_URL}/auth/media${this.state.enemy.avatar}`,
      className: "c-profile-img mb-2",
      alt: ""
    }), h("p", {
      className: "c-friend-name fs-3"
    }, this.state.enemy.display_name, ":", " ", h("span", {
      className: "text-light"
    }, this.state.player_symbol === "X" ? "O" : "X"))), h("div", null, h("img", {
      src: `${BACKEND_URL}/auth${Store.userData.avatar}`,
      className: "c-profile-img mb-2",
      alt: ""
    }), h("p", {
      className: "c-friend-name fs-3"
    }, Store.userData.display_name, " :", " ", h("span", {
      className: "text-light"
    }, " ", this.state.player_symbol === "X" ? "X" : "O")))), h("div", {
      class: "game-board mx-auto "
    }, h("div", {
      class: "row g-0"
    }, this.state.gameBoard.map((value, index) => h("div", {
      class: "col-4",
      key: index
    }, h(Tile, {
      value: value,
      boarders: boarders[index],
      "on:tileClick": () => this.updateBoard(index)
    })))), h("div", {
      class: `winner-line ${this.state.winner_line}`
    })), h("div", {
      class: "text-center mt-4"
    }, !this.state.gameOver ? h("h2", {
      id: "status",
      class: " mb-3"
    }, this.state.playerTurn === this.state.player_symbol ? "Your turn" : "Opponent's turn") : h(Fragment, null, " ")), h("h2", {
      id: "status",
      class: " mb-3"
    }, this.state.isWinner), h("div", {
      class: "text-center mt-4"
    }, !this.state.gameOver ? h(Fragment, null, " ") : h("button", {
      class: "btn c-btn mb-3",
      "on:click": () => this.$emit("backToMenu")
    }, "Back to Menu")))));
  },
  async onMounted() {
    const socket = await init_socket("wss://localhost:8443/ws/game/tic-tac-toe");
    this.$updateState({
      socket
    });
    const inviteId = this.props.inviteId;
    if (inviteId) {
      console.log("has invite", inviteId);
      socket.send(JSON.stringify({
        type: "join_by_invite",
        inviteId
      }));
    } else {
      console.log("no invite");
      socket.send(JSON.stringify({
        type: "join_queue",
        game: "tic-tac-toe"
      }));
    }
    const game = new TicTacToeManager(socket, this);
    this.$updateState({
      game
    });
  },
  methods: {
    updateBoard(index) {
      const row = Math.floor(index / 3);
      const col = index % 3;
      this.state.game.sendMove(row, col);
    }
  },
  onUnmounted() {
    console.log("unmounting");
    this.state.socket.close();
  }
});