<template>
  <div class="header">
    <div class="header__search">
      <div>
        <icon-base viewBox="0 0 24 24" width="24" height="24" icon-name="icon">
          <icon-search :class="{ header__search__active: active }" />
        </icon-base>
      </div>
      <input
        type="text"
        placeholder="Search"
        v-model.trim="searchInput"
        @focus="active = true"
        @blur="active = false"
      />
    </div>

    <div v-if="isLogin">
      <div class="header__info">
        <div class="header-bell">
          <icon-base
            viewBox="0 0 32 32"
            width="24"
            height="24"
            icon-name="icon"
          >
            <icon-bell />
          </icon-base>
        </div>

        <div
          class="header__avatar"
          @click="isDropdownViewed = !isDropdownViewed"
        >
          <icon-base
            viewBox="0 0 64 64"
            width="32"
            height="32"
            icon-name="icon"
          >
            <icon-avatar />
          </icon-base>
        </div>
      </div>

      <Dropdown
        v-if="isDropdownViewed"
        @close-dropdown="isDropdownViewed = false"
      />
    </div>

    <div v-else>
      <router-link
        :to="{ name: 'Login' }"
        class="mulish header__button header__button__secondary"
      >
        Log in
      </router-link>

      <router-link
        :to="{ name: 'Signup' }"
        class="mulish header__button header__button__primary"
      >
        Sign up
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconBell from "./icons/IconBell.vue";
import IconAvatar from "./icons/IconAvatar.vue";
import Dropdown from "./Dropdown.vue";

export default Vue.extend({
  name: "Header",
  components: {
    IconBase,
    IconSearch,
    IconBell,
    IconAvatar,
    Dropdown,
  },
  data() {
    return {
      searchInput: "",
      active: false,
      isLogin: true,
      isDropdownViewed: false,
    };
  },
  methods: {
    logout() {
      this.isLogin = false;
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Login" });
    },
  },
  created() {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.isLogin = true;
    }
  },
});
</script>

<style scoped>
.header {
  position: fixed;
  left: 100px;
  top: 0;
  width: calc(100% - 100px);

  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 70px;
  align-items: center;
  background-color: #ffffff;
}

.header__search {
  margin-left: 3rem;
  display: flex;
  align-items: center;
  width: 65%;
}

.header__search__active {
  stroke: #52525b;
}

.header__search input {
  margin-left: 1.5rem;
  width: 100%;
}

.header__search input:focus {
  outline: none;
}

.header__info {
  display: flex;
  align-items: center;
}

.header-bell {
  margin-left: 2rem;
}

.header__avatar {
  margin-left: 2rem;
  margin-right: 2rem;
}

.header__button {
  border-radius: 0.3rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-right: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}

.header__button__primary {
  background-color: #ed5656;
  border: 1px solid #ed5656;
  color: #ffffff;
  font-weight: 500;
}

.header__button__secondary {
  background-color: #ffffff;
  color: #52525b;
  border: 1px solid #d1d5db;
  font-weight: 500;
}
</style>
