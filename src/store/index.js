import Vue from 'vue'
import Vuex from 'vuex'
import ShoppingCartModule from './modules/ShoppingCart'
import ProductModule from './modules/Product'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    ShoppingCartModule,
    ProductModule
  }
})