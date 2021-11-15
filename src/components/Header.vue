<template>
  <div class="header">
    <section class="header-search">
      <div>
        <icon-base viewBox="0 0 24 24" width="24" height="24" icon-name="icon">
          <icon-search :class="[active ? 'header-search-active' : '']" />
        </icon-base>
      </div>
      <input
        type="text"
        placeholder="Search"
        v-model.trim="searchInput"
        @focus="active = true"
        @blur="active = false"
      />
    </section>
    <div v-if="isLogin">
      <section class="header-info">
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
          class="header-avatar"
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
      </section>
      <dropdown
        v-if="isDropdownViewed"
        @close-dropdown="isDropdownViewed = false"
      ></dropdown>
    </div>
    <div v-else>
      <router-link
        :to="{ name: 'Login' }"
        class="mulish header__button header__button__secondary"
        >Log In</router-link
      >
      <router-link
        :to="{ name: 'Signup' }"
        class="mulish header__button header__button__primary"
        >Sign Up</router-link
      >
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconBell from "./icons/IconBell.vue";
import IconAvatar from "./icons/IconAvatar.vue";
import Dropdown from "./Dropdown.vue";

export default {
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
      isLogin: false,
      isDropdownViewed: false,
    };
  },
  methods: {
    logout: function () {
      this.isLogin = false;
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Login" });
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  height: 70px;
  align-items: center;
}

.header-search {
  margin-left: 3rem;
  display: flex;
  align-items: center;
  width: 65%;
}

.header-search-active {
  stroke: #52525b;
}

.header-search input {
  margin-left: 1.5rem;
  width: 100%;
}

.header-search input:focus {
  outline: none;
}

.header-info {
  display: flex;
  align-items: center;
}

.header-bell {
  margin-left: 2rem;
}

.header-avatar {
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
  color: #fff;
  font-weight: 500;
}

.header__button__secondary {
  background-color: #fff;
  color: #52525b;
  border: 1px solid #d1d5db;
  font-weight: 500;
}
</style>
