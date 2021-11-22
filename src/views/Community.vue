<template>
  <section class="container">
    <div class="left">
      <div class="header">
        <h1 class="page__title">Post</h1>

        <router-link to="community/new">
          <div class="mulish header__button">Create New Post</div>
        </router-link>
      </div>

      <Board />
    </div>

    <div class="right">
      <MovieRecommend />
      <MovieRecommend />
    </div>
  </section>
</template>

<script>
import Board from "@/components/Board.vue";
import MovieRecommend from "@/components/MovieRecommend.vue";

export default {
  components: {
    Board,
    MovieRecommend,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.left {
  margin-right: 2rem;
  width: 100%;
}

.right {
  margin-top: 68px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.page__title {
  font-family: "Mulish", sans-serif;
  letter-spacing: 0rem;
  color: var(--page-title);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.header__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 10rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.05),
    0px 1px 2px 1px rgba(0, 0, 0, 0.05);
  color: var(--white);
  font-weight: 600;
}

.community__body__right {
  /* TODO : 테이블이랑 사이드 컨텐츠 라인 맞추기 */
  margin-top: 68px;
}
</style>
