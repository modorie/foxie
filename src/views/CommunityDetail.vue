<template>
  <section>
    <h1 class="page__title mulish">Post</h1>

    <div class="post">
      <h2 class="post__title">{{ post.title }}</h2>

      <div class="post__sub">
        <div class="post__left">
          <div class="post__author">
            <icon-base
              viewBox="0 0 64 64"
              width="32"
              height="32"
              class="post__author__avatar"
            >
              <icon-avatar />
            </icon-base>

            <p>소왕자{{ post.userId }}</p>
          </div>
          <p class="post__date">2021. 11. 17. 15:00</p>
        </div>

        <div class="post__right">
          <div class="right__item">
            <icon-base viewBox="0 0 22 26" width="24" height="22">
              <icon-heart class="right__svg" />
            </icon-base>

            <p class="right__item__count">17</p>
          </div>

          <div class="right__item">
            <icon-base viewBox="0 0 24 18" width="20" height="20">
              <icon-comment class="right__svg" />
            </icon-base>

            <p class="right__item__count">17</p>
          </div>
          <!-- <div class="post__right__info">👀 100</div> -->
        </div>
      </div>

      <p v-for="index in 10" :key="index" class="post__content">
        {{ post.body }}
      </p>

      <div class="footer">
        <router-link to="#">
          <div class="post__button__like">
            <icon-base viewBox="0 0 22 26" width="24" height="22">
              <icon-heart class="like__svg" />
            </icon-base>
          </div>

          <div class="post__button__like">
            <icon-base
              viewBox="0 0 22 26"
              width="24"
              height="22"
              iconColor="white"
            >
              <icon-heart class="like__svg" />
            </icon-base>
          </div>
        </router-link>
      </div>
    </div>

    <div class="comment">
      <CommentWrite />

      <Comment v-for="index in 5" :key="index" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";
import Comment from "@/components/Comment.vue";
import CommentWrite from "@/components/CommentWrite.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    Comment,
    CommentWrite,
    IconHeart,
    IconComment,
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
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1),
    0px 1px 2px 1px rgba(0, 0, 0, 0.06);
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
  align-items: flex-start;
  justify-content: space-between;
}

.post__left {
}

.post__author {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.post__author__avatar {
  margin-right: 0.5rem;
}

.post__date {
  margin-bottom: 2rem;
  font-size: 14px;
}

.post__right {
  display: flex;
}

.post__right__info {
  margin-left: 1rem;
}

.post__content {
}

.footer {
  display: flex;
  justify-content: center;
}

.post__button__like {
  display: flex;
  justify-content: center;

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

.like__svg {
  stroke: var(--white);
}

.comment {
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1),
    0px 1px 2px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--board-body);
  color: var(--board-header-text);
  padding: 2rem;
  margin-bottom: 8rem;
}

.right__item {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: var(--recommend-text);
}

.right__svg {
  stroke: var(--recommend-text);
}

.right__item__count {
  margin-left: 0.2rem;
}
</style>
