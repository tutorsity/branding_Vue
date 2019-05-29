import Vue from 'vue';
import Router from 'vue-router';
import Home from './business-components/home/views/home.vue';
import Training from './business-components/training/views/training.vue';
import Course from './business-components/course/views/course.vue';
import Career from './business-components/career/views/career.vue';
import About from './business-components/about/views/about.vue';
import Contact from './business-components/contact/views/contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/training',
      name: 'training',
      component: Training,
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
    },
    {
      path: '/career',
      name: 'career',
      component: Career,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
    path: '/about',
    name: 'about',
    component: About,
    },
    // {
    //   path: '/training',
    //   name: 'training',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "training" */ './business-components/training/views/training.vue')
    // },
  ],
});
