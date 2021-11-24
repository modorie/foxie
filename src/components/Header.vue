<template>
  <div class="header">
    <div class="search__list" v-if="searchInput !== ''" @click="resetInput">
      <h1 class="search__title">
        <span class="search__keyword">{{ this.searchInput }}</span>
        영화를 찾아봤어요
      </h1>

      <!-- FIXME : vue-router는 URL 변경은 하고 이동 안 시켜줌.. a tag로 임시 해결! -->
      <!-- TODO : API가 영어 제목만 불러온다. 우리껀 한글로 해주자 -->
      <a
        v-for="movie in search_MovieList"
        :key="movie.id"
        :href="`/movie/${movie.id}`"
      >
        <p class="search__item__title">
          {{ movie.title }}
          <span class="search__item__release"
            >({{ movie.release_date.split("-")[0] }})
          </span>
        </p>
      </a>
    </div>

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
        @input="onSearch"
        @focus="active = true"
        @blur="active = false"
      />
    </div>

    <button type="button" @click="onToggleDarkMode">
      <icon-base
        v-if="isDark"
        viewBox="0 0 16 16"
        width="1.5rem"
        height="1.5rem"
      >
        <icon-moon />
      </icon-base>

      <icon-base v-else viewBox="0 0 16 16" width="1.5rem" height="1.5rem">
        <icon-sun />
      </icon-base>
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

import axios from "axios";
import { authComputed } from "@/helper";

import Dropdown from "@/components/Dropdown.vue";
import IconBase from "@/components/IconBase.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBell from "@/components/icons/IconBell.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import IconSun from "@/components/icons/IconSun.vue";

const MOVIE_DB_API_URL_SEARCH = "https://api.themoviedb.org/3/search/movie";

export default Vue.extend({
  name: "Header",
  components: {
    Dropdown,
    IconBase,
    IconSearch,
    IconBell,
    IconAvatar,
    IconMoon,
    IconSun,
  },
  data() {
    return {
      search_MovieList: [],
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

    onSearch(event: any) {
      this.searchInput = event.target.value;

      axios
        .get(MOVIE_DB_API_URL_SEARCH, {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            query: this.searchInput,
            region: "kr",
          },
        })
        .then((res) => {
          this.search_MovieList = res.data.results;
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    resetInput() {
      this.searchInput = "";
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

.search__list {
  position: absolute;
  width: 100%;
  left: 0;
  top: 70px;
  background-color: var(--search);
  padding: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}

.search__title {
  font-size: 24px;
  margin-bottom: 1rem;
  font-weight: 200;
}

.search__keyword {
  font-weight: 700;
}

.search__item__title {
  font-size: 18px;
}

.search__item__release {
  color: var(--recommend-text);
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
