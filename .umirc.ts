import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/books/:id', component: '@/pages/books/index' },
      ]
    },
  ],
  fastRefresh: {},
  plugins: ['@alitajs/keep-alive'],
  keepalive: ['/books/:id']
});
