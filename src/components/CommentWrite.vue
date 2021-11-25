<template>
  <div>
    <p class="comment__title mulish">Comment</p>
    <div class="comment__form">
      <input
        class="comment__input"
        type="text"
        v-model.trim="comment"
        @keyup.enter="createComment"
        :placeholder="
          isLogined ? '댓글을 입력하세요.' : '댓글을 입력하려면 로그인하세요.'
        "
        :disabled="!isLogined"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comment: null,
      isLogined: null,
    };
  },
  created() {
    const user = localStorage.getItem("user");
    this.isLogined = !!user;
  },
  methods: {
    createComment() {
      const { id } = this.$route.params;
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      const author = JSON.parse(localStorage.getItem("user")).user.id;

      const commentData = {
        content: this.comment,
        author: author,
        article: id,
      };

      if (commentData.content) {
        axios({
          method: "post",
          url: `api/v1/community/${id}/comments/`,
          data: commentData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(() => {
          location.reload();
        });
      }
    },
  },
};
</script>

<style scoped>
.comment__title {
  margin-bottom: 0.5rem;
  font-size: 18px;
  font-weight: 700;
}

.comment__form {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.comment__author__avatar {
  margin-right: 1rem;
}

.comment__input {
  width: 100%;
  background-color: var(--board-header);
  border-radius: 2rem;
  padding: 0.6rem;
  margin-right: 0.5rem;
  padding-left: 1.5rem;
  outline: none;
}

.comment__button__wrapper {
  display: flex;
  justify-content: end;
}

.comment__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 5rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
  margin-bottom: 2rem;
}
</style>
