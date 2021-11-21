<template>
  <div class="container">
    <!-- TODO : Banner 컴포넌트로 빼기 -->
    <div class="banner">
      <div class="banner__left" />
      <div class="banner__right">
        <div class="banner__right__brand">
          <icon-base viewBox="0 0 43 54" width="42px" height="48px">
            <icon-logo />
          </icon-base>

          <p class="banner__right__title mulish">Foxie</p>
        </div>

        <p class="banner__right__text">
          난 네게 아직 수십 만의 영화에 지나지 않아,<br />
          너 역시 내게 수십 만의 아이들과 같은 어린아이일뿐이야<br />
          하지만 네가 나를 길들인다면 나는 너에게 이 세상에 유일한 존재가
          될거야<br />
          <br />
          <b>널 길들이려면 어떻게 해야 하니?</b><br />
        </p>
        <div class="banner__footer">
          <router-link to="#">
            <div class="banner__footer__button">네 이야기를 들려주렴</div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="home__body">
      <div class="home__body__left">
        <div>
          <h1 class="left__title mulish">Best Movies 🚀</h1>
          <p class="left__subtitle">
            장르별 전문가들의 섬세한 리뷰들을 읽어보세요.
          </p>
          <MovieCarouselHeader />
        </div>

        <div>
          <h1 class="left__title mulish">Best Reviews 🚀</h1>
          <p class="left__subtitle">
            가장 인기 있는 리뷰들을 모아봤어. 즐겁게 봐줘 - 알겠어
          </p>
          <MovieCarouselHeader />
        </div>

        <div>
          <h1 class="left__title mulish">Best Issues 🚀</h1>
          <p class="left__subtitle">가장 인기 있는 게시글들이야. 재밌게 봐줘</p>
          <MovieCarouselHeader />
        </div>
      </div>

      <div class="home__body__right">
        <MovieRecommend />
        <MovieRecommend />
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import MovieRecommend from "@/components/MovieRecommend.vue";
import MovieCarouselHeader from "@/components/MovieCarouselHeader.vue";

export default {
  components: {
    IconBase,
    IconLogo,
    MovieRecommend,
    MovieCarouselHeader,
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 20rem;
  border-radius: 8px;
  display: flex;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(50px);
  margin-bottom: 2rem;
}

.banner__left {
  background-image: url("https://ae01.alicdn.com/kf/H9da62382ce944506bfe2ee949239bc67K.jpg");
  background-size: 100%;
  width: 18rem;
  height: 100%;
  border-radius: 8px 0 0 8px;
}

.banner__right {
  padding: 2rem;
  width: 100%;
}

.banner__right__brand {
  display: flex;
}

.banner__right__title {
  font-size: 2rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  color: #ed5656;
  font-weight: 700;
}

.banner__right__text {
  color: var(--gray-700);
  font-size: 16px;
}

.banner__footer {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1rem;
}

.banner__footer__button {
  align-items: center;
  text-align: center;
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
}

.home__body {
  display: flex;
}

.home__body__left {
  width: 100%;
  margin-right: 3rem;
}

.left__title {
  font-weight: 800;
  font-size: 24px;
}

.left__subtitle {
  color: var(--gray-400);
  font-weight: 300;
  margin-bottom: 1rem;
}
</style>
