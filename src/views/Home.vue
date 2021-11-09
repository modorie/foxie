<template>
  <div class="home">
    <header>인덱스 페이지</header>

    <section>최신 글</section>

    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>
<script lang="js">
// ts 이슈 해결
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      Articles: [],
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios
        .get("/api/v1/articles")
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
