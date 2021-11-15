<template>
  <div class="dropdown__list">
    <div class="dropdown__list__partition">
      <!-- TODO: text-sm -->
      <span class="dropdown__list__info text-sm">Signed in as</span>
      <b class="dropdown__list__info text-sm">example@example.com</b>
    </div>
    <div class="dropdown__list__partition">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="dropdown__list__item text-sm"> Profile </a>
      <a href="#" class="dropdown__list__item text-sm"> Accounts settings </a>
    </div>
    <div class="dropdown__list__partition">
      <router-link
        @click.native="logout"
        to="#"
        class="dropdown__list__item block text-sm"
        >Log out</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data: function () {
    return {
      isLogin: false,
    };
  },
  methods: {
    logout: function () {
      this.isLogin = false;
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Home" });
    },
  },
  created: function () {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.isLogin = true;
    }
  },
};
</script>

<style>
.dropdown__list {
  display: block;
  position: absolute;
  right: 10px;
  top: 60px;
  width: 14rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  border: #f4f4f5 1px solid;
}

.dropdown__list__partition {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: #f4f4f5 1px solid;
}

.dropdown__list__partition:first-child {
  padding-top: 1rem;
  padding-bottom: 0.6rem;
}

.dropdown__list__partition:last-child {
  border-bottom: none;
}

.dropdown__list__info {
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
}

.dropdown__list__item {
  color: #3f3f46;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
