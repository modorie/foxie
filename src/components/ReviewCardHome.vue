<template>
  <router-link :to="{ name: 'MovieDetail', params: { id: review.movie } }">
    <div class="card">
      <div class="card__left">
        <img
          class="card__left__img"
          :src="`https://image.tmdb.org/t/p/original${moviePoster}`"
        />
      </div>

      <div class="card__right">
        <div>
          <div class="profile">
            <div class="profile__avatar">
              <img
                v-if="review.author.profile.avatar"
                :src="review.author.profile.avatar"
                style="height: 36px; width: 36px"
                class="profile__avatar__img"
              />
              <icon-base v-else viewBox="0 0 64 64" width="36" height="36">
                <icon-avatar />
              </icon-base>
            </div>

            <div class="profile__info">
              <div class="profile__info__header">
                <p
                  class="profile__nickname"
                  v-text="
                    review.author.profile.nickname
                      ? review.author.profile.nickname
                      : review.author.username
                  "
                ></p>
                <p class="profile__time">{{ review.created_at | time }}</p>
              </div>

              <!-- TODO : 컴포넌트로 분리해서 점수만 줬을 때 별점 만들어지도록 할 예정 -->
              <div class="profile__score">
                <StarRating size="18" score="9" />
              </div>
            </div>
          </div>

          <div class="card__right__title">{{ movieTitle }}</div>

          <!-- FIX ME: 사이즈 줄이면 줄 늘어남 -->
          <p class="card__right__text">{{ review.content | truncate(90) }}</p>
        </div>
        <div class="footer">
          <div class="footer__item">
            <icon-base viewBox="0 0 22 25" width="24" height="22">
              <icon-heart class="footer__svg" />
            </icon-base>
            <p class="footer__item__count">
              {{ review.like_users.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";
import StarRating from "@/components/StarRating.vue";

import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    IconHeart,
    StarRating,
  },
  data() {
    return {
      review: [],
      movieId: null,
      movieTitle: null,
      moviePoster: null,
    };
  },
  props: {
    propReview: Object,
  },
  created() {
    axios
      .get(
        `api/v1/movies/${this.propReview.movie}/reviews/${this.propReview.id}`
      )
      .then((res) => {
        this.review = res.data;
        this.movieId = res.data.movie;
        this.getMovieData();
        // this.likeCount = res.data.like_users.length;
        // this.isLike = res.data.like_users.includes(this.userId);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    getMovieData() {
      axios.get(`api/v1/movies/${this.movieId}`).then((res) => {
        this.movieTitle = res.data.title;
        this.moviePoster = res.data.poster_path;
      });
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  border-radius: 8px;
  /* padding: 0.5rem; */
  margin-bottom: 0.5rem;
  background-color: var(--header);
}

.card__left {
  width: 12rem;
}

.card__left__img {
  border-radius: 4px;
}

.card__right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 2rem;
}

.card__right__title {
  font-weight: 500;
  color: var(--recommend-text);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.footer {
  margin-top: 0.2rem;
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

.header {
  display: flex;
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

.profile__avatar__img {
  object-fit: cover;
  border-radius: 50%;
}

.profile__nickname {
  font-weight: 500;
}

.profile__time {
  font-size: 14px;
  color: var(--recommend-text);
}
</style>
