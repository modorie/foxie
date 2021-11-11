<template>
  <div id="app">
    <side-bar />
    <div>
      <router-link to="/">Home | </router-link>
      <router-link to="/about">About</router-link>
    </div>
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
