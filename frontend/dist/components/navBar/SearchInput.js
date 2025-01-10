import { h, defineComponent } from "../../../lib/index.js";
import { i18n } from "../../utils/i18n.js";
export const SearchInput = defineComponent({
  state() {
    return {
      searchContent: "",
      eventListener: null
    };
  },
  render() {
    return h("div", {
      class: `d-flex justify-content-center align-items-center w-100`
    }, h("div", {
      class: "search-form w-100"
    }, h("i", {
      class: "fa fa-search"
    }), h("input", {
      type: "text",
      class: "form-control search-form-input",
      placeholder: this.props.placeholder ?? i18n.t("navBar.search"),
      id: this.props.id,
      "on:input": e => {
        this.$updateState({
          searchContent: e.target.value
        });
      },
      "on:keydown": e => e.key === "Escape" && this.blurInput(),
      "on:focus": () => this.$emit("changeFocus", {
        focus: true
      }),
      "on:blur": () => this.$emit("changeFocus", {
        focus: false
      }),
      value: this.state.searchContent
    }), h("span", {
      class: "left-pan",
      style: {
        display: this.state.searchContent.length > 0 ? "block" : "none"
      }
    }, h("i", {
      class: "fa-solid fa-circle-xmark",
      "on:click": this.clearInput
    }))));
  },
  methods: {
    clearInput() {
      this.$updateState({
        searchContent: ""
      });
      this.focusInput();
    },
    focusInput() {
      const elem = document.getElementById(this.props.id);
      if (elem) elem.focus();
    },
    focusListener(event) {
      if (event.key === "k" && event.metaKey) this.focusInput();
      0;
    },
    blurInput() {
      const elem = document.getElementById(this.props.id);
      if (elem) elem.blur();
    }
  },
  onMounted() {
    const eventListener = this.focusListener.bind(this);
    this.$updateState({
      eventListener
    });
    window.addEventListener("keydown", eventListener);
  },
  onUnmounted() {
    if (this.state.eventListener) window.removeEventListener("keydown", this.state.eventListener);
  },
  watchers: {
    searchContent(newValue) {
      this.$emit("input", {
        value: newValue
      });
    }
  }
});