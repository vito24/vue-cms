import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '@/components/page/Home1'
import ProductList from '@/components/page/ProductList'

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
                    component: Home1
                }, {
                    path: 'home2',
                    component: Home1
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
                }
            ]
        }
	]
})
