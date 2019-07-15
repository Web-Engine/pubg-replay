import Vue from 'vue';
Vue.config.productionTip = false;

import store from './store/index';
import router from './router/index';

new Vue({
    store,
    router,
}).$mount('#app');
