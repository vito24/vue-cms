import Vue from 'vue'
import Router from 'vue-router'
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
            path: '/home', //首页
            component: Parent,
            children: [
                {
                    path: '/',
                    redirect: '/home/index'
                }, {
                    path: 'index',
                    component: (resolve) => require(['@/components/page/Home'], resolve),
                    meta: {
                        title: '概况'
                    }
                }, {
                    path: 'feedbacks',
                    component: (resolve) => require(['@/components/page/Home'], resolve),
                    meta: {
                        title: '意见反馈'
                    }
                }
            ]
        }, {
            path: '/product',  //商品
            component: Parent,
            children: [
                {
                    path: '/',
                    redirect: '/product/product-list'
                }, {
                    path: 'product-list',
                    component: (resolve) => require(['@/components/page/product/ProductList'], resolve),
                    meta: {
                        title: '所有商品'
                    }
                }, {
                    path: 'product-new',
                    component: (resolve) => require(['@/components/page/product/ProductNew'], resolve),
                    meta: {
                        title: '新增商品'
                    }
                }, {
                    path: 'cargo-category-manage',
                    component: (resolve) => require(['@/components/page/product/CargoCategoryManage'], resolve),
                    meta: {
                        title: '货物分类'
                    }
                }, {
                    path: 'cargo-manage',
                    component: (resolve) => require(['@/components/page/product/CargoManage'], resolve),
                    meta: {
                        title: '货物管理'
                    }
                }, {
                    path: 'cargo-add',
                    component: (resolve) => require(['@/components/page/product/CargoAdd'], resolve),
                    meta: {
                        title: '新增货物'
                    }
                }
            ]
        }, {
            path: '/404',
            component: (resolve) => require(['@/components/page/404'], resolve)
        }, {
            path: '*',
            redirect: '/404'
        }
    ]
})
