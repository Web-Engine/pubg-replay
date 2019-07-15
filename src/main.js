import Vue from 'vue';
import Vuex from 'vuex'

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);

let array = [
    [ 1, 2, 3 ],
];

new Vue({
    render: h => h(App),
    array,
}).$mount('#app');
