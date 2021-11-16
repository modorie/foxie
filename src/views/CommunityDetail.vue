<template>
  <div>
    <h1 class="page__title mulish">Post</h1>

    <div class="post">
      <h2 class="post__title">{{ post.title }}</h2>

      <div class="post__sub">
        <div class="post__left">
          <div class="post__author">
            <p>소여우{{ post.userId }}</p>

            <icon-base
              viewBox="0 0 64 64"
              width="22"
              height="22"
              class="post__author__avatar"
            >
              <icon-avatar />
            </icon-base>
          </div>
          <p class="post__date">2021. 11. 17. 15:00</p>
        </div>

        <div class="post__right">
          <div class="post__right__info">❤ 1</div>
          <div class="post__right__info">💭 10</div>
          <div class="post__right__info">👀 100</div>
        </div>
      </div>

      <p v-for="index in 10" :key="index" class="post__content">
        {{ post.body }}
      </p>

      <router-link to="#">
        <div class="post__button__like">좋은걸</div>
      </router-link>
    </div>

    <div class="comment">
      <CommentWrite />
      <Comment v-for="index in 5" :key="index" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "../components/IconBase.vue";
import IconAvatar from "../components/icons/IconAvatar.vue";
import Comment from "../components/Comment.vue";
import CommentWrite from "../components/CommentWrite.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    Comment,
    CommentWrite,
  },
  data() {
    return {
      post: [],
    };
  },
  created() {
    const { id } = this.$route.params;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        this.post = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.post {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--board-body);
  color: var(--board-header-text);
  padding: 2rem;
  margin-bottom: 1rem;
}

.page__title {
  color: var(--page-title);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.post__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 1rem;
}

.post__sub {
  display: flex;
  justify-content: space-between;
}

.post__left {
}

.post__right {
  display: flex;
}

.post__right__info {
  margin-left: 1rem;
}

.post__author {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
}

.post__author__avatar {
  margin-left: 1rem;
}

.post__date {
  margin-bottom: 2rem;
}

.post__content {
}

.post__button__like {
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-top: 3rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 5rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
}

.comment {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--board-body);
  color: var(--board-header-text);
  padding: 2rem;
}
</style>
