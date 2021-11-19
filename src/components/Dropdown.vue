<template>
  <div class="dropdown">
    <div class="dropdown__list">
      <!-- TODO: text-sm -->
      <span class="dropdown__info text-sm">Signed in as</span>
      <span class="dropdown__info text-sm font-600">example@example.com</span>
    </div>
    <div class="dropdown__list">
      <a href="#" class="dropdown__item text-sm"> Profile </a>
      <a href="#" class="dropdown__item text-sm"> Accounts settings </a>
    </div>
    <div class="dropdown__list">
      <router-link
        @click.native="logout"
        to="#"
        class="dropdown__item block text-sm"
      >
        Log out
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
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
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  border: #f4f4f5 1px solid;
}

.dropdown__list {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f4f4f5;
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
  color: #3f3f46;
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
