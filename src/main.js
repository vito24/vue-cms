import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import getApi from './utils/api'

import 'iview/dist/styles/iview.css'    // 使用 CSS
import '../static/css/base.css'

Vue.use(iView);

// Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.prototype.$http = getApi;

router.beforeEach((to, from, next) => {
    if (store.getters.userInfo) {
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            iView.LoadingBar.start();
            window.document.title = to.meta.title || 'BOSS';
            next();
        }
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next({
                path: '/login'
            })
        }
    }
});

router.afterEach(route => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
	el: '#app',
	router,
    store,
	template: '<App/>',
	components: { App }
});
