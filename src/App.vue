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
  padding-left: 100px;
  padding-top: 70px;
}

.router__view {
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
