<template>
  <router-link :to="{ name: 'MovieDetail', params: { id: movieId } }">
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
            <icon-base viewBox="0 0 16 18" width="24px" height="16px">
              <icon-star />
            </icon-base>
            <p>{{ movie.vote_average.toFixed(1) }}</p>
          </div>
        </div>

        <div class="card__right__genres">
          <span
            class="card__right__genre"
            v-for="genre in movie.genre_ids"
            :key="genre.id"
          >
            {{ genre.name }}
          </span>
        </div>

        <!-- FIX ME: 사이즈 줄이면 줄 늘어남 -->
        <p class="card__right__text">{{ movie.overview | truncate(100) }}</p>
      </div>
    </div>
  </router-link>
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
  props: {
    movieId: Number,
  },
  created() {
    axios
      .get(`api/v1/movies/${this.movieId}`)
      .then((res) => {
        this.movie = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid var(--recommend-border);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.card__left {
  width: 6rem;
  border-radius: 4px 0 0 4px;
}

.card__left__img {
  border-radius: 4px;
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
  margin-left: 0.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.card__right__header__score {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.card__right__genres {
  margin-bottom: 1.5rem;
}
.card__right__genre {
  font-size: 14px;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: var(--profile-tag);
  border-radius: 1rem;
}

.card__right__text {
  color: var(--recommend-text);
  font-size: 14px;
}
</style>
