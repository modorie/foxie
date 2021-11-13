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

    <input
      class="movie-input"
      type="text"
      placeholder="Search"
      v-model.trim="todoTitle"
      @keyup.enter="creteTodo"
    />

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

    <div class="header-item">
      <icon-base
        viewBox="0 0 64 64"
        width="48"
        height="48"
        iconColor="transparent"
        icon-name="icon"
      >
        <icon-avatar />
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch.vue";
import IconBell from "./icons/IconBell.vue";
import IconAvatar from "./icons/IconAvatar.vue";

export default {
  name: "Header",
  components: {
    IconBase,
    IconSearch,
    IconBell,
    IconAvatar,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    creteTodo() {
      const todoItem = {
        title: this.searchInput,
      };
      this.searchInput = null;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 70px;
}

.movie-input {
  @apply px-4 w-full;
}

.movie-input:focus {
  outline: none;
}
</style>
