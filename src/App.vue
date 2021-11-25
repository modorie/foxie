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

<style>
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

/* TODO : editor 속성 먹이기 위해서 여기 선언.. 따로 분리하기 */
/* TOAST-UI-CUSTOM */
.toast-ui-custom h1,
.toast-ui-custom h2,
.toast-ui-custom h3,
.toast-ui-custom h4,
.toast-ui-custom h5,
.toast-ui-custom h6,
.toast-ui-custom li,
.toast-ui-custom ol,
.toast-ui-custom p,
.toast-ui-custom pre,
.toast-ui-custom table,
.toast-ui-custom ul {
  color: var(--text) !important;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  letter-spacing: -0.02rem;
}

.toast-ui-custom p {
  font-size: 16px !important;
  color: var(--text) !important;
}

.toast-ui-custom .toastui-editor-defaultUI {
  border: 1px solid var(--toast-border) !important;
  background: var(--background) !important;
  border-radius: 8px !important;
  overflow: hidden;
}

.toast-ui-custom .toastui-editor-defaultUI-toolbar {
  border-bottom: 1px solid var(--toast-border) !important;
  background: var(--background) !important;
  overflow: hidden;
}

.toast-ui-custom .ProseMirror.toastui-editor-contents {
  background: var(--background) !important;
  overflow: hidden;
}

.toast-ui-custom button {
  border: none !important;
}

.toast-ui-custom button:hover {
  /* background: var(--background) !important; */
}
</style>
