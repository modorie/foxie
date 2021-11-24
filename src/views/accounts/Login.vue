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

      <h1 class="login__text mulish">Log in to Foxie</h1>

      <div class="card">
        <form @submit.prevent="login">
          <div>
            <p class="login__label">이메일</p>
            <input class="login__input" type="text" v-model="email" />
            <p class="login__guide">이메일을 입력해주세요.</p>
          </div>

          <div>
            <p class="login__label">비밀번호</p>
            <input
              class="login__input"
              type="password"
              v-model="password"
              @keyup.enter="login"
            />
            <p class="login__guide">
              <span class="guide__bold">숫자</span>와
              <span class="guide__bold">문자</span>를 포함해
              <span class="guide__bold">8자리</span> 이상이 필요해요.
            </p>
          </div>

          <router-link to="/">
            <div class="login__button mulish" @click="login">Log in</div>
          </router-link>

          <router-link to="/">
            <div class="google__button" @click="login">
              <icon-base viewBox="0 0 32 32" width="20" height="20">
                <icon-google />
              </icon-base>
              <p>Log in with Google</p>
            </div>
          </router-link>
        </form>
      </div>

      <div class="login__footer">
        <p>
          아이디가 없으신가요?
          <span class="sign__up mulish">
            <router-link to="/signup">Sign up</router-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";

export default {
  components: {
    IconBase,
    IconLogo,
    IconGoogle,
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
          location.reload();
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
  min-width: 100vw;
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
  padding-left: 0.3rem;
}

.login__input {
  background-color: var(--background);
  border: 1px solid var(--board-header);
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  outline: none;
}

.login__guide {
  margin: 0.3rem 0rem 1.5rem 0.3rem;
  font-size: 14px;
  color: var(--recommend-text);
  font-weight: 300;
}

.guide__bold {
  font-weight: 700;
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

.google__button {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: var(--gray-600);
  font-weight: 700;
}
.google__button p {
  margin-left: 3rem;
}

.sign__up {
  margin-left: 0.5rem;
  color: var(--coral);
  font-weight: 600;
}
</style>
