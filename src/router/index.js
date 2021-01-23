import Vue from 'vue';
import Router from 'vue-router';

//import store from '@/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'welcome',
      path: '/',
      component: () => import('@/views/Welcome'),
      meta: {
        both: true,
      },
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/auth/Login'),
      meta: {
        auth: false,
      },
    },
    // =========================================
    // ERRORS
    // =========================================
    {
      name: '404',
      path: '*',
      component: () => import('@/views/error/404'),
      meta: {
        // tags for router
        both: true,
      },
    },
  ],
});
