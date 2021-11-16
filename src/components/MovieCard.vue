<template>
  <div class="card">
    <router-link :to="`movie/${movie.id}`">
      <!-- TODO : parameter를 data에서 미리 계산하면 if 분기 필요 X -->
      <img
        v-if="movie.backdrop_path"
        class="card__image"
        :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
      />

      <img
        v-else-if="movie.poster_path"
        class="card__image"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />

      <!-- 포스터도 없는 영화가 있음 -->
      <div v-else class="card__no__image mulish">No Poster</div>

      <div class="card__info">
        <div class="card__info__left">
          <p class="card__info__left__title">
            {{ movie.title | truncate(19) }}
          </p>

          <div class="card__info__left__year">
            ({{ movie.release_date.split("-")[0] }})
          </div>
        </div>

        <div class="card__info__right">
          <icon-base viewBox="0 0 18 20" width="18" height="18">
            <icon-star />
          </icon-base>

          <div class="card__info__right__score">
            {{ movie.vote_average.toFixed(1) }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconStar from "./icons/IconStar.vue";

export default {
  components: {
    IconBase,
    IconStar,
  },
  props: {
    movie: {
      type: Array,
    },
  },
};
</script>

<style>
/* radius 여러 개 둬서 모서리 그림자가 라운딩 */
.card {
  width: 20rem;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.05);
}

.card__image {
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.card__no__image {
  width: 100%;
  height: 12rem;
  background-color: var(--header);
  color: var(--header-search);
  text-align: center;
  padding-top: 5rem;
  font-size: 24px;
  font-weight: 800;
}

.card__info {
  display: flex;
  justify-content: space-between;
  background-color: var(--card-background);
  color: var(--card-text);
  border-radius: 0px 0px 8px 8px;
  padding: 1rem;
  font-size: 14px;
  font-weight: 700;
}

.card__info__left {
  display: flex;
}
.card__info__left__year {
  padding-left: 0.2rem;
}

.card__info__right {
  display: flex;
  align-items: center;
}

.card__info__right__score {
  padding-left: 0.2rem;
}
</style>
