<template>
  <div class="container">
    <div class="profile">
      <div class="profile__avatar">
        <icon-base viewBox="0 0 64 64" width="48" height="48">
          <icon-avatar />
        </icon-base>
      </div>

      <div class="profile__info">
        <div class="profile__info__header">
          <p class="profile__nickname">4시의여우</p>
          <p class="profile__time">9시간 전</p>
        </div>

        <!-- TODO : 컴포넌트로 분리해서 점수만 줬을 때 별점 만들어지도록 할 예정 -->
        <div class="profile__score">
          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__on" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__on" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__on" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star-half class="star__half" />
          </icon-base>

          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-star class="star__off" />
          </icon-base>
        </div>
      </div>
    </div>
    <div class="body">
      <p class="body__content" v-if="!isMore">
        {{ text | truncate(200) }}
      </p>

      <p class="body__content" v-else>
        {{ text }}
      </p>

      <div class="body__more" v-if="!isMore" @click="isMore = !isMore">
        더보기
      </div>

      <div class="footer">
        <div class="footer__item">
          <icon-base viewBox="0 0 22 25" width="24" height="22">
            <icon-heart class="footer__svg" />
          </icon-base>

          <p class="footer__item__count">17</p>
        </div>

        <div class="footer__item">
          <icon-base viewBox="0 0 24 18" width="20" height="20">
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

        <input
          class="footer__input"
          placeholder="댓글을 입력하세요."
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconStarHalf from "@/components/icons/IconStarHalf.vue";
import IconComment from "@/components/icons/IconComment.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    IconHeart,
    IconComment,
    IconStar,
    IconStarHalf,
  },
  data() {
    return {
      text: `언론 시사회에서 처음 이터널스를 보고 접하는 느낌은 딱 하나였다. "이
        영화는 마블판 스타워즈: 라스트 제다이(2017년)가 될 가능성이 클 것이다."
        어벤져스: 엔드게임(2019년)을 끝으로 '인피니티 사가'는 막을 내렸으니,
        새로운 사가가 필요한 마블의 입장에서 이터널스는 새로운 서막을 알리는
        웅대한 출발점이었다. 언론 시사회에서 처음 이터널스를 보고 접하는 느낌은
        딱 하나였다. "이 영화는 마블판 스타워즈: 라스트 제다이(2017년)가 될
        가능성이 클 것이다." 어벤져스: 엔드게임(2019년)을 끝으로 '인피니티
        사가'는 막을 내렸으니, 새로운 사가가 필요한 마블의 입장에서 이터널스는
        새로운 서막을 알리는 웅대한 출발점이었다. 언론 시사회에서 처음 이터널스를 보고 접하는 느낌은
        딱 하나였다. "이 영화는 마블판 스타워즈: 라스트 제다이(2017년)가 될
        가능성이 클 것이다." 어벤져스: 엔드게임(2019년)을 끝으로 '인피니티
        사가'는 막을 내렸으니, 새로운 사가가 필요한 마블의 입장에서 이터널스는
        새로운 서막을 알리는 웅대한 출발점이었다.`,
      isMore: false,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: var(--recommend);
  margin-bottom: 1rem;
  padding: 1.5rem 0rem;
  border-bottom: 1px solid var(--profile-tag);
}

.profile {
  display: flex;
  align-items: center;
}

.profile__info {
  margin-left: 1rem;
  width: 100%;
}

.profile__info__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.comment {
  display: flex;
}

.body {
  margin-top: 2rem;
}

.profile__score {
  display: flex;
  margin-top: 0.2rem;
}

.body__content {
  font-size: 16px;
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
  justify-content: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;
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
  padding: 0rem 1rem;
  font-size: 16px;
}

.footer__input:focus {
  outline: 1px solid gray;
}

.star__on {
  fill: #ffac33;
}

.star__off {
  fill: var(--gray-600);
}
</style>
