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

// FIXME : 리팩토링 및 모듈화는 나중에..
Vue.filter("time", function timeForToday(value: any) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
