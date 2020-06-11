import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    {
      path: '/',
      component: '@/pages/index'
    }, 
  ],
  title:'MyUmi',
  favicon: 'http://img.souche.com/f2e/b479c204ffe8840359234a6a87624a59.png',
});
