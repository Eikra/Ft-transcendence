import { h, defineComponent } from "../../../lib/index.js";
import { TournamentPlayerCard } from "./TournamentPlaterCard.js";
export const TournamentTemplate4 = defineComponent({
  props: {
    tournamentWinner: {
      type: Object,
      default: null
    }
  },
  render() {
    return h("div", {
      className: "h-100 d-flex flex-column"
    }, h("h1", {
      className: "m-2 c-user-stat-name "
    }, this.props.tournamentLastDaitails.tournament.name), h("div", {
      className: "d-flex flex-lg-row flex-column justify-content-around  flex-grow-1 m-2 "
    }, h("div", {
      className: " d-flex flex-row flex-lg-column justify-content-around  "
    }, h("div", null, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.rounds[1][0].player_one,
      winner: false,
      isEliminated: this.props.tournamentLastDaitails.rounds[1][0].winner !== this.props.tournamentLastDaitails.rounds[1][0].player_one.id
    })), h("div", null, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.rounds[1][0].player_two,
      winner: false,
      isEliminated: this.props.tournamentLastDaitails.rounds[1][0].winner !== this.props.tournamentLastDaitails.rounds[1][0].player_two.id
    }))), h("div", {
      className: "d-flex flex-row flex-lg-column justify-content-center  h-100 flex-grow-1 c-linker"
    }, h("div", {
      className: " d-none d-lg-block h-50 c-2-linker border-start-0"
    }), h("div", {
      className: "d-lg-none d-block w-50 c-2-linker border-top-0"
    })), h("div", {
      className: " d-flex justify-content-center align-items-center  "
    }, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.rounds[2][0].player_one,
      winner: false,
      isEliminated: this.props.tournamentLastDaitails.rounds[2][0].winner !== this.props.tournamentLastDaitails.rounds[2][0].player_one.id
    })), h("div", {
      className: "d-flex flex-row flex-lg-column justify-content-start  h-100 flex-grow-1 c-linker"
    }, h("div", {
      className: "d-none d-lg-block h-50 c-2-linker border-start-0 border-end-0 border-top-0"
    }), h("div", {
      className: "d-lg-none d-block w-50 c-2-linker border-start-0 border-bottom-0 border-top-0"
    })), h("div", {
      className: " d-flex justify-content-center align-items-center  "
    }, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.winner.user,
      winner: true,
      isEliminated: false
    })), h("div", {
      className: "d-flex flex-row flex-lg-column justify-content-start  h-100 flex-grow-1 c-linker"
    }, h("div", {
      className: "d-none d-lg-block h-50 c-2-linker border-start-0 border-end-0 border-top-0"
    }), h("div", {
      className: "d-lg-none d-block w-50 c-2-linker border-start-0 border-bottom-0 border-top-0"
    })), h("div", {
      className: " d-flex justify-content-center align-items-center"
    }, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.rounds[2][0].player_two,
      winner: false,
      isEliminated: this.props.tournamentLastDaitails.rounds[2][0].winner !== this.props.tournamentLastDaitails.rounds[2][0].player_two.id
    })), h("div", {
      className: "d-flex flex-row flex-lg-column justify-content-center  h-100 flex-grow-1 c-linker"
    }, h("div", {
      className: " d-none d-lg-block h-50 c-2-linker border-end-0"
    }), h("div", {
      className: "d-lg-none d-block w-50 c-2-linker border-bottom-0"
    })), h("div", {
      className: " d-flex flex-row flex-lg-column justify-content-around align-items-center "
    }, h("div", null, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.rounds[1][1].player_one,
      winner: false,
      isEliminated: this.props.tournamentLastDaitails.rounds[1][1].winner !== this.props.tournamentLastDaitails.rounds[1][1].player_one.id
    })), h("div", null, h(TournamentPlayerCard, {
      userData: this.props.tournamentLastDaitails.rounds[1][1].player_two,
      winner: false,
      isEliminated: this.props.tournamentLastDaitails.rounds[1][1].winner !== this.props.tournamentLastDaitails.rounds[1][1].player_two.id
    })))), h("div", {
      className: "my-5 d-flex justify-content-center"
    }, h("button", {
      className: "btn c-btn-danger m-2",
      "on:click": () => {
        console.log("here");
        this.$emit("back");
      }
    }, "Back to home")))
    // <div className="h-100 d-flex flex-column">
    //   <h2 className="m-2 text-center">Tournament Champion</h2>
    //   <div className="d-flex justify-content-center align-items-center flex-grow-1">
    //     {this.props.tournamentWinner && (
    //       <TournamentPlayerCard
    //         userData={{
    //             ...this.props.tournamentWinner.user,
    //             displayName: this.props.tournamentWinner.user.display_name || this.props.tournamentWinner.user.username,
    //         }}
    //         winner={true}
    //     />
    //     )}
    //   </div>
    // </div>
    ;
  }
});