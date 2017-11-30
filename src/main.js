// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/stylus/index.styl';
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  loading: require('common/image/logo.png')
});

Vue.config.productionTip = false;
fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
});
