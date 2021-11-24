<template>
  <div class="container">
    <div class="profile">
      <div class="profile__avatar">
        <icon-base viewBox="0 0 64 64" width="48" height="48">
          <icon-avatar />
        </icon-base>
      </div>

      <div class="profile__info">
        <div class="profile__info__header">
          <p>
            <span class="profile__nickname">{{ review.author.username }}</span>
            <span class="profile__time">
              {{ review.created_at.slice(0, 10) }}
            </span>
          </p>
          <div v-if="review.author.id === userId" class="profile__toggle">
            <button
              @click="isDropdownOpen = !isDropdownOpen"
              class="profile__toggle__button"
            >
              <icon-base viewBox="0 0 22 26" width="24" height="22">
                <icon-horizontal-dots class="dots__svg" />
              </icon-base>
            </button>
            <transition name="fade">
              <ReviewDropdown
                v-if="isDropdownOpen"
                @close-dropdown="isDropdownOpen = false"
                :reviewId="review.id"
              />
            </transition>
          </div>
        </div>

        <!-- TODO : 컴포넌트로 분리해서 점수만 줬을 때 별점 만들어지도록 할 예정 -->
        <div class="profile__score">
          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__on" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__on" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__on" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star-half class="star__half" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__off" />
          </icon-base>
          {{ review.rank }}
        </div>
      </div>
    </div>
    <div class="body">
      <p class="body__content" v-if="(review.content.length >= 200) & !isMore">
        {{ review.content | truncate(200) }}
      </p>

      <p class="body__content" v-else>
        {{ review.content }}
      </p>

      <div
        class="body__more"
        v-if="(review.content.length >= 200) & !isMore"
        @click="isMore = !isMore"
      >
        더보기
      </div>

      <div
        class="body__more"
        v-if="(review.content.length >= 200) & isMore"
        @click="isMore = !isMore"
      >
        간략히
      </div>
      <div class="footer">
        <button
          :class="[isLike ? 'post__button__liked' : 'post__button__like']"
          @click="likeIt(review.id)"
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
        </button>

        <!-- <div class="footer__item">
          <icon-base viewBox="0 0 22 25" width="24" height="22">
            <icon-heart class="footer__svg" />
          </icon-base>

          <p class="footer__item__count">{{ review.like_users.length }}</p>
        </div> -->

        <!-- <div class="footer__item">
            <icon-base viewBox="0 0 24 18" width="20" height="20">
              <icon-comment class="footer__svg" />
            </icon-base>

            <p class="footer__item__count">{{ review.comments.length }}</p>
          </div> -->
      </div>

      <!-- <div class="comment">
          <div class="comment__avatar">
            <icon-base viewBox="0 0 64 64" width="32" height="32">
              <icon-avatar />
            </icon-base>
          </div>

          <input
            class="footer__input"
            placeholder="댓글을 입력하세요."
            type="text"
          />
        </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconStarHalf from "@/components/icons/IconStarHalf.vue";
import IconHorizontalDots from "@/components/icons/IconHorizontalDots.vue";
import ReviewDropdown from "@/components/ReviewDropdown.vue";
// import IconComment from "@/components/icons/IconComment.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    IconHeart,
    // IconComment,
    IconHorizontalDots,
    IconStar,
    IconStarHalf,
    ReviewDropdown,
  },
  data() {
    return {
      userId: null,
      isMore: false,
      likeCount: 0,
      isLike: "",
      review: {},
      isDropdownOpen: false,
    };
  },
  props: {
    reviewId: Number,
  },
  created() {
    const { id } = this.$route.params;

    const user = localStorage.getItem("user");
    if (user) {
      this.userId = JSON.parse(localStorage.getItem("user")).user.id;
    }

    axios
      .get(`api/v1/movies/${id}/reviews/${this.reviewId}`)
      .then((res) => {
        this.review = res.data;
        this.likeCount = res.data.like_users.length;
        this.isLike = res.data.like_users.includes(this.userId);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    likeIt(reviewId) {
      const { id } = this.$route.params;
      const user = localStorage.getItem("user");
      if (user) {
        const token = JSON.parse(localStorage.getItem("user")).access_token;
        axios({
          method: "post",
          url: `api/v1/movies/${id}/reviews/${reviewId}/likes/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          this.likeCount = res.data.like_count;
          this.isLike = res.data.is_liked;
          this.isClicked = true;
          console.log(res);
        });
      } else {
        window.alert("좋아요를 누르려면 로그인 하세요.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: var(--recommend);
  margin-bottom: 1rem;
  padding: 1.5rem 0rem;
  border-bottom: 1px solid var(--profile-tag);
}

.profile {
  display: flex;
  align-items: center;
}

.profile__info {
  margin-left: 1rem;
  width: 100%;
}

.profile__info__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile__info__name {
  display: flex;
}

.profile__nickname {
  font-weight: 700;
  font-size: 16px;
  margin-right: 0.5rem;
}

.profile__id {
  color: var(--recommend-text);
}

.profile__time {
  font-size: 12px;
  color: var(--recommend-text);
}

.profile__toggle {
  position: relative;
}

.dots__svg {
  stroke: var(--recommend-text);
}

.comment {
  display: flex;
}

.body {
  margin-top: 2rem;
}

.profile__score {
  display: flex;
  margin-top: 0.2rem;
}

.body__content {
  font-size: 16px;
}

.body__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.body__title {
  font-size: 18px;
  font-weight: 700;
}

.body__score {
}

.body__more {
  font-size: 14px;
  color: var(--recommend-text);
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;
}

.footer {
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.footer__item {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: var(--recommend-text);
}

.footer__svg {
  stroke: var(--recommend-text);
}

.footer__item__count {
  margin-left: 0.2rem;
}

.footer__input {
  background-color: var(--profile-tag);
  margin-left: 1rem;
  border-radius: 2rem;
  width: 100%;
  padding: 0rem 1rem;
  font-size: 16px;
}

.footer__input:focus {
  outline: 1px solid gray;
}

.star__on {
  fill: #ffac33;
}

.star__off {
  fill: var(--gray-600);
}

.post__button__like {
  display: flex;
  justify-content: center;

  border-radius: 0.3rem;
  padding: 0.5rem;
  padding-right: 0.7rem;
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
