<template>
  <!-- FIXME : 프로필 진짜 말 안들음.. 이걸로 해결함 -->
  <section style="width: 100%">
    <div class="profile">
      <div class="profile__header">
        <div class="profile__header__avatar">
          <img
            v-if="profile.avatar"
            :src="profile.avatar"
            style="height: 160px; width: 160px"
            class="profile__header__avatar__image"
          />
          <icon-base v-else viewBox="0 0 64 64" width="100%" height="160px">
            <icon-avatar />
          </icon-base>
        </div>

        <!-- TODO: SCSS 도입 -->
        <div class="profile__header__info">
          <h1 class="profile__header__info__name">
            {{ profile.nickname }}
          </h1>

          <div class="profile__header__info__status">
            <div>
              <p class="status__num">
                {{ profile.reviews.length.toLocaleString("ko-kr") }}
              </p>
              <p class="status__label">Reviews</p>
            </div>

            <div>
              <p class="status__num">
                {{ followCount.toLocaleString("ko-kr") }}
              </p>
              <p class="status__label">Followers</p>
            </div>

            <div>
              <p class="status__num">
                {{ profile.followings.length.toLocaleString("ko-kr") }}
              </p>
              <p class="status__label">Follwings</p>
            </div>
          </div>

          <p class="profile__text">
            {{ profile.content }}
          </p>

          <div class="profile__tags">
            <p v-for="tag in profile.tags" :key="tag.id" class="profile__tag">
              {{ tag }}
            </p>
            <!-- <p class="profile__tag">스릴러</p>
            <p class="profile__tag">어린왕자</p> -->
          </div>
        </div>

        <div class="follow__container">
          <div>
            <button
              v-if="!isMyProfile"
              class="follow__button mulish"
              @click="follow"
              :class="[
                isFollowed
                  ? 'follow__button__followed'
                  : 'follow__button__follow',
              ]"
            >
              <icon-base
                v-if="!isFollowed"
                viewBox="0 0 20 20"
                width="20px"
                height="20px"
                class="comment__author__avatar"
              >
                <icon-follow />
              </icon-base>

              <span v-if="isFollowed" class="follow__button__text"
                >Unfollow</span
              >
              <span v-else class="follow__button__text">Follow</span>
            </button>
          </div>
        </div>
      </div>
      <div class="tab">
        <button
          @click="currentTab = 'myMovies'"
          class="tab__item mulish"
          :class="[currentTab === 'myMovies' ? 'active' : '']"
        >
          My Movies
        </button>
        <button
          @click="currentTab = 'myReviews'"
          class="tab__item mulish"
          :class="[currentTab === 'myReviews' ? 'active' : '']"
        >
          My Reviews
        </button>
        <button
          @click="currentTab = 'myDashboard'"
          class="tab__item mulish"
          :class="[currentTab === 'myDashboard' ? 'active' : '']"
        >
          Dashboard
        </button>
        <button
          @click="currentTab = 'mySettings'"
          class="tab__item mulish"
          :class="[currentTab === 'mySettings' ? 'active' : '']"
        >
          Settings
        </button>
      </div>
      <div class="profile__body">
        <div class="profile__body__content">
          <div v-show="currentTab == 'myMovies'" class="profile__body__movies">
            <movie-card
              v-for="movie in movies"
              :key="movie.id"
              :movie="movie"
            ></movie-card>
          </div>
          <div
            v-show="currentTab == 'myReviews'"
            class="profile__body__reviews"
          >
            <ReviewCardSimple
              v-for="review in reviews"
              :key="review.id"
              :reviewId="review.id"
              :movieId="review.movie_id"
              class="profile__body__reviews__cards"
            />
          </div>
          <div v-show="currentTab == 'myDashboard'">
            <profile-dashboard :profile="profile"></profile-dashboard>
          </div>
          <div v-show="currentTab == 'mySettings'">
            <profile-settings :profile="profile"></profile-settings>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconFollow from "@/components/icons/IconFollow.vue";
