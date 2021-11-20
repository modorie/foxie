<template>
  <div class="card">
    <router-link :to="`movie/${movie.id}`">
      <img
        v-if="movie.poster_path"
        class="card__image"
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />

      <div v-else class="card__no__image mulish">No Poster</div>

      <div class="card__info">
        <p class="card__info__left__title">
          {{ movie.title | truncate(16) }}
        </p>

        <div class="card__info__score">
          <icon-base viewBox="0 0 18 20" width="14" height="14">
            <icon-star />
          </icon-base>

          <div class="card__info__score__num">
            {{ movie.vote_average.toFixed(1) }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";

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

<style scoped>
/* radius 여러 개 둬서 모서리 그림자가 라운딩 */
.card {
  width: 12rem;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.05);
}

.card__image {
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 18rem;
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
  background-color: var(--card-background);
  color: var(--card-text);
  border-radius: 0px 0px 8px 8px;
  padding: 0.5rem;
  font-size: 14px;
}

.card__info__left__year {
  padding-left: 0.2rem;
}

.card__info__score {
  display: flex;
  align-items: center;
}

.card__info__score__num {
  padding-left: 0.2rem;
  font-size: 14px;
  font-weight: 600;
}
</style>
