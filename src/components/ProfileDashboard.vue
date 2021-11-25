<template>
  <div class="">
    <section class="section">
      <span class="data">{{ this.profile.favorite_genres[0]["genre"] }}</span>
      장르를 가장 좋아하시는군요! <br />
      무려
      <span class="data">{{ this.profile.favorite_genres[0]["count"] }}</span
      >편이나 보셨어요.
    </section>

    <section class="section movies">
      <span
        class="data movie"
        v-for="movie in this.movies.slice(0, 5)"
        :key="movie.id"
      >
        "{{ movie.data.title }}"
      </span>

      <p>등의 영화들 말이에요</p>
    </section>

    <section class="section">
      <span class="data">{{ this.actor["actor"] }}</span> 배우가
      <span class="data">{{ this.actor["count"] }}</span
      >편의 영화에서 가장 많이 등장했어요!<br />
      혹시 당신의 최애 배우 아닌가요?
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      actor: [],
      actor_id: "",
      directors: [],
    };
  },
  props: {
    profile: Object,
  },
  created() {
    // const all_genres = this.profile.favorite_genres;
    const all_actors = this.profile.favorite_actors;
    // const all_directors = this.profile.favorite_directors;

    this.actors;

    this.profile.favorite_genres[0].movies.forEach((id) =>
      axios
        .get(`api/v1/movies/${id}`)
        .then((res) => {
          console.log(res);
          this.movies.push(res);
        })
        .catch((err) => console.log(err))
    );

    console.log(this.profile.favorite_genres);

    // const top_genre = all_genres.sort(function (a, b) {
    //   return b["count"] - a["count"];
    // })[0]["genre"];

    this.actor = all_actors.sort(function (a, b) {
      return b["count"] - a["count"];
    })[0];

    this.actor_id = this.actor.movie__actors;

    // const top_director = all_directors.sort(function (a, b) {
    //   return b["count"] - a["count"];
    // })[0]["genre"];

    // const my_genres = all_genres.filter((item) => item["genre"] === top_genre);
    // const my_actors = this.profile.favorite_actors;
    // const my_directors = this.profile.favorite_directors;

    // console.log(my_genres);
    // console.log(top_actors);
    // console.log(top_directors);
  },
};
</script>

<style scoped>
.section {
  font-size: 22px;
  margin-bottom: 2rem;
}

.data {
  font-weight: 700;
}

.movie {
  margin-right: 0.5rem;
}
</style>
