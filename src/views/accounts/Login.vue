<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">email: </label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">비밀번호: </label>
        <input
          type="password"
          id="password"
          v-model="password"
          @keyup.enter="login"
        />
      </div>
      <button @click="login">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
