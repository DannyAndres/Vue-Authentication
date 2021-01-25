<template>
  <div class="login-email-container" :style="error ? 'border: 2px solid #F87171;' : ''">
    <input
      class="login-email-input"
      type="text"
      :name="text"
      v-model="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    error: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      text: ''
    }
  },
  watch: {
    text() {
      this.$emit('text', this.text);
    }
  }
}
</script>

<style scoped>
.login-email-container {
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
.login-email-input::placeholder {
  color: #6b7280;
  font-weight: bold;
}
.login-email-input {
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