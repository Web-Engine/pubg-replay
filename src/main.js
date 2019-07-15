import Vue from 'vue';
import store from './store/index';
import router from './router/index';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');
