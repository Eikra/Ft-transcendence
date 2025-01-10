import { h, defineComponent } from "../../../../lib/index.js";
import { StatsPanel } from "./StatsPanel.js";
import { AboutUser } from "./AboutUser.js";
import { UserStatistics } from "./UserStatistics.js";
export const UserDashboard = defineComponent({
  render() {
    return h("div", {
      className: " mx-2 mx-lg-3  row "
    }, h(UserStatistics, {
      userData: this.props.userData
    }), h("div", {
      className: "col-12  "
    }, h(StatsPanel, {
      userData: this.props.userData,
      a: true
    })));
  }
});