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
        loop: true,
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
.container {
  @apply grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-6;
  gap: 20px 20px;
}
.swiper {
  min-width: 100%;
  overflow: hidden;
}

.swiper-slide {
  width: 12rem;
  display: flex;
}
</style>
