<template>
  <section>
    <h1 class="page__title">New Post</h1>

    <div class="editor">
      <Editor
        :options="editorOptions"
        height="32rem"
        initialEditType="wysiwyg"
        previewStyle="vertical"
      />

      <div class="editor__footer">
        <router-link to="#">
          <div class="editor__footer__button">글 쓰기</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/vue-editor";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      editorOptions: {
        hideModeSwitch: true,
      },
    };
  },
};
</script>

<style scoped>
.editor {
  padding: 2rem;
  background-color: var(--header);
  border-radius: 8px;
}

.page__title {
  font-family: "Mulish", sans-serif;
  letter-spacing: 0rem;
  color: var(--page-title);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.editor__footer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.editor__footer__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 10rem;
  font-size: 14px;
  text-align: center;

  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
}
</style>
