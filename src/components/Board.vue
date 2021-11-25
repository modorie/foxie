<template>
  <div>
    <div class="board">
      <table>
        <thead class="board__header">
          <tr>
            <th class="board__header__row" style="width: 4rem">번호</th>
            <th class="board__header__row">제목</th>
            <th class="board__header__row" style="width: 10rem">글쓴이</th>
            <th class="board__header__row" style="width: 6rem">작성일</th>
            <!-- TODO: 서버에서 게시글 조회수 처리 시 살리기 -->
            <!-- <th class="board__header__row">VIEWS</th> -->
            <th class="board__header__row" style="width: 4rem">추천</th>
          </tr>
        </thead>

        <tbody
          v-for="article in this.pageArticles"
          :key="article.id"
          class="board__body"
        >
          <tr>
            <td class="board__body__row">{{ article.id }}</td>
            <router-link :to="`community/${article.id}`">
              <td class="board__body__row hover">
                {{ article.title | truncate(50) }}
                <span class="board__comment"
                  >[{{ article.comments_count }}]</span
                >
              </td>
            </router-link>
            <td class="board__body__row">
              <router-link
                :to="{
                  name: 'Profile',
                  params: { username: article.author.username },
                }"
              >
                {{
                  article.author.profile.nickname
                    ? article.author.profile.nickname
                    : article.author.username
                }}
              </router-link>
            </td>
            <td class="board__body__row">
              {{ article.created_at | time }}
            </td>
            <!-- <td class="board__body__row">1234</td> -->
            <td class="board__body__row">{{ article.likes_count }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="board__pagination">
      <Pagination
        :pageSetting="pageDataSetting(total, limit, block, this.page)"
        @paging="pagingMethod"
      />
    </div>

    <div class="board__search"><BoardSearchBar /></div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import BoardSearchBar from "@/components/BoardSearchBar.vue";
import Pagination from "@/components/Pagination.vue";

export default Vue.extend({
  data() {
    return {
      articles: [],
      pageArticles: [],
      total: 0,
      page: 1,
      limit: 20,
      // 페이지에서 보여줄 숫자 개수
      block: 5,
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
        this.total = this.articles.length;
        this.pagingMethod(this.page);
      })
      .catch((err) => console.log(err));
  },

  methods: {
    pagingMethod(page) {
      this.pageArticles = this.articles.slice(
        (page - 1) * this.limit,
        page * this.limit
      );
      this.page = page;
      this.pageDataSetting(this.total, this.limit, this.block, page);
    },

    pageDataSetting(total, limit, block, page) {
      const totalPage = Math.ceil(total / limit);

      let currentPage = page;
      const first =
        currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null;
      const end =
        totalPage !== currentPage
          ? parseInt(currentPage, 10) + parseInt(1, 10)
          : null;

      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1;
      let endIndex =
        startIndex + block > totalPage ? totalPage : startIndex + block - 1;
      let list = [];
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index);
      }
      return { first, end, list, currentPage };
    },
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

.board__header {
  background-color: var(--board-header);
  color: var(--board-header-text);
}

.board__header__row {
  padding: 0.5rem;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

.board__body {
  background-color: var(--board-body);
  color: var(--board-body-text);
  border-top: 1px solid var(--board-body-line);
}

.board__body__row {
  padding: 0.5rem;
  font-size: 14px;
  text-align: center;
}

/* th:nth-child(2) {
  width: 100%;
} */

.board__comment {
  color: var(--coral);
  padding-left: 0.2rem;
}
</style>
