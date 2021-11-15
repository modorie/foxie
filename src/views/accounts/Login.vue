<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="email">이메일: </label>
      <input type="text" id="email" v-model="credentials.email" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input
        type="password"
        id="password"
        v-model="credentials.password"
        @keyup.enter="login"
      />
    </div>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
import axios from "axios";

// const SERVER_URL = "process.env.VUE_APP_SERVER_URL";

export default {
  name: "Login",
  data() {
    return {
      credentials: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      axios({
        method: "post",
        url: "/accounts/api-token-auth/",
        data: this.credentials,
      })
        .then((res) => {
          // console.log(res);
          localStorage.setItem("jwt", res.data.token);
          this.$emit("login");
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
