<template>
  <div class="header">
    <div class="header-item">
      <icon-base
        viewBox="0 0 64 64"
        width="64"
        height="64"
        iconColor="transparent"
        icon-name="icon"
      >
        <icon-search />
      </icon-base>
    </div>

    <div class="header-item">
      <icon-base
        viewBox="0 0 64 64"
        width="64"
        height="64"
        iconColor="transparent"
        icon-name="icon"
      >
        <icon-bell />
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconBell from "./icons/IconBell.vue";

export default {
  name: "Header",
  components: {
    IconBase,
    IconSearch,
    IconBell,
  },
};
</script>

<style scoped>
.header {
}
</style>
