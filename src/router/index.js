import { createRouter, createWebHistory } from "vue-router";

const routes = [{
    path: '/users',
    name: 'users',
    component: () => import('./../pages/Users/Index.vue'),
},{
    path: '/users/:id',
    name: 'user.show',
    component: () => import('./../pages/Users/Show.vue'),
},];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;