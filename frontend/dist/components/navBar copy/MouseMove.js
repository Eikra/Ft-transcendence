import { h, Fragment, defineComponent } from "../../../lib/index.js";
const MouseTracker = defineComponent({
  state() {
    return {
      x: 100,
      y: 0,
      eventLisner: null
    };
  },
  render() {
    return h("div", {
      className: "bg-danger ",
      style: {
        height: "30px",
        width: "30px",
        position: "absolute",
        top: `${this.state.y}px`,
        left: `${this.state.x}px`
      }
    });
  },
  onMounted() {
    const updatePos = event => {
      this.$updateState({
        x: event.x + 15,
        y: event.y
      });
    };
    this.$updateState({
      eventLisner: updatePos
    });
    window.addEventListener("mousemove", updatePos);
  },
  onUnmounted() {
    window.removeEventListener("mousemove", this.state.eventLisner);
  }
});
export const MouseMove = defineComponent({
  state() {
    return {
      isOn: false
    };
  },
  render() {
    return h("div", null, h("div", {
      class: "form-check form-switch"
    }, h("input", {
      class: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "flexSwitchCheckChecked",
      "on:click": e => this.$updateState({
        isOn: e.target.checked
      }),
      checked: this.state.isOn
    })), this.state.isOn ? h(MouseTracker, null) : h(Fragment, null));
  }
});