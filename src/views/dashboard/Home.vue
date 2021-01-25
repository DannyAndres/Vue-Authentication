<template>
  <div>
    <h1>Home</h1>
    <div class="error-link-group">
      <router-link class="error-link" to="/">Inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.error-link-group {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.error-link {
  cursor: pointer;
  color: #e5e7eb;
  text-decoration: underline;
}
.error-link:not(:last-child) {
  margin-right: 1em;
}
</style>
