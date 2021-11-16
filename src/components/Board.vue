<template>
  <div>
    <div class="board">
      <table>
        <thead class="board__header">
          <tr>
            <th class="board__header__row">#</th>
            <th class="board__header__row">TITLE</th>
            <th class="board__header__row">NAME</th>
            <th class="board__header__row">DATE</th>
            <th class="board__header__row">VIEWS</th>
            <th class="board__header__row">LIKE</th>
          </tr>
        </thead>

        <tbody
          v-for="article in articles"
          :key="article.id"
          class="board__body"
        >
          <tr>
            <td class="board__body__row">{{ article.id }}</td>
            <router-link :to="`community/${article.id}`">
              <td class="board__body__row">
                {{ article.title | truncate(50) }}
              </td>
            </router-link>
            <td class="board__body__row">{{ article.userId }}</td>
            <td class="board__body__row">11.16</td>
            <td class="board__body__row">1234</td>
            <td class="board__body__row">12</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="board__pagination"><Pagination /></div>

    <div class="board__search"><BoardSearchBar /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

import BoardSearchBar from "./BoardSearchBar.vue";
import Pagination from "./Pagination.vue";

export default Vue.extend({
  data() {
    return {
      articles: [],
    };
  },

  components: {
    BoardSearchBar,
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

<style>
.board {
}

.board table {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
}

.board__header {
  width: 100%;
  background-color: var(--board-header);
  color: var(--board-header-text);
}

.board__header__row {
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1.5rem;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
}

.board__body {
  background-color: var(--board-body);
  color: var(--board-body-text);
  border-top: 1px solid var(--board-body-line);
}

.board__body__row {
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 2rem;
  font-size: 14px;
}
</style>
