<template>
  <div>
    <h1 class="page__title">Review</h1>

    <div class="body">
      <div class="left">
        <div class="tab">
          <div class="tab__item active">Popular Movies</div>
          <div class="tab__item">New Movies</div>
          <div class="tab__item">Foxie's Pick</div>
        </div>

        <div>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div class="right">
        <MovieRecommend />
        <MovieRecommend />
      </div>
    </div>
  </div>
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
  margin-bottom: 2rem;
}

.body {
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
</style>
