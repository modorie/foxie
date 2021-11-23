<template>
  <div class="header">
    <div class="header__search">
      <div>
        <icon-base viewBox="0 0 24 24" width="24" height="24" icon-name="icon">
          <icon-search
            class="header__search__svg"
            :class="{ active: active }"
          />
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

    <button type="button" @click="onToggleDarkMode">
      {{ isDark ? "🌙" : "🌞" }}
    </button>

    <div v-if="!isLogin">
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

        <div class="header__avatar" @click="isDropdownOpen = !isDropdownOpen">
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

      <transition name="fade">
        <Dropdown
          v-if="isDropdownOpen"
          @close-dropdown="isDropdownOpen = false"
        />
      </transition>
    </div>

    <div v-else class="header__auth">
      <router-link :to="{ name: 'Login' }">
        <div class="mulish header__button header__button__secondary">
          Log in
        </div>
      </router-link>

      <router-link :to="{ name: 'Signup' }">
        <div class="mulish header__button header__button__primary">Sign up</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { authComputed } from "@/helper";

import IconBase from "@/components/IconBase.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBell from "@/components/icons/IconBell.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import Dropdown from "@/components/Dropdown.vue";

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
      isDropdownOpen: false,
      isDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    };
  },

  methods: {
    onToggleDarkMode() {
      // TODO : 코드 중복 제거 100% 가능! 근데 나중에 할래..
      if (window) {
        if (this.isDark) {
          if (document.documentElement.classList.contains("darkmode")) {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
            this.isDark = !this.isDark;
          } else {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
            this.isDark = !this.isDark;
          }
        } else {
          if (document.documentElement.classList.contains("lightmode")) {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
            this.isDark = !this.isDark;
          } else {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
            this.isDark = !this.isDark;
          }
        }
      }
    },
  },

  computed: {
    ...authComputed,
  },

  mounted() {
    if (window && this.isDark) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.add("lightmode");
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
  background-color: var(--header);
  z-index: 100;
}

.header__search {
  margin-left: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}

.header__search__svg {
  stroke: var(--recommend-text);
}

.active {
  stroke: var(--text);
}

.header__search input {
  margin-left: 1.5rem;
  width: 100%;
  background-color: transparent;
  color: var(--header-search);
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
  cursor: pointer;
}

.header__avatar {
  margin-left: 2rem;
  margin-right: 2rem;
  cursor: pointer;
}

.header__auth {
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
}

.header__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 5.5rem;
  text-align: center;
}

.header__button__primary {
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
}

.header__button__secondary {
  background-color: var(--btn-secondary);
  color: var(--btn-secondary-text);
  border: 1px solid var(--btn-secondary-border);
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s;
  transform: translateY(0px);
  transform: opacity 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
