<template>
  <div class="container">
    <div class="control"></div>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="#ffffff"
      icon-name="icon"
    >
      <icon-home />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="#ffffff"
      icon-name="droplet"
    >
      <icon-movie />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="#ffffff"
      icon-name="droplet"
    >
      <icon-review />
    </icon-base>

    <icon-base
      viewBox="0 0 32 32"
      width="24"
      height="24"
      iconColor="#ffffff"
      icon-name="droplet"
    >
      <icon-community />
    </icon-base>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconCommunity from "./icons/IconCommunity.vue";
import IconHome from "./icons/IconHome.vue";
import IconMovie from "./icons/IconMovie.vue";
import IconReview from "./icons/IconReview.vue";

export default {
  name: "Sidebar",
  components: {
    IconBase,
    IconHome,
    IconCommunity,
    IconMovie,
    IconReview,
  },
};
</script>

<style></style>
