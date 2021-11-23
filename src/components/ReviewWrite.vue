<template>
  <div>
    <div class="comment__score">
      <icon-base viewBox="0 0 18 18" width="1.5rem" height="1.5rem">
        <icon-star class="star__on" />
      </icon-base>

      <icon-base viewBox="0 0 18 18" width="1.5rem" height="1.5rem">
        <icon-star class="star__on" />
      </icon-base>

      <icon-base viewBox="0 0 18 18" width="1.5rem" height="1.5rem">
        <icon-star class="star__on" />
      </icon-base>

      <icon-base viewBox="0 0 18 18" width="1.5rem" height="1.5rem">
        <icon-star-half class="star__half" />
      </icon-base>

      <icon-base viewBox="0 0 18 18" width="1.5rem" height="1.5rem">
        <icon-star class="star__off" />
      </icon-base>
    </div>

    <textarea class="comment__input" cols="30" rows="6"></textarea>

    <div class="comment__button__wrapper">
      <router-link to="#">
        <div class="comment__button mulish">Write</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconStarHalf from "@/components/icons/IconStarHalf.vue";

export default {
  components: {
    IconBase,
    IconStar,
    IconStarHalf,
  },
};
</script>

<style scoped>
.comment__score {
  display: flex;
  margin-bottom: 1rem;
}

.comment__input {
  width: 100%;
  background-color: var(--board-header);
  border-radius: 8px;
  resize: none;
  padding: 1rem;
  outline: none;
}

.star__on {
  fill: #ffac33;
}

.star__off {
  fill: var(--gray-600);
}

.comment__button__wrapper {
  display: flex;
  justify-content: end;
}

.comment__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 5rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
  margin-bottom: 2rem;
}
</style>
