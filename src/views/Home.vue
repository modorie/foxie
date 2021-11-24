<template>
  <section>
    <div class="wrapper">
      <div class="left">
        <!-- TODO : Banner 컴포넌트로 빼기 -->
        <div class="banner">
          <div class="banner__left">
            <img src="@/assets/banner.png" alt="" />
            <!-- <img src="@/assets/banner.png" alt="" /> -->
          </div>
          <div class="banner__right">
            <p class="banner__right__fox">
              난 네게 아직 수십 만의 영화에 지나지 않아<br />
              너 역시 내게 수십 만의 아이들과 같은 어린아이일 뿐이고<br />
              하지만 네가 날 길들인다면, 나는 너에게 이 세상에 유일한 존재가 될
              거야
            </p>

            <p class="banner__right__prince">널 길들이려면 어떻게 해야 하니?</p>

            <p class="banner__right__fox">
              그건 간단해, 나에 대한 네 생각을 들려줘
            </p>
          </div>
        </div>

        <h1 class="left__title mulish">Best Movies 🚀</h1>

        <p class="left__subtitle">
          장르별 전문가들의 섬세한 리뷰들을 읽어보세요.
        </p>

        <div>
          <div class="tab">
            <div class="tab__item active">Popular Movies</div>
            <div class="tab__item">New Movies</div>
            <div class="tab__item">Foxie's Pick</div>
          </div>
          <div class="carousel__container">
            <MovieCarousel :movies="nowplaying_MovieList" />
            <!-- <MovieCarousel :movies="popular_MovieList" /> -->
            <!-- <MovieCarousel :movies="toprated_MovieList" /> -->
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
import MovieCarousel from "@/components/MovieCarousel.vue";

const MOVIE_DB_API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";
const MOVIE_DB_API_URL_TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated";
const MOVIE_DB_API_URL_GET_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing";

export default {
  components: {
    MovieRecommend,
    MovieCarousel,
  },
  data() {
    return {
      nowplaying_MovieList: [],
      popular_MovieList: [],
      toprated_MovieList: [],
    };
  },
  created() {
    axios
      .get(MOVIE_DB_API_URL_POPULAR, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
          page: 1,
          region: "kr",
        },
      })
      .then((res) => {
        this.popular_MovieList = res.data.results;
      })
      .catch((err) => console.log(err));
    axios
      .get(MOVIE_DB_API_URL_TOP_RATED, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
          page: 1,
          region: "kr",
        },
      })
      .then((res) => {
        this.toprated_MovieList = res.data.results;
      })
      .catch((err) => console.log(err));
    axios
      .get(MOVIE_DB_API_URL_GET_NOW_PLAYING, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
          page: 1,
          region: "kr",
        },
      })
      .then((res) => {
        this.nowplaying_MovieList = res.data.results;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.left {
  margin-right: 2rem;
}

.right {
}

.banner {
  height: 20rem;
  border-radius: 8px;
  display: flex;
  background: linear-gradient(
    to right,
    var(--banner-left),
    var(--banner-right)
  );
  color: var(--banner-text);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.banner__left img {
  width: 28rem;
  margin-top: 0.5rem;
  opacity: 0.6;
  border-radius: 8px 0 0 8px;
  -webkit-user-drag: none;
}

.banner__right {
  padding: 3rem 2rem 2rem 0rem;
  margin-left: -2rem;
  width: 100%;
}

.banner__right__fox {
  font-weight: 500;
  color: var(--banner-fox);
  font-size: 20px;
  line-height: 2rem;
  margin-bottom: 2rem;
}

.banner__right__prince {
  font-weight: 500;
  font-size: 20px;
  color: var(--banner-prince);
  margin-bottom: 2rem;
}

.banner__footer {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1rem;
}

.tab {
  display: flex;
  justify-content: space-between;
  background-color: var(--header);
  font-weight: 700;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tab__item {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 5px solid var(--board-header);
}

.active {
  background-color: var(--board-header);
  border-bottom: 5px solid var(--coral);
  color: var(--coral);
}

.carousel__container {
  /* FIXME - 완전 하드코딩.. 라이브러리 컨트롤이 어렵다*/
  max-width: 56rem;
  background-color: var(--header);
  padding: 1rem 0.5rem;
  border-radius: 8px 0px;
}

.left__title {
  font-weight: 800;
  font-size: 24px;
}

.left__subtitle {
  color: var(--gray-400);
  font-weight: 300;
  margin-bottom: 1rem;
}
</style>
