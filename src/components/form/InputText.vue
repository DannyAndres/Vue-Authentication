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
      email: ''
    }
  },
  watch: {
    email() {
      this.$emit('email', this.email);
    }
  }
}
</script>

<template>
  <div class="login-email-container">
    <input
      class="login-email-input"
      type="text"
      name="email"
      v-model="email"
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