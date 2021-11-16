<template>
  <div>
    <div class="board">
      <table>
        <thead class="board__header">
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>NAME</th>
            <th>DATE</th>
            <th>VIEWS</th>
            <th>LIKE</th>
          </tr>
        </thead>

        <tbody
          v-for="article in articles"
          :key="article.id"
          class="board__list"
        >
          <tr>
            <td>{{ article.id }}</td>
            <router-link :to="`community/${article.id}`">
              <td>{{ article.title | truncate(50) }}</td>
            </router-link>
            <td>{{ article.userId }}</td>
            <td>11.16</td>
            <td>1234</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="board__pagination"><Pagination /></div>

    <div class="board__search"><BoardSearch /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

import BoardSearch from "./BoardSearch.vue";
import Pagination from "./Pagination.vue";

export default Vue.extend({
  data() {
    return {
      articles: [],
    };
  },

  components: {
    BoardSearch,
    Pagination,
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.articles = res.data;
      })
      .catch((err) => console.log(err));
  },
});
</script>

<style></style>
