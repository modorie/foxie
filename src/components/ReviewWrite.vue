<template>
  <div>
    <div class="comment__score">
      <StarRatingInput size="36" @score="onScore" />
    </div>

    <textarea
      class="review__input"
      cols="30"
      rows="6"
      placeholder="리뷰를 입력하세요."
      v-model="content"
    ></textarea>

    <div class="comment__button__wrapper">
      <button class="comment__button hover" @click="createReview">
        리뷰 등록
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRatingInput from "@/components/StarRatingInput.vue";

export default {
  components: {
    StarRatingInput,
  },
  data() {
    return {
      content: null,
      rank: null,
    };
  },
  methods: {
    createReview() {
      const { id } = this.$route.params;
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      const author = JSON.parse(localStorage.getItem("user")).user.id;

      console.log(this.rank);

      const reviewData = {
        content: this.content,
        rank: this.rank,
        author: author,
        movie: id,
      };

      console.log(reviewData);

      axios({
        method: "post",
        url: `api/v1/movies/${id}/reviews/`,
        data: reviewData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onScore(score) {
      this.rank = score;
    },
  },
};
</script>

<style scoped>
.comment__score {
  display: flex;
  margin-bottom: 1rem;
}

.review__rank {
  background-color: var(--board-header);
  border-radius: 8px;
  resize: none;
  padding: 1rem;
  outline: none;
  margin-bottom: 1rem;
}

.review__input {
  width: 100%;
  background-color: var(--board-header);
  border-radius: 8px;
  resize: none;
  padding: 1rem;
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
