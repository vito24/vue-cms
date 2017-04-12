import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-default/index.css'
import '../static/css/base.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
	el: '#app',
	router,
    store,
	template: '<App/>',
	components: { App }
});
