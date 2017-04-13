import Vue from 'vue'
import Router from 'vue-router'

//首页
import Home from '@/components/page/Home';

//商品
import ProductList from '@/components/page/product/ProductList' //所有商品
import ProductNew from '@/components/page/product/ProductNew'  //新增商品
import CargoCategoryManage from '@/components/page/product/CargoCategoryManage' //货物分类
import CargoManage from '@/components/page/product/CargoManage'  //货物管理
import CargoAdd from '@/components/page/product/CargoAdd'  //新增货物

Vue.use(Router);

const Parent = {
    template: '<router-view></router-view>'
};

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home/index'
        }, {
            path: '/home',
            component: Parent,
            children: [
                {
                    path: '/',
                    redirect: '/home/index'
                }, {
                    path: 'index',
                    component: Home
                }, {
                    path: 'feedbacks',
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
                }, {
                    path: 'cargo-category-manage',
                    component: CargoCategoryManage
                }, {
                    path: 'cargo-manage',
                    component: CargoManage
                }, {
                    path: 'cargo-add',
                    component: CargoAdd
                }
            ]
        }
    ]
})
