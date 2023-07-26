import { createRouter, createWebHistory } from "vue-router";
import Index from '../pages/Users/Index.vue';

const routes = [{
    path: '/',
    name: 'index',
    component: Index,
},];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;