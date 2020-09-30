import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/todo',
        component: _ => import('../views/todoList/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router