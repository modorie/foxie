<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    MovieCard,
    swiper,
    swiperSlide,
  },
  props: {
    movies: {
      type: Array,
    },
    group_title: {
      type: String,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10,
        loopedSlides: "10",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
/* TODO : 반응형이 이상하게 됨.. 공부해서 리팩토링 */
.swiper {
}

.swiper-slide {
  width: 12rem;
  display: flex;
}

.swiper-button-prev,
.swiper-button-next {
  color: var(--white);
  opacity: 0.6;
}
</style>