import MovieCard from "@/components/MovieCard.vue";
import ReviewCardSimple from "@/components/ReviewCardSimple.vue";
import ProfileSettings from "@/components/ProfileSettings.vue";
import ProfileDashboard from "@/components/ProfileDashboard.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    IconFollow,
    MovieCard,
    ReviewCardSimple,
    ProfileSettings,
    ProfileDashboard,
  },
  data() {
    return {
      profile: {},
      reviews: [],
      movies: [],
      currentTab: "myMovies",
      username: "",
      userId: null,
      isMyProfile: false,
      followCount: 0,
      isFollowed: false,
    };
  },
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.userId = JSON.parse(localStorage.getItem("user")).user.id;
      this.username = this.$route.params.username;
      this.isMyProfile =
        this.username ===
        JSON.parse(localStorage.getItem("user")).user.username;
    }

    axios.get(`accounts/${this.username}`).then((res) => {
      this.profile = res.data;
      this.reviews = res.data.reviews;
      this.movies = res.data.movies;
      this.followCount = res.data.followers.length;
      this.isFollowed = res.data.followers.includes(this.userId);
    });
  },
  methods: {
    follow(reviewId) {
      const user = localStorage.getItem("user");
      if (user) {
        const token = JSON.parse(localStorage.getItem("user")).access_token;
        axios({
          method: "post",
          url: `accounts/${this.username}/follow/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res);
          this.followCount = res.data.follow_count;
          this.isFollowed = res.data.is_followed;
        });
      } else {
        window.alert("팔로우하려면 로그인 하세요.");
      }
    },
  },
};
</script>

<style scoped>
.profile {
  background-color: var(--profile-body);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.profile__header {
  height: 16rem;
  border-radius: 8px 8px 0px 0px;
  padding: 3rem 3rem;
  background-color: var(--profile-header);
  display: flex;
}

.profile__header__avatar {
  min-width: 10rem;
}

.profile__header__avatar__image {
  border-radius: 190px;
}

.profile__header__info {
  width: 100%;
  margin-left: 3rem;
  margin-top: 0.5rem;
}

.profile__header__info__name {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.profile__header__info__status {
  display: flex;
  font-size: 16px;
  margin-bottom: 0.7rem;
}

.profile__header__info__status > div {
  display: flex;
  margin-right: 2rem;
}

.status__num {
  font-weight: 700;
}

.status__label {
  margin-left: 0.5rem;
  color: var(--profile-label);
}

.profile__text {
  font-size: 16px;
  margin-bottom: 2rem;
}

.profile__tags {
  display: flex;
}

.profile__tag {
  margin-right: 0.5rem;
  background-color: var(--profile-tag);
  padding: 0.1rem 0.6rem;
  border-radius: 1rem;
  font-size: 12px;
}

.profile__tag:before {
  content: "#";
  margin-right: 0.2rem;
}

.follow__container {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}

.follow__button {
  display: flex;
  align-items: center;
  font-weight: 600;
  width: 7rem;
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.follow__button__follow {
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
}

.follow__button__followed {
  display: flex;
  align-items: center;
  font-weight: 600;
  background-color: var(--btn-secondary);
  border: 1px solid var(--profile-label);
  color: var(--profile-label);
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.follow__button__text {
  margin-left: 0.6rem;
  cursor: pointer;
}

.tab {
  display: flex;
  background-color: var(--profile-header);
  padding-left: 3rem;
  overflow: hidden;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.1);
}

.tab__item {
  justify-content: center;
  border-bottom: 3px solid var(--profile-header);
  width: 9rem;
  padding: 1rem;
  font-weight: 700;
  /* border-bottom: 5px solid var(--board-header); */
}

.active {
  border-bottom: 3px solid var(--coral);
  color: var(--coral);
}

.profile__body {
  min-height: 30rem;
  border-radius: 0px 0px 8px 8px;
  padding: 3rem 3rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
}

/* .profile__body__sidebar {
  width: 10rem;
} */

.profile__body__content {
  /* margin-left: 3rem; */
}

.profile__body__movies {
  @apply grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5;
}

.profile__body__reviews {
  max-width: 50rem;
}

.profile__body__reviews__cards {
  border-radius: 8px;
  padding: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.06);
}
</style>
