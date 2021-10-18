import Home from '@/views/Home.vue';

export default [
  {
    path: '/',
    redirect: '/blog',
  },
  {
    path: '/blog',
    component: Home,
  },
];
