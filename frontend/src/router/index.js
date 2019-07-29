import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '../pages/IndexPage.vue';
import ReplayPage from "../pages/ReplayPage";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/replay',
            component: ReplayPage,
        },
    ],
});

export default router;
