import { h, defineComponent } from "../../../lib/index.js";
import { TournamentList } from "./TournamentList.js";
import { CreateTournament } from "./CreateTournament.js";
export const Tournament = defineComponent({
  state() {
    return {
      activeComponent: "TournamentList" // CreateTournament , TournamentList,
    };
  },
  render() {
    return h("div", {
      className: "h-100 d-flex flex-column position-relative"
    });
  }
});