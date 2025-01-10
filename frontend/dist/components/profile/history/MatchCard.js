import { h, defineComponent, Fragment } from "../../../../lib/index.js";
// import { Store } from "../../../../lib/store.js";
import { BACKEND_URL } from "../../../utils/apiRequest.js";
import { getUserbadge } from "../../../utils/dateFormater.js";
export const MatchCard = defineComponent({
  state() {
    return {
      date: "",
      time: "",
      userId: ""
    };
  },
  render() {
    const Victory = "rgba(65, 191, 179, 1)";
    const Defeat = " rgba(140, 31, 40,1)";
    console.log(this.props.matchInfo);
    return h("div", {
      className: "d-flex  justify-content-around align-items-center p-2 c-match-card mx-2 mb-3 mx-lg-5",
      style: {
        "border-left": this.state.userId === this.props.matchInfo.winner ? "3px solid rgba(65, 191, 179, 1)" : "2px solid rgba(140, 31, 40,1)"
      }
    }, h("div", {
      className: "d-flex justify-content-center align-items-center p-2"
    }, this.props.matchInfo.game_mode === "Pong" ? h("i", {
      class: "fa-solid fa-table-tennis-paddle-ball fs-5 "
    }) : h("div", null, h("i", {
      class: "fa-solid fa-x"
    }), h("i", {
      class: "fa-solid fa-o"
    }))), h("div", {
      className: "mx-0    d-flex justify-content-between align-items-center p-2 flex-grow-1 "
    }, h("div", {
      className: " d-flex justify-content-start align-items-center"
    }, h("div", null, h("img", {
      src: `${BACKEND_URL}/auth${this.props.matchInfo.player_one.profile.avatar}`,
      alt: "",
      className: "c-enemy-avatar mx-2 d-none d-md-inline"
    })), h("img", {
      src: `${BACKEND_URL}/auth${this.props.matchInfo.player_one.profile.avatar}`,
      alt: "",
      className: "c-enemy-avatar-small me-2  d-md-none"
    }), h("div", {
      className: "text-start d-flex align-items-center "
    }, h("div", null, h("p", {
      className: "mb-0 c-friend-name",
      style: {
        color: this.props.matchInfo.winner === this.props.matchInfo.player_one.id || this.props.matchInfo.score.player1 === this.props.matchInfo.score.player2 ? Victory : Defeat
      },
      "on:click": () => this.$context.router.navigateTo(`/profile/${this.props.matchInfo.player_one.profile.user}`)
    }, this.props.matchInfo.player_one.profile.display_name || "_"), h("div", {
      className: "d-none d-md-inline"
    }, h("img", {
      src: getUserbadge(this.props.matchInfo.player_one.profile.level),
      className: "img c-ranking-badge"
    }))))), h("div", {
      className: "d-flex flex-column align-items-center"
    }, this.props.matchInfo.game_mode === "Pong" ? h("div", null, this.props.matchInfo.score.player2, " -", " ", this.props.matchInfo.score.player1) : h(Fragment, null), h("div", {
      className: "d-flex justify-content-center align-items-center gap-1 d-none d-md-flex"
    }, h("p", {
      className: "m-0"
    }, this.state.date), h("p", {
      className: "m-0"
    }, this.state.time))), h("div", {
      className: " d-flex justify-content-end align-items-center"
    }, h("div", {
      className: "text-end d-flex align-items-center "
    }, h("div", null, h("p", {
      className: "mb-0 c-friend-name",
      style: {
        color: this.props.matchInfo.winner === this.props.matchInfo.player_two.id || this.props.matchInfo.score.player1 === this.props.matchInfo.score.player2 ? Victory : Defeat
      },
      "on:click": () => this.$context.router.navigateTo(`/profile/${this.props.matchInfo.player_two.profile.user}`)
    }, "@", this.props.matchInfo.player_two.profile.display_name || "_"), h("div", {
      className: "d-none d-md-inline"
    }, h("img", {
      src: getUserbadge(this.props.matchInfo.player_two.profile.level),
      className: "img c-ranking-badge"
    })))), h("div", null, h("img", {
      src: `${BACKEND_URL}/auth${this.props.matchInfo.player_two.profile.avatar}`,
      alt: "",
      className: "c-enemy-avatar mx-2 d-none d-md-inline"
    })), h("img", {
      src: `${BACKEND_URL}/auth${this.props.matchInfo.player_two.profile.avatar}`,
      alt: "",
      className: "c-enemy-avatar-small ms-2  d-md-none"
    }))));
  },
  onMounted() {
    const newDate = new Date(this.props.matchInfo.date_played);
    const userId = this.$context.router.params.id ? this.$context.router.params.id : Store.userData.user;
    this.$updateState({
      date: `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} `,
      time: `${newDate.getHours()}:${newDate.getMinutes()}`,
      userId
    });
  }
});