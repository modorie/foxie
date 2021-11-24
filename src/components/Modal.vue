<template>
  <transition name="modal" appear>
    <div class="outside" @click.self="$emit('close')">
      <div class="inside">
        <div class="modal__exit" @click="$emit('close')">
          <icon-base viewBox="0 0 18 18" width="16" height="16">
            <icon-x />
          </icon-base>
        </div>
        <h1 class="modal__title">{{ title }}</h1>

        <p class="modal__content">
          {{ content }}
        </p>

        <div v-if="buttonText" class="modal__button__wrapper">
          <router-link to="#">
            <div class="modal__button">{{ buttonText }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconX from "@/components/icons/IconX.vue";

export default {
  components: {
    IconBase,
    IconX,
  },
  props: {
    title: String,
    content: String,
    buttonText: String,
  },
};
</script>

<style scoped>
.outside {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 103;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inside {
  background: var(--header);
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  position: absolute;
}

.modal__exit {
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  justify-content: end;
  cursor: pointer;
}

.modal__title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 0rem 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.modal__content {
  text-align: center;
  color: var(--recommend-text);
}

.modal__button__wrapper {
  display: flex;
  justify-content: center;
}

.modal__button {
  border-radius: 4px;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-top: 2rem;
  background-color: var(--btn-primary);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.05),
    0px 1px 2px 1px rgba(0, 0, 0, 0.05);
  color: var(--white);
  font-weight: 600;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.15s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
