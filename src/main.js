import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import GasPage from './components/GasPage'
import ElectricPage from './components/ElectricPage'
import FlashMessage from '@smartweb/vue-flash-message';
import HomePage from './components/HomePage'

Vue.use(VueRouter)
Vue.use(FlashMessage);

Vue.config.productionTip = false

const router = new VueRouter({
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/gas', component: GasPage },
		{ path: '/electric', component: ElectricPage }
	]
})

new Vue({
	router: router,
	render: h => h(App),
}).$mount('#app')
