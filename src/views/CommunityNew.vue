<template>
  <section>
    <h1 class="page__title">New Post</h1>

    <div class="editor">
      <input
        type="text"
        v-model="title"
        class="title__input"
        placeholder="제목을 입력하세요."
      />
      <Editor
        :options="editorOptions"
        height="32rem"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        ref="toastuiEditor"
      />

      <div class="editor__footer">
        <button class="editor__footer__button" @click="createArticle">
          글 쓰기
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
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
      title: null,
      content: null,
    };
  },
  methods: {
    createArticle() {
      const { id } = this.$route.params;
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      const author = JSON.parse(localStorage.getItem("user")).user.id;

      const articleData = {
        title: this.title,
        content: this.$refs.toastuiEditor.invoke("getMarkdown"),
        author: author,
      };

      axios({
        method: "post",
        url: `api/v1/community/new/`,
        data: articleData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "Community" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.page__title {
  font-family: "Mulish", sans-serif;
  letter-spacing: 0rem;
  color: var(--page-title);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.editor {
  padding: 2rem;
  background-color: var(--header);
  border-radius: 8px;
}

.title__input {
  width: 100%;
  border: 1px solid var(--gray-200);
  padding: 0.6rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  outline: none;
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
