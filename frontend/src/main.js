import Vue from 'vue';
import store from './store/index';
import router from './router/index';

import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    vuetify,
    router,
}).$mount('#app');
