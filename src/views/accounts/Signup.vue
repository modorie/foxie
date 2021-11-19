<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="signup">
      <div>
        <label for="email">이메일: </label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="username">username: </label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password1">비밀번호: </label>
        <input type="password" id="password1" v-model="password1" />
      </div>
      <div>
        <label for="password2">비밀번호 확인: </label>
        <input
          type="password"
          id="password2"
          v-model="password2"
          @keyup.enter="signup"
        />
      </div>
      <button @click="signup">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      username: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    signup() {
      this.$store
        .dispatch("signup", {
          email: this.email,
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        })
        .then((res) => {
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
