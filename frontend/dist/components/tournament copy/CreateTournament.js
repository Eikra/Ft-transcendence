import { h, defineComponent } from "../../../lib/index.js";
import { myFetch, BACKEND_URL } from "../../utils/apiRequest.js";
export const CreateTournament = defineComponent({
  state() {
    return {
      tournamentName: '',
      maxPlayers: 4
    };
  },
  methods: {
    async createTournament() {
      let accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        accessToken = await refresh();
      }
      try {
        const response = await myFetch(`${BACKEND_URL}/manage/tour/tournament/create/`, {
          method: 'POST',
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.tournamentName,
            max_players: this.state.maxPlayers
          })
        });
        console.log("response", response.ok);
        const data = await response.json();
        if (response.ok) {
          // Tournament created successfully
          console.log("Tournament created successfully:", data);
          this.$emit('cancel'); // Go back to tournament list
        } else {
          // Handle error (maybe show a toast or error message)
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error creating tournament:', error);
      }
    }
  },
  render() {
    // return (
    //   <div className="d-flex justify-content-center ">
    //     <div className="col-12 col-lg-8 col-xl-6 ">
    //       <h1 className="text-center m-3">Create Tournament</h1>
    //       <div className="text-start mb-3  p-2">
    //         <label className="form-label ps-3">
    //             Tournament Name
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control c-floating-input border-0 p-2"

    //         />
    //       </div>
    //       <div className="text-start mb-3  p-2">
    //         <label className="form-label ps-3">
    //            Number of Players
    //         </label>
    //         <select className="form-select c-floating-input border-0 p-2">
    //           <option selected>4</option>
    //           <option>8</option>
    //           <option>16</option>
    //         </select>

    //       </div>
    //       <div className="d-flex justify-content-end align-items-center mx-3">
    //         <button
    //           className="btn c-btn m-2"
    //           on:click={() => this.$emit("cancel")}
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           className="btn c-btn-danger m-2"
    //           on:click={() => this.$emit("create")}
    //         >
    //           Create
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
    return h("div", {
      className: "d-flex justify-content-center"
    }, h("div", {
      className: "col-12 col-lg-8 col-xl-6"
    }, h("h1", {
      className: "text-center m-3"
    }, "Create Tournament"), h("div", {
      className: "text-start mb-3 p-2"
    }, h("label", {
      className: "form-label ps-3"
    }, "Tournament Name"), h("input", {
      type: "text",
      className: "form-control c-floating-input border-0 p-2",
      value: this.state.tournamentName,
      "on:input": e => this.$updateState({
        tournamentName: e.target.value
      })
    })), h("div", {
      className: "text-start mb-3 p-2"
    }, h("label", {
      className: "form-label ps-3"
    }, "Number of Players"), h("select", {
      className: "form-select c-floating-input border-0 p-2",
      value: this.state.maxPlayers,
      "on:change": e => this.$updateState({
        maxPlayers: parseInt(e.target.value)
      })
    }, h("option", {
      value: 4
    }, "4"), h("option", {
      value: 8
    }, "8"), h("option", {
      value: 16
    }, "16"))), h("div", {
      className: "d-flex justify-content-end align-items-center mx-3"
    }, h("button", {
      className: "btn c-btn m-2",
      "on:click": () => this.$emit('cancel')
    }, "Cancel"), h("button", {
      className: "btn c-btn-danger m-2",
      "on:click": () => this.createTournament()
    }, "Create"))));
  }
});