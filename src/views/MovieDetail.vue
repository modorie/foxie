<template>
  <div>
    <img
      class="bg__img"
      :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
    />

    <div class="container">
      <img
        class="poster"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />

      <div class="info">
        <h1 class="info__title">
          {{ movie.title }} <span>(19금 {{ movie.adult ? "O" : "X" }})</span>
        </h1>

        <div class="info__sub">
          <p class="info__time">{{ movie.runtime }} min</p>

          <div class="info__score">
            <icon-base viewBox="0 0 18 20" width="18" height="18">
              <icon-star />
            </icon-base>

            <div class="info__score__num">
              {{ movie.vote_average.toFixed(1) }}
            </div>
          </div>

          <div class="info__genres">
            <span
              class="info__genre"
              v-for="genre in movie.genres"
              :key="genre.id"
            >
              [ {{ genre.name }} ]
            </span>
          </div>
        </div>

        <p class="info__overview">{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import IconBase from "../components/IconBase.vue";
import IconStar from "../components/icons/IconStar.vue";

export default {
  components: {
    IconBase,
    IconStar,
  },
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
  position: fixed;
  /* 여백 : header, sidebar size */
  top: 70px;
  left: 100px;
  width: 100%;
  z-index: -1;
  opacity: 0.3;
}

.container {
  display: flex;
}

.poster {
  width: 40%;
  height: 100%;
}

.info {
  margin-left: 2rem;
}

.info__sub {
  display: flex;
}

.info__title {
  font-size: 24px;
}

.info__score {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.info__score__num {
  margin-left: 0.2rem;
}

.info__overview {
  margin-top: 2rem;
}
</style>
