import { h, defineComponent, Fragment } from "../../../lib/index.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
export const TournamentPlayerCard = defineComponent({
  render() {
    const {
      userData,
      winner
    } = this.props;
    return h("div", {
      className: `c-tplayer-card d-flex cursor-pointer m-2 p-2 position-relative`,
      style: {
        "border-color": winner ? "rgb(var(--gold-color))" : undefined
      },
      "on:click": () => this.$context.router.navigateTo(`/profile/${this.props.userData.id}`)
    }, h("div", {
      className: "me-lg-2 "
    }, h("img", {
      src: `${BACKEND_URL}/auth${userData.avatar}`,
      className: "img-fluid  c-img",
      style: {
        height: winner ? "70px" : "50px",
        width: winner ? "70px" : "50px"
      }
      // alt={userData.username || "Player"}
    })), h("div", {
      className: "d-none d-lg-flex flex-column justify-content-start text-start"
    }, h("div", {
      className: "c-friend-name"
    }, this.props.userData.display_name)), this.props.isEliminated ? h("div", {
      className: "position-absolute top-0 start-0 c-elim-effect w-100 h-100"
    }) : h(Fragment, null), this.props.winner ? h("div", {
      className: "position-absolute c-winner-effect"
    }, h("i", {
      className: "fa-solid fa-crown"
    })) : h(Fragment, null));
  }
});