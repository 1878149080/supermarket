import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import 'amfe-flexible'
import store from './store/index'
// import Router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
