import { h, Fragment, defineComponent } from "../../../lib/index.js";
export const GameIntro = defineComponent({
  render() {
    return h("div", {
      className: "d-flex flex-column h-100 justify-content-center align-items-center w-100"
    }, h("div", {
      className: "row w-75 h-100 justify-content-center align-items-center"
    }, h("div", {
      className: "col-12 col-lg-6 "
    }, h("div", {
      className: "p-5 d-flex flex-column justify-content-center align-items-center position-relative c-game-intro-card mb-3"
    }, h("i", {
      class: "fa-regular fa-circle-dot position-absolute top-0 start-0 m-2 "
    }), h("i", {
      class: "fa-regular fa-circle-dot position-absolute top-0 end-0 m-2 "
    }), h("i", {
      class: "fa-regular fa-circle-dot position-absolute bottom-0 start-0 m-2 "
    }), h("i", {
      class: "fa-regular fa-circle-dot position-absolute bottom-0 end-0 m-2 "
    }), h("h2", {
      className: "mb-4"
    }, "Space Pong"), h("div", {
      className: "h-50 w-50 "
    }, h("img", {
      src: "./img/ping-pong-intro.png",
      alt: "pong",
      className: "img-fluid"
    })), h("p", {
      className: "lead text-light mb-4"
    }, "Get ready"), h("div", {
      className: "d-flex flex-column flex-lg-row justify-content-around align-items-center w-100"
    }, h("button", {
      className: "btn c-btn-danger mb-2 mb-lg-0",
      "on:click": () => this.$emit("startGame", "pong")
    }, "Remote Game"), h("button", {
      className: "btn c-btn-danger ",
      "on:click": () => this.$emit("localGame")
    }, "Local Game")))), h("div", {
      className: "col-12 col-lg-6  "
    }, h("div", {
      className: "p-5 d-flex flex-column justify-content-center align-items-center position-relative c-game-intro-card mb-3"
    }, h("i", {
      class: "fa-regular fa-circle-dot position-absolute top-0 start-0 m-2"
    }), h("i", {
      class: "fa-regular fa-circle-dot position-absolute top-0 end-0 m-2 "
    }), h("i", {
      class: "fa-regular fa-circle-dot position-absolute bottom-0 start-0 m-2 "
    }), h("i", {
      class: "fa-regular fa-circle-dot position-absolute bottom-0 end-0 m-2 "
    }), h("h2", {
      className: "mb-4"
    }, "Tic Tac Toe"), h("div", {
      className: "h-50 w-50 "
    }, h("img", {
      src: "./img/tic-tac-toe-intro.png",
      alt: "pong",
      className: "img-fluid"
    })), h("p", {
      className: "lead text-light mb-4"
    }, "Get ready"), h("button", {
      className: "btn c-btn-danger",
      "on:click": () => this.$emit("startGame", "tic-tac-toe")
    }, "Start Game")))));
  }
});