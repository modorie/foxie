<template>
  <div id="app">
    <Header />
    <SideBar />
    <router-view class="router__view" />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
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

.router__view {
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
