<template>
  <div class="card">
    <div class="card__left">
      <router-link
        :to="{
          name: 'MovieDetail',
          params: { id: movie.id },
        }"
      >
        <img
          class="card__left__img hover"
          :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        />
      </router-link>
    </div>
    <div class="card__right">
      <div class="card__right__header">
        <div class="card__right__header__title hover">
          <router-link
            :to="{
              name: 'MovieDetail',
              params: { id: movie.id },
            }"
            >{{ movie.title }}</router-link
          >
        </div>
        <div class="card__right__header__score">
          <icon-base viewBox="0 0 16 18" width="24px" height="16px">
            <icon-star />
          </icon-base>
          <p>{{ movie.vote_average.toFixed(1) }}</p>
        </div>
      </div>

      <div class="card__right__genres">
        <span
          class="card__right__genre"
          v-for="genre in movie.genre_ids"
          :key="genre.id"
        >
          {{ genre.name }}
        </span>
      </div>

      <p class="card__right__text">
        <router-link
          :to="{
            name: 'MovieDetail',
            params: { id: recommData.target_movie.id },
          }"
          class="card__right__text__link"
          >{{ recommData.target_movie.title }}</router-link
        >
        영화의 <b>{{ actorName }}</b> 배우가 출연했어요
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";

export default {
  components: {
    IconBase,
    IconStar,
  },
  data() {
    return {
      movie: [],
      recommData: {},
      actorName: "",
      isNoData: false,
    };
  },
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      axios({
        method: "get",
        url: `api/v1/movies/recommendations/actors`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          this.recommData = res.data;
          const actor = this.recommData.recommendation.actor;
          this.actorName = actor.korean_name ? actor.korean_name : actor.name;
          this.getMovieData();
        })
        .catch(() => {
          this.isNoData = true;
          this.$emit("no-data", this.isNoData);
        });
    }
  },
  methods: {
    getMovieData() {
      axios
        .get(`api/v1/movies/${this.recommData.recommendation.movie}`)
        .then((res) => {
          this.movie = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card {
  width: 24rem;
  display: flex;
  border-radius: 4px;
  padding: 1rem 0rem;
  border-bottom: 1px solid var(--recommend-border);
}

.card__left {
  width: 6rem;
  border-radius: 4px 0 0 4px;
}

.card__right {
  width: 100%;
  margin-left: 1rem;
}
.card__right__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}

.card__right__header__title {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.card__right__header__score {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.card__right__genres {
  margin-bottom: 1.5rem;
}
.card__right__genre {
  font-size: 12px;
  margin-right: 0.5rem;
  background-color: var(--profile-tag);
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.card__right__text {
  font-size: 14px;
  line-height: 1.1rem;
  color: var(--recommend-text);
}

.card__right__text__link {
  font-weight: 700;
}

.card__right__text__link:hover {
  color: var(--dropdown-text);
  font-weight: 700;
}
</style>
