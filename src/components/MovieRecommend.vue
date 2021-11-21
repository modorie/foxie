<template>
  <div class="list">
    <h1 class="title">이 영화 어때요</h1>

    <MovieRecommendCard />
    <MovieRecommendCard />
    <MovieRecommendCard />
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

.card:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>
