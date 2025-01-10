import { h, defineComponent } from "../../../../lib/index.js";
import { Charts } from "./Charts.js";
import { UserStatistics } from "./UserStatistics.js";
import { RoundedChart } from "./RoundedChart.js";
export const StatsPanel = defineComponent({
  render() {
    // console.log("StatsPanel",this.props.userData);
    return h("div", {
      className: "row my-3"
    }, h("div", {
      className: " col-12 col-lg-6"
    }, h(Charts, null)), h("div", {
      className: " col-12 col-lg-6 "
    }, h(RoundedChart, {
      userLevel: this.props.userData.level,
      userExp: this.props.userData.points
    })));
  }
});