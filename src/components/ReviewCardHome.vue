<template>
  <div class="card">
    <div class="card__left">
      <img
        class="card__left__img"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />
    </div>

    <div class="card__right">
      <div class="profile">
        <div class="profile__avatar">
          <icon-base viewBox="0 0 64 64" width="42" height="42">
            <icon-avatar />
          </icon-base>
        </div>

        <div class="profile__info">
          <div class="profile__info__header">
            <p class="profile__nickname">4시의여우</p>
            <p class="profile__time">9시간 전</p>
          </div>

          <!-- TODO : 컴포넌트로 분리해서 점수만 줬을 때 별점 만들어지도록 할 예정 -->
          <div class="profile__score">
            <StarRating size="18" score="9" />
          </div>
        </div>
      </div>

      <div class="card__right__title">{{ movie.title }}</div>

      <!-- FIX ME: 사이즈 줄이면 줄 늘어남 -->
      <p class="card__right__text">{{ movie.overview | truncate(170) }}</p>

      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "@/components/StarRating.vue";

import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    StarRating,
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
  display: flex;
  border-radius: 8px;
  /* padding: 0.5rem; */
  margin-bottom: 0.5rem;
  background-color: var(--header);
}

.card__left {
  width: 12rem;
}

.card__left__img {
  border-radius: 4px;
}

.card__right {
  width: 100%;
  padding: 1.5rem 2rem;
}

.card__right__title {
  font-weight: 500;
  color: var(--recommend-text);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.footer {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
}

.profile {
  display: flex;
  align-items: center;
}

.profile__info {
  margin-left: 0.5rem;
  width: 100%;
}

.profile__info__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile__info__name {
  display: flex;
}

.profile__nickname {
  font-weight: 500;
}

.profile__time {
  font-size: 14px;
  color: var(--recommend-text);
}
</style>
