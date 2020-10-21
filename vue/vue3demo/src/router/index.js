import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/toRefs',
        component: _ => import('../views/toRefs/index.vue')
    },
    {
        path: '/todo',
        component: _ => import('../views/todoList/index.vue')
    },
    {
        path: '/functionComponent',
        component: _ => import('../views/functionComponent/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router