import Vue from 'vue';
import Router from 'vue-router';
import Video from 'components/video/video';
import Image from 'components/image/image';
import Joke from 'components/joke/joke';
import Recommend from 'components/recommend/recommend';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/video'
  }, {
    path: '/video',
    component: Video
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
