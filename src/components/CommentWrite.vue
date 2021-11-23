<template>
  <div>
    <p class="comment__title mulish">Comment</p>
    <textarea class="comment__input" cols="30" rows="6"></textarea>

    <div class="comment__button__wrapper">
      <router-link to="#">
        <div class="comment__button mulish">Write</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.comment__title {
  margin-bottom: 0.5rem;
  font-size: 18px;
  font-weight: 700;
}

.comment__input {
  width: 100%;
  background-color: var(--board-header);
  border-radius: 8px;
  resize: none;
  padding: 1rem;
  outline: none;
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
