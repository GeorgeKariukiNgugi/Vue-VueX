import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../components/ShoppingCart/ShoppingCartComponentCoalation.vue'
import SingleProducts from '../components/products/singleProduct.vue'
import Profile from '../components/Profile/profile.vue'

Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  // ! This is the route to be used to get a single Product.
  {
    path: '/products/:id',
    name: 'SingleProduct',
    component: SingleProducts,
    props:true
  },
  // ! this route is used to get the form for the Profile.
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
