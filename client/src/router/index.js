import Vue from 'vue';
import Router from 'vue-router';
import register from '../components/register';
import login from '../components/login';
import recentPost from '../components/recentPost';
import postArticle from '../components/postArticle';
// import articleDetail from '../components/articleDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/recent-post',
      name: 'recent-post',
      component: recentPost,
    },
    {
      path: '/post',
      name: 'post',
      component: postArticle,
    },
    // {
    //   path: '/article/:id',
    //   name: 'article-detail',
    //   component: articleDetail,
    // },
  ],
});
