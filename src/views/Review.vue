<template>
  <section>
    <h1 class="page__title">Review</h1>
    <p class="page__subtitle">영화에 대한 유저들의 리뷰들을 모아봤어요</p>

    <div class="body">
      <div class="left">
        <div class="tab">
          <div class="tab__item active">Popular Reviews</div>
          <div class="tab__item">New Reviews</div>
          <div class="tab__item">My Reviews</div>
        </div>

        <div>
          <div class="review__wrapper">
            <ReviewCard />
          </div>

          <div class="review__wrapper">
            <ReviewCard />
          </div>

          <div class="review__wrapper">
            <ReviewCard />
          </div>
        </div>
      </div>
      <div class="right">
        <MovieRecommend />
        <MovieRecommend />
      </div>
    </div>
  </section>
</template>

<script>
import MovieRecommend from "@/components/MovieRecommend.vue";
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  components: {
    MovieRecommend,
    ReviewCard,
  },
};
</script>

<style scoped>
.page__title {
  font-family: "Mulish", sans-serif;
  letter-spacing: 0rem;
  color: var(--page-title);
  font-size: 24px;
  font-weight: 700;
}

.page__subtitle {
  font-size: 14px;
  color: var(--profile-settings-description);
}

.body {
  margin-top: 3rem;
  display: flex;
}

.left {
  width: 100%;
  margin-right: 2rem;
}

.right {
}

.tab {
  display: flex;
  justify-content: space-between;
  background-color: var(--header);
  font-weight: 700;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  margin-bottom: 1rem;
}

.tab__item {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 5px solid var(--board-header);
}

.active {
  background-color: var(--board-header);
  border-bottom: 5px solid var(--coral);
  color: var(--coral);
}

.review__wrapper {
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  padding: 0rem 1.5rem;
  background-color: var(--recommend);
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>
