<template>
  <div>
    <div v-if="isLogin" class="list">
      <h1 class="title">이 영화 어때요</h1>

      <MovieRecommendMovies />
      <MovieRecommendFollowings />
      <MovieRecommendActors />
      <div v-if="noData">데이터 없어</div>
    </div>
    <div v-if="!isLogin" class="recommend__preview">
      <div class="recommend__preview__shadow">
        <div class="recommend__container">
          <router-link
            :to="{ name: 'Login' }"
            class="recommend__container__button"
          >
            <div class="recommend__container__text">
              나만을 위한 추천 영화 보러 가기
            </div>
          </router-link>
        </div>
      </div>
      <div class="list">
        <h1 class="title">이 영화 어때요</h1>
        <MovieRecommendPreview />
        <MovieRecommendPreview />
        <MovieRecommendPreview />
      </div>
    </div>
  </div>
</template>

<script>
import MovieRecommendMovies from "@/components/MovieRecommendMovies.vue";
import MovieRecommendFollowings from "@/components/MovieRecommendFollowings.vue";
import MovieRecommendActors from "@/components/MovieRecommendActors.vue";
import MovieRecommendPreview from "@/components/MovieRecommendPreview.vue";

export default {
  components: {
    MovieRecommendMovies,
    MovieRecommendFollowings,
    MovieRecommendActors,
    MovieRecommendPreview,
  },
  data() {
    return {
      noData: false,
      isLogin: true,
    };
  },
  created() {
    const user = localStorage.getItem("user");
    if (!user) {
      this.isLogin = false;
    }
  },
  methods: {
    isNoData() {
      this.noData = true;
    },
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

.recommend__preview {
  position: relative;
}

.recommend__preview__shadow {
  display: flex;
  align-items: center;
  position: absolute;
  background-color: var(--preview);
  width: 100%;
  height: 32rem;
  border-radius: 9px;
  backdrop-filter: blur(4px);
}

.recommend__container {
  display: flex;
  justify-content: center;
  width: 26rem;
  padding: 2rem;
  margin-top: 1rem;
}

.recommend__container__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: var(--btn-secondary);
  color: var(--btn-secondary-text);
  border: 1px solid var(--btn-secondary-border);
  font-weight: 600;
}

.card:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>
