import Vue from 'vue';
import VueWait from 'vue-wait';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@/assets/css/tailwind.css';
import '@/plugins';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  wait: new VueWait({}),
  render: h => h(App),
}).$mount('#app');
