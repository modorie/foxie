<template>
  <div class="comment">
    <div class="profile">
      <div>
        <router-link
          :to="{
            name: 'Profile',
            params: { username: comment.author.username },
          }"
        >
          <div class="profile__avatar">
            <img
              v-if="comment.author.profile.avatar"
              :src="comment.author.profile.avatar"
              style="height: 32px; width: 32px"
              class="settings__form__photo__thumbnail"
            />
            <icon-base v-else viewBox="0 0 64 64" width="32" height="32">
              <icon-avatar />
            </icon-base>
          </div>
        </router-link>
      </div>
      <div class="profile__info">
        <div class="profile__info__header">
          <router-link
            :to="{
              name: 'Profile',
              params: { username: comment.author.username },
            }"
          >
            <p
              class="profile__nickname"
              v-text="
                comment.author.profile.nickname
                  ? comment.author.profile.nickname
                  : comment.author.username
              "
            ></p>
          </router-link>
          <p class="profile__time">{{ comment.created_at.slice(0, 10) }}</p>
        </div>
        <p class="comment__body">{{ comment.content }}</p>
      </div>
    </div>
    <div>
      <button v-if="userId === comment.author.id" @click="deleteComment">
        <icon-base viewBox="0 0 18 18" width="16" height="16">
          <icon-x class="iconX" />
        </icon-base>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    IconX,
  },
  data() {
    return {
      comment: {},
      userId: null,
    };
  },
  props: {
    commentId: Number,
    review: Object,
  },
  created() {
    // const { id } = this.$route.params;
    this.userId = JSON.parse(localStorage.getItem("user")).user.id;

    axios
      .get(
        `api/v1/movies/${this.review.movie}/reviews/${this.review.id}/comments/${this.commentId}`
      )
      .then((res) => {
        this.comment = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    deleteComment() {
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      // const { id } = this.$route.params;

      if (confirm("정말 삭제하시겠습니까?")) {
        axios({
          method: "delete",
          url: `api/v1/movies/${this.review.movie}/reviews/${this.review.id}/comments/${this.commentId}/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            console.log(res);
            location.reload();
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
.comment {
  display: flex;
  justify-content: space-between;
}

.profile {
  display: flex;
  margin-bottom: 1rem;
}

.profile__info {
  margin-left: 0.5rem;
  width: 100%;
}

.profile__info__header {
  display: flex;
  align-items: center;
}

.profile__info__name {
  display: flex;
}

.profile__nickname {
  font-weight: 700;
  font-size: 16px;
  margin-right: 0.5rem;
}

.profile__id {
  color: var(--recommend-text);
}

.profile__time {
  font-size: 14px;
  color: var(--recommend-text);
}

.iconX {
  stroke: var(--scroll-bar);
}
</style>
