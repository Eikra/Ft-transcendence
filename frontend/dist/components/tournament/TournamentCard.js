import { h, defineComponent } from "../../../lib/index.js";
import { BACKEND_URL } from "../../utils/apiRequest.js";
import { i18n } from "../../utils/i18n.js";
export const TournamentCard = defineComponent({
  props: {
    tournament: {
      type: Object,
      required: true // Ensures the tournament data is passed
    }
  },
  render() {
    const tournament = this.props.tournament;
    const owner = tournament.owner || {}; // Safeguard in case owner data is missing
    const ownerName = this.props.tournament.owner_name || "Unknown Owner"; // Fallback for owner display name
    const availableSlots = tournament.max_players - tournament.participants_count; // Calculate available slots

    const ownerAvatar = this.props.tournament.owner_avatar ? `${BACKEND_URL}/auth${this.props.tournament.owner_avatar}` : "https://example.com/default-avatar.png";
    return h("div", {
      className: "c-tournament-card p-3 m-2"
    }, h("div", {
      className: "d-flex flex-column justify-content-center gap-2 m-2"
    }, h("div", {
      className: "c-enemy-avatar d-flex justify-content-center w-100"
    }, h("img", {
      src: ownerAvatar,
      alt: i18n.t("tournament.card.avatar_alt"),
      className: "c-enemy-avatar"
    })), h("span", {
      className: "c-friend-name"
    }, "@_", ownerName), h("h3", null, tournament.name || i18n.t("tournament.card.unnamed"))), h("div", {
      className: "d-flex justify-content-between align-items-center gap-2 w-100"
    }, h("div", {
      className: "text-start"
    }, h("div", null, h("span", null, i18n.t("tournament.card.available_slots"), ": "), h("span", null, availableSlots)), h("div", null, h("span", null, i18n.t("tournament.card.max_slots"), ": "), h("span", null, tournament.max_players || i18n.t("tournament.card.not_available")))), h("div", {
      className: "d-flex gap-2"
    }, h("button", {
      className: "btn c-btn-danger",
      "on:click": () => this.$emit("join", tournament.id)
    }, i18n.t("tournament.card.join")), h("button", {
      className: "btn c-btn",
      "on:click": () => this.$emit("view", tournament.id)
    }, i18n.t("tournament.card.view")))));
  }
});