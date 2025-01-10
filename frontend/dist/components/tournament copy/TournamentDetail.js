import { h, defineComponent } from "../../../lib/index.js";
import { TournamentRounds } from "./TournamentRounds.js";
import { TournamentLobby } from "./TournamentLobby.js";
import { TournamentTemplate4 } from "./TournamentTemplate4.js";
import { myFetch, BACKEND_URL } from "../../utils/apiRequest.js";
export const TournamentDetail = defineComponent({
  state() {
    return {
      tournamentDetail: null,
      participants: [],
      loading: true,
      error: null,
      showRounds: false
    };
  },
  async onMounted() {
    const tournamentId = this.props.id; // Get the ID from props
    if (!tournamentId) {
      console.error("Tournament ID is missing!");
      this.$updateState({
        error: "Tournament ID is missing.",
        loading: false
      });
      return;
    }
    try {
      const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/${tournamentId}/matches/`);
      if (!response.ok) {
        throw new Error(`Error fetching tournament details: ${response.statusText}`);
      }
      const data = await response.json();
      // console.log("data", data);
      this.$updateState({
        tournamentDetail: {
          ...data.tournament,
          max_slots: data.tournament.max_players || 0
        },
        participants: data.participants || [],
        loading: false,
        isCompleted: data.is_completed,
        winner: data.winner
      });
    } catch (error) {
      console.error("Error fetching tournament details:", error);
      this.$updateState({
        loading: false,
        error: "Failed to load tournament details."
      });
    }
  },
  methods: {
    viewTournamentWinner(winner) {
      this.$emit("viewWinner", winner);
    },
    async startTournament() {
      const tournamentId = this.props.id; // Get the tournament ID
      let accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        accessToken = await refresh();
      }
      try {
        // Fetch existing matches to check if Round 1 exists
        const matchesResponse = await myFetch(`${BACKEND_URL}/manage/tour/tournament/${tournamentId}/matches/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          }
        });
        const matchesData = await matchesResponse.json();
        if (matchesResponse.ok && Object.keys(matchesData.rounds).length > 0) {
          console.log("Matches already exist. Showing rounds...");
          this.$updateState({
            showRounds: true
          });
          return;
        }

        // If no matches exist, proceed to start the tournament
        const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/${tournamentId}/start/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Tournament started successfully:", data);
          alert("Tournament has started successfully!");
          this.$updateState({
            showRounds: true
          }); // Show rounds view
        } else {
          console.error("Failed to start tournament:", data.error);
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error("Error starting tournament:", error);
        alert("Failed to start tournament due to a network error.");
      }
    }
  },
  render() {
    const {
      tournamentDetail,
      loading,
      participants,
      error,
      showRounds,
      isCompleted,
      winner
    } = this.state;
    if (loading) {
      return h("div", {
        className: "loading"
      }, "Loading tournament details...");
    }
    if (!tournamentDetail) {
      return h("div", {
        className: "loading"
      }, "Loading tournament details...");
    }
    if (error) {
      return h("div", {
        className: "error-message"
      }, error);
    }
    if (isCompleted) {
      return h(TournamentTemplate4, {
        tournamentWinner: winner
      });
    }
    console.log("tournamentDetail", tournamentDetail);
    const availableSlots = tournamentDetail.max_slots - participants.length;
    return h("div", {
      className: "tournament-details-container p-4"
    }, h("h2", {}, `Tournament Lobby: ${tournamentDetail.name || "Unnamed Tournament"}`), h("p", {}, `Available Slots: ${availableSlots}`), showRounds ? h(TournamentRounds, {
      tournamentId: this.props.id,
      "on:tournamentWinner": winner => this.viewTournamentWinner(winner)
    }) : h(TournamentLobby, {
      participants,
      maxSlots: tournamentDetail?.max_slots,
      onStart: () => this.startTournament()
    }), h("button", {
      className: "btn c-btn mt-4",
      "on:click": () => {
        this.$emit("back");
      }
    }, "Back to Tournaments"));
  }
});