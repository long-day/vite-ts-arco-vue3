import type { RouteRecordRaw } from 'vue-router';

const Login: RouteRecordRaw = {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login1.vue'),
    meta: {
      title:"登录账号",
      requiresAuth: false,
    }
}

export default Login;