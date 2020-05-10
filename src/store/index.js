import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/Product';
import cart from './modules/ShoppingCart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,cart
  }
})
