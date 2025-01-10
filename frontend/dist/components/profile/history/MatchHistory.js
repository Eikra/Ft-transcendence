import { h, defineComponent, Fragment } from "../../../../lib/index.js";
import { NoDataMessage } from "../../common/NoDataMessage.js";
import { MatchCard } from "./MatchCard.js";
import { Load } from "../../common/Load.js";
import { myFetch, BACKEND_URL } from "../../../utils/apiRequest.js";
import { ServerError } from "../../common/ServerError.js";
import { i18n } from "../../../utils/i18n.js";
export const MatchHistory = defineComponent({
  state() {
    return {
      matchHistory: [],
      filteredMatchHistory: [],
      isLoading: false,
      serverError: false
    };
  },
  render() {
    if (this.state.serverError) {
      return h(ServerError, null);
    }
    if (!this.state.matchHistory?.length) return h(NoDataMessage, {
      iconPath: "img/space.png",
      message: i18n.t("match_history.no_matches")
    });
    return h("div", null, h("div", {
      className: "d-flex mb-3 p-2 mx-2 mx-lg-5 row justify-content-end"
    }, h("div", {
      className: "col-12 col-sm-6 col-lg-4"
    }, h("select", {
      className: "form-select c-floating-input border-0 text-center w-100 c-height-40",
      "aria-label": i18n.t("match_history.filter_label"),
      "on:change": e => {
        this.filterHistory(e.target.value);
      }
    }, h("option", {
      selected: true,
      value: "All"
    }, i18n.t("match_history.filter.all")), h("option", {
      value: "Pong"
    }, i18n.t("match_history.filter.pong")), h("option", {
      value: "TicTacToe"
    }, i18n.t("match_history.filter.tic_tac_toe"))))), h("div", {
      className: "p-2 p-lg-3 c-mach-history"
    }, this.state.filteredMatchHistory.map(match => h(MatchCard, {
      matchInfo: match,
      key: match.id
    }))));
  },
  async onMounted() {
    // console.log("onMounted");

    const userId = this.$context.router.params.id;
    if (!userId) {
      const response = await myFetch(`${BACKEND_URL}/manage/game-history/`);
      if (response.ok) {
        const data = await response.json();
        // console.log("data", data);
        this.$updateState({
          matchHistory: data,
          filteredMatchHistory: data
        });
      } else {
        this.$updateState({
          serverError: true
        });
      }
    } else {
      const response = await myFetch(`${BACKEND_URL}/manage/game-history/${userId}/`);
      if (response.ok) {
        const data = await response.json();
        this.$updateState({
          matchHistory: data,
          filteredMatchHistory: data
        });
      } else {
        this.$updateState({
          serverError: true
        });
      }
    }
  },
  methods: {
    filterHistory(key) {
      // console.log("filterHistory");
      if (key === "All") {
        this.$updateState({
          filteredMatchHistory: this.state.matchHistory
        });
      } else if (key === "Pong") {
        const filtered = this.state.matchHistory.filter(match => match.game_mode === "Pong");
        this.$updateState({
          filteredMatchHistory: filtered
        });
      } else if (key === "TicTacToe") {
        const filtered = this.state.matchHistory.filter(match => match.game_mode === "TicTacToe");
        this.$updateState({
          filteredMatchHistory: filtered
        });
      }
    }
  }
});