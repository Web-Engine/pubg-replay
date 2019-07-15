import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

let array = [
    [ 1, 2, 3 ],
];

import store from './store/index';
import router from './router/index';

new Vue({
    render: h => h(App),
    array,
    store,
    router,
}).$mount('#app');