<template>
  <div class="settings" v-if="haveProfile">
    <div class="settings__header">
      <p class="settings__header__title mulish">New Profile</p>
      <p class="settings__header__description">
        모두에게 보여줄 나만의 프로필을 만들어보세요
      </p>
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
            height="48"
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
          name="ㄴ"
          rows="3"
          class="settings__form__textarea"
          placeholder="자신을 소개해보세요."
          v-model="content"
        ></textarea>
      </div>
      <div class="settings__form__submit">
        <button class="settings__button settings__button__secondary">
          취소
        </button>
        <button
          @click="editArticle"
          class="settings__button settings__button__primary"
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
      userid: null,
      username: null,
      nickname: null,
      content: null,
      avatar: null,
      haveProfile: false,
    };
  },
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.username = JSON.parse(localStorage.getItem("user")).user.username;
      axios({
        method: "get",
        url: `accounts/${this.username}`,
      })
        .then(() => {
          this.$router.push({
            name: "Profile",
            params: { username: this.username },
          });
          this.haveProfile = true;
        })
        .catch(() => {
          // window.alert("프로필이 없습니다. 프로필을 작성해주세요.");
          this.$router.push({
            name: "ProfileNew",
          });
          this.haveProfile = true;
        });
    } else {
      // window.alert("프로필을 보시려면 로그인하세요.");
    }

    // const user = localStorage.getItem("user");
    if (user) {
      this.userid = JSON.parse(localStorage.getItem("user")).user.id;
      this.username = JSON.parse(localStorage.getItem("user")).user.username;
    }
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
        user: this.userid,
        avatar: this.avatar,
        // avatar: this.image.result,
      };

      axios({
        method: "post",
        url: `accounts/`,
        data: profileData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: "Profile",
            params: { username: this.username },
          });
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
}

.settings__header {
  margin-bottom: 3rem;
}

.settings__header__title {
  font-family: "Mulish", sans-serif;
  letter-spacing: 0rem;
  color: var(--page-title);
  font-size: 20px;
  font-weight: 700;
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
  margin-bottom: 0.2rem;
  padding-left: 0.3rem;
  font-size: 16px;
  color: var(--profile-settings-form-label);
}

.settings__form__input {
  display: block;
  padding: 0.5rem;
  padding-left: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--profile-settings-form-input);
  border: 1px solid var(--profile-settings-form-input-border);
  border-radius: 4px;
}

.settings__form__input:focus {
  outline: 1px solid var(--recommend-text);
}

.settings__form__textarea {
  display: block;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--profile-settings-form-input);
  border: 1px solid var(--profile-settings-form-input-border);
  border-radius: 8px;
  resize: none;
}

.settings__form__photo {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.2rem;
}

.settings__form__photo__thumbnail {
  margin-right: 2rem;
  border-radius: 190px;
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
  width: 6.5rem;
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
