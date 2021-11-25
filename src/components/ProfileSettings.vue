<template>
  <div class="settings">
    <div class="settings__header">
      <p class="settings__header__title mulish hover">Edit Profile</p>
      <p class="settings__header__description">프로필을 수정 할 수 있어요.</p>
    </div>
    <form @submit.prevent="" class="settings__form">
      <div class="settings__form__div">
        <label for="nickname" class="settings__form__label">닉네임</label>
        <input
          name="nickname"
          class="settings__form__input"
          placeholder="닉네임을 설정하세요."
          v-model="nickname"
        />
      </div>

      <div class="settings__form__div">
        <label for="Photo" class="settings__form__label">프로필 사진</label>
        <p class="settings__form__photo">
          <img
            v-if="avatar"
            :src="avatar"
            style="height: 50px; width: 50px"
            class="settings__form__photo__thumbnail"
          />
          <icon-base
            v-else
            viewBox="0 0 64 64"
            width="50"
            height="50"
            class="settings__form__photo__thumbnail"
          >
            <icon-avatar />
          </icon-base>
          <label
            for="input-file"
            class="
              settings__button
              settings__button__secondary
              settings__form__photo__input
              hover
            "
            >사진 업로드</label
          >
          <input
            id="input-file"
            type="file"
            @change="uploadImages"
            style="display: none"
            accept="image/*"
          />
        </p>
      </div>
      <div class="settings__form__div">
        <label for="about" class="settings__form__label">소개</label>
        <textarea
          name="about"
          rows="3"
          class="settings__form__textarea"
          placeholder="자신을 소개해보세요."
          v-model="content"
        ></textarea>
      </div>
      <div class="settings__form__submit">
        <button class="settings__button settings__button__secondary hover">
          취소
        </button>
        <button
          @click="editArticle"
          class="settings__button settings__button__primary hover"
        >
          제출
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import IconBase from "@/components/IconBase.vue";
import IconAvatar from "@/components/icons/IconAvatar.vue";

export default {
  components: {
    IconBase,
    IconAvatar,
  },
  data() {
    return {
      username: this.profile.user.username,
      nickname: this.profile.nickname,
      content: this.profile.content,
      avatar: this.profile.avatar,
    };
  },
  props: {
    profile: {
      type: Object,
    },
  },
  methods: {
    uploadImages(e) {
      const imgFile = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.avatar = reader.result;
      };
      reader.readAsDataURL(imgFile);
    },
    editArticle() {
      const token = JSON.parse(localStorage.getItem("user")).access_token;

      const profileData = {
        nickname: this.nickname,
        content: this.content,
        user: this.profile.user.id,
        avatar: this.avatar,
        // avatar: this.image.result,
      };

      axios({
        method: "put",
        url: `accounts/${this.username}/`,
        data: profileData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.settings {
  min-width: 50rem;
  width: 100%;
}

.settings__header {
  margin-bottom: 1rem;
  margin-left: 0.5rem;
}

.settings__header__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--profile-settings-header);
}

.settings__header__description {
  font-size: 14px;
  color: var(--profile-settings-description);
}

.settings__form {
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  padding: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  background-color: var(--profile-settings-body);
}

.settings__form__div {
  margin-bottom: 2rem;
}

.settings__form__label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: 700;
  color: var(--profile-settings-form-label);
}

.settings__form__input {
  display: block;
  padding: 0.5rem;
  padding-left: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--profile-settings-form-input);
  border: 1px solid var(--profile-settings-form-input-border);
  border-radius: 8px;
}

.settings__form__textarea {
  display: block;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--profile-settings-form-input);
  border: 1px solid var(--profile-settings-form-input-border);
  border-radius: 8px;
}

.settings__form__photo {
  display: flex;
  align-items: center;
}

.settings__form__photo__thumbnail {
  margin-right: 1rem;
  border-radius: 190px;
  object-fit: cover;
}

.settings__form__photo__input {
  cursor: pointer;
}

.settings__form__submit {
  display: flex;
  justify-content: right;
}

.settings__button {
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 5.5rem;
  text-align: center;
}

.settings__button__primary {
  background-color: var(--btn-primary);
  border: 1px solid var(--btn-primary);
  color: var(--white);
  font-weight: 600;
}

.settings__button__secondary {
  background-color: var(--btn-secondary);
  color: var(--btn-secondary-text);
  border: 1px solid var(--btn-secondary-border);
  font-weight: 600;
}
</style>
