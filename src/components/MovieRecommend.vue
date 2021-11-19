<template>
  <div class="list">
    <h1 class="title">이 영화 어때요</h1>

    <MovieRecommendCard />
    <MovieRecommendCard />
    <MovieRecommendCard />

    <div class="list__button">View All</div>
  </div>
</template>

<script>
import MovieRecommendCard from "@/components/MovieRecommendCard.vue";

export default {
  components: {
    MovieRecommendCard,
  },
};
</script>

<style scoped>
.list {
  padding: 1rem;
  background-color: var(--recommend);
  margin-bottom: 2rem;
  border-radius: 8px;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: var(--recommend-title);
}

.list__button {
  width: 100%;
  background-color: var(--recommend-button);
  border: var(--recommend-button-border);
  text-align: center;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 14px;
}
</style>
