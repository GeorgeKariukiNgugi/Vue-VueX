import Vue from 'vue';
import App from './App.vue';
// import Vuex from 'vuex'
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.config.productionTip = false
Vue.use(VueSweetalert2);
// Vue.use(Vuex);
import VueSwal from 'vue-swal'
Vue.use(VueSwal)
new Vue({
  store,  
  vuetify,
  render: h => h(App)
}).$mount('#app')
