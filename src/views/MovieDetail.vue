<template>
  <div
    class="bg__img"
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    }"
  >
    <div class="container">
      {{ movie }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movie: [],
    };
  },
  created() {
    const { id } = this.$route.params;

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
        },
      })
      .then((res) => {
        this.movie = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.bg__img {
  width: 100%;
  margin-left: -2rem;
  margin-top: -0.5rem;
}
</style>
