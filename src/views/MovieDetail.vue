<template>
  <div>
    <div class="container">
      <div class="header">
        <div
          class="header__backdrop"
          :style="{
            'background-image': 'url(' + this.backdrop_path + ')',
          }"
        ></div>
      </div>

      <div class="header__info">
        <img
          class="header__info__poster"
          :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        />

        <div class="header__right">
          <div class="header__top">
            <h1 class="info__title">
              {{ movie.title }} <span>{{ movie.adult ? "⛔" : "" }}</span>
            </h1>

            <router-link to="#">
              <div class="info__button">리뷰 쓰기</div>
            </router-link>
          </div>

          <div class="info__sub">
            <p class="info__time">{{ movie.runtime }}분</p>

            <div class="info__genres">
              <span
                class="info__genre"
                v-for="genre in movie.genres"
                :key="genre.id"
              >
                {{ genre.name }}
              </span>
            </div>
          </div>

          <div class="info__release">
            <p>{{ movie.release_date.replaceAll("-", ". ") }}</p>
          </div>

          <div class="info__score">
            <icon-base viewBox="0 0 18 20" width="1.5rem" height="1.5rem">
              <icon-star />
            </icon-base>

            <p class="info__score__num">
              {{ movie.vote_average.toFixed(1) }}
            </p>
          </div>

          <!-- <p class="info__overview">{{ movie.overview }}</p> -->
        </div>
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
      backdrop_path: "",
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
        this.backdrop_path = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.container {
  min-width: 60rem;
  background-color: var(--detail);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.05);
}

.header__backdrop {
  width: 100%;
  height: 20rem;
  background-size: 100% auto;
  opacity: 0.5;
  /* background-color: var(--gray-500); */
  overflow: hidden;
}

.header__info {
  padding: 1.5rem 6rem;
  display: flex;
}

.header__info__poster {
  border: 1px solid var(--detail);
  width: 12rem;
  margin-top: -4rem;
  z-index: 1;
}

.header__right {
  width: 100%;
  margin-left: 2rem;
}

.header__top {
  display: flex;
  justify-content: space-between;
}

.info__title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.info__button {
  display: flex;
  align-items: center;
  font-weight: 600;
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
}

.info__sub {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info__time {
  font-size: 20px;
  margin-right: 2rem;
}

.info__genres {
  display: flex;
  align-items: center;
}

.info__genre {
  margin-right: 0.8rem;
  background-color: var(--profile-tag);
  padding: 0.1rem 0.7rem;
  border-radius: 1rem;
  font-size: 16px;
}

.info__release {
  font-size: 18px;
  margin-bottom: 3rem;
}

.info__score {
  display: flex;
  align-items: center;
}

.info__score__num {
  font-size: 24px;
  font-weight: 700;
  margin-left: 0.5rem;
  letter-spacing: 0.1rem;
}
</style>
