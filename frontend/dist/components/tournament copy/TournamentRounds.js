import { h, defineComponent } from "../../../lib/index.js";
import { myFetch, BACKEND_URL } from "../../utils/apiRequest.js";
export const TournamentRounds = defineComponent({
  props: {
    tournamentId: {
      type: Number,
      required: true
    }
  },
  state: () => ({
    rounds: {},
    loading: true,
    error: null
  }),
  async onMounted() {
    try {
      const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/${this.props.tournamentId}/matches/`);
      if (!response.ok) {
        throw new Error(`Failed to fetch matches: ${response.statusText}`);
      }
      const data = await response.json();
      const lastRound = Object.keys(data.rounds).sort().pop();
      const finalMatch = data.rounds[lastRound]?.[0];
      if (finalMatch && finalMatch.winner) {
        this.$emit("tournamentWinner", finalMatch.winner);
      }
      this.$updateState({
        rounds: data.rounds,
        loading: false,
        tournamentWinner: finalMatch?.winner || null
      });
    } catch (error) {
      console.error("Error fetching tournament matches:", error);
      this.$updateState({
        error: error.message,
        loading: false
      });
    }
  },
  methods: {
    async completeMatch(matchId, winnerId) {
      let accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        accessToken = await refresh();
      }
      try {
        const response = await myFetch(`${BACKEND_URL}/manage/tour/match/${matchId}/complete/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            winner_id: winnerId
          })
        });
        const data = await response.json();
        console.log("data.winner.username ", data.winner.username);
        if (response.ok) {
          console.log("Match completed successfully:", data);
          this.onMounted(); // Reload matches
        } else {
          console.error("Error completing match:", data.error);
          alert(data.error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to complete the match.");
      }
    },
    handleCompleteMatch(match) {
      const winnerId = prompt(`Enter winner ID: ${match.player1.id} or ${match.player2.id}`);
      if (winnerId === `${match.player1.id}` || winnerId === `${match.player2.id}`) {
        console.log("winnerId", winnerId);
        this.completeMatch(match.id, winnerId);
      } else {
        alert("Invalid winner ID. Please choose a valid player ID.");
      }
    }
  },
  render() {
    const {
      rounds,
      loading,
      error
    } = this.state;
    if (loading) {
      return h("div", {
        className: "loading"
      }, "Loading rounds...");
    }
    if (error) {
      return h("div", {
        className: "error-message"
      }, `Error: ${error}`);
    }
    if (!Object.keys(rounds).length) {
      return h("div", {
        className: "no-matches-message"
      }, "No matches found for this tournament.");
    }
    return h("div", {
      className: "tournament-rounds-container p-4"
    }, Object.keys(rounds).map(round => h("div", {
      className: "round-container mb-4"
    }, [h("h3", {}, `Round ${round}`), h("div", {
      className: "matches-list"
    }, rounds[round].map(match => h("div", {
      className: "match-card p-2 mb-2 border rounded"
    }, [h("p", {}, `${match.player1.user.username} vs ${match.player2.user.username}`), h("p", {}, `Status: ${match.status}`), h("button", {
      className: "btn-complete-match",
      "on:click": () => this.handleCompleteMatch(match)
    }, "Complete Match"), match.winner ? h("p", {}, `Winner: ${match.winner.user.username}`) : h("p", {}, "Winner: TBD")])))])));
  }
});