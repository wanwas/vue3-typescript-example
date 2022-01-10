import { createWebHistory, createRouter } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/main.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;