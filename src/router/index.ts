import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/Home/index.vue') },
    { path: '/about', component: () => import('@/views/About/index.vue') },
  ],
});

export default router;
