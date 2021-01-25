<template>
  <button class="button-component" :style="loading ? 'background-color: #374151 !important; cursor: auto !important;' : ''" @click.prevent="press()">
    <slot v-if="!loading"></slot>
    <transition name="fade" mode="out-in">
      <spinner-component v-if="loading" size="15px" color="#111827"/>
    </transition>
  </button>
</template>

<script>
import Spinner from '@/components/animations/Spinner.vue';

export default {
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    'spinner-component': Spinner,
  },
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
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>