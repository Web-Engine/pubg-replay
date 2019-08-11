import Vue from 'vue';
import store from './store/index';
import router from './router/index';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import VJsoneditor from 'v-jsoneditor/src/index'
import ResizeSplitPane from 'vue-resize-split-pane'

Vue.use(VJsoneditor);
Vue.component('split-pane', ResizeSplitPane);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    vuetify,
    router,
}).$mount('#app');
