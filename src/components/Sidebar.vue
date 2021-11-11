<template>
  <div class="sidebar">
    <div class="control"></div>

    <!-- TODO : for문으로 리팩토링 -->
    <icon-base
      viewBox="0 0 64 64"
      width="64"
      height="64"
      iconColor="transparent"
      icon-name="icon"
    >
      <icon-logo />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="transparent"
      icon-name="icon"
    >
      <icon-home />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="transparent"
      icon-name="droplet"
    >
      <icon-movie />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="transparent"
      icon-name="droplet"
    >
      <icon-review />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="transparent"
      icon-name="droplet"
    >
      <icon-community />
    </icon-base>
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
