<template>
  <div id="app">
    <Header />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    SideBar,
    Header,
  },
};
</script>

<style>
#app {
  margin-left: 100px;
}
</style>
