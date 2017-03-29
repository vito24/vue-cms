import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import ProductList from '@/components/page/ProductList'

import ViSidebar from '@/components/common/Sidebar'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
		}, {
			path: '/home',
			name: 'home',
			components: {
                sidebar: ViSidebar,
                default: Home
            }
		}, {
			path: '/product-list',
			name: 'productList',
            components: {
                sidebar: ViSidebar,
                default: ProductList
            }
		}
	]
})
