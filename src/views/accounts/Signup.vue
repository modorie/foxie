<template>
  <section class="fixed">
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
            <p class="signup__label">이메일</p>
            <input class="signup__input" type="text" v-model="email" />
            <p class="signup__guide">로그인 시 사용할 이메일을 입력해주세요.</p>
          </div>

          <div>
            <p class="signup__label">사용자 이름</p>
            <input class="signup__input" type="text" v-model="username" />
            <p class="signup__guide">사용자 이름을 만들어보세요.</p>
          </div>

          <div>
            <p class="signup__label">비밀번호</p>
            <input class="signup__input" type="password" v-model="password1" />
            <p class="signup__guide">
              <span class="guide__bold">숫자</span>와
              <span class="guide__bold">문자</span>를 포함해
              <span class="guide__bold">8자리</span> 이상이 필요해요.
            </p>
          </div>

          <div>
            <p class="signup__label">비밀번호 확인</p>
            <input
              class="signup__input"
              type="password"
              v-model="password2"
              @keyup.enter="signup"
            />
            <p class="signup__guide">비밀번호를 한 번 더 입력해주세요.</p>
          </div>

          <router-link to="/">
            <div class="signup__button mulish" @click="signup">Sign up</div>
          </router-link>
        </form>
      </div>
    </div>
  </section>
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
  padding-left: 0.3rem;
}

.signup__input {
  background-color: var(--background);
  border: 1px solid var(--board-header);
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  outline: none;
}

.signup__guide {
  margin: 0.3rem 0rem 1.5rem 0.3rem;
  font-size: 14px;
  color: var(--recommend-text);
  font-weight: 300;
}

.guide__bold {
  font-weight: 700;
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
