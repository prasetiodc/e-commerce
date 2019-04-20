import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';
import Products from './views/Products.vue';
import Carts from './views/Carts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/signin',
      name: 'signin',
      component: Signin,
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    }, {
      path: '/products',
      name: 'Products',
      component: Products,
    }, {
      path: '/carts',
      name: 'Carts',
      component: Carts,
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
