import { h, defineComponent } from "../../../lib/index.js";
import { TournamentHeader } from "./TournamentHeader.js";
import { TournamentsDisplay } from "./TournamentsDisplay.js";
import { TournamentDetail } from "./TournamentDetail.js";
import { myFetch, BACKEND_URL } from "../../utils/apiRequest.js";
export const TournamentList = defineComponent({
  state: () => ({
    activeComponent: "TournamentsDisplay",
    TournamentDetailId: null,
    tournaments: []
  }),
  async onMounted() {
    try {
      let accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        accessToken = await refresh();
      }
      const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/list/`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error fetching tournaments: ${response.statusText}`);
      }
      const data = await response.json();
      this.$updateState({
        tournaments: data
      });
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  },
  methods: {
    async joinTournament(tournamentId) {
      try {
        const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/join/`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tournament_id: tournamentId
          })
        });
        const data = await response.json();
        if (response.ok) {
          // Tournament joined successfully
          console.log("Successfully joined tournament:", tournamentId);
        } else {
          console.error("Error joining tournament:", data.error);
        }
      } catch (error) {
        console.error("Error joining tournament:", error);
      }
    },
    viewTournamentDetail(tournamentId) {
      this.$updateState({
        activeComponent: "TournamentDetail",
        TournamentDetailId: tournamentId
      });
    },
    goBackToTournaments() {
      this.$updateState({
        activeComponent: "TournamentsDisplay",
        TournamentDetailId: null
      });
    }
  },
  render() {
    return h("div", {
      className: "h-100 d-flex flex-column"
    }, h("div", null, this.state.activeComponent === "TournamentsDisplay" ? h(TournamentHeader, {
      "on:create": () => this.$emit("create")
    }) : h("div", {
      className: "d-flex justify-content-center align-items-center m-4"
    }, h("h1", {
      className: "text-center"
    }, "Tournament Details"))),
    // Main Content
    h("div", {
      className: "flex-grow-1 overflow-auto hidden-scrollbar"
    }, this.state.activeComponent === "TournamentsDisplay" ? h(TournamentsDisplay, {
      "on:tournamentJoined": tournamentId => {
        console.log(`Tournament joined event received for ID: ${tournamentId}`);
        alert("Tournament joined successfully!");
      },
      tournaments: this.state.tournaments.map(tournament => ({
        id: tournament.id,
        name: tournament.name,
        available_slots: tournament.max_players - tournament.participants_count,
        max_slots: tournament.max_players,
        owner: {
          display_name: tournament.created_by
        }
      })),
      "on:view": id => this.viewTournamentDetail(id),
      "on:join": id => this.joinTournament(id)
    }) : h(TournamentDetail, {
      id: this.state.TournamentDetailId,
      "on:back": () => {
        console.log("Back event received!");
        this.goBackToTournaments();
      }
    })));
  }
});