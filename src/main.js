import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

let array = [
    [ 1, 2, 3 ],
];

new Vue({
    render: h => h(App),
    array,
}).$mount('#app');
