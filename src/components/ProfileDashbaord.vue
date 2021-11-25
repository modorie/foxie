<template>
  <div>
    <p>
      {{ profile.favorite_genres }}
    </p>
    <p>
      {{ profile.favorite_actors }}
    </p>
    <p>
      {{ profile.favorite_directors }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
};
</script>

<style></style>
