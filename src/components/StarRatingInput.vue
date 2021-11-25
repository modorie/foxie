<template>
  <section>
    <div
      class="container"
      ref="score"
      @click="getPos($event)"
      @mousemove="getPos($event)"
    >
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
      score: 10,
      yellow: 5,
      half: 0,
      gray: 0,
    };
  },
  components: {
    IconBase,
    IconStar,
    IconStarHalf,
  },
  props: {
    size: Number,
  },
  methods: {
    // TODO : Debouncing
    getPos(event) {
      const left = this.$refs.score.getBoundingClientRect().left;
      const right = this.$refs.score.getBoundingClientRect().right;
      const now = event.clientX;

      const score = Math.round(((now - left) / (right - left)) * 10);
      this.score = score;

      this.yellow = parseInt(this.score / 2);
      this.half = this.score % 2;
      this.gray = parseInt((10 - this.score) / 2);

      this.$emit("score", this.score);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  cursor: pointer;
  padding: 1rem 0rem;
}

.star__on {
  fill: #ffac33;
}

.star__off {
  fill: var(--star-gray);
}
</style>
