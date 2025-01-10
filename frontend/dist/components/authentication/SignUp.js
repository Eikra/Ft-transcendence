import { h, Fragment, defineComponent, createApp } from "../../../lib/index.js";
import { BACKEND_URL, myFetch } from "../../utils/apiRequest.js";
import { LoginButton } from "./LoginButton.js";
export const SignUp = defineComponent({
  state() {
    return {
      first_name: "",
      last_name: "",
      user_name: "",
      password: "",
      email: "",
      singUpError: "",
      singUpInProgress: false
    };
  },
  render() {
    return h("form", null, h("div", {
      className: "vh-100 d-flex justify-content-center align-items-center c-welcoming-animation "
    }, h("div", {
      className: "p-2   position-relative c-login-bg border"
    }, h("div", {
      className: "position-absolute c-close-login m-2 fs-3 text-light",
      "on:click": () => this.$emit("changeState")
    }, h("i", {
      className: "fa-solid fa-xmark ",
      role: "button"
    })), h("div", {
      className: "m-2 text-center text-light m-3 mb-4"
    }, h("h2", null, "Welcome")), h("div", {
      className: "m-2 c-input-h d-flex justify-content-between gap-1"
    }, h("input", {
      type: "text",
      className: "form-control h-100 c-login-input-box",
      placeholder: "Fiest name",
      "on:input": e => {
        this.$updateState({
          first_name: e.target.value
        });
      }
    }), h("input", {
      type: "text",
      className: "form-control h-100  c-login-input-box",
      placeholder: "Last name",
      "on:input": e => {
        this.$updateState({
          last_name: e.target.value
        });
      }
    })), h("div", {
      className: "m-2 c-input-h"
    }, h("input", {
      type: "text",
      className: "form-control h-100 w-100 c-login-input-box",
      placeholder: "User name",
      "on:input": e => {
        this.$updateState({
          user_name: e.target.value
        });
      }
    })), h("div", {
      className: "m-2 c-input-h"
    }, h("input", {
      type: "email",
      className: "form-control h-100 w-100 c-login-input-box",
      placeholder: "Email",
      "on:input": e => {
        this.$updateState({
          email: e.target.value
        });
      }
    })), h("div", {
      className: "m-2 c-input-h"
    }, h("input", {
      type: "password",
      className: "form-control h-100 w-100 c-login-input-box",
      placeholder: "password",
      "on:input": e => {
        this.$updateState({
          password: e.target.value
        });
      }
    })), this.state.loginError ? h("div", {
      className: "m-2 text-danger ps-3 "
    }, "Incorrect login or password") : h(Fragment, null), h("div", null, this.state.singUpError.length > 0 ? h("div", {
      className: "m-2 text-danger ps-3 "
    }, this.state.singUpError) : h(Fragment, null)), h("div", {
      className: "m-2 mt-3"
    }, h(LoginButton, {
      content: "SingUp",
      disabled: this.state.first_name.length < 3 || this.state.last_name.length < 3 || this.state.user_name.length < 3 || this.state.email.length < 6 || this.state.password.length < 6,
      loginInProgress: this.state.singUpInProgress,
      "on:click": () => {
        this.$updateState({
          singUpError: false
        });
        this.singUpUser(this.state.first_name, this.state.last_name, this.state.user_name, this.state.email, this.state.password);
      }
    })), h("div", {
      className: " m-2 p-2  text-start text-light"
    }, h("p", {
      className: "mb-0"
    }, "Already regestered or have intra 42 account?", " ", h("a", {
      href: "#",
      className: "text-light",
      "on:click": () => this.$emit("login")
    }, "LogIn"))))));
  },
  methods: {
    async singUpUser(first_name, last_name, user_name, email, password) {
      this.$updateState({
        singUpError: ""
      });
      if (!this.isValidName(first_name) || !this.isValidName(last_name)) {
        this.$updateState({
          singUpError: "First and last name must contain only letters."
        });
        return;
      }
      this.$updateState({
        singUpInProgress: true
      });
      try {
        const response = await fetch(`${BACKEND_URL}/auth/signup/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            first_name,
            last_name,
            user_name,
            email,
            password
          })
        });
        if (response.status === 201) {
          const data = await response.json();
          const accessToken = data.access;
          localStorage.setItem("access_token", accessToken);
          // console.log("Login successful after SingUp, access token stored.");
          this.$emit("loggedIn");
          // this.$updateState({ singUpInProgress: false });

          return accessToken;
        } else if (response.status === 400) {
          const data = await response.json();
          this.$updateState({
            singUpError: data.error,
            singUpInProgress: false
          });
        } else {
          console.error("Login failed:", response.statusText);
          this.$updateState({
            singUpInProgress: false
          });
          return null;
        }
      } catch (error) {
        console.error("Error:", error);
        this.$updateState({
          singUpInProgress: false
        });
      }
    },
    isValidName(name) {
      name = name.trim();
      const nameRegex = /^[a-zA-Z\s'-]+$/;
      const isLengthValid = name.length >= 2 && name.length <= 50;
      return nameRegex.test(name) && isLengthValid;
    }
  }
});