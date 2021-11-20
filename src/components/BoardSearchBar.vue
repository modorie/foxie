<template>
  <div class="search">
    <div class="dropdown" @click="isDropdownOpen = !isDropdownOpen">
      제목+내용

      <icon-base
        viewBox="0 0 14 8"
        width="14"
        height="14"
        class="dropdown__arrow"
      >
        <icon-down class="dropdown__arrow__svg" />
      </icon-base>

      <div v-if="isDropdownOpen" class="dropdown__list">
        <p>모두</p>
        <p>제목</p>
        <p>내용</p>
        <p>제목+내용</p>
      </div>
    </div>

    <input type="text" class="search__input" />

    <router-link to="#">
      <div class="search__button">검색</div>
    </router-link>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconDown from "@/components/icons/IconDown.vue";

export default {
  components: {
    IconBase,
    IconDown,
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
}
.dropdown {
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--dropdown);
  color: var(--dropdown-text);
  border: 1px solid var(--dropdown-line);
}

.dropdown__arrow {
  margin-left: 1rem;
}

.dropdown__arrow__svg {
  fill: var(--dropdown-text);
}

.dropdown__list {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--dropdown);
  color: var(--dropdown-text);
  border: 1px solid var(--coral);
  width: 100%;
}

.search__input {
  margin-left: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--dropdown);
  color: var(--dropdown-text);
  border: 1px solid var(--dropdown-line);
}

.search__button {
  margin-left: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--coral);
  color: var(--gray-50);
  border: 1px solid var(--coral);
}
</style>
