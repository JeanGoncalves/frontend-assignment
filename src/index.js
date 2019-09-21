import 'Styles/main.scss';
import router from 'Router';
import Vue from 'vue';

new Vue({
  render: h => h('router-view'),
  router,
  el: '#app'
});
