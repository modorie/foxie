<template>
  <div class="card">
    <div class="card__left">
      <img
        class="card__left__img"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />
    </div>
    <div class="card__right">
      <div class="card__right__header">
        <div class="card__right__header__title">{{ movie.title }}</div>
        <div class="card__right__header__score">
          <icon-base viewBox="0 0 18 20" width="22px" height="16px">
            <icon-star />
          </icon-base>
          <p>{{ movie.vote_average.toFixed(1) }}</p>
        </div>
      </div>

      <div class="card__right__genres">
        <span
          class="card__right__genre"
          v-for="genre in movie.genres"
          :key="genre.id"
        >
          {{ genre.name }}
        </span>
      </div>

      <p class="card__right__text">소석진님 외 8명이 이 영화를 좋아합니다.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";

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
    axios
      .get(`https://api.themoviedb.org/3/movie/580489`, {
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
.card {
  width: 24rem;
  display: flex;
  border-radius: 4px;
  padding: 1rem 0rem;
  border-bottom: 1px solid var(--recommend-boader);
}

.card__left {
  width: 6rem;
  border-radius: 4px 0 0 4px;
}

.card__right {
  width: 100%;
  margin-left: 1rem;
}
.card__right__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}

.card__right__header__title {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.card__right__header__score {
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.card__right__genres {
  margin-bottom: 1.5rem;
}
.card__right__genre {
  font-size: 12px;
  margin-right: 0.5rem;
  background-color: var(--profile-tag);
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.card__right__text {
  color: var(--recommend-text);
}
</style>
