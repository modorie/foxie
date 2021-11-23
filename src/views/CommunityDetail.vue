<template>
  <section class="community container">
    <h1 class="page__title mulish">Post</h1>

    <div class="community__body">
      <div class="community__body__left">
        <div class="post">
          <div class="post__header">
            <h2 class="post__title">{{ post.title }}</h2>
            <div v-if="post.author.id === userId" class="post__toggle">
              <button @click="isDropdownOpen = !isDropdownOpen">
                <icon-base viewBox="0 0 22 26" width="24" height="22">
                  <icon-vertical-dots class="dots__svg" />
                </icon-base>
              </button>
              <transition name="fade">
                <CommunityDropdown
                  v-if="isDropdownOpen"
                  @close-dropdown="isDropdownOpen = false"
                />
              </transition>
            </div>
          </div>
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
                <div>
                  <p>{{ post.author.username }}</p>
                  <p class="post__date">
                    {{ post.created_at.slice(0, 10) }}
                    {{ post.created_at.slice(11, 16) }}
                  </p>
                </div>
              </div>
            </div>

            <div class="post__right">
              <div class="right__item">
                <icon-base viewBox="0 0 22 26" width="24" height="22">
                  <icon-heart class="right__svg" />
                </icon-base>

                <p class="right__item__count">{{ likeCount }}</p>
              </div>

              <div class="right__item">
                <icon-base viewBox="0 0 24 18" width="20" height="20">
                  <icon-comment class="right__svg" />
                </icon-base>

                <p class="right__item__count">{{ post.comments.length }}</p>
              </div>
              <!-- <div class="post__right__info">👀 100</div> -->
            </div>
          </div>
          <p class="post__content">
            <Viewer v-if="post.content != null" :initialValue="post.content" />
            <!-- {{ post.content }} -->
          </p>
          <div class="footer">
            <div
              :class="[isLike ? 'post__button__liked' : 'post__button__like']"
              @click="likeIt"
            >
              <icon-base
                viewBox="0 0 22 26"
                width="24"
                height="22"
                :iconColor="[isLike ? 'var(--heart-isliked)' : 'var(--heart)']"
              >
                <icon-heart :class="[isLike ? 'liked__svg' : 'like__svg']" />
              </icon-base>
              <span class="like__count">
                {{ likeCount }}
              </span>
            </div>
          </div>
        </div>
        <div class="comment">
          <CommentWrite />

          <Comment />
        </div>
      </div>
      <div class="community__body__right">
        <MovieRecommend />
        <MovieRecommend />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconVerticalDots from "@/components/icons/IconVerticalDots.vue";
import IconComment from "@/components/icons/IconComment.vue";
import Comment from "@/components/Comment.vue";
import CommentWrite from "@/components/CommentWrite.vue";
import MovieRecommend from "@/components/MovieRecommend.vue";
import CommunityDropdown from "@/components/CommunityDropdown.vue";
// import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/vue-editor";

export default {
  components: {
    IconBase,
    IconAvatar,
    Comment,
    CommentWrite,
    IconHeart,
    IconVerticalDots,
    IconComment,
    MovieRecommend,
    CommunityDropdown,
    Viewer,
  },
  data() {
    return {
      post: [],
      userId: "",
      likeCount: 0,
      isLike: "",
      isDropdownOpen: false,
    };
  },
  created() {
    console.log(this.isLike);
    const { id } = this.$route.params;
    this.userId = JSON.parse(localStorage.getItem("user")).user.id;

    axios
      .get(`api/v1/community/${id}`)
      .then((res) => {
        this.post = res.data;
        this.likeCount = res.data.like_users.length;
        this.isLike = res.data.like_users.includes(this.userId);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    likeIt() {
      const { id } = this.$route.params;
      const token = JSON.parse(localStorage.getItem("user")).access_token;

      axios({
        method: "post",
        url: `api/v1/community/${id}/likes/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        this.likeCount = res.data.like_count;
        this.isLike = res.data.is_liked;
        // console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.community__body {
  width: 100%;
  display: flex;
}

.community__body__left {
  width: calc(100% - 29rem);
  margin-right: 3rem;
}

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

.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.post__title {
  font-size: 20px;
  font-weight: 700;
}

.post__toggle {
  position: relative;
}

.dots__svg {
  stroke: var(--recommend-text);
}

.post__sub {
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-bottom: 1px solid var(--board-header);
}

.post__left {
}

.post__author {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.post__author__avatar {
  margin-right: 1rem;
}

.post__date {
  font-size: 14px;
  font-weight: 500;
  color: var(--recommend-text);
}

.post__right {
  display: flex;
}

.post__right__info {
  margin-left: 1rem;
}

.toastui-editor-contents {
  font-size: 14px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif !important;
}

.post__content {
  padding-top: 2rem;
}

.footer {
  display: flex;
}

.post__button__like {
  display: flex;
  justify-content: center;

  border-radius: 0.3rem;
  padding: 0.5rem;
  padding-right: 0.7rem;
  margin-top: 3rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 4rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-secondary);
  border: 1px solid var(--btn-secondary-border);
  color: var(--text);
  font-weight: 600;
}

.post__button__liked {
  display: flex;
  justify-content: center;

  border-radius: 0.3rem;
  padding: 0.5rem;
  padding-right: 0.7rem;
  margin-top: 3rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 4rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
}

.like__svg {
  stroke: var(--coral);
}

.liked__svg {
  stroke: var(--white);
}

.like__count {
  margin-left: 0.3rem;
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

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s;
  transform: translateY(0px);
  transform: opacity 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
