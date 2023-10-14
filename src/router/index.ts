import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import { allRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
  scrollBehavior() {
    return { top: 0 };
  },
});


router.beforeEach((to, _, next) => {
   // 全局路由钩子 前置
  if (to.meta.title) {
    document.title = to.meta.title+'';
  } else {
    // 如果页面没有附件页面标题值,则采用默认值.
    document.title = "(●'◡'●)标题跑丢了···";
  }
  next();
});

router.afterEach((to) => {
  // 全局路由钩子 后置
  console.log(to.fullPath);
});

export default router;
