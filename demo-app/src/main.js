import Vue from 'vue'
import App from './App.vue'
import router from './router'
import sweetalert from 'vue-sweetalert2'

Vue.config.productionTip = false
Vue.use(sweetalert);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
