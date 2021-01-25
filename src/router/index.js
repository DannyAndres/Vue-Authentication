import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

Vue.use(Router);

const router = new Router({
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
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/dashboard/Home'),
      meta: {
        auth: true,
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.both)){
    next();
  } else {
    if (to.matched.some(record => record.meta.auth)) {
      // View require authentication -> | (auth user) => next | (not auth user) => redirect to login |
      let token = store.getters['authentication/token'];
      store.dispatch('authentication/validate', token)
        .then(() => next())
        .catch(() => next({ name: 'login' }));
    } else {
      // View does not require authentication -> | (auth user) => redirect to home | (not auth user) => next |
      let token = store.getters['authentication/token'];
      store.dispatch('authentication/validate', token)
        .then(() => {
          console.log('test');
          next({ name: 'home' })
        })
        .catch(() => next());
    }
  }
 
});

export default router;