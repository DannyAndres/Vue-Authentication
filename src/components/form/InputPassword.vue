<template>
  <div class="login-password-container">
    <input
      class="login-password-input"
      :type="show_pass ? 'text' : 'password'"
      name="password"
      v-model="password"
      :placeholder="placeholder"
    />
    <svg
      v-if="show_pass"
      @click="
        () => {
          show_pass = false;
        }
      "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#6b7280"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
    <svg
      v-if="!show_pass"
      @click="
        () => {
          show_pass = true;
        }
      "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#6b7280"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      password: '',
      show_pass: false
    }
  },
  watch: {
    password() {
      this.$emit('password', this.password);
    }
  }
}
</script>

<style scoped>
.login-password-container {
  display: flex;
  border-radius: 10px;
  outline: none;
  border: 2px solid #374151;
  background-color: #1f2937;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #f3f4f6;
  font-weight: bold;
  width: 100%;
}
.login-password-container svg {
  width: 20px;
  cursor: pointer;
  padding-right: 14px;
}
.login-password-input::placeholder {
  color: #6b7280;
  font-weight: bold;
}
.login-password-input {
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding: 14px;
  color: #f3f4f6;
  font-weight: bold;
}
</style>