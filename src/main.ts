import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "./assets/tailwind.css";
import "./assets/theme.css";
import "./assets/fds.css";

axios.defaults.baseURL = "http://127.0.0.1:8000";

Vue.config.productionTip = false;

// FIXME : 임시 truncate 함수 구현. but 더 좋은 방법이나 모듈화 의논
Vue.filter("truncate", function (value: string, size: number) {
  if (!value) return "";
  value = value.toString();

  if (value.length <= size) {
    return value;
  }
  return value.substr(0, size) + "..";
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
