import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './store/store'
import Routes from './routes'
import {api} from './api'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  api: api,
  render: h => h(App)
})
