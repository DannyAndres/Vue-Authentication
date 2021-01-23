<template>
  <div>
    <h1>Login</h1>
    <div class="login-link-group">
      <router-link class="login-link" to="/">Inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {};
  },
};
</script>

<style scoped>
.login-link-group {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.login-link {
  cursor: pointer;
  color: #e5e7eb;
  text-decoration: underline;
}
.login-link:not(:last-child) {
  margin-right: 1em;
}
</style>
