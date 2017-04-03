import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import ProductList from '@/components/page/ProductList'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home/home1'
		}, {
            path: '/home',
            redirect: '/home/home1'
        }, {
			path: '/home/home1',
			name: 'home1',
			component: Home
		}, {
            path: '/home/home2',
            name: 'home2',
            component: Home
        }, {
            path: '/product',
            redirect: '/product/product-list'
        }, {
			path: '/product/product-list',
			name: 'productList',
            component: ProductList
		}
	]
})
