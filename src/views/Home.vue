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
              하지만 네가 날 길들인다면, 나는 너에게 이 세상에 유일한 존재가 될
              거야
            </p>

            <p class="banner__right__prince">널 길들이려면 어떻게 해야 하니?</p>

            <p class="banner__right__fox">
              그건 간단해, 나에 대한 네 생각을 들려줘
            </p>
          </div>
        </div>

        <div class="left__title">
          <div>
            <p>요즘 인기 영화</p>

            <p class="left__subtitle">
              장르별 전문가들의 섬세한 리뷰들을 읽어보세요.
            </p>
          </div>

          <router-link to="/movie">
            <icon-base
              viewBox="-4 0 18 18"
              width="2rem"
              height="2rem"
              class="more__svg"
            >
              <icon-right />
            </icon-base>
          </router-link>
        </div>

        <div class="carousel__container">
          <MovieCarousel :movies="nowplaying_MovieList" />
          <!-- <MovieCarousel :movies="popular_MovieList" /> -->
          <!-- <MovieCarousel :movies="toprated_MovieList" /> -->
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

import IconBase from "@/components/IconBase.vue";
import IconRight from "@/components/icons/IconRight.vue";

const MOVIE_DB_API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";
const MOVIE_DB_API_URL_TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated";
const MOVIE_DB_API_URL_GET_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing";

export default {
  components: {
    MovieRecommend,
    MovieCarousel,
    IconBase,
    IconRight,
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
  margin-top: 1rem;
  opacity: 0.6;
  border-radius: 8px 0 0 8px;
  -webkit-user-drag: none;
}

.banner__right {
  padding: 6rem 2rem 2rem 0rem;
  width: 100%;
  margin-left: -2rem;
}

.banner__right__fox {
  font-weight: 500;
  color: var(--banner-fox);
  font-size: 20px;
  line-height: 1.7rem;
  margin-bottom: 1rem;
}

.banner__right__prince {
  font-weight: 500;
  font-size: 20px;
  color: var(--banner-prince);
  margin-bottom: 1rem;
}

.carousel__container {
  /* FIXME - 완전 하드코딩.. 라이브러리 컨트롤이 어렵다*/
  max-width: 56rem;
  background-color: var(--header);
  padding: 1rem;
  border-radius: 8px;
}

.left__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 1rem;
}

.left__subtitle {
  color: var(--recommend-text);
  font-size: 16px;
  font-weight: 300;
}

.more__svg:hover {
  opacity: 0.7;
  transition: 0.2s;
  cursor: pointer;
}
</style>
