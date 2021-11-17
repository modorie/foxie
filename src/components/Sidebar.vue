<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <router-link to="/" exact="">
        <!-- TODO : for문으로 리팩토링 -->
        <icon-base viewBox="0 0 43 54" width="42" height="42" icon-name="icon">
          <icon-logo />
        </icon-base>
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
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
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
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconLogo from "./icons/IconLogo.vue";
import IconCommunity from "./icons/IconCommunity.vue";
import IconHome from "./icons/IconHome.vue";
import IconMovie from "./icons/IconMovie.vue";
import IconReview from "./icons/IconReview.vue";

export default {
  name: "Sidebar",
  components: {
    IconLogo,
    IconBase,
    IconHome,
    IconCommunity,
    IconMovie,
    IconReview,
  },
};
</script>

<style scoped>
.sidebar {
  background-color: var(--sidebar);
  position: fixed;
  z-index: 1;
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
  margin-bottom: 2rem;
}

.sidebar__menu {
  width: 100px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar__menu__title {
  color: #515a67;
  font-size: 10px;
  font-weight: 600;
}

.router-link-active {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: inset -3px 0 0 0px #ed5656;
}

.router-link-active .sidebar__menu__title {
  color: #ffffff;
}

.router-link-active .sidebar__menu__icon {
  stroke: #ed5656;
}

.sidebar__menu:hover .sidebar__menu__title {
  color: rgba(255, 255, 255, 0.6);
}

.sidebar__menu:hover .sidebar__menu__icon {
  stroke: rgba(255, 255, 255, 0.6);
}

/* not active를 css not selector로 처리 하기 어려워서 무식하게 구현 */
.router-link-active .sidebar__menu:hover .sidebar__menu__title {
  color: #ffffff;
}

.router-link-active .sidebar__menu:hover .sidebar__menu__icon {
  stroke: #ed5656;
}
</style>
