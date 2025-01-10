import { h, Fragment, defineComponent } from "../../../lib/index.js";
import { SearchBar } from "./SearchBar.js";
import { SideBar } from "./SideBar.js";
import { NavBarTop } from "./NavBarTop.js";
import { Store } from "../../../lib/store.js";
export const NavBar = defineComponent({
  render() {
    return h("div", null, h(NavBarTop, {
      "on:logout": () => this.$emit("logout"),
      userImg: this.props.userImg
    }));
  }
});