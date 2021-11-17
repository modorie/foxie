<template>
  <div class="container">
    <div class="comment__author">
      <icon-base
        viewBox="0 0 64 64"
        width="32"
        height="32"
        class="comment__author__avatar"
      >
        <icon-avatar />
      </icon-base>

      <p class="comment__author__name">뾰여우</p>
    </div>
    <p class="comment__date">21. 11. 17. 16:00</p>

    <p class="comment__body">
      네가 날 길들인다면 정말 신날거야!<br />
      너의 머리칼처럼 밀도 금빛이기 때문에 밀은 너를 기억하게 해줄거야.<br />
      그래서 밀밭을 스치는 바람소리까지 사랑하게 될거고
    </p>

    <div class="comment__info">
      <div class="comment__info__svg">❤ 1</div>
      <div class="comment__info__svg">💭 10</div>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconAvatar from "./icons/IconAvatar.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
  },
};
</script>

<style scoped>
.container {
  border-top: 1px solid var(--board-header);
}

.comment__author {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
}

.comment__author__avatar {
}

.comment__author__name {
  font-size: 16px;
  font-weight: 700;
  margin-left: 0.5rem;
}

.comment__date {
  font-size: 14px;
  margin-bottom: 1rem;
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

.comment__info__svg {
  margin-right: 1rem;
}
</style>
