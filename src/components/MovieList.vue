<template>
  <div class="container">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  props: {
    movies: {
      type: Array,
    },
    group_title: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* TODO : 반응형이 이상하게 됨.. 공부해서 리팩토링 */
.container {
  @apply grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-6;
  gap: 20px 20px;
}
</style>
