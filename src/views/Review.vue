<template>
  <section>
    <h1 class="page__title">Review</h1>
    <p class="page__subtitle">영화에 대한 유저들의 리뷰들을 모아봤어요</p>

    <div class="body">
      <div class="left">
        <!-- <div class="tab">
          <div class="tab__item active">Popular Reviews</div>
          <div class="tab__item">New Reviews</div>
          <div class="tab__item">My Reviews</div>
        </div> -->
        <div class="tab">
          <button
            @click="currentTab = 'newReviews'"
            class="tab__item mulish"
            :class="[currentTab === 'newReviews' ? 'active' : '']"
          >
            New Reviews
          </button>
          <button
            @click="currentTab = 'popularReviews'"
            class="tab__item mulish"
            :class="[currentTab === 'popularReviews' ? 'active' : '']"
          >
            Popular Reviews
          </button>
          <button
            @click="currentTab = 'myFollowings'"
            class="tab__item mulish"
            :class="[currentTab === 'myFollowings' ? 'active' : '']"
          >
            My Followings
          </button>
        </div>
        <div>
          <div v-show="currentTab === 'newReviews'">
            <ReviewCard
              v-for="review in newReviews"
              :key="review.id"
              :propReview="review"
              class="review__wrapper"
            />
          </div>

          <div v-show="currentTab === 'popularReviews'">
            <ReviewCard
              v-for="review in popularReviews"
              :key="review.id"
              :propReview="review"
              class="review__wrapper"
            />
          </div>

          <div v-if="user" v-show="currentTab === 'myFollowings'">
            <ReviewCard
              v-for="review in followingsReviews"
              :key="review.id"
              :propReview="review"
              class="review__wrapper"
            />
          </div>
          <div
            v-else
            v-show="currentTab === 'myFollowings'"
            class="review__wrapper card"
          >
            <p class="message">
              팔로잉 하는 사람들의 리뷰 피드를 보려면 로그인 하세요.
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <MovieRecommend />
        <MovieRecommend />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MovieRecommend from "@/components/MovieRecommend.vue";
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  components: {
    MovieRecommend,
    ReviewCard,
  },
  data() {
    return {
      currentTab: "newReviews",
      newReviews: [],
      popularReviews: [],
      followingsReviews: [],
      user: null,
    };
  },
  created() {
    this.user = localStorage.getItem("user");

    axios
      .get(`api/v1/movies/reviews/new`)
      .then((res) => {
        this.newReviews = res.data;
      })
      .catch((err) => console.log(err));

    axios
      .get(`api/v1/movies/reviews/popular`)
      .then((res) => {
        this.popularReviews = res.data;
      })
      .catch((err) => console.log(err));

    if (this.user) {
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      axios({
        method: "get",
        url: "api/v1/movies/reviews/followings",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          this.followingsReviews = res.data;
        })
        .catch((err) => console.log(err));
    }
  },
};
</script>

<style scoped>
.page__title {
  font-family: "Mulish", sans-serif;
  letter-spacing: 0rem;
  color: var(--page-title);
  font-size: 20px;
  font-weight: 700;
}

.page__subtitle {
  font-size: 14px;
  color: var(--profile-settings-description);
}

.body {
  margin-top: 3rem;
  display: flex;
}

.left {
  width: 100%;
  margin-right: 2rem;
}

.right {
}

.tab {
  display: flex;
  justify-content: space-between;
  background-color: var(--profile-header);
  overflow: hidden;
  /* box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.1); */
  margin-bottom: 1rem;
  border-radius: 8px;
}

.tab__item {
  justify-content: center;
  border-bottom: 3px solid var(--profile-settings-form-input-border);
  width: 100%;
  padding: 1rem;
  font-weight: 700;
}

.active {
  border-bottom: 3px solid var(--coral);
  color: var(--coral);
}

.review__wrapper {
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  background-color: var(--recommend);
  margin-bottom: 2rem;
  border-radius: 8px;
}

.card {
  width: 100%;
}

.message {
  text-align: center;
  border-radius: 4px;
}
</style>
