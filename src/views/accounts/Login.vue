<template>
  <div class="fixed">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <icon-base viewBox="0 0 43 54" width="6rem" height="6rem">
            <icon-logo />
          </icon-base>
        </router-link>
      </div>

      <h1 class="login__text mulish">Log in to Foxie</h1>

      <div class="card">
        <form @submit.prevent="login">
          <div>
            <p class="login__label mulish">E-mail</p>
            <input class="login__input" type="text" v-model="email" />
          </div>

          <div>
            <p class="login__label mulish">Password</p>
            <input
              class="login__input"
              type="password"
              v-model="password"
              @keyup.enter="login"
            />
          </div>

          <router-link to="/">
            <div class="login__button mulish" @click="login">Log in</div>
          </router-link>
        </form>
      </div>

      <div class="login__footer">
        <p>
          아이디가 없으신가요?
          <span class="sign__up mulish">
            <router-link to="/signup"> Sign up </router-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconLogo from "@/components/icons/IconLogo.vue";

export default {
  components: {
    IconBase,
    IconLogo,
  },
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

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;
  background-color: var(--background);
  display: flex;
  justify-content: center;
}
.container {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.login__text {
  color: var(--text);
  font-size: 28px;
  font-weight: 200;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.card {
  width: 20rem;
  background-color: var(--header);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.06);
  padding: 2rem 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.login__label {
  margin-bottom: 0.2rem;
  font-weight: 200;
  padding-left: 0.3rem;
  font-size: 14px;
}

.login__input {
  background-color: var(--background);
  border: 1px solid var(--board-header);
  margin-bottom: 1.5rem;
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  outline: none;
}

.login__button {
  width: 100%;
  background-color: var(--coral);
  border-radius: 8px;
  text-align: center;
  margin-top: 1.5rem;
  padding: 0.5rem;
  color: var(--white);
  font-weight: 700;
}

.sign__up {
  margin-left: 0.5rem;
  color: var(--coral);
  font-weight: 600;
}
</style>
