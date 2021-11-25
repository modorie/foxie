import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userAvatar: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      console.log(state.user);
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.access_token}`;
    },
    SET_USER_IMAGE(state, avatarData) {
      state.userAvatar = avatarData;
      localStorage.setItem("avatar", avatarData);
    },
    LOGOUT() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    signup({ commit }, credentials) {
      return axios({
        method: "post",
        url: "/accounts/registration/",
        data: credentials,
      }).then(({ data }) => {
        console.log(data);
        commit("SET_USER_DATA", data);
      });
    },
    login({ commit }, credentials) {
      return axios({
        method: "post",
        url: "/accounts/login/",
        data: credentials,
      }).then(({ data }) => {
        // console.log(data);
        commit("SET_USER_DATA", data);
      });
    },
    getUserImage({ state, commit }) {
      return axios({
        method: "get",
        url: `/accounts/${state.user.username}`,
      }).then(({ data }) => {
        const { avatar } = data;
        commit("SET_USER_IMAGE", avatar);
      });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
  },
  modules: {},
  getters: {
    isLogin(state) {
      return !!state.user;
    },
  },
});
