<template>
  <div class="fixed">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <icon-base viewBox="0 0 45 56" width="6rem" height="6rem">
            <icon-logo />
          </icon-base>
        </router-link>
      </div>

      <h1 class="signup__text mulish">Welcome to Foxie</h1>

      <div class="card">
        <form @submit.prevent="signup">
          <div>
            <p class="signup__label mulish">E-mail</p>
            <input class="signup__input" type="text" v-model="email" />
          </div>

          <div>
            <p class="signup__label mulish">User name</p>
            <input class="signup__input" type="text" v-model="username" />
          </div>

          <div>
            <p class="signup__label mulish">Password</p>
            <input class="signup__input" type="password" v-model="password1" />
          </div>

          <div>
            <p class="signup__label mulish">Password confirm</p>
            <input
              class="signup__input"
              type="password"
              v-model="password2"
              @keyup.enter="signup"
            />
          </div>

          <router-link to="/">
            <div class="signup__button mulish" @click="signup">Sign up</div>
          </router-link>
        </form>
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

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  background-color: var(--background);
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.signup__text {
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

.signup__label {
  margin-bottom: 0.2rem;
  font-weight: 200;
  padding-left: 0.3rem;
  font-size: 14px;
}

.signup__input {
  background-color: var(--background);
  border: 1px solid var(--board-header);
  margin-bottom: 1.5rem;
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  outline: none;
}

.signup__button {
  width: 100%;
  background-color: var(--coral);
  border-radius: 8px;
  text-align: center;
  margin-top: 1.5rem;
  padding: 0.5rem;
  color: var(--white);
  font-weight: 700;
}

.sign__in {
  margin-left: 0.5rem;
  color: var(--coral);
  font-weight: 600;
}
</style>
