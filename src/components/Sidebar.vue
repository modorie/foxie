<template>
  <div class="sidebar">
    <div class="menu-item">
      <!-- TODO : for문으로 리팩토링 -->
      <router-link to="/">
        <icon-base viewBox="0 0 64 64" width="64" height="64" icon-name="icon">
          <icon-logo />
        </icon-base>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link to="/">
        <icon-base viewBox="0 0 64 64" width="64" height="64" icon-name="icon">
          <icon-home />
        </icon-base>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link to="/movie">
        <icon-base viewBox="0 0 64 64" width="64" height="64" icon-name="icon">
          <icon-movie />
        </icon-base>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link to="/review">
        <icon-base viewBox="0 0 64 64" width="64" height="64" icon-name="icon">
          <icon-review />
        </icon-base>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link to="/community">
        <icon-base viewBox="0 0 64 64" width="64" height="64" icon-name="icon">
          <icon-community />
        </icon-base>
      </router-link>
    </div>
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
  background-color: #2f3641;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;

  width: 100px;

  /* display: flex;
  flex-direction: column; */
}
</style>
