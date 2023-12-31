import type { RouteRecordRaw } from 'vue-router';

const NotFound: RouteRecordRaw = {
    name: 'NotFound',
    path: '/not-found',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title:"未找到页面",
      requiresAuth: false,
    }
}

export default NotFound;