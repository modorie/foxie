<template>
  <div class="container">
    <div class="tab">
      <div class="tab__item active">Popular Movies</div>
      <div class="tab__item">New Movies</div>
      <div class="tab__item">Foxie's Pick</div>
    </div>

    <div class="body"><MovieCarousel /></div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCarousel from "@/components/MovieCarousel.vue";

export default {
  components: {
    MovieCarousel,
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 4rem;
}

.tab {
  display: flex;
  justify-content: space-between;
  background-color: var(--header);
  font-weight: 700;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tab__item {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
}

.active {
  background-color: var(--board-header);
  border-bottom: 5px solid var(--coral);
  color: var(--coral);
}
</style>
