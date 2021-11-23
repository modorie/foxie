<template>
  <div>
    <p class="comment__title mulish">Comment</p>
    <div class="comment__form">
      <icon-base
        viewBox="0 0 64 64"
        width="32"
        height="32"
        class="comment__author__avatar"
      >
        <icon-avatar />
      </icon-base>
      <input
        class="comment__input"
        type="text"
        v-model.trim="comment"
        @keyup.enter="createComment"
        placeholder="댓글을 입력하세요."
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
  },
  data() {
    return {
      comment: null,
    };
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
          url: `api/v1/community/${id}/comments/new/`,
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
</style>
