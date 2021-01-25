<template>
  <div class="main-component">
    <transition name="fade" mode="out-in">
      <loading-component v-if="loading" />
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="!loading && !auth" class="full-page">
        <router-view />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="!loading && auth" class="full-page">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loading from '@/components/animations/Loading.vue';

export default {
  name: 'App',
  components: {
    'loading-component': Loading,
  },
  data() {
    return {
      loading: true,
      auth: false,
    };
  },
  created() {
    this.validate(this.token)
      .then(() => (this.auth = true))
      .catch(() => (this.auth = false))
      .finally(() => (this.loading = false));
  },
  methods: {
    ...mapActions('authentication', ['validate']),
  },
  computed: {
    ...mapGetters({
      token: ['authentication/token'],
    }),
  },
};
</script>

<style>
body {
  margin: 0px;
}
.main-component {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f4f6;
  background-color: #111827;
  min-height: 100vh;
}
.full-page {
  height: 100%;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
