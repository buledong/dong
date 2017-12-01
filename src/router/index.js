import Vue from 'vue';
import Router from 'vue-router';
import Neihan from 'components/neihan/neihan';
import Image from 'components/image/image';
import Joke from 'components/joke/joke';
import Recommend from 'components/recommend/recommend';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/neihan'
  }, {
    path: '/neihan',
    component: Neihan
  }, {
    path: '/image',
    component: Image
  }, {
    path: '/joke',
    component: Joke
  }, {
    path: '/recommend',
    component: Recommend
  }]
});
