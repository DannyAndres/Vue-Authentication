<template>
  <button class="button-component" @click="press()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    press() {
      this.$emit('whenClick');
    }
  }
}
</script>

<style scoped>
.button-component {
  cursor: pointer;
  background-color: #f9fafb;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 14px;
  font-weight: bold;
  color: #111827;
}
.button-component:hover,
.button-component:focus {
  background-color: #d1d5db !important;
}
</style>