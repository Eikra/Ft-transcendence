function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { h, defineComponent, Slot } from "../../../lib/index.js";
export const Link = defineComponent({
  state() {
    return {
      matchedRoute: null,
      subscription: null
    };
  },
  onMounted() {
    const subscription = this.$context.router.subscribe(({
      to
    }) => {
      this.handleRouteChange(to);
    });
    this.$updateState({
      subscription,
      matchedRoute: this.$context.router.matchedRoute ?? null
    });
  },
  onUnmounted() {
    const {
      subscription
    } = this.state;
    this.$context.router.unsubscribe(subscription);
  },
  methods: {
    handleRouteChange(matchedRoute) {
      this.$updateState({
        matchedRoute
      });
    }
  },
  render() {
    const {
      to,
      ...rest
    } = this.props;
    return h("a", _extends({}, rest, {
      class: this.state.matchedRoute?.path === to ? "active" : "",
      href: `#${to}`,
      "on:click": e => {
        e.preventDefault();
        if (!rest.disabled) this.$context.router.navigateTo(to);
      }
    }), h(Slot, null));
  }
});