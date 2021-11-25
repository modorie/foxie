<template>
  <section>
    <div class="card">
      <icon-base viewBox="0 0 36 36" width="2rem" height="2rem">
        <icon-medal-gold />
      </icon-base>

      <div class="right">
        <p class="title">{{ popularArticles[0].title }}</p>

        <div class="profile">
          <router-link
            :to="{
              name: 'Profile',
              params: { username: popularArticles[0].author.username },
            }"
          >
            <div class="profile__avatar">
              <img
                v-if="popularArticles[0].author.profile.avatar"
                :src="popularArticles[0].author.profile.avatar"
                style="height: 28px; width: 28px"
              />
              <icon-base
                v-else
                viewBox="0 0 64 64"
                width="28"
                height="28"
                class="post__author__avatar"
              >
                <icon-avatar />
              </icon-base>
            </div>
          </router-link>
          <p
            class="profile__name"
            v-text="
              popularArticles[0].author.profile.nickname
                ? popularArticles[0].author.profile.nickname
                : popularArticles[0].author.username
            "
          ></p>
        </div>
      </div>
    </div>

    <div class="card">
      <icon-base viewBox="0 0 36 36" width="2rem" height="2rem">
        <icon-medal-silver />
      </icon-base>

      <div class="right">
        <p class="title">{{ popularArticles[1].title }}</p>

        <div class="profile">
          <router-link
            :to="{
              name: 'Profile',
              params: { username: popularArticles[1].author.username },
            }"
          >
            <div class="profile__avatar">
              <img
                v-if="popularArticles[1].author.profile.avatar"
                :src="popularArticles[1].author.profile.avatar"
                style="height: 28px; width: 28px"
              />
              <icon-base
                v-else
                viewBox="0 0 64 64"
                width="28"
                height="28"
                class="post__author__avatar"
              >
                <icon-avatar />
              </icon-base>
            </div>
          </router-link>
          <p
            class="profile__name"
            v-text="
              popularArticles[1].author.profile.nickname
                ? popularArticles[1].author.profile.nickname
                : popularArticles[1].author.username
            "
          ></p>
        </div>
      </div>
    </div>

    <div class="card">
      <icon-base viewBox="0 0 36 36" width="2rem" height="2rem">
        <icon-medal-bronze />
      </icon-base>

      <div class="right">
        <p class="title">{{ popularArticles[2].title }}</p>

        <div class="profile">
          <router-link
            :to="{
              name: 'Profile',
              params: { username: popularArticles[2].author.username },
            }"
          >
            <div class="profile__avatar">
              <img
                v-if="popularArticles[2].author.profile.avatar"
                :src="popularArticles[2].author.profile.avatar"
                style="height: 28px; width: 28px"
              />
              <icon-base
                v-else
                viewBox="0 0 64 64"
                width="28"
                height="28"
                class="post__author__avatar"
              >
                <icon-avatar />
              </icon-base>
            </div>
          </router-link>
          <p
            class="profile__name"
            v-text="
              popularArticles[2].author.profile.nickname
                ? popularArticles[2].author.profile.nickname
                : popularArticles[2].author.username
            "
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      popularArticles: [],
    };
  },
  created() {
    axios
      .get(`api/v1/community/popular`)
      .then((res) => {
        this.popularArticles = res.data;
      })
      .catch((err) => console.log(err));
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
  cursor: pointer;
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
  width: 10rem;
}

.profile__name {
  font-weight: 500;
  margin-left: 0.5rem;
}
</style>
