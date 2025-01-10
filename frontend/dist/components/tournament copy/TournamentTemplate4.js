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
    }, h("h2", {
      className: "m-2 text-center"
    }, "Tournament Champion"), h("div", {
      className: "d-flex justify-content-center align-items-center flex-grow-1"
    }, this.props.tournamentWinner && h(TournamentPlayerCard, {
      userData: this.props.tournamentWinner.user,
      winner: true
    })));
  }
});