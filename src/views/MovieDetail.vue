<template>
  <section>
    <div class="wrapper">
      <div class="left">
        <div class="header">
          <div
            class="header__backdrop"
            :style="{
              'background-image': 'url(' + this.backdrop_path + ')',
            }"
          ></div>

          <div class="header__info">
            <img
              class="header__info__poster"
              :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            />

            <div class="header__right">
              <div class="header__top">
                <div>
                  <p class="info__title">
                    {{ movie.title }}
                  </p>

                  <p class="info__title__en">{{ movie.original_title }}</p>
                </div>

                <router-link to="#">
                  <div class="info__button">리뷰 쓰기</div>
                </router-link>
              </div>

              <div class="info__sub">
                <div class="info__release">
                  <p>{{ movie.release_date.replaceAll("-", ". ") }}</p>
                </div>

                <p class="info__time">{{ movie.runtime }}분</p>

                <div class="info__genres">
                  <span
                    class="info__genre"
                    v-for="genre in movie.genres"
                    :key="genre.id"
                  >
                    {{ genre.name }}
                  </span>
                </div>
              </div>

              <div class="info__score">
                <icon-base viewBox="0 0 18 18" width="1.5rem" height="1.5rem">
                  <icon-star />
                </icon-base>

                <p class="info__score__num">
                  {{ movie.vote_average.toFixed(1) }}
                </p>
              </div>

              <!-- <p class="info__overview">{{ movie.overview }}</p> -->
            </div>
          </div>
        </div>
        <div class="body">
          <div class="body__info">
            <h2 class="body__info__title">줄거리</h2>

            <p class="body__info__content">{{ movie.overview }}</p>
          </div>

          <div class="body__info">
            <h2 class="body__info__title">예고편</h2>

            <iframe
              class="body__info__video"
              encrypted-media
              picture-in-picture
              allowfullscreen
              muted
              :src="this.video_path"
            ></iframe>
          </div>

          <div class="body__info">
            <h2 class="body__info__title">출연진</h2>

            <div class="body__info__members">
              <div
                v-for="actor in this.actors"
                :key="actor.id"
                class="body__info__member"
              >
                <img
                  v-if="actor.profile_path"
                  class="member__profile"
                  :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`"
                />

                <!-- 프로필 없는 배우가 있음 -->
                <div v-else class="member__no__profile mulish">No Profile</div>

                <div class="member__info">
                  <p class="member__info__name">{{ actor.name }}</p>
                  <p class="member__info__character">{{ actor.character }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- TODO: Directing이면서 Popularity 가장 높은 사람을 메인 감독 -->
          <!-- <div class="body__info">
          <h2 class="body__info__title">감독 (임시)</h2>

          <div>{{ staffs[0] }}</div>
        </div> -->

          <div class="body__info">
            <h2 class="body__info__title">리뷰</h2>

            <p class="body__info__content">
              <CommentWrite />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
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

import IconBase from "@/components/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";
import ReviewCard from "@/components/ReviewCard.vue";
import CommentWrite from "@/components/CommentWrite.vue";
import MovieRecommend from "@/components/MovieRecommend.vue";

export default {
  components: {
    IconBase,
    IconStar,
    ReviewCard,
    CommentWrite,
    MovieRecommend,
  },
  data() {
    return {
      movie: [],
      staffs: [],
      actors: [],
      videos: [],
      backdrop_path: "",
      video_path: "",
    };
  },
  created() {
    const { id } = this.$route.params;

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
        },
      })
      .then((res) => {
        this.movie = res.data;
        this.backdrop_path = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
        },
      })
      .then((res) => {
        this.videos = res.data.results;
        this.video_path = `https://www.youtube.com/embed/${this.videos[0].key}`;
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: "ko-KR",
        },
      })
      .then((res) => {
        this.actors = res.data.cast.slice(0, 10);
        this.staffs = res.data.crew;
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
  width: 100%;
  margin-right: 2rem;
}

.right {
}

.header {
  margin-bottom: 2rem;
  background-color: var(--detail);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.header__backdrop {
  width: 100%;
  height: 20rem;
  background-size: 100% auto;
  opacity: 0.5;
  overflow: hidden;
}

.header__info {
  padding: 1.5rem;
  display: flex;
}

.header__info__poster {
  border: 1px solid var(--detail);
  width: 12rem;
  margin-top: -4rem;
  z-index: 1;
}

.header__right {
  width: 100%;
  margin-left: 2rem;
}

.header__top {
  display: flex;
  justify-content: space-between;
}

.info__title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0rem;
}

.info__title__en {
  opacity: 0.6;
  margin-bottom: 1rem;
}

.info__button {
  display: flex;
  align-items: center;
  font-weight: 600;
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
}

.info__sub {
  display: flex;
  align-items: center;
  margin-bottom: 3.5rem;
}

.info__release {
  font-size: 18px;
  margin-right: 2rem;
}

.info__time {
  font-size: 18px;
  margin-right: 2rem;
}

.info__genres {
  display: flex;
  align-items: center;
}

.info__genre {
  margin-right: 0.8rem;
  background-color: var(--profile-tag);
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  font-size: 14px;
  font-weight: 500;
}

.info__score {
  display: flex;
  align-items: center;
}

.info__score__num {
  font-size: 24px;
  font-weight: 700;
  margin-left: 0.2rem;
  letter-spacing: 0.1rem;
}

/* BODY */
.body {
  border-radius: 8px;
  background-color: var(--detail);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.body__info {
  border-bottom: 1px solid gray;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.body__info__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;
}

.body__info__content {
  font-size: 18px;
  font-weight: 300;
}

.body__info__video {
  width: 100%;
  height: 24vw;
}

.body__info__members {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.body__info__member {
  margin-bottom: 2rem;
}

.member__profile {
  width: 10rem;
  height: 14rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 0.3rem;
}

.member__no__profile {
  width: 10rem;
  height: 14rem;
  background-color: var(--coral);
  border-radius: 8px;
  color: var(--header-search);
  text-align: center;
  padding-top: 6rem;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 0.3rem;
}

.member__info__name {
  font-weight: 700;
}

.member__info__character {
  opacity: 0.5;
  font-size: 14px;
}
</style>
