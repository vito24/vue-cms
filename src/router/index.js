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
			redirect: '/home/home1'
		}, {
            path: '/home',
            redirect: '/home/home1'
        }, {
			path: '/home/home1',
			name: 'home1',
			components: {
                sidebar: ViSidebar,
                default: Home
            }
		}, {
            path: '/home/home2',
            name: 'home2',
            components: {
                sidebar: ViSidebar,
                default: Home
            }
        }, {
            path: '/product',
            redirect: '/product/product-list'
        }, {
			path: '/product/product-list',
			name: 'productList',
            components: {
                sidebar: ViSidebar,
                default: ProductList
            }
		}
	]
})
