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
            <!-- TODO: 서버에서 게시글 조회수 처리 시 살리기 -->
            <!-- <th class="board__header__row">VIEWS</th> -->
            <th class="board__header__row">LIKES</th>
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
                <span class="board__comment"
                  >[{{ article.comments_count }}]</span
                >
              </td>
            </router-link>
            <td class="board__body__row">{{ article.author.username }}</td>
            <td class="board__body__row">
              <!-- TODO: 1시간 이내: 00분 전 / 24시간 이내 : 00시간 전 / else: 0일 전 -->
              {{ article.created_at.slice(5, 10) }}
            </td>
            <!-- <td class="board__body__row">1234</td> -->
            <td class="board__body__row">{{ article.likes_count }}</td>
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

import BoardSearchBar from "@/components/BoardSearchBar.vue";
import Pagination from "@/components/Pagination.vue";

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
      .get("api/v1/community")
      .then((res) => {
        this.articles = res.data;
      })
      .catch((err) => console.log(err));
  },
});
</script>

<style scoped>
.board {
}

.board table {
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1),
    0px 1px 2px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

/* .board table thead th:nth-child(2) {
  width: 100%;
}
*/

.board__header {
  background-color: var(--board-header);
  color: var(--board-header-text);
}

.board__header__row {
  margin: 0rem 1rem;
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

.board__comment {
  color: var(--coral);
  padding-left: 0.2rem;
}
</style>
