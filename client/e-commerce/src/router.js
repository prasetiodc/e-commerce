import Vue from 'vue';
import Router from 'vue-router';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';
import Products from './views/Products.vue';
import addProduct from './views/addProduct.vue';
import Carts from './views/Carts.vue';
import Detail from './components/Detail.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    }, {
      path: '/signup',
      name: 'signup',
      component: Signup,
    }, {
      path: '/',
      name: 'products',
      component: Products,
      children: [
        {
          path: ':id/detail',
          name: 'detail',
          component: Detail,
          // params: {id},
        },
      ],
    }, {
      path: '/addProduct',
      name: 'addProduct',
      component: addProduct,
    }, {
      path: '/carts',
      name: 'carts',
      component: Carts,
    }
  ],
});

export default router