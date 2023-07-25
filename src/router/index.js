import { createRouter, createWebHistory } from "vue-router";
import Index from '../pages/Users/Index.vue';
import Edit from '../pages/Users/Edit.vue';
import Show from '../pages/Users/Show.vue';

const routes = [{
    path: '/',
    name: 'index',
    component: Index,
},{
    path: '/users',
    name: 'users.index',
    component: Index,
},{
    path: '/users/:id',
    name: 'users.show',       
    component: Show,
},,{
    path: '/users/:id/edit',
    name: 'users.edit',       
    component: Edit,
},];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;