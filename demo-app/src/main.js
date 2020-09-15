import Vue from 'vue'
import App from './App.vue'
import router from './router'
import sweetalert from 'vue-sweetalert2'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(sweetalert);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
