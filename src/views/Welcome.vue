<template>
  <div>
    <h1>Welcome</h1>
    <div class="welcome-link-group">
      <router-link class="welcome-link" to="/login">Login</router-link>
      <router-link class="welcome-link" to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data() {
    return {};
  },
};
</script>

<style scoped>
.welcome-link-group {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.welcome-link {
  cursor: pointer;
  color: #e5e7eb;
  text-decoration: underline;
}
.welcome-link:not(:last-child) {
  margin-right: 1em;
}
</style>
