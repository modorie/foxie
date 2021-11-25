<template>
  <div class="container">
    <div class="profile">
      <router-link
        :to="{ name: 'Profile', params: { username: review.author.username } }"
      >
        <div class="profile__avatar">
          <img
            v-if="review.author.profile.avatar"
            :src="review.author.profile.avatar"
            class="profile__avatar__img"
          />
          <icon-base v-else viewBox="0 0 64 64" width="48" height="48">
            <icon-avatar />
          </icon-base>
        </div>
      </router-link>

      <div class="profile__info">
        <div class="profile__info__header">
          <div class="profile__info__header__user">
            <router-link
              :to="{
                name: 'Profile',
                params: { username: review.author.username },
              }"
            >
              <p
                class="profile__nickname"
                v-text="
                  review.author.profile.nickname
                    ? review.author.profile.nickname
                    : review.author.username
                "
              ></p>
            </router-link>
            <p class="profile__time">{{ review.created_at | time }}</p>
          </div>
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
                :review="review"
                :reviewId="review.id"
              />
            </transition>
          </div>
        </div>

        <!-- TODO : 컴포넌트로 분리해서 점수만 줬을 때 별점 만들어지도록 할 예정 -->
        <div class="profile__score">
          <StarRating size="18" :score="review.rank" />
        </div>
      </div>
    </div>
    <div class="body">
      <p class="body__content" v-if="(review.content.length >= 120) & !isMore">
        {{ review.content | truncate(120) }}
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

      <ReviewMovieCard :movieId="review.movie" />

      <div class="footer">
        <div class="footer__item">
          <button @click="likeIt(review.id)">
            <icon-base
              viewBox="0 0 22 25"
              width="24"
              height="22"
              :iconColor="[isLike ? 'var(--coral)' : 'var(--heart)']"
            >
              <icon-heart class="footer__svg like__svg" />
            </icon-base>
          </button>
          <p class="footer__item__count">{{ likeCount }}</p>
        </div>

        <div class="footer__item">
          <icon-base viewBox="0 0 24 18" width="20" height="20">
            <icon-comment class="footer__svg" />
          </icon-base>

          <p class="footer__item__count">{{ review.comments.length }}</p>
        </div>
      </div>

      <ReviewCommentWrite :review="propReview" />
      <ReviewComment
        v-for="comment in review.comments"
        :key="comment.id"
        :review="review"
        :commentId="comment.id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReviewMovieCard from "@/components/ReviewMovieCard.vue";
import ReviewCommentWrite from "@/components/ReviewCommentWrite.vue";
import ReviewComment from "@/components/ReviewComment.vue";
import ReviewDropdown from "@/components/ReviewDropdown.vue";

import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconHorizontalDots from "@/components/icons/IconHorizontalDots.vue";
import StarRating from "@/components/StarRating.vue";

export default {
  components: {
    ReviewMovieCard,
    ReviewCommentWrite,
    ReviewComment,
    ReviewDropdown,
    IconBase,
    IconAvatar,
    IconHeart,
    IconComment,
    IconHorizontalDots,
    StarRating,
  },
  data() {
    return {
      userId: null,
      isMore: false,
      review: {},
      likeCount: 0,
      isLike: "",
      isDropdownOpen: false,
    };
  },
  props: {
    propReview: Object,
  },
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.userId = JSON.parse(localStorage.getItem("user")).user.id;
    }

    axios
      .get(
        `api/v1/movies/${this.propReview.movie}/reviews/${this.propReview.id}`
      )
      .then((res) => {
        this.review = res.data;
        this.likeCount = res.data.like_users.length;
        this.isLike = res.data.like_users.includes(this.userId);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    likeIt(reviewId) {
      const user = localStorage.getItem("user");
      if (user) {
        const token = JSON.parse(localStorage.getItem("user")).access_token;
        axios({
          method: "post",
          url: `api/v1/movies/${this.propReview.movie}/reviews/${this.propReview.id}/likes/`,
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
}

.profile {
  display: flex;
  align-items: center;
}

.profile__info {
  margin-left: 1rem;
}

.profile__info__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile__info__header__user {
  display: flex;
  align-items: baseline;
}

.profile__avatar__img {
  object-fit: cover;
  border-radius: 50%;
  height: 48px;
  width: 48px;
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
  font-size: 14px;
  color: var(--recommend-text);
}

.profile__toggle {
  position: relative;
}

.review__dropdown {
  position: absolute;
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
  margin-bottom: 1rem;
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
  margin-top: 1rem;
  margin-bottom: 1.5rem;
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

.like__svg {
  stroke: var(--coral);
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
