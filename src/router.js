import vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store/index';

import Home from './view/home.vue';
import Login from './view/login.vue';
import Register from './view/register.vue';
import History from './view/history.vue';

vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  store,
});
export default router;
