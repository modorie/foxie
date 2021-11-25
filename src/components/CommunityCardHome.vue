<template>
  <section>
    <div class="card">
      <icon-base viewBox="0 0 36 36" width="2rem" height="2rem">
        <icon-medal-gold />
      </icon-base>

      <div class="right">
        <p class="title">디카프리오 나온 영화 Top 5</p>

        <div class="profile">
          <icon-base
            viewBox="0 0 64 64"
            width="28"
            height="28"
            class="post__author__avatar"
          >
            <icon-avatar />
          </icon-base>
          <p class="profile__name">뾰식이</p>
        </div>
      </div>
    </div>

    <div class="card">
      <icon-base viewBox="0 0 36 36" width="2rem" height="2rem">
        <icon-medal-silver />
      </icon-base>

      <div class="right">
        <p class="title">요즘 볼 만한 영화 추천 해줘</p>

        <div class="profile">
          <icon-base
            viewBox="0 0 64 64"
            width="28"
            height="28"
            class="post__author__avatar"
          >
            <icon-avatar />
          </icon-base>
          <p class="profile__name">뽀삐식이</p>
        </div>
      </div>
    </div>

    <div class="card">
      <icon-base viewBox="0 0 36 36" width="2rem" height="2rem">
        <icon-medal-bronze />
      </icon-base>

      <div class="right">
        <p class="title">나는 귀엽다</p>

        <div class="profile">
          <icon-base
            viewBox="0 0 64 64"
            width="28"
            height="28"
            class="post__author__avatar"
          >
            <icon-avatar />
          </icon-base>
          <p class="profile__name">뾰로로식이</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconMedalGold from "@/components/icons/IconMedalGold.vue";
import IconMedalSilver from "@/components/icons/IconMedalSilver.vue";
import IconMedalBronze from "@/components/icons/IconMedalBronze.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";

export default {
  components: {
    IconBase,
    IconMedalGold,
    IconMedalSilver,
    IconMedalBronze,
    IconAvatar,
  },
};
</script>

<style scoped>
.card {
  background-color: var(--header);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.title {
  font-weight: 600;
  font-size: 18px;
  margin-left: 1rem;
}

.right {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.profile {
  display: flex;
  align-items: center;
}

.profile__name {
  font-weight: 500;
  margin-left: 0.5rem;
}
</style>
