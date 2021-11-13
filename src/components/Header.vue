<template>
  <div class="header">
    <section class="header-search">
      <div>
        <icon-base viewBox="0 0 24 24" width="24" height="24" icon-name="icon">
          <icon-search />
        </icon-base>
      </div>

      <input
        type="text"
        placeholder="Search"
        v-model.trim="todoTitle"
        @keyup.enter="creteTodo"
      />
    </section>

    <section class="header-info">
      <div class="header-bell">
        <icon-base viewBox="0 0 32 32" width="24" height="24" icon-name="icon">
          <icon-bell />
        </icon-base>
      </div>

      <div class="header-avatar">
        <icon-base viewBox="0 0 64 64" width="32" height="32" icon-name="icon">
          <icon-avatar />
        </icon-base>
      </div>
    </section>
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
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 70px;
  align-items: center;
}

.header-search {
  margin-left: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}

.header-search input {
  margin-left: 1.5rem;
  width: 100%;
}

.header-search input:focus {
  outline: none;
}

.header-info {
  display: flex;
  align-items: center;
}

.header-bell {
  margin-left: 2rem;
}

.header-avatar {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
