<template>
  <section>
    <div class="profile__header">
      <div class="profile__header__avatar">
        <icon-base viewBox="0 0 64 64" width="100%" height="160px">
          <icon-avatar />
        </icon-base>
      </div>

      <!-- TODO: SCSS 도입 -->
      <div class="profile__header__info">
        <h1 class="profile__header__info__name">뿅뿅이여우</h1>

        <div class="profile__header__info__status">
          <div>
            <p class="status__num">{{ (1046).toLocaleString("ko-kr") }}</p>
            <p class="status__label">Reviews</p>
          </div>

          <div>
            <p class="status__num">{{ (4206).toLocaleString("ko-kr") }}</p>
            <p class="status__label">Followers</p>
          </div>

          <div>
            <p class="status__num">{{ (236).toLocaleString("ko-kr") }}</p>
            <p class="status__label">Follwings</p>
          </div>
        </div>

        <p class="profile__text">
          만약에 네가 오후 4시에 온다면, 난 3시부터 행복해지기 시작할 거야. 🦊
        </p>

        <div class="profile__tags">
          <p class="profile__tag">액션</p>
          <p class="profile__tag">스릴러</p>
          <p class="profile__tag">어린왕자</p>
        </div>
      </div>

      <div class="follow__container">
        <router-link to="#">
          <div class="follow__button mulish">
            <icon-base
              viewBox="0 0 20 20"
              width="20px"
              height="20px"
              class="comment__author__avatar"
            >
              <icon-follow />
            </icon-base>

            <span class="follow__button__text">Follow</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="profile__body">
      <div class="profile__body__sidebar">
        <p>나는 메뉴 1</p>
        <p>나는 메뉴 2</p>
        <p>나는 메뉴 3</p>
        <p>나는 메뉴 4</p>
      </div>
      <div class="profile__body__content">나는 컨텐츠야</div>
    </div>
  </section>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";
import IconFollow from "@/components/icons/IconFollow.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
    IconFollow,
  },
};
</script>

<style scoped>
.profile__header {
  width: 100%;
  max-width: 80rem;
  min-width: 50rem;
  height: 16rem;
  border-radius: 8px 8px 0px 0px;
  padding: 3rem 3rem;
  background-color: var(--profile-header);
  display: flex;
}

.profile__header__avatar {
  min-width: 10rem;
}

.profile__header__info {
  margin-left: 3rem;
  margin-top: 0.5rem;
}

.profile__header__info__name {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.profile__header__info__status {
  display: flex;
  font-size: 16px;
  margin-bottom: 0.7rem;
}

.profile__header__info__status > div {
  display: flex;
  margin-right: 2rem;
}

.status__num {
  font-weight: 700;
}

.status__label {
  margin-left: 0.5rem;
  color: var(--profile-label);
}

.profile__text {
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.profile__tags {
  display: flex;
}

.profile__tag {
  margin-right: 0.5rem;
  background-color: var(--profile-tag);
  padding: 0.1rem 0.6rem;
  border-radius: 1rem;
  font-size: 12px;
}

.profile__tag:before {
  content: "#";
  margin-right: 0.2rem;
}

.follow__container {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}

.follow__button {
  display: flex;
  align-items: center;
  font-weight: 600;
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.follow__button__text {
  margin-left: 0.6rem;
}

.profile__body {
  width: 100%;
  max-width: 80rem;
  min-width: 50rem;
  height: 30rem;
  border-radius: 0px 0px 8px 8px;
  padding: 3rem 3rem;
  background-color: var(--profile-body);
  display: flex;
}

.profile__body__sidebar {
  width: 10rem;
}

.profile__body__content {
  margin-left: 3rem;
}
</style>
