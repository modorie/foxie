<template>
  <div class="dropdown">
    <div class="dropdown__list">
      <button @click="editArticle(article)" class="dropdown__item">수정</button>
      <button @click="deleteArticle()" class="dropdown__item">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articleId: 0,
    };
  },
  created() {
    this.articleId = this.$route.params.id;
  },
  methods: {
    editArticle(article) {
      this.$router.push({ name: "CommunityEdit", params: { article } });
    },
    deleteArticle() {
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      if (confirm("정말 삭제하시겠습니까?")) {
        axios({
          method: "delete",
          url: `api/v1/community/${this.articleId}/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            console.log(res);
            this.$router.push({
              name: "Community",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 10px;
  width: 8rem;
  background-color: var(--header);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  border: var(--board-header) 1px solid;
}

.dropdown__list {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 14px;
}

.dropdown__item {
  display: block;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--board-header);
}

.dropdown__item:last-child {
  border-bottom: none;
}

.font-600 {
  font-weight: 600;
}
</style>
