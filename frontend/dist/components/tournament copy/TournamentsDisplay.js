import { h, defineComponent } from "../../../lib/index.js";
import { myFetch, BACKEND_URL } from "../../utils/apiRequest.js";
import { TournamentCard } from "./TournamentCard.js";
import { TournamentTemplate16 } from "./TournamentTemplate16.js";
export const TournamentsDisplay = defineComponent({
  state: () => ({
    tournaments: [],
    // List of tournaments
    error: null // Error message if API call fails
  }),
  async onMounted() {
    try {
      const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/list/`);
      if (!response.ok) {
        throw new Error(`Error fetching tournaments: ${response.statusText}`);
      }
      const data = await response.json();
      this.$updateState({
        tournaments: data
      });
    } catch (error) {
      console.error("Error fetching tournaments:", error);
      this.$updateState({
        error: error.message
      });
    }
  },
  methods: {
    async joinTournament(tournamentId) {
      let accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        accessToken = await refresh();
      }
      try {
        const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/join/`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            // Replace with your actual authentication logic
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tournament_id: tournamentId
          })
        });
        const data = await response.json();
        if (response.ok) {
          this.$emit("tournamentJoined", tournamentId);
        } else {
          console.error("Error joining tournament:", data.error);
          alert(`Error: ${data.error || "Unable to join tournament."}`);
        }
      } catch (error) {
        console.error("Error joining tournament:", error);
        alert("An error occurred while joining the tournament. Please try again.");
      }
    }
  },
  render() {
    const {
      tournaments,
      error
    } = this.state;
    if (error) {
      return h("div", {
        className: "error-message"
      }, `Error: ${error}`);
    }
    if (tournaments.length === 0) {
      return h("div", {
        className: "no-tournaments-message"
      }, "No tournaments are currently available.");
    }
    // Render all tournaments
    return h("div", {
      className: "h-100 row mx-4 justify-content-center"
    }, tournaments.map(tournament => h("div", {
      className: "col-12 col-md-6 col-lg-4 col-xl-3",
      key: tournament.id
    }, h(TournamentCard, {
      tournament,
      "on:join": () => this.joinTournament(tournament.id),
      "on:view": () => this.$emit("view", tournament.id)
    }))));
  }
});