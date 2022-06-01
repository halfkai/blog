export default [
  { path: '/blog/', component: () => import('@/views/Home/index.vue') },
  { path: '/blog/about', component: () => import('@/views/About/index.vue') },
];
