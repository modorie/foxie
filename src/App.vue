<template>
  <div id="app">
    <Header />
    <SideBar />
    <section class="router__wrapper">
      <router-view class="router__view" />
    </section>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Header,
  },
};
</script>

<style scoped>
#app {
  padding-left: 100px;
  padding-top: 70px;
}

.router__wrapper {
  display: flex;
  justify-content: center;
}

.router__view {
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;

  min-width: 80rem;
  max-width: 90rem;
}
</style>
