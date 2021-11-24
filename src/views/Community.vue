<template>
  <section class="container">
    <div class="left">
      <div class="header">
        <h1 class="page__title">Post</h1>

        <div>
          <button @click="createArticle" class="mulish header__button">
            Create New Post
          </button>
        </div>
      </div>

      <Board />
    </div>

    <Modal
      v-if="modal"
      @close="closeModal"
      title="어이어이 잠깐 멈춰방"
      content="글을 쓰려면 로그인을 해"
      buttonText="로그인"
    />

    <div class="right">
      <MovieRecommend />
      <MovieRecommend />
    </div>
  </section>
</template>

<script>
import Board from "@/components/Board.vue";
import MovieRecommend from "@/components/MovieRecommend.vue";
import Modal from "@/components/Modal.vue";

export default {
  data() {
    return {
      modal: false,
    };
  },
  components: {
    Board,
    MovieRecommend,
    Modal,
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },

    createArticle() {
      const user = localStorage.getItem("user");

      if (user) {
        this.$router.push({
          name: "CommunityNew",
        });
      } else {
        // if (confirm("새 글을 작성하려면 로그인하세요.")) {
        //   this.$router.push({
        //     name: "Login",
        //   });
        // }
        this.openModal();
      }
    },
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
