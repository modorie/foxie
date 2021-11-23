<template>
  <section>
    <div class="container">
      <icon-base
        viewBox="0 0 18 18"
        :width="size"
        :height="size"
        v-for="i in yellow"
        :key="i"
      >
        <icon-star class="star__on" />
      </icon-base>

      <icon-base
        viewBox="0 0 18 18"
        :width="size"
        :height="size"
        v-for="i in half"
        :key="i"
      >
        <icon-star-half class="star__half" />
      </icon-base>

      <icon-base
        viewBox="0 0 18 18"
        :width="size"
        :height="size"
        v-for="i in gray"
        :key="i"
      >
        <icon-star class="star__off" />
      </icon-base>
    </div>
  </section>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconStarHalf from "@/components/icons/IconStarHalf.vue";

export default {
  data() {
    return {
      yellow: parseInt(this.score / 2),
      half: this.score % 2,
      gray: parseInt((10 - this.score) / 2),
    };
  },
  props: {
    size: Number,
    score: Number,
  },
  components: {
    IconBase,
    IconStar,
    IconStarHalf,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.star__on {
  fill: #ffac33;
}

.star__off {
  fill: var(--star-gray);
}
</style>
