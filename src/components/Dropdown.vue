<template>
  <div class="dropdown">
    <div class="dropdown__list">
      <p class="dropdown__info">
        <b>{{ user.nickname }}</b>
        <span>님 안녕하세요.</span>
      </p>
      <p class="dropdown__info">{{ user.user.email }}</p>
    </div>
    <div class="dropdown__list">
      <router-link
        :to="{ name: 'Profile', params: { username: user.user.username } }"
        class="dropdown__item hover"
        >내 프로필</router-link
      >
      <a href="#" class="dropdown__item hover">정보 수정</a>
    </div>
    <div class="dropdown__list">
      <router-link
        @click.native="logout"
        to="#"
        class="dropdown__item hover block"
      >
        로그아웃
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    const username = JSON.parse(localStorage.getItem("user")).user.username;
    axios.get(`accounts/${username}`).then((res) => {
      this.user = res.data;
      this.$emit("user-avatar", this.user.avatar);
    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 10px;
  top: 60px;
  width: 14rem;
  background-color: var(--header);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  border: var(--board-header) 1px solid;
}

.dropdown__list {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--board-header);
  font-size: 14px;
}

.dropdown__list:first-child {
  padding-top: 1rem;
  padding-bottom: 0.6rem;
}

.dropdown__list:last-child {
  border-bottom: none;
}

.dropdown__info {
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
}

.dropdown__item {
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.font-600 {
  font-weight: 600;
}
</style>
