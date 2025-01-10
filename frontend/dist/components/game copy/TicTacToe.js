import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { init_socket } from "./tester.js";
import { Tile } from "./Tile.js";
import { Matching } from "./Matching.js";
import { GameOver } from "./GameOver.js";
import { InviteLobby } from "./InviteLobby.js";
import { TicTacToeManager } from "./TicTacToeManager.js";
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
      winner_line: 10
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
    return h("div", {
      class: "container py-5 h-100 overflow-auto hidden-scrollbar"
    }, h("div", {
      class: "row justify-content-center h-100"
    }, h("div", {
      class: "col-12 col-md-8 col-lg-6"
    }, h("h1", {
      class: "text-center mb-4"
    }, "Tic Tac Toe"), h("h2", null, "You are playing as ", this.state.player_symbol === "X" ? "X" : "O"), h("div", {
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
    }, h("h2", {
      id: "status",
      class: " mb-3"
    }, this.state.playerTurn === "X" ? "X's turn" : "O's turn")), h("div", {
      class: "text-center mt-4"
    }, h("h2", {
      id: "status",
      class: " mb-3"
    }, this.state.isWinner)))));
  },
  async onMounted() {
    const socket = await init_socket("ws://localhost:8000/ws/game/tic-tac-toe/");
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