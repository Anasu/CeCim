import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/soon',
    name: 'Soon',
    component: () => import(/* webpackChunkName: "soon" */ '../views/Soon.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/*',
    name: 'Not-Found',
    component: () => import(/* webpackChunkName: "*" */ '../views/NotFound.vue'),
    meta: {
      login: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let authRequired = to.matched.some(route => route.meta.login);
  if (store.state.islogged == false && authRequired) {
    
    next('login');
  } else {
    next();
  }
});

export default router
