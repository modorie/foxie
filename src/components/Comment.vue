<template>
  <div>
    <div v-for="comment in comments" :key="comment.id" class="container">
      <div class="comment__left">
        <div class="comment__author">
          <icon-base
            viewBox="0 0 64 64"
            width="32"
            height="32"
            class="comment__author__avatar"
          >
            <icon-avatar />
          </icon-base>
          <div>
            <p class="comment__author__name">
              {{ comment.author.username }}
            </p>
            <p class="comment__date">
              {{
                comment.created_at
                  .slice(0, 16)
                  .replaceAll("-", ".")
                  .replace("T", " ")
              }}
            </p>
          </div>
        </div>

        <p class="comment__body">
          {{ comment.content }}
        </p>
      </div>
      <div class="comment__right"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
  },
  data() {
    return {
      comments: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.userId = JSON.parse(localStorage.getItem("user")).user.id;

    axios
      .get(`api/v1/community/${id}/comments/`)
      .then((res) => {
        this.comments = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--board-header);
}

.container:last-child {
  border-bottom: none;
}

.comment__author {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
}

.comment__author__avatar {
  margin-right: 1rem;
}

.comment__author__name {
  font-size: 16px;
  font-weight: 700;
}

.comment__date {
  font-size: 14px;
  color: var(--recommend-text);
}

.comment__body {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.comment__info {
  display: flex;
  margin-bottom: 1rem;
}

.like__svg {
  stroke: var(--btn-secondary-text);
}

.liked__svg {
  stroke: var(--coral);
}

.like__count {
  margin-left: 0.3rem;
}
</style>
