import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/page/Hello'
import ProductList from '@/components/page/ProductList'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
		}, {
			path: '/home',
			name: 'Hello',
			component: Hello
		}, {
			path: '/product-list',
			name: 'ProductList',
			component: ProductList
		}
	]
})
