import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'article-feed',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "article-feed" */ '@/views/ArticleFeed.vue'),
    },
    {
      path: '/article',
      name: 'article-detail',
      component: () => import(/* webpackChunkName: "article-detail" */ '@/views/ArticleDetail.vue'),
    },
  ],
});
