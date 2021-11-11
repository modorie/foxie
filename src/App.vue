<template>
  <div id="app">
    <side-bar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    SideBar,
  },
};
</script>

<style>
#app {
  margin-left: 100px;
}
</style>
