import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Home'
import ProductList from '@/components/page/product/ProductList'
import ProductNew from '@/components/page/product/ProductNew'

Vue.use(Router);

const Parent = {
    template: '<router-view></router-view>'
};

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home/home1'
		}, {
	        path: '/home',
            component: Parent,
            children: [
                {
                    path: '/',
                    redirect: '/home/home1'
                }, {
                    path: 'home1',
                    component: Home
                }, {
                    path: 'home2',
                    component: Home
                }
            ]
        }, {
            path: '/product',
            component: Parent,
            children: [
                {
                    path: '/',
                    redirect: '/product/product-list'
                }, {
                    path: 'product-list',
                    component: ProductList
                }, {
                    path: 'product-new',
                    component: ProductNew
                }
            ]
        }
	]
})
