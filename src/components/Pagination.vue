<template>
  <div class="pagination">
    <icon-base
      viewBox="0 0 14 14"
      width="20"
      height="14"
      class="pagination__arrow"
    >
      <icon-left class="pagination__arrow__svg" />
    </icon-base>

    <div v-for="index in 10" :key="index" class="pagination__index">
      {{ index }}
    </div>

    <icon-base
      viewBox="0 0 14 14"
      width="20"
      height="14"
      class="pagination__arrow"
    >
      <icon-right class="pagination__arrow__svg" />
    </icon-base>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconLeft from "@/components/icons/IconLeft.vue";
import IconRight from "@/components/icons/IconRight.vue";

export default {
  props: {},
  components: {
    IconBase,
    IconLeft,
    IconRight,
  },
  methods: {},
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.pagination__arrow {
  margin: 0 1rem;
  font-size: 14px;
}

.pagination__arrow__svg {
  fill: var(--board-body-text);
}

.pagination__index {
  padding: 0.5rem;
}
</style>
