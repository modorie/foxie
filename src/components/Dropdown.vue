<template>
  <div class="dropdown">
    <div class="dropdown__list">
      <p class="dropdown__info">Signed in as</p>
      <b class="dropdown__info">example@example.com</b>
    </div>
    <div class="dropdown__list">
      <a href="#" class="dropdown__item">Profile</a>
      <a href="#" class="dropdown__item">Accounts settings</a>
    </div>
    <div class="dropdown__list">
      <router-link @click.native="logout" to="#" class="dropdown__item block">
        Log out
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
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
