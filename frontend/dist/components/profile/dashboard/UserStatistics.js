import { h, defineComponent } from "../../../../lib/index.js";
import { i18n } from "../../../utils/i18n.js";
export const UserStatistics = defineComponent({
  onMounted() {
    // console.log("UserStatistics on mounted");
    // const id = this.$context.router.params.id;
    // console.log({ ha: id });
    // if (id) {
    //     this.$updateState({
    //         tournamentId: id,
    //     });
    // }
  },
  onUnmounted() {
    // console.log("UserStatistics not mounted");
  },
  render() {
    return h("div", {
      className: "h-100 w-100 m-2 row mt-3"
    }, h("div", {
      className: "col-12 col-lg-6  mb-2 mb-lg-0"
    }, h("div", {
      className: "c-statis-card d-flex justify-content-between align-items-center mb-2  p-3 position-relative h-100"
    }, h("i", {
      class: "fa-solid fa-circle position-absolute top-0 start-0 m-2 c-i-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute top-0 end-0 m-2 c-i-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute bottom-0 start-0 m-2 c-i-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute bottom-0 end-0 m-2 c-i-font-size"
    }), h("div", {
      className: "d-flex flex-column flex-sm-row justify-content-between align-items-center w-100 h-100"
    }, h("p", {
      className: "m-0 ps-3 mb-2 mb-sm-0"
    }, i18n.t("profile.wins"), ":", " ", h("span", {
      className: "m-0 px-3"
    }, this.props.userData.statistics.pong.wins)), h("i", {
      class: "fa-solid fa-table-tennis-paddle-ball fs-5  c-user-stat-name mb-2 mb-sm-0"
    }), h("p", {
      className: "m-0 ps-3 mb-2 mb-sm-0"
    }, i18n.t("profile.loses"), ":", " ", h("span", {
      className: "m-0 px-3"
    }, this.props.userData.statistics.pong.losses))))), h("div", {
      className: "col-12 col-lg-6 "
    }, h("div", {
      className: "c-statis-card d-flex justify-content-between align-items-center mb-2  p-3 position-relative h-100"
    }, h("i", {
      class: "fa-solid fa-circle position-absolute top-0 start-0 m-2 c-i-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute top-0 end-0 m-2 c-i-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute bottom-0 start-0 m-2 c-i-font-size"
    }), h("i", {
      class: "fa-solid fa-circle position-absolute bottom-0 end-0 m-2 c-i-font-size"
    }), h("div", {
      className: "d-flex flex-column justify-content-between align-items-center h-100 w-100"
    }, h("div", {
      className: "d-flex flex-column flex-sm-row justify-content-between align-items-center w-100 "
    }, h("p", {
      className: "m-0 ps-3 mb-2 mb-sm-0"
    }, i18n.t("profile.wins"), ":", " ", h("span", {
      className: "m-0 px-3"
    }, this.props.userData.statistics.tic_tac_toe.wins)), h("div", {
      className: "c-user-stat-name mb-2 mb-sm-0"
    }, h("i", {
      class: "fa-solid fa-x"
    }), h("i", {
      class: "fa-solid fa-o"
    })), h("p", {
      className: "m-0 ps-3 mb-2 mb-sm-0"
    }, i18n.t("profile.loses"), ":", " ", h("span", {
      className: "m-0 px-3"
    }, this.props.userData.statistics.tic_tac_toe.losses))), h("div", {
      className: "w-100 "
    }, h("p", {
      className: "m-0 ps-3 mb-2 mb-sm-0 mt-2"
    }, i18n.t("profile.draws"), ":", " ", h("span", {
      className: "m-0 px-3"
    }, this.props.userData.statistics.tic_tac_toe.draws)))))));
  }
});