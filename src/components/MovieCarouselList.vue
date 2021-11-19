<template>
  <div class="carousel"></div>
</template>

<script>
import axios from "axios";

export default {
  props: {},
};
</script>

<style scoped>
.carousel {
  width: 100%;
  background-color: var(--gray-300);
  height: 16rem;
  border-radius: 0 0 8px 8px;
}
</style>
