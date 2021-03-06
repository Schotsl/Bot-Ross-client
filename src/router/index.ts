import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Habits',
    component: () => import(/* webpackChunkName: "about" */ '../views/Habits.vue'),
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "about" */ '../views/Schedule.vue'),
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () => import(/* webpackChunkName: "about" */ '../views/Finance.vue'),
  },
  {
    path: '/database',
    name: 'Database',
    component: () => import(/* webpackChunkName: "about" */ '../views/Database.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
