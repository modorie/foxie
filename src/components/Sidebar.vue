<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <router-link to="/" exact="">
        <!-- TODO : for문으로 리팩토링 -->
        <icon-base viewBox="0 0 43 54" width="42" height="42" icon-name="icon">
          <icon-logo />
        </icon-base>
      </router-link>
    </div>

    <router-link to="/" exact="">
      <div class="sidebar-menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-home class="sidebar-menu-icon" />
        </icon-base>
        <p class="sidebar-menu-title">Home</p>
      </div>
    </router-link>

    <router-link to="/movie">
      <div class="sidebar-menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-movie class="sidebar-menu-icon" />
        </icon-base>
        <p class="sidebar-menu-title">Movie</p>
      </div>
    </router-link>

    <router-link to="/review">
      <div class="sidebar-menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-review class="sidebar-menu-icon" />
        </icon-base>
        <p class="sidebar-menu-title">Review</p>
      </div>
    </router-link>

    <router-link to="/community">
      <div class="sidebar-menu">
        <icon-base viewBox="0 0 29 32" width="32" height="32" icon-name="icon">
          <icon-community class="sidebar-menu-icon" />
        </icon-base>
        <p class="sidebar-menu-title">Community</p>
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
  data() {
    return {
      active: false,
    };
  },
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
  background-color: #2f3641;
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

.sidebar-logo {
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

.sidebar-menu {
  width: 100px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-menu-title {
  color: #515a67;
  font-size: 14px;
  font-weight: 400;
}

.router-link-active {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: inset -3px 0 0 0px #ed5656;
}

.router-link-active .sidebar-menu-title {
  color: #ed5656;
}

.router-link-active .sidebar-menu-icon {
  stroke: #ed5656;
}
</style>
