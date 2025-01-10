import { h, defineComponent } from "../../../lib/index.js";
export const TournamentPlayerCard = defineComponent({
  render() {
    return h("div", {
      className: `c-tplayer-card d-flex cursor-pointer m-2 p-2 position-relative ${!this.props.userData.isEliminated ? "c-tplayer-winner" : ""} `,
      style: {
        "border-color": this.props.winner ? "rgb(var(--gold-color))" : undefined
      }
      // on:click={() =>
      //   this.$context.router.navigateTo(`/profile/${this.props.userData.id}`)
      // }
    }, h("div", {
      className: "me-lg-2 "
    }, h("img", {
      src: this.props.userData.avatar,
      className: "img-fluid  c-img",
      style: {
        "height": this.props.winner ? "70px" : "50px",
        "width": this.props.winner ? "70px" : "50px"
      },
      alt: "player"
    })), h("div", {
      className: "d-none d-lg-flex flex-column justify-content-start text-start"
    }, h("div", {
      className: "c-friend-name"
    }, displayName), h("div", {
      className: "c-display-name"
    }, "Score: ", score)), isEliminated && h("div", {
      className: "position-absolute top-0 start-0 c-elim-effect w-100 h-100"
    }), this.props.winner && h("div", {
      className: "position-absolute c-winner-effect"
    }, h("i", {
      className: "fa-solid fa-crown"
    })));
  }
});