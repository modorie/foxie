<template>
  <div>
    <h1>Signup</h1>
    <div>
      <label for="email">이메일: </label>
      <input type="text" id="email" v-model="credentials.email" />
    </div>
    <div>
      <label for="nickname">닉네임: </label>
      <input type="text" id="nickname" v-model="credentials.nickname" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="credentials.password" />
    </div>
    <div>
      <label for="passwordConfirmation">비밀번호 확인: </label>
      <input
        type="password"
        id="passwordConfirmation"
        v-model="credentials.passwordConfirmation"
        @keyup.enter="signup"
      />
    </div>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from "axios";

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Signup",
  data() {
    return {
      credentials: {
        email: null,
        nickname: null,
        password: null,
        passwordConfirmation: null,
      },
    };
  },
  methods: {
    signup() {
      axios({
        method: "post",
        url: "/accounts/signup/",
        data: this.credentials,
      })
        .then(() => {
          axios({
            method: "post",
            url: "/accounts/api-token-auth/",
            data: this.credentials,
          })
            .then((res) => {
              localStorage.setItem("jwt", res.data.token);
              this.$emit("login");
            })
            .catch((err) => {
              console.log(err);
            });
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
