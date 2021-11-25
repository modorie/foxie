<template>
  <section class="move">
    <div v-if="isLogin" class="list">
      <h1 class="title">이 영화 어때요</h1>

      <MovieRecommendMovies @no-data="noData1 = true" />
      <MovieRecommendFollowings @no-data="noData2 = true" />
      <MovieRecommendActors @no-data="noData3 = true" />
      <div class="no__data" v-if="this.noData1 & this.noData2 & this.noData3">
        리뷰와 점수를 많이 남겨주세요 <br />
        당신이 좋아할 만한 영화를 추천해 줄게요!
      </div>
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
  </section>
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
      noData1: false,
      noData2: false,
      noData3: false,
      isLogin: true,
    };
  },
  created() {
    const user = localStorage.getItem("user");
    if (!user) {
      this.isLogin = false;
    }
  },
  methods: {},
};
</script>

<style scoped>
.list {
  width: 26rem;
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

.move {
  position: sticky;
  top: 6rem;
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

.no__data {
  width: 100%;
  padding: 4rem 0rem;
  text-align: center;
}
</style>
