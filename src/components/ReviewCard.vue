<template>
  <div class="container">
    <div class="profile">
      <div class="profile__avatar">
        <icon-base viewBox="0 0 64 64" width="40" height="40">
          <icon-avatar />
        </icon-base>
      </div>

      <div class="profile__info">
        <div class="profile__info__name">
          <p class="profile__nickname">4시의여우</p>
          <p class="profile__id">@4foxy</p>
        </div>

        <p class="profile__time">9시간 전</p>
      </div>
    </div>
    <div class="body">
      <div class="body__header">
        <div class="body__title">이터널스를 보고 느낀 점</div>
        <div class="body__score">★★★★☆</div>
      </div>

      <p>
        언론 시사회에서 처음 이터널스를 보고 접하는 느낌은 딱 하나였다. "이
        영화는 마블판 스타워즈: 라스트 제다이(2017년)가 될 가능성이 클 것이다."
        어벤져스: 엔드게임(2019년)을 끝으로 '인피니티 사가'는 막을 내렸으니,
        새로운 사가가 필요한 마블의 입장에서 이터널스는 새로운 서막을 알리는
        웅대한 출발점이었다.
      </p>

      <div class="body__more">더보기</div>

      <ReviewMovieCard />

      <div class="footer">
        <div class="footer__item">
          <icon-base viewBox="0 0 22 26" width="24" height="22">
            <icon-heart class="footer__svg" />
          </icon-base>

          <p class="footer__item__count">17</p>
        </div>

        <div class="footer__item">
          <icon-base viewBox="0 0 26 18" width="20" height="20">
            <icon-comment class="footer__svg" />
          </icon-base>

          <p class="footer__item__count">17</p>
        </div>
      </div>

      <div class="comment">
        <div class="comment__avatar">
          <icon-base viewBox="0 0 64 64" width="32" height="32">
            <icon-avatar />
          </icon-base>
        </div>

        <input class="footer__input" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewMovieCard from "@/components/ReviewMovieCard.vue";

import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";

export default {
  components: {
    ReviewMovieCard,
    IconBase,
    IconAvatar,
    IconHeart,
    IconComment,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: var(--recommend);
  margin-bottom: 1rem;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
}

.profile {
  display: flex;
  align-items: center;
}

.profile__info {
  margin-left: 1rem;
}

.profile__info__name {
  display: flex;
}

.profile__nickname {
  font-weight: 700;
  margin-right: 0.5rem;
}

.profile__id {
  color: var(--recommend-text);
}

.profile__time {
  font-size: 14px;
  color: var(--recommend-text);
}
.comment {
  display: flex;
}

.body {
  margin-top: 2rem;
}

.body__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.body__title {
  font-size: 18px;
  font-weight: 700;
}

.body__score {
}

.body__more {
  font-size: 14px;
  color: var(--recommend-text);
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.footer {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.footer__item {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: var(--recommend-text);
}

.footer__svg {
  stroke: var(--recommend-text);
}

.footer__item__count {
  margin-left: 0.2rem;
}

.footer__input {
  background-color: var(--profile-tag);
  margin-left: 1rem;
  border-radius: 2rem;
  width: 100%;
}
</style>
