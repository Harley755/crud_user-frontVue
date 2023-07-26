import { createRouter, createWebHistory } from "vue-router";
import Edit from '../pages/Users/Edit.vue';
import Show from '../pages/Users/Show.vue';

const routes = [{
    path: '/',
    name: 'index',
    component: Index,
},{
    path: '/users',
    name: 'users.index',
    component: () => import("../pages/Users/Index.vue"),
},{
    path: '/users/:id',
    name: 'users.show',       
    component: Show,
},{
    path: '/users/:id/edit',
    name: 'users.edit',       
    component: Edit,
},
{
    path: '/:pathMatch(.*)*',
    name: 'notFound',       
    component: Edit,
},];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;