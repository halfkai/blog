import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    redirect: '/blog',
  },
  {
    path: '/blog',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'explorer',
        component: () => import('@/views/Explorer.vue'),
        props: (route) => ({ path: route.query.path }),
      },
    ],
  },
] as RouteRecordRaw[];
