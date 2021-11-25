<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <router-link to="/" exact="">
        <!-- TODO : for문으로 리팩토링 -->
        <icon-base viewBox="0 0 45 56" width="42" height="42" icon-name="icon">
          <icon-logo />
        </icon-base>
        <p class="sidebar__logo__name mulish"><span>Foxie</span></p>
      </router-link>
    </div>

    <router-link to="/" exact="">
      <div class="sidebar__menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-home class="sidebar__menu__icon" />
        </icon-base>
        <p class="sidebar__menu__title mulish">HOME</p>
      </div>
    </router-link>

    <router-link to="/movie">
      <div class="sidebar__menu">
        <icon-base viewBox="0 0 29 34" width="32" height="32" icon-name="icon">
          <icon-movie class="sidebar__menu__icon" />
        </icon-base>
        <p class="sidebar__menu__title mulish">MOVIE</p>
      </div>
    </router-link>

    <router-link to="/review">
      <div class="sidebar__menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-review class="sidebar__menu__icon" />
        </icon-base>
        <p class="sidebar__menu__title mulish">REVIEW</p>
      </div>
    </router-link>

    <router-link to="/community">
      <div class="sidebar__menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-community class="sidebar__menu__icon" />
        </icon-base>
        <p class="sidebar__menu__title mulish">COMMUNITY</p>
      </div>
    </router-link>

    <div @click="getProfile">
      <div class="sidebar__menu">
        <icon-base viewBox="0 0 32 36" width="32" height="32" icon-name="icon">
          <icon-profile class="sidebar__menu__icon" />
        </icon-base>
        <p class="sidebar__menu__title mulish">PROFILE</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconMovie from "@/components/icons/IconMovie.vue";
import IconCommunity from "@/components/icons/IconCommunity.vue";
import IconProfile from "@/components/icons/IconProfile.vue";
import IconReview from "@/components/icons/IconReview.vue";

export default {
  name: "Sidebar",
  components: {
    IconBase,
    IconLogo,
    IconHome,
    IconMovie,
    IconCommunity,
    IconProfile,
    IconReview,
  },
  data() {
    return {
      username: null,
    };
  },
  methods: {
    getProfile() {
      const user = localStorage.getItem("user");
      if (user) {
        this.username = JSON.parse(localStorage.getItem("user")).user.username;
        axios({
          method: "get",
          url: `accounts/${this.username}`,
        })
          .then(() => {
            this.$router.push({
              name: "Profile",
              params: { username: this.username },
            });
          })
          .catch(() => {
            window.alert("프로필이 없습니다. 프로필을 작성해주세요.");
            this.$router.push({
              name: "ProfileNew",
            });
          });
      } else {
        window.alert("프로필을 보시려면 로그인하세요.");
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: var(--sidebar);
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  bottom: 0;

  width: 100px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.sidebar__logo {
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.sidebar__logo__name {
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.05rem;
  margin-top: 0.2rem;
}

.sidebar__logo__name span {
  background: linear-gradient(to bottom, #ed5656, #ed5656e0, #ffa97e9f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar__logo:hover {
  transition: 0.3s;
  opacity: 0.7;
}

.sidebar__menu {
  width: 100px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.sidebar__menu__title {
  color: #515a67;
  font-size: 10px;
  font-weight: 600;
}

.router-link-active {
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: inset -3px 0 0 0px #ed5656;
}

.router-link-active .sidebar__menu__title {
  transition: 0.3s;
  color: #ffffff;
}

.router-link-active .sidebar__menu__icon {
  transition: 0.3s;
  stroke: #ed5656;
}

.sidebar__menu:hover .sidebar__menu__title {
  transition: 0.3s;
  color: rgba(255, 255, 255, 0.6);
}

.sidebar__menu:hover .sidebar__menu__icon {
  transition: 0.3s;
  stroke: rgba(255, 255, 255, 0.6);
}

/* not active를 css not selector로 처리 하기 어려워서 무식하게 구현 */
.router-link-active .sidebar__menu:hover .sidebar__menu__title {
  transition: 0.3s;
  color: #ffffff;
}

.router-link-active .sidebar__menu:hover .sidebar__menu__icon {
  transition: 0.3s;
  stroke: #ed5656;
}
</style>
