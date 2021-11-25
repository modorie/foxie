<template>
  <div class="pagination">
    <div @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''">
      <icon-base
        viewBox="0 0 16 16"
        width="20"
        height="16"
        class="pagination__arrow"
      >
        <icon-left
          class="pagination__arrow__svg hover"
          :class="{ disactive: pageSetting.first == null }"
        />
      </icon-base>
    </div>

    <div
      class="pagination__index hover"
      :class="{ active: page === pageSetting.currentPage }"
      v-for="page in pageSetting.list"
      :key="page"
      @click="sendPage(page)"
    >
      {{ page }}
    </div>

    <div @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''">
      <icon-base
        viewBox="0 0 16 16"
        width="20"
        height="16"
        class="pagination__arrow"
      >
        <icon-right
          class="pagination__arrow__svg hover"
          :class="{ disactive: pageSetting.end == null }"
        />
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconLeft from "@/components/icons/IconLeft.vue";
import IconRight from "@/components/icons/IconRight.vue";

export default {
  props: ["pageSetting"],
  components: {
    IconBase,
    IconLeft,
    IconRight,
  },
  methods: {
    sendPage(page) {
      this.$emit("paging", page);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
}

.pagination__arrow {
  margin: 0 1rem;
  font-size: 14px;
  cursor: pointer;
}

.pagination__arrow__svg {
  stroke: var(--board-body-text);
}

.pagination__index {
  width: 2rem;
  text-align: center;
  cursor: pointer;
}

.active {
  font-weight: 700;
  color: var(--coral);
}

.disactive {
  stroke: none;
}
</style>
